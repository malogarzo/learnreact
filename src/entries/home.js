import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist.js';
import data from '../api.json';

// console.log('Hola mundo');

const homeContainer = document.getElementById('home-container');

// ReactDOM.render(qué voy a renderizar, donde lo voy a renderizar);
// const helloWorld = <h1>Hello friend!</h1>;    
render( <Home data={data} />, homeContainer);