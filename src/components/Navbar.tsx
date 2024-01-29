import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Flex, Button } from 'antd'



const Navbar: React.FC = () => {
    return (
        <>
            <Link href='/'>
                <h1 className='font-bold text-2xl'>Logo</h1>
            </Link>
            <Flex align='center' gap={20}>
                <Button type='text' size='middle'>
                    About
                </Button>
                <Button type='text' size='middle'>
                    About
                </Button>
                <Button type='text' size='middle'>
                    Category
                </Button>
            </Flex>
        </>
    )
}

export default Navbar
