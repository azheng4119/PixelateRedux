import React from 'react';
import './App.css';

import { connect } from "react-redux";
import AppView from './AppView';
import {addRow,addColumn,removeColumn,removeRow} from './store/utilities/table'
class AppContainer extends React.Component {
  render() {
    return <AppView test="eweww" test1="232"></AppView>
  }
}

const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
    addRows: () => dispatch(addRow()),
    addColumn: () => dispatch(addColumn()),
    removeRows: () => dispatch(removeRow()),
    removeColumn: () => dispatch(removeColumn()),
  }
}

export default connect(mapState, mapDispatch)(AppContainer);