import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface FileInfo {
    name: string
    content: string
    size: number
    type: string
    lastModified: Date
}

export const useFileStore = defineStore('file', () => {
    const files = ref<FileInfo[]>([])
    const selectedFile = ref<FileInfo | null>(null)

    const addFile = (file: File) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            const fileInfo: FileInfo = {
                name: file.name,
                content: e.target?.result as string,
                size: file.size,
                type: file.type,
                lastModified: new Date(file.lastModified)
            }
            files.value.push(fileInfo)
        }
        reader.readAsText(file)
    }

    const removeFile = (index: number) => {
        files.value.splice(index, 1)
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
        removeFile,
        selectFile,
        clearFiles
    }
})
