import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer(props) {
  const { description, title } = props;

  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Typography color='white' variant="h6" align="center" >
          {title}
        </Typography>
        <Typography
          color='white'
          variant="subtitle1"
          align="center"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </div>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      {'Techduppy '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;