<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item timestamp="2021/12/02" placement="top">
        <el-card>
          <h4>完成独立方案评价指标计算实验</h4>

          <el-popover
              placement="bottom"
              title="哈哈哈哈哈"
              :width="200"
              trigger="click"
              content="DDL于 2021/12/01 23:59"
          >
            <template #reference>
              <el-button>surprise</el-button>
            </template>
          </el-popover>

        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021/12/02" placement="top">
        <el-card>
          <h4>完成软件规模度量实验</h4>
          <p>DDL于 2021/12/01 23:59</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021/12/02" placement="top">
        <el-card>
          <h4>完成财务分析实验</h4>
          <p>DDL于 2021/12/01 23:59</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "AppIndex"
}
</script>

<style scoped>

</style>
