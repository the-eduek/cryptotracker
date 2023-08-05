<template>
  <div class="p-6 sm:px-10 md:px-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">    
    <form class="m-auto pt-4 md:pt-6 pb-20" @submit.prevent="calculate(amount)">
      <div class="bg-white dark:bg-neutral-700 duration-300 m-auto relative transition">
        <input
          :class="['appearance-none bg-transparent border border-neutral-500 outline-none p-4 py-2 md:py-3 rounded-md focus:outline-purple-200 dark:focus:outline-purple-50 md:text-lg w-full']"
          min="1"
          name="amount"
          placeholder="enter amount here"
          ref="amtInput"
          type="number"
          v-model="amount" 
        >

        <Transition name="fade">
          <Toast
            v-if="isError"
            :toastError="toastError"
          />
        </Transition>
      </div>

      <div class="flex flex-col md:flex-row items-center py-14 md:justify-center">
        <div>
          <label class="block font-medium" for="currency">select currency to convert from</label>
          <select class=" dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-500 duration-300 my-2 dark:outline-purple-50 p-2 md:p-3 rounded-md md:text-lg transition" v-model="convertFrom" name="currency" title="currency to convert from">
            <option value="NGN">Nigerian Naira [NGN]</option>
            <option value="USD">US Dollar [USD]</option>
            <option value="GBP">British Pound [GBP]</option>
            <option value="EUR">European Euro [EUR]</option>
          </select>
        </div>

        <div class="mt-6 mb-8 md:mx-5 md:my-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 transform rotate-90 md:rotate-0 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>

        <div>
          <label class="block font-medium" for="crypto">select crypto to convert to</label>
          <select class="dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-500 duration-300 my-2 dark:outline-purple-50 p-2 md:p-3 rounded-md md:text-lg transition" v-model="convertTo" name="crypto" title="crpyto to convert to">
            <option 
              v-for="(coin, index) in convertOptions"
              :key="index" 
              :value="coin.symbol"
            >
              {{ coin.name }} [{{ coin.symbol }}]
            </option>
          </select>
        </div>
      </div>

      <div>
        <button class="bg-purple-600 font-medium dark:outline-purple-50 px-2 py-4 md:py-5 rounded text-lg md:text-xl text-white w-2/3 max-w-sm" type="submit">Convert</button>
      </div>
    </form>

    <Transition name="slide-in">
      <ConvertModal 
        v-if="showModal"
        @clearEvent="clearInput"
        @closeEvent="toggleModal"
        :amtFrom="<number>amount"
        :amtTo="convertedAmt"
        :coinType="convertTo"
        :currencyType="convertFrom"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from '../store';
import { ErrorType, Coin, CoinRate } from '../types';
import fetchData from '../functions/fetchData';
import ConvertModal from '../components/ConvertModal.vue';
import Toast from '../components/Toast.vue';

const store  = useStore();
const savedCoins = computed<Array<Coin>>(() => store.state.savedCoins);
const convertOptions = computed<Array<Coin> | Array<{name: string, symbol: 'BTC' | 'ETH' | 'SOL' | 'USDT' }>>(() => {
  if (savedCoins.value.length) return savedCoins.value;
  else return [
    {
      name: 'Bitcoin',
      symbol: 'BTC'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH'
    },
    {
      name: 'Solana',
      symbol: 'SOL'
    },
    {
      name: 'Tether',
      symbol: 'USDT'
    }
  ];
});


const amount = ref<number>();
const amtInput = ref<HTMLInputElement | null>(null);
const convertedAmt = ref<number>(0);
const convertFrom = ref<string>(store.state.currency);
const convertTo = ref<string>(convertOptions.value[0].symbol);
const showModal = ref<boolean>(false);

const rates = ref<CoinRate>();
const isError = ref<boolean>(false);
const toastError = ref<ErrorType>(ErrorType.networkError);

onMounted(() => {
  const uri : string = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${convertOptions.value.map(coin => coin.symbol)}&tsyms=USD,EUR,NGN,GBP`;

  fetchData(uri).then((data): void => {
    rates.value = <CoinRate>data;
  }).catch((error) => {
    console.error(error.message);
    isError.value = true;
    toastError.value = ErrorType.networkError;
  });
});

function calculate(amtValue: number | undefined) : void {
  if (amtValue) {
    if (!rates.value) {
      isError.value = true;
      toastError.value = ErrorType.networkError;
      setTimeout(()=> {
        isError.value = false;
      }, 3000);
    } else {
      const coin : string = convertTo.value;
      const currency : string = convertFrom.value;
      const rateList : CoinRate = rates.value;
      convertedAmt.value = amtValue / rateList[coin][currency];
      toggleModal();
    } 
  } else {
    isError.value = true;
    toastError.value = ErrorType.valueError;
    setTimeout(()=> {
      isError.value = false;
    }, 3000);
  }
};

function toggleModal() : void {
  showModal.value = !showModal.value;
  amtInput.value?.focus();
};

function clearInput() {
  amount.value = undefined;
};
</script>