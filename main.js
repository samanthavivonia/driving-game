var $car = document.querySelector('.car');

var car = {
  isMoving: false,
  x: 30,
  y: 0
};

var timer;

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 32 && car.isMoving === false) {
    timer = setInterval(moveCarLeft, 16);
    car.isMoving = true;
  } else if (e.keyCode === 32 && car.isMoving === true) {
    clearInterval(timer);
    car.isMoving = false;
  }
});

function moveCarLeft() {
  $car.style.left = (car.x += 1) + 'px';
}

// function moveCarRight() {
//   $car.style.left = (car.x -= 1) + 'px';
// }

// function moveCarDown() {
//   $car.style.down = (car.y += 1) + 'px';
// }

// function moveCarUp() {
//   $car.style.down = (car.y -= 1) + 'px';
// }
