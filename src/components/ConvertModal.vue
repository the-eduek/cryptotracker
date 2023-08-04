<template>
  <div class="bg-black/10 backdrop-blur-[1.5px] fixed flex h-full left-0 top-0 w-full z-20" @click.self="closeModal">
    <div class="bg-purple-500 mt-auto w-full">
      <div class="flex flex-col items-center m-auto max-w-5xl px-6 py-10 relative rounded-t-2xl text-white ">
        <button @click="closeModal" class="absolute bg-neutral-50 border p-1.5 right-4 rounded-full text-red-600 top-4" title="close" type="button">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.0625 10.9375L10.9375 3.06247" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M3.0625 3.06247L10.9375 10.9375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        
        <p class="font-medium pb-54 text-3xl md:text-4xl">{{ amt.toFixed(3) }} {{ coinType }}</p>

        <div class="flex-1 p-4 max-w-md w-4/5">
          <img src="../assets/img/img2.svg" class=" h-full object-contain object-bottom w-full" alt="">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';

interface Props {
  coinType: string;
  amt: number;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: 'closeEvent'): void;
  (event: 'clearEvent'): void;
}>();

function closeModal() : void {
  emit('closeEvent');
};

onUnmounted(() => {
  emit("clearEvent");
});
</script>