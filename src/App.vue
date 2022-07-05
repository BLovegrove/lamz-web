<script>
import Hub from './views/Hub.vue'
import Navbar from './components/Navbar.vue'

export default {
    title: 'LAMz-net',
    components: {
    Hub,
    Navbar
}
}
</script>

<template>
    <Navbar />
    <Hub />
</template>

<style>
body {
    font-family: "Poppins", Arial, sans-serif;
}
</style>