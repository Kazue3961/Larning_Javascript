// function hello(name = 'Tom') {
//    console.log('hello ' + name) 
// }

// const hello = function(name = 'Tom') {
//     console.log('hello ' + name) 
// }

// const hello = name => console.log('hello ' + name);
// const hello = (name, age) => console.log('hello ' + name + age); 


// hello('mary', 20);
// hello('mery', 10);
// hello();


const arry = [1,2,3,4,5,6];

arry.forEach(function(value) {
    console.log(value);
})
//　↓アロー関数に
arry.forEach(value => console.log(value));

