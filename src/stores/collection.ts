import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface CollectionItem {
    id: string
    name: string
    description: string
    filePattern: string
    status: 'pending' | 'collected' | 'error'
    submittedAt?: Date
}

export const useCollectionStore = defineStore('collection', () => {
    const collectionList = ref<CollectionItem[]>([])
    const isLoading = ref(false)

    const loadCollectionList = async (file: File) => {
        isLoading.value = true
        try {
            const text = await file.text()
            const lines = text.split('\n').filter(line => line.trim())

            collectionList.value = lines.map((line, index) => ({
                id: `item-${index}`,
                name: line.trim(),
                description: `待收集的文件: ${line.trim()}`,
                filePattern: line.trim(),
                status: 'pending' as const
            }))
        } catch (error) {
            console.error('读取收集名单失败:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    const updateItemStatus = (id: string, status: CollectionItem['status']) => {
        const item = collectionList.value.find(item => item.id === id)
        if (item) {
            item.status = status
            if (status === 'collected') {
                item.submittedAt = new Date()
            }
        }
    }

    const checkFileStatus = (fileName: string): CollectionItem | null => {
        return collectionList.value.find(item =>
            fileName.includes(item.filePattern) ||
            item.filePattern.includes(fileName)
        ) || null
    }

    const clearCollection = () => {
        collectionList.value = []
    }

    const getProgress = () => {
        const total = collectionList.value.length
        if (total === 0) return { total: 0, collected: 0, pending: 0, error: 0, percentage: 0 }

        const collected = collectionList.value.filter(item => item.status === 'collected').length
        const pending = collectionList.value.filter(item => item.status === 'pending').length
        const error = collectionList.value.filter(item => item.status === 'error').length

        return {
            total,
            collected,
            pending,
            error,
            percentage: Math.round((collected / total) * 100)
        }
    }

    return {
        collectionList,
        isLoading,
        loadCollectionList,
        updateItemStatus,
        checkFileStatus,
        clearCollection,
        getProgress
    }
})
