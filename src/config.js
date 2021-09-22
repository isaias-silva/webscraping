const naoprocuro = require('./data/listprob.json')
const Mostrar=function(){
    console.log(` palavras proibidas:`)
   for(let i in naoprocuro)
   {
    console.log('\033[31m',`#${naoprocuro[i]}#`)
   }
   console.log('\u001b[0m',`#############`)
}



const Remover = function (nome) {
    let encontrou = false;
    for (let i in naoprocuro) {

        if (naoprocuro[i] == nome) {
            naoprocuro.splice(i, 1);
            console.log('\x1b[32m',`${nome} encontrado e removido!`)
            console.log('\x1b[0m','')
            encontrou = true;
        }
    }

    if (encontrou == false) { console.log("não encontrado") }

}

const Adicionar = function (nome){
    naoprocuro.push(nome);
    console.log('\x1b[32m',`${nome} adicionado`)
    console.log('\x1b[0m','')
}

module.exports={add:Adicionar,rm:Remover,ms:Mostrar}