<template>
    <div class="home-box">
        <Nav navActive="/"></Nav>
        <div class="home-contents-box">
            <CHeader></CHeader>
            <section class="section">
                <div class="description">
                    <h1>欢迎使用 Cloudmind 管理面板</h1>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import Nav from '@/components/nav.vue'
import CHeader from '@/components/cheader.vue'
import { ref } from 'vue'
</script>

<style scoped lang="css">
.home-box {
    width: 100%;
    height: 100%;
    display: flex;

    .home-contents-box {
        flex: 1;

        .section {
            .description {
                width: 100;
                height: 80px;
                margin: 20px;
                padding: 20px;
                font-size: 20px;
                font-weight: 500;
                border-radius: 5px;
                color: #fff;
                background-color: #545c645d;
                box-shadow: 0 0 8px rgba(26,26,26,.1);
                display: flex;
                align-items: center;
            }
        }
    }
}
</style>