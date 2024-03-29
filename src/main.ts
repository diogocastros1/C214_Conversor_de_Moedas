import { CurrencyConverter } from './services/interfaces/CurrencyConverterServices';
import { ExchangeRateAPI } from './services/currencyConverter';

class CurrencyConverterApp {
  private converter: CurrencyConverter;

  constructor(converter: CurrencyConverter) {
    this.converter = converter;
  }

  async run() {
    try {
      const amount = 10;
      const from = 'USD';
      const to = 'EUR';
      const result = await this.converter.convert(amount, from, to);
      console.log(`${amount} ${from} equals ${result} ${to}`);
    } catch (e) {
      console.error(e.message);
    }
  }
}

const app = new CurrencyConverterApp(new ExchangeRateAPI());
app.run();