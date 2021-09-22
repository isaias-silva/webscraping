const private = require('./private')

const axios = require('axios')
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const ip = async function searchip() {
    let senha = readline.question("senha: " || 00);

    const apiKey = await private(senha)

    if (apiKey != undefined) {
        let ip = readline.question("digite o endereço ip: " || 00);

        const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}ip=${ip}`;
        console.log(url)
        //api key pode ficar invalida faça uma conta gratuita e troque por uma chave sua que funcione

        const consult = await axios.get(url)

        await console.log(consult.data)
    }else{console.log('senha incorreta!')}

}

const myip = async function ip() {


    const url = `https://api.ipgeolocation.io/getip`;

    //api key pode ficar invalida faça uma conta gratuita e troque por uma chave que funcione

    const consult = await axios.get(url)

    await console.log(consult.data)

}


module.exports = { search_ip: ip, my_ip: myip }