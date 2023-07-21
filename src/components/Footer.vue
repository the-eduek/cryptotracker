<template>
  <footer class="bg-white fixed bottom-0 left-0 border-t border-purple-500 rounded-t-3xl p-0.5 w-full"> 
    <div class="grid grid-cols-7 max-w-5xl m-auto">
      <div class="btn col-span-2">       
        <router-link :to="{ name: 'Watchlist' }" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Watchlist</span>
        </router-link>
      </div>

      <div class="btn col-span-3" ref="home">
        <router-link :to="{ name: 'Home' }" class="nav-link" @click="setActiveSvg">
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span class="md:pt-1">Home</span>
        </router-link>      
      </div>

      <div class="btn col-span-2">
        <router-link :to="{ name: 'Convert' }" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Convert</span>
        </router-link>
      </div>
    </div>
  </footer>    
</template>

<script setup>
import { ref } from "vue";

const activeSvg = ref(false);

const setActiveSvg = () => {
  activeSvg.value = !activeSvg.value;
};
</script>

<style scoped>
.btn {
  @apply md:flex md:justify-center;
}

.btn span {
  font-size: 10px;
  @apply cursor-pointer pl-1 md:text-sm;
}

.nav-link {
  @apply text-gray-500 flex flex-col justify-center items-center p-1 md:py-4 md:flex-row cursor-pointer md:w-1/2;
}

.nav-link:hover {
  @apply text-gray-700;
}

.nav-link.router-link-exact-active {
  @apply text-purple-700 font-bold;
}
</style>