import React,{memo} from 'react'
import styles from '@/app/css/admin.module.css';
import { IconButton } from '@mui/material';
import { RxCross2 } from "react-icons/rx";

interface CommponentProps{
    width : number;
    transform : number,
    handleTransform : () => void
}


const MobilePanel = ({width,transform,handleTransform} : CommponentProps) : React.JSX.Element => {
  return (
    <div className={`block lg:hidden bg-white ${styles.mobileH} ${styles.commonH}`} 
    style={{
        width : `${width - 50}px`,
        position : 'absolute',
        left : `${transform}px`,
        transition : 'left 0.5s ease'
    }}
    
    >
      <div className='flex justify-end px-2 py-2'>
        <IconButton onClick={handleTransform}  size='small'>
            <RxCross2/>
        </IconButton>
      </div>
    </div>
  )
}

export default memo(MobilePanel);
