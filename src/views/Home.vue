<template>
  <div class="home">
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="名称">
          <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="状态">
            <el-option label="停止" value="shanghai"></el-option>
            <el-option label="提交" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="addDialog">需要申请</el-button>
          <!-- <el-button type="primary" >添加</el-button> -->
          <el-button @click="del(id)" type="primary">删除</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 点击查询会弹框 -->
    <!-- <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="formInlines" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="formInlines.user" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="desc">
          <el-input v-model="formInlines.region" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">提交</el-button>
        <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>-->

    <!-- //添加数据 -->
    <el-dialog :visible.sync="addDialogVisible" width="30%" :before-close="addhandleClose">
      <!-- 内容部分 -->
      <el-form :model="addformInlines" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="addformInlines.id" placeholder="ID"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="addformInlines.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="addformInlines.address" placeholder="内容"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="addformInlines.flag" placeholder="状态"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="addformInlines.dataSr" placeholder="创建时间"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addCart">添加</el-button>
      </span>
    </el-dialog>

    <!-- 点击详情会出现弹框，并且修改数据 -->
    <el-dialog :visible.sync="beforeDialogVisible" width="30%" :before-close="beforehandleClose">
      <!-- 内容部分 -->
      <el-form :model="befores" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model="befores.id" placeholder="ID"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="befores.name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="befores.address" placeholder="内容"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="befores.flag" placeholder="状态"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="befores.dataSr" placeholder="创建时间"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="beforeDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="beforeClose">修改</el-button>
      </span>
    </el-dialog>

    <!-- //搜索后的 -->
    <div class="content" v-if="searchData.length>0">
      <el-table
        :data="searchData"
        :row-class-name="tableRowClassName"
        :header-cell-style="{background:'#CCCCCC'}"
      >
        <el-table-column prop="id" label="ID" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" align="center"></el-table-column>
        <el-table-column prop="address" label="内容" align="center"></el-table-column>
        <el-table-column prop="flag" width="80" label="状态" align="center"></el-table-column>
        <el-table-column prop="dataSr" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="ss" style="color:blue;" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="before(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
        <el-pagination layout="prev, pager, next" :total="5" style="float:right;"></el-pagination>
      </div>
    </div>

    <!-- 搜索前的 -->
    <div class="content" v-else>
      <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        :header-cell-style="{background:'#CCCCCC'}"
      >
        <el-table-column prop="id" label="ID" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" align="center"></el-table-column>
        <el-table-column prop="address" label="内容" align="center"></el-table-column>
        <el-table-column prop="flag" width="80" label="状态" align="center"></el-table-column>
        <el-table-column prop="dataSr" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="ss" style="color:blue;" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="before(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
        <el-pagination layout="prev, pager, next" :total="5" style="float:right;"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addformInlines: {
        id: "",
        name: "",
        address: "",
        flag: "停止",
        dataSr: "2018-08-31",
      },
      formInline: {
        user: "",
        region: "",
      },
      formInlines: {
        user: "",
        region: "",
      },
      //修改数据的
      befores: [],
      //表格数据
      tableData: [
        {
          id: 1,
          date: "1",
          name: "获取用户基础数据",
          address: "获取用户基础数据，包括用户名，姓名等",
          flag: "停止",
          dataSr: "2020-08-31",
        },
        {
          id: 2,
          date: "2",
          name: "获取装备基础数据",
          address: "获取装备基础数据，包括编码，名称等",
          flag: "提交",
          dataSr: "2020-08-31",
          // ss: "查看详情"
        },
        {
          id: 3,
          date: "3",
          name: "获取用户基础数据",
          address: "获取用户基础数据，包括用户名，姓名等",
          flag: "停止",
          dataSr: "2020-08-31",
        },
      ],
      dialogVisible: false,
      addDialogVisible: false,
      beforeDialogVisible: false,
      searchData: [],
    };
  },
  created() {},
  computed: {},
  methods: {
    //删除功能
    del(i) {
      this.tableData.splice(i, 1);
    },
    //显示隐藏添加功能
    addDialog() {
      console.log(1);

      this.addDialogVisible = !this.addDialogVisible;
    },
    //添加到下面的数据里
    addCart() {
      this.tableData.push({
        id: this.addformInlines.id,
        name: this.addformInlines.name,
        address: this.addformInlines.address,
        flag: this.addformInlines.flag,
        dataSr: this.addformInlines.dataSr,
      });
      this.addDialogVisible = !this.addDialogVisible;
    },
    addhandleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //关闭修改按钮
    beforehandleClose() {
      this.beforeDialogVisible = !this.beforeDialogVisible;
    },
    before(sco) {
      // console.log(sco)
      this.befores = sco;
      console.log(this.befores);
      this.beforeDialogVisible = !this.beforeDialogVisible;
    },
    //点击修改保存内容
    beforeClose() {
      console.log("测试修改内容");
    },
    //点击查询
    onSubmit() {
      console.log("submit!");
      // this.dialogVisible = !this.dialogVisible;
      // search 是 v-model="search" 的 search
      var search = this.formInline.user;
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
      } else {
        this.$message({
          showClose: true,
          message: "请输入搜索条件！",
          type: "warning",
        });
      }
    },
    //下面表格的
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // background: white(235, 233, 233);
}
.header {
  width: 100%;
  height: 70px;
  // background: darkcyan;
  // .el-form-item__content{
  //   width: 10px;
  // }
  // margin: 0 auto;
}
.content {
  width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
