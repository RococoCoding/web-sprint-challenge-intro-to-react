import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components";
import theme from "./theme"
import ErrorBoundary from "./components/error";

ReactDOM.render(<ThemeProvider theme={theme}><ErrorBoundary><App /></ErrorBoundary></ThemeProvider>, document.getElementById('root'));
