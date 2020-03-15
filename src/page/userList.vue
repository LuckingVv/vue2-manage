<template>
  <div>
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%" align="center">
        <el-table-column type="index" label="#" width="40"></el-table-column>
        <el-table-column prop="registe_time" label="日期" align="center"></el-table-column>
        <el-table-column prop="username" label="姓名" align="center"></el-table-column>
        <el-table-column prop="city" label="地址" align="center"></el-table-column>
      </el-table>
    </div>
    <div class="Pagination" style="text-align: left;margin-top: 10px;">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getUserList, getUserCount } from '../api/getData'
export default {
  data() {
    return {
      tableData: [
        {
          registe_time: '2016-05-02',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1518 弄'
        },
        {
          registe_time: '2016-05-04',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1517 弄'
        },
        {
          registe_time: '2016-05-01',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1519 弄'
        },
        {
          registe_time: '2016-05-03',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      currentRow: null,
      offset: 0,
      limit: 20,
      count: 0,
      currentPage: 1
    }
  },
  created() {
    this.initData()
  },
  mounted() {
    // window.onscroll = this.justifyPos
  },
  methods: {
    indexMethod(index) {
      return index + 1
    },
    async initData() {
      try {
        const countData = await getUserCount()
        if (countData.status == 1) {
          this.count = countData.count
        } else {
          throw new Error('获取数据失败')
        }
        this.getUsers()
      } catch (err) {
        console.log('获取数据失败', err)
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getUsers()
    },
    async getUsers() {
      const Users = await getUserList({
        offset: this.offset,
        limit: this.limit
      })
      this.tableData = []
      Users.forEach(item => {
        const tableData = {}
        tableData.username = item.username
        tableData.registe_time = item.registe_time
        tableData.city = item.city
        this.tableData.push(tableData)
      })
    // },
    // justifyPos() {
    //   if (this.timerId) clearTimeout(this.timerId)
    //   this.timerId = setTimeout(() => {
    //     // 获取页面滚动距离之后设置给当前路由的 元信息
    //     this.$route.meta.y = window.pageYOffset
    //   }, 300)
    }
  }
}
</script>

<style lang='less' scoped>
@import '../style/mixin';

.table_container {
  padding: 20px;
}
</style>
