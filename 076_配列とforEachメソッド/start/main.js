// ///63.[文法編]配列とforEachメソッド
// const arry = [1,2,3,4,5];

// arry.forEach(function(val, i, ary) {
//     console.log(val);
// });
// //↓↓第一引数しかない場合でアロー関数にした場合
// arry.forEach(val => console.log(val));

// //↓↓ 3のforeachをfor文にした場合
// for(let i = 0; i < arry.length; i++ ) {
//     const val = arry[i];
//     console.log(val);
// }


///64.[文法編]配列とreduceメソッド
const arry = [1,2,3,4,5];

arry.reduce(
    function(accu, curr) {
    console.log(accu, curr);
    // return accu * curr;
    }
, 10);

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
    return accu + '<' + curr + '>';
    //↓↓テンプレートリテラルでより簡潔に記述
    return `${accu}<${curr}>`;
}, "")

console.log(result);