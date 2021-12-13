<template>
  <Header></Header>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-main>
        <el-button @click="jumpToStudent" style="position: relative;right: 660px">
          返回首页<el-icon class="el-icon--right"><Back /></el-icon>
        </el-button>
          <div class="etitle">独立方案评价指标计算</div>
          <el-table
              :data="tableData1"
              border
              class="etable"
          >
            <el-table-column
                prop="number"
                label="序号"
                width="160"
                fixed>
            </el-table-column>
            <el-table-column
                prop="year"
                label="时点(年份)"
                width="250"
                fixed>
            </el-table-column>
            <el-table-column
                prop="zero"
                label="0"
                width="150">
            </el-table-column>
            <el-table-column
                prop="one"
                label="1"
                width="150">
            </el-table-column>
            <el-table-column
                prop="two"
                label="2"
                width="150">
            </el-table-column>
            <el-table-column
                prop="three"
                label="3"
                width="150">
            </el-table-column>
            <el-table-column
                prop="four"
                label="4"
                width="150">
            </el-table-column>
            <el-table-column
                prop="five"
                label="5"
                width="150">
            </el-table-column>
            <el-table-column
                prop="six"
                label="6"
                width="150">
            </el-table-column>
          </el-table>
        <el-table
            :data="tableData2"
            ref="table"
            border
            class="etable"
            :show-header="false"
            @cell-dblclick="tableDbEdit"
        >
          <el-table-column
              prop="number"
              width="160"
              fixed>
          </el-table-column>
          <el-table-column
              prop="year"
              width="250"
              fixed>
          </el-table-column>
          <el-table-column
              prop="zero"
              label="0"
              width="150">
          </el-table-column>
          <el-table-column
              prop="one"
              label="1"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.one"
                        v-if="showInput == `one${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"one",scope.row.one)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.one}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="two"
              label="2"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.two"
                        v-if="showInput == `two${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"two",scope.row.two)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.two}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="three"
              label="3"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.three"
                        v-if="showInput == `three${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"three",scope.row.three)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.three}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="four"
              label="4"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.four"
                        v-if="showInput == `four${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"four",scope.row.four)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.four}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="five"
              label="5"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.five"
                        v-if="showInput == `five${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"five",scope.row.five)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.five}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="six"
              label="6"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.six"
                        v-if="showInput == `six${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"six",scope.row.six)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.six}}</p>
            </template>
          </el-table-column>
        </el-table>
        <el-table
            :data="tableData3"
            border
            class="etable"
            :show-header="false"
            @cell-dblclick="tableDbEdit"
        >
          <el-table-column
              prop="number"
              label="序号"
              width="160"
              fixed>
          </el-table-column>
          <el-table-column
              prop="year"
              label="时点(年份)"
              width="250"
              fixed>
          </el-table-column>
          <el-table-column
              prop="zero"
              label="0"
              width="150">
          </el-table-column>
          <el-table-column
              prop="one"
              label="1"
              width="150">
          </el-table-column>
          <el-table-column
              prop="two"
              label="2"
              width="150">
          </el-table-column>
          <el-table-column
              prop="three"
              label="3"
              width="150">
          </el-table-column>
          <el-table-column
              prop="four"
              label="4"
              width="150">
          </el-table-column>
          <el-table-column
              prop="five"
              label="5"
              width="150">
          </el-table-column>
          <el-table-column
              prop="six"
              label="6"
              width="150">
          </el-table-column>
        </el-table>
        <el-table
            :data="tableData4"
            border
            class="etable"
            :show-header="false"
            @cell-dblclick="tableDbEdit"
        >
          <el-table-column
              prop="number"
              label="序号"
              width="160"
              fixed>
          </el-table-column>
          <el-table-column
              prop="year"
              label="时点(年份)"
              width="250"
              fixed>
          </el-table-column>
          <el-table-column
              prop="zero"
              label="0"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.zero"
                        v-if="showInput == `zero${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"zero",scope.row.zero)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.zero}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="one"
              label="1"
              width="150">
          </el-table-column>
          <el-table-column
              prop="two"
              label="2"
              width="150">
          </el-table-column>
          <el-table-column
              prop="three"
              label="3"
              width="150">
          </el-table-column>
          <el-table-column
              prop="four"
              label="4"
              width="150">
          </el-table-column>
          <el-table-column
              prop="five"
              label="5"
              width="150">
          </el-table-column>
          <el-table-column
              prop="six"
              label="6"
              width="150">
          </el-table-column>
        </el-table>
        <el-table
            :data="tableData5"
            border
            class="etable"
            :show-header="false"
            @cell-dblclick="tableDbEdit"
        >
          <el-table-column
              prop="number"
              label="序号"
              width="160"
              fixed>
          </el-table-column>
          <el-table-column
              prop="year"
              label="时点(年份)"
              width="250"
              fixed>
          </el-table-column>
          <el-table-column
              prop="zero"
              label="0"
              width="150">
          </el-table-column>
          <el-table-column
              prop="one"
              label="1"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.one"
                        v-if="showInput == `one${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"one",scope.row.one)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.one}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="two"
              label="2"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.two"
                        v-if="showInput == `two${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"two",scope.row.two)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.two}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="three"
              label="3"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.three"
                        v-if="showInput == `three${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"three",scope.row.three)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.three}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="four"
              label="4"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.four"
                        v-if="showInput == `four${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"four",scope.row.four)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.four}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="five"
              label="5"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.five"
                        v-if="showInput == `five${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"five",scope.row.five)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.five}}</p>
            </template>
          </el-table-column>
          <el-table-column
              prop="six"
              label="6"
              width="150">
            <template #default="scope">
              <!-- 条件判断如果满足则显示表单，否则默认展示文字 -->
              <el-input type="textarea" size="small"
                        v-model="scope.row.six"
                        v-if="showInput == `six${scope.row.id}`"
                        @blur='blurInput(scope.row.id,"six",scope.row.six)'
                        v-focusTextarea>
              </el-input>
              <p v-else>{{scope.row.six}}</p>
            </template>
          </el-table-column>
        </el-table>
        <el-table
            :data="tableData6"
            border
            class="etable"
            :show-header="false"
        >
          <el-table-column
              prop="number"
              label="序号"
              width="160"
              fixed>
          </el-table-column>
          <el-table-column
              prop="year"
              label="时点(年份)"
              width="250"
              fixed>
          </el-table-column>
          <el-table-column
              prop="zero"
              label="0"
              width="150">
          </el-table-column>
          <el-table-column
              prop="one"
              label="1"
              width="150">
          </el-table-column>
          <el-table-column
              prop="two"
              label="2"
              width="150">
          </el-table-column>
          <el-table-column
              prop="three"
              label="3"
              width="150">
          </el-table-column>
          <el-table-column
              prop="four"
              label="4"
              width="150">
          </el-table-column>
          <el-table-column
              prop="five"
              label="5"
              width="150">
          </el-table-column>
          <el-table-column
              prop="six"
              label="6"
              width="150">
          </el-table-column>
        </el-table>
        <el-button @click="getResult" style="position: relative;top:100px">
          提交<el-icon class="el-icon--right"><Back /></el-icon>
        </el-button>
      </el-main>
    </el-container>
