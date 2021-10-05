var $car = document.querySelector('.car');

var car = {
  x: 0,
  y: 0
};

function moveCarLeft(number) {
  $car.style.left = (car.x + number) + 'px';
  car.x += number;
}

function moveCarRight(number) {
  $car.style.left = (car.x - number) + 'px';
  car.x -= number;
}

function moveCarDown(number) {
  $car.style.top = (car.y + number) + 'px';
  car.y += number;
}

function moveCarUp(number) {
  $car.style.top = (car.y - number) + 'px';
  car.y -= number;
}

moveCarLeft(0);
moveCarRight(0);
moveCarDown(0);
moveCarUp(0);
