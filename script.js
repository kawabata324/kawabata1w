'use strict';

window.alert('簡易版タギロンへようこそ');

let　explain=window.prompt('説明を読みますか？（読む場合はyesを入力して下さい,読まない場合はnoを入力します）');

let number=Math.floor(Math.random()*100)||100;

console.log(number);

if(explain==='yes'){
  window.alert('ヒントを駆使しながら0~100の数字を当てるゲームです。何はともあれまずはやってみましょう');
}else if(explain==='no'){
  window.alert('ゲームスタート');
}else{
  window.alert('yesかnoでこたえてね')
}

window.alert('それは偶数？')
if(number%2===0){
  window.alert('yes');
}else{
  window.alert('no');
}
window.alert('それは5の倍数？')
if(number%5===0){
  window.alert('yes');
}else{
  window.alert('no');
}
window.alert('それは一桁？')
if(number<10){
  window.alert('yes');
}else{
  window.alert('no');
}
window.alert('それは13ですか？')
if(number===13){
  window.alert('yes');
}else{
  window.alert('no');
}
window.alert('それは58より大きい？')
if(number>58){
  window.alert('yes');
}else{
  window.alert('no');
}

const answer=window.prompt('数字はいくつ？');

if(answer===number){
  window.alert('すごすぎる');
}else{
  window.alert('残念');
}
