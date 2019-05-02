<template>
  <div class="calculator">
    <div class="table-wrapper">
      <h1>Calculator</h1>
      <el-table
        border
        :data="billList"
      >
        <el-table-column label="input-type">
          <template scope="scope">
            <el-switch
              @change="onInputTypeChange($event, scope.$index)"
              v-model="scope.row.selectType"
              active-text="select"
              inactive-text="input"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="remark">
          <template slot-scope="scope">
            <!-- 选择框模式-->
            <template v-if="isSelectInput(scope.row)">
              <el-select
                v-model="scope.row.remark"
                style="width: 100%"
              >
                <el-option
                  v-for="(item, index) in remarkOptions"
                  :value="item"
                  :label="item"
                  :key="`pf-op-${index}`"
                  :disabled="isSelected(item)"
                />
              </el-select>
            </template>

            <!-- 输入框模式 -->
            <template v-else>
              <el-input v-model="scope.row.remark" />
            </template>

          </template>
        </el-table-column>

        <!-- 输入数值 -->
        <el-table-column label="amount">
          <template slot-scope="scope">
            <el-input
              :ref="scope.row.id"
              v-model.number="scope.row.count"
              @keyup.enter.native="addItem"
            />
          </template>
        </el-table-column>

        <el-table-column
          label="operation"
          width="100"
        >
          <template slot-scope="scope">
            <el-button
              class="delete-button"
              type="text"
              @click="deleteItem(scope.row.id)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <footer class="calc-footer">
      <div class="btn-wrapper">
        <el-popover
          placement="top"
          v-model="popoverShow"
        >
          <p>
            Delete All ?
          </p>
          <flex-box justify="flex-end">
            <el-button
              size="mini"
              type="text"
              @click="hidePopover"
            >
              Cancel
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="onClearAll"
            >
              Yes
            </el-button>
          </flex-box>
          <el-button
            slot="reference"
            :disabled="isEmpty"
          >
            Clear
          </el-button>
        </el-popover>
        <el-button
          type="primary"
          @click="addItem"
          :style="addBtnStyle"
        >
          ADD
        </el-button>
      </div>
      <p class="total-text">Total: {{total || 0}}</p>
    </footer>
  </div>
</template>

<script>
import FlexBox from "./FlexBox.vue";
export default {
  components: {
    "flex-box": FlexBox
  },
  data() {
    return {
      remarkOptions: [
        "京东白条",
        "京东金条",
        "花呗",
        "借呗",
        "农商银行",
        "招商银行",
        "广发银行"
      ],
      billList: [],
      addBtnStyle: {
        marginTop: "20px"
      },
      popoverShow: false
    };
  },
  computed: {
    total() {
      const counts = this.billList.map(bill => bill.count) || [];
      const reducer = (a, c) => +a + +c;
      return counts.length > 0 ? counts.reduce(reducer) : 0;
    },
    isEmpty() {
      return this.billList.length === 0;
    }
  },
  watch: {
    billList: {
      deep: true,
      handler(val) {
        this.refresnCache(val);
      }
    }
  },

  created() {
    this.getCache();
  },
  updated() {
    console.log("updated");
  },
  methods: {
    refresnCache(val) {
      localStorage.setItem("bill_list", JSON.stringify(val));
    },
    getCache() {
      const cache = localStorage.getItem("bill_list") || "[]";
      this.billList = JSON.parse(cache);
    },
    addItem() {
      const item = {
        remark: "",
        count: 0,
        selecteType: false,
        id: new Date().getTime()
      };
      this.billList.push(item);
      this.$nextTick(() => {
        this.focusInput(item.id);
      });
    },
    focusInput(refName) {
      this.$refs[refName].focus();
    },
    deleteItem(id) {
      this.billList = this.billList.filter(item => item.id !== id);
    },
    isSelected(item) {
      const remarks = this.billList.map(bill => bill.remark);
      return remarks.includes(item);
    },
    isSelectInput(item) {
      return item.selectType;
    },
    onInputTypeChange(val, index) {
      this.$set(this.billList[index], "remark", "");
    },
    resetList() {
      this.billList = [];
    },
    hidePopover() {
      this.popoverShow = false;
    },
    onClearAll() {
      this.resetList();
      this.hidePopover();
    }
  }
};
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_1172067_wdund4f3e2.css');
.calculator {
  margin: 0 auto;
  width: 800px;
  .table-wrapper {
    .el-table {
      margin: 0 auto;
    }
  }
  .delete-button {
    color: #F56C6C;
    &:hover {
      color: #F56C6C;
      opacity: .6;
    }
  }
  .calc-footer {
    .el-button {
      margin-top: 20px;
      margin-left: 10px;
    }
    .btn-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    .total-text {
      font-weight: bold;
      text-align: right;
    }
  }
}
</style>
