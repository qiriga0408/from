<template>
  <div class="check">
    <div class="head">
      <el-form :inline="true" :model="formType" class="demo-form-inline">
        <el-form-item label="接口名称" size="small ">
          <el-input v-model="formType.user"></el-input>
        </el-form-item>
        <el-form-item label="接口类型" size="small ">
          <el-select v-model="formType.region" placeholder="接口类型">
            <el-option label="GET" value="shanghai"></el-option>
            <el-option label="POST" value="beijing"></el-option>
            <el-option label="PUT" value="neimeng"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" size="small ">
          <el-select v-model="formType.regions" placeholder="状态" label-width="20px">
            <el-option label="提交" value="shanghai"></el-option>
            <el-option label="未提交" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="deletes" size="small">删除</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="con">
      <template>
        <el-table :data="tableData" :header-cell-style="{background:'#CCCCCC'}" border style="width: 100%">
          <el-table-column prop="id" label="ID" align="center" width="80"></el-table-column>
          <el-table-column prop="name" label="服务名称" align="center"></el-table-column>
          <el-table-column prop="type" label="类型" align="center" width="100"></el-table-column>
          <el-table-column prop="ip" label="IP" align="center"></el-table-column>
          <el-table-column prop="dk" label="端口" align="center" width="80"></el-table-column>
          <el-table-column prop="xy" label="协议" align="center" width="80"></el-table-column>
          <el-table-column prop="url" label="接口地址" align="center" width="150"></el-table-column>
          <el-table-column prop="flag" label="状态" align="center" width="100"></el-table-column>
          <el-table-column prop="dateNum" label="创建时间" align="center" width="150"></el-table-column>
          <el-table-column prop="k" label="查看"  align="center">
            <template slot-scope="scope">
              <span class="ri">配置</span>
              <span class="ri">启动</span>
              <span class="ri">停止</span>
              <span class="ri" @click="del(scope.id)">删除</span>
              <span class="ri">评价</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      formType: {
        user: "",
        region: "",
        regions: "",
      },
      //表格数据
      tableData: [
        {
          id: 1,
          url: "/getuserdata",
          name: "获取用户基础数据",
          type: "GET",
          ip: "192.158.0.1",
          dk: "80",
          xy: "http",
          flag: "提交",
          dateNum: "2020-08-31",
        },
        {
          id: 2,
          url: "/getzbdata",
          name: "获取装备基础数据",
          type: "GET",
          ip: "192.158.0.1",
          dk: "80",
          xy: "http",
          flag: "停止",
          dateNum: "2020-08-31",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    deletes() {
      console.log("删除方法");
    },
    //表格里面删除
    del(i){
        this.tableData.splice(i,1)
    }
  },
};
</script>
<style lang="scss" scoped>
.check {
  width: 100%;
  height: 100%;
     .ri{
        margin-left: 30px;
        color: #3399CC;
        cursor: pointer;
    }
}
</style>
