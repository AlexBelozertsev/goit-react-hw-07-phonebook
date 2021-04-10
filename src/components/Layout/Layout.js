import React from 'react';
import AppBar from '../AppBar';
import Container from '../Container';

const Layout = ({ children }) => (
  <>
    <AppBar text="Async-Redux. HomeWork-6. PhoneBook." />
    <Container>{children}</Container>
  </>
);

export default Layout;
