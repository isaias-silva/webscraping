const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal


const pesquisa = async function searchgoogle() {
    let pesquisa = readline.question("oque buscar?: " || 'javascript');
    let busca=pesquisa.replace(" ","_")
    const url = `https://pt.wikipedia.org/wiki/${busca}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const resultado = await page.evaluate(() => {

        return (document.getElementsByTagName('p')[1].textContent)
    })

    await browser.close();
    console.log(`\n Sobre ${pesquisa}: ${resultado} `)

}

module.exports = pesquisa;