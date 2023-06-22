import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <Button LinkComponent={Link} variant='text' color='primary' to='/'>Home page</Button>
            <Button LinkComponent={Link} variant='text' color='primary' to='login'>login page</Button>
            <Button LinkComponent={Link} variant='text' color='primary' to='register'>Register</Button>
            <Outlet />
        </>
    )
}
