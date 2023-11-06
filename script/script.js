// 遠隔での操作を可能
'use strict';

const timer = document.getElementById('time');
const startB = document.getElementById('start');
const stopB = document.getElementById('stop');

// let start_t;
let reset_t;
let x;

function string(mls){
    // setInterval内が長くなったので経過msを表示する部分をここに記す。
    const ms =mls % 1000;
    // Math.floor()関数は与えられた数値以下の最大の整数を返す
    const sec = Math.floor(mls / 1000) % 60;
    const min = Math.floor(mls / (60*1000)) % 60;
    // let Time = min + ":"+ sec + "."+ ms;

    // 桁をそろえて表示
    const fms = ms.toString().padStart(3,0);
    const fsec = sec.toString().padStart(2,0);
    const fmin = min.toString().padStart(2,0);
    // let Time = fmin + ":"+ fsec + "."+ fms;
    // let Time = `${fmin}:${fsec}.${fms}`;
     // textContentで全てのhtml/cssの要素を取得できる⇔指定したIdに表示
    // time.textContent = `${fmin}:${fsec}.${fms}`;

    return `${fmin}:${fsec}.${fms}`;


}

// addEventlisnerは入力動作に対するイベント処理を行うメソッド
startB.addEventListener('click',() =>{
        
    // console.log('dog');
        // const nowtime = Date.now;
        // 再定義不可、再代入可能→リセット機能させるために必要
        let start_t = Date.now();

    setInterval(() =>{
        // 毎設定秒後との時間を取得するから、再代入、再定義不可のconstを使用
        const now_t = Date.now();
        // const dis_t = now_t - start_t/1000;
        // ミリ秒についての表示なので余りでいい
        const dis_t = now_t - start_t;
       
        timer.textContent = string(dis_t);
        
    },10);

    // console.log('dog');

});


// displaytime();

