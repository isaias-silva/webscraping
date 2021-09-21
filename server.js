const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const menu=require("./src/menu")//menu 

//ao iniciar o programa

console.log('bot ativo!');

//função assincrona comparar dinheiro
async function searchmoney() {
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
    main()
}


async function searchgoogle() {
    let pesquisa=readline.question("oque buscar?: " || 'javascript');
  const url=`https://www.google.com/search?q=${pesquisa}&sxsrf=AOaemvJKM9cEk2nhAOOgVm3FGa4xkOf-vg%3A1632156988394&ei=PL1IYe--F9O45OUPrJSS-AQ&oq=pulga&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEJMCMgQIABBDMgYIABAKEEMyBQguEIAEMgUIABCABDIFCC4QgAQyCAguEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOg0ILhDIAxCwAxBDEJMCOgoILhDIAxCwAxBDOgcIIxDqAhAnOgQIIxAnOggILhCxAxCDAToLCAAQgAQQsQMQgwE6BwgAELEDEEM6DgguEIAEELEDEMcBEKMCOggIABCABBCxA0oFCDgSATFKBAhBGABQ7hNYyDFggTNoBHACeACAAYABiAHNBJIBAzAuNZgBAKABAbABCsgBDMABAQ&sclient=gws-wiz&ved=0ahUKEwjvzIrMgo7zAhVTHLkGHSyKBE8Q4dUDCA4&uact=5`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

const resultado=await page.evaluate(()=>{

    return (document.querySelector('.kno-rdesc').textContent).replace('Descrição','');
})

await browser.close();
    console.log(`\n Sobre ${pesquisa}: ${resultado} `)
    main();
}


async function notices() {
    
  const url=`https://www.google.com/search?q=noticias&sxsrf=AOaemvKgbOAd501ZbF1_XTWUKtpsO9lERA:1632184364679&source=lnms&tbm=nws&sa=X&sqi=2&ved=2ahUKEwidtY7K6I7zAhXES_EDHZYpB0kQ_AUoAXoECAEQAw&biw=754&bih=690&dpr=0.9`
   const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(url);

    const resultado=await page.evaluate(()=>{

const noticia=[];
for(let i=0; i<9;i++){
    noticia.push(document.querySelectorAll('.mCBkyc.JQe2Ld.nDgy9d')[i].textContent.replace('\n'," "))
}


   
return (noticia);
    })

await browser.close();
 
console.log(`\n ########## NOTICIAS ######### \n`)
for(let i in resultado)
{
console.log(`#${parseInt(i)+1}\n ${resultado[i]} \n`)

}
    main();
}

function main(){

    console.log('\x1b[32m',menu())
    console.log('\x1b[0m')
    let descicion=readline.question('oque deseja?' || '0') 
    switch(descicion){
        case '1':
            searchmoney()
            break;
        case '2':
            searchgoogle()
            break;
     
            case '3':
            notices()
                break;
            case '0':
            console.log("bye!")
            break;

        default:
            console.log('comando invalido! digite um dos numeros do menu!')
            main();
    }
}
main()