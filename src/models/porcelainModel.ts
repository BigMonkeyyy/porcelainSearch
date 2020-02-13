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
   * 获取瓷器列表
   */
  public getPorcelainList = (): any => {
    return this.getAllPorcelains()
  }

  /**
   * 获取缓存键值
   * @param {string} index
   */
  private _getKey = (index: string) => {
    return 'procelain' + index
  }
}

export {
  Porcelain,
  PorcelainModel
}
