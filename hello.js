// arr=[1,2,3,5,8];
// max=0;
// for(i=0;i<arr.length;i++)
// {
//     max=(max>arr[i]) ? max : arr[i]
// }
// console.log("Result is",max)

// arr.sort((a, b) => a<b)


/* 
STUDY ABOUT
arrow function =>
spread operator ...
*/


let arr = ["ahmed", 23, "afroj"];
let detailobject = { name: 'afroj', age: 27, empid: 12345 };

// console.log([detailobject]);
console.log({ arr });
// console.log(detailobject.name);
// console.log(detailobject.age);
// console.log(Object.keys(detailobject));
// console.log(Object.values(detailobject));
// console.log(Object.values(detailobject)[1]); //prints position of the array

let result = [detailobject].map((item) => {
    return item.name;
})
// console.log(result); //for array

// console.log(Object.entries.(detailobject)); 