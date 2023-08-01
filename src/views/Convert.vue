<template>
  <div class="p-6 sm:px-10 md:px-16 m-auto min-h-[calc(100vh-5rem)] max-w-5xl">    
    <form class="m-auto pt-4 md:pt-6 pb-20 relative" @submit.prevent="calculate(amount)">
      <div class="bg-white m-auto relative">
        <input
          class="bg-transparent border border-neutral-500 outline-none p-4 py-2 md:py-3 rounded-md focus:outline-purple-200 md:text-lg w-full"
          min="1"
          placeholder="enter amount here"
          ref="amtInput"
          type="number"
          v-model="amount" 
        >

        <Transition name="toast">
          <Toast
            v-if="isError"
            :toastError="toastError"
          />
        </Transition>
      </div>

      <div class="flex flex-col md:flex-row items-center py-10 md:py-14 md:justify-center">
        <div>
          <label class="block font-medium" for="crypto">select currency to convert from</label>
          <select class="border border-neutral-300 my-2 p-2 md:p-3 rounded-md md:text-lg" v-model="convertFrom" name="currency" title="currency">
            <option value="NGN">Nigerian Naira [NGN]</option>
            <option value="USD">US Dollar [USD]</option>
            <option value="GBP">British Pound [GBP]</option>
            <option value="EUR">Euro [EUR]</option>
          </select>
        </div>

        <div class="mt-6 mb-8 md:mx-5 md:my-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 transform rotate-90 md:rotate-0 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>

        <div>
          <label class="block font-medium" for="crypto">select crypto to convert to</label>
          <select class="border border-neutral-300 my-2 p-2 md:p-3 rounded-md md:text-lg" v-model="convertTo" title="crpyto" name="crypto">
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
      </div>

      <div>
        <button class="bg-purple-700 font-medium px-2 py-4 md:py-5 rounded text-lg md:text-xl text-white w-2/3 max-w-sm" type="submit">Convert</button>
      </div>
    </form>

    <ConvertModal 
      v-if="showModal"
      @clearEvent="clearInput"
      @closeEvent="toggleModal"
      :amt="convertedAmt"
      :coinType="convertTo"
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
const convertFrom = ref<string>('NGN')
const convertTo = ref<string>('BTC')
const showModal = ref<boolean>(false);

const rates = ref<CoinRate>();
const isError = ref<boolean>(false);
const toastError = ref<ErrorType>(ErrorType.networkError)

onMounted(() => {
  const uri : string = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,SOL,DOGE,BNB,ADA,SHIB&tsyms=USD,EUR,NGN,GBP";

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