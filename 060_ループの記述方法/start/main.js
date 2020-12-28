// const arry = [1,2,3,4,5,6];


//.56 文法編　ループの記述方法基礎
// for(let i = 0; i < arry.length; i = i + 1) {
//     console.log(arry[i]);
// }

// for(let i = 0; i < arry.length; i++) {
//     console.log([i]);
// }


//.57 文法編　ループの記述方法（for inとfor of）
// for(let i in arry) {
//     console.log(i, arry[i]);
// }

// for(let v of arry) {
//     console.log(v);
// }


//.58 文法編　ループの記述方法（実践）
const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go shopping',
        completed: false
    }
]

for(let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    if(todo.completed === true) {
        console.log(i, todo.title);
    }

//for in
for(let i in todos) {
    let todo = todos[i];
    if(todo.completed === true) {
        console.log(i, todo.title);
    }

//for of
for(let todo of todos) {
    if(todo.completed === true) {
        console.log(todo.title);
    }
    
}