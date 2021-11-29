import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Contact from './Contact';
import About from "./About";
import Project from "./Project";
import Article from "./Article";
import { Switch, Route } from "react-router-dom";
import Footer from './Footer';

const theme = createTheme();
export default function Portfolio() {
    return (
        <ThemeProvider theme={theme}>
            <div className='site'>
                <CssBaseline />
                <div>
                    <Header title="Techduppy" />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/project" component={Project} />
                        <Route exact path="/articles" component={Article} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </div>
                <Footer
                    title="Designed by Alok"
                    description="Madness for tech"
                />
            </div>
        </ThemeProvider>
    );
}