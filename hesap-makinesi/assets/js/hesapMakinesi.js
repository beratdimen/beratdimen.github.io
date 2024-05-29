let hsp = document.querySelector('#hsp');
let equal = document.querySelector('.equal');
let res = document.querySelector('.reset');
let btns = document.querySelectorAll('.default-keyboard button:not(.del)');

function handleCalcClick() {
let secim = this.innerText
hsp.innerText +=  secim 
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleCalcClick);
}


function handleSonucClick() {
  hsp.innerText = eval(hsp.innerText).toFixed(2);
}
equal.addEventListener('click' , handleSonucClick);

function handleResClick() {
  hsp.innerText = '';
}
res.addEventListener('click', handleResClick);