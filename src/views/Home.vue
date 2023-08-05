<template>
  <div class="p-6 md:px-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">
    <ul v-if="!isLoading" class="md:grid md:pt-3">
      <CoinVue
        v-for='coin in sortedCoins'
        :coin='coin'
      />
    </ul>

    <Loader v-if="isLoading" />

    <div v-if="isLoadingError && coins.length === 0" class="px-4 py-20 text-neutral-500 dark:text-neutral-400">
       <p>an error occured with getting data 😕</p>
       <p>please refresh to try again</p>
    </div>

    <div v-if="!savedCoins.length && !isLoadingError && !isLoading" class="flex flex-col items-center">
      <div class="p-8 max-w-lg">
        <img src="../assets/img/img2.svg" alt="">
      </div>

      <p class="px-4 py-6 text-neutral-500 dark:text-neutral-400">coins added to your watchlist will appear here!</p> 

      <div class="py-4">
        <router-link :to="{ name: 'CoinsList' }" class="bg-purple-600 cursor-pointer flex items-center font-medium group px-8 py-3 rounded-md text-white">
          <span>see all coins</span>

          <div class="flex h-4 ml-2 overflow-hidden w-4">
            <span class="-translate-x-full duration-300 transition group-hover:translate-x-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-lineoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>

            <span class="-translate-x-full transition group-hover:translate-x-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>          
        </router-link>
      </div>
    </div>
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

const sortedCoins = computed(() => savedCoins.value.sort((a: Coin, b: Coin) => b.percentage - a.percentage));
</script>