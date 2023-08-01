<template>
  <div class="bg-black/10 backdrop-blur-[1.5px] fixed flex h-full left-0 top-0 w-full z-20" @click.self="closeModal">
    <div class="bg-purple-500 flex flex-col  items-center mt-auto px-6 py-10 rounded-t-2xl text-white top-1/2 w-full">
      <p class="font-medium pb-54 text-3xl">{{ amt.toFixed(3) }} {{ coinType }}</p>

      <div class="flex-1 p-4 max-w-md w-4/5">
        <img src="../assets/img/img2.svg" class=" h-full object-contain object-bottom w-full" alt="">
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