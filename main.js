var $car = document.querySelector('.car');

var car = {
  isMoving: false,
  isFacing: 'right',
  x: 30,
  y: 0
};

var timer;

function startCar() {
  timer = setInterval(moveCar, 16);
  car.isMoving = true;
}

function moveCar() {
  if (car.isFacing === 'right') {
    $car.style.left = (car.x += 1) + 'px';
  } else if (car.isFacing === 'left') {
    $car.style.left = (car.x -= 1) + 'px';
  } else if (car.isFacing === 'down') {
    $car.style.top = (car.y += 1) + 'px';
  } else if (car.isFacing === 'up') {
    $car.style.top = (car.y -= 1) + 'px';
  }
}

function stopCar() {
  clearInterval(timer);
  car.isMoving = false;
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    if (car.isMoving === false) {
      startCar();
    } else if (car.isMoving === true) {
      stopCar();
    }
  } else if (e.keyCode === 39) {
    car.isFacing = 'right';
    $car.style.transform = 'rotate(0deg)';
  } else if (e.keyCode === 37) {
    car.isFacing = 'left';
    $car.style.transform = 'rotate(180deg)';
  } else if (e.keyCode === 40) {
    car.isFacing = 'down';
    $car.style.transform = 'rotate(90deg)';
  } else if (e.keyCode === 38) {
    car.isFacing = 'up';
    $car.style.transform = 'rotate(-90deg)';
  }
});
