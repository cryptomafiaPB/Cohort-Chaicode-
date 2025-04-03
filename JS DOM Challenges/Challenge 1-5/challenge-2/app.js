/**
 * Write your challenge solution here
 */
const heading = document.getElementById('mainHeading');
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const purpleButton = document.getElementById('purpleButton');
const resetButton = document.getElementById('resetButton');

redButton.addEventListener('click', function () {
  heading.id = 'redButton';
});
greenButton.addEventListener('click', function () {
  heading.id = 'greenButton';
});
blueButton.addEventListener('click', function () {
  heading.id = 'blueButton';
});
purpleButton.addEventListener('click', function () {
  heading.id = 'purpleButton';
});
resetButton.addEventListener('click', function () {
  heading.id = 'resetButton';
});
