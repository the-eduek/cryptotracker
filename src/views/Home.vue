<template>
  <div class="p-6 pb-18 md:pb-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">
    <ul class="m-auto">
      <CoinVue
        v-for='coin in savedCoins'
        :coin='coin'
      />
    </ul>

    <Loader v-if="isLoading" />

    <p v-if="isLoadingError && coins.length === 0" class="px-4 py-10 text-neutral-500">an error occured with getting data, please try again 😕</p>
    <p v-if="!savedCoins.length && !isLoadingError && !isLoading" class="px-4 py-10 text-neutral-500">coins you add to your watchlist will appear here!</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../store';
import { Coin } from '../types';
import CoinVue from "../components/Coin.vue";
import Loader from '../components/Loader.vue';

const store = useStore();

const coins = computed<Array<Coin>>(() => store.state.coins);
const savedCoins = computed<Array<Coin>>(() => store.state.savedCoins);
const isLoading = computed<boolean>(() => store.state.isLoading);
const isLoadingError = computed<boolean>(() => store.state.isLoadingError);
</script>