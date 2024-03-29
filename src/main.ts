import * as readline from 'readline';
import { CurrencyConverter } from './services/interfaces/CurrencyConverterServices';
import { ExchangeRateAPI } from './services/currencyConverter';

class CurrencyConverterApp {
  private converter: CurrencyConverter;
  private rl: readline.Interface;

  constructor(converter: CurrencyConverter) {
    this.converter = converter;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  async run() {
    try {
      this.rl.question('Entre com o valor que deseja converter: ', async (answer) => {
        const amount = parseFloat(answer);
        if(isNaN(amount)) {
          console.log('Por favor, insira um valor numérico');
          this.run();
          return;
        }
        this.rl.question('Qual a moeda do valor digitado? ', async(from) => {
          this.rl.question('Para qual moeda deseja converter? ', async(to) => {
          try {
            const result = await this.converter.convert(amount, from.toUpperCase(), to.toUpperCase());
            console.log(`${amount.toFixed(2)} ${from.toUpperCase()} eh igual a ${result.toFixed(2)} ${to.toUpperCase()}`);
            this.rl.close();
            
          } catch (error) {
            console.log(error);
          }
          })
        })
        
      })
            
    } catch (error) {
      console.error(error);
    }
  }
}

const app = new CurrencyConverterApp(new ExchangeRateAPI());
app.run();