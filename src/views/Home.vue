<template>
<div class="home-wrapper">
  <div class="home">
    <el-container class="container">
        <el-header class="header-wrapper">
          <div class="header">
            <bm-search-input />
          </div>
        </el-header>
      <el-main class="main" v-infinite-scroll="load" style="overflow:auto">
        <bm-porcelain-item v-for="porcelainItem in porcelainList"
                        :key="porcelainItem.id"
                        :dataItem = porcelainItem
                        ></bm-porcelain-item>
      </el-main>
    </el-container>
  </div>
  <el-backtop target=".home .container"></el-backtop>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import bmPorcelainItem from '../components/bm-porcelainItem.vue'
import bmSearchInput from '../components/bm-searchInput.vue'
import { Porcelain, PorcelainModel } from '../models/porcelainModel'
import { loginVM, API } from '../request/api'
 @Component({
   components: {
     bmPorcelainItem,
     bmSearchInput
   }
 })
export default class Home extends Vue {
  @Action('setToken') setToken: any;
  count: number = 0;
  // 搜索框相关数据
 searchInput:String = '';
 select:String = '';
 // 瓷器列表
 porcelainList:Array<Porcelain> = [{
   id: 0,
   imageUrl: '',
   historicalPeriod: '',
   type: '',
   museum: '',
   featureUrl: '' }];
 // loginVM参数
loginVMParam: loginVM = {
  password: 'admin',
  rememberMe: true,
  username: 'admin'
};

load () {
  this.count += 2
}

mounted () {
  const api = new API()
  const porcelainModel = new PorcelainModel()
  // 获取token
  api.getToken(this.loginVMParam).then((res: any) => {
    console.log('token:::', res)
    // 将token存入vuex
    const token = res.id_token
    this.setToken(token)
    localStorage.setItem('token', token)
    // 获取所有瓷器列表
    porcelainModel.getPorcelainList((res: any) => {
      this.porcelainList = res
    })
  })
}
}
</script>

<style lang="less">
html, body{
  margin: 0;
  padding: 0;
}
.home {
  margin: 0 auto;
  .header-wrapper {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 0;
    //  .header {
    //   border-bottom: 1px solid #dcdfe6;
    //   height: 80px;
    //   line-height: 80px;
    //   background: white;
    //   position: relative;
    //   .input-with-select {
    //     width: 90%;
    //     left: 5%;
    //     right: 5%;
    //   }
    // }
  }
  .main {
    width: 95%;
    margin:  100px auto;
  }
}
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
