import * as React from 'react';
import Link from 'next/link';
import { Flex } from 'antd'
import { useSelector } from 'react-redux';
import { AntCustomButton } from './Components';
import { NavItems } from '@/utils/constant';
import { Grid, } from '@mui/material';
import Image from 'next/image';
import LogoImg from '@/assets/favicon.png';
import NavMenu from './NavForMobile';
import { colors_1 } from "@/utils/constant";




const Navbar: React.FC = () => {
    const isLogin = useSelector<any>(state => state.GlobalSlice.isLogin);
    return (
        <Flex className='w-[100%]'>
            <Grid container spacing={2}>
                <Grid item xs={3} sm={2} className='flex items-center gap-2'>
                    <div className='block md:hidden'>
                        <NavMenu />
                    </div>
                    <Link href='/' className='flex items-center gap-1'>
                        <Image src={LogoImg} width={28} height={28} alt='Portfolio' />
                        <i className='font-thin text-xl'>Bilal</i>
                    </Link>
                </Grid>
                <Grid item xs={9} sm={10} className='flex justify-end md:justify-between px-3'>
                    <div className='gap-5 hidden md:flex'>
                        {NavItems?.map((NavItem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <AntCustomButton style={{color : colors_1}} isLink={true} title={NavItem?.name} size={'small'} url={NavItem?.url} type='link'/>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className='flex items-center'>
                        {isLogin == false && <Flex align='center' gap={5}>
                            <AntCustomButton type='default' size='small' title='Log In' isLink={true} url='/login'/>
                            <span className='text-xs'>OR</span>
                            <AntCustomButton type='default' size='small' title='Sign Up' isLink={true} url='/register'/>
                        </Flex>}
                    </div>
                </Grid>
            </Grid>
        </Flex>
    )
}

export default Navbar
