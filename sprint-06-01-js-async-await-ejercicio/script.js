//Asyn/Await

async function requestNameEmailAddress(link) {
    const result = await fetch(link);
    const data = await result.json();
    data = data.name + data.email + data.address
    return data;
}

const link1 = "https://jsonplaceholder.typicode.com/users/1";
const link2 = "https://jsonplaceholder.typicode.com/users/2";
const link3 = "https://jsonplaceholder.typicode.com/users/3"

const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(result => (result.json()))
    .then(data => (console.log(data.name, data.email, data.address)))

const promise2 = fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(result => (result.json()))
    .then(data => (console.log(data.name, data.email, data.address)))


const promise3 = fetch("https://jsonplaceholder.typicode.com/users/3")
    .then(result => (result.json()))
    .then(data => (console.log(data.name, data.email, data.address)))





Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values.reduce((accumulator, currentValue) => accumulator + currentValue))
});