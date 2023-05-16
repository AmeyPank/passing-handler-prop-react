import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(<App />);

// "scripts": {
//     "test": "jest --no-color 2>output.txt",
//     "start": "webpack-dev-server --mode development --watch --open --hot",
//     "build": "webpack --mode production"
//   },

// "scripts": {
//     "test": "NODE_OPTIONS=--openssl-legacy-provider jest --no-color 2>output.txt",
//     "start": "NODE_OPTIONS=--openssl-legacy-provider webpack-dev-server --mode development --watch --open --hot",
//     "build": "NODE_OPTIONS=--openssl-legacy-provider webpack --mode production"
//   },