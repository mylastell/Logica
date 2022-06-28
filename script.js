// Crie um objeto que receba ao menos três propriedades sobre você.
let pessoa = [
    {
        nome: "Mylena",
        idade: 22,
        faculdade: "Uerj"
    },
]
console.log(pessoa)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
pessoa.time ="Botafogo"
console.log(pessoa)

// Remova uma propriedade desse objeto.
delete pessoa.time
console.log(pessoa)

//Mostre no console todas as propriedades desse objeto.
console.log(pessoa)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Jésus",
        idade: 23,
        telefone: 980028922,
        amigos: ["Stella", "Andressa", "Raquel", "Waleska", "Helder"],
    },
     {
          nome: "Andressa",
          idade: 19,
          telefone: 222131,
          amigos: ["Stella", "Jésus", "Raquel", "Waleska", "Helder"]
   }, 
   {
           nome: "Raquel",
           idade: 22,
           telefone: 3123123,
           amigos: ["Stella", "Andressa", "Jésus", "Waleska", "Helder"]
     }, 
     {
           nome: "Waleska",
           idade: 18,
           telefone: 4342342,
           amigos: ["Stella", "Andressa", "Raquel", "Jésus", "Helder"]
     }, 
     {
           nome: "Helder",
           idade: 20,
           telefone: 3123123,
           amigos: ["Stella", "Andressa", "Raquel", "Waleska", "Jésus"]
     
     }
]

// Mostre no console o nome de um amigo de cada lista.

for(let contador = 0; contador < cadastro.length; contador++ ){
    console.log(cadastro[contador].amigos[contador])
}
