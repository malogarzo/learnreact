import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media.js'

// console.log('Hola mundo');

const app = document.getElementById('app');

// ReactDOM.render(qué, donde);
// const helloWorld = <h1>Hello friend!</h1>;    
render(<Media type="video" title="Who is?" author="@malogarzo" image="./images/owilde.jpg"/> , app);


