//Asyn/Await

async function requestNameEmailAddress(link) {
    try {
        const result = await fetch(link);
        let data = await result.json();
        let { city } = data.address;
        data = data.name + data.email + city;
        console.log(data);
    } catch (error) {
        throw new Error(error);
    }
}

const link1 = "https://jsonplaceholder.typicode.com/users/1";
const link2 = "https://jsonplaceholder.typicode.com/users/2";
const link3 = "https://jsonplaceholder.typicode.com/users/3"

try {
    const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(result => (result.json()))
        .then(data => (console.log(data.name, data.email, data.address)))
        .catch(error => { throw new Error(error) });
} catch (error) {
    throw new Error(error);
}

try {
    const promise2 = fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(result => (result.json()))
        .then(data => (console.log(data.name, data.email, data.address)))
        .catch(error => { throw new Error(error) });
} catch (error) {
    throw new Error(error);
}

try {
    const promise3 = fetch("https://jsonplaceholder.typicode.com/users/3")
        .then(result => (result.json()))
        .then(data => (console.log(data.name, data.email, data.address)))
        .catch(error => { throw new Error(error) });
} catch (error) {
    throw new Error(error);
}




requestNameEmailAddress(link1);
console.log(link1)
requestNameEmailAddress(link2);
requestNameEmailAddress(link3);