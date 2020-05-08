<template>
         <!-- 底部导航 -->
    <div class="footerNav">
      <div class="item" :class="{active:$route.path===`/index`}"  @click="goto(`/index`)">
        <i class="iconfont icon-shouye"></i>
        <div class="text">首页</div>
      </div>
      <div class="item" :class="{active:$route.path===`/category`}" @click="goto(`/category`)">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
        <div class="text">分类</div>
      </div>
      <div class="item" :class="{active:$route.path===`/worthBuy`}" @click="goto(`/worthBuy`)">
        <i class="iconfont icon-goumai"></i>
        <div class="text">值得买</div>
      </div>
      <div class="item" :class="{active:$route.path===`/cart`}" @click="goto(`/cart`)">
        <i class="iconfont icon-gouwuche"></i>
        <div class="text">购物车</div>
      </div>
      <div class="item" :class="{active:$route.path===`/personal`}" @click="goto(`/personal`)">
        <i class="iconfont icon-geren"></i>
        <div class="text">个人</div>
      </div>
    </div>
</template>

<script>
export default {
 name:"TabBar",
  methods:{
      goto(path){
    this.$router.replace(path)
    }
  },
}
</script>

<style lang="stylus" scoped>
.footerNav
  display flex 
  justify-content space-around         
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  background white
  // background rgba(0,0,0,.5)
  border-top 1px solid #ccc
  z-index 6
  .item
    height 100px
    margin-top 15px
    &.active
      color red
    .iconfont
      display block
      font-size 40px
      margin-bottom 5px
      text-align center
</style>