# sample-assign
sample assign json data  

npm install

import sampleAssign from 'sample-assign';
console.log(sampleAssign({name:'xiaoming'}, {age:12, name:'hong'})); // result: {name: 'hong'}  
console.log(sampleAssign({name:'xiaoming'}, {age:12, name:'hong'}, {name:'big'})); // result: {name: 'big'}

