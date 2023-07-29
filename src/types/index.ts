export interface Coin {
  id: number;
  name: string;
  symbol: string;
  price: number;
  percentage: number;
  img: string;
};

export interface State {
  coins: Array<Coin>;
  currency: CurrencyName;
  savedCoins: Array<Coin>;
  isLoading: boolean;
  isLoadingError: boolean;
};

export interface CoinRate {
  [key: string]: ExchangeRate
};

export type CurrencyName = 'NGN' | 'USD' | 'EUR' | 'GBP';

export type CurrencySymbol = '₦' | '$' | '€' | '£';

export type CurrencyInfo = Record<CurrencyName, { name: CurrencyName, symbol: CurrencySymbol }>;

export type ExchangeRate = Record<CurrencyName, number>;

export enum ErrorType {
  networkError,
  valueError
};

export const allCurrencies: CurrencyInfo = {
  NGN: {
    name: 'NGN',
    symbol: '₦'
  },
  USD: {
    name: 'USD',
    symbol: '$'
  },
  EUR: {
    name: 'EUR',
    symbol: '€'
  },
  GBP: {
    name: 'GBP',
    symbol: '£'
  }
};
