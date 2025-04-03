/**
 * Write your challenge solution here
 */

let button = document.getElementById('toggleButton');
let statusText = document.getElementById('status');
let bulb = document.getElementById('bulb');

document.body.className = 'dark-mode';

button.addEventListener('click', function () {
  if (button.innerHTML === 'Turn On') {
    bulb.className = 'bulb';
    button.innerHTML = 'Turn Off';
    document.body.className = '';
    statusText.innerHTML = 'Status: On';
  } else {
    bulb.className = 'bulb off';
    button.innerHTML = 'Turn On';
    document.body.className = 'dark-mode';
    statusText.innerHTML = 'Status: Off';
  }
});
