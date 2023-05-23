const display = document.querySelector('display');





async function getUsers(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}


function init(){

getUsers().then(data => {
    let output = '';
    data.forEach(user => {
        output += `<li>${user.name}</li>`
    });
    document.querySelector('.display').innerHTML = output;
})


}


init();