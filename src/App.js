import React from 'react';
import './App.css';

import { connect } from "react-redux";
import AppView from './AppView';

class AppContainer extends React.Component{
  render(){
    return <AppView></AppView>
  }
}

const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(AppContainer);