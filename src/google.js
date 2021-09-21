const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal


const google = async function searchgoogle() {
    let pesquisa = readline.question("oque buscar?: " || 'javascript');
    const url = `https://www.google.com/search?q=${pesquisa}&sxsrf=AOaemvJKM9cEk2nhAOOgVm3FGa4xkOf-vg%3A1632156988394&ei=PL1IYe--F9O45OUPrJSS-AQ&oq=pulga&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMgQIABBDMgYIABAKEEMyBQguEIAEMgUIABCABDIFCC4QgAQyCAguEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOg0ILhDIAxCwAxBDEJMCOgoILhDIAxCwAxBDOgcIIxDqAhAnOgQIIxAnOggILhCxAxCDAToLCAAQgAQQsQMQgwE6BwgAELEDEEM6DgguEIAEELEDEMcBEKMCOggIABCABBCxA0oFCDgSATFKBAhBGABQ7hNYyDFggTNoBHACeACAAYABiAHNBJIBAzAuNZgBAKABAbABCsgBDMABAQ&sclient=gws-wiz&ved=0ahUKEwjvzIrMgo7zAhVTHLkGHSyKBE8Q4dUDCA4&uact=5`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const resultado = await page.evaluate(() => {

        return (document.querySelector('.kno-rdesc').textContent).replace('Descrição', '');
    })

    await browser.close();
    console.log(`\n Sobre ${pesquisa}: ${resultado} `)

}

module.exports = google;