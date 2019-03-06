# simple-cover
simple assign json data  

npm install

import simpleCover from '@tu/simple-cover';
console.log(simpleCover({name:'xiaoming'}, {age:12, name:'hong'})); // result: {name: 'hong'}  
console.log(simpleCover({name:'xiaoming'}, {age:12, name:'hong'}, {name:'big'})); // result: {name: 'big'}

