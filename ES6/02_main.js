// constante não pode ter seu valor reatribuido
const a = 1;

// porém a constante pode mutar
const usuario = { nome: 'Guilherme'};

usuario.nome = 'Miranda';

console.log(usuario.nome)

function teste(x) {
    // let são variáveis de escopo, ou seja, podem utilizadas apenas no escopo aonde foram criadas
    let y = 20;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);

