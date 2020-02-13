import { HTTP } from './http'
/**
 * 设置获取token函数的参数形式
 */
interface loginVM {
  password: string;
  rememberMe?: boolean;
  username: string;
}

class API extends HTTP {
  /**
   *获取token
   *
   * @param {object} params
   * @returns
   * @memberof API
   */
  public getToken (params: object) {
    return this.post('api/authenticate', params)
  }

  /**
  *获取所有瓷器信息
  *
  * @returns
  * @memberof API
  */
  public getAllPorcelains () {
    return this.get('api/porcelains')
  }

  /**
  *获取某个瓷器信息
  *
  * @param {number} id
  * @returns
  * @memberof API
  */
  public getPorcelain (id: number) {
    return this.get(`api/porcelains/${id}`)
  }
}

export {
  loginVM,
  API
}
