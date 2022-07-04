<template>
  <!-- 路由展示 -->
  <router-view></router-view>
  <NavBar v-if="isShow"></NavBar>
</template>

<script>
import NavBar from './components/NavBar'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const state = reactive({
      menu: ['/home', '/data', '/user'],
      isShow: false,
    })

    const router = useRouter()
    router.afterEach(() => {
      // 控制底部导航栏只在menu中包含的页面中展示
      state.isShow = state.menu.includes(router.currentRoute.value.path)
    })

    return { ...toRefs(state) }
  },
}
</script>

<style></style>
