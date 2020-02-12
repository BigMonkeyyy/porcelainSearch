<template>
  <div class="porcelainItem">
    <el-card :body-style="{ padding: '10px' }">
      <el-row>
        <el-col :span="4">
          <el-image
            style="width: 140%;"
            :src="dataItem.imageUrl"
            :preview-src-list="[dataItem.imageUrl]">
          </el-image>
          <el-image
            style="width: 140%; height: 140%; margin-top: -40%; margin-left: 60%;"
            :src="dataItem.featureUrl"
            :preview-src-list="[dataItem.featureUrl]">
          </el-image>
        </el-col>
        <el-col :span="18">
          <div class="info-wrapper">
            <section class="info-item">朝代 <div class="content">{{dataItem.historicalPeriod || '未知'}}</div></section>
            <section class="info-item">类型 <div class="content">{{dataItem.type}}</div></section>
            <section class="info-item">所在博物馆 <div class="content">{{dataItem.museum}}</div></section>
            <section class="info-item">备注<br>
              <div style="margin-top:1rem;">
                <div class="content noteList" v-for="note in dataItem.ids" :key="note.id">
                  {{note.key}}:{{note.val}}
                </div>
              </div>
            </section>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Porcelain } from '../datatype/porcelainType'
@Component
export default class PorcelainItem extends Vue {
  @Prop() dataItem!: Porcelain;
}
</script>

<style lang="less">
.porcelainItem {
  margin-bottom: 2%;
  .info-wrapper {
    padding-left: 18%;
    .info-item {
      margin-bottom: 20px;
      .content {
        margin-left: 2rem;
        margin-top: 1rem;
        color: #999;
      }
      pre{
        font-family: "Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
        font-size: 1rem;
        line-height: 1.5rem;
        white-space: pre-wrap!important;
        word-wrap: break-word!important;
        *white-space:normal!important;
      }
      .noteList {
        line-height: 1.2rem;
        margin-top: .6rem;
      }
    }
  }
}

</style>
