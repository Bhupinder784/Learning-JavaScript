//ForEach

/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
*/

// [1, 2, 3].forEach(num => console.log(num));

/*
let numbers = [1, 2, 3, 4, 5, 6, 7]
function print(item){
    console.log(item);
}
numbers.forEach(print);
*/

/*
let numbers = [1, 2, 3, 4, 5, 6, 7]
numbers.forEach((item, idx, arr) =>{
    console.log(item, idx, arr);
})
*/

/*
const languages = [
    {
        languageName : "Python",
        extension : ".py"
    },
    {
        languageName : "Java",
        extension : ".java"
    },
    {
        languageName : "javaScript",
        extension : ".js"
    },
    {
        languageName : "C++",
        extension : ".cpp"
    }
]

languages.forEach((item) => {
    console.log(item.languageName)
})
*/

[1, 2, 3].forEach(num => console.log(num));


const obj = { list: null };
obj.list?.forEach(item => console.log(item)); // Does nothing, avoids error


const data = null;
(data ?? []).forEach(item => console.log(item)); // Does nothing, avoids error


const urls = ['url1', 'url2'];
urls.forEach(async url => {
    const response = await fetch(url);
    console.log(await response.text());
});
