import styled from 'styled-components';

export const Styles = styled.div`
  .navbar {
    background-color: #222;
    position: fixed top;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #efefef;

    &:hover {
      color: white;
    }

    &:focus {
      color: #f57653;
    }
  }
`;
