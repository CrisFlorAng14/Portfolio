<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavbarHeader from './components/NavbarHeader.vue';
import FooterSection from './components/FooterSection.vue';

onMounted(() => {
  // Cargar particles.min.js dinámicamente desde public
  const script = document.createElement('script');
  script.src = '/particles.min.js'; // Cargar desde /public
  script.onload = () => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#0d9488' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 }
          },
          opacity: { value: 0.5, anim: { enable: false } },
          size: { value: 3, random: true, anim: { enable: false } },
          line_linked: { enable: true, distance: 150, color: '#0d9488', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: 'none', out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: false, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    } else {
      console.error('particlesJS no se cargó correctamente.');
    }
  };
  document.body.appendChild(script);
});
</script>

<template>
  <div class="particles-container">
    <div id="particles-js" style="position: fixed; width: 100%; height: 100%; z-index: -1;" class="bg-gray-950"></div>
    <div class="content">
      <NavbarHeader />
      <RouterView />
      <FooterSection />
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  z-index: 1;
}
</style>
