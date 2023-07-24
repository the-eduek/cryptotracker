<template>
  <li class="coin-wrapper transition-all duration-300" :class="{ favorite: coin.isFav }"   @click="favCoin">
    <div class="h-8 w-8 md:h-12 md:w-12">
      <img :src="coin.img" :alt="coin.symbol +' img'">
    </div>

    <div class="px-2 justify-start text-left flex-grow md:px-4">
      <p class="font-bold text-xs">{{coin.symbol}}</p>
      <p>{{coin.name}}</p>
    </div>

    <div class="p-2 text-right md:pr-6">
      <p class="font-semibold">₦ {{ formatNumber(coin.price) }}</p>
      <p class="text-sm text-gray-400" :class="{ positive: coin.percentage > 0, negative: coin.percentage < 0}">{{ coin.percentage.toFixed(2) }}%</p>
    </div>

    <button class="p-2 md:px-4" @click.self="favCoin">
      <svg v-if="coin.isFav" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all duration-300" viewBox="0 0 20 20" fill="#FFA412">
        <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0 112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="#FFA412">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { Coin } from '../api/getCoins';

interface Props {
  coin: Coin;
};

const props = defineProps<Props>();

function favCoin() {
  const coin: Coin = props.coin;
  store.commit('addFav', coin)
};

function formatNumber(num: number) : string {
  const value = num.toFixed(2);
  const valueTrunc = Math.trunc(num);

  return `${valueTrunc.toLocaleString()}.${value.substring(value.length - 2)}`;
};



// const store = useStore()
</script>

<style scoped>
.coin-wrapper {
  @apply relative border w-11/12 m-auto my-4 p-3 pl-5 bg-white flex items-center rounded-md shadow-md hover:shadow-none overflow-hidden transition;
}

.coin-wrapper::before {
  content: "";
  @apply absolute  h-full w-2 left-0 top-0 bg-purple-500 transition;
}

.favorite {
  @apply bg-purple-50 border border-purple-500 shadow-none transition;
}

.favorite::before {
  content: "";
  @apply bg-purple-50 transition;
}

.positive {
  @apply text-green-500;
}

.negative {
  @apply text-red-500;
}
</style>