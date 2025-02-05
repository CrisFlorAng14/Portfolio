<!-- COMPONENTE DE HABILIDADES
    Muestra las tecnologías y herramientas con las que he trabajado
    - Tecnologías
    - Herramientas
-->
<template>
    <div class="">
        <div class="px-9 py-4">
            
            <div class="grid grid-cols-12 md:gap-16">
                <div class="col-span-12 md:col-span-6">
                    <div class="py-3">
                        <h3 class=" font-semibold text-2xl text-white text-center md:text-left">Tecnologías</h3>
                    </div>
                    <div class="grid grid-cols-3 md:grid-cols-4 gap-2">
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-orange-600 rounded-lg">
                            <HtmlTech class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">HTML5</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-sky-600 rounded-lg">
                            <CssTech class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">CSS3</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-yellow-500 rounded-lg">
                            <JsTech class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">JavaScript</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-indigo-400 rounded-lg">
                            <PhpLanguage class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">PHP</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-sky-900 rounded-lg">
                            <MySql class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">MySql</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-emerald-600 rounded-lg">
                            <VueJs class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Vue.Js</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-red-500 rounded-lg">
                            <LaravelFramework class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Laravel</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-violet-800 rounded-lg">
                            <BootstrapFramework class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Bootstrap</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-cyan-500 rounded-lg">
                            <TailwindFramework class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Tailwind</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-blue-800 rounded-lg">
                            <CLanguage class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">C</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-sky-700 rounded-lg">
                            <CPlusLanguage class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">C++</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-violet-900 rounded-lg">
                            <CSharpLanguage class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">C#</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-red-500 rounded-lg">
                            <JavaLanguage class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Java</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <div class="py-3">
                        <h3 class=" font-semibold text-2xl text-white">Herramientas</h3>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-orange-600 rounded-lg">
                            <MicrosoftOffice class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">MS Office</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-sky-600 rounded-lg">
                            <VisualTool class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Visual Studio</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white rounded-lg"
                        @mouseenter="setHoverColor('#e64a19', '#7c4dff', '#66bb6a', '#ff7043','#29b6f6')"
                        @mouseleave="setHoverColor('', '', '', '','')">
                            <FigmaTool :color_1="hoverColor1" :color_2="hoverColor2" :color_3="hoverColor3" :color_4="hoverColor4" :color_5="hoverColor5" class="transition-colors duration-500 text-4xl"/>
                                <p class="text-white text-center mt-2 text-sm">Figma</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-indigo-900 rounded-lg">
                            <GithubTool class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">GitHub</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-sky-700 rounded-lg">
                            <PhotoshopTool class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Photoshop</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-amber-700 rounded-lg">
                            <IllustratorTool class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">Photoshop</p>
                        </div>
                        <div class="flex flex-col items-center bg-gray-900 bg-opacity-50 backdrop-blur-md p-4 text-white hover:text-gray-500 rounded-lg">
                            <ClipTool class="transition-colors duration-500 text-4xl"/>
                            <p class="text-white text-center mt-2 text-sm">CS Paint</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

import BootstrapFramework from '../icons/BootstrapFramework.vue';
import CLanguage from '../icons/CLanguage.vue';
import CPlusLanguage from '../icons/CPlusLanguage.vue';
import CSharpLanguage from '../icons/CSharpLanguage.vue';
import CssTech from '../icons/CssTech.vue';
import FigmaTool from '../icons/FigmaTool.vue';
import HtmlTech from '../icons/HtmlTech.vue';
import JavaLanguage from '../icons/JavaLanguage.vue';
import JsTech from '../icons/JsTech.vue';
import LaravelFramework from '../icons/LaravelFramework.vue';
import MicrosoftOffice from '../icons/MicrosoftOffice.vue';
import MySql from '../icons/MySql.vue';
import TailwindFramework from '../icons/TailwindFramework.vue';
import VueJs from '../icons/VueJs.vue';
import GithubTool from '../icons/GithubTool.vue';
import PhpLanguage from '../icons/PhpLanguage.vue';
import PhotoshopTool from '../icons/PhotoshopTool.vue';
import IllustratorTool from '../icons/IllustratorTool.vue';
import ClipTool from '../icons/ClipTool.vue';
import VisualTool from '../icons/VisualTool.vue';

export default {
    components: {
        MicrosoftOffice,
        VueJs,
        LaravelFramework,
        HtmlTech,
        CssTech,
        JsTech,
        BootstrapFramework,
        TailwindFramework,
        CLanguage,
        CPlusLanguage,
        CSharpLanguage,
        JavaLanguage,
        MySql,
        FigmaTool,
        GithubTool,
        PhpLanguage,
        PhotoshopTool,
        IllustratorTool,
        ClipTool,
        VisualTool,
    },
    setup() {
    const hoverColor1 = ref('');
        const hoverColor2 = ref('');
        const hoverColor3 = ref('');
        const hoverColor4 = ref('');
        const hoverColor5 = ref('');

        /**
         * Función para cambiar los colores
         * Entradas: colores
         * Salida: Icono con colores 
         */
        const setHoverColor = (color1, color2, color3, color4, color5) => {
            hoverColor1.value = color1;
            hoverColor2.value = color2;
            hoverColor3.value = color3;
            hoverColor4.value = color4;
            hoverColor5.value = color5;
        };
        // Retornar los valores según la posición del mouse
        return {
            hoverColor1,
            hoverColor2,
            hoverColor3,
            hoverColor4,
            hoverColor5,
            setHoverColor
        };
    }
}
</script>