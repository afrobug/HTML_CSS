let arr = [2, 3, 4, 6, 77, 33, 22];
let num = 2;

let result = arr.find(checkNum);

function checkNum(numcheck) {
    return numcheck === num;
}
console.log(Boolean(result));

// let flag = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         flag = 1;
//     }
// }
// if (flag > 0) {
//     console.log("yes")
// } else {
//     console.log("No")
// }