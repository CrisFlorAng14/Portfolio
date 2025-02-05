<template>
    <nav class="bg-gray-900 text-white fixed top-0 w-full p-4 z-10">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-lg font-bold">Portafolio web</a>

            <!-- Menú en dispositivos grandes -->
            <ul class="hidden md:flex space-x-4">
                <li>
                    <a 
                        href="#start" 
                        class="hover:underline" 
                        :class="{'text-teal-500 duration-500': activeSection === 'start'}"
                        @click.prevent="scrollTo('start')"
                    >
                        Inicio
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects" 
                        class="hover:underline" 
                        :class="{'text-teal-500 duration-500': activeSection === 'projects'}"
                        @click.prevent="scrollTo('projects')"
                    >
                        Proyectos
                    </a>
                </li>
                <li>
                    <a 
                        href="#formation" 
                        class="hover:underline" 
                        :class="{'text-teal-500 duration-500': activeSection === 'formation'}"
                        @click.prevent="scrollTo('formation')"
                    >
                        Formación
                    </a>
                </li>
            </ul>

            <!-- Icono de menú para dispositivos pequeños -->
            <button @click="toggleMenu" class="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Menú desplegable en dispositivos pequeños con animación -->
        <transition name="menu-slide">
            <div v-if="menuOpen" class="md:hidden bg-gray-800 p-4 space-y-2 mt-2">
                <ul>
                    <li>
                        <a 
                            href="#start" 
                            class="block hover:underline" 
                            :class="{'text-teal-500 duration-500': activeSection === 'start'}"
                            @click.prevent="scrollTo('start', true)"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            class="block hover:underline" 
                            :class="{'text-teal-500 duration-500': activeSection === 'projects'}"
                            @click.prevent="scrollTo('projects', true)"
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#formation" 
                            class="block hover:underline" 
                            :class="{'text-teal-500 duration-500': activeSection === 'formation'}"
                            @click.prevent="scrollTo('formation', true)"
                        >
                            Formación
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menuOpen = ref(false);
const activeSection = ref('');

// Función para alternar el estado del menú en dispositivos pequeños
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Función para desplazarse suavemente hacia un elemento y cerrar el menú si está abierto
const scrollTo = (id, closeMenu = false) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',  // Desplazamiento suave
            block: 'start',
        });
    }
    if (closeMenu) {
        setTimeout(() => {
            menuOpen.value = false;
        }, 500); // Permitir que la animación de desplazamiento termine antes de cerrar el menú
    }
};

// Función para detectar la sección activa
const checkActiveSection = () => {
    const sections = ['start', 'projects', 'formation'];
    let currentSection = '';
    sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section;
            }
        }
    });
    activeSection.value = currentSection;
};

onMounted(() => {
    // Detectar cuando el usuario se desplaza por la página
    window.addEventListener('scroll', checkActiveSection);
    // Llamar la función de una vez para establecer el valor inicial
    checkActiveSection();
});
</script>

<style>
/* Animación para mostrar el menú */
.menu-slide-enter-active, .menu-slide-leave-active {
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.menu-slide-enter-from, .menu-slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.menu-slide-enter-to, .menu-slide-leave-from {
    max-height: 500px;
    opacity: 1;
}
</style>
