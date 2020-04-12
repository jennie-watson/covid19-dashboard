import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>{ new Date().getFullYear() } &copy; Jennie Watson</p>
      </Container>
    </footer>
  );
};

export default Footer;
