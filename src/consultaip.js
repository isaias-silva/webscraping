const axios=require('axios')
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const ip = async function searchip() {
    let ip = readline.question("digite o endereço ip: " || 00);

    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=c84ce82c7af0455b80fcb229416133d0&ip=${ip}`;

    //api key pode ficar invalida faça uma conta gratuita e troque por uma chave que funcione

const consult= await axios.get(url)
      
 await console.log(consult.data)
     
    }
 
    const myip = async function ip() {
  
    
        const url = `https://api.ipgeolocation.io/getip`;
    
        //api key pode ficar invalida faça uma conta gratuita e troque por uma chave que funcione
    
    const consult= await axios.get(url)
          
     await console.log(consult.data)
         
        }
   

module.exports = {search_ip:ip,my_ip:myip}