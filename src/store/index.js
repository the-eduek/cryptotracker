import { createStore } from "vuex"
import getCoins from '@/api/getCoins.js'

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
        },
        setError (state, payload) {
            state.error = payload
        }
    },
    actions: {
        fetchCoins({ commit }) {
            getCoins().then(data => {
                commit('setCoins', data )
            }).catch(err => {
                commit('setError', err )
                console.log(err)
            })    
        }
    }
});

export default store