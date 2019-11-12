import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import history from './routes/history';
import { GlobalStyles, Container } from './styles';
import Routes from './routes';
import { store, persistor } from './store';

function App() {
  return (    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <GlobalStyles />
          <Container>
            <Routes />
          </Container>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
