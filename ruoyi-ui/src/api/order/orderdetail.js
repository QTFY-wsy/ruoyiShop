/**
 * Created by 魔金商城 on 2019/6/3.
 */
import request from '@/utils/request';

/**
 * 查询订单详情
 * @param id 订单id
 */
export function queryOrderById(id) {
  return request({
    url: '/order/OmsOrder/' + id,
    method: 'get',
  })
}
