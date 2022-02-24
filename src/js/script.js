// const $wrapper = document.querySelector('.progress__wrap');
const $loader = document.querySelector('.progress__loader');
const $progressExecution = document.querySelector('.progress__execution');
const $progressPercentage = document.querySelector('.progress__percentage');
const computedStyle = getComputedStyle($loader);
let computedLeft = +getComputedStyle($loader).left.slice(0, -2);
// console.log(computedLeft);

let counterPercentage = 0;
let step = +Math.abs((1 / computedLeft) * 100).toFixed(3);
console.log(step);

//Рекурсивный SetTimeout
let timer = setTimeout(function increaseLeft() {
  computedLeft += 1;
  counterPercentage += step;

  $loader.style.left = computedLeft + 'px';
  $progressPercentage.textContent = `${Math.round(counterPercentage)} %`;

  let newTimer = setTimeout(increaseLeft, 10);

  if (computedLeft > 0) {
    $progressExecution.innerHTML = 'Completed &#127881';
    clearTimeout(newTimer);
    console.log('timer is cleaned');
  }
}, 1500);
