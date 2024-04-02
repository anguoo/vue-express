<template>
    <div class="header">
        <div class="right">
            <div class="user">
                <el-avatar 
                    :size="45" 
                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" 
                    class="avatar"
                />
                <span class="user-name">admin</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
</script>
<style scoped lang="css">
.header {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);

    .right {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
        .user {
            display: flex;
            align-items: center;

            .avatar {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin: 0 10px 0 30px;
            }

            .user-name {
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
}
</style>