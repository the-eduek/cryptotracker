<template>
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>  

  <Nav />
</template>

<script setup lang="ts">
import Header from './components/Header.vue'; 
import Nav from '../src/components/Nav.vue';
</script>