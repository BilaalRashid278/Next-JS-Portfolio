import React,{memo} from 'react'
import styles from '@/app/css/admin.module.css';

interface CommponentProps{
    width : number;
}



const Panel = ({width} : CommponentProps) : React.JSX.Element => {
  return (
    <div className={`hidden lg:block  ${styles.commonH}`} style={{width : `${width}px`}}>
      
    </div>
  )
}

export default memo(Panel)
