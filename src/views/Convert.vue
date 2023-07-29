<template>
  <div class="p-6 pb-18 md:pb-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">    
    <form class="m-auto py-6 relative" @submit.prevent="calculate(amount)">
      <div class="bg-white m-auto">
        <input
          class="bg-transparent border border-neutral-500 outline-none p-4 py-2 rounded-md focus:outline-purple-200 w-full"
          min="1"
          placeholder="Enter amount here"
          ref="amtInput"
          type="number"
          v-model="amount" 
        >
      </div>

      <Transition name="toast">
        <Toast 
          v-if="isError"
          :toast-error="toastError"
        />
      </Transition>

      <div class="flex flex-col md:flex-row items-center py-16 md:justify-center">
        <select class="border border-neutral-300 p-2 rounded" v-model="convertFrom">
          <option value="NGN">Nigerian Naira [NGN]</option>
          <option value="USD">US Dollar [USD]</option>
          <option value="GBP">British Pound [GBP]</option>
          <option value="EUR">Euro [EUR]</option>
        </select>
          
        <div class="my-5 md:mx-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 transform rotate-90 md:rotate-0 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>

        <select class="border border-neutral-300 p-2 rounded" v-model="convertTo">
          <option value='BNB'>Binance [BNB]</option>
          <option value='BTC'>Bitcoin [BTC]</option>
          <option value="ADA">Cardano [ADA]</option>
          <option value="DOGE">Dogecoin [DOGE]</option>
          <option value="ETH">Ethereum [ETH]</option>
          <option value="XRP">Ripple [XRP]</option>
          <option value="SHIB">Shiba Inu [SHIB]</option>
          <option value="SOL">Solana [SOL]</option>
        </select>
      </div>

      <div>
        <button class="bg-purple-700 font-medium px-2 py-4 rounded text-lg text-white w-2/3" type="submit">Convert</button>
      </div>
    </form>

    <ConvertModal 
      v-if="showModal"
      @clearEvent="clearInput"
      @closeEvent="toggleModal"
      :amt="convertedAmt"
      :coin="convertTo"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ConvertModal from '../components/ConvertModal.vue';
import Toast from '../components/Toast.vue';
import fetchData from '../api/fetchData';
import { ErrorType, CoinRate } from '../types';

const amount = ref<number>();
const amtInput = ref<HTMLInputElement | null>(null)
const convertedAmt = ref<number>(0)
const convertFrom = ref('NGN')
const convertTo = ref('BTC')
const showModal = ref(false);

const rates = ref<CoinRate>();
const isError = ref<boolean>(false);
const toastError = ref<ErrorType>(ErrorType.networkError)

onMounted(() => {
  const uri = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,SOL,DOGE,BNB,ADA,SHIB&tsyms=USD,EUR,NGN,GBP";

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
    const coin = convertTo.value;
    const currency = convertFrom.value;
    const rateList = rates.value;

    if (!rateList) {
      isError.value = true;
      toastError.value = ErrorType.networkError;
      setTimeout(()=> {
        isError.value = false;
      }, 3000);
    } else {
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