const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const naoprocuro = ['gore', 'loli', 'porn', 'porno', 'xxx', 'xvideos']//palavras proibidas(pode adicionar outras para teste)


const pesquisa = async function searchgoogle() {
  let pesquisa = readline.question("oque buscar?: " || 'javascript');
  let bad = false;

  for (let i in naoprocuro) {
    if (naoprocuro[i].includes(pesquisa)) {
      bad = true;
    }
  }

  if (bad == true) {
  console.log('não procuro isso! por favor nem venha!')

  } else {

    const url = `https://www.google.com/search?q=${pesquisa}&sxsrf=AOaemvJdQ-B4MYPUzPY6QzX5vWciJh_9NQ%3A1632245490399&ei=8hZKYcn8F4_B5OUP-PSniA4&oq=relevo&gs_lcp=Cgdnd3Mtd2l6EAMyCggAELEDEIMBEEMyCggAELEDEIMBEEMyBwgAELEDEEMyBAgAEEMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6EQguEIAEELEDEIMBEMcBEKMCSgQIQRgAUKYdWM4pYLQraARwAngAgAGDAYgBnAWSAQMxLjWYAQCgAQGwAQrIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwjJvZClzJDzAhWPILkGHXj6CeEQ4dUDCA4&uact=5`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const resultado = await page.evaluate(() => {
      const desc1 = document.querySelector('.hgKElc');
      const desc2 = document.querySelector('.kno-rdesc')

      if (desc1 == null && desc2 != null) {
        return (desc2.textContent.replace("Descrição", ' '))
      }
      if (desc2 == null && desc1 != null) {
        return (desc1.textContent)
      }
      if (desc1 != null && desc2 != null) {
        return (`${(desc2.textContent).replace("Descrição", ' ')} \n ${desc1.textContent}`)
      }


    })

    await browser.close();
    console.log(`\n Sobre ${pesquisa}: ${resultado} `)

  }
}

module.exports = pesquisa;