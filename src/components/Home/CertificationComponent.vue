<!-- COMPONENTE DE CERTIFICACIÓN 
    Plantilla para recibir datos de la certificación y mostrarla (1 sola certificación)
    - Certificación
    - Año
    - Documento PDF en modal
-->
<template>
    <!-- Componente de certificación individual -->
    <div class="col-span-6 md:col-span-3 bg-gray-900 bg-opacity-50 rounded-md">
        <div class="p-4">
            <div class="md:min-h-[3.5rem]">
                <h3 class="text-white font-medium text-sm md:text-base truncate whitespace-nowrap overflow-hidden text-ellipsis">
                    {{ name }}
                </h3>
            </div>

            <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-6 md:flex items-center justify-start">
                    <h5 class="text-gray-600 font-semibold text-sm md:text-base">{{ year }}</h5>
                </div>
                <div class="col-span-12 md:col-span-6 flex items-center justify-center md:items-end md:justify-end mt-3 md:mt-0">
                    <button 
                        @click="openModal(document)" 
                        class="bg-yellow-950 text-yellow-400 px-5 py-1 rounded-full text-sm md:text-base"
                    >
                        Certificación
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de la certificación -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
        <div class="bg-gray-600 bg-opacity-50 backdrop-blur-md p-4 rounded-lg shadow-lg w-3/4 h-[80vh]">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold text-white">Documento</h3>
                <button @click="closeModal" class="text-white hover:bg-red-500 hover:text-white font-bold py-1 px-3 rounded-lg mb-1 duration-300">&times;</button>
            </div>
            <iframe :src="pdfUrl" class="w-full h-[70vh] rounded-md"></iframe>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const pdfUrl = ref('');
/**
 * Función para mostrar modal y documento
 * Entradas: URL
 * Salidas: Modal con PDF
 */
const openModal = (url) => {
    if (url) {
        pdfUrl.value = url;
        isModalOpen.value = true;
    } else {
        alert("No hay documento disponible");
    }
};

const closeModal = () => {
    isModalOpen.value = false;
    pdfUrl.value = '';
};
</script>

<script>
export default {
    // Propiedades que utiliza la certificación
    props: {
        name: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        document: {
            type: String,
            required: false,
        }
    }
}
</script>
