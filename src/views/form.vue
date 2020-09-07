<template>
  <div class="form">
    <el-row :gutter="20" style="border;1px solid #ccc;width:100%;height:100%;display:flex;">
        <el-col :span="4" style="border:1px solid #ccc;width:(100%- 10px);height:100%;margin-right:10px;padding-top:10px;">
            <el-select v-model="value" placeholder="请选择关系库" style="width:100%" @change="handleChange">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-tree :data="data" :props="defaultProps"  @node-drag-end="allowDrop" :draggable="true"></el-tree>
        </el-col>
        <el-col :span="20">
            <el-card shadow="never" style="border:1px solid #ccc;height:calc(50% - 2px);overflow: auto;" v-if="list.length>0">
                <el-card shadow="hover" class="win" v-for='(item,index) in list' :key="index" :class="{'active':isActive==index}" @click="onwin(index)">
                    <div style="display:flex;justify-content: space-between;padding:10px;border-bottom:1px solid #ccc">
                        <span style="margin-left:10px;">{{item.name}}</span>
                        <i class="el-icon-close" style="cursor: pointer;font-size:20px;;" @click="delet(item,index)"></i>  
                    </div>
                    <div style="height:200px;margin:10px 10px 10px 20px;overflow: auto;display: flex;flex-direction: column;">
                        <el-checkbox v-for='(t,i) in item.num' :key="i" v-model="t.checked" @change="checkChang(item,i)" style="margin:10px 0;">{{t.label}}</el-checkbox>
                    </div>
                </el-card>
            </el-card>
            <el-card shadow="never" style="display: flex;justify-content:center;align-items:center;border:1px solid #ccc;height:calc(50% - 2px);"  v-if="list.length==0">暂无数据</el-card>
            <div style="border:1px solid #ccc;height:calc(50% - 10px);margin-top:10px;box-sizing: border-box;padding:10px 30px 10px 5px;overflow: auto;">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="SELECT">
                        <el-input v-model="form.SELECT" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="FORM">
                        <el-input v-model="form.FORM" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="WHERE">
                        <el-input v-model="form.WHERE" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="GROUP BY">
                        <el-input v-model="form.GROUPBY" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="HAVING">
                        <el-input v-model="form.HAVING" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="ORDER BY">
                        <el-input v-model="form.ORDERBY" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="LIMIT">
                        <el-input v-model="form.LIMIT" :disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit" :disabled="list.length==0">确定</el-button>
                        <el-button :disabled="list.length==0">取消</el-button>
                    </el-form-item>
                </el-form>
                 
            </div>
        </el-col>
    </el-row>
    
  </div>
