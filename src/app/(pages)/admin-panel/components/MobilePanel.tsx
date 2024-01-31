import * as React from 'react'
import {memo} from 'react';
import styles from '@/app/css/admin.module.css';
import { IconButton } from '@mui/material';
import { RxCross2 } from "react-icons/rx";
import { colors_1 } from '@/utils/constant';


interface CommponentProps{
    width : number;
    transform : number,
    handleTransform : () => void
}


const MobilePanel = ({width,transform,handleTransform} : CommponentProps) : React.JSX.Element => {
  return (
    <div className={`block lg:hidden ${styles.mobileH} ${styles.commonH}`} 
    style={{
        width : `${width - 50}px`,
        position : 'absolute',
        left : `${transform}px`,
        transition : 'left 0.5s ease',
        backgroundColor : colors_1
    }}
    
    >
      <div className='flex justify-end px-2 py-2'>
        <IconButton title='Admin Menu' onClick={handleTransform}  size='small'>
            <RxCross2 color='white'/>
        </IconButton>
      </div>
    </div>
  )
}

export default memo(MobilePanel);
