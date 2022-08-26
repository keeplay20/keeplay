const http = new EasyHTTP;

//GET Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Create Data
const data = {
    name: "John Doe",
    username: "johndoe",
    email: "jdoe@gmail.com"
};

//POST Users
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// //PUT Users
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Delete Users
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));