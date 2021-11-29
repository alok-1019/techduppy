import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Article() {
    return (
        <>
            <Box
                sx={{
                    my: 1.2,
                    mx: "auto",
                    maxHeight: 130,
                    minHeight: 130,
                    maxWidth: 450,
                    border: 0.1,
                    borderRadius: 3,
                    boxShadow: 5,
                    borderColor: 'white',
                    py: 5.1,
                    px: 5.4
                }}
            >
                <Typography variant='h5'>
                    I will publish articles soon.
                </Typography>
            </Box>
        </>
    )
}
