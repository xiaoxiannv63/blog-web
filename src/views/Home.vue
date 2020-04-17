<template>
<el-container>
  <Head/>
  <el-container>
    <Aside/>
    <el-main>
      main
    </el-main>
  </el-container>
  <Footer/>
</el-container>
</template>

<script>
import Head from '_c/Head.vue'
import Aside from '_c/Aside.vue'
import Footer from '_c/Footer.vue'

export default {
  name: 'Home',
  components: {
    Head,
    Aside,
    Footer
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>
<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>