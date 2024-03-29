import { ExchangeRateAPI } from '../currencyConverter';

describe('ExchangeRateAPI', () => {
  it('should convert USD to EUR correctly', async () => {
    const converter = new ExchangeRateAPI();
    const amount = 10;
    const from = 'USD';
    const to = 'EUR';
    const result = await converter.convert(amount, from, to);
    console.log(result)
    expect(result).toBeGreaterThan(0);
  });

  it('should throw an error for invalid currency', async () => {
    const converter = new ExchangeRateAPI();
    const amount = 10;
    const from = 'USD';
    const to = 'INVALID';
    await expect(converter.convert(amount, from, to)).rejects.toThrow('Unable to fetch exchange rates');
  });
});