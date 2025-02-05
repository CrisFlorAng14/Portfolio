<!-- COMPONENTE DE FORMACIÓN ACADEMICA Y EXPERIENCIA
    Muestra el menu de opciones y la sección según el usuario seleccione
    - Estudios
    - Certificaciones
    - Habilidades
    - Experiencia
-->
<template>
    <div class="md:h-[100vh]" id="formation">
        <div class="px-9 py-4">
            <div class="grid grid-cols-12 gap-2 w-full">
                <div class="col-span-12 md:col-span-6">
                    <div class="md:flex md:items-start md:justify-start">
                        <h2 class="text-white font-bold text-4xl text-center md:text-left">Formación</h2>
                    </div>
                </div>

                <!-- Submenu de opciones -->
                <div class="col-span-12 md:col-span-6">
                    <div class="flex items-center justify-center md:items-end md:justify-end">
                        <button
                        @click.prevent="currentTab = 'formation'"
                        :class="['bg-cyan-950', 'hover:bg-cyan-800', 'text-teal-400', 'border', 'px-2', 'py-1', 'border-teal-700', currentTab === 'formation' ? 'bg-cyan-600 text-gray-900' : '']"
                        class="rounded-l-lg text-sm md:text-base px-1">
                            Estudios
                        </button>
                        <button
                        @click.prevent="currentTab = 'certification'"
                        :class="['bg-cyan-950', 'hover:bg-cyan-800', 'text-teal-400', 'border', 'px-2', 'py-1', 'border-teal-700', currentTab === 'certification' ? 'bg-cyan-600 text-gray-900' : '']"
                        class="text-sm md:text-base px-1">
                            Certificaciones
                        </button>
                        <button
                        @click.prevent="currentTab = 'skills'"
                        :class="['bg-cyan-950', 'hover:bg-cyan-800', 'text-teal-400', 'border', 'px-2', 'py-1', 'border-teal-700', currentTab === 'skills' ? 'bg-cyan-600 text-gray-900' : '']"
                        class="text-sm md:text-base px-1">
                            Habilidades
                        </button>
                        <button
                        @click.prevent="currentTab = 'experience'"
                        :class="['bg-cyan-950', 'hover:bg-cyan-800', 'text-teal-400', 'border', 'px-2', 'py-1', 'border-teal-700', currentTab === 'experience' ? 'bg-cyan-600 text-gray-900' : '', 'rounded-r-lg']"
                        class="text-sm md:text-base px-1">
                            Experiencia
                        </button>
                    </div>
                </div>
            </div>
        <!-- Sección de contenido -->
        </div>
        <div class="mt-4">
            <FormationSection v-if="currentTab === 'formation'" />
            <CertificationsSection v-if="currentTab === 'certification'" />
            <SkillsSection v-if="currentTab === 'skills'" />
            <ExperienceSection v-if="currentTab === 'experience'" />
        </div>
    </div>
</template>

<script>

import FormationSection from "./FormationSection.vue";
import CertificationsSection from "./CertificationsSection.vue";
import SkillsSection from "./SkillsSection.vue";
import ExperienceSection from "./ExperienceSection.vue";

export default {
    components: {
    FormationSection,
    CertificationsSection,
    SkillsSection,
    ExperienceSection,
},
    data() {
        return {
            currentTab: 'formation', // Retorna la sección de 'Formación' por defecto
        };
    },
};
</script>
