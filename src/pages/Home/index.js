import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as AuthActions } from "../../store/ducks/auth";

const Home = ({ usuario, token, isProcessing, error, doLogin }) => { 
  return (
    <div>
      <p>{usuario && JSON.stringify(usuario)}</p>
      <p>Token: {token}</p>
      <button onClick={() => doLogin()}>Login</button>
      {isProcessing && (<p>Aguarde....</p>)}
      {error && (<p>{error}</p>)}
    </div>
  );
}

const mapStateToProps = state => (state.auth);

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);