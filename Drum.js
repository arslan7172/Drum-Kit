for (var i=0; i<document.querySelectorAll('.drum').length;i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click',function (){
    seschykar(this.innerHTML);
    knopkaoyna(this.innerHTML);
  });
}
  document.addEventListener('keypress',function(e){
    seschykar(e.key);
    knopkaoyna(e.key);
  });
  function seschykar(barla_1){

    switch (barla_1) {
      case 'a':
        new Audio('tom-1.mp3').play();
        break;
      case 's':
          new Audio('tom-2.mp3').play();
          break;
      case 'd':
          new Audio('tom-3.mp3').play();
          break;
      case 'f':
        new Audio('tom-4.mp3').play();
        break;
      case 'j':
        new Audio('snare.mp3').play();
        break;
      case 'k':
        new Audio('crash.mp3').play();
        break;
      case 'l':
        new Audio('kick.mp3').play();
        break;
      default:console.log(barla_1);
    }
  }
  function knopkaoyna(barla_2) {
    document.querySelector('.'+barla_2).classList.add('basyldy');
    setTimeout(function(){
      document.querySelector('.'+barla_2).classList.remove('basyldy');
    },500);
  }


// .drum-a derek button hem yazylyp biliner yone son bashga yerlerde hem button ulanmaly wagt olaram kabul edyar.
