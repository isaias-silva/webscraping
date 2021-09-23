const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const envi = async function searchnm() {
    let title = readline.question("titulo: " || '000000000');
    let message = readline.question("mensagem(char max: 200 # char min:10): " || '000000000');
let destiny=readline.question("destinatário: " || '000000000');
    const url = 'https://emailanonimo.com.br/';
    //browser
    const browser = await puppeteer.launch({ headless: false });
    //pagina
    const page = await browser.newPage();
    //pagina vai para url
    await page.goto(url);
    await page.type('[name="email"]', destiny)
    await page.type('[name="titulo_email"]', title)
    await page.type('[name="mensagem"]', message)
   
    await page.click('button.btn.btn-warning')

    //evaluate pega valor do DOM da pagina


    console.log("enviado")
  

}
module.exports = { enviar: envi, }