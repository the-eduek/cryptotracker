import fetchData from "./fetchData";

export interface Coin {
  id: number;
  name: string;
  symbol: string;
  price: number;
  percentage: number;
  img: string;
  isFav: false;
};

export type Currency = 'NGN' | 'USD' | 'EUR' | 'GBP';

export default async function getCoins(coinsUri: string, currency: Currency) {
  try {
    const fetchedCoins = await fetchData(coinsUri);

    const coinArray: Coin[] = fetchedCoins['Data'].map(item => {
      const { CoinInfo, RAW } = item;
      
      const coin: Coin = {
        id: item.CoinInfo.Id,
        name: item.CoinInfo.FullName,
        symbol: item.CoinInfo.Name,
        price: item?.RAW?.[currency.toUpperCase()].PRICE ?? 0,
        percentage: item?.RAW?.[currency.toUpperCase()].CHANGEPCT24HOUR ?? 0,
        img: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`,
        isFav: false
      };

      return coin;
    });

    return coinArray;
  } catch (error) {
    throw error;
  };
};