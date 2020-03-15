/* eslint-disable camelcase */
import { get, post } from '../requset/http'

/**
 * 登陆
 */

export const login = data => post('/admin/login', data)

/**
 * 退出
 */

export const signout = () => get('/admin/signout')

/**
 * 获取用户信息
 */

export const getAdminInfo = () => get('/admin/info')

/**
 * api请求量
 */

export const apiCount = date => get('/statis/api/' + date + '/count')

/**
 * 所有api请求量
 */

export const apiAllCount = () => get('/statis/api/count')

/**
 * 所有api请求信息
 */

export const apiAllRecord = () => get('/statis/api/all')

/**
 * 用户注册量
 */

export const userCount = date => get('/statis/user/' + date + '/count')

/**
 * 某一天订单数量
 */

export const orderCount = date => get('/statis/order/' + date + '/count')

/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => get('/statis/admin/' + date + '/count')

/**
 * 管理员列表
 */

export const adminList = data => get('/admin/all', data)

/**
 * 管理员数量
 */

export const adminCount = () => get('/admin/count')

/**
 * 获取定位城市
 */

export const cityGuess = () => get('/v1/cities', {
  type: 'guess'
})

/**
 * 添加商铺
 */

export const addShop = data => post('/shopping/addShop', data, 'POST')

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => get('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value
})

/**
 * 获取当前店铺食品种类
 */

export const getCategory = restaurant_id => get('/shopping/getcategory/' + restaurant_id)

/**
 * 添加食品种类
 */

export const addCategory = data => post('/shopping/addcategory', data, 'POST')

/**
 * 添加食品
 */

export const addFood = data => post('/shopping/addfood', data, 'POST')

/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => get('/shopping/v2/restaurant/category')

/**
 * 获取餐馆列表
 */

export const getResturants = data => get('/shopping/restaurants', data)

/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => get('/shopping/restaurant/' + restaurant_id)

/**
 * 获取餐馆数量
 */

export const getResturantsCount = () => get('/shopping/restaurants/count')

/**
 * 更新餐馆信息
 */

export const updateResturant = data => post('/shopping/updateshop', data, 'POST')

/**
 * 删除餐馆
 */

export const deleteResturant = restaurant_id => get('/shopping/restaurant/' + restaurant_id, {}, 'DELETE')

/**
 * 获取食品列表
 */

export const getFoods = data => get('/shopping/v2/foods', data)

/**
 * 获取食品数量
 */

export const getFoodsCount = data => get('/shopping/v2/foods/count', data)

/**
 * 获取menu列表
 */

export const getMenu = data => get('/shopping/v2/menu', data)

/**
 * 获取menu详情
 */

export const getMenuById = category_id => get('/shopping/v2/menu/' + category_id)

/**
 * 更新食品信息
 */

export const updateFood = data => post('/shopping/v2/updatefood', data, 'POST')

/**
 * 删除食品
 */

export const deleteFood = food_id => get('/shopping/v2/food/' + food_id, {}, 'DELETE')

/**
 * 获取用户列表
 */

export const getUserList = data => get('/v1/users/list', data)

/**
 * 获取用户数量
 */

export const getUserCount = data => get('/v1/users/count', data)

/**
 * 获取订单列表
 */

export const getOrderList = data => get('/bos/orders', data)

/**
 * 获取订单数量
 */

export const getOrderCount = data => get('/bos/orders/count', data)

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => get('/v1/user/' + user_id)

/**
 * 获取地址信息
 */

export const getAddressById = address_id => get('/v1/addresse/' + address_id)

/**
 * 获取用户分布信息
 */

export const getUserCity = () => get('/v1/user/city/count')
