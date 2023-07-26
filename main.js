const box = document.getElementById("box");
const button = document.getElementById("dropdownMenuButton1");
button.addEventListener("click", () => {
    box.classList.toggle("active");
});

let fadeInTarget = document.querySelectorAll(".fade-in"); //".fade-in"セレクタの要素をすべて取得、その要素を変数fadeInTargetに代入、リスト
window.addEventListener("scroll", () => { //スクロールイベントを監視、スクロールが発生した場合は{}内の処理実行
  for (let i = 0; i < fadeInTarget.length; i++){ //リストの要素を一つずつ処理
    const rect = fadeInTarget[i].getBoundingClientRect().top; //要素の表示位置を取得
    const scroll = window.scrollY || document.documentElement.scrollTop; //現在のスクロール位置を取得
    const offset = rect + scroll; //要素の表示位置とスクロール位置の合計
    const windowHeight = window.innerHeight; //現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) { //要素が画面内に表示されたかを判定
      fadeInTarget[i].classList.add("scroll-in"); //画面内に表示された場合は、"scroll-in"クラスを追加
    }
    else {
      fadeInTarget[i].classList.remove("scroll-in"); //画面内に表示されていない場合は、"scroll-in"クラスを削除
    }
  }
});


