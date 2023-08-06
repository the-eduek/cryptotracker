<template>
  <div class="py-6 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">
    <div class="bg-neutral-50 dark:bg-neutral-900 sticky -top-[1px]">
      <div class="flex items-center md:mb-2 py-4 md:py-6 px-6 md:px-16 after:absolute after:bg-gradient-to-b after:bottom-0 after:content-[''] after:from-neutral-50 dark:after:from-neutral-900 after:from-0% after:h-5 md:after:h-6 after:left-0 after:pointer-events-none after:to-[rgba(255,255,255,0)] after:to-100% after:translate-y-full after:w-full">
        <div class="flex-grow relative">
          <input
          class="bg-transparent border border-neutral-500 outline-none pl-10 p-4 py-2 md:py-3 focus:outline-purple-200 rounded-md md:text-lg w-full"
          placeholder="search all coins..."
          type="text"
          v-model="searchText"
          >

          <span class="absolute inline-flex left-2.5 md:left-3 top-[calc(50%-10px)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>

        <div class="relative">
          <select class="absolute bg-white dark:bg-neutral-700 left-0 ml-2 md:ml-3 outline-none p-2.5 md:p-4 opacity-0 peer rounded-md top-0 w-full" v-model="filterProp" id="filter">
            <option value="all">all coins</option>
            <option value="losers">losers</option>
            <option value="gainers">gainers</option>
          </select>
          
          <label for="filter" :class="[ 'bg-transparent border border-neutral-500 flex items-center ml-2 md:ml-3 outline-none py-2 px-3 md:p-3 peer-focus:outline-purple-200 rounded-md', { 'text-green-600 dark:text-green-500' : filterProp === 'gainers' }, { 'text-red-500 dark:text-red-400' : filterProp === 'losers' }]">            
            <svg viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="h-4 w-4">
              <path d="M3.5 6H13.5M1 1H16M6 11H11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span :class="['dark:bg-neutral-800 ml-2.5 px-2 py-0.5 rounded-lg text-sm md:text-base whitespace-nowrap', { 'bg-neutral-200/20' : filterProp === 'all' , 'bg-red-100/20' : filterProp === 'losers' , 'bg-green-100/20' : filterProp === 'gainers' }]">{{ filterProp === "all" ? 'all coins' : filterProp }}</span>
          </label>
        </div>

        <div class="relative">
          <select class="absolute bg-white dark:bg-neutral-700 left-0 ml-2 md:ml-3 outline-none p-2.5 md:p-4 opacity-0 peer rounded-md top-0 w-[2.625rem] md:w-[3.375rem]" v-model="sortProp" id="sort">
            <option value="volume">market volume</option>
            <option value="price">coin price</option>
          </select>
          
          <label for="sort" class="bg-transparent block border border-neutral-500 ml-2 md:ml-3 outline-none p-2.5 md:p-4 peer-focus:outline-purple-200 rounded-md peer-focus:text-purple-600 dark:text-neutral-300 dark:peer-focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linejoin="round" stroke-linecap="round" d="m2 8 4-4 4 4"/>
              <path stroke-linejoin="round" stroke-linecap="round" d="M6 4v15"/>
              <path stroke-linejoin="round" stroke-linecap="round" d="M20 7h-5m5 5h-7m7 5H10"/>
            </svg>
          </label>
        </div> 
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

type Filter = 'all' | 'losers' | 'gainers';
type Sort = 'volume' | 'price' ;

const store = useStore();

const coins = computed<Array<Coin>>(() => store.state.coins);
const isLoading = computed<boolean>(() => store.state.isLoading);
const isLoadingError = computed<boolean>(() => store.state.isLoadingError);

const searchText = ref<string>('');
const filterProp = ref<Filter>('all');
const sortProp = ref<Sort>('volume');
const filteredCoins = ref<Array<Coin>>(coins.value);
const noSearchFound = computed<boolean>(() => searchText.value.trim().length > 0 && filteredCoins.value.length === 0);

watch([ searchText, filterProp, coins ], () => {
  if (filterProp.value === 'all') {
    filteredCoins.value = coins.value.filter(coin => { 
      return coin.name.toLowerCase().includes(searchText.value.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.value.toLowerCase())
    });
  } else if (filterProp.value === 'gainers') {
    filteredCoins.value = coins.value.filter(coin => coin.percentage > 0).filter(coin => { 
      return coin.name.toLowerCase().includes(searchText.value.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.value.toLowerCase())
    }).sort((firstCoin, secondCoin) => secondCoin.percentage - firstCoin.percentage);
  } else if (filterProp.value === 'losers') {
    filteredCoins.value = coins.value.filter(coin => coin.percentage < 0).filter(coin => { 
      return coin.name.toLowerCase().includes(searchText.value.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.value.toLowerCase())
    }).sort((firstCoin, secondCoin) =>  firstCoin.percentage - secondCoin.percentage);
  }
}, { immediate: true });

watch(sortProp, () => {
  if (sortProp.value === 'volume') filteredCoins.value = coins.value.filter(coin => filteredCoins.value.includes(coin));
  else if (sortProp.value === 'price') filteredCoins.value.sort((firstCoin, secondCoin) => secondCoin.price - firstCoin.price);
});
</script>