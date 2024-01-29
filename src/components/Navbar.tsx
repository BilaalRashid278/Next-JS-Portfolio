import React from 'react';
import Link from 'next/link';
import { Flex } from 'antd'
import { useSelector } from 'react-redux';
import { CustomButton } from './Components';



const Navbar: React.FC = () => {
    const isLogin = useSelector<any>(state => state.GlobalSlice.isLogin);
    return (
        <>
            <Link href='/'>
                <h1 className='font-bold text-2xl'>Logo</h1>
            </Link>
            {isLogin == false && <Flex align='center' gap={20}>
                <CustomButton type='text' size='middle' title='SignIn' isLink={true} url='/login'/>
            </Flex>}
        </>
    )
}

export default Navbar
