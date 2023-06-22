import { Button, Card, CardContent, CardHeader, Container, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    function inputChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }
    useEffect(() => {
        console.log(form);
    }, [form.name])
    return (
        <Container maxWidth='sm' >
            <Card>
                <CardContent>
                    <Typography variant='h5' textAlign={'left'} fontWeight={'bold'}>Login</Typography>
                    <TextField value={form.email} onChange={inputChange} name='email' fullWidth label="Email" margin='normal' variant="filled" />
                    <TextField value={form.password} onChange={inputChange} name='password' fullWidth label="Password" type='password' margin='normal' variant="filled" />
                    <Button sx={{ my: 1, }} color='secondary' variant='contained'>Login</Button>
                    <small><p>I dont have account <Link to={'/register'}>Register.</Link></p></small>
                </CardContent>
            </Card>
        </Container>
    )
}
