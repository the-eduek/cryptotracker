<template>
  <div class="pt-16 pb-12 min-h-screen max-w-5xl m-auto md:pt-24 md:pb-16">
    <div class="hero py-16 border w-11/12 m-auto rounded-md bg-blend-overlay bg-repeat-x bg-contain bg-top bg-[#333333d9] bg-[url('../assets/img/img1.svg')]">
      <h1 class="text-white text-4xl font-black pb-2">Currency</h1>
      <!-- <select name="" id="" v-model="currency">
        <option value="NGN">Nigerian Naira [NGN]</option>
        <option value="USD">US Dollar [USD]</option>
        <option value="EUR">European Euro [EUR]</option>
        <option value="GBP">Great British Pounds [GBP]</option>
      </select> -->

      <p class="w-max m-auto p-2 rounded-xl text-sm bg-white">Nigerian Naira [NGN]</p>
    </div>

    <p class="text-lg py-4" v-if="isError">an error occured, please try again 😕</p>

    <div v-if="isLoading">
      <div class="@apply relative bg-purple-200 w-8 h-8 m-auto mt-5 mb-1 overflow-hidden rounded-full">
        <div class="animate-spin h-4 relative w-4  before:absolute before:content-[''] before:h-4 before:opacity-70 before:bg-purple-400 before:-right-1.5 before:w-3"></div>
        <div class="bg-[#f9fafb] w-6 h-6 m-auto rounded-full relative -top-3 z-10"></div>
      </div>

      <p>Loading...</p>
    </div>

    <ul v-else>
      <CoinVue v-for='coin in coins' :coin='coin' :key="coin.id"/>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import getCoins, { Coin, Currency } from '../api/getCoins';
import CoinVue from '../components/Coin.vue'

const store = useStore();

const coins = ref<Array<Coin>>();
const currency = ref<Currency>('NGN');

const isError = ref<boolean>(false);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  const uri = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=${currency.value}`;

  try {
    const allCoins = await getCoins(uri, currency.value);
    store.commit('setCoins', allCoins);
    coins.value = store.state.coins;
  } catch (error) {
    console.log(error);
    isError.value = true;
  };

  isLoading.value = false;
});
</script>