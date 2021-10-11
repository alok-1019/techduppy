import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import Sidebar from './Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import About from "./About";
import Project from "./Project";
import { Switch, Route } from "react-router-dom";
import Footer from './Footer';
import Box from '@mui/system/Box';
import Article from "./Article";
import Contact from './Contact';


const sections = [
    { title: 'About me', url: '/about' },
    { title: 'Project', url: '/project' },
    { title: 'Articles', url: '/articles' },
]

const theme = createTheme();

export default function Blog() {
    return (
        <Box
            sx={{
                ml: 1,
                mr: 1,
                maxWidth:'100%',
                
            }}
        >
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header title="Techduppy" sections={sections} />
            <Box
                sx={{
                    marginTop: 2,
                }}
            >
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/project" component={Project} />
                    <Route exact path="/articles" component={Article} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>

                <Footer
                    title="Designed by Alok"
                    description="Madness for tech" />
            </Box>

            </ThemeProvider>
        </Box>
    );
}