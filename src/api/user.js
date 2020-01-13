import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue/login/mylogin',
    method: 'post',
    params: {
      username: data.username,
      password: data.password
    },
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue/login/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue/login/logout',
    method: 'post'
  })
}
