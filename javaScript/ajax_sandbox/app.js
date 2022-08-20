document.getElementById('button1').addEventListener
    ('click', getText);

document.getElementById('button2').addEventListener
    ('click', getJSON);

document.getElementById('button3').addEventListener
    ('click', getAPI);

// Get local text file data
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => { document.getElementById('output').innerHTML = data })
        .catch(err => console.log(err));
}

// Get local json data
function getJSON() {
    fetch('post.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title} :- ${post.body}</li>`;
                // output += `<li></li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

//GET API Data
function getAPI() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (api) {
                output += `<li>${api.login} : ${api.type}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}


// One line function does not need braces
// const sayHello = () => console.log("Hello");
// sayHello();


// One line returns
// const sayHello = () => 'Hello';
// console.log(sayHello());

//Return object
// const sayHello = () => ({ msg: 'Hello' }); 

//Function with parameter
//Single param does not need paranthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Tom')

//Multiple params need paranthesis
// const sayHello = (firstname, lastName) => console.log(`Hello ${firstname} ${lastName}`);
// sayHello('Steve', 'Smith');


const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map(function (name) {
//     return name.length;
// })
// console.log(nameLengths);

//Shorter
// const users = ['Nathan', 'John', 'William'];
// const nameLengths = users.map((name) => {
//     return name.length;
// })
// console.log(nameLengths);

//Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);