</template>
<script>
export default {
  name: 'form',
  data () {
    return {
        data: [],
        defaultProps: {
            children: 'children',
            label: 'label'
        },
        list:[],
        form: {
            SELECT: '',
            FORM: "",
            WHERE: '',
            GROUPBY: '',
            HAVING: '',
            ORDERBY: '',
            LIMIT: '',
        },
        isActive:'a',
        options:[{
            label:'原始库',
            value:'1'
        },{
            label:'集成库',
            value:'2'
        },{
            label:'主题库',
            value:'3'
        },],
        value:''
    }
  },
  mounted(){
    
  },
  methods: {
      //选择关系库
    handleChange(data){
        this.data = []
        this.list = []
        this.form ={
        SELECT: '',
            FORM: "",
            WHERE: '',
            GROUPBY: '',
            HAVING: '',
            ORDERBY: '',
            LIMIT: '',
        }
        if(data == 1){
            var obj = {
            label: '原始库',
            disabled:true,
            children: [{
                label: '表1',
                value:'1'
            },{
                label: '表2',
                value:'2'
            },{
                label: '表3',
                value:'3'
            },{
                label: '表4',
                value:'4'
            },{
                label: '表5',
                value:'5'
            },]
            }
            this.data.push(obj)
        }else if(data == 2){
            var obj = {
            label: '集成库',
            disabled:true,
            children: [{
                label: '表6',
                value:'6'
            },{
                label: '表7',
                value:'7'
            },{
                label: '表8',
                value:'8'
            },{
                label: '表9',
                value:'9'
            },{
                label: '表10',
                value:'10'
            },]
            }
            this.data.push(obj)
        }else if(data == 3){
            var obj = {
            label: '主题库',
            disabled:true,
            children: [{
                label: '表11',
                value:'11'
            },{
                label: '表12',
                value:'12'
            },{
                label: '表13',
                value:'13'
            },{
                label: '表14',
                value:'14'
            },{
                label: '表15',
                value:'15'
            },]
            }
            this.data.push(obj)
        }
    },
      //点击tree列表生成复选框
    // handleNodeClick(data) { 
    //     var val= this.random()  
    //     let obj = {
    //         name:data.label,
    //         value:data.value,
    //         num:[{
    //             label:'Id',
    //             value:val+1,
    //         },{
    //             label:'Type',
    //             value:val+2,
    //         },{
    //             label:'Name',
    //             value:val+3,
    //         },{
    //             label:'Age',
    //             value:val+4,
    //         },{
    //             label:'Adress',
    //             value:val+5,
    //         },{
    //             label:'Phone',
    //             value:val+6,
    //         }]
    //     }

    //     if(!data.children && this.list.length==0){   
    //         this.list.push(obj)   
    //     }else if(!data.children && this.list.length != 0){
    //         let arr = []
    //         let brr = this.list.map((item,index)=>{
    //             return item.name
    //         })
    //         if(brr.includes(data.label)){       
                
    //             this.$message.error(data.label+'已存在'); 
    //         }else{
    //             this.list.push(obj)
    //         }
    //     }      
    // },
    //拖拽
    allowDrop(data){
        console.log(data)
        var val= this.random()  
        let obj = {
            name:data.data.label,
            value:data.data.value,
            num:[{
                label:'Id',
                value:val+1,
            },{
                label:'Type',
                value:val+2,
            },{
                label:'Name',
                value:val+3,
            },{
                label:'Age',
                value:val+4,
            },{
                label:'Adress',
                value:val+5,
            },{
                label:'Phone',
                value:val+6,
            }]
        }

        if(!data.data.children && this.list.length==0){   
            this.list.push(obj)   
        }else if(!data.data.children && this.list.length != 0){
            let arr = []
            let brr = this.list.map((item,index)=>{
                return item.name
            })
            if(brr.includes(data.data.label)){       
                
                this.$message.error(data.data.label+'已存在'); 
            }else{
                this.list.push(obj)
            }
        }      
    },

    //随机数
    random(){
        return parseInt(Math.random()*100,10)+1
    },
    //删除
    delet(data,index){
        //删除FORM
        this.form.FORM = this.form.FORM.split(',')
        for(var j=0;j<this.form.FORM.length;j++){
            if(this.list[index].name == this.form.FORM[j]){
                this.form.FORM.splice(j,1)
                j--;
            }
        }
        this.form.FORM = this.form.FORM.join(',')
        //删除SELECT
        this.form.SELECT = this.form.SELECT.split(',')
        for(var j=0;j<this.form.SELECT.length;j++){
            console.log(this.list[index].name,this.form.SELECT[j])
            if(this.form.SELECT[j].includes(this.list[index].name)){
                this.form.SELECT.splice(j,1)
                j--;
            }
        }
        this.form.SELECT = this.form.SELECT.join(',')

        this.list.splice(index,1)
        //清空表单
        if(this.list.length == 0){
            this.form ={
            SELECT: '',
                FORM: "",
                WHERE: '',
                GROUPBY: '',
                HAVING: '',
                ORDERBY: '',
                LIMIT: '',
            }
        }
    },
    onwin(index){
        //this.isActive = index
    },
    //选择复选框加入表单列表
    checkChang(data,i){
        // console.log(data)
        // console.log(data.num[i])
        if(data.num[i].checked == true){
            this.form.SELECT += (data.name +'.' + data.num[i].label +',')
            this.form.FORM += (data.name +',').toString()
            this.form.FORM = this.form.FORM.split(',')
            this.form.FORM = this.quchongarr(this.form.FORM) 
            this.form.FORM = this.form.FORM.join(',')
        }else{
            this.form.SELECT = this.form.SELECT.replace(data.name +'.' + data.num[i].label +',',"")
            this.form.SELECT == ''?this.form.FORM = '':this.form.FORM
        }
        
    },
    //数组去重
    quchongarr(arr){
        return [...new Set(arr)]
    },
    //确定
    onSubmit() {
        
    }
  }
}
</script>
<style lang="scss" scoped>
.form{
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height:100%
}
.win{
    border: 1px solid #ccc;
    width:284px;
    height:284px;
    float: left;
    margin:6px;
}
.el-form-item {
    margin-bottom: 12px;
}
.active{
    border:1px solid yellow;
}

</style>
<style>
.el-tree-node__expand-icon.expanded {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.el-tree .el-icon-caret-right:before {
  content: "\e748";
  font-size: 18px;
  /* color:yellowgreen */
}
.el-card__body{
    padding:0;
}

</style>