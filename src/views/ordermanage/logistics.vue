<template>
  <div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="运单号">
        <template slot-scope="scope">{{ scope.row.mailno }}</template>
      </el-table-column>
      <el-table-column label="快递">
        <template slot-scope="scope">
          <div v-if="scope.row.shippercode == 'JD'">京东</div>
          <div v-else-if="scope.row.shippercode == 'DBL'">德邦</div>
          <div v-else-if="scope.row.shippercode == 'STO'">申通</div>
          <div v-else-if="scope.row.shippercode == 'ZTO'">中通</div>
          <div v-else-if="scope.row.shippercode == 'SF'">顺丰</div>
          <div v-else-if="scope.row.shippercode == 'YTO'">圆通</div>
          <div v-else-if="scope.row.shippercode == 'YD'">韵达</div>
          <div v-else-if="scope.row.shippercode == 'YZPY'">邮政平邮</div>
          <div v-else-if="scope.row.shippercode == 'EMS'">EMS</div>
          <div v-else-if="scope.row.shippercode == 'ZJS'">宅急送</div>
          <div v-else-if="scope.row.shippercode == 'UC'">优速快递</div>
          <div v-else-if="scope.row.shippercode == 'HTKY'">百世快递</div>
          <div v-else-if="scope.row.shippercode == 'HHTT'">天天快递</div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getOrderMailNo } from '@/api/ordermanage/ordermanage'

export default {
  name: 'OrderLogisticsDialog',
  props: {
    ordernumber: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        ordernumber: undefined
      }
    }
  },
  created() {
    this.listLoading = true
    this.listQuery.ordernumber = this.ordernumber
    getOrderMailNo(this.listQuery).then(reponse => {
      this.list = reponse.data.items
      this.listLoading = false
      this.ordernumber = reponse.data.ordernumber
    })
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getOrderMailNo(this.listQuery).then(reponse => {
        this.list = reponse.data.items
        this.listLoading = false
        this.ordernumber = reponse.data.ordernumber
      })
    }
  }
}
</script>

<style lang="stylus" scoped></style>
