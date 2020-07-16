"use strict";

// constante não pode ter seu valor reatribuido
var a = 1; // porém a constante pode mutar

var usuario = {
  nome: 'Guilherme'
};
usuario.nome = 'Miranda';
console.log(usuario.nome);

function teste(x) {
  // let são variáveis de escopo, ou seja, podem utilizadas apenas no escopo aonde foram criadas
  var y = 20;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
