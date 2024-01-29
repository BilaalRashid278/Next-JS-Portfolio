'use client'
import React from 'react'
import { Button } from 'antd'
import { ButtonSize, ButtonType } from 'antd/es/button';
import Link from 'next/link';



interface ButtonProps {
    type? : ButtonType,
    size? : ButtonSize,
    title : string,
    isLink : boolean,
    url ? : string,
    onClick? : () => void
}


export const CustomButton : React.FC<ButtonProps> = ({type = 'text',size = 'middle',title,onClick,isLink = false,url = '/'} : ButtonProps) : React.ReactNode => {
    return <Button 
    type={type}
    size={size}
    onClick={onClick}
    >
      {
        isLink ? <Link href={url}>{title}</Link> : (<React.Fragment>{title}</React.Fragment>)
      }
    </Button>
};