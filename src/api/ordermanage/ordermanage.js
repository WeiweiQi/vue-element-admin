import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/vue/ordermanage/list',
    method: 'post',
    data
  })
}
