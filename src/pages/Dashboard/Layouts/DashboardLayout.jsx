import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from 'react';



function SidebarList(props) {
    const links = [
        { text: "Dashboard", icon: <DashboardIcon /> },
        { text: "Users", icon: <GroupIcon /> }
    ];
    return (
        <>
            <List>
                {links.map((link, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton sx={{px:4}}>
                            <ListItemIcon >
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);
    return (
        <Box>
            <AppBar position='relative' >
                <Toolbar>
                    {/* toggle sidebar  */}
                    <IconButton
                        onClick={() => (setSidebarOpen(!sidebarOpen))}
                        sx={{ color: 'white', display: { xs: 'none', sm: 'none', md: 'flex' } }}
                    >
                        <MenuIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                    {/* end toggle sidebar  */}
                    {/* toggle sidebar for mobile  */}
                    <IconButton
                        onClick={() => (setSidebarOpenMobile(!sidebarOpenMobile))}
                        sx={{ color: 'white', display: { xs: 'flex', sm: 'flex', md: 'none' } }}
                    >
                        <MenuIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                    {/* end toggle sidebar for mobile  */}
                </Toolbar>
            </AppBar>
            <Box sx={{ height: '100vh' }}>
                <Stack direction={'row'} sx={{ height: '100%' }}>
                    {/* sidebar */}
                    <Box sx={{ bgcolor: "white", width: 'auto', display: { xs: 'none', sm: 'none', md: (sidebarOpen ? 'block' : 'none') } }}>
                        <SidebarList />
                    </Box>
                    {/* drawer */}
                    <Drawer PaperProps={{ sx: { width: '50%' } }} sx={{ display: { md: 'none' } }} open={sidebarOpenMobile} onClose={() => setSidebarOpenMobile(!sidebarOpenMobile)}>
                        <SidebarList />
                    </Drawer>
                    {/* end drawer */}
                    {/* end sidebar */}
                    <Box sx={{ p: 2, flexGrow: 1, bgcolor: ' ', }}>
                        <Outlet />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
