<template>
  <li :class="['border duration-300 flex items-center my-6 md:my-4 last:mb-20 px-4 py-5 rounded-md shadow-inner hover:shadow-none transition', { 'bg-purple-50 dark:bg-neutral-700 border-purple-500 dark:border-purple-50 shadow-none transition': isFavCoin }, { 'bg-white dark:bg-stone-800 dark:border-neutral-600': !isFavCoin }]">
    <div class="h-0 min-[280px]:h-8 md:h-12 w-0 min-[280px]:w-8 md:w-12">
      <img :src="coin.img" :alt="coin.symbol +' img'">
    </div>

    <div class="pl-2 pr-1 md:px-4 w-full">
      <div class="flex items-start justify-between">
        <p class="font-bold text-sm mr-4">{{coin.symbol}}</p>
        <p class="font-medium">₦ {{ formatNumber(coin.price) }}</p>
      </div>  

      <div class="flex items-start justify-between pt-0.5">
        <p class="text-left mr-4">{{ coin.name }}</p>
        <p class="text-gray-400 text-sm" :class="{ 'text-green-500 ': coin.percentage > 0, 'text-red-500': coin.percentage < 0 }">{{ coin.percentage.toFixed(2) }}%</p>
      </div>
    </div>

    <button class="p-2 md:px-4" @click="processToWatchlist">
      <svg v-if="isFavCoin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA412" class="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFA412" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </button>
  </li>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';
import { Coin } from '../types';

interface Props {
  coin: Coin;
};

const props = defineProps<Props>();

const store = useStore();
  
const savedCoins = computed<Coin[]>(() => store.state.savedCoins);
const isFavCoin = computed<boolean>(() => savedCoins.value.some(coin => coin.id === props.coin.id));

function processToWatchlist() : void {
  if (!isFavCoin.value) store.commit('addFav', props.coin);
  else store.commit('removeFav', props.coin);

  localStorage.setItem("localSavedCoins", JSON.stringify(savedCoins.value.map(coin => coin.id)));
};

function formatNumber(num: number) : string {
  const numString : string = num.toFixed(2);
  const valueTrunc : number  = Math.trunc(num);
  const newValueTrunc: string = valueTrunc >=  99999.99 ? 
    valueTrunc >= 1000000 ? 
    `${(valueTrunc / 1000000).toFixed(2)}M` : 
    `${(valueTrunc / 1000).toFixed(2)}k` : 
    valueTrunc.toLocaleString();

  return valueTrunc > 99999.99 ? newValueTrunc: `${newValueTrunc}.${numString.substring(numString.length - 2)}`;
};
</script>