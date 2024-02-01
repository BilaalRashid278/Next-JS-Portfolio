'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import ChangeLogo from './components/ChangeLogo';

const AdminPanel = () => {
  return (
    <Box component={'div'} display={'flex'} gap={2} flexWrap={'wrap'} px={3} py={3} justifyContent={'center'}>
      <ChangeLogo/>
    </Box>
  )
}

export default AdminPanel;
