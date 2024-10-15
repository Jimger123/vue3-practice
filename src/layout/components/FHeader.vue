<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-1">
                <ElemeFilled />
            </el-icon>
            帝莎编程
        </span>
        <el-icon class="ml-8 icon-btn">
            <Fold />
        </el-icon>
        <el-icon class="icon-btn">
            <Refresh />
        </el-icon>
        <div class="ml-auto flex items-center">
            <el-icon class="icon-btn">
                <FullScreen />
            </el-icon>
            <el-dropdown class="dropdown">
                <span class="flex items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="store.state.user.avatar" />
                    {{ store.state.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script setup>
import store from '@/store';
import { ArrowDown } from '@element-plus/icons-vue'

</script>
<style scoped>
.f-header {
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0 h-64px
};

.logo {
    @apply flex justify-center items-center text-xl font-thin w-250px
}

.icon-btn {
    @apply w-42px h-64px cursor-pointer
}

.icon-btn:hover {
    @apply bg-indigo-600
}

.f-header .dropdown {
    @apply h-64px cursor-pointer flex justify-center items-center mx-5
}
</style>