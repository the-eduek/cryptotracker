<template>
    <div class="fixed w-screen h-screen top-0 left-0 bg-gray-500 z-10 bg-opacity-70" @click.self="closeModal">
        <div class="h-1/2 w-full relative top-1/2 bg-purple-500 rounded-t-3xl text-white py-6 flex justify-between flex-col">
            <p class="text-5xl font-mono font-semibold">{{ amt.toFixed(5) }} </p>
            <p class="text-lg font-bold">{{ coin }}</p>
            <img src="../assets/img/img2.svg" class="object-contain object-top flex-1 w-full px-8 pt-8" alt="">
        </div>
    </div>
</template>

<script>
import { onUnmounted } from 'vue'

export default {
    emits: ['closeEvent', 'clearEvent'],
    props: [ 'coin', 'amt' ],
    setup(props, { emit }) {
        const closeModal = () => {
            emit('closeEvent')
        }

        onUnmounted(() => {
            emit('clearEvent')
        })

        return { closeModal }
    }
}
</script>