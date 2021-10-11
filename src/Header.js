import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from "@mui/material/Card";
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header(props) {
  const { sections, title } = props;

  function MouseOver(event) {
    event.target.style.color = 'green';
  }
  function MouseOut(event) {
    event.target.style.color = "";
  }

  return (
    <React.Fragment>
      <Card
        variant="elevation" elevation={3}
      >
        <Toolbar>
          <IconButton sx={{mt:2}}>
           <MenuRoundedIcon />
          </IconButton>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            // align="center"
            noWrap
            sx={{ fontSize:22, pt: 2, px: 0.5, flex: 1 }}
          >
            {title}
          </Typography>

          <Typography sx={{ pt: 2 }} variant="button">
            <Link
              href="/contact"
              underline="none"
              color='inherit'>
              <Button
                variant='contained' color='inherit'
                sx={{
                  borderRadius: 5,
                  bgcolor: '#C3E7FF'
                }}
              >
                Contact
              </Button>
            </Link>
          </Typography>
        </Toolbar>

        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
          {sections.map((section) => (
            <Link
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              underline="none"
              href={section.url}
              sx={{ mb: 1, mt: 5, mx: 0.5, fontSize: 16, color: "-moz-initial", flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </Card>


    </React.Fragment >
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;