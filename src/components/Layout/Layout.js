import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`



  .layout-background {
    text-align: center;
    height: 100%;
    background: #222;
  }
`;



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
