import React, { ChangeEventHandler, useState } from 'react'
import Card from './Card';
import { Input, Divider } from 'antd';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { getFirestore } from 'firebase/firestore';
import app from '@/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';




const ChangeLogo = () => {
    const db = getFirestore(app);
    const [SelectImg, setImg] = useState<boolean>(true);
    const [SelectName, setName] = useState<boolean>(true);
    const [SelectImgFile,setSelectFile] = useState<any | undefined>(undefined);

    const isSubmit = async () => {
        if (SelectImg == false) {
            console.log(SelectImgFile[0]);
            try {
                const result = await addDoc(collection(db, 'admin'), { logo: 'Change Logo'});
                console.log(result);
            } catch (error) {
                console.log(error);
                // throw new Error('Data not submitted');
            }
        } else if (SelectName == false) {
            console.log(SelectName, 'SelectName');
        }
    };
    const handleImageSubmit : ChangeEventHandler<HTMLInputElement> = (e) => {
        setSelectFile(e.target.files);
    }
    return (
        <Card
            heading='Change Logo'
            onClick={isSubmit}
        >
            <Box display='flex' flexDirection={'column'} mt={2}>
                <Input onChange={handleImageSubmit} placeholder='Logo Name' type='file' disabled={SelectImg} />
                <Divider style={{ fontSize: '0.5rem', margin: '0.5rem 0' }}>OR</Divider>
                <Input autoFocus={true} placeholder='Logo Name' disabled={SelectName} />
                <Box component='div' className='flex' mt={1}>
                    <FormGroup
                        row
                    >
                        <FormControlLabel onClick={() => {
                            setName(true);
                            setImg(false);
                        }} control={<Checkbox defaultChecked checked={SelectImg == true ? false : true} size='small' />} label="Image" />
                        <FormControlLabel onClick={() => {
                            setName(false);
                            setImg(true);
                        }} control={<Checkbox size='small' checked={SelectName == true ? false : true} />} label="Name" />
                    </FormGroup>
                </Box>
            </Box>
        </Card>
    )
}

export default ChangeLogo
