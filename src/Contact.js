import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Contact() {
    return (
        <Box
            sx={{
                height: 531
            }}
        >
            <Card
                elevation={4}
                sx={{
                    py: 3,
                    pl: 4,
                    borderRadius: 4,

                }}
            >
                <Typography >
                    Follow me on :
                </Typography>
                <br />
                <Button href="https://twitter.com/alok10376"
                    sx={{
                        borderRadius: 4,
                        bgcolor: '#C3E7FF',
                        pt: 1
                    }}
                    color='inherit' variant="contained" size="small">
                    Twitter
                </Button>
                <br />
                <br />
                <Button href='https://github.com/alok-1019'
                    sx={{
                        borderRadius: 4,
                        bgcolor: '#C3E7FF',
                        pt: 1
                    }}
                    variant="contained" size="small" color='inherit'>
                    GitHub
                </Button>
                <br />
                <br />
                <Button href='https://www.instagram.com/alok1019'
                    sx={{
                        borderRadius: 4,
                        bgcolor: '#C3E7FF',
                        pt: 1
                    }}
                    color='inherit' variant="contained" size="small">
                    Instagram
                </Button>
            </Card>
        </Box>

    )
}
