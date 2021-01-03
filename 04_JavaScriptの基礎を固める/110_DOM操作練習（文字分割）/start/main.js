document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim();
    let concatStr = '';

    for(let c of str) {
        c = c.replace(' ', '&nbsp;');
        concatStr += `<span class="char">${c}</span>`;
    }
    el.innerHTML = concatStr;
});

//↓↓書き換え
document.addEventListener('DOMContentLoaded', function() {
    const el = document.querySelector('.animate-title');
    const str = el.innerHTML.trim().split("");
    
    // //このような記述はパフォーマンスが落ちるのでよくない　el.innerHTML
    // el.innerHTML = '';

    // for(let c of str) {
    //     c = c.replace(' ', '&nbsp;');
    //     el.innerHTML += `<span class="char">${c}</span>`;
    // }
    // //ここまで

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");;
});