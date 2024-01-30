import React from 'react';
import Link from 'next/link';
import { Flex } from 'antd'
import { useSelector } from 'react-redux';
import { AntCustomButton,MuiCustomButton } from './Components';



const Navbar: React.FC = () => {
    const isLogin = useSelector<any>(state => state.GlobalSlice.isLogin);
    return (
        <>
            <Link href='/'>
                <h1 className='font-bold text-2xl'>Logo</h1>
            </Link>
            {isLogin == false && <Flex align='center' gap={5}>
                <MuiCustomButton type='button' size='medium' title='Log In' isLink={true} url='/login'/>
                <span className='text-xs'>OR</span>
                <MuiCustomButton type='button' size='medium' title='Sign Up' isLink={true} url='/register' />
            </Flex>}
        </>
    )
}

export default Navbar
