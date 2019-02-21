import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './ColorTheme';
import HomeApp from './Pages/Home';
import TemporaryDrawer from './Component/Topbar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <TemporaryDrawer /> 
        <HomeApp />
      </MuiThemeProvider>
    );
  }
}

export default App;