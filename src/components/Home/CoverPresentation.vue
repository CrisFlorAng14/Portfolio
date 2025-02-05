<template>
    <div class="md:h-[100vh]" id="start">
        <div class="grid grid-cols-12 gap-2 w-full mt-14">
            <!-- Sección de Imagen de Perfil -->
            <div class="text-white col-span-12 md:col-span-6 flex justify-center items-center p-6 flex-col">
                <img src="/images/profile/profile_photo.jpg" alt="Perfil" class="h-40 w-40 md:h-80 md:w-80 rounded-full mb-4 border-2 border-teal-400">
                <button @click="downloadCV" 
                    class="bg-none text-teal-500 border border-teal-500 px-6 py-2 rounded-full font-semibold 
                    hover:bg-cyan-950 hover:text-teal-300 hover:border-teal-300 transition duration-300">
                    Descargar CV
                </button>
            </div>


            
            <!-- Sección del Efecto de Máquina de Escribir -->
            <div class="col-span-12 md:col-span-6 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-md px-6 pt-6 mx-9 md:p-6 md:m-9 rounded-xl">
                <div class="relative">
                    <h1 class="text-3xl md:text-4xl font-mono border-r-4 border-white text-white whitespace-nowrap overflow-hidden min-h-[2.5rem]" :class="{ 'animate-blink': showCursor }">
                        {{ displayedText }}
                    </h1>
                </div>

                <!-- Descripción -->
                <div class="text-gray-500 text-sm md:text-base mt-4">
                    <p>
                        Soy Cristian Flores, Ing. en Tecnologías de la Información y te invito a ver mi portafolio
                        como desarrollador de software.
                    </p>
                    <br>
                    <p>
                        Apasionado por la tecnología y el arte, me especializo en combinar ambos mundos para diseñar 
                        soluciones innovadoras y eficientes. Actualmente me desempeño como desarrollador Full-Stack, 
                        con experiencia en diversas áreas complementarias, como soporte técnico, diseño de interfaces, 
                        informática administrativa y enseñanza.
                    </p>
                    <br>
                    <p>
                        Te invito a explorar mi trabajo y conocer más sobre cómo puedo aportar valor a tus proyectos.
                    </p>
                    <br>
                    <p>Puedes contactarme a través de mis redes sociales o descargar mi CV.</p>
                </div>
                <div class="py-5 flex gap-2">
                    <a href="https://www.facebook.com/cristian.2002.flores/" target="_blank">
                        <FacebookIcon class="text-gray-500 hover:text-teal-500 transition-colors duration-500"/>
                    </a>
                    <a href="https://www.instagram.com/chris.art14/" target="_blank">
                        <InstagramIcon class="text-gray-500 hover:text-teal-500 transition-colors duration-500"/>
                    </a>
                    <a href="https://wa.link/6406jy" target="_blank">
                        <WhatsappIcon class="text-gray-500 hover:text-teal-500 transition-colors duration-500"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cristian-flores-anguiano-22b57b25b/" target="_blank">
                        <LinkedinIcon class="text-gray-500 hover:text-teal-500 transition-colors duration-500"/>
                    </a>
                    <a href="https://github.com/CrisFlorAng14" target="_blank">
                        <GithubTool class="text-gray-500 hover:text-teal-500 transition-colors duration-500"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from "vue";

const texts = ["¡Hola mundo!", "Cristian Flores", "Ing. en TI", "Desarrollador", "Ilustrador"];
const displayedText = ref("");
const showCursor = ref(true);
let textIndex = 0;
let charIndex = 0;

// Función para escribir texto
const typeText = () => {
    if (charIndex < texts[textIndex].length) {
        displayedText.value += texts[textIndex][charIndex];
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
};

// Función para borrar texto
const eraseText = () => {
    if (charIndex > 0) {
        displayedText.value = displayedText.value.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    }
};
// Función para descargar CV
const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/cv.pdf'; 
    link.download = 'CV.pdf';
    link.click();
};

onMounted(() => {
    typeText();
    setInterval(() => {
        showCursor.value = !showCursor.value;
    }, 500);
});
</script>

<script>
import FacebookIcon from "../icons/SocialMedia/FacebookIcon.vue";
import GithubTool from "../icons/GithubTool.vue";
import InstagramIcon from "../icons/SocialMedia/InstagramIcon.vue";
import WhatsappIcon from "../icons/SocialMedia/WhatsappIcon.vue";
import LinkedinIcon from "../icons/SocialMedia/LinkedinIcon.vue";
export default {
    components: {
        FacebookIcon,
        GithubTool,
        InstagramIcon,
        WhatsappIcon,
        LinkedinIcon,
    }
};
</script>

<style scoped>
@keyframes blink {
    50% { border-color: transparent; }
}
.animate-blink {
    animation: blink 0.6s infinite;
}
</style>
