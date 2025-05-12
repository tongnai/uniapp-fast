import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
// 创建 pinia 实例
const pinia = createPinia()
pinia.use(persist)
// 默认导出，给 main.ts 使用
export default pinia
