const num = Number(true);
console.log(num);

if(1 == true) {
    console.log('this is true');
} else {
    console.log('this is false');
}

if(0 === '0') {
    console.log('this is true');
} else {
    console.log('this is false');
}

//イコールでないことを確認したい場合
if(0 != '0') {
    console.log('this is true');
} else {
    console.log('this is false');
}

//論理演算子
//かつ
if(0 == '0' && 0 === '0') {
    console.log('this is true');
} else {
    console.log('this is false');
}

//または ||
if(0 == '0' || 0 === '0') {
    console.log('this is true');
} else {
    console.log('this is false');
}



//値が設定されているかという条件で判定を行いたい場合
const num = 10;
console.log(num);

if(num) {
    console.log('this is true');
} else {
    console.log('this is false');
}