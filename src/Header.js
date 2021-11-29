import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { cyan } from '@mui/material/colors';


function Header(props) {
  const { title } = props;
  function MouseOver(event) {
    event.target.style.color = 'green';
  }
  function MouseOut(event) {
    event.target.style.color = "black";
  }
  return (
    <React.Fragment>
      <Card
        variant="elevation" elevation={3}
        sx={{ mx: 0.3 }}
      >
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            noWrap
            sx={{ ml: 0.1, pt: 1.8, flex: 1, fontSize: 24, color: cyan[700], fontFamily:'fantasy' }}
          >
            <b>{title}</b>
          </Typography>

          <Typography sx={{ pt: 2 }} variant="button">
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant='contained'
                elevation='6'
                size='small'
                href="https://twitter.com/alok10376"
                sx={{ bgcolor: cyan[200], borderRadius: 2.5, color: 'black' }}
              >
                Contact
              </Button>
            </Link>
          </Typography>
        </Toolbar>

        <Toolbar
          component="nav"
          variant="dense"
          sx={{ mt: 2, mx: 0.58, justifyContent: 'space-between', overflowX: 'auto' }}
        >
          <Link
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            to="/about" style={{ textDecoration: 'none', color: 'black' }}>  About </Link>

          <Link style={{ textDecoration: 'none', color: 'black' }}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            to="/project"
          >
            Projects
          </Link>

          <Link
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            to="/articles" style={{ textDecoration: 'none', color: 'black' }}> Articles </Link>

        </Toolbar>
      </Card>
    </React.Fragment >
  );
}

export default Header;