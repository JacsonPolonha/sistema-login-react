import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, ErrorMessage } from './styles';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin(); // Define autenticação como verdadeira
      navigate('/home'); // Redireciona para a página inicial
    } else {
      setError('Usuário ou senha inválido!');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
};

export default LoginPage;
