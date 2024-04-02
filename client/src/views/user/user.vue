<template>
    <div class="user-box">
        <Nav navActive="/user"></Nav>
        <div class="user-contents-box">
            <CHeader></CHeader>
            <section class="section">
                <div class="head">
                    <span>用户信息</span>
                    <el-input
                        v-model="searchContents"
                        style="width: 220px"
                        size="small"
                        placeholder="Please Input"
                        :prefix-icon="Search"
                        />
                </div>
                <div class="show">
                    <span class="avatar">头像</span>
                    <span class="name">昵称</span>
                    <span class="operate">操作</span>
                </div> 
                <div class="user-list">
                    <div class="user">
                        <div class="avatar">
                            <el-avatar 
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            />
                        </div>
                        <div class="name">admin</div>
                        <div class="operates">
                            <button class="detail">详情</button>
                            <button class="banned">封禁</button>
                            <button class="reset">重置密码</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
import Nav from '@/components/nav.vue'
import CHeader from '@/components/cheader.vue'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const searchContents = ref('')
</script>
<style scoped lang="css">
.user-box {
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    display: flex;

    .user-contents-box {
        flex: 1;
        display: flex;
        flex-direction: column;

        .section {
            flex: 1;
            padding: 0 10px;
            margin-top: 10px;

            .head {
                width: 100%;
                padding: 15px;
                background-color: #fff;
                border-bottom: 1px solid #eeeeee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .show {
                width: 100%;
                background-color: #ffffffb2;
                padding: 15px;
                border-bottom: 1px solid #eeeeee;
                display: flex;

                .avatar,
                .name {
                    display: block;
                    width: 100px;
                }
            }

            .user-list {
                width: 100%;
                padding: 10px 15px;
                background-color: #fff;
                border-bottom: 1px solid #eeeeee;

                .user {
                    width: 100%;
                    display: flex;
                    align-items: center;

                    .avatar {
                        width: 100px;
                    }
                    .name {
                        width: 95px;
                    }

                    .operates {
                        .detail,
                        .banned,
                        .reset {
                            margin-right: 10px;
                            background-color: #fff;
                            outline: none;
                            border: none;
                        }

                        .detail {
                            color: #525252;
                        }

                        .banned {
                            color: red;
                        }
                        .reset {
                            color: rgb(0, 145, 255);
                        }
                    }
                }
            }
        }
    }
}
</style>