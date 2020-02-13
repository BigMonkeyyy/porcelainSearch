import { API } from '../request/api'
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
  /**
   * 获取所有瓷器列表
   */
  public getPorcelainList = (sCallback: any): void => {
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
        })
    } else {
      // 直接从缓存中获取
      const porcelainStrArrs = strList.split('@%')
      let porcelainList: Array<Porcelain> = []
      porcelainStrArrs.forEach((item) => {
        porcelainList.push(JSON.parse(item))
      })
      console.log('缓存中读取porcelainList:::', porcelainList)
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
