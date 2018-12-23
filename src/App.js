import React, { Component } from 'react';
import GlobalStyles, { Container } from './App.style.js';
import TodosContainer from './containers/TodosContainer';

/* initial stub data */
import stub from './stub';

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <TodosContainer />
      </Container>
    );
  }
}

export default App;
