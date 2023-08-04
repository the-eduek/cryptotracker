<template>
  <div class="backdrop-blur-[1.5px] fixed flex h-full left-0 top-0 w-full z-20" @click.self="closeModal">
    <div class="bg-purple-500 h-2/3 mt-auto rounded-t-3xl shadow-lg transition w-full" ref="modalContent">
      <div class="flex h-full items-center justify-center m-auto max-w-5xl px-6 py-14 relative text-white">
        <button @click="closeModal" class="absolute bg-neutral-50 border cursor-pointer  max-w-[10rem] mb-auto p-0.5 rounded-full top-5 w-1/3" title="close" type="button">  </button>

        <div class="w-full">
          <p class="font-medium text-3xl md:text-4xl">{{ amtFrom.toLocaleString() }} {{ currencyType }}</p>
          <p class="font-medium py-10 text-5xl tracking-[-0.625rem]  ">==</p>
          <p class="font-medium text-3xl md:text-4xl">{{ Number(amtTo.toFixed(3)).toLocaleString() }} {{ coinType }}</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import detectSwipe from '../functions/detectSwipe';

interface Props {
  coinType: string;
  currencyType: string;
  amtTo: number;
  amtFrom: number;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: 'closeEvent'): void;
  (event: 'clearEvent'): void;
}>();

function closeModal() : void {
  emit('closeEvent');
};

function escCloseModal(e: KeyboardEvent) : void {
  if (e.key.toLowerCase() === 'escape') closeModal();
};

onMounted(() => {
  window.addEventListener('keyup', escCloseModal);
});

onUnmounted(() => {
  emit("clearEvent");
  window.removeEventListener('keyup', escCloseModal)
});

const modalContent = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (modalContent.value) {
    detectSwipe(modalContent.value, () => {
      console.log("hello")
    }, () => {
      closeModal();
    });
  }
});
</script>