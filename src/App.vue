<template>
  <div>
    <Header />

    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>  

    <Nav />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, watch } from 'vue';
import { useStore } from './store';
import { Coin, CurrencyName, ThemeType } from './types';
import getCoins from './functions/getCoins'; 
import Header from '../src/components/Header.vue';
import Nav from '../src/components/Nav.vue';

const store = useStore();
const currency = computed<CurrencyName>(() => store.state.currency);

onBeforeMount(() => {
  const localCurrency = <CurrencyName | null>localStorage.getItem('localCurrency');
  if (localCurrency) store.commit('setCurrency', localCurrency);
});

watch(currency, async () => {
  store.commit('setIsLoading', true);

  const localSavedCoins = <Array<number>>JSON.parse(localStorage.getItem('localSavedCoins') || "[]");
  const uri = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=${currency.value}`;

  try {
    const allCoins : Array<Coin> = await getCoins(uri, currency.value);
    const savedCoins = <Array<Coin>>localSavedCoins.map(coinID => allCoins.find(coin => coin.id === coinID)).filter(item => !!item);
    store.commit('setCoins', allCoins);
    store.commit('setSavedCoins', savedCoins);
  } catch (error) {
    console.log(error);
    store.commit('setIsLoadingError', true);
  };

  store.commit('setIsLoading', false);
});

const theme = computed<ThemeType>(() => store.state.theme);
const localTheme = <CurrencyName>JSON.parse(localStorage.getItem('localTheme') || "null");

onBeforeMount(() => {
  const topElt = <HTMLHtmlElement>document.querySelector('html');

  if (localTheme) store.commit('setTheme', localTheme);
  else localStorage.setItem("localTheme", JSON.stringify(theme.value));

  if (theme.value === ThemeType.dark) topElt.classList.add('dark');
});
</script>