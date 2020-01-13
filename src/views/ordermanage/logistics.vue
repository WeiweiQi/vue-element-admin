<template>
  <div>
    <el-dialog :visible.sync="dialogVisible" :title="添加运单号">
      <el-table :model="role" label-width="80px" label-position="left">
        <el-table-column align="center" label="序号" width="50">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="订单编号" width="140">
          <template slot-scope="scope">{{ scope.row.yundanhao }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'OrderLogisticsDialog'
}
</script>

<style lang="stylus" scoped></style>
