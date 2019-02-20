import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ButtonAppBar from './Component/Topbar';
import theme from './ColorTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ButtonAppBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