</template>

<script>
import Header from "@/components/common/Header";
import { Back } from '@element-plus/icons';
import axios from "axios";
export default {
  components: {
  Back,Header
  },
  data() {
    return {
      showInput: '',
      oldData:{},
      formData:{
        assistantId : '',
        cumulative0 : 0,
        cumulative1 : 0,
        cumulative2 : 0,
        cumulative3 : 0,
        cumulative4 : 0,
        cumulative5 : 0,
        cumulative6 : 0,
        dpp : 0.0,
        inflow1 : 0,
        inflow2 : 0,
        inflow3 : 0,
        inflow4 : 0,
        inflow5 : 0,
        inflow6 : 0,
        irr : 0.0,
        netCashFlow0 : 0,
        netCashFlow1 : 0,
        netCashFlow2 : 0,
        netCashFlow3 : 0,
        netCashFlow4 : 0,
        netCashFlow5 : 0,
        netCashFlow6 : 0,
        npv : 0,
        outflow0 : 0,
        outflow1 : 0,
        outflow2 : 0,
        outflow3 : 0,
        outflow4 : 0,
        outflow5 : 0,
        outflow6 : 0,
        presentCumulative0 : 0,
        presentCumulative1 : 0,
        presentCumulative2 : 0,
        presentCumulative3 : 0,
        presentCumulative4 : 0,
        presentCumulative5 : 0,
        presentCumulative6 : 0,
        presentNetCashFlow0 : 0,
        presentNetCashFlow1 : 0,
        presentNetCashFlow2 : 0,
        presentNetCashFlow3 : 0,
        presentNetCashFlow4 : 0,
        presentNetCashFlow5 : 0,
        presentNetCashFlow6 : 0,
        reportScore : 0,
        studentId : '',
        teacherId : '',
      },
      tableData1: [
        {
          id:0,
          number: '1',
          year: '现金流入',
          one: '',
          two: 570,
          three: 738,
          four: 913,
          five: 1097,
          six: 1289

        },
    ],
      tableData2:[
        {
          id:0,
          number: '1.1',
          year: '软件产品销售收入',
          one:'',
          two:'',
          three:'',
          four:'',
          five:'',
          six:'',
        },
        {
          id:1,
          number: '1.2',
          year: '软件运营维护收入',
        },
      ],
       tableData3:[
        {
          id:0,
          number: '2',
          year: '现金流出',
          zero: 1000,
          one: 500,
          two: 500,
          three: 500,
          four: 500,
          five: 500,
          six: 500
        },
       ],
      tableData4:[
        {
          id:0,
          number: '2.1',
          year: '软件开发成本',

        },
          ],
      tableData5:[
         {
           id:0,
           number: '2.2',
           year: '业务运营费用',
         },
          ],
      tableData6:[
        {
          id:0,
          number: '3',
          year: '净现金流量',
        },
        {
          id:1,
          number: '3.1',
          year: '累计净现金流量',
        },
        {
          id:2,
          number: '4',
          year: '净现金流量(现值)',
        },
        {
          id:3,
          number: '4.1',
          year: '累计净现金流量(现值)',
        },
        {
          id:4,
          number: '',
          year: '',
        },
        {
          id:5,
          number: '指标',
          year: '净现值NPV(10%)',
        },
        {
          id:6,
          number: '',
          year: '内部收益率IRR',
        },
        {
          id:7,
          number: '',
          year: '动态投资回收期(年)',
        },
        {
          number: '',
          year: ''
        },
        {
          id:8,
          number: '',
          year: '现值系数',
          zero:1.00,
          one:0.9091,
          two:0.8264,
          three:0.7513,
          four:0.683,
          five:0.6209,
          six:0.5645
        },
      ]
    }
  },
  directives: {
    // 通过自定义指令实现的表单自动获得光标的操作
    focus: {
      inserted: function (el) {
        if(el.tagName.toLocaleLowerCase() == 'input'){
          el.focus()
        }else{
          if(el.getElementsByTagName('input')){
            el.getElementsByTagName('input')[0].focus()
          }
        }
        el.focus()
      }
    },
    focusTextarea: {
      inserted: function (el) {
        if(el.tagName.toLocaleLowerCase() == 'textarea'){
          el.focus()
        }else{
          if(el.getElementsByTagName('textarea')){
            el.getElementsByTagName('textarea')[0].focus()
          }
        }
        el.focus()
      }
    }
  },

  methods: {

    jumpToStudent() {
      this.$router.push('/student')
    },
    // 当input失去光标后进行的操作
    async blurInput(id, name, value) {
      let obj = {}
      // 判断数据是否有所改变，如果数据有改变则调用修改接口
      if (this.oldData[name] != value) {
        obj[name] = value//被改变的数据
        // 然后再写调用接口，提交内容的东西就可以了
      }
      this.showInput = ""
    },
    /*
      方法参数皆为框架方法的默认传参
      row 	行数据
      column	被点击的触发了方法的单元格
      event	事件
      */
    tableDbEdit(row, column, event) {
      this.showInput = column.property + row.id
      this.oldData[column.property] = row[column.property]
    },
    // table动态生成多少条数据
    countChange(num) {
      this.currentData = []
      var index = 0
      var obj = {}
      for (var i = 0; i < num; i++) {
        index++
        obj = {
          index: index,
          positionCode: null
        }
        this.currentData.push(obj)
      }
    },
    handleInputChange(val, index) {
      this.currentData[index - 1].positionCode = val
    },
    getResult() {
      axios
          .post('/report/submit', {
            developCost0: 1000,
            omRevenue1: 10,
            omRevenue2: 20,
            omRevenue3: 30,
            omRevenue4: 40,
            omRevenue5: 50,
            omRevenue6: 60,
            opExpense1: 500,
            opExpense2: 500,
            opExpense3: 500,
            opExpense4: 500,
            opExpense5: 500,
            opExpense6: 500,
            reportId: "",
            saleRevenue1: 550,
            saleRevenue2: 550,
            saleRevenue3: 708,
            saleRevenue4: 873,
            saleRevenue5: 1047,
            saleRevenue6: 1229,
          }).then(resp => {
        /*then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)*/
        this.formData.assistantId = resp.data.assistantId;
        this.formData.cumulative0 = resp.data.cumulative0;
        this.formData.cumulative1 = resp.data.cumulative1;
        this.formData.cumulative2 = resp.data.cumulative2;
        this.formData.cumulative3 = resp.data.cumulative3;
        this.formData.cumulative4 = resp.data.cumulative4;
        this.formData.cumulative5 = resp.data.cumulative5;
        this.formData.cumulative6 = resp.data.cumulative6;
        this.formData.dpp = resp.data.dpp;
        this.formData.inflow1 = resp.data.inflow1;
        this.formData.inflow2 = resp.data.inflow2;
        this.formData.inflow3 = resp.data.inflow3;
        this.formData.inflow4 = resp.data.inflow4;
        this.formData.inflow5 = resp.data.inflow5;
        this.formData.inflow6 = resp.data.inflow6;
        this.formData.irr = resp.data.irr;
        this.formData.netCashFlow0 = resp.data.netCashFlow0;
        this.formData.netCashFlow1 = resp.data.netCashFlow1;
        this.formData.netCashFlow2 = resp.data.netCashFlow2;
        this.formData.netCashFlow3 = resp.data.netCashFlow3;
        this.formData.netCashFlow4 = resp.data.netCashFlow4;
        this.formData.netCashFlow5 = resp.data.netCashFlow5;
        this.formData.netCashFlow6 = resp.data.netCashFlow6;
        this.formData.npv = resp.data.npv;
        this.formData.outflow0 = resp.data.outflow0;
        this.formData.outflow1 = resp.data.outflow1;
        this.formData.outflow2 = resp.data.outflow2;
        this.formData.outflow3 = resp.data.outflow3;
        this.formData.outflow4 = resp.data.outflow4;
        this.formData.outflow5 = resp.data.outflow5;
        this.formData.outflow6 = resp.data.outflow6;
        this.formData.presentCumulative0 = resp.data.presentCumulative0;
        this.formData.presentCumulative1 = resp.data.presentCumulative1;
        this.formData.presentCumulative2 = resp.data.presentCumulative2;
        this.formData.presentCumulative3 = resp.data.presentCumulative3;
        this.formData.presentCumulative4 = resp.data.presentCumulative4;
        this.formData.presentCumulative5 = resp.data.presentCumulative5;
        this.formData.presentCumulative6 = resp.data.presentCumulative6;
        this.formData.presentNetCashFlow0 = resp.data.presentNetCashFlow0;
        this.formData.presentNetCashFlow1 = resp.data.presentNetCashFlow1;
        this.formData.presentNetCashFlow2 = resp.data.presentNetCashFlow2;
        this.formData.presentNetCashFlow3 = resp.data.presentNetCashFlow3;
        this.formData.presentNetCashFlow4 = resp.data.presentNetCashFlow4;
        this.formData.presentNetCashFlow5 = resp.data.presentNetCashFlow5;
        this.formData.presentNetCashFlow6 = resp.data.presentNetCashFlow6;
        this.formData.reportScore = resp.data.reportScore;
        this.formData.studentId = resp.data.studentId;
        this.formData.teacherId = resp.data.teacherId;
        let result=resp.data;
        console.log(resp);
        console.log(result);
      }).catch(() => {
        this.$message({
          message: '提交失败，请重试',
          type: 'error'
        })
      })
    },
  }
}
</script>

<style scoped>
.etitle{
  color:black;
  font-weight:bold;
  font-size:20px;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  left:30px;

}
.etable{
  width: 100% ;
  position:relative;
  top:50px
}

</style>
