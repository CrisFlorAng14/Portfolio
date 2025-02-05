<template>
    <div class="px-9 py-4 h-[70rem] md:h-0">
        <div class="mb-2">
            <h3 class="font-semibold text-2xl text-white text-center md:text-left">Certificaciones</h3>
        </div>
        <div class="grid grid-cols-12 gap-3 w-full">
            <CertificationSection
                name="Introducción a la Seguridad Cibernética"
                year="2021"
                document="../../../public/documents/certifications/IntroducciónALaSeguridadCibernética.pdf"
            />
            <CertificationSection
                name="CLA: Programming Essentials in C"
                year="2021"
                document="../../../public/documents/certifications/ProgrammingEssentialsInC.pdf"
            />
            <CertificationSection
                name="CCNAv7: Introducción a Redes"
                year="2021"
                document="../../../public/documents/certifications/IntroducciónARedes.pdf"
            />
            <CertificationSection
                name="Get Connected"
                year="2021"
                document="../../../public/documents/certifications/GetConnected.pdf"
            />
            <CertificationSection
                name="CCNAv7: Switching, Routing and Wireless Essentials"
                year="2021"
                document="../../../public/documents/certifications/SwitchingRoutingAndWirelessEssentials.pdf"
            />
            <CertificationSection
                name="CCNAv7: Redes empresariales, Seguridad y Automatización"
                year="2022"
                document="../../../public/documents/certifications/RedesEmpresarialesSeguridadYAutomatización.pdf"
            />
            <CertificationSection
                name="CCNAv7: Bridging"
                year="2022"
                document="../../../public/documents/certifications/Bridging.pdf"
            />
            <CertificationSection
                name="Emerging Technologies Workshop: Model Driven Programmability"
                year="2022"
                document="../../../public/documents/certifications/EmergingTechnologiesWorkshopModelDrivenProgrammability.pdf"
            />
            <CertificationSection
                name="Introducción a IoT"
                year="2022"
                document="../../../public/documents/certifications/IntroducciónAIoT.pdf"
            />
            <CertificationSection
                name="Entrepreneurship"
                year="2022"
                document="../../../public/documents/certifications/Entrepreneurship.pdf"
            />
            <CertificationSection
                name="IoT Fundamentals: Connecting Thing"
                year="2022"
                document="../../../public/documents/certifications/ConnectingThings.pdf"
            />
        </div>
    </div>
</template>

<script>
import CertificationSection from './CertificationComponent.vue';
export default {
    components: {
        CertificationSection,
    }
}
</script>