import { HTTP } from './http'
/**
 * 设置获取token函数的参数形式
 */
interface loginVM {
  password: string;
  rememberMe: boolean;
  username: string;
}

class API extends HTTP {
  /**
   * 获取token
   * @param {string} params
   */
  public getToken (params: object) {
    return this.post('api/authenticate', params)
  }

  /**
   * 获取所有瓷器信息
   */
  public getAllPorcelains = () => {
    return this.get('api/porcelains')
  }

  /**
   * 获取所有瓷器备注note
   */
  public getAllNotes = () => {
    return this.get('api/notes')
  }
}

export {
  loginVM,
  API
}
