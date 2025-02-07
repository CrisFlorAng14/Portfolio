<template>
    <nav class="bg-gray-900 text-white fixed top-0 w-full p-4 z-10">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-lg font-bold">{{ $t("WebPortfolio") }}</a>

            <!-- Menú en dispositivos grandes -->
            <ul class="hidden md:flex space-x-4">
                <li class="relative">
                    <button @click="toggleLanguageMenu" class="text-white flex items-center space-x-2">
                        <!-- Ícono de mundo -->
                        <p>{{ $i18n.locale.toUpperCase() }}</p>
                        
                        <!-- Triángulo hacia abajo -->
                        <TriangleIcon/>
                    </button>

                    <!-- Submenú de idiomas -->
                    <div v-if="languageMenuOpen" class="absolute bg-gray-800 p-2 mt-1 rounded-md space-y-2 translate-x-[-2.5rem]">
                        <button @click="$i18n.locale = 'es'" class="flex gap-4 text-white hover:bg-gray-700 p-2 rounded-md">
                            <MX/>
                            {{ $t("Spanish") }}
                        </button>
                        <button @click="$i18n.locale = 'en'" class="flex gap-4 text-white hover:bg-gray-700 p-2 rounded-md">
                            <US/>
                            {{ $t("English") }}
                        </button>
                    </div>
                </li>
                <li>
                    <a 
                        href="#start" 
                        class="hover:underline" 
                        :class="{'text-teal-500 duration-500': activeSection === 'start'}"
                        @click.prevent="scrollTo('start')"
                    >
                        {{ $t("StartNav") }}
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects" 
                        class="hover:underline" 
                        :class="{'text-teal-500 duration-500': activeSection === 'projects'}"
                        @click.prevent="scrollTo('projects')"
                    >
                        {{ $t("ProjectsNav") }}
                    </a>
                </li>
                <li>
                    <a 
                        href="#formation" 
                        class="hover:underline" 
                        :class="{'text-teal-500 duration-500': activeSection === 'formation'}"
                        @click.prevent="scrollTo('formation')"
                    >
                        {{ $t("FormationNav") }}
                    </a>
                </li>
            </ul>

            <!-- Icono de menú y botón de idioma para dispositivos pequeños -->
            <div class="flex md:hidden items-center space-x-2">
                <!-- Botón de idioma -->
                <button @click="toggleLanguageMenu" class="text-white relative">
                    <!-- Ícono de mundo -->
                    <div class="flex gap-1">
                        <p>{{ $i18n.locale.toUpperCase() }}</p>
                        <TriangleIcon/>
                    </div>
                    <!-- Submenú de idiomas para móviles -->
                    <div v-if="languageMenuOpen" class="absolute bg-gray-800 p-2 mt-1 rounded-md space-y-2 translate-x-[-7rem]">
                        <button @click="$i18n.locale = 'es'" class="flex gap-4 text-white hover:bg-gray-700 p-2 rounded-md">
                            <MX/>
                            {{ $t("Spanish") }}
                        </button>
                        <button @click="$i18n.locale = 'en'" class="flex gap-4 text-white hover:bg-gray-700 p-2 rounded-md">
                            <US/>
                            {{ $t("English") }}
                        </button>
                    </div>
                </button>

                <!-- Botón de menú -->
                <button @click="toggleMenu" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
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
                            {{ $t("StartNav")}}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            class="block hover:underline" 
                            :class="{'text-teal-500 duration-500': activeSection === 'projects'}"
                            @click.prevent="scrollTo('projects', true)"
                        >
                            {{ $t("ProjectsNav") }}
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#formation" 
                            class="block hover:underline" 
                            :class="{'text-teal-500 duration-500': activeSection === 'formation'}"
                            @click.prevent="scrollTo('formation', true)"
                        >
                            {{ $t("FormationNav") }}
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MX from './icons/MX.vue';
import US from './icons/US.vue';
import TriangleIcon from './icons/TriangleIcon.vue';

const menuOpen = ref(false);
const activeSection = ref('');
const languageMenuOpen = ref(false); // Control del submenú de idiomas

// Función para alternar el estado del menú en dispositivos pequeños
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Función para alternar el submenú de idiomas
const toggleLanguageMenu = () => {
    languageMenuOpen.value = !languageMenuOpen.value;
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
