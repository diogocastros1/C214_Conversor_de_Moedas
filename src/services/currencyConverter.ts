import axios from 'axios';
import { CurrencyConverter } from './interfaces/CurrencyConverterServices';

export class ExchangeRateAPI implements CurrencyConverter {
  async convert(amount: number, from: string, to: string): Promise<number> {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const rates = response.data.rates;
      if (rates.hasOwnProperty(to)) {
        const rate = rates[to];
        return amount * rate;
      } else {
        throw new Error(`Cannot convert to ${to}`);
      }
    } catch (error) {
      throw new Error('Unable to fetch exchange rates');
    }
  }
}