class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(fazer) {
        this.todos.push(fazer);
        console.log(this.todos);
    }
}

class Filha extends TodoList {
    constructor() {
        super();

        this.usuario = 'Guilherme';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}
var MinhaLista = new Filha();

var fazer;

var soma;

document.getElementById('novotodo').onclick = function() {
    fazer = document.getElementById('input').value;
    MinhaLista.addTodo(fazer);
    MinhaLista.mostraUsuario();
    console.log(Matematica.soma(1, 2));
}

