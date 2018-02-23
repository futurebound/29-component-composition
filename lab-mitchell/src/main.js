import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app/app';

//ReactDom.render() is the only line that uses this module
ReactDom.render(<App />, document.getElementById('root'));

//IF YOU DON'T SET UP 'index.html' FOR THE WEB PLUGIN'S ARGUMENT, YOU NEED TO CREATE A CONTAINER ELEMENT LIKE VINICIO TO SHOVE THINGS INTO IT IN THIS MAIN.JS FILE