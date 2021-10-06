var $car = document.querySelector('.car');

var car = {
  x: 25,
  y: 0
};

var timer;

function startCar() {
  timer = setInterval(moveCarLeft, 16);
}

function stopCar() {
  clearInterval(timer);
}

function moveCarLeft() {
  $car.style.left = (car.x += 1) + 'px';
}

startCar();
stopCar();

// function moveCarRight() {
//   $car.style.left = (car.x -= 1) + 'px';
// }

// function moveCarDown() {
//   $car.style.down = (car.y += 1) + 'px';
// }

// function moveCarUp() {
//   $car.style.down = (car.y -= 1) + 'px';
// }
