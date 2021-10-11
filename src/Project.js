import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Project() {
    return (
        <Box
            sx={{
                height: 531
            }}
        >
            <Box
                sx={{
                    mx: "auto",
                    minHeight: 180,
                    maxWidth: 450,
                    border: 0.1,
                    borderRadius: 11,
                    boxShadow: 5,
                    borderColor:'green',
                    py: 4,
                    px: 2.5
                }}
            >
                <Typography variant='h6' align='center'>
                    Currently I am working on :-
                    <br />
                    My Portfolio site
                    <br />
                     &
                    <br />
                    Android app development
                </Typography>
            </Box>

        </Box>

    )
}
