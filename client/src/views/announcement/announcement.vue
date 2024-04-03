<template>
    <div class="announcement-box">
        <Nav navActive="/announcement"></Nav>
        <div class="announcement-contents-box">
            <CHeader></CHeader>
            <section class="section">
                <div class="head">
                    <span>公告管理</span>
                    <div class="head-right">
                        <el-input
                            v-model="searchContents"
                            style="width: 220px"
                            size="small"
                            placeholder="Please Input"
                            :prefix-icon="Search"
                        />
                        <button class="create">+ 新建</button>
                    </div>
                </div>
                <div class="show">
                    <span class="title">标题</span>
                    <span class="time">发布时间</span>
                    <span class="operate">操作</span>
                </div>
                <div class="announcement-list">
                    <div class="announcement">
                        <span class="title">公告标题</span>
                        <span class="time">2021-09-01 12:00:00</span>
                        <div class="operates">
                            <button class="detail">详情</button>
                            <button class="edit">编辑</button>
                            <button class="delete">删除</button>
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
.announcement-box {
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    display: flex;

    .announcement-contents-box {
        flex: 1;

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

                .head-right {
                    display: flex;
                    align-items: center;

                    .create {
                        width: 70px;
                        padding: 3px 10px;
                        margin-left: 10px;
                        color: #fff;
                        background-color: #545c6487;
                        border: none;
                        outline: none;
                    }
                    .create:hover {
                        background-color: #545c64;
                    }
                    .create:active {
                        background-color: #707780;
                    }
                }
            }
            
            .show {
                width: 100%;
                background-color: #ffffffb2;
                padding: 15px;
                border-bottom: 1px solid #eeeeee;
                display: flex;

                .title {
                    width: 150px;
                    margin-right: 10px;
                }
                .time {
                    width: 220px;
                    margin-right: 10px;
                }
            }

            .announcement-list {
                width: 100%;
                padding: 10px 15px;
                background-color: #fff;

                .announcement {
                    width: 100%;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #eeeeee;
                    display: flex;
                    align-items: center;
                    
                    .title {
                        width: 150px;
                        margin-right: 10px;
                    }
                    .time {
                        width: 220px;
                        margin-right: 5px;
                    }
                    .operates {
                        .detail,
                        .edit,
                        .delete {
                            margin-right: 20px;
                            background-color: #fff;
                            outline: none;
                            border: none;
                        }

                        .detail {
                            color: #409EFF;
                        }
                        .edit {
                            color: #67C23A;
                        }
                        .delete {
                            color: #F56C6C;
                        }
                    }
                }
            }
        }
    }

}
</style>