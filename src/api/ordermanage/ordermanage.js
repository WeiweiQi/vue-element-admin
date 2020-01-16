import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/vue/ordermanage/list',
    method: 'post',
    data
  })
}

export function getOrderMailNo(data) {
  return request({
    url: '/vue/ordermanage/getOrderMailNo',
    method: 'post',
    data
  })
}
