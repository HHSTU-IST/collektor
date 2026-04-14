<script setup lang="ts">
import { onMounted } from 'vue'
import FileUploader from './components/FileUploader.vue'
import CollectionStatus from './components/CollectionStatus.vue'
import FileViewer from './components/FileViewer.vue'

onMounted(() => {
  // 初始化应用
})
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">Collektor</h1>
            <span class="ml-2 text-sm text-gray-500">文件收集器</span>
          </div>
          <div class="flex items-center space-x-4">
            <button
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              首页
            </button>
            <button
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              关于
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">欢迎使用 Collektor</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            一个智能的文件收集器，支持任意格式的文本文件，自动化读取文件信息并检查提交状态
          </p>
        </div>

        <FileUploader />
        <CollectionStatus />
        <FileViewer />
      </div>
    </main>

    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-500 text-sm">
          <p>&copy; 2024 Collektor. 基于 Vue.js 3.5 + TypeScript 5.7 + Vite 构建</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
