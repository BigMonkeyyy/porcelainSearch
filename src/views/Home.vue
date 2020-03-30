<template>
<div class="home-wrapper">
  <el-backtop></el-backtop>
  <div class="home">
    <el-container class="container">
        <el-header class="header-wrapper">
          <div class="header">
            <bm-search-input />
          </div>
        </el-header>
      <el-main class="main infinite-list" style="overflow:auto">
        <bm-porcelain-item class="infinite-list-item"
                      v-for="porcelainItem in porcelainList"
                      :key="porcelainItem.id"
                      :dataItem="porcelainItem"
                      scroll-container=".main"
                      ></bm-porcelain-item>
      </el-main>
    </el-container>
    <el-divider v-if="noResult" content-position="center">到底啦！</el-divider>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import bmPorcelainItem from '../components/bm-porcelainItem.vue'
import bmSearchInput from '../components/bm-searchInput.vue'
import { Porcelain, PorcelainModel } from '../models/porcelainModel'
import { loginVM, API } from '../request/api'
const api = new API()
const porcelainModel = new PorcelainModel()
 @Component({
   components: {
     bmPorcelainItem,
     bmSearchInput
   }
 })
export default class Home extends Vue {
  @Action('setToken') setToken: any;
  count: number = 10;
  noResult: Boolean = false;
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

  mounted () {
    // 获取token
    api.getToken(this.loginVMParam).then((res: any) => {
      // console.log('token:::', res)
      // 将token存入vuex
      const token = res.id_token
      this.setToken(token)
      localStorage.setItem('token', token)
      // 获取首次十条数据
      porcelainModel.getFirstPorcelainList((res: any) => {
        this.porcelainList = res
      })
    })
    // 监听触底函数
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // console.log(scrollTop, clientHeight, scrollHeight)
      if (scrollTop + clientHeight + 10 >= scrollHeight) {
        this._loadMore()
      }
    })
  }
  // 到底触发
  private _loadMore () {
    // console.log(111)
    if (this.noResult) return // 数据全部加载完毕
    porcelainModel.getOtherPorcelainList((res: any) => {
      if (res.length > 0) {
        this.porcelainList = this.porcelainList.concat(res)
        this.count += 2
      } else {
        this.noResult = true
      }
    }, this.count)
    console.log(this.porcelainList)
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
  }
  .main {
    width: 95%;
    margin:  100px auto;
    overflow: scroll;
  }
}
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
