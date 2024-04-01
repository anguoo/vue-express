<template>
    <div class="nav-box">
        <el-menu
            default-active="/"
            class="el-menu-vertical-demo"
            router="true"
            unique-opened="true"
            background-color="#545c64"
            text-color="#ffffff99"
        >
            <div class="logo">
                <img src="../assets/logo.png" alt="">
                <span>cloudmind</span>
            </div>
            <el-menu-item index="/">
                首页
            </el-menu-item>
            <el-sub-menu index="user">
                <template #title>
                    <span>用户管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/user">
                        用户管理
                    </el-menu-item>
                    <el-menu-item index="/user/role">
                        角色管理
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="permission">
                <template #title>
                    <span>权限管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/permission/user">
                        用户权限管理
                    </el-menu-item>
                    <el-menu-item index="/permission/manager">
                        管理员权限管理
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="posts">
                <template #title>
                    <span>帖子管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/posts/post">
                        文章管理
                    </el-menu-item>
                    <el-menu-item index="/posts/comments">
                        评论管理
                    </el-menu-item>
                    <el-menu-item index="/posts/classify">
                        分区管理
                    </el-menu-item>
                    <el-menu-item index="/posts/tags">
                        标签管理
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="/notification">
                通知管理
            </el-menu-item>
            <el-menu-item index="/announcement">
                公告管理
            </el-menu-item>
            <el-menu-item index="/files">
                文件管理
            </el-menu-item>
            <el-menu-item index="/slideshow">
                轮播图管理
            </el-menu-item>
            <el-menu-item index="/words">
                敏感词管理
            </el-menu-item>
        </el-menu>
        <el-menu class="fill">
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue'
</script>
<style scoped lang="css">
.nav-box {
    width: 230px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .el-menu-vertical-demo:deep(.is-active) {
        background-color: #409EFF;
        color: #fff;
    }

    .fill {
        flex: 1;
        background-color: #545c64;
    }

    .logo {
        display: flex;
        align-items: center;
        height: 60px;
        font-size: 25px;
        color: #fff;
        margin-bottom: 15px;
        img {
            transform: scale(0.6);
        }
    }
}
</style>