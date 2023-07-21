<template>
    <div class="py-14 md:py-20 min-w-full min-h-screen">
        <p v-if="!favCoins.length" class="text-gray-500 p-4 absolute top-1/2 transform -translate-y-1/2 w-full">Coins that you add to your watchlist would appear here!</p>
        <ul class="m-auto max-w-5xl">
            <Coin v-for='coin in favCoins' :coin='coin'/>
        </ul>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Coin from "../components/Coin.vue"

export default {
    components: { Coin },
    setup() {
        const store = useStore()
        const favCoins = computed(() => store.getters.favoriteCoins)

        return { favCoins }
    }
}
</script>