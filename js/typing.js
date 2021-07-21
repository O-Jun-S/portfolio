// Can also be included with a regular script tag
import Typed from './typedjs_modules/typed.js';

var options = {
  strings: ["PCが好きな", "プログラミングが好きな", "数学が好きな", "競プロを始めた"],
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
};

var typed = new Typed('#typing', options);
