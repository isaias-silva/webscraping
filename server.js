const puppeteer = require('puppeteer');//PUPPTEER responsavel pelo webscraping com chormium
const readline = require('readline-sync');//readline responsavel por receber as variaveis pelo terminal
const menu = require("./src/menu");//menu 
const money = require('./src/moeda');//função dinheiro
const notices = require('./src/noticias');//função noticias
const pesquisa = require('./src/pesquisa');//função pesquisa
const config = require('./src/config')
const ip = require('./src/consultaip')

console.log(`
       
             
                    ─────────────────────────────────
                    ───────────────▄████████▄────────
                    ─────────────▄█▀▒▒▒▒▒▒▒▀██▄──────
                    ───────────▄█▀▒▒▒▒▒▒▒▒▒▒▒██──────
                    ─────────▄█▀▒▒▒▒▒▒▄▒▒▒▒▒▒▐█▌─────
                    ────────▄█▒▒▒▒▒▒▒▒▀█▒▒▒▒▒▐█▌─────
                    ───────▄█▒▒▒▒▒▒▒▒▒▒▀█▒▒▒▄██──────
                    ──────▄█▒▒▒▒▒▒▒▒▒▒▒▒▀█▒▄█▀█▄─────
                    ─────▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒██▀▒▒▒█▄────
                    ────▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▄───
                    ───▄█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▄──
                    ──▄█▒▒▒▄██████▄▒▒▒▒▄█████▄▒▒▒▒█──
                    ──█▒▒▒█▀░░░░░▀█─▒▒▒█▀░░░░▀█▒▒▒█──
                    ──█▒▒▒█░░▄░░░░▀████▀░░░▄░░█▒▒▒█──
                    ▄███▄▒█▄░▐▀▄░░░░░░░░░▄▀▌░▄█▒▒███▄
                    █▀░░█▄▒█░▐▐▀▀▄▄▄─▄▄▄▀▀▌▌░█▒▒█░░▀█
                    █░░░░█▒█░▐▐──▄▄─█─▄▄──▌▌░█▒█░░░░█
                    █░▄░░█▒█░▐▐▄─▀▀─█─▀▀─▄▌▌░█▒█░░▄░█
                    █░░█░█▒█░░▌▄█▄▄▀─▀▄▄█▄▐░░█▒█░█░░█
                    █▄░█████████▀░░▀▄▀░░▀█████████░▄█
                    ─██▀░░▄▀░░▀░░▀▄░░░▄▀░░▀░░▀▄░░▀██
                    ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@  @@@@  @@@@  @@       @(      @@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@  @@    @@@  @@  @@@@@@(  @@@  @@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@, @@ @@  @  @@@      @@(      @@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@   .@@@   @@@@  @@@@@@(  @@@  @@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@ ,@@@@       @(      @@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@      (@@@      @@       @@@@@   @@@@@       @@  @@%  @@@@  &@@@      %@@@@
@@@@@  @@@@@@@  @@@@@@@  @@@  @@@@  @  @@@@  @@@  @@  @@% @  @@  &@@  @@@@@@@@@@
@@@@@@@    @@   @@@@@@@     .@@@@  @@@  @@@      @@@  @@% .@  @. &@   @@@@  @@@@
@@@@@@@@@@  @@  @@@@@@@  @@@  @@  @@@@@  @@  @@@@@@@  @@%  @@@   &@@  @@@@  @@@@
@@@@@@    @@@@@@    *@@  @@@@    &@@@@@#  @  @@@@@@@  @@%  @@@@# &@@@#   @  @@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  @@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



`);




function main() {

    console.log('\x1b[32m', menu())
    console.log('\x1b[0m')
    let descicion = readline.question('oque deseja?' || '0')
    switch (descicion) {
        case '1':
            money().then(() => { main() })
            break;
        case '2':
            pesquisa().then(() => { main() })

            break;

        case '3':
            notices().then(() => { main() })
            break;
        case '4':
            config.ms()
            let pa = readline.question("qual a palavra deseja adicionar?  " || "")
            if (pa.length > 1) {

                config.add(pa);
                config.ms()
                main()

            } else {
                console.log("palavra vazia! ou curta demais")
                main()
            }
            break;
        case '5':
            let pr = readline.question("qual a palavra deseja remover?  " || "")
            if (pr.length > 1) {
                config.rm(pr);
                config.ms()
                main()
            } else {
                console.log("palavra vazia! ou curta demais")
                main()
            }

            break;

        case '6':
            ip.search_ip().then(() => { main() })

            break;
        case '7':
            ip.my_ip().then(() => { main() })

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