<template>
  <footer class="bg-white border-t border-purple-600 bottom-0 fixed left-0 pt-2.5 pb-5 rounded-t-3xl shadow-inner w-full"> 
    <div class="flex justify-around m-auto max-w-5xl">
      <div>
        <router-link :to="{ name: 'Home' }" class="cursor-pointer flex flex-col items-center justify-center p-1 md:p-2 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" viewBox="0 0 20 20" stroke-width="1" stroke="currentColor" fill="none">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Home</span>
        </router-link>      
      </div>

      <div>
        <router-link :to="{ name: 'Watchlist' }" class="cursor-pointer flex flex-col items-center justify-center p-1 md:p-2 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Watchlist</span>
        </router-link>
      </div>
  
      <div>
        <router-link :to="{ name: 'Convert' }" class="cursor-pointer flex flex-col items-center justify-center p-1 md:p-2 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Convert</span>
        </router-link>
      </div>
    </div>
  </footer>    
</template>