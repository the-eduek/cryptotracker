<template>
  <footer class="bg-white border-t border-purple-600 bottom-0 fixed left-0 pt-2.5 pb-5 rounded-t-2xl shadow-inner w-full"> 
    <div class="flex justify-around m-auto max-w-5xl">
      <div>
        <router-link :to="{ name: 'Home' }" class="cursor-pointer flex flex-col items-center justify-center p-1 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" viewBox="0 0 20 20" stroke-width="1" stroke="currentColor" fill="none">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Home</span>
        </router-link>
      </div>

      <div>
        <router-link :to="{ name: 'CoinsList' }" class="cursor-pointer flex flex-col items-center justify-center p-1 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Coins</span>
        </router-link>
      </div>
  
      <div>
        <router-link :to="{ name: 'Convert' }" class="cursor-pointer flex flex-col items-center justify-center p-1 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Convert</span>
        </router-link>
      </div>
    </div>
  </footer>    
</template>