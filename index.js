import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist.js';
import data from './src/api.json';

// console.log('Hola mundo');

const app = document.getElementById('app');

// ReactDOM.render(qué, donde);
// const helloWorld = <h1>Hello friend!</h1>;    
render( <Playlist data={data} /> , app);