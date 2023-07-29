<template>
  <div class="p-6 pb-18 md:pb-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">
    <div class="bg-white relative mb-8">      
      <input
        class="bg-transparent border border-neutral-500 outline-none pl-10 p-4 py-2 rounded-md focus:outline-purple-200  w-full"
        placeholder="search all coins..."
        type="text"
        v-model="searchText"
      >

      <span class="inline-flex absolute left-3 top-[calc(50%-12px)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </span>
    </div>

    <ul v-if="!isLoading">
      <CoinVue
        v-for='coin in filteredCoins'
        :coin='coin' 
        :key="coin.id"
      />

      
      <p v-if="noSearchFound" class="px-4 py-10 text-neutral-500">no coins found</p>
    </ul>
    
    <Loader v-if="isLoading" />
    <p v-if="isLoadingError" class="px-4 py-10 text-neutral-500">an error occured with getting data, please try again 😕</p>
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
const noSearchFound = computed<boolean>(() => searchText.value.length > 0 && filteredCoins.value.length === 0);

watch([ searchText, coins ], () => {
  filteredCoins.value = coins.value.filter(coin => { 
    return coin.name.toLowerCase().includes(searchText.value.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.value.toLowerCase())
  });
}, { immediate: true });
</script>