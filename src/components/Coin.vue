<template>
  <li :class="['border flex items-center my-6 md:my-3 last:mb-20 md:last:mb-[5.5rem] px-4 py-5 rounded-md shadow-inner hover:shadow-none transition', { 'bg-purple-50/75 dark:bg-zinc-700 border-purple-400 dark:border-neutral-600 shadow-none transition': isFavCoin }, { 'bg-white dark:bg-zinc-800 dark:border-neutral-700': !isFavCoin }]">
    <div class="h-0 min-[280px]:h-8 md:h-12 w-0 min-[280px]:w-8 md:w-12">
      <img :src="coin.img" :alt="coin.symbol +' img'">
    </div>

    <div class="pl-2 pr-1 md:px-4 w-full">
      <div class="flex items-start justify-between">
        <p class="font-bold text-sm mr-4">{{coin.symbol}}</p>
        <p class="font-medium">{{ CurrencySymbol[currency] }} {{ formatNumber(coin.price) }}</p>
      </div>  

      <div class="flex items-start justify-between pt-0.5">
        <p class="text-left mr-4">{{ coin.name }}</p>
        <p :class="[ 'font-medium text-gray-400, text-sm', { 'text-green-600 dark:text-green-500': coin.percentage > 0, 'text-red-600 dark:text-rose-400 -300': coin.percentage < 0 }]">{{ coin.percentage.toFixed(2) }}%</p>
      </div>
    </div>

    <button class="p-2 md:px-4" @click="processToWatchlist" title="save to watchlist" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :fill="isFavCoin ? '#FFA412' : 'none'" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFA412">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';
import { Coin, CurrencyName, CurrencySymbol } from '../types';

interface Props {
  coin: Coin;
};

const props = defineProps<Props>();

const store = useStore();

const currency = computed<CurrencyName>(() => store.state.currency);
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