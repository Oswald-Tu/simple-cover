# simple-assign
simple assign json data  

npm install

import simpleAssign from 'simple-assign';
console.log(simpleAssign({name:'xiaoming'}, {age:12, name:'hong'})); // result: {name: 'hong'}  
console.log(simpleAssign({name:'xiaoming'}, {age:12, name:'hong'}, {name:'big'})); // result: {name: 'big'}

