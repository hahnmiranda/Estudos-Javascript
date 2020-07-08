// DESAFIO 1: Crie uma função que recebe a idade de um usuário e retorna 
// uma Promise que depois de 2 segundos retornará se usuário é maior ou não 
// que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve 
// cair no .then, caso contrário, no .catch

// var inputElement = document.querySelector('input');
// var btnElement = document.querySelector('button');

// var idade;

// btnElement.onclick = function() {
//     idade = inputElement.value;

//     minhaPromise()
//         .then(function(response) {
//             console.log(response);
//         })
//         .catch(function(error) {
//             console.warn(error);
//         });
// }

// var minhaPromise = function() {
//     return new Promise(function(resolve, reject) {
//         if(idade >= 18) {
//             resolve('Maior de idade!');
//         } else {
//             reject('Menor de idade');
//         }
//     });
// }

// btnElement.onclick = function() {
//     const idade = inputElement.value;

//     checaIdade(idade) 
//         .then(function() {
//             console.log("Maior ou igual a 18"); 
//         })
//         .catch(function() { 
//             console.log("Menor que 18");
//         });
// }

// function checaIdade(idade) {
//     return new Promise(function(resolve, reject) {
//         if(idade >= 18) {
//             resolve('Maior de idade!');
//         } else {
//             reject('Menor de idade');
//         }
//     });
// }

// DESAFIO 2: Crie uma tela com um <input> que deve receber o nome 
// de um usuário no Github. Após digitar o nome do usuário e clicar no 
// botão buscar a aplicação deve buscar pela API do Github (conforme 
// URL abaixo) os dados de repositórios do usuário e mostrá-los 
// em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var users = JSON.parse(localStorage.getItem('user_list')) || [];

// function renderUsers() {
//     listElement.innerHTML = '';

//     for(user of users) {
//         var userElement = document.createElement('li');
//         var userText = document.createTextNode(user);

//         var linkElement = document.createElement('a');

//         linkElement.setAttribute('href', '#');

//         var pos = users.indexOf(user);
//         linkElement.setAttribute('onclick', 'deleteUser('+ pos +')');

//         var linkText = document.createTextNode(' Excluir');

//         linkElement.appendChild(linkText)

//         userElement.appendChild(userText);
//         userElement.appendChild(linkElement);

//         listElement.appendChild(userElement);
//     }
// }

// renderUsers();

// function addUser() {
//     var userText = inputElement.value;

//     users.push(userText);
//     inputElement.value = '';
//     renderUsers();
//     saveToStorage();
// }

// function deleteUser(pos) {
//     users.splice(pos, 1);
//     renderUsers();
//     saveToStorage();
// }

// function saveToStorage() {
//     localStorage.setItem('user_list', JSON.stringify(users));
// }

var repositorios = JSON.parse(localStorage.getItem('repositorios_list')) || [];

function renderRepositorios() {
    listElement.innerHTML = '';

    for(repositorio of repositorios) {
        var repositorioElement = document.createElement('li');
        var repositorioText = document.createTextNode(repositorio);

        repositorioElement.appendChild(repositorioText);

        listElement.appendChild(repositorioElement);
    }
}

renderRepositorios();

function addRepositorio(repositorio) {
    repositorios.push(repositorio);
    inputElement.value = '';
    renderRepositorios();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('repositorios_list', JSON.stringify(repositorios));
}

buttonElement.onclick = function buscaUser() {

    while(repositorios.length) {
        repositorios.pop();
    }
    saveToStorage();
    
    if(inputElement.value != "") {
        var urlBusca = 'https://api.github.com/users/' + inputElement.value + '/repos';

        axios.get(urlBusca)
            .then(function(response) {
                if(response.status == 200) {
                    for (repositorio in response.data) {
                        addRepositorio(response.data[repositorio].name);
                    }
                }
            })
            .catch(function(error) {
                console.warn(error);
            });
    }  
}