<!-- COMPONENTE DE LOS PROYECTOS DESARROLLADOS
    Muestra los proyectos más recientes que se desarrollaron
    - Proyecto
    - Año
    - Descripción
-->
<template>
    <div class="md:h-[100vh]" id="projects">
        <div class="px-9 py-4">
            <h2 id="projects-section" class="text-white font-bold text-4xl text-center md:text-left">{{ $t("ProjectsNav")}}</h2>
        </div>
        <div class="grid grid-cols-12 gap-2 w-full">
            <!-- Sistema web Óptica Punto Visual -->
            <div class="col-span-12 md:col-span-6">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl my-1 mx-9 min-h-[16rem] md:min-h-[14rem]">
                        <div class="h-8rem md:h-[7.5rem]">
                            <h5 class="text-white font-semibold">{{ $t("Project1") }}</h5>
                            <h6 class="text-gray-500 text-sm font-semibold">{{  $t("RoleDate1") }}</h6>
                            <p class="text-gray-600 font-normal text-sm mt-1">
                                {{ $t("Description1") }}
                            </p>
                        </div>
                        <div class="pt-4 grid grid-cols-3 md:grid-cols-4 gap-2">
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">Laravel</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">HTML5</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">CSS3</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">JavaScript</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">PHP</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">Bootstrap</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sitio web Puertas Automáticas Abundez -->
            <div class="col-span-12 md:col-span-6">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl my-1 mx-9 min-h-[16rem] md:min-h-[14rem]">
                        <div class="h-8rem md:h-[7.5rem]">
                            <h5 class="text-white font-semibold">{{ $t("Project2") }}</h5>
                            <h6 class="text-gray-500 text-sm font-semibold">{{  $t("RoleDate2") }}</h6>
                            <p class="text-gray-600 font-normal text-sm mt-1">
                                {{ $t("Description2") }}
                            </p>
                        </div>
                        <div class="py-4 grid grid-cols-3 md:grid-cols-4 gap-2">
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">HTML5</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">CSS3</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">JavaScript</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sitio web Stars DC -->
            <div class="col-span-12 md:col-span-6">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl my-1 mx-9 min-h-[16rem] md:min-h-[14rem]">
                        <div class="h-8rem md:h-[7.5rem]">
                            <h5 class="text-white font-semibold">{{ $t("Project3") }}</h5>
                            <h6 class="text-gray-500 text-sm font-semibold">{{  $t("RoleDate3") }}</h6>
                            <p class="text-gray-600 font-normal text-sm mt-1">
                                {{ $t("Description3") }}
                            </p>
                        </div>
                        <div class="py-4 grid grid-cols-3 md:grid-cols-4 gap-2">
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">VueJS</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">HTML5</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">CSS3</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">JavaScript</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Portfolio -->
            <div class="col-span-12 md:col-span-6">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 bg-gray-900 bg-opacity-50 backdrop-blur-md p-3 rounded-xl my-1 mx-9 min-h-[16rem] md:min-h-[14rem]">
                        <div class="h-8rem md:h-[7.5rem]">
                            <h5 class="text-white font-semibold">{{ $t("Project4") }}</h5>
                            <h6 class="text-gray-500 text-sm font-semibold">{{  $t("RoleDate4") }}</h6>
                            <p class="text-gray-600 font-normal text-sm mt-1">
                                {{ $t("Description4") }}
                            </p>
                        </div>
                        <div class="py-4 grid grid-cols-3 md:grid-cols-4 gap-2">
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">VueJS</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">HTML5</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">CSS3</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">JavaScript</span>
                            <span class="rounded-full text-center bg-cyan-950 px-4 py-1 text-sm text-teal-400">Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>