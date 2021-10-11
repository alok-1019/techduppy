
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Alok
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer"
      sx={{
        bgcolor: '#0D0D0D',
        py: 2,
        borderRadius:1,
        marginBottom:0.5,
        mt:1
      }}
    >
      <Container maxWidth="lg">
        <Typography color='white' variant="h6" align="center" >
          {title}
        </Typography>
        <Typography
          color='white' 
          variant="subtitle1"
          align="center"
          // color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;