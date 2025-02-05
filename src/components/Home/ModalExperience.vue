<!-- COMPONENTE DEL MODAL DE EXPERIENCIA
    Se muestra después de que en ExperienceSection se active algun modal
    Se muestra información depende del tipo de title
-->
<template>
    <transition name="fade">
        <div v-show="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-5 md:p-0">
            <div class="p-6 rounded-lg shadow-lg w-96 transition-opacity duration-300 bg-gray-900 bg-opacity-40 backdrop-blur-md">
                <h2 class="text-2xl font-bold text-white">{{ title }}</h2>

                <div v-if="title === 'Desarrollo de Software'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>Diseño de interfaces</li>
                            <li>Desarrollo web</li>
                            <li>Desarrollo de escritorio</li>
                            <li>Desarrollo Full-Stack</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'Soporte Técnico'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>Mantenimiento preventivo y correctivo</li>
                            <li>Instalación de software</li>
                            <li>Soporte Remoto</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'Respaldo y Recuperación'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>Respaldo de datos en la nube</li>
                            <li>Recuperación de Información de DD</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'Diseño y Edición'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>Diseño de logos</li>
                            <li>Animaciones sencillas</li>
                            <li>Arte e Ilustración</li>
                            <li>Edición de fotos</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'Enseñanza'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>Clases de computación</li>
                            <li>Clases de dibujo artístico</li>
                            <li>Clases de baile</li>
                        </ul>
                    </div>
                </div>

                <div v-else-if="title === 'Informática Administrativa'">
                    <div class="text-slate-500 text-base py-5">
                        <ul class="list-disc ml-5">
                            <li>Gestión de documentos</li>
                            <li>Generación de contratos y cartas</li>
                            <li>Uso de equipo de oficina</li>
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
