import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('@/page/login')
const home = () => import('@/page/home')
const manage = () => import('@/page/manage')
const userList = () => import('@/page/userList')
// const shopList = () => import('@/page/shopList')
// const foodList = () => import('@/page/foodList')
// const orderList = () => import('@/page/orderList')
// const adminList = () => import('@/page/adminList')
// const addShop = () => import('@/page/addShop')
// const addGoods = () => import('@/page/addGoods')
// const visitor = () => import('@/page/visitor')
// const newMember = () => import('@/page/newMember')
// const uploadImg = () => import('@/page/uploadImg')
// const vueEdit = () => import('@/page/vueEdit')
// const adminSet = () => import('@/page/adminSet')
// const sendMessage = () => import('@/page/sendMessage')
// const explain = () => import('@/page/explain')
const NotFound = () => import('@/page/404')
const routes = [{
  path: '/',
  component: login
}, {
  path: '/home',
  name: 'home',
  component: home,
  children: [{
    path: '',
    name: 'manage',
    component: manage
  },
  {
    path: '/userList',
    name: 'userList',
    component: userList,
    meta: {'navInfo': ['数据管理', '用户列表']}
    // }, {
    //   path: '/shopList',
    //   component: shopList,
    //   meta: ['数据管理', '商家列表']
    // }, {
    //   path: '/foodList',
    //   component: foodList,
    //   meta: ['数据管理', '食品列表']
    // }, {
    //   path: '/orderList',
    //   component: orderList,
    //   meta: ['数据管理', '订单列表']
    // }, {
    //   path: '/adminList',
    //   component: adminList,
    //   meta: ['数据管理', '管理员列表']
    // }, {
    //   path: '/addShop',
    //   component: addShop,
    //   meta: ['添加数据', '添加商铺']
    // }, {
    //   path: '/addGoods',
    //   component: addGoods,
    //   meta: ['添加数据', '添加商品']
    // }, {
    //   path: '/visitor',
    //   component: visitor,
    //   meta: ['图表', '用户分布']
    // }, {
    //   path: '/newMember',
    //   component: newMember,
    //   meta: ['图表', '用户数据']
    // }, {
    //   path: '/uploadImg',
    //   component: uploadImg,
    //   meta: ['文本编辑', 'MarkDown']
    // }, {
    //   path: '/vueEdit',
    //   component: vueEdit,
    //   meta: ['编辑', '文本编辑']
    // }, {
    //   path: '/adminSet',
    //   component: adminSet,
    //   meta: ['设置', '管理员设置']
    // }, {
    //   path: '/sendMessage',
    //   component: sendMessage,
    //   meta: ['设置', '发送通知']
    // }, {
    //   path: '/explain',
    //   component: explain,
    //   meta: ['说明', '说明']
  }, {
    path: '*',
    component: NotFound
  }
  ]
}
]
// const scrollBehavior = function (to, from, savedPosition) {
//   if (savedPosition) {
//     return savedPosition
//   } else {
//     // 如果不是通过上述行为切换组件，就会让页面回到顶部
//     return to.meta
//   }
// }
export default new Router({
  mode: 'history',
  // scrollBehavior,
  routes
})
