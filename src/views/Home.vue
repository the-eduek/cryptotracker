<template>
    <div class="pt-16 pb-12 min-h-screen max-w-5xl m-auto md:pt-24 md:pb-16">
        <div class="hero">
            <h1 class="text-white text-4xl font-black pb-2">Currency</h1>
            <p class="w-max m-auto p-2 rounded-xl text-sm bg-white">Nigerian Naira [NGN]</p>
        </div>
        <div class="" v-if="coins.length === 0">
            <div class="spinner">
                <div class="spinner__hand"></div>
                <div class="spinner__child"></div>
            </div> 
            <p>Loading...</p>
        </div>
        <ul>
            <Coin v-for='coin in coins' :coin='coin' :key="coin.id"/>
        </ul> 
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import Coin from '../components/Coin.vue'


export default {
    name: 'Home',
    components: { Coin },
    setup() {
        const store = useStore()
        onMounted(store.dispatch('fetchCoins'))
        const coins = computed(() => store.state.coins)

        return { coins }
    }
}
</script>

<style scoped>
@keyframes spin {
    from { 
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);    
    }
}

.hero {
    background-image: url("../assets/img/img1.svg");
    background-color: rgba(51, 51, 51, 0.85);
    @apply py-16 border w-11/12 m-auto rounded-md bg-blend-overlay bg-repeat-x bg-contain bg-top;
}

.spinner {
    @apply relative bg-purple-200 w-8 h-8 m-auto mt-5 mb-1 rounded-full;
}

.spinner__hand {
    animation-name: spin;
    animation-duration: 650ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: bottom right;
    transform-style: preserve-3d;    
    @apply relative h-4 w-4;
}

.spinner__hand::before {
    content: "";
    @apply absolute w-3 h-4 bg-purple-400 -right-1.5 opacity-70; 
}

.spinner__child {
    background-color: #f9fafb;
    @apply w-6 h-6 m-auto rounded-full relative -top-3 z-10;
}
</style>