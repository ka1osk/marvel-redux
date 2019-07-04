import React from 'react';
import { connect } from 'react-redux';

const Contato = ({ usuario }) => {
  return (
    <h1>Contato {usuario && usuario.email}</h1>
  );
}

const mapStateToProps = state => (state.auth);

export default connect(mapStateToProps)(Contato);