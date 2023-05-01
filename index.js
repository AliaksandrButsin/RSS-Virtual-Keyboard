const section = document.createElement('section');
section.classList.add('section_wrapper');
document.body.prepend(section);

//section_name
const sectionName = document.createElement('h1');
sectionName.classList.add('section_name');
sectionName.innerText = `Virtual - keyboard`;

//section_text
const sectionText = document.createElement('textarea');
sectionText.classList.add('section_text');
sectionText.disabled = true;

//keyboard_wrapper 
const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard_wrapper');

//bild_block 
section.append(sectionName);
section.append(sectionText);  
section.append(keyboardWrapper);

keyboardWrapper.innerHTML = `
<div class="line">
    <div class="key symb mark lang" >\`</div>
    <div class="key symb mark"      >1</div>
    <div class="key symb mark"      >2</div>
    <div class="key symb mark"      >3</div>
    <div class="key symb mark"      >4</div>
    <div class="key symb mark"      >5</div>
    <div class="key symb mark"      >6</div>
    <div class="key symb mark"      >7</div>
    <div class="key symb mark"      >8</div>
    <div class="key symb mark"      >9</div>
    <div class="key symb mark"      >0</div>
    <div class="key symb mark"      >-</div>
    <div class="key symb mark"      >=</div>
    <div class="key delete"         >delete</div>
  </div>
  <div class="line">
    <div class="key tab"            >tab</div>
    <div class="key symb lett lang" >q</div>
    <div class="key symb lett lang" >w</div>
    <div class="key symb lett lang" >e</div>
    <div class="key symb lett lang" >r</div>
    <div class="key symb lett lang" >t</div>
    <div class="key symb lett lang" >y</div>
    <div class="key symb lett lang" >u</div>
    <div class="key symb lett lang" >i</div>
    <div class="key symb lett lang" >o</div>
    <div class="key symb lett lang" >p</div>
    <div class="key symb mark lang" >[</div>
    <div class="key symb mark lang" >]</div>
    <div class="key symb mark"      >\\</div>
  </div>
  <div class="line">
    <div class="key caps"           >caps lock</div>
    <div class="key symb lett lang" >a</div>
    <div class="key symb lett lang" >s</div>
    <div class="key symb lett lang" >d</div>
    <div class="key symb lett lang" >f</div>
    <div class="key symb lett lang" >g</div>
    <div class="key symb lett lang" >h</div>
    <div class="key symb lett lang" >j</div>
    <div class="key symb lett lang" >k</div>
    <div class="key symb lett lang" >l</div>
    <div class="key symb mark lang" >;</div>
    <div class="key symb mark lang" >'</div>
    <div class="key return"         >return</div>
  </div>
  <div class="line">
    <div class="key l_shift"        >shift</div>
    <div class="key symb lett lang" >z</div>
    <div class="key symb lett lang" >x</div>
    <div class="key symb lett lang" >c</div>
    <div class="key symb lett lang" >v</div>
    <div class="key symb lett lang" >b</div>
    <div class="key symb lett lang" >n</div>
    <div class="key symb lett lang" >m</div>
    <div class="key symb mark lang" >,</div>
    <div class="key symb mark lang" >.</div>
    <div class="key symb mark lang" >/</div>
    <div class="key r_shift"        >shift</div>
  </div>
  <div class="line">
    <div class="key" >cont</div>
    <div class="key" >l_opti</div>
    <div class="key" >l_comm</div>
    <div class="key space" ></div>
    <div class="key" >r_comm</div>
    <div class="key" >r_opti</div>

    <div class="  key symb arrow l">◀</div>
    <div class="blind_box">
      <div class="key symb arrow u">▲</div>
      <div class="key symb arrow d">▼</div>
    </div>
    <div class="  key symb arrow r">▶</div>`;

const keys = document.querySelectorAll('.key');
const textArea = document.querySelector('.section_text');
let capsLock = 0;
const symbolsArrShift   = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];
const symbolsArr        = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', '/', ',', '.'];
const symbolsEn         = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '/', ',', '.'];
const symbolsRu         = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
const dontTouchSymbols  = ['`', '[', ']', ';', '\'', ',', '/', 'ё', 'х', 'ъ', 'ж', 'э', 'б', 'ю'];
const allKeyEn          = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl','Alt','Com','','Com','Alt', '◀', '▲', '▼', '▶'];
const allKeyRu          = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Ctrl','Alt','Com','','Com','Alt', '◀', '▲', '▼', '▶'];

const symbols       = document.querySelectorAll('.mark');
const langSymbols   = document.querySelectorAll('.lang');
const letters       = document.querySelectorAll('.lett');
const toushSymbols  = document.querySelectorAll('.symb');

const getStartedPage = () => {
  if (localStorage.lang === 'undefined' || localStorage.lang === 'en') {
      localStorage.lang = 'en'
    for (let i = 0; i < keys.length; i++){
        keys[i].innerHTML = allKeyEn[i]
      }
  } else {
      for (let i = 0; i < keys.length; i++){
        keys[i].innerHTML = allKeyRu[i]
      }
  }
}
getStartedPage()

let ctrlAcrive = 0;
let alrActive = 0;
document.addEventListener('keydown', (event) => {
  if (event.key == 'Control') {
     ctrlAcrive = 1
     getLangTumbler()
     getLangKeys()
  }
})
document.addEventListener('keyup', (event) => {
  if (event.key == 'Control') {
     ctrlAcrive = 0
     getLangTumbler()
  }
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Alt') {
     alrActive = 1;
     getLangTumbler()
     getLangKeys()
  }
})
document.addEventListener('keyup', (event) => {
  if (event.key === 'Alt') {
     alrActive = 0;
     getLangTumbler()
  }
})
function getLangTumbler() {
  if (alrActive === 1 && ctrlAcrive === 1) {
     if (localStorage.lang === 'en') {
        localStorage.lang = 'rus'
     } else {
        localStorage.lang = 'en'
     }
  }
}
function getLangKeys() {
  if (localStorage.lang === 'rus') {
     for (let i = 0; i < langSymbols.length; i++){
        langSymbols[i].innerHTML = symbolsRu[i]
     }
  }
  if (localStorage.lang === 'en') {
     for (let i = 0; i < langSymbols.length; i++){
        langSymbols[i].innerHTML = symbolsEn[i]
     }
  }
}
