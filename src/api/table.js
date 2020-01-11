import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/vuelogin/list',
    method: 'post',
    params: data,
    data
  })
}
