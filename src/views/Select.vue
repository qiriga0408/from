<template>
  <div class="select">
    <div class="foot">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="服务名称">
          <el-input v-model="formInline.user" placeholder="关键字查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="con">
      <template>
        <el-table :header-cell-style="{background:'#CCCCCC'}" :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="180" align="center" :selectable='checkbox_callback'>
               <!-- <el-checkbox v-model="check"></el-checkbox> -->
          </el-table-column>
          <el-table-column prop="id" label="编号" align="center" ></el-table-column>
          <el-table-column prop="name" label="服务名称" align="center"></el-table-column>
           <el-table-column prop="url" label="URL" align="center"></el-table-column>
          <el-table-column prop="ip" label="IP" align="center"></el-table-column>
          <el-table-column prop="address" label="操作系统" align="center"></el-table-column>
           <el-table-column prop="dateNum" label="访问数" align="center" ></el-table-column>
          <el-table-column prop="k" label="查看" align="center">
            <el-button>详情</el-button>
          </el-table-column>
          
        </el-table>
      </template>
    </div>
  </div>
</template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      //表格数据
       tableData: [{
          id:1,
          url: '/getuserdata',
          name: '获取用户数据',
          ip:'10.0.0.1',
          address: 'centos',
          dateNum:'1211',
          check:false
        }, {
           id:2,
          url: '/getzbdata',
          name: '获取装备数据',
           ip:'10.0.0.2',
          address: 'centos',
          dateNum:'21111',
          check:false
        }, {
          id:3,
          url: '/getssdata',
          name: '获取设施数据',
           ip:'10.0.0.3',
          address: 'centos',
          dateNum:'11212',
          check:false
        }, {
          id:4,
          url: '/getgkdata',
          name: '获取港口数据',
           ip:'10.0.0.4',
          address: 'redhat',
          dateNum:'11311',
          check:false
        }],
    };
  },
  created() {},
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
.select{
  width: 100%;
  height: 100%;
}
</style>
