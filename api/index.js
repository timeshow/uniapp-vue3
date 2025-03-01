// src/api/index.js
const modules = import.meta.glob('./modules/**/*.js', { eager: true })

const api = {}

// 自动加载所有模块
for (const path in modules) {
    // 提取模块名和文件名
    const match = path.match(/^\.\/modules\/(.*)\/(.*)\.\w+$/)
    if (match) {
        const [, moduleName, fileName] = match

        // 初始化模块对象
        if (!api[moduleName]) {
            api[moduleName] = {}
        }

        // 将文件中的方法挂载到模块对象上
        api[moduleName][fileName] = modules[path]
    }
}

// 按需加载方法
export const useApi = (moduleName) => {
    if (api[moduleName]) {
        return api[moduleName]
    }
    throw new Error(`API module "${moduleName}" not found.`)
}

// 默认导出所有 API
export default api
