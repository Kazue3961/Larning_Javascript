// function hello(name) {
//     console.log('hello ' + name);
// }

// function getName(){
//     return 'marry';
// }

// hello(getName);


// function hello(callback) {
//     console.log(callback);
//     console.log('hello ' + callback());
// }

// function getName(){
//     return 'marry j';
// }
// //無名関数を変数に代入
// const getFirstName = function() {
//     return 'marry';
// }

// hello(getFirstName);



// function hello(callback, lastname) {
//     console.log(callback);
//     console.log('hello ' + callback(lastname));
// }

// function getName(){
//     return 'marry j';
// }
// //無名関数を変数に代入
// const getFirstName = function() {
//     return 'marry';
// }

// //↓　helloという関数にcallback関数として無名関数を渡している状態
// hello(function(name) {
//     return 'marry' + name;
// }, 'j');
// // //　↓↓無名関数をアロー関数に書き換え
// // hello(() => 'marry');


function doSomething(a,b,callback) {
    const result = callback(a,b);
    console.log(result);
}

function multiply(a,b) {
    return a * b;
}

function plus(a,b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(2, 3, plus);