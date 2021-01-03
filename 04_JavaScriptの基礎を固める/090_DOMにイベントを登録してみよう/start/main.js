// //無名関数で渡す
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
//     alert('hello');
// });
// //↓↓より良い書き方
// const btn = document.querySelector('#btn');

// const hello = function(){
//     alert('hello');
// }
// btn.addEventListener('click', hello);
// btn.removeEventListener('click', hello);

// //↓↓カラーを変更
// const btn = document.querySelector('#btn');
// const h1 = document.querySelector('h1');

// function hello() {
//     h1.style.color = 'red';
// };
// btn.addEventListener('click', hello);

//↓↓複数の関数を登録（ここではカラーを変更）
const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
    h1.style.color = 'red';
};
function changeBgColor() {
    h1.style.backgroundColor = 'green';
};
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);