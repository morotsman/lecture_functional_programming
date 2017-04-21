
const isEven = number => number%2 === 0

const add = (a,b) => a + b

const sumAllEvenNumbers = list => list.filter(isEven).reduce(add, 0);



