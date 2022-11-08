// export 해서 사용하는 역할

// import 해 놓고 사용 안하면 vue-cli 에서는 오류 발생!!!
// import { PLAYERS, MAX_SIZE, add, obj } from './export.js'

// console.log( PLAYERS );
// console.log( MAX_SIZE );
// console.log(add(5,7));
// console.log(obj.template)



//////////////////////////////////// export default

// import Size from './export.js'
// console.log( Size );

// import obj from './export.js';
// console.log(obj)
// obj.log();

// console.log(obj.data().num)

// import obj from './export.js'; // default로 쓴 경우 
// let { template } = obj; 
// console.log(template)

import {obj} from './export.js';  // { } 을 쓴 경우 
let { template } = obj; 
console.log(template)