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
        <el-button type="primary" @click="getResult" style="position: relative;top:60px">
          提交<el-icon class="el-icon--right"><Upload /></el-icon>
        </el-button>
      </el-main>
    </el-container>
</template>

<script>
import Header from "@/components/common/Header";
import { Back,Upload } from '@element-plus/icons';
import axios from "axios";
export default {
  components: {
  Back,Header,Upload
  },
  data() {
    return {
      showInput: '',
      oldData:{},
      formData:{
        studentId : '',
        teacherId : '',
        assistantId : '',
        reportScore : 0
      },
      tableData1: [
        {
          number: '1',
          year: '现金流入',
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',

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
          one:'',
          two:'',
          three:'',
          four:'',
          five:'',
          six:'',
        },
        {
          number: '',
          year: '',
        },
      ],
       tableData3:[
        {
          id:2,
          number: '2',
          year: '现金流出',
          zero: '',
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',
        },
       ],
      tableData4:[
        {
          id:3,
          number: '2.1',
          year: '软件开发成本',
          zero:'',
        },
          ],
      tableData5:[
         {
           id:4,
           number: '2.2',
           year: '业务运营费用',
           zero: '',
           one: '',
           two: '',
           three: '',
           four: '',
           five: '',
           six: '',
         },
        {
          number: '',
          year: '',
        },
        {
          number: '',
          year: '',
        },
          ],
      tableData6:[
        {
          id:5,
          number: '3',
          year: '净现金流量',
        },
        {
          id:6,
          number: '3.1',
          year: '累计净现金流量',
          zero: '',
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',
        },
        {
          id:7,
          number: '4',
          year: '净现金流量(现值)',
          zero: '',
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',
        },
        {
          id:8,
          number: '4.1',
          year: '累计净现金流量(现值)',
          zero: '',
          one: '',
          two: '',
          three: '',
          four: '',
          five: '',
          six: '',
        },
        {
          number: '',
          year: '',
        },
        {
          id:9,
          number: '指标',
          year: '净现值NPV(10%)',
          zero: '',
        },
        {
          id:10,
          number: '',
          year: '内部收益率IRR',
          zero: '',
        },
        {
          id:11,
          number: '',
          year: '动态投资回收期(年)',
          zero: '',
        },
        {
          number: '',
          year: ''
        },
        {
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
            developCost0:this.tableData4[0].zero,
            saleRevenue1: this.tableData2[0].one,
            saleRevenue2: this.tableData2[0].two,
            saleRevenue3: this.tableData2[0].three,
            saleRevenue4: this.tableData2[0].four,
            saleRevenue5: this.tableData2[0].five,
            saleRevenue6: this.tableData2[0].six,
            omRevenue1: this.tableData2[1].one,
            omRevenue2: this.tableData2[1].two,
            omRevenue3: this.tableData2[1].three,
            omRevenue4: this.tableData2[1].four,
            omRevenue5: this.tableData2[1].five,
            omRevenue6: this.tableData2[1].six,
            opExpense1: this.tableData5[0].one,
            opExpense2: this.tableData5[0].two,
            opExpense3: this.tableData5[0].three,
            opExpense4: this.tableData5[0].four,
            opExpense5: this.tableData5[0].five,
            opExpense6: this.tableData5[0].six,
            reportId: "195210820211213231700",

          }).then(resp => {
        /*then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)*/
        this.tableData1[0].one = resp.data.inflow1;
        this.tableData1[0].two = resp.data.inflow2;
        this.tableData1[0].three = resp.data.inflow3;
        this.tableData1[0].four = resp.data.inflow4;
        this.tableData1[0].five = resp.data.inflow5;
        this.tableData1[0].six = resp.data.inflow6;
        this.tableData3[0].zero = resp.data.outflow0;
        this.tableData3[0].one = resp.data.outflow1;
        this.tableData3[0].two = resp.data.outflow2;
        this.tableData3[0].three = resp.data.outflow3;
        this.tableData3[0].four = resp.data.outflow4;
        this.tableData3[0].five= resp.data.outflow5;
        this.tableData3[0].six = resp.data.outflow6;
        this.tableData4[0].zero = resp.data.developCost0;
        this.tableData6[0].zero  = resp.data.netCashFlow0;
        this.tableData6[0].one  = resp.data.netCashFlow1;
        this.tableData6[0].two  = resp.data.netCashFlow2;
        this.tableData6[0].three  = resp.data.netCashFlow3;
        this.tableData6[0].four  = resp.data.netCashFlow4;
        this.tableData6[0].five = resp.data.netCashFlow5;
        this.tableData6[0].six  = resp.data.netCashFlow6;
        this.tableData6[1].zero = resp.data.cumulative0;
        this.tableData6[1].one = resp.data.cumulative1;
        this.tableData6[1].two= resp.data.cumulative2;
        this.tableData6[1].three= resp.data.cumulative3;
        this.tableData6[1].four= resp.data.cumulative4;
        this.tableData6[1].five= resp.data.cumulative5;
        this.tableData6[1].six= resp.data.cumulative6;
        this.tableData6[2].zero = resp.data.presentNetCashFlow0;
        this.tableData6[2].one = parseFloat(resp.data.presentNetCashFlow1).toFixed(0);
        this.tableData6[2].two = parseFloat(resp.data.presentNetCashFlow2).toFixed(0);
        this.tableData6[2].three = parseFloat(resp.data.presentNetCashFlow3).toFixed(0);
        this.tableData6[2].four = parseFloat(resp.data.presentNetCashFlow4).toFixed(0);
        this.tableData6[2].five = parseFloat(resp.data.presentNetCashFlow5).toFixed(0);
        this.tableData6[2].six = parseFloat(resp.data.presentNetCashFlow6).toFixed(0);
        this.tableData6[3].zero = resp.data.presentCumulative0;
        this.tableData6[3].one = parseFloat(resp.data.presentCumulative1).toFixed(0);
        this.tableData6[3].two = parseFloat(resp.data.presentCumulative2).toFixed(0);
        this.tableData6[3].three = parseFloat(resp.data.presentCumulative3).toFixed(0);
        this.tableData6[3].four  = parseFloat(resp.data.presentCumulative4).toFixed(0);
        this.tableData6[3].five  = parseFloat(resp.data.presentCumulative5).toFixed(0);
        this.tableData6[3].six = parseFloat(resp.data.presentCumulative6).toFixed(0);
        this.tableData6[5].zero = parseFloat(resp.data.npv).toFixed(2);
        this.tableData6[6].zero = (((resp.data.irr)*100).toFixed(2)+"%");
        this.tableData6[7].zero = parseFloat(resp.data.dpp).toFixed(2);
        this.formData.reportScore = resp.data.reportScore;
        this.formData.studentId = resp.data.studentId;
        this.formData.teacherId = resp.data.teacherId;
        this.formData.assistantId = resp.data.assistantId;
        let result = resp.data;
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
