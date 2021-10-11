import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import alok from "./alok.jpg";
import photo from "./photo.jpg";

export default function About() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                // justifyContent="center"
                spacing={1}
            // direction="row-reverse"
            >

                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            // float: 'right'
                            mt: 0.2,
                            mx: 'auto',
                            maxHeight: 150,
                            minHeight: 150,
                            minWidth: 260,
                            maxWidth: 260,
                            border: 0.1,
                            borderBottomWidth: 8,
                            borderRadius: 11,
                            boxShadow: 10,
                            borderBottomColor: 'red',
                            borderTopColor: 'white',
                    
                            py: 3,
                            px: 2
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
                            mt: 2,
                            height: 483,
                            border: 0.1,
                            borderRadius: 3,
                            boxShadow: 5,
                            borderColor: 'white',
                            py: 4,
                            px: 4,
                        }}
                    >
                        <Typography variant="body1" fontSize={16} >
                            I am a student at Maharana Pratap Engineering College, pursuing Computer Science and Engineering.
                            <br />
                            <br />
                            I am interested in <strong>Web development</strong>, <b>Android Development</b> & <strong>Artificial Intelligence.</strong>
                            <br />
                            I work well under pressure and can handle pressure very well.
                            <br />
                            I like to play Volley Ball, Chess and video games in my spare time.
                            <br />
                            <br />
                            I made this site using ReactJs and Material UI. This is my first web project.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            mx: 'auto',
                            height: 650,
                            border: 0.1,
                            borderRadius: 3,
                            boxShadow: 4,
                            borderColor: 'white',
                            py: 4,
                            px: 4,
                            backgroundImage: `url(${photo})`,
                            backgroundSize: 'cover'

                        }}
                    >
                    </Box>
                </Grid>


            </Grid >
        </Box >
    );


};
