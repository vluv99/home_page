import './widget.clock.scss';
export class WidgetClock extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
  <div class="widget--container">
    <div  class="clock">
    <div class="block" data-num="0"></div>
    <div class="block" data-num="1"></div>
    <div class="block" data-num="2"></div>
    <div class="block" data-num="3"></div>
    <div class="block" data-num="4"></div>
    <div class="block" data-num="5"></div>
    <div class="block" data-num="6"></div>
    <div class="block" data-num="7"></div>
    <div class="block" data-num="8"></div>
    <div class="block" data-num="9"></div>
    <div class="block" data-num="10"></div>
    <div class="block" data-num="11"></div>
    <div class="block" data-num="12"></div>
    <div class="block" data-num="13"></div>
    <div class="block" data-num="14"></div>
    <div class="block" data-num="15"></div>
    <div class="block" data-num="16"></div>
    <div class="block" data-num="17"></div>
    <div class="block" data-num="18"></div>
    <div class="block" data-num="19"></div>
    <div class="block" data-num="20"></div>
    <div class="block" data-num="21"></div>
    <div class="block" data-num="22"></div>
    <div class="block" data-num="23"></div>
    <div class="block" data-num="24"></div>
    <div class="block" data-num="25"></div>
    <div class="block" data-num="26"></div>
    <div class="block" data-num="27"></div>
    <div class="block" data-num="28"></div>
    <div class="block" data-num="29"></div>
    <div class="block" data-num="30"></div>
    <div class="block" data-num="31"></div>
    <div class="block" data-num="32"></div>
    <div class="block" data-num="33"></div>
    <div class="block" data-num="34"></div>
    <div class="block" data-num="35"></div>
    <div class="block" data-num="36"></div>
    <div class="block" data-num="37"></div>
    <div class="block" data-num="38"></div>
    <div class="block" data-num="39"></div>
    <div class="block" data-num="40"></div>
    <div class="block" data-num="41"></div>
    <div class="block" data-num="42"></div>
    <div class="block" data-num="43"></div>
    <div class="block" data-num="44"></div>
    <div class="block" data-num="45"></div>
    <div class="block" data-num="46"></div>
    <div class="block" data-num="47"></div>
    <div class="block" data-num="48"></div>
    <div class="block" data-num="49"></div>
    <div class="block" data-num="50"></div>
    <div class="block" data-num="51"></div>
    <div class="block" data-num="52"></div>
    <div class="block" data-num="53"></div>
    <div class="block" data-num="54"></div>
    <div class="block" data-num="55"></div>
    <div class="block" data-num="56"></div>
    <div class="block" data-num="57"></div>
    <div class="block" data-num="58"></div>
    <div class="block" data-num="59"></div>
    <div class="divider"> </div>
    </div>
  </div>
        `;

    this.animated();
  }

  animated(){
    const numbers = [
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
      [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
      [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
      [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
      [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]  // 9
    ];
    
    const blocks = [];
    const digits = Array.from(document.querySelectorAll('.block'));
    
    for (let i = 0; i < 4; i++) {
      blocks.push(digits.slice( i * 15, i * 15 + 15 ));
    }
    
    const setNum = (block, num) => {
      const n = numbers[num];
      for (let i = 0; i < block.length; i++) {
         block[i].classList[ n[i] === 1 ?  'add' : 'remove']('active');
      }
    };
    
    const time = {
      s: '',
      m: '',
      h: '',
      p: null
    };
    
    // time loop
    const animator = () => {
      // eslint-disable-next-line prefer-const
      let d = new Date(),
         h = d.getHours().toString(),
         m = d.getMinutes().toString(),
         s = d.getSeconds().toString();
      
      s = s.length === 1 ? '0' + s : s;
      m = m.length === 1 ? '0' + m : m;
      h = h.length === 1 ? '0' + h : h;
      
      if (s !== time.s) {
        for (let i = 0; i < digits.length; i++) {
          const d = digits[i];
          if (i === +s) {
            d.classList.add('second');
            if (time.p !== null)
              digits[time.p].classList.remove('second');
            time.p = i;
            time.s = s;
          }
        }
      }
      
      if (m !== time.m) {
        setNum(blocks[2], m[0]);
        setNum(blocks[3], m[1]);
        time.m = m;
      }
      
      if (h !== time.h) {
        setNum(blocks[0], h[0]);
        setNum(blocks[1], h[1]);
        time.h = h;
      }
       window.requestAnimationFrame(animator)
    }
    
    // init
    window.requestAnimationFrame(animator)
    
  }


}

customElements.define('widget-clock', WidgetClock);


















/*import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './widget.clock.scss?lit';

@customElement('widget-clock')
export class WidgetClock extends LitElement {

  //static get styles() {
  //  return [style];
  //}


  render() {
    console.log(style);
    return html`
        <div class="widget--container">
          <div  class="clock">
          <div class="block" data-num="0"></div>
          <div class="block" data-num="1"></div>
          <div class="block" data-num="2"></div>
          <div class="block" data-num="3"></div>
          <div class="block" data-num="4"></div>
          <div class="block" data-num="5"></div>
          <div class="block" data-num="6"></div>
          <div class="block" data-num="7"></div>
          <div class="block" data-num="8"></div>
          <div class="block" data-num="9"></div>
          <div class="block" data-num="10"></div>
          <div class="block" data-num="11"></div>
          <div class="block" data-num="12"></div>
          <div class="block" data-num="13"></div>
          <div class="block" data-num="14"></div>
          <div class="block" data-num="15"></div>
          <div class="block" data-num="16"></div>
          <div class="block" data-num="17"></div>
          <div class="block" data-num="18"></div>
          <div class="block" data-num="19"></div>
          <div class="block" data-num="20"></div>
          <div class="block" data-num="21"></div>
          <div class="block" data-num="22"></div>
          <div class="block" data-num="23"></div>
          <div class="block" data-num="24"></div>
          <div class="block" data-num="25"></div>
          <div class="block" data-num="26"></div>
          <div class="block" data-num="27"></div>
          <div class="block" data-num="28"></div>
          <div class="block" data-num="29"></div>
          <div class="block" data-num="30"></div>
          <div class="block" data-num="31"></div>
          <div class="block" data-num="32"></div>
          <div class="block" data-num="33"></div>
          <div class="block" data-num="34"></div>
          <div class="block" data-num="35"></div>
          <div class="block" data-num="36"></div>
          <div class="block" data-num="37"></div>
          <div class="block" data-num="38"></div>
          <div class="block" data-num="39"></div>
          <div class="block" data-num="40"></div>
          <div class="block" data-num="41"></div>
          <div class="block" data-num="42"></div>
          <div class="block" data-num="43"></div>
          <div class="block" data-num="44"></div>
          <div class="block" data-num="45"></div>
          <div class="block" data-num="46"></div>
          <div class="block" data-num="47"></div>
          <div class="block" data-num="48"></div>
          <div class="block" data-num="49"></div>
          <div class="block" data-num="50"></div>
          <div class="block" data-num="51"></div>
          <div class="block" data-num="52"></div>
          <div class="block" data-num="53"></div>
          <div class="block" data-num="54"></div>
          <div class="block" data-num="55"></div>
          <div class="block" data-num="56"></div>
          <div class="block" data-num="57"></div>
          <div class="block" data-num="58"></div>
          <div class="block" data-num="59"></div>
          <div class="divider"> </div>
          </div>
      </div>
      `;
  }

  changeProp() {
    animator();
  }


}

function animator() {
  const numbers = [
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
    [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
    [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]  // 9
  ];

  const blocks = [];
  const digits = Array.from(document.querySelectorAll('.block'));
  const secondElements = document.getElementsByClassName("block");

  for (let i = 0; i < 4; i++) {
    blocks.push(digits.slice(i * 15, i * 15 + 15));
  }

  const time = {
    s: '',
    m: '',
    h: '',
    p: null
  };

  animatorLoop(time, secondElements, blocks, numbers);

  // init
  window.requestAnimationFrame(animator)

}

function setNum(block, num, numbers) {
  const n = numbers[num];
  for (let i = 0; i < block.length; i++) {
    block[i].classList[n[i] === 1 ? 'add' : 'remove']('active');
  }
}

function animatorLoop(time, digits, blocks, numbers) {
  setInterval(() => {
    // eslint-disable-next-line prefer-const
    let d = new Date(),
      h = d.getHours().toString(),
      m = d.getMinutes().toString(),
      s = d.getSeconds().toString();

      s = s.length === 1 ? '0' + s : s;
      m = m.length === 1 ? '0' + m : m;
      h = h.length === 1 ? '0' + h : h;

      for (const digit of digits) {
        digit.classList.remove("second")
      }
      digits[s].classList.add("second");
  }, 1000);
}

