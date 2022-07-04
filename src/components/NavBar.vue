<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="/home" icon="notes-o" @click="link('/home')"
      >明细</van-tabbar-item
    >
    <van-tabbar-item name="/data" icon="bar-chart-o" @click="link('/data')"
      >统计</van-tabbar-item
    >
    <van-tabbar-item name="/user" icon="user-o" @click="link('/user')"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
// 先引入后使用
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NavBar',
  setup() {
    // v-model默认绑定的是item的索引值，但若有name属性，则绑定的就是name的值了
    const active = ref('/home')
    const router = useRouter()

    const link = (path) => {
      router.push(path)
    }

    onMounted(() => {
      active.value = router.currentRoute.value.path
    })

    // 后置路由守卫
    router.afterEach(() => {
      active.value = router.currentRoute.value.path
    })

    return { active, link }
  },
}
</script>

<style></style>
