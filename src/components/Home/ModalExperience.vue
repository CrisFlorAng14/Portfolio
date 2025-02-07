<!-- COMPONENTE DEL MODAL DE EXPERIENCIA
    Se muestra después de que en ExperienceSection se active algun modal
    Se muestra información depende del tipo de title
-->
<template>
    <transition name="fade">
        <div v-show="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-5 md:p-0">
            <div class="p-6 rounded-lg shadow-lg w-96 transition-opacity duration-300 bg-gray-900 bg-opacity-40 backdrop-blur-md">
                <h2 class="text-2xl font-bold text-white">{{ $t(title) }}</h2>

                <div v-if="title === 'SoftwareDevelopment'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>{{ $t("SD-Act1") }}</li>
                            <li>{{ $t("SD-Act2") }}</li>
                            <li>{{ $t("SD-Act3") }}</li>
                            <li>{{ $t("SD-Act4") }}</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'TechnicalSupport'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>{{ $t("TS-Act1") }}</li>
                            <li>{{ $t("TS-Act2") }}</li>
                            <li>{{ $t("TS-Act3") }}</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'BackupAndRecovery'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>{{ $t("BR-Act1") }}</li>
                            <li>{{ $t("BR-Act2") }}</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'DesignAndEditing'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>{{ $t("DE-Act1") }}</li>
                            <li>{{ $t("DE-Act2") }}</li>
                            <li>{{ $t("DE-Act3") }}</li>
                            <li>{{ $t("DE-Act4") }}</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'Teaching'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>{{ $t("TE-Act1") }}</li>
                            <li>{{ $t("TE-Act2") }}</li>
                            <li>{{ $t("TE-Act3") }}</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'AdministrativeIT'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>{{ $t("AI-Act1") }}</li>
                            <li>{{ $t("AI-Act2") }}</li>
                            <li>{{ $t("AI-Act3") }}</li>
                        </ul>
                    </div>
                </div>
                
                <div v-else>
                    <p class="text-red-600 font-semibold">Opción no reconocida.</p>                    
                </div>
                <!-- Botón para cerrar modal -->
                <button @click="closeModal" class="mt-4 px-4 py-1 bg-cyan-950 border border-teal-500 text-teal-500 rounded-lg hover:bg-cyan-700 hover:text-white hover:border-white duration-300">
                    Cerrar
                </button>
            </div>
        </div>
    </transition>
</template>


<script>
export default {
    // Propiedades recibidas
    props: {
        isOpen: Boolean,
        title: String,
    },
    emits: ["close"],
    methods: {
        closeModal() {
            this.$emit("close");
        }
    }
};
</script>

<style>
/* Animación de entrada y salida */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
