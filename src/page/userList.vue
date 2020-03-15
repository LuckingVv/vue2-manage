<template>
  <div>
    <el-table :data="tableData" style="width: 100%" align='center'>
      <el-table-column type="index" :index="indexMethod" label="#" width="40"></el-table-column>
      <el-table-column prop="registe_time" label="日期" align='center'></el-table-column>
      <el-table-column prop="username" label="姓名" align='center'></el-table-column>
      <el-table-column prop="city" label="地址" align='center'></el-table-column>
    </el-table>
  </div>
</template>

<script>
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
      ]
    }
  },
  methods: {
    indexMethod (index) {
      return index + 1
    }
  }
}
</script>

<style lang='less' scoped>
</style>
