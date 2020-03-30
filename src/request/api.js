import { HTTP } from './http';
class API extends HTTP {
    /**
     *获取token
     *
     * @param {object} params
     * @returns
     * @memberof API
     */
    getToken(params) {
        return this.post('api/authenticate', params);
    }
    /**
    *获取所有瓷器信息
    *
    * @returns
    * @memberof API
    */
    getAllPorcelains() {
        return this.get('api/porcelains');
    }
    /**
    *获取某个瓷器信息
    *
    * @param {number} id
    * @returns
    * @memberof API
    */
    getPorcelain(id) {
        return this.get(`api/porcelains/${id}`);
    }
}
export { API };
//# sourceMappingURL=api.js.map