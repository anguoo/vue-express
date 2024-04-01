<template>
    <div class="home-box">
        <Nav class="nav"></Nav>
    </div>
</template>

<script setup lang="ts">
import Nav from '@/components/nav.vue'
import { ref } from 'vue'
</script>

<style scoped lang="css">
.home-box {
    width: 100%;
    height: 100%;

    .nav {
        height: 100%;
    }
}
</style>