<template>
  <Header :pageTitle="headerTitle" />

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>  

  <Nav />
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue';
import { useStore } from './store';
import { Coin, CurrencyName } from './types';
import getCoins from './api/getCoins'; 
import Header from '../src/components/Header.vue';
import Nav from '../src/components/Nav.vue';
import { useRoute } from 'vue-router';

const store = useStore();

const currency = computed<CurrencyName>(() => store.state.currency);
const localSavedCoins = <Array<number>>JSON.parse(localStorage.getItem('localSavedCoins') || "[]");


onBeforeMount(async () => {
  const uri = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=${currency.value}`;

  try {
    const allCoins: Array<Coin> = await getCoins(uri, currency.value);
    const savedCoins = localSavedCoins.map(coinID => allCoins.find(coin => coin.id === coinID));
    store.commit('setCoins', allCoins);
    store.commit('setSavedCoins', savedCoins);
  } catch (error) {
    console.log(error);
    store.commit('setIsLoadingError', true);
  };

  store.commit('setIsLoading', false);
});

const headerTitle = ref<string>();

watch(useRoute(), (from) => {
  if (from.name === 'Home') headerTitle.value = '/watchlist';
  else headerTitle.value = '';
});
</script>