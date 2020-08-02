// ロボットの返答内容
const chat = [
    'こんにちは!',
    'あなたの名前は？',
    '今日は元気ですか？'
    // ランダムな返答
     [['Alright'],['Oh really!'],['OK']]
]

// ロボットの返答の合計回数（最初は0）
// これを利用して、自分が送信ボタンを押したときの相手の返答を配列から指定する
let chatCount =0;

// 画面への出力をする関数（valはメッセージ内容、personは誰が話しているか）
function output(val,person){
    // 中略
    if(person === 'robot'){
        // 中略
        chatCount++;
    }
}

// 自分がテキストを入力し、ボタンを押したときの関数
function btnFunc(){
    // 中略
    output(inputText.value,'me');
    // 中略

    // ロボットの送信の合計回数に応じて次の返信を指定
    switch(chatCount){
        // もしロボットのトーク数が2個の時に送信ボタンが押されたら、
        // 自分の名前を含んだメッセージと、chat配列の2（3個目）が返信
        case 2:
            output('Hi,'+ inputText.value + '!', 'robot');
            setTimeout( ()=>{
                output(chat[2], 'robot');
            },2000);
            break;

            // もしロボットのトーク数が4個の時に送信ボタンが押されたら、
            // chat配列の3（4個目）のランダム番目が返信
            case 4:
                output(chat[3][Math.floor(Math.random()*chat[3].length)],other);
                break;
    }
}

// 最初にロボット話かけられる
output(chat[0], 'robot');
setTimeout( ()=>{
    output(chat[1], 'robot');
} 2000);