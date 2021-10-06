var $car = document.querySelector('.car');
var $background = document.querySelector('.background');

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

var $buttonTurtle = document.querySelector('.button-turtle');
$buttonTurtle.addEventListener('click', function () {
  $car.setAttribute('src', 'images/turtle.png');
  $car.style.margin = '20px 0';
  $background.style.backgroundImage = 'url(images/grass.jpeg)';
  $buttonCar.classList.remove('mode-active');
  $buttonCar.classList.add('mode-inactive');
  $buttonTurtle.classList.remove('mode-inactive');
  $buttonTurtle.classList.add('mode-active');
  $buttonFishy.classList.remove('mode-active');
  $buttonFishy.classList.add('mode-inactive');
});

var $buttonCar = document.querySelector('.button-car');
$buttonCar.addEventListener('click', function () {
  $car.setAttribute('src', 'images/f1.svg');
  $car.style.margin = '0';
  $background.style.backgroundImage = 'none';
  $buttonCar.classList.remove('mode-inactive');
  $buttonCar.classList.add('mode-active');
  $buttonTurtle.classList.remove('mode-active');
  $buttonTurtle.classList.add('mode-inactive');
  $buttonFishy.classList.remove('mode-active');
  $buttonFishy.classList.add('mode-inactive');
});

var $buttonFishy = document.querySelector('.button-fishy');
$buttonFishy.addEventListener('click', function () {
  $car.setAttribute('src', 'images/fishy.png');
  $car.style.margin = '20px 0';
  $background.style.backgroundImage = 'url(images/water.jpeg)';
  $buttonCar.classList.remove('mode-active');
  $buttonCar.classList.add('mode-inactive');
  $buttonTurtle.classList.remove('mode-active');
  $buttonTurtle.classList.add('mode-inactive');
  $buttonFishy.classList.remove('mode-inactive');
  $buttonFishy.classList.add('mode-active');
});
