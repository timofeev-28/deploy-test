'use strict';

// делаем свою библиотеку на нахождение трубуемых величин

;( function() {
  function squareSquare(side) {
    return side ** 2;
  }

  function perimeterSquare(side) {
    return side * 4;
  }

  function squareRectangle(sideA, sideB) {
    return sideA * sideB;
  }

  function perimeterRectangle(sideA, sideB) {
    return 2 * (sideA + sideB);
  }

  function squareCircle(radius) {
    return Math.PI * radius ** 2;
  }

  function lengthCircle(radius) {
    return 2 * Math.PI * radius;
  }

  function squareTriangle(sideA, sideB, sideC) {
    let p = (sideA + sideB + sideC) / 2;
    return Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
  }

  window.figureCalc = {squareSquare, perimeterSquare, squareRectangle, perimeterRectangle, squareCircle, lengthCircle, squareTriangle};
})();


// Задача №1

(function() {
  let task1 = document.querySelector('.task-1');
  let side = task1.querySelector('.input-1');
  let resS = task1.querySelector('.result--s');
  let resP = task1.querySelector('.result--p');
  let btn = task1.querySelector('.btn');
  let btnClear = task1.querySelector('.btn-clear');

  btn.addEventListener('click', function() {
    resS.textContent = figureCalc.squareSquare(+side.value);
    resP.textContent = figureCalc.perimeterSquare(+side.value);
  });

  btnClear.addEventListener('click', function() {
    side.value = '';
    resS.textContent = '';
    resP.textContent = '';
  });
})();


// Задача №2

(function() {
  let task2 = document.querySelector('.task-2');
  let sideA = task2.querySelector('.input-1');
  let sideB = task2.querySelector('.input-2');
  let resS = task2.querySelector('.result--s');
  let resP = task2.querySelector('.result--p');
  let btn = task2.querySelector('.btn');
  let btnClear = task2.querySelector('.btn-clear');

  btn.addEventListener('click', function() {
    resS.textContent = figureCalc.squareRectangle(+sideA.value, +sideB.value);
    resP.textContent = figureCalc.perimeterRectangle(+sideA.value, +sideB.value);
  });

  btnClear.addEventListener('click', function() {
    sideA.value = '';
    sideB.value = '';
    resS.textContent = '';
    resP.textContent = '';
  });
})();


// Задача №3

(function() {
  let task3 = document.querySelector('.task-3');
  let radius = task3.querySelector('.input-1');
  let resS = task3.querySelector('.result--s');
  let resP = task3.querySelector('.result--p');
  let btn = task3.querySelector('.btn');
  let btnClear = task3.querySelector('.btn-clear');

  btn.addEventListener('click', function() {
    resS.textContent = figureCalc.squareCircle(+radius.value).toFixed(3);
    resP.textContent = figureCalc.lengthCircle(+radius.value).toFixed(3);
  });

  btnClear.addEventListener('click', function() {
    radius.value = '';
    resS.textContent = '';
    resP.textContent = '';
  });
})();


// Задача №4

(function() {
  let task4 = document.querySelector('.task-4');
  let sideA = task4.querySelector('.input-1');
  let sideB = task4.querySelector('.input-2');
  let sideC = task4.querySelector('.input-3');
  let resS = task4.querySelector('.result--s');
  let btn = task4.querySelector('.btn');
  let btnClear = task4.querySelector('.btn-clear');

  btn.addEventListener('click', function() {
    resS.textContent = figureCalc.squareTriangle(+sideA.value, +sideB.value, +sideC.value).toFixed(3);
  });

  btnClear.addEventListener('click', function() {
    sideA.value = '';
    sideB.value = '';
    sideC.value = '';
    resS.textContent = '';
  });
})();

