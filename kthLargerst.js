const points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) { return a - b });
let k = 1;
let highest = points[k - 1];

console.log(points);
console.log(highest);