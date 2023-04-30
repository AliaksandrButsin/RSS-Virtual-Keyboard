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
        <div class="key">\</div>
        <div class="key">1</div>
        <div class="key">2</div>
        <div class="key">3</div>
        <div class="key">4</div>
        <div class="key">5</div>
        <div class="key">6</div>
        <div class="key">7</div>
        <div class="key">8</div>
        <div class="key">9</div>
        <div class="key">0</div>
        <div class="key">-</div>
        <div class="key">=</div>
        <div class="key delete">delete</div>
      </div>
      <div class="line">
        <div class="key tab">tab</div>
        <div class="key">q</div>
        <div class="key">w</div>
        <div class="key">e</div>
        <div class="key">r</div>
        <div class="key">t</div>
        <div class="key">y</div>
        <div class="key">u</div>
        <div class="key">i</div>
        <div class="key">o</div>
        <div class="key">p</div>
        <div class="key">[</div>
        <div class="key">]</div>
        <div class="key">\</div>
      </div>
      <div class="line">
        <div class="key caps">caps lock</div>
        <div class="key">a</div>
        <div class="key">s</div>
        <div class="key">d</div>
        <div class="key">f</div>
        <div class="key">g</div>
        <div class="key">h</div>
        <div class="key">j</div>
        <div class="key">k</div>
        <div class="key">l</div>
        <div class="key">;</div>
        <div class="key">'</div>
        <div class="key return">return</div>
      </div>
      <div class="line">
        <div class="key l_shift">shift</div>
        <div class="key">z</div>
        <div class="key">x</div>
        <div class="key">c</div>
        <div class="key">v</div>
        <div class="key">b</div>
        <div class="key">n</div>
        <div class="key">m</div>
        <div class="key">,</div>
        <div class="key">.</div>
        <div class="key">/</div>
        <div class="key r_shift">shift</div>
      </div>
      <div class="line">
        <div class="key">cont</div>
        <div class="key">opti</div>
        <div class="key l_comm">comm</div>
        <div class="key space"></div>
        <div class="key r_comm">comm</div>
        <div class="key">opti</div>
        <div class="key arrow">◀</div>
        <div class="blind_box">
          <div class="key arrow u">▲</div>
          <div class="key arrow d">▼</div>
        </div>
        <div class="key arrow">▶</div>
      </div>`;