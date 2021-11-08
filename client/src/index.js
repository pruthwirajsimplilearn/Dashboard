import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: '#f0f0f0'
};

ReactDOM.render(
  <React.StrictMode>
    <App style={styles} />
  </React.StrictMode>,
  document.getElementById('root')
);