export interface CurrencyConverter {
  convert(amount: number, from: string, to: string): Promise<number>;
}

