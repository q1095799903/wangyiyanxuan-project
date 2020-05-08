<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-show="$route.meta.showFooter"></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components:{
   TabBar
  }
  

}
</script>
<style lang="stylus" scoped>
 #app
   width 100%
   
   

</style>
