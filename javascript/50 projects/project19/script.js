const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

// const canvas = document.getElementById('canvas');
// const increaseBtn = document.getElementById('increase');
// const decreaseBtn = document.getElementById('decrease');
// const sizeEL = document.getElementById('size');
// const colorEl = document.getElementById('color');
// const clearEl = document.getElementById('clear');

// const ctx = canvas.getContext('2d');

// let size = 20;
// let isPressed = false;
// let color = 'black';
// let x;
// let y;

// canvas.addEventListener('mousedown', e => {
//   isPressed = true;

//   x = e.offsetX;
//   y = e.offsetY;

//   //   console.log(isPressed, x, y);
// });

// canvas.addEventListener('mouseup', e => {
//   isPressed = false;

//   x = undefined;
//   y = undefined;

//   //   console.log(isPressed, x, y);
// });

// canvas.addEventListener('mousemove', e => {
//   if (isPressed) {
//     const x2 = e.offsetX;
//     const y2 = e.offsetY;

//     // console.log(x2, y2);
//     drawCircle(x2, y2);
//     drawLine(x, y, x2, y2);

//     x = x2;
//     y = y2;
//   }
// });

// function drawCircle(x, y) {
//   ctx.beginPath();
//   ctx.arc(x, y, size, 0, Math.PI * 2);
//   ctx.fillStyle = color;
//   ctx.fill();
// }

// function drawLine(x1, y1, x2, y2) {
//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.strokeStyle = color;
//   ctx.lineWidth = size * 2;
//   ctx.stroke();
// }

// function updateSizeOnScreen() {
//   sizeEL.innerText = size;
// }

// increaseBtn.addEventListener('click', () => {
//   size += 5;

//   if (size > 50) {
//     size = 50;
//   }

//   updateSizeOnScreen();
// });

// decreaseBtn.addEventListener('click', () => {
//   size -= 5;

//   if (size < 5) {
//     size = 5;
//   }

//   updateSizeOnScreen();
// });

// colorEl.addEventListener('change', e => (color = e.target.value));

// clearEl.addEventListener('click', () =>
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
// );

// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);

// const fill = document.querySelector('.fill');
// const empties = document.querySelectorAll('.empty');

// fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragend', dragEnd);

// for (const empty of empties) {
//   empty.addEventListener('dragover', dragOver);
//   empty.addEventListener('dragenter', dragEnter);
//   empty.addEventListener('dragleave', dragLeave);
//   empty.addEventListener('drop', dragDrop);
// }

// function dragStart() {
//   //   console.log('drag start');
//   this.className += ' hold';
//   setTimeout(() => (this.className = 'invisible'), 0);
// }
// function dragEnd() {
//   //   console.log('drag end');
//   this.className = 'fill';
// }
// function dragOver(e) {
//   //   console.log('drag over');
//   e.preventDefault();
// }
// function dragEnter(e) {
//   //   console.log('drag enter');
//   e.preventDefault();
//   this.className += ' hovered';
// }
// function dragLeave() {
//   //   console.log('drag leave');
//   this.className = 'empty';
// }
// function dragDrop() {
//   //   console.log('drag drop');
//   this.className = 'empty';
//   this.append(fill);
// }

// const buttons = document.querySelectorAll('.ripple');

// buttons.forEach(button => {
//   button.addEventListener('click', function (e) {
//     const x = e.clientX;
//     const y = e.clientY;

//     const buttonTop = e.target.offsetTop;
//     const buttonLeft = e.target.offsetLeft;

//     // console.log(buttonTop, buttonLeft);
//     const xInside = x - buttonLeft;
//     const yInside = y - buttonTop;

//     const circle = document.createElement('span');
//     circle.classList.add('circle');
//     circle.style.top = yInside + 'px';
//     circle.style.left = xInside + 'px';

//     this.appendChild(circle);

//     setTimeout(() => circle.remove(), 500);
//   });
// });

// const hourEl = document.querySelector('.hour');
// const minuteEl = document.querySelector('.minute');
// const secondEl = document.querySelector('.second');
// const timeEl = document.querySelector('.time');
// const dateEl = document.querySelector('.date');
// const toggle = document.querySelector('.toggle');
// const ampm = hours >= 12 ? 'PM' : 'AM';

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

// toggle.addEventListener('click', e => {
//   const html = document.querySelector('html');
//   if (html.classList.contains('dark')) {
//     html.classList.remove('dark');
//     e.target.innerHTMl = 'Dark mode';
//   } else {
//     html.classList.add('dark');
//     e.target.innerHTMl = 'Light mode';
//   }
// });
// function setTime() {
//   const time = new Date();
//   const month = time.getMonth();
//   const day = time.getDay();
//   const date = time.setDate();
//   const hours = time.getHours();
//   const hoursForClock = hours % 12;
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(
//     hoursForClock,
//     0,
//     11,
//     0,
//     360
//   )}deg)`;
//   minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
//     minutes,
//     0,
//     59,
//     0,
//     360
//   )}deg)`;
//   secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
//     seconds,
//     0,
//     59,
//     0,
//     360
//   )}deg)`;

//   timeEl.innerHTML = `${hoursForClock}:${
//     minutes < 10 ? `0${minutes}` : minutes
//   }${ampm}`;
//   dateEl.innerHTML = `${days[day]},${months[month]}<span class="circle">${date}</span>`;
// }
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

// setTime();

// setInterval(setTime, 1000);
