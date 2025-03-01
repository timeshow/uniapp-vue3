import { createPinia } from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

// 创建 Pinia 实例
const pinia = createPinia()

// 使用 pinia-plugin-unistorage 插件
pinia.use(createUnistorage())

export default pinia
