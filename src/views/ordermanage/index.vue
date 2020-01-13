<template>
  <div class="app-container">
    <sticky :z-index="10" class-name="sub-navbar">
      <el-select v-model="listQuery.querydate" placeholder="时间范围" clearable style="width: 110px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in querydates" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="listQuery.ordernum" placeholder="订单编号" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.receiver" placeholder="收货人" style="width: 75px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.username" placeholder="用户名" style="width: 75px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.tel" placeholder="电话" style="width: 125px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.islike" placeholder="查询方式" clearable style="width: 110px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in islikes" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="listQuery.state" placeholder="订单状态" clearable style="width: 110px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in orderstates" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="listQuery.dealtype" placeholder="支付方式" clearable style="width: 110px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in dealtypes" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="listQuery.isself" placeholder="发货方式" clearable style="width: 120px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in isselfs" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </sticky>
    <sticky :z-index="10" class-name="sub-navbar">
      <el-date-picker v-model="daterange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" @change="handleFilter" />
    </sticky>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      style="width: 100%;"
      highlight-current-row
    >
      <el-table-column type="selection" align="center" width="40" />
      <el-table-column align="center" label="序号" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="订单编号" width="140">
        <template slot-scope="scope">
          {{ scope.row.ordernumber }}
        </template>
      </el-table-column>
      <el-table-column label="收货人" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.receivername }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="订单状态" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state | statusFilter">
            <div v-if="scope.row.state == -1">已取消</div>
            <div v-else-if="scope.row.state == 0">待付款</div>
            <div v-else-if="scope.row.state == 1">待发货</div>
            <div v-else-if="scope.row.state == 2">待收货</div>
            <div v-else-if="scope.row.state == 3">已完成</div>
            <div v-else-if="scope.row.state == 5">已退款</div>
            <div v-else-if="scope.row.state == 7">已关闭</div>
            <div v-else-if="scope.row.state == -2">已删除</div>
            <div v-else>{{ scope.row.state }}</div></el-tag>
        </template>
      </el-table-column>
      <el-table-column label="拼团状态" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.groupbuystate == 1">正在拼团</div>
          <div v-else-if="scope.row.groupbuystate == 2">拼团成功</div>
          <div v-else-if="scope.row.groupbuystate == 3">拼团失败</div>
          <div v-else-if="scope.row.groupbuystate == 0 || scope.row.groupbuystate == null" />
        </template>
      </el-table-column>
      <el-table-column label="最新物流" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.logisticsname == '' || scope.row.logisticsname == null">暂无</div>
          <div v-else>{{ scope.row.logisticsname }}</div>
        </template>
      </el-table-column>
      <el-table-column label="物流运单号" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">添加单号</el-button>
        </template>
      </el-table-column>
      <el-table-column label="支付方式" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.dealtype == null" style="color:black">无</div>
          <div v-else-if="scope.row.dealtype == 1 " style="color:blue">支付宝</div>
          <div v-else-if="scope.row.dealtype == 0 " style="color:black">货到付款</div>
          <div v-else-if="scope.row.dealtype == 2 " style="color:green">微信</div>
          <div v-else-if="scope.row.dealtype == 4 " style="color:black">已确认收款</div>
          <div v-else-if="scope.row.dealtype == 5 " style="color:black">全额饭卡</div>
          <div v-else-if="scope.row.dealtype == 6 " style="color:black">福利</div>
          <div v-else-if="scope.row.dealtype == 3 " style="color:#9B30FF">银联支付</div>
          <!-- {{ scope.row.dealtype }} -->
        </template>
      </el-table-column>
      <el-table-column label="下单时间" align="center">
        <template slot-scope="scope">
          {{ scope.row.createtime }}
        </template>
      </el-table-column>
      <el-table-column label="实付款" align="center">
        <template slot-scope="scope">
          {{ scope.row.real_price }}
        </template>
      </el-table-column>
      <el-table-column label="用户名" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="标签" align="center">
        <template slot-scope="scope">
          {{ scope.row.tagname }}
        </template>
      </el-table-column>
      <el-table-column label="部门名" align="center">
        <template slot-scope="scope">
          {{ scope.row.deptname }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.numPerPage" @pagination="fetchData" />

  </div>
</template>

<script>
import { getList } from '@/api/table'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Sticky from '@/components/Sticky'

export default {
  name: 'Ordermanage',
  components: { Pagination, Sticky },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'primary',
        2: 'warning',
        3: 'success',
        5: 'warning',
        7: 'success',
        '-1': 'primary',
        '-2': 'primary'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      daterange: ['', ''],
      islikes: [
        {
          value: 0,
          label: '精确查询'
        },
        {
          value: 1,
          label: '模糊查询'
        }
      ],
      // 发货方式
      isselfs: [
        {
          value: 0,
          label: '配送：全部'
        },
        {
          value: 1,
          label: '只是西区发货'
        }
      ],
      // 查询日期范围
      querydates: [
        {
          value: 0,
          label: '自定义'
        },
        {
          value: 1,
          label: '今天'
        },
        {
          value: 2,
          label: '昨天'
        },
        {
          value: 3,
          label: '最近7天'
        },
        {
          value: 4,
          label: '全部'
        }
      ],
      // 订单状态
      orderstates: [
        { value: '0', label: '待付款' },
        { value: '1', label: '待发货' },
        { value: '2', label: '待收货' },
        { value: '3', label: '已完成' },
        { value: '5', label: '已退款' },
        { value: '7', label: '已关闭' },
        { value: '-2', label: '已删除' },
        { value: '-1', label: '已取消' }
      ],
      // 支付方式
      dealtypes: [
        {
          label: '支付宝',
          value: 1
        },
        {
          label: '微信',
          value: 2
        },
        {
          label: '货到付款',
          value: 0
        },
        {
          label: '已确认收款',
          value: 4
        },
        {
          label: '全额餐卡',
          value: 5
        },
        {
          label: '福利',
          value: 6
        },
        {
          label: '银联支付',
          value: 3
        }
      ],
      list: null,
      listLoading: true,
      listQuery: {
        pageNum: 1,
        numPerPage: 20,
        state: undefined,
        dealtype: undefined,
        querydate: undefined,
        ordernum: undefined,
        receiver: undefined,
        username: undefined,
        tel: undefined,
        dateStart: undefined,
        dateEnd: undefined,
        apc: {
          companyid: undefined,
          companyname: undefined
        },
        welfare: {
          welfarename: undefined,
          welfareid: undefined
        },
        isself: undefined,
        islike: undefined,
        ismsgread: undefined
      },
      total: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.listQuery.dateStart = this.daterange[0]
      this.listQuery.dateEnd = this.daterange[1]
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
        this.total = response.data.total
        this.listQuery.querydate = response.data.querydate
        this.listQuery.isself = response.data.isself
        this.listQuery.islike = response.data.islike
        this.listQuery.dateStart = response.data.dateStart
        this.listQuery.dateEnd = response.data.dateEnd
        this.daterange = [response.data.dateStart, response.data.dateEnd]
      })
    },
    handleFilter() {
      this.listQuery.pageNum = 1
      this.fetchData()
    }
  }
}
</script>
