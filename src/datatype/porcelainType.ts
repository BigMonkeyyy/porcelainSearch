import { getAllPorcelains, getAllNotes } from '../request/api'
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

/**
 * 获取瓷器列表
 */
const getPorcelainList = (): any => {
  return getAllPorcelains()
}

/**
 * 获取缓存键值
 * @param {string} index
 */
const _getKey = (index: string) => {
  return 'procelain' + index
}

export {
  Porcelain,
  getPorcelainList,
  getAllNotes
}
