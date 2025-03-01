/**
 * 路由工具类
 * 封装常用的路由操作方法
 */

class RouterUtils {
    /**
     * 跳转到指定页面
     * @param {string} url - 页面路径（支持绝对路径和相对路径）
     * @param {Object} params - 页面参数
     * @param {string} type - 跳转类型（navigateTo|redirectTo|reLaunch|switchTab）
     */
    static goTo(url, params = {}, type = 'navigateTo') {
        // 处理参数
        const query = Object.keys(params)
            .map((key) => `${key}=${encodeURIComponent(params[key])}`)
            .join('&')
        const targetUrl = query ? `${url}?${query}` : url

        // 根据跳转类型执行跳转
        switch (type) {
            case 'navigateTo':
                uni.navigateTo({ url: targetUrl })
                break
            case 'redirectTo':
                uni.redirectTo({ url: targetUrl })
                break
            case 'reLaunch':
                uni.reLaunch({ url: targetUrl })
                break
            case 'switchTab':
                uni.switchTab({ url: targetUrl })
                break
            default:
                console.error('未知的跳转类型:', type)
        }
    }

    /**
     * 返回上一页
     * @param {number} delta - 返回的页面层数
     */
    static goBack(delta = 1) {
        uni.navigateBack({ delta })
    }

    /**
     * 获取当前页面路径
     * @returns {string} 当前页面路径
     */
    static getCurrentPagePath() {
        const pages = getCurrentPages()
        return pages[pages.length - 1].route
    }

    /**
     * 获取当前页面参数
     * @returns {Object} 当前页面参数
     */
    static getCurrentPageParams() {
        const pages = getCurrentPages()
        const currentPage = pages[pages.length - 1]
        return currentPage.options || {}
    }

    /**
     * 路由拦截器
     * @param {Function} handler - 拦截处理函数
     */
    static intercept(handler) {
        const originalNavigateTo = uni.navigateTo
        uni.navigateTo = (options) => {
            if (handler(options)) {
                originalNavigateTo(options)
            }
        }
    }
}

export default RouterUtils
