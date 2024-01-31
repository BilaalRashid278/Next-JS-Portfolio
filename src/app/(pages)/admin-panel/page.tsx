'use client'
import React, { useState,useCallback } from 'react'
import styles from '@/app/css/admin.module.css';
import Panel from './components/Panel';
import MobilePanel from './components/MobilePanel';
import { IconButton } from '@mui/material';
import { IoMenuOutline } from "react-icons/io5";


const AdminPanel = () => {
    const PanelCommonWidth: number = 300
    const [transform,setTransform] = useState<number>(-250);

    const handleTransform =useCallback(() => {
        setTransform(-250);
    },[transform]);
    return (
        <main className='w-[100%] flex h-[calc(100vh-55px)]'>
            <MobilePanel width={PanelCommonWidth} transform={transform} handleTransform={handleTransform}/>
            <Panel width={PanelCommonWidth} />
            <section className='w-[100%] relative'>
                <div className='block lg:hidden px-5 py-2'>
                    <IconButton onClick={() => setTransform(0)} size='medium'>
                        <IoMenuOutline/>
                    </IconButton>
                </div>
            </section>
        </main>
    )
}

export default AdminPanel;
