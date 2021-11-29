import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import alok from "./alok.jpg";
import { red, cyan } from '@mui/material/colors';

export default function About() {
    return (
        <Box sx={{ mb: 0.6 }}>
            <Grid container spacing={1}  >
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            mt: 1.3,
                            mx: 'auto',
                            maxHeight: 150,
                            minHeight: 150,
                            minWidth: 260,
                            maxWidth: 260,
                            border: 0.1,
                            borderBottomWidth: 8,
                            borderRadius: 11,
                            boxShadow: 10,
                            borderColor: 'yellow',
                            borderTopColor: 'white',
                            py: 3,
                            px: 2,
                        }}
                    >
                        <Typography align='center' variant='h5'>
                            Hi, I'm
                        </Typography>
                        <Typography align='center' variant='h3'>
                            Alok
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mx: 'auto',
                            mt: 1.5,
                            height: { md: 417 },
                            borderRadius: 3.5,
                            boxShadow: 5,
                            p:4,
                            backgroundColor: cyan[200],
                        }}
                    >
                        <Typography variant="body1"
                            sx={{
                                fontSize: { xs: 17, sm: 17, md: 19 },
                            }}
                        >
                            I am a student of Maharana Pratap Engineering College, pursuing Computer Science and Engineering.
                            <br />
                            <br />
                            I am interested in <strong>Web development</strong>, <b>Android Development</b> & <strong>Artificial Intelligence.</strong>
                            <br />
                            <br />
                            I work well under pressure and can handle pressure very well. I am good at learning things fast.
                            <br />
                            <br />
                            I like to play Volley Ball, Chess and video games in my spare time.
                            <br />
                            <br />
                            This Portfolio site is made using ReactJs and Material UI.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            bgcolor: red[700],
                            borderRadius: 3.5,
                            mt: { xs:0.2, md: 0.8 },
                            p: 2,
                            boxShadow: 4
                        }}
                    >
                        <Box
                            sx={{
                                mx: 'auto',
                                height: { xs: 370, sm: 600, md: 552},
                                borderRadius: 70,
                                boxShadow: 22,
                                backgroundImage: `url(${alok})`,
                                backgroundSize: 'cover'
                            }}
                        >
                        </Box>
                    </Box>
                </Grid>
            </Grid >
        </Box >
    );
};
