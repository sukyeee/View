// javascript 를 내보내는 역할

//////////////////////////////////// export named
// 여러 개를 내보낼 때 유리
// 가져다 쓰는 쪽에서는 내보내는 이름과 동일한 이름을 사용해야 한다.

// let PLAYERS = ['손흥민', '이강인', '이승우']; // 배열
// const MAX_SIZE = 1000;
// function add(n1, n2){
//     return n1 + n2;
// }

// var obj = {
//     template: `<div> my Template </div>`,
//     data() {
//         return {
//             num: 20
//         }
//     }
// }

// export { PLAYERS, MAX_SIZE, add, obj };

//////////////////////////////////// export default
// 기본 내보내기는 하나만 가능
// 가져다 쓰는 쪽에서는 어떤 이름이라도 사용이 가능 
// 복잡한 객체를 일반적으로 많이 사용

// class, function 을 제외한 항목은 
// 이름을 export default 할 수 없다.

// type export default x
// name export default x <- 가져다 쓰는 쪽에서 
// 마음대로 이름을 지정해서 써야 하는데 그렇게 사용할 수 없다.

// export default 1000;

// export default {
//     template: `<div>my Template</div>`,
//     data(){
//         return {
//             num: 20
//         }
//     },
//     log: function(){
//         console.log("log is called!")
//     },
//     add(n1, n2){
//         return n1 + n2;
//     }
// }


var obj = {
    template: `<div> my Template </div>`,
    data() {
        return {
            num: 20
        }
    }
}

export { obj };