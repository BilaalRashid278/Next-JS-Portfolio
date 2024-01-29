import React from 'react';
import Link from 'next/link';
import { Flex, Button } from 'antd'
const Navbar: React.FC = () => {
    return (
        <>
            <Link href='/'>
                <h1 className='font-bold text-2xl'>Logo</h1>
            </Link>
            <Flex align='center' gap={20}>
                <Button type='default' size='large'>
                    Home
                </Button>
                <Button type='default' size='large'>
                    About
                </Button>
                <Button type='default' size='large'>
                    Category
                </Button>
            </Flex>
        </>
    )
}

export default Navbar
