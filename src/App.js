import React from 'react';
import CharactersQuery from './CharactersQuery.js';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg">
      <CharactersQuery />
    </Container>
  );
}

export default App;
