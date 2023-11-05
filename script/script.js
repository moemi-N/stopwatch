const timer = document.getElementById('time');
const startB = document.getElementById('start');
const stopB = document.getElementById('stop');

// let start_t;
let reset_t;
let x;

// addEventlisnerは入力動作に対するイベント処理を行うメソッド
startB.addEventListener('click',() =>{
    
    // console.log('dog');
        // const nowtime = Date.now;
        // 再定義不可、再代入可能→リセット機能させるために必要
        let start_t = Date.now();
    setInterval(() =>{
        // 毎設定秒後との時間を取得するから、再代入、再定義不可のconstを使用
        const now_t = Date.now();
        const dis_t = now_t - start_t;

        // textContentで全てのhtml/cssの要素を取得
        time.textContent = dis_t;
    },10);

    console.log('dog');

});


// displaytime();

