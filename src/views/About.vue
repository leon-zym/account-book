<template>
  <div class="about">
    <Header title='关于' />
    <van-divider
      content-position="left"
      :style="{ color: '#39be77', borderColor: '#39be77', padding: '0 16px' }"
    >
      关于
    </van-divider>
    <div class="content">
      大家好，我是Leon，学过建筑，喜欢摄影，正在学习前端开发~
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'About',
  components: {
    Header
  }
}
</script>

<style lang="less">
  .about {
    .content {
      padding: 0 16px;
      font-size: 14px;
      color: rgba(0, 0, 0, .5);
      line-height: 24px;
      p {
        margin-bottom: 10px;
      }
    }
  }
</style>