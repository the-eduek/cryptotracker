<template>
  <footer class="bg-white dark:bg-zinc-800 border-t border-purple-600 dark:border-neutral-600 bottom-0 fixed left-0 pt-2.5 pb-5 shadow-lg dark:text-stone-400 w-full z-10"> 
    <div class="flex justify-around m-auto max-w-5xl">
      <div>
        <router-link :to="{ name: 'Home' }" class="cursor-pointer flex flex-col items-center justify-center p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Watchlist</span>
        </router-link>
      </div>

      <div>
        <router-link :to="{ name: 'CoinsList' }" class="cursor-pointer flex flex-col items-center justify-center p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Coins</span>
        </router-link>
      </div>
  
      <div>
        <router-link :to="{ name: 'Convert' }" class="cursor-pointer flex flex-col items-center justify-center p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 md:h-6 w-5 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>

          <span class="mt-1 text-xs md:text-sm">Convert</span>
        </router-link>
      </div>
    </div>
  </footer>    
</template>