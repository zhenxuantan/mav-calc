let first = 0;
let second = 0;
let result = 0;
let oper = "+";
let disp = 0;
let firstneg = false;
let secondneg = false;
let dec = false;
let decDivide = 10;

function display() {
  var num;
  switch (disp) {
    case 0:
      if (firstneg) {
        num = first * -1;
      } else {
        num = first;
      }
      break;
    case 1:
      if (secondneg) {
        num = second * -1;
      } else {
        num = second;
      }
      break;
    case 2:
      num = result;
      break;
    default:
      num = 0;
  }

  if (num > 999999999) {
    num = num.toExponential(7);
  } else {
    num = Number(num.toPrecision(10));
  }
  document.getElementById("display").innerHTML = num;
}

function append(num) {
  switch (disp) {
    case 0:
      if (dec) {
        first = (first * decDivide + num) / decDivide;
        decDivide *= 10;
      } else {
        first = first * 10 + num;
      }
      break;
    case 1:
      if (dec) {
        second = (second * decDivide + num) / decDivide;
        decDivide *= 10;
      } else {
        second = second * 10 + num;
      }
      break;
    case 2:
      disp = 0;
      first = num;
      break;
    default:
      break;
  }
  display();
}

function op(operation) {
  if (disp == 1) {
    equal();
    disp = 0;
    display();
    second = 0;
    disp = 1;
  } else {
    dec = false;
    decDivide = 10;
    oper = operation;
    if (firstneg) {
      first = first * -1;
    }
    second = 0;
    disp = 1;
  }
}

function dot() {
  dec = true;
}

function equal() {
  if (secondneg) {
    second = second * -1;
  }
  switch (oper) {
    case "+":
      result = first + second;
      break;
    case "X":
      result = first * second;
      break;
    case "-":
      result = first - second;
      break;
    case "/":
      result = first / second;
      break;
  }
  dec = false;
  decDivide = 10;
  first = result;
  disp = 2;
  firstneg = false;
  secondneg = false;
  display();
}

function minus() {
  switch (disp) {
    case 0:
      if (first == 0) {
        firstneg = true;
      } else {
        op("-");
      }
      break;
    case 1:
      if (second == 0) {
        secondneg = true;
      } else {
        op("-");
      }
      break;
    default:
      break;
  }
}
