//------------------------------
// ハンバーガーメニュー
//------------------------------
// classListとは特定の要素のクラス名を追加したり、削除したり、参照したりすることが出来るプロパティ
// classlistのメソッド　add=クラスを追加する remove=クラスを削除する  contains=クラスが含まれているか確認する　　toggle=クラスが含まれていれば削除、含まれていなければ追加する
// styleプロパティを使うと、要素のスタイルを設定することができる　要素.style.プロパティ名 = 'value';



const hamBurger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
const navlistLi = document.querySelectorAll(".nav-list li")


hamBurger.addEventListener("click",() => {
    navList.classList.toggle("nav-active");

    navlistLi.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/7+0.4}s`;
        }
        
    });
    hamBurger.classList.toggle("toggle");
  
});