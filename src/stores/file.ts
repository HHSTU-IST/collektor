import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface FileInfo {
    id: string
    name: string
    content: string
    size: number
    type: string
    lastModified: Date
    source: 'local' | 'relay'
    relayRoomId?: string
    relayUploadId?: string
    downloadUrl?: string
    receivedAt?: Date
}

export const useFileStore = defineStore('file', () => {
    const files = ref<FileInfo[]>([])
    const selectedFile = ref<FileInfo | null>(null)

    const createFileId = () => {
        return globalThis.crypto?.randomUUID?.() ?? `file-${Date.now()}-${Math.random().toString(36).slice(2)}`
    }

    const addFile = (file: File) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            const fileInfo: FileInfo = {
                id: createFileId(),
                name: file.name,
                content: e.target?.result as string,
                size: file.size,
                type: file.type,
                lastModified: new Date(file.lastModified),
                source: 'local'
            }
            files.value.push(fileInfo)
        }
        reader.readAsText(file)
    }

    const upsertRelayFile = (file: {
        name: string
        content: string
        size: number
        type: string
        lastModified: string | Date
        roomId: string
        uploadId: string
        downloadUrl?: string
    }) => {
        const existing = files.value.find(item => item.relayUploadId === file.uploadId)
        const normalizedLastModified = file.lastModified instanceof Date ? file.lastModified : new Date(file.lastModified)

        if (existing) {
            existing.name = file.name
            existing.content = file.content
            existing.size = file.size
            existing.type = file.type
            existing.lastModified = normalizedLastModified
            existing.source = 'relay'
            existing.relayRoomId = file.roomId
            existing.relayUploadId = file.uploadId
            existing.downloadUrl = file.downloadUrl
            existing.receivedAt = new Date()
            return existing
        }

        const fileInfo: FileInfo = {
            id: createFileId(),
            name: file.name,
            content: file.content,
            size: file.size,
            type: file.type,
            lastModified: normalizedLastModified,
            source: 'relay',
            relayRoomId: file.roomId,
            relayUploadId: file.uploadId,
            downloadUrl: file.downloadUrl,
            receivedAt: new Date()
        }

        files.value.unshift(fileInfo)
        return fileInfo
    }

    const removeFile = (index: number) => {
        const removed = files.value[index]
        files.value.splice(index, 1)
        if (removed && selectedFile.value?.id === removed.id) {
            selectedFile.value = null
        }
    }

    const selectFile = (file: FileInfo) => {
        selectedFile.value = file
    }

    const clearFiles = () => {
        files.value = []
        selectedFile.value = null
    }

    return {
        files,
        selectedFile,
        addFile,
        upsertRelayFile,
        removeFile,
        selectFile,
        clearFiles
    }
})
