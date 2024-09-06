<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>
                    欢迎光临
                </div>
                <div>
                    此站点是《vue3+vite实战山城后台开发》视频课程的演示地址，
                    <span>点击立即学习</span>
                </div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2 class="">
                欢迎回来
            </h2>
            <div>
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form ref="formRef" :rules="rules" :model="form" class="w-250px">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
            <el-button round color="#626aef" class="w-250px" type="primary" @click="onSubmit">登 录</el-button>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
// do not use same name with ref
const form = reactive({
    username: '',
    password: ''
})

const rules = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }
    ]
}

const formRef = ref(null)

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        console.log("验证通过");
    })
}
</script>

<style scoped>
.login-container {
    @apply min-h-screen bg-indigo-500;
}

.left,
.right,
.right>h2,
.right>div {
    @apply flex items-center justify-center;
}

.right {
    @apply flex-col bg-light-50;
}

.left>div>div:first-child {
    @apply my-4 text-4xl font-bold text-light-100;
}

.left>div>div:last-child {
    @apply text-gray-300;
}

.left>div>div:last-child>span {
    @apply font-bold text-light-100;
}

.right>h2 {
    @apply my-5 text-3xl font-bold text-gray-800;
}

.right>div {
    @apply my-5 text-gray-300 space-x-2;
}

.line {
    @apply w-16 h-1px bg-gray-300;
}
</style>