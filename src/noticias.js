
const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium


const notices = async function notices() {

    const url = `https://www.google.com/search?q=noticias&sxsrf=AOaemvKgbOAd501ZbF1_XTWUKtpsO9lERA:1632184364679&source=lnms&tbm=nws&sa=X&sqi=2&ved=2ahUKEwidtY7K6I7zAhXES_EDHZYpB0kQ_AUoAXoECAEQAw&biw=754&bih=690&dpr=0.9`
    const browser = await puppeteer.launch();
   
    const page = await browser.newPage();
    await page.goto(url);

    const resultado = await page.evaluate(() => {

        const noticia = [];
        for (let i = 0; i < 9; i++) {
            noticia.push(document.querySelectorAll('.mCBkyc.JQe2Ld.nDgy9d')[i].textContent.replace('\n', " "))
        }



        return (noticia);
    })

    await browser.close();

    console.log(`\n ########## NOTICIAS ######### \n`)
    for (let i in resultado) {
        console.log(`#${parseInt(i) + 1}\n ${resultado[i]} \n`)

    }

}
module.exports = notices