console.log("#5");

const n = 1;
const m = 2;

const a = n + m;
const b = m - n;
const c = n * m;
const d = m / n;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("#6");

let arrayOne = ["1", "2", "3", "4", "5"];
let finalString = "";
for (i = 0; i < arrayOne.length; i++) {
  finalString = finalString + arrayOne[i] + " ";
}
console.log(finalString);

console.log("#7");

let arrayTwo = ["1", "2", "3", "4", "5"];
let finalStringTwo = "";
for (i = arrayTwo.length - 1; i >= 0; i--) {
  finalStringTwo = finalStringTwo + arrayTwo[i] + " ";
}
console.log(finalStringTwo);

console.log("#8");

function getMarkInfo(condition) {
  if (condition === 10) {
    console.log("У вас максимальный балл");
  } else {
    console.log("У вас средний балл");
  }
}

getMarkInfo(10);
getMarkInfo(1);


console.log("#9");

function getDayInfo(position) {
  switch (position) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log ('Tuesday');
      break;  
    case 3:
      console.log ('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    default:
      console.log('Wrong data');
  }
}
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);


console.log('#10')

const arrayThree = ['a', 'b', 'c'];
arrayThree.push(1, 2, 3);

console.log(arrayThree);



console.log('#11')

const arrayFour = [1, 2, 3];
const arrayFive = [4, 5, 6];

const arrayFull = arrayFour.concat(arrayFive);

console.log(arrayFull)


console.log('#12')

let num = prompt('введите любое целое положительное число');

function countNumber(number) {
  let sum = 0;
  for (i = 1; i <= number; i++){
    sum = sum + i;
  }
  console.log(sum)
}
countNumber(num)
