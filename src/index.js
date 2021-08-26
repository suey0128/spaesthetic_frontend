import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const store = createStore(rootReducer);
// console.log(store.getState().campaignReducer.campaignArr);
// console.log(store.dispatch({ type: "SET_CAMPAIGN_ARR", playload:  "campaigns"}))

const theme = createTheme({
  palette: {
    primary: {
      main: '#bcced4',
    },
    secondary: {
      main: '#c40405',
    },
  },
  typography:{
    fontFamily: [
      'Montserrat',
      'Roboto',
  ].join(',')
  }
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
