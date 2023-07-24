<template>
  <div class="py-16 h-screen min-w-full md:pt-20">
    <form class="m-auto py-6 max-w-5xl relative" @submit.prevent="calculate(amount)">
      <div class="w-10/12 m-auto">
        <input
          class="border w-full p-4 pt-4.5 rounded-lg text-xl"
          min="1"
          placeholder="Enter amount here"
          ref="amtInput"
          type="number"
          v-model="amount" 
        >
      </div>

      <transition name="toast">
        <Toast 
          v-if="isError"
          :toast-error="toastError"
        />
      </transition>

      <div class="flex flex-col md:flex-row items-center py-10 md:justify-center">
        <select class="p-1 rounded border" v-model="convertFrom">
          <option value="NGN">Nigerian Naira [NGN]</option>
          <option value="USD">US Dollar [USD]</option>
          <option value="GBP">British Pound [GBP]</option>
          <option value="EUR">Euro [EUR]</option>
        </select>
          
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-24 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-8 md:hidden" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
          </svg>
        </p>

        <select class="p-1 rounded border" v-model="convertTo">
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
        <button class="py-1 w-1/2 text-lg font-bold rounded bg-purple-700 text-white" type="submit">Convert</button>
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

interface ExchangeRate {
  EUR: number;
  GBP: number;
  NGN: number;
  USD: number;
};

interface CurrencyInfo {
  [key: string]: ExchangeRate
};

enum ErrorType {
  networkError,
  valueError
};

const amount = ref<number>();
const amtInput = ref<HTMLInputElement | null>(null)
const convertedAmt = ref<number>(0)
const convertFrom = ref('NGN')
const convertTo = ref('BTC')
const showModal = ref(false);

const rates = ref<CurrencyInfo>();
const isError = ref<boolean>(false);
const toastError = ref<ErrorType>(ErrorType.networkError)

onMounted(() => {
  const uri = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,SOL,DOGE,BNB,ADA,SHIB&tsyms=USD,EUR,NGN,GBP";

  fetchData(uri).then((data): void => {
    rates.value = <CurrencyInfo>data;
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