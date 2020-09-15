<template>
  <div class="select">
    <div class="foot">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="服务器">
          <el-input v-model="formInline.user" placeholder="关键字查询"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Search">查询</el-button>
          <el-button type="primary" >添加规则</el-button>
        </el-form-item>
      </el-form>
    </div>

     <!-- 搜索后的 -->
     <div class="con" v-if="searchData.length>0">
      <template>
        <el-table :header-cell-style="{background:'#CCCCCC'}" :data="searchData" border style="width: 100%">
          <el-table-column type="selection" width="100" align="center" :selectable='checkbox_callback'>
               <!-- <el-checkbox v-model="check"></el-checkbox> -->
          </el-table-column>
          <el-table-column prop="id" label="编号" align="center" ></el-table-column>
          <el-table-column prop="name" label="规则" align="center"></el-table-column>
           <el-table-column prop="ip" label="服务器IP" align="center"></el-table-column>
          <el-table-column prop="address" label="操作系统" align="center"></el-table-column>
          <el-table-column prop="url" label="内存" align="center"></el-table-column>
           <el-table-column prop="dateNum" label="CPU" align="center" ></el-table-column>
           <el-table-column prop="dateNums" label="磁盘" align="center" ></el-table-column>   
          <el-table-column prop="k" label="查看" align="center">
            <el-button>编辑</el-button>
            <el-button>详情</el-button>
          </el-table-column>
        </el-table>
      </template>
    </div>


    <!-- 搜索前的 -->
    <div class="con" v-else>
     <template>
        <el-table :header-cell-style="{background:'#CCCCCC'}" :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="100" align="center" :selectable='checkbox_callback'>
               <!-- <el-checkbox v-model="check"></el-checkbox> -->
          </el-table-column>
          <el-table-column prop="id" label="编号" align="center" ></el-table-column>
          <el-table-column prop="name" label="规则" align="center"></el-table-column>
           <el-table-column prop="ip" label="服务器IP" align="center"></el-table-column>
          <el-table-column prop="address" label="操作系统" align="center"></el-table-column>
          <el-table-column prop="url" label="内存" align="center"></el-table-column>
           <el-table-column prop="dateNum" label="CPU" align="center" ></el-table-column>
           <el-table-column prop="dateNums" label="磁盘" align="center" ></el-table-column>   
          <el-table-column prop="k" label="查看" align="center">
            <el-button>编辑</el-button>
            <el-button>详情</el-button>
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
      //最上面搜索用的
      formInline: {
        user: "",
        region: "",
      },
      //表格数据
       tableData: [{
          id:1,
          url: '60%',
          name: '正常',
          ip:'10.0.0.1',
          address: 'centos',
          dateNum:'90%',
          check:false,
          dateNums:'50%'
        }, {
           id:2,
          url: '60%',
          name: '警告',
           ip:'10.0.0.2',
          address: 'centos',
          dateNum:'90%',
          check:false,
           dateNums:'70%'
        }, {
          id:3,
          url: '60%',
          name: '严重',
           ip:'10.0.0.3',
          address: 'centos',
          dateNum:'90%',
          check:false,
           dateNums:'90%'
        }],
         // 搜索后的展示数据
           searchData: []
    };
  },
  created() {},
  computed: {},
  methods: {
     checkbox_callback:function(row,index){//初始化加载数据时，如果数据中包含status属性，并且status为'1'则该行不能被选中
                if (row.status == 1) {
                    return false
                }else{
                    return true
                }
            },
    Search() {
      // search 是 v-model="search" 的 search
      
      var search = this.formInline.user;
      console.log(search)
      if (search) {
        this.searchData = this.tableData.filter(function(product) {
          // 每一项数据
          // console.log(product)
          return Object.keys(product).some(function(key) {
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
      }else if(search.length == 0){
        this.searchData = this.tableData
      }
      else{
         console.log("消息提示")
         this.$message('这是一条消息提示');
      }
    }
  
  },
};
</script>
<style lang="scss" scoped>
.select{
  width: 100%;
  height: 100%;
}
</style>
