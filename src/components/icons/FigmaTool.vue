<template>
    <svg xmlns="http://www.w3.org/2000/svg"  
    viewBox="0 0 48 48" width="40px" height="40px" class="fill-current">
        <path class="path-color" :fill="color_1" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"/>
        <path class="path-color" :fill="color_2" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"/>
        <path class="path-color" :fill="color_3" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"/>
        <path class="path-color" :fill="color_4" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"/>
        <circle class="path-color" cx="32" cy="24" r="7" :fill="color_5"/>
    </svg>
</template>

<script>
export default {
    props: {
        color_1: {
            type: String,
            default: ''
        },
        color_2: {
            type: String,
            default: ''
        },
        color_3: {
            type: String,
            default: ''
        },
        color_4: {
            type: String,
            default: ''
        },
        color_5: {
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
.path-color {
    transition: fill 0.5s ease;
}
</style>