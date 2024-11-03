
//------------------------------
// タイトルアニメーション
//------------------------------
//mvTitle.textContent.split('')でテキストを1文字ずつ分割して取得

const mvTitle = document.querySelector('.mv-title');
const mvSubTitle =document.querySelector('.mv-subtitle');

const text1 = mvTitle.textContent.split('');
const text2 = mvSubTitle.textContent.split('');

const mv = document.querySelector('mv');

mvTitle.textContent = ''; //テキストをからに置き換える
mvSubTitle.textContent = '';

for (let i = 0; i < text1.length; i++) {
    let x = (i + 1)*0.3;
    let $span = '<span style="transition:' + x + 's;">' + text1[i] + '</span>';
    mvTitle.insertAdjacentHTML('beforeend',$span);
}

for (let i = 0; i < text2.length; i++) {
    let x = (i + 1)*0.3;
    let $span = '<span style = " transition: '+x+'s;">'+text2[i]+'</span>';
    mvSubTitle.insertAdjacentHTML('beforeend',$span);
}

window.addEventListener('mousemove',() => {
    mvTitle.classList.add('on');
    mvSubTitle.classList.add('on');

});



