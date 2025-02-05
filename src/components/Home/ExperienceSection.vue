<!-- COMPONENTE DE SECCIÓN DE EXPERIENCIA 
    Muestra las áreas en las que he participado y trabajado
    - Ing. en TI
    - Tec. en Informática
    - Ilustrador
-->
<template>
    <div class="">
        <div class="px-9 py-4">
            <!-- Título -->
            <div class="py-3">
                <h3 class="font-semibold text-2xl text-white text-center md:text-left">Experiencia</h3>
            </div>
            <!-- Plantilla de vista previa de experiencia -->
            <div class="grid grid-cols-2 gap-2">
                <div v-for="(item, index) in experiences" :key="index"
                    class="flex md:gap-8 bg-gray-900 bg-opacity-50 backdrop-blur-md p-2 md:p-4 text-white hover:text-teal-500 rounded-lg">
                    <div class="grid grid-cols-12 w-full">
                        <div class="col-span-4 md:col-span-2">
                            <component :is="item.icon" class="transition-colors duration-500 w-[2rem] md:w-10" />
                        </div>
                        <div class="col-span-8 md:col-span-6 flex items-center">
                            <p class="text-white text-xs md:text-base">{{ item.title }}</p>
                        </div>
                        <div class="col-span-12 md:col-span-4 md:flex items-center justify-end">
                            <button @click="openModal(item.title, item.description)"
                                class="text-slate-400 w-full bg-slate-800 text-sm md:text-base mt-3 md:mt-0 px-3 py-1 rounded-full hover:text-gray-200 hover:bg-slate-700 font-medium transition-colors duration-500">
                                Detalles
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de detalles de experiencia -->
            <ModalExperience :isOpen="modalOpen" :title="modalTitle" :content="modalContent" @close="modalOpen = false" />
        </div>
    </div>
</template>

<script>
import ToolExperience from '../icons/ToolExperience.vue';
import CodeTool from '../icons/CodeTool.vue';
import DatabaseExperience from '../icons/DatabaseExperience.vue';
import DesignExperience from '../icons/DesignExperience.vue';
import TeachExperience from '../icons/TeachExperience.vue';
import ModalExperience from './ModalExperience.vue';
import OfficeExperience from '../icons/OfficeExperience.vue';

export default {
    components: {
        ToolExperience,
        CodeTool,
        DatabaseExperience,
        DesignExperience,
        TeachExperience,
        ModalExperience,
    },
    data() {
        return {
            // Información que será mostrada cuando el modal se active
            modalOpen: false,
            modalTitle: '',
            modalContent: '',
            experiences: [
                { title: "Desarrollo de Software", icon: CodeTool },
                { title: "Soporte Técnico", icon: ToolExperience },
                { title: "Respaldo y Recuperación", icon: DatabaseExperience },
                { title: "Diseño y Edición", icon: DesignExperience },
                { title: "Enseñanza", icon: TeachExperience },
                { title: "Informática Administrativa", icon: OfficeExperience }
            ]
        };
    },
    methods: {
        // Método para mostrar modal con envío de propiedades
        openModal(title, content) {
            this.modalTitle = title;
            this.modalContent = content;
            this.modalOpen = true;
        }
    }
};
</script>
