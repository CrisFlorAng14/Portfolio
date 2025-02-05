<script setup>
import { RouterView } from 'vue-router';
import NavbarHeader from './components/NavbarHeader.vue';
import FooterSection from './components/FooterSection.vue';
</script>


<template>
  <div id="app" class="bg-gray-950">
    <NavbarHeader />
    <RouterView />
    <FooterSection />
  </div>
</template>

<style scoped>

</style>
