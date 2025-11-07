import axios from '@/utils/request'
import qs from 'qs'

// 用户签到
const userSign = () => axios.get('/v1/user/fav')

// 更新用户基本资料
const updateUserInfo = (data) => axios.post('/v1/user/basic', data)

// 确认修改用户名
const updateUsername = (data) =>
  axios.get('/v1/public/resetEmail?' + qs.stringify(data))

// 修改用户密码
const changePasswd = (data) =>
  axios.post('/v1/user/changePassword', {
    ...data,
  })

// 设置收藏 & 取消收藏
const addCollect = (data) =>
  axios.get('/v1/user/setCollect?' + qs.stringify(data))

// 获取收藏列表
const getCollect = (data) => axios.get('/v1/user/collect?' + qs.stringify(data))

// 获取发表的文章列表
const getPostListByUid = (data) =>
  axios.get('/v1/user/post?' + qs.stringify(data))

// 获取用户最近的发表文章列表
const getPostPublic = (data) =>
  axios.get('/v1/public/latestPost?' + qs.stringify(data))

// 删除指定文章列表
const deletePostByUid = (data) =>
  axios.get('/v1/user/deletePost?' + qs.stringify(data))

// 获取用户的基本信息
const getInfo = (data) => axios.get('/v1/public/info?' + qs.stringify(data))

// 获取用户最近评论列表
const getCommentList = (data) =>
  axios.get('/v1/public/latestComment?' + qs.stringify(data))

// 获取用户未读消息
const getMsg = (data) => axios.get('/v1/user/getmsg?' + qs.stringify(data))

// 设置用户未读消息
const setMsg = (data) => axios.get('/v1/user/setmsg?' + qs.stringify(data))

export {
  userSign,
  updateUserInfo,
  updateUsername,
  changePasswd,
  addCollect,
  getCollect,
  getPostListByUid,
  deletePostByUid,
  getInfo,
  getCommentList,
  getPostPublic,
  getMsg,
  setMsg,
}
