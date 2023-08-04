<template>
  <div class="duration-300 fixed h-full left-0 top-0 transition w-full z-20">
    <div class="backdrop-blur-[2px] bg-black/10 dark:bg-white/10 duration-300 flex h-full overflow-y-auto p-4 md:px-6 py-12 relative transition w-full" @click.self="closeSettings">
      <div class="bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 max-w-3xl mt-auto mx-auto px-4 md:px-6 py-10 md:py-14 relative rounded-lg shadow-lg w-full">
        <div class="flex items-center justify-between pb-8">
          <h4 class="font-medium">settings</h4>
          
          <button @click="closeSettings" class="bg-neutral-50 dark:bg-transparent border dark:border-neutral-500 p-1 right-4 rounded-full text-red-600 top-4" title="close" type="button">
            <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.0625 10.9375L10.9375 3.06247" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.0625 3.06247L10.9375 10.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>

        <div class="pb-8">
          <p class="text-sm">cryptotracker is a web app for viewing a list of top performing cryptocurrencies by market volume. users can add currencies they are interested in to a watchlist. users can also make some conversions from selected currencies to crypto coins.</p>
        </div>

        <div class="flex items-center pb-8">
          <label class="font-medium text-sm" for="mode">dark mode</label>
          <button 
            :class="[ 'bg-neutral-300 dark:bg-purple-600 cursor-pointer duration-300 flex h-8 mx-3.5 p-1 w-[3.625rem] rounded-3xl relative transition', { 'bg-purple-700' : theme === ThemeType.dark }]"
            @click="setTheme"
            title="mode" 
            type="button">
            <span :class="['bg-white block duration-300 h-full rounded-full w-6 transition', { 'translate-x-[106.25%]' : theme === ThemeType.dark }]"></span>
          </button>
        </div>

        <div class="md:flex md:items-center pb-10">
          <label class="font-medium text-sm mr-3.5" for="currency">select currency</label>
          <select class="dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-500 mt-1 p-1 rounded-md" name="currency" id="" v-model="currencyVal">
            <option value="NGN">nigerian naira [NGN]</option>
            <option value="USD">us dollar [USD]</option>
            <option value="EUR">european euro [EUR]</option>
            <option value="GBP">great british pounds [GBP]</option>
          </select>
        </div>

        <div>
          <button class="border border-neutral-300 flex items-center justify-center max-w-xl mx-auto py-2 rounded-full text-red-500 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 mr-1 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

            <span class="text-medium">clear watchlist coins</span>
          </button>
        </div>
      </div>        
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';
import { useStore } from '../store';
import { CurrencyName, ThemeType } from '../types';

const emit = defineEmits<{
  (event: 'closeEvent'): void
}>();

function closeSettings() : void {
  emit('closeEvent');
};

const store = useStore();
const theme = computed<ThemeType>(() => store.state.theme);

// function setTheme() : void {
//   if (theme.value === ThemeType.light) store.commit('setTheme', ThemeType.dark);
//   else if (theme.value === ThemeType.dark) store.commit('setTheme', ThemeType.light);

//   const topElt = <HTMLHtmlElement>document.querySelector('html');
//   topElt.classList.toggle('dark');

//   localStorage.setItem("localTheme", JSON.stringify(theme.value));
// };

// const localTheme = <ThemeType | null>JSON.parse(localStorage.getItem('localTheme') || 'null');

// onBeforeMount(() => {
//   console.log(localTheme)
//   if (!localTheme) store.commit('setTheme', ThemeType.light)
//   else store.commit('setTheme', localTheme);
// });

function escCloseModal(e: KeyboardEvent) : void {
  if (e.key.toLowerCase() === 'escape') closeSettings();
};

onMounted(() => {
  window.addEventListener('keyup', escCloseModal);
});

onUnmounted(() => {
  window.removeEventListener('keyup', escCloseModal)
});

const currencyVal = ref<CurrencyName>(store.state.currency);

watch(currencyVal, () => {
  store.commit('setCurrency', currencyVal.value);
  localStorage.setItem('localCurrency', JSON.stringify(currencyVal.value));
});
</script>