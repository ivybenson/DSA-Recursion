// const sumOf = function (list) {
//   // Base case
//   if (list.length === 1) {
//     return list[0];
//   }
//   // General case
//   return list[0] + sumOf(list.slice(1));
// };

// let lst = [2, 4, 6, 8, 10];
// console.log(sumOf(lst));

// function countSheep(sheepNum) {
//   if (sheepNum === 0) {
//     return "All sheep have jumped";
//   } else {
//     console.log(`${sheepNum} have jumped over the fence`);
//     totalSheep = sheepNum - 1;
//     countSheep(totalSheep);
//   }
// }

// countSheep(3);

function powerCalculator(a, b) {
  const c = a ** b;
  if (b > 0) {
    return c;
  } else if (b <= 0) {
    return "exponent should be >= 0";
  }
}

console.log(powerCalculator(10, -2));

function reverseString() {}
