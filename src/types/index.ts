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
  theme: ThemeType;
};

export interface CoinRate {
  [key: string]: ExchangeRate
};

export type CurrencyName = 'NGN' | 'USD' | 'EUR' | 'GBP';

export type ExchangeRate = Record<CurrencyName, number>;

export enum ErrorType {
  networkError,
  valueError
};

export enum ThemeType {
  'light',
  'dark'
};

export enum CurrencySymbol {
  'NGN' = '₦',
  'USD' = '$',
  'EUR' = '€',
  'GBP' = '£'
};