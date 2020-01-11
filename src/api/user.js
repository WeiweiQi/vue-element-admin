import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vuelogin/mylogin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vuelogin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vuelogin/logout',
    method: 'post'
  })
}
