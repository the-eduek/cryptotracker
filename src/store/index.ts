import { InjectionKey } from 'vue';
import { createStore, useStore as vuexUseStore,  Store } from 'vuex';
import { Coin, CurrencyName, State, ThemeType } from '../types';

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() : State {
    return {
      coins: [],
      currency: null, 
      savedCoins: [],
      isLoading: true,
      isLoadingError: false,
      theme: ThemeType.light
    }
  },
  mutations: {
    addFav(state: State, coin: Coin) : void {
      state.savedCoins.push(coin);
    },
    removeFav(state: State, coin: Coin) : void {
      const currentCoin: Coin = state.savedCoins.find(data => data === coin)!;
      const currentCoinIndex: number = state.savedCoins.indexOf(currentCoin);
      state.savedCoins.splice(currentCoinIndex, 1);
    },
    setCoins(state: State, data: Array<Coin>) : void  {
      state.coins = data;
    },
    setCurrency(state: State, data: CurrencyName) : void  {
      state.currency = data;
    },
    setSavedCoins(state: State, data: Array<Coin>) : void  {
      state.savedCoins = data;
    },
    setIsLoading(state: State, data: boolean) : void {
      state.isLoading = data;
    },
    setIsLoadingError(state: State, data: boolean) : void {
      state.isLoadingError = data;
    },
    setTheme(state: State, data: ThemeType) : void {
      state.theme = data;
    }
  }
});

export function useStore() {
  return vuexUseStore(key);
};