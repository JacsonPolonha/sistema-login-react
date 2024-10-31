import React from 'react';
import Button from '../../components/Button';
import { Container, Title } from './styles';

const HomePage = ({ onLogout }) => {
  return (
    <Container>
      <Title>Página inicial</Title>
      <Button onClick={onLogout}>Logout</Button>
    </Container>
  );
};

export default HomePage;