<template>
  <Nav/>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>  

  <Footer/>
</template>

<script setup>
import Nav from '../src/components/Nav.vue'
import Footer from '../src/components/Footer.vue'
</script>

<style>
#app {
  color: #333;
  font-family: "Kumbh Sans", 'Helvetica Neue', sans-serif;
  background: #f9fafb;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.route-enter-from, 
.route-leave-to {
  opacity: 0;
}
.route-enter-active,
.route-leave-active {
  transition: opacity 200ms ease-out;
}
</style>