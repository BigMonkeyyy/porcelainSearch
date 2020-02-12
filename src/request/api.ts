import { get, post } from './http'

/**
 * 设置获取token函数的参数形式
 */
interface loginVM {
  password: string;
  rememberMe: boolean;
  username: string;
}

/**
 * 获取token
 * @param {string} params
 */
const getToken = (params: object) => {
  return post('api/authenticate', params)
}

/**
 * 获取所有瓷器信息
 */
const getAllPorcelains = () => {
  return get('api/porcelains')
}

/**
 * 获取所有瓷器备注note
 */
const getAllNotes = () => {
  return get('api/notes')
}

export {
  loginVM,
  getToken,
  getAllPorcelains,
  getAllNotes
}
