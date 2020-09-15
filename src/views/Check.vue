<template>
  <div class="check">
    <div class="head">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="服务器">
          <el-input v-model="formInline.user" placeholder="关键字查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Search">查询</el-button>
          <el-button type="primary" @click="before()">告警设置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 搜索后的 -->
    <div class="con" v-if="searchData.length>0">
      <template>
        <el-table
          :header-cell-style="{background:'#CCCCCC'}"
          :data="searchData"
          border
          style="width: 100%"
        >
          <el-table-column
            type="selection"
            width="100"
            align="center"
            :selectable="checkbox_callback"
          >
            <!-- <el-checkbox v-model="check"></el-checkbox> -->
          </el-table-column>
          <el-table-column prop="id" label="编号" align="center"></el-table-column>
          <el-table-column prop="name" label="服务器" align="center"></el-table-column>
          <el-table-column prop="ip" label="服务器IP" align="center"></el-table-column>
          <el-table-column prop="ipslot" label="运行状态" align="center"></el-table-column>
          <el-table-column prop="address" label="操作系统" align="center"></el-table-column>
          <el-table-column prop="url" label="内存" align="center"></el-table-column>
          <el-table-column prop="dateNum" label="CPU" align="center" style="color:blue"></el-table-column>
          <el-table-column prop="dateNums" label="磁盘" align="center"></el-table-column>
          <el-table-column prop="k" label="查看" align="center">
            <template slot-scope="scope">
              <el-button>详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>

    <!-- 搜索前的 -->
    <div class="con" v-else>
      <template>
        <el-table
          :header-cell-style="{background:'#CCCCCC'}"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            type="selection"
            width="100"
            align="center"
            :selectable="checkbox_callback"
          >
            <!-- <el-checkbox v-model="check"></el-checkbox> -->
          </el-table-column>
          <el-table-column prop="id" label="编号" align="center"></el-table-column>
          <el-table-column prop="name" label="服务器" align="center"></el-table-column>
          <el-table-column prop="ip" label="服务器IP" align="center"></el-table-column>
          <el-table-column prop="ipslot" label="运行状态" align="center"></el-table-column>
          <el-table-column prop="address" label="操作系统" align="center"></el-table-column>
          <el-table-column prop="url" label="内存" align="center"></el-table-column>
          <el-table-column prop="dateNum" label="CPU" align="center" style="color:blue"></el-table-column>
          <el-table-column prop="dateNums" label="磁盘" align="center"></el-table-column>
          <el-table-column prop="k" label="查看" align="center">
            <template slot-scope="scope">
              <el-button>详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>

    <!-- 点击告警设置的弹框 -->
    <el-dialog :visible.sync="beforeDialogVisible" width="40%" :before-close="beforehandleClose">
      <el-form :model="befores" label-width="80px">
        <el-form-item label="运行状态">
          <el-col :span="19">
            <el-input v-model="befores.name" placeholder="规则名称"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="内存">
          <el-col :span="19">
            <el-input v-model="befores.address" placeholder="内存"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="CPU">
          <el-col :span="19">
            <el-input v-model="befores.flag" placeholder="CPU"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="硬盘">
          <el-col :span="19">
            <el-input v-model="befores.dataSr" placeholder="硬盘"></el-input>
          </el-col>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="beforeDialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="beforeClose">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {getCity} from '../request/api'
export default {
  data() {
    return {
      //警告设置弹框的数据
      befores: [],
      //最上面搜索用的
      formInline: {
        user: "",
        region: "",
      },
      formType: {
        user: "",
        region: "",
        regions: "",
      },
      // 控制点击告警设置显示和隐藏
      beforeDialogVisible: false,
      //搜索过后的数据
      searchData: [],
      //表格数据
      tableData: [
        {
          id: 1,
          url: "60%",
          name: "SERVIERID1",
          ip: "10.0.0.1",
          address: "centos",
          dateNum: "10%",
          check: false,
          dateNums: "50%",
          ipslot: "正常",
        },
        {
          id: 2,
          url: "60%",
          name: "SERVIERID2",
          ip: "10.0.0.2",
          address: "centos",
          dateNum: "10%",
          check: false,
          dateNums: "30%",
          ipslot: "正常",
        },
        {
          id: 3,
          url: "60%",
          name: "SERVIERID3",
          ip: "10.0.0.3",
          address: "centos",
          dateNum: "70%",
          check: false,
          dateNums: "70%",
          ipslot: "警告",
        },
        {
          id: 4,
          url: "90%",
          name: "SERVIERID4",
          ip: "10.0.0.4",
          address: "redhat",
          dateNum: "30%",
          check: false,
          dateNums: "90%",
          ipslot: "严重",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    //关闭告警设置按钮
    beforehandleClose() {
      this.beforeDialogVisible = !this.beforeDialogVisible;
    },
    before() {
      // console.log(sco)
      // this.befores = sco;
      // console.log(this.befores);
      this.beforeDialogVisible = !this.beforeDialogVisible;
    },
    //点击修改保存内容
    beforeClose() {
      console.log("测试修改内容");
    },
    Search() {
      // search 是 v-model="search" 的 search

      var search = this.formInline.user;
      console.log(search);
      if (search) {
        this.searchData = this.tableData.filter(function (product) {
          // 每一项数据
          // console.log(product)
          return Object.keys(product).some(function (key) {
            // 每一项数据的参数名
            // console.log(key)
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            );
          });
        });
      } else if (search.length == 0) {
        this.searchData = this.tableData;
      } else {
        console.log("消息提示");
        this.$message("这是一条消息提示");
      }
    },
    checkbox_callback: function (row, index) {
      //初始化加载数据时，如果数据中包含status属性，并且status为'1'则该行不能被选中
      if (row.status == 1) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted(){
    getCity({}).then((res)=>{
      console.log(res)
    })
  }
};
</script>
<style lang="scss" scoped>
.check {
  width: 100%;
  height: 100%;
  .ri {
    margin-left: 30px;
    color: #3399cc;
    cursor: pointer;
  }
  .ipslot {
    color: red;
  }
}
</style>
