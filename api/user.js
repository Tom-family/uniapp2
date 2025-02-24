import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/users/login',
    method: 'post',
    data
  })
}

// export function login(query) {
//   return request({
//     url: '/users/login',
//     method: 'get',
//     params: query
//   })
// }