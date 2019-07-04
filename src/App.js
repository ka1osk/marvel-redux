import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalStyles, Container } from './styles';
import Routes from './routes';
import Header from './components/Header';
import { store, persistor } from './store';

function App() {
  return (    
    <BrowserRouter>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header/>
          <Container>
            <Routes />
          </Container>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
