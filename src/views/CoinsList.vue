<template>
  <div class="py-6 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">
    <div class="bg-neutral-50 dark:bg-neutral-900 duration-300 sticky -top-[1px] transition">
      <div class="py-4 md:py-6 md:mb-2 px-6 md:px-16 relative after:absolute after:bg-gradient-to-b after:bottom-0 after:content-[''] after:duration-300 after:from-neutral-50 dark:after:from-neutral-900 after:from-0% after:h-5 md:after:h-6 after:left-0 after:pointer-events-none after:to-[rgba(255,255,255,0)] after:to-100% after:transition after:translate-y-full after:w-full">
        <input
          class="bg-transparent border border-neutral-500 outline-none pl-10 p-4 py-2 md:py-3 focus:outline-purple-200 rounded-md md:text-lg w-full"
          placeholder="search all coins..."
          type="text"
          v-model="searchText"
        >

        <span class="absolute inline-flex left-8 md:left-[4.5rem] top-[calc(50%-12px)]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
      </div>
    </div>   

    <ul v-if="!isLoading" class="md:gap-x-6 md:grid min-[840px]:grid-cols-[repeat(2,minmax(325px,1fr))] px-6 md:px-16 ">
      <CoinVue
        v-for='coin in filteredCoins'
        :coin='coin' 
        :key="coin.id"
        class="place-items-start h-fit"
      />
    </ul>

    <p v-if="coins.length > 0 && noSearchFound" class="px-4 py-10 text-neutral-500 dark:text-neutral-400">no coins found</p>
    
    <Loader v-if="isLoading" />

    <div v-if="isLoadingError && coins.length === 0" class="px-4 py-20 text-neutral-500 dark:text-neutral-400">
       <p>an error occured with getting data 😕</p>
       <p>please refresh to try again</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useStore } from '../store';
import { Coin } from '../types';
import CoinVue from '../components/Coin.vue';
import Loader from '../components/Loader.vue';

const store = useStore();

const coins = computed<Array<Coin>>(() => store.state.coins);
const isLoading = computed<boolean>(() => store.state.isLoading);
const isLoadingError = computed<boolean>(() => store.state.isLoadingError);

const searchText = ref<string>('');
const filteredCoins = ref<Array<Coin>>(coins.value);
const noSearchFound = computed<boolean>(() => searchText.value.trim().length > 0 && filteredCoins.value.length === 0);

watch([ searchText, coins ], () => {
  filteredCoins.value = coins.value.filter(coin => { 
    return coin.name.toLowerCase().includes(searchText.value.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.value.toLowerCase())
  });
}, { immediate: true });
</script>