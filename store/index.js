import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

// 自动加载所有 store 模块
const modules = import.meta.glob('./modules/*.js', { eager: true })

// 创建 Pinia 实例
const pinia = createPinia()

// 使用 pinia-plugin-unistorage 插件
pinia.use(createUnistorage())

// 自动注册所有模块
for (const path in modules) {
    const module = modules[path]
    const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
    const store = module.default // 获取模块的默认导出
    if (store) {
        pinia.use(({ store: mainStore }) => {
            mainStore[moduleName] = store()
        })
    }
}

export default pinia

// 导出所有模块
export const useStore = () => {
    const stores = {}
    Object.keys(modules).forEach((key) => {
        stores[key] = modules[key]()
    })
    return stores
}
