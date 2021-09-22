const bcrypt = require('bcrypt')
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const private = require('./data/private.json')

const check = async function (s) {

    const compare = await bcrypt.compare(s, private.senha)

    if (compare == true) { return private.apikey }











}

module.exports = check