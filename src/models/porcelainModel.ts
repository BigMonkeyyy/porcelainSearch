import { API } from '../request/api'
import { firstPaging, paging } from '../utils/pagination'
/**
 * notes数据类型
 */
interface Note {
  id: number,
  key: string,
  val: string
}

/**
 * porcelain数据类型
 */
interface Porcelain {
  id: number;
  imageUrl: string;
  type: string;
  historicalPeriod?: string;
  museum: string;
  ids?: Array<Note>;
  featureUrl: string;
}

class PorcelainModel extends API {
  loading: Boolean =false
  /**
   *获取首次五条数据
   *
   * @memberof PorcelainModel
   */
  public getFirstPorcelainList = (sCallback: any) => {
    this._getPorcelainList((res: any) => {
      const data = firstPaging(res)
      console.log('first5:::', data)
      this.loading = false // 请求成功，解除锁定
      sCallback(data)
    })
  }
  /**
   *每次获取两条数据
   *
   * @memberof PorcelainModel
   */
  public getOtherPorcelainList = (sCallback: any, start: Number) => {
    this._getPorcelainList((res: any) => {
      const data = paging(res, start)
      console.log('each2:::', data)
      this.loading = false // 请求成功，解除锁定
      // if (data.length > 0) {
      sCallback(data)
      // }
    })
  }

  /**
  *获取所有瓷器列表（使用缓存机制）
  *
  * @private
  * @memberof PorcelainModel
  */
  private _getPorcelainList = (sCallback: any): void => {
    if (this.loading) return // 上一次请求未处理完成，处于锁定状态
    this.loading = true // 本次请求正在执行
    const strList = sessionStorage.getItem('allPorcelain')
    if (!strList) {
      // 缓存中没有该瓷器信息，api获取并存入缓存
      this.getAllPorcelains()
        .then((res: Array<Porcelain>) => {
          console.log('porcelainRes:::', res)
          this._setAllStorage(res)
          sCallback(res)
        })
        .catch((err: any) => {
          console.error(err)
          this.loading = false // 请求失败，解除锁定
        })
    } else {
      // 直接从缓存中获取
      const porcelainStrArrs = strList.split('@%')
      let porcelainList: Array<Porcelain> = []
      porcelainStrArrs.forEach((item) => {
        porcelainList.push(JSON.parse(item))
      })
      // console.log('缓存中读取porcelainList:::', porcelainList)
      sCallback(porcelainList)
    }
  }

  /**
   *将所有信息存入缓存
   *
   * @private
   * @param {Array<Porcelain>} list
   * @memberof PorcelainModel
   */
  private _setAllStorage (list: Array<Porcelain>): void {
    // list.forEach((item) => {
    //   sessionStorage.setItem(this._getKey(item.id), JSON.stringify(item))
    // })
    const strList = list.map(item => {
      return JSON.stringify(item)
    })
    const listsValue = strList.join('@%')
    sessionStorage.setItem('allPorcelain', listsValue)
  }
}

export {
  Porcelain,
  PorcelainModel
}
