<template>
  <div class="porcelainItem">
    <el-card :body-style="{ padding: '10px' }">
      <el-row>
        <el-col :span="4">
          <el-image
            style="width: 140%;"
            :src="dataItem.imageUrl"
            :preview-src-list="[dataItem.imageUrl]"
            lazy>
            <div slot="placeholder" class="image-slot" style="color: #999">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
          <el-image
            style="width: 140%; height: 140%; margin-top: -40%; margin-left: 60%;"
            :src="dataItem.featureUrl"
            :preview-src-list="[dataItem.featureUrl]"
            lazy>
            <div slot="placeholder" class="image-slot" style="color: #999">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </el-col>
        <el-col :span="18">
          <div class="info-wrapper">
            <section class="info-item"><b>朝代</b> <span class="content">{{dataItem.historicalPeriod == 'None' ? '未知' : dataItem.historicalPeriod}}</span></section>
            <section class="info-item"><b>类型</b> <span class="content">{{dataItem.type}}</span></section>
            <section class="info-item"><b>所在博物馆</b> <span class="content">{{dataItem.museum}}</span></section>
            <section class="info-item"><b>备注</b><br>
              <div style="margin-top:1rem;">
                <div class="content noteList" v-for="note in dataItem.ids" :key="note.id">
                  <span class="key">{{note.key}}:</span>{{note.val}}
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
import { Porcelain } from '../models/porcelainModel'
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
      margin-bottom: 12px;
      .content {
        margin-left: 1rem;
        margin-top: .8rem;
        color: #999;
        .key {
          color: #666;
        }
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
