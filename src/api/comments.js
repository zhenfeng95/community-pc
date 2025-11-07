import axios from '@/utils/request'
import qs from 'qs'
import store from '@/store'

// 获取文章中的评论列表
const getComents = (params) => {
  const token = store.state.token
  let headers = {}
  if (token !== '') {
    headers = {
      headers: {
        Authorization: 'Bearer ' + store.state.token,
      },
    }
  }
  return axios.get('/v1/public/comments?' + qs.stringify(params), headers)
}

// 添加评论
const addComment = (data) => axios.post('/v1/comments/reply', { ...data })

// 更新评论
const updateComment = (data) => axios.post('/v1/comments/update', { ...data })

// 采纳最佳评论
const setCommentBest = (params) =>
  axios.get('/v1/comments/accept?' + qs.stringify(params))

// 设置点赞
const setHands = (params) =>
  axios.get('/v1/comments/hands?' + qs.stringify(params))

export { getComents, addComment, updateComment, setCommentBest, setHands }
