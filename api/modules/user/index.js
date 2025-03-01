import request from '@/utils/request'

export const login = (data) => {
    return request({
        url: '/api/login/index',
        method: 'POST',
        data
    })
}
