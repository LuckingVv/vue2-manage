<template>
  <div>
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row type="flex" :gutter="20" style="margin-bottom: 10px;" justify="center">
        <el-col :span="4">
          <div class="data_list today_head">
            <span class="data_num head">当日数据：</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{userCount}}</span> 新增用户
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{orderCount}}</span> 新增订单
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{adminCount}}</span> 新增管理员
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="4">
          <div class="data_list all_head">
            <span class="data_num head">总数据：</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{allUserCount}}</span> 注册用户
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{allOrderCount}}</span> 订单
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{allAdminCount}}</span> 管理员
          </div>
        </el-col>
      </el-row>
    </section>
    <tendency :sevenDate="sevenDate" :sevenDay="sevenDay"></tendency>
  </div>
</template>

<script>
import tendency from '../components/tendency'
export default {
  data() {
    return {
      userCount: 6,
      orderCount: 7,
      adminCount: 25,
      allUserCount: 45013,
      allOrderCount: 15499,
      allAdminCount: 66032,
      sevenDay: [
        '2020-02-29',
        '2020-03-01',
        '2020-03-02',
        '2020-03-03',
        '2020-03-04',
        '2020-03-05',
        '2020-03-06'
      ],
      sevenDate: [
        [58, 25, 43, 66, 10, 2, 98],
        [42, 5, 33, 8, 18, 19, 7],
        [66, 57, 77, 92, 122, 89, 25]
      ]
    }
  },
  components: {
    tendency
  }
}
</script>

<style lang='less' scoped>
@import '../style/mixin';
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
.wan {
  .sc(16px, #333);
}
</style>
