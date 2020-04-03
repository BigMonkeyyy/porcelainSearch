import { Porcelain } from '@/models/porcelainModel'

/**
 * 将数据分为5+2+2+...的形式
 * 拆分首次的5个数据
 * @param data 被分页的数据
 * @param start 开始拆分的位置
 */
const firstPaging: Array<Porcelain> = (data: Array<Porcelain>): Array<Porcelain> => {
  const pagedData: Array<Porcelain> = data.slice(0, 5)
  return pagedData
}

/**
 * 将数据分为10+2+2+...的形式
 * 拆分往后的2个数据
 * @param data 被分页的数据
 * @param start 开始拆分的位置
 */
const paging: Array<Porcelain> = (data: Array<Porcelain> | [], start: number): Array<Porcelain> => {
  const pagedData: Array<Porcelain> = data.slice(start, start + 2)
  return pagedData
}

export { firstPaging, paging }
