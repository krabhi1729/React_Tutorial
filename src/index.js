import React from 'react';
import ReactDOM from 'react-dom';


const child1=React.createElement('p',{className:'text'},"hey buddy");
const div = React.createElement('div', {className:'container'}, [child1]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);
