<template>
    <div class="px-5 md:px-9 py-4">
        <div class="mb-2">
            <h3 class="font-semibold text-2xl text-white text-center md:text-left">Títulos</h3>
        </div>
        <div class="grid grid-cols-12 md:gap-9 w-full">
            <!-- Tarjeta UPEMOR -->
            <div class="col-span-12 md:col-span-6 bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-md hover:bg-opacity-50 hover:bg-gray-800">
                <div class="grid grid-cols-12 w-full">
                    <div class="col-span-8 p-4">
                        <h3 class="font-bold text-white text-sm md:text-base">Universidad Politécnica del Estado de Morelos (UPEMOR)</h3>
                        <h4 class="font-semibold text-gray-500 mt-2 text-sm md:text-base">Ingeniero en Tecnologías de la Información</h4>
                        <button 
                            @click="openModal('/documents/titles/upemor.pdf')" 
                            class="bg-cyan-950 px-6 py-1 mt-3 rounded-md font-semibold text-teal-400"
                        >
                            Ver Documento
                        </button>
                    </div>
                    <div class="col-span-4 flex justify-center items-center">
                        <div class="rounded-full text-center bg-sky-950 h-24 w-24 md:h-30 md:w-30 border border-teal-500 flex flex-col justify-center items-center">
                            <p class="text-teal-500 text-xs">Promedio</p>
                            <h3 class="text-teal-500 text-2xl md:text-4xl font-bold mb-3">9.0</h3>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tarjeta CONALEP -->
            <div class="col-span-12 md:col-span-6 mt-3 md:mt-0 bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-md hover:bg-opacity-50 hover:bg-gray-800">
                <div class="grid grid-cols-12 w-full">
                    <div class="col-span-8 p-4">
                        <h3 class="font-bold text-white text-sm md:text-base">Colegio Nacional de Educación Profesional (CONALEP p. Temixco)</h3>
                        <h4 class="font-semibold text-gray-500 mt-2 text-sm md:text-base">Técnico en informática</h4>
                        <button 
                            @click="openModal('/documents/titles/conalep.pdf')" 
                            class="bg-cyan-950 px-6 py-1 mt-3 rounded-md font-semibold text-teal-400"
                        >
                            Ver Documento
                        </button>
                    </div>
                    <div class="col-span-4 flex justify-center items-center">
                        <div class="rounded-full text-center bg-sky-950 h-24 w-24 md:h-30 md:w-30 border border-teal-500 flex flex-col justify-center items-center">
                            <p class="text-teal-500 text-xs">Promedio</p>
                            <h3 class="text-teal-500 text-2xl md:text-4xl font-bold mb-3">9.7</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
            <div class="bg-gray-600 bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg w-3/4 h-[80vh]">
                <div class="flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-white">Documento</h3>
                    <button @click="closeModal" class="text-white hover:bg-red-500 hover:text-white font-bold py-1 px-3 rounded-lg mb-1 duration-300">&times;</button>
                </div>
                <iframe :src="pdfUrl" class="w-full h-[70vh] rounded-md"></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const pdfUrl = ref('');

const openModal = (url) => {
    pdfUrl.value = url;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    pdfUrl.value = '';
};
</script>
