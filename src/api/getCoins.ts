import fetchData from "./fetchData";
import { Coin, CurrencyName } from "../types";

export default async function getCoins(coinsUri: string, selectedCurrency: CurrencyName) {
  try {
    const fetchedCoins: any = await fetchData(coinsUri);

    const coinArray: Coin[] = fetchedCoins['Data'].map(item => {
      const coin: Coin = {
        id: item.CoinInfo.Id,
        name: item.CoinInfo.FullName,
        symbol: item.CoinInfo.Name,
        price: item?.RAW?.[selectedCurrency].PRICE ?? 0,
        percentage: item?.RAW?.[selectedCurrency].CHANGEPCT24HOUR ?? 0,
        img: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`
      };

      return coin;
    });

    return coinArray;
  } catch (error) {
    throw error;
  };
};