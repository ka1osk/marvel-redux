import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import history from './routes/history';
import { GlobalStyles, Container } from './styles';
import Routes from './routes';
import Header from './components/Header';
import { store, persistor } from './store';

function App() {
  return (    
    <ConnectedRouter history={history}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header/>
          <Container>
            <Routes />
          </Container>
        </PersistGate>
      </Provider>
    </ConnectedRouter>
  );
}

export default App;
