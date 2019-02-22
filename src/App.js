import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './ColorTheme';

import HomeApp from './Pages/Home';
import TemporaryDrawer from './Component/Topbar'
import PostApp from './Pages/PostRequest';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
      <TemporaryDrawer />
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={HomeApp} />
        <Route path='/post' component={PostApp} />
      </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;