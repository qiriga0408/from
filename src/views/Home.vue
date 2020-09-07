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
    <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <!-- 内容部分 -->
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
    </el-dialog>

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
    <div class="content">
   
      <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
>
      
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="内容"></el-table-column>
        <el-table-column prop="flag" width="80" label="状态"></el-table-column>
        <el-table-column prop="dataSr" label="创建时间"></el-table-column>
        <el-table-column prop="ss" style="color:blue;" label="操作">
          <el-button >编辑</el-button>
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
      addformInlines:{
        id:'',
        name:'',
        address:'',
        flag:'停止',
        dataSr:'2018-08-31'
      },
      formInline: {
        user: "",
        region: ""
      },
      formInlines: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: 1,
          date: "1",
          name: "获取用户基础数据",
          address: "获取用户基础数据，包括用户名，姓名等",
          flag: "停止",
          dataSr: "2020-08-31"
        },
        {
          id: 2,
          date: "2",
          name: "获取装备基础数据",
          address: "获取装备基础数据，包括编码，名称等",
          flag: "提交",
          dataSr: "2020-08-31"
          // ss: "查看详情"
        },
        {
          id: 3,
          date: "3",
          name: "获取用户基础数据",
          address: "获取用户基础数据，包括用户名，姓名等",
          flag: "停止",
          dataSr: "2020-08-31"
        }
      ],
      dialogVisible: false,
      addDialogVisible: false
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
      console.log(1)
      
      this.addDialogVisible = !this.addDialogVisible;
    },
    //添加到下面的数据里
    addCart(){
      this.tableData.push({id:this.addformInlines.id,name:this.addformInlines.name,address:this.addformInlines.address,flag:this.addformInlines.flag,dataSr:this.addformInlines.dataSr})
       this.addDialogVisible = !this.addDialogVisible;
    },
    addhandleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //点击查询让div显示隐藏
    onSubmit() {
      console.log("submit!");
      this.dialogVisible = !this.dialogVisible;
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
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
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
