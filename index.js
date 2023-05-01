// ========================================================= html =================================================================
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
    <div class="key symb mark lang" id="Backquote">\`</div>
    <div class="key symb mark"      id="Digit1">1</div>
    <div class="key symb mark"      id="Digit2">2</div>
    <div class="key symb mark"      id="Digit3">3</div>
    <div class="key symb mark"      id="Digit4">4</div>
    <div class="key symb mark"      id="Digit5">5</div>
    <div class="key symb mark"      id="Digit6">6</div>
    <div class="key symb mark"      id="Digit7">7</div>
    <div class="key symb mark"      id="Digit8">8</div>
    <div class="key symb mark"      id="Digit9">9</div>
    <div class="key symb mark"      id="Digit0">0</div>
    <div class="key symb mark"      id="Minus">-</div>
    <div class="key symb mark"      id="Equal">=</div>
    <div class="key delete"         id="Backspace">delete</div>
  </div>
  <div class="line">
    <div class="key tab"            id="Tab">tab</div>
    <div class="key symb lett lang" id="KeyQ">q</div>
    <div class="key symb lett lang" id="KeyW">w</div>
    <div class="key symb lett lang" id="KeyE">e</div>
    <div class="key symb lett lang" id="KeyR">r</div>
    <div class="key symb lett lang" id="KeyT">t</div>
    <div class="key symb lett lang" id="KeyY">y</div>
    <div class="key symb lett lang" id="KeyU">u</div>
    <div class="key symb lett lang" id="KeyI">i</div>
    <div class="key symb lett lang" id="KeyO">o</div>
    <div class="key symb lett lang" id="KeyP">p</div>
    <div class="key symb mark lang" id="BracketLeft">[</div>
    <div class="key symb mark lang" id="BracketRight">]</div>
    <div class="key symb mark"      id="Backslash">\\</div>
  </div>
  <div class="line">
    <div class="key caps"           id="CapsLock">caps lock</div>
    <div class="key symb lett lang" id="KeyA">a</div>
    <div class="key symb lett lang" id="KeyS">s</div>
    <div class="key symb lett lang" id="KeyD">d</div>
    <div class="key symb lett lang" id="KeyF">f</div>
    <div class="key symb lett lang" id="KeyG">g</div>
    <div class="key symb lett lang" id="KeyH">h</div>
    <div class="key symb lett lang" id="KeyJ">j</div>
    <div class="key symb lett lang" id="KeyK">k</div>
    <div class="key symb lett lang" id="KeyL">l</div>
    <div class="key symb mark lang" id="Semicolon">;</div>
    <div class="key symb mark lang" id="Quote">'</div>
    <div class="key return"         id="Enter">return</div>
  </div>
  <div class="line">
    <div class="key l_shift"        id="ShiftLeft">shift</div>
    <div class="key symb lett lang" id="KeyZ">z</div>
    <div class="key symb lett lang" id="KeyX">x</div>
    <div class="key symb lett lang" id="KeyC">c</div>
    <div class="key symb lett lang" id="KeyV">v</div>
    <div class="key symb lett lang" id="KeyB">b</div>
    <div class="key symb lett lang" id="KeyN">n</div>
    <div class="key symb lett lang" id="KeyM">m</div>
    <div class="key symb mark lang" id="Comma">,</div>
    <div class="key symb mark lang" id="Period">.</div>
    <div class="key symb mark lang" id="Slash">/</div>
    <div class="key r_shift"        id="ShiftRight">shift</div>
  </div>
  <div class="line">
    <div class="key" id="ControlLeft">cont</div>
    <div class="key" id="AltLeft">l_opti</div>
    <div class="key" id="MetaLeft">comm</div>
    <div class="key" id="Space"></div>
    <div class="key" id="MetaRight">r_comm</div>
    <div class="key" id="AltRight">opti</div>

    <div class="  key symb arrow l" id="ArrowLeft">◀</div>
    <div class="blind_box">
      <div class="key symb arrow u"   id="ArrowUp">▲</div>
      <div class="key symb arrow d" id="ArrowDown">▼</div>
    </div>
    <div class="  key symb arrow r" id="ArrowRight">▶</div>`;
// ========================================================= html =================================================================
// ========================================================= symbol =================================================================
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
// ========================================================= symbol =================================================================
// ========================================================= active + =================================================================
document.addEventListener('keydown', (event) => {
  console.log(event);
  keys.forEach(el => {
     if (el.id == event.code) {
        el.classList.add('active')
     }
  })
});
document.addEventListener('keyup', (event) => {
  keys.forEach(el => {
     if (el.id == event.code) {
        el.classList.remove('active')
     } 
  })
})
// ========================================================= active + =================================================================
// ========================================================= chek lang =================================================================
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
// ========================================================= chek lang =================================================================
// ========================================================= change lang ===============================================================
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
        localStorage.lang = 'ru'
     } else {
        localStorage.lang = 'en'
     }
  }
}
function getLangKeys() {
  if (localStorage.lang === 'ru') {
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
// ========================================================= change lang =================================================================
