import React from 'react';
import { connect } from 'react-redux';
import { Container, AppName } from './styles';

const Header = ({ usuario }) => {
  return (
    <Container>
      <AppName>Somnio</AppName>      
    </Container>
  );
}

const mapStateToProps = state => ({
  usuario: state.auth.ativo,
  token: state.auth.token
});

export default connect(mapStateToProps)(Header);