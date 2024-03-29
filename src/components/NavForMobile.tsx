import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { RiMenu3Line } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { GiInnerSelf } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import { NavItems } from '@/utils/constant';
import Link from 'next/link';


const NavIconsArray = [<FaHome key={0} />, <GiInnerSelf key={1} />, <GoProjectSymlink key={2} />, <TiContacts key={3} />];
export default function NavMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Links">
                    <IconButton
                        onClick={handleClick}
                        size="medium"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <RiMenu3Line color='black' />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {NavItems?.map((item, index) => {
                    return (
                        <Link href={item?.url} key={index}>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    {NavIconsArray[index]}
                                </ListItemIcon>
                                {item?.name}
                            </MenuItem>
                        </Link>
                    )
                })}
            </Menu>
        </React.Fragment>
    );
}