import { Card, CardHeader, CardContent, Avatar } from '@mui/material'
import React from 'react'

export default function DashboardIndex() {
    return (
        <>
            <Card>
                <CardHeader title={"Dashboard"} subheader={"2022-2-3 monday"} avatar={<Avatar sizes={5} src={"https://th.bing.com/th/id/OIP.JFFvVxqETnP44eSu7bbWPQHaHa?w=221&h=220&c=7&r=0&o=5&pid=1.7"} />} />
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique sint, iure iusto voluptas distinctio temporibus laudantium consequuntur sapiente error sed adipisci magni provident tempora perferendis corrupti molestiae accusamus praesentium?</p>
                </CardContent>
            </Card>
        </>
    )
}
