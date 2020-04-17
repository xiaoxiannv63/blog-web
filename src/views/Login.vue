<template>
  <div class="login">
    <el-form :model="formInline">
      <el-form-item label="用户名">
        <el-input v-model="formInline.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formInline.password" password placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="goLogin">登录</el-button>
        <el-button type="primary" @click="goRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      formInline:{
        username:'',
        password:''
      }
    }
  },
  methods: {
    goLogin(){
      let {username,password} = this.formInline
      this.$store.dispatch('handleLogin',{username,password}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    goRegister(){
      
    }
  },
}
</script>
<style lang="scss" scoped>
  .login{
    width:30%;
    margin:auto;
    margin-top:300px;
  }
</style>