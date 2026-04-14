# Collektor

![typescript](https://img.shields.io/badge/typescript-5.7+-blue.svg)
![vue](https://img.shields.io/badge/vue-3.5+-brightgreen.svg)
![pinia](https://img.shields.io/badge/pinia-3.0+-ff6b6b.svg)
![vite](https://img.shields.io/badge/vite-8.0+-yellow.svg)
![tailwind](https://img.shields.io/badge/tailwind-4.0+-38bdf8.svg)
![code size](https://img.shields.io/github/languages/code-size/ivaquero/collektor.svg)
![repo size](https://img.shields.io/github/repo-size/ivaquero/collektor.svg)

Collektor 是一个现代化的文件收集器，基于 Vue3 + TypeScript + Vite 构建。

## 主要功能

- ✅ 支持任意格式的文本文件上传
- ✅ 拖拽上传和点击上传
- ✅ 读取收集名单并检查提交状态
- ✅ 自动化文件信息读取
- ✅ 实时收集进度跟踪
- ✅ 文件内容预览和复制
- ✅ 响应式设计，支持移动端

## 技术栈

- **前端框架**: Vue.js 3.5 (Composition API)
- **编程语言**: TypeScript 5.7
- **状态管理**: Pinia 3.0
- **构建工具**: Vite 8.0
- **样式框架**: Tailwind CSS 4.0
- **UI 组件**: 自定义组件 + Tailwind 工具类

## 开发指南

### 环境要求

- Node.js 22.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

应用将在 <http://localhost:5174> 启动

### 构建项目

```bash
npm run build
```

构建产物将输出到 `dist/` 目录

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```text
src/
├── components/          # Vue 组件
│   ├── FileUploader.vue    # 文件上传组件
│   ├── CollectionStatus.vue # 收集状态组件
│   └── FileViewer.vue      # 文件预览组件
├── stores/             # Pinia 状态管理
│   ├── index.ts        # 状态管理入口
│   ├── file.ts         # 文件相关状态
│   └── collection.ts   # 收集列表状态
├── App.vue            # 根组件
├── main.ts            # 应用入口
└── style.css          # 全局样式
```

## 核心功能

### 文件上传

- 支持拖拽上传和点击上传
- 支持多文件同时上传
- 自动读取文本文件内容
- 显示文件大小、类型等信息

### 收集名单管理

- 上传包含文件名的列表文件
- 实时跟踪收集进度
- 状态标记：待收集、已收集、错误
- 可视化进度条显示

### 文件预览

- 查看上传文件的内容
- 支持复制文件内容到剪贴板
- 标记文件为已收集状态
- 显示文件详细信息

## 使用说明

1. **上传文件**: 点击或拖拽文件到上传区域
2. **上传收集名单**: 上传包含目标文件名的文本文件
3. **查看收集状态**: 实时查看收集进度和状态
4. **预览文件**: 点击文件查看详细内容
5. **标记完成**: 在文件预览中标记为已收集

## 开发特性

- 🎯 完整的 TypeScript 类型支持
- 🎨 现代化的响应式设计
- ⚡ 快速的开发体验（Vite HMR）
- 📱 移动端友好的界面
- 🔧 模块化的组件架构
- 📊 实时的状态管理

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 许可证

MIT License
