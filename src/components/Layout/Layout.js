import React from 'react';
import Container from 'react-bootstrap/Container';
import { Styles } from './LayoutStyles.js';



const Layout = (props) => {
  return(
    <Styles>
      <Container className="layout-background">
        {props.children}
      </Container>
    </Styles>
  )
}

export default Layout;
