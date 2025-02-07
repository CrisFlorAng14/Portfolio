<template>
    <footer class="bg-gray-900">
        <div class="p-5">
            <div class="grid grid-cols-12">
                <!-- Sección de redes sociales -->
                <div class="col-span-12 md:col-span-6 flex items-center justify-center order-2 md:order-1">
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
                <!-- Sección de derechos de autor -->
                <div class="col-span-12 md:col-span-6 text-center md:text-left order-1 md:order-2">
                    <h4 class="font-bold text-gray-300">© {{ year }} Cristian Flores Anguiano</h4>
                    <h3 class="font-semibold text-gray-500">{{ $t("Title") }}</h3>
                    <p class="text-gray-700">cfloresang.1402@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Obtención del año actual
const year = new Date().getFullYear();
</script>

<script>
// Componentes SVG utilizados
import FacebookIcon from "./icons/SocialMedia/FacebookIcon.vue";
import GithubTool from "./icons/GithubTool.vue";
import InstagramIcon from "./icons/SocialMedia/InstagramIcon.vue";
import WhatsappIcon from "./icons/SocialMedia/WhatsappIcon.vue";
import LinkedinIcon from "./icons/SocialMedia/LinkedinIcon.vue";
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