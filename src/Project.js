import { Card, Grid, Typography } from '@mui/material'
import { cyan, grey } from '@mui/material/colors'
import React from 'react'

export default function Project() {
    return (
        <Grid container spacing={1}>
            <Grid item md={6} sm={12} xs={12}>
                <Card
                    elevation={3}
                    sx={{ height: 201, mt: 1, py: 2, borderRadius: 3 }}
                >
                    <Typography
                        fontFamily='cursive' variant='h4' align='center'
                        sx={{ fontSize: 27, color: cyan[700] }}
                    >
                        <strong> My Portfolio Site</strong>
                    </Typography>

                    <Typography align='center'>
                        <p> This Portfolio Site is made using : </p>
                        <b style={{ color: grey[900] }}>React.js</b>
                        <br />
                        {"&"}
                        <br />
                        <b style={{ color: grey[900] }}>Material UI</b>
                    </Typography>
                </Card>
            </Grid >
            <Grid item md={6} sm={12} xs={12}>
                <Card
                    elevation={4}
                    sx={{ height: 201, mt: { md: 1 }, mb: 1, py: 3, borderRadius: 3 }}
                >
                    <Typography
                        fontFamily='cursive' variant='h4' align='center'
                        sx={{ fontSize: 27, pb: 2, color: cyan[700] }}
                    >
                        <strong> Notes App </strong>
                    </Typography>

                    <Typography align='center'>
                        This is an Android App made using <b>Kotlin.</b>
                        <br />
                        I'm currently working on this Project.
                    </Typography>
                </Card>
            </Grid >
        </Grid >
    )
}
