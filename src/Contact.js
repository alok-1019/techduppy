import { Button, Card, Typography } from '@mui/material'
import { blue,grey, orange } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'

export default function Contact() {
    return (
        <Box>
            <Card
                elevation={4}
                sx={{
                    my: 1,
                    py: 3,
                    pl: 4,
                    borderRadius: 4,
                }}
            >
                <Typography fontSize='large' >
                    Follow me on:
                </Typography>
                <br />
                <Button
                    variant='contained' 
                    elevatio  = '6'
                    size='small'
                    href="https://twitter.com/alok10376"
                    sx={{color:'white', bgcolor: blue[700] ,borderRadius:2.5}}
                >
                    Twitter
                </Button>
                <br />
                <br />
                <Button
                    variant='contained' 
                    color='inherit'
                    elevatio  = '6'
                    size='small'
                    href="https://github.com/alok-1019"
                    sx={{color: 'white', bgcolor: grey[800] ,borderRadius:2.5}}
                >
                    Github
                </Button>
                <br />
                <br />
                <Button
                    variant='contained' 
                    color='inherit'
                    elevatio  = '6'
                    size='small'
                    href="https://www.instagram.com/alok1019/"
                    sx={{ color: 'black', bgcolor: orange[400] ,borderRadius:2.5}}
                >
                   Instagram
                </Button>
            </Card>
        </Box >

    )
}
