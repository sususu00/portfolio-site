//------------------------------
//スクロールアニメーション
//------------------------------
// targetElement[i].getBoundingClientRect().top =ブラウザの一番上から要素の一番上の部分までの距離
//window.innerHeight 現在のブラウザの高さ
// targetElement[i].clientHeight * 0.4 要素の高さの40%
        
const targetElement = document.querySelectorAll(".animationTarget");

document.addEventListener("scroll",() => {
    for (let i = 0; i< targetElement.length; i++) {
        const getelementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.4
        
     if(window.innerHeight > getelementDistance){
        targetElement[i].classList.add("show");

     }
    }
});