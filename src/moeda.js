const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal



const money = async function searchmoney() {
    let moeda1 = readline.question("informe a moeda base: " || 'dolar');
    let moeda2 = readline.question(("informe a moeda final: " || 'real'));
    const url = `https://www.google.com/search?q=${moeda1}+para+${moeda2}&sxsrf=AOaemvKsCVNyAEuy-ID9QtLBx1TzUAf-Aw%3A1632145300056&ei=lI9IYbvuApTB5OUP98SViAs&oq=dolar+para+real&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEIAEEEYQggIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgAELADEEM6CAgAEIAEELEDOgQIABBDOggIABCABBDJAzoNCAAQgAQQsQMQRhCCAkoECEEYAFCNhw1Y45YNYO2ZDWgBcAJ4AIABc4gBmAiSAQMxLjmYAQCgAQHIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwi7iNOG143zAhWUILkGHXdiBbEQ4dUDCA4&uact=5`;
    //browser
    const browser = await puppeteer.launch();
    //pagina
    const page = await browser.newPage();
    //pagina vai para url
    await page.goto(url);

    //evaluate pega valor do DOM da pagina

    const resultado = await page.evaluate(() => {

        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;


    })
    //fechar navegador
    await browser.close();
    console.log(`\n 1 ${moeda1}(s) vale ${resultado} ${moeda2}(s)\n`)

}

module.exports = money;