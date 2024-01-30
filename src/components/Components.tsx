'use client'
import React from 'react'
import { Button } from 'antd'
import { ButtonSize, ButtonType } from 'antd/es/button';
import {Button as MuiButton} from '@mui/material';
import {OverridableStringUnion,} from '@mui/types';

import Link from 'next/link';



interface ButtonProps {
    type?: ButtonType,
    size?: ButtonSize,
    title: string,
    isLink: boolean,
    url?: string,
    onClick?: () => void
}
interface MuiButtonProps {
    type?: OverridableStringUnion<'button' | 'submit'>,
    variant? : OverridableStringUnion<'text' | 'outlined' | 'contained'>,
    size?: OverridableStringUnion<'small' | 'medium' | 'large'>,
    title: string,
    isLink: boolean,
    url?: string,
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'>
    style? : React.CSSProperties,
    onClick?: () => void
}


export const AntCustomButton: React.FC<ButtonProps> = ({ type = 'text', size = 'middle', title, onClick, isLink = false, url = '/' }: ButtonProps): React.ReactNode => {
    return isLink ? (
        <Link href={url}>
            <Button
                type={type}
                size={size}
                onClick={onClick}
            >
                {title}
            </Button>
        </Link>
    ) : (
        <Button
            type={type}
            size={size}
            onClick={onClick}
        >
            {title}
        </Button>
    )
};
export const MuiCustomButton: React.FC<MuiButtonProps> = ({ variant = 'text', size = 'medium', title, onClick, isLink = false, url = '/',type = 'button',color,style }: MuiButtonProps): React.ReactNode => {
    return isLink ? (
        <Link href={url}>
            <MuiButton
                style={style}
                color={color}
                variant={variant}
                type={type}
                size={size}
                onClick={onClick}
            >
                {title}
            </MuiButton>
        </Link>
    ) : (
        <MuiButton
            style={style}
            type={type}
            size={size}
            onClick={onClick}
        >
            {title}
        </MuiButton>
    )
};