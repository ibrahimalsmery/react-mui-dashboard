import { Button, Card, CardContent, CardHeader, Container, FormHelperText, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function RegisterPage() {
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
        console.table(form);
    }, [form])
    return (
        <Container maxWidth='sm' >
            <Card>
                <CardContent>
                    <Typography variant='h5' textAlign={'left'} fontWeight={'bold'}>Register</Typography>
                    <TextField value={form.name} onChange={inputChange} name='name' fullWidth label="Name" margin='normal' variant="filled" />
                    <FormHelperText success>Name is required.</FormHelperText>
                    <TextField value={form.email} onChange={inputChange} name='email' fullWidth label="Email" margin='normal' variant="filled" />
                    <TextField value={form.password} onChange={inputChange} name='password' fullWidth label="Password" type='password' margin='normal' variant="filled" />
                    <Button sx={{ my: 1 }} color='success' variant='contained'>Register</Button>
                    <small><p>I already have account <Link to={'/login'}>Login.</Link></p></small>
                </CardContent>
            </Card>
        </Container>
    )
}
