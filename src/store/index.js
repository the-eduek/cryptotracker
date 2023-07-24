import { createStore } from "vuex";
import getCoins from '../api/getCoins.ts';

const store = createStore({
    state() {
        return {
            coins: []
        }
    },
    getters: {
        favoriteCoins(state) {
            return state.coins.filter(coin => coin.isFav)
        }
    },
    mutations: {
        addFav(state, coin) {
            const currentCoin = state.coins.find(data => data === coin);
            const currentCoinIndex = state.coins.indexOf(currentCoin);
            state.coins[currentCoinIndex].isFav = !state.coins[currentCoinIndex].isFav;
        },
        setCoins(state, data) {
            state.coins = data
        }
    }
});

export default store