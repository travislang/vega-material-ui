import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { cyan } from '@material-ui/core/colors';

import { AttachMoneyOutlined} from '@material-ui/icons';

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: cyan
    }
});



class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <Button variant="outlined" color="primary">< AttachMoneyOutlined/></Button>
                    <Button color="secondary">Stay</Button>
                </header>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
