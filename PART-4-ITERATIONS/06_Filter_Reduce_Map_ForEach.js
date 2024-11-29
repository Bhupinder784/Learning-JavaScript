//Reduce() -> Reduces an array to a single value(array.reduce(callback(accumulator, currentValue, index, array), initialValue);

// Sum of numbers
const numbers1 = [1, 2, 3, 4];
const sum = numbers1.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
//OR
const numbers11 = [1, 2, 3, 4];
const sum1 = numbers11.reduce((acc, num) => {
    return acc + num
}, 0);
console.log(sum1); // 10

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5]

///map()

// Multiply each element by 2
const numbers2 = [1, 2, 3];
const doubled = numbers2.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

const people = [{ name: 'Alice' }, { name: 'Bob' }];
const names = people.map(person => person.name);
console.log(names); // ['Alice', 'Bob']


////filter() -> Filters elements that satisfy a given condition, creating a new array.

// Filter even numbers
const numbers3 = [1, 2, 3, 4];
const evens = numbers3.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Filter objects with specific criteria
const people1 = [{ age: 18 }, { age: 22 }, { age: 15 }];
const adults = people1.filter(person => person.age >= 18);
console.log(adults); // [{ age: 18 }, { age: 22 }]


//forEach() ->  Iterates over elements in an array; does not return a new array. (array.forEach(callback(currentValue, index, array));
// Log each element
const numbers4 = [1, 2, 3];
numbers4.forEach(num => console.log(num));     // Output: 1 2 3

// Modify elements (use cautiously)
const arr = [1, 2, 3];
arr.forEach((num, index, array) => {
    array[index] = num * 2;
});
console.log(arr); // [2, 4, 6]

//every() -> array.every(callback(currentValue, index, array));

const numbers5 = [2, 4, 6];
const allEven = numbers5.every(num => num % 2 === 0);
console.log(allEven); // true


//some() -> Returns true if at least one element satisfies a condition. (array.some(callback(currentValue, index, array));

const numbers6 = [1, 3, 5, 6];
const hasEven = numbers6.some(num => num % 2 === 0);
console.log(hasEven); // true


//find()  -> Returns the first element that satisfies a condition   (array.find(callback(currentValue, index, array));

const numbers7 = [5, 12, 8];
const found = numbers7.find(num => num > 10);
console.log(found); // 12


//findIndex()  ->  Returns the index of the first element that satisfies a condition.   (array.findIndex(callback(currentValue, index, array));
const numbers8 = [5, 12, 8];
const index = numbers8.findIndex(num => num > 10);
console.log(index); // 1



//-----------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums = numbers.filter((num) => {
    return num > 4;
})
console.log(newNums);


const anotehrNums = [];
numbers.forEach((num) => {
    if(num > 4){
        anotehrNums.push(num);
    }
})
console.log(anotehrNums);





const card = [
    {
        item : "Matrix Shampoo",
        price : 450
    },
    {
        item : "Chamestry Body Wash",
        price : 400
    },
    {
        item : "Cleaser",
        price : 400
    },
    {
        item : "Hair Siram",
        price : 200
    }
]

const total = card.reduce((acc, num) => {
    console.log(acc);
    return acc + num.price + 1
},0);
console.log(`Your total bill is: ${total}`);