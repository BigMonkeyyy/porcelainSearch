<template>
  <div class="searchInput">
   <div class="header">
      <el-input placeholder="搜索相关瓷器..." v-model="searchInput" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="瓷器类型" value="1"></el-option>
          <el-option label="朝代" value="2"></el-option>
          <el-option label="所在博物馆" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class SearchInput extends Vue {
  @Prop() searchInput!: string;
  @Prop() select!: string;
}
</script>

<style lang="less">
.searchInput {
  .header {
    border-bottom: 1px solid #dcdfe6;
    height: 80px;
    line-height: 80px;
    background: white;
    position: relative;
    .input-with-select {
      width: 90%;
      left: 5%;
      right: 5%;
    }
  }
}
</style>
