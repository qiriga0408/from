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
    <div class="con">下面内容</div>
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
</style>
