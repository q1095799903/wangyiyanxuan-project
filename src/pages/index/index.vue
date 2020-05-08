<template>
  <div class="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <img class="header-top" src="./images/header.webp" alt />
      <div class="header-bottom">
        <img
          class="logo"
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
          alt
        />
        <input type="text" placeholder="搜索商品,共26223款好物" />
        <i class="iconfont icon-search"></i>
        <van-button type="default">登录</van-button>
      </div>
    </div>

    <!-- 导航 -->
    <div class="nav" >
      <div class="navContent" ref="navContainer">
        <ul>
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>严选全球</li>
      </ul>
      </div>

      <i class="iconfont icon-xiala"></i>
    </div>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/01-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/02-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/03-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/04-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/05-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/06-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/07-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/08-img.webp" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 商品特性 -->
    <div class="feature">
     <div class="easyContainer" v-for="(item,index) in indexRecommendData.policyDescList"
     :key="index">
      <img class="easy" :src="item.icon" alt="">
      <span>{{item.desc}}</span>
     </div>
    </div>

    <!-- 分类区 -->
    <div class="categoryContent">
     <div class="categoryItem">
      <img class="pic" src="./images/01.png" alt="">
      <span class="text">新品首发</span>
     </div>
      <div class="categoryItem">
      <img class="pic" src="./images/02.png" alt="">
      <span class="text">居家生活</span>
     </div>
      <div class="categoryItem">
      <img class="pic" src="./images/03.png" alt="">
      <span class="text">服装鞋包</span>
     </div>
      <div class="categoryItem">
      <img class="pic" src="./images/04.png" alt="">
      <span class="text">美食酒水</span>
     </div>
      <div class="categoryItem">
      <img class="pic" src="./images/05.png" alt="">
      <span class="text">个护清洁</span>
     </div>
       <div class="categoryItem">
      <img class="pic" src="./images/06.png" alt="">
      <span class="text">母婴亲子</span>
     </div>
       <div class="categoryItem">
      <img class="pic" src="./images/07.png" alt="">
      <span class="text">运动旅行</span>
     </div>
       <div class="categoryItem">
      <img class="pic" src="./images/08.png" alt="">
      <span class="text">数码家电</span>
     </div>
       <div class="categoryItem">
      <img class="pic" src="./images/09.png" alt="">
      <span class="text">全球特色</span>
     </div>
       <div class="categoryItem">
      <img class="pic" src="./images/10.gif" alt="">
      <span class="text">好货抄底</span>
     </div>
    </div>

    <!-- 新用户专享口罩图片 -->
    <div class="newUserPic">
      <img src="./images/buy.gif" alt="">
    </div>

    <!-- 新人专享 -->
    <div class="newPersonContainer">
      <span class="title">—— 新人专享礼 ——</span>
      <div class="left">
       <span>新人专享礼包</span>
       <img src="./images/redPackage.png" alt="">
       <div class="rightArrow"></div>
      </div>
      <div class="right">
        <div class="right-top">
         <div class="soapTitle">
           <div class="title-t">福利社</div>
            <div class="title-b">今日特价</div>
         </div>
         <div class="disCount">
           <div class="line1">￥7.9</div>
           <div class="line2">￥9.9</div>
         </div>
         <img class="soapPic" src="./images/soap.webp" alt="">
        </div>
        <div class="right-bottom">
          <div class="washTitle">
            <div class="title-t">新人拼团</div>
            <div class="title-b">一元起包邮</div>
          </div>
          <div class="disCount">
           <div class="line1">￥2.9</div>
           <div class="line2">￥13.9</div>
         </div>
          <img class="washPic" src="./images/wash.webp" alt="">
        </div>
      </div>
    </div>
     
    <!-- 分界线 -->
    <div class="line"></div>

    <!-- 类目热销榜 -->
    <div class="hotListContainer">
      <div class="hotListName">类目热销榜</div>
      <div class="hotListContent">
        <div class="item-1">
          <span class="name-1">热销榜</span>
          <img class="pic-1" src="./images/hot01.webp" alt="">
        </div>
        <div class="item-2">
          <span class="name-2">好评榜</span>
          <img class="pic-2" src="./images/hot02.webp" alt="">
        </div>
        <div class="item-3">
          <span class="name-3">居家生活榜</span>
          <img class="pic-3" src="./images/hot07.webp" alt="">
        </div>
        <div class="item-4">
          <span class="name-3">美食酒水榜</span>
          <img class="pic-3" src="./images/hot04.webp" alt="">
        </div>
        <div class="item-5">
          <span class="name-3">数码家电榜</span>
          <img class="pic-3" src="./images/hot03.webp" alt="">
        </div>
        <div class="item-6">
          <span class="name-3">服饰鞋包榜</span>
          <img class="pic-3" src="./images/hot06.webp" alt="">
        </div>
        <div class="item-7">
          <span class="name-3">个护清洁榜</span>
          <img class="pic-3" src="./images/hot05.webp" alt="">
        </div>
        <div class="item-8">
          <span class="name-3">严选全球榜</span>
          <img class="pic-3" src="./images/hot08.webp" alt="">
        </div>
        <div class="item-9">
          <span class="name-3">母婴亲子榜</span>
          <img class="pic-3" src="./images/hot09.webp" alt="">
        </div>
        <div class="item-10">
          <span class="name-3">运动旅行榜</span>
          <img class="pic-3" src="./images/hot10.webp" alt="">
        </div>
      </div>
    </div>





  </div>
</template>

<script>
import { Button } from "vant";
import Swiper from "swiper";
import BScroll from "better-scroll";
import {mapActions,mapState} from 'vuex'
export default {
  name: "index",
  computed:{
  ...mapState(['indexRecommendData'])
  },
  components: {
    [Button.name]: Button
  },
  async mounted() {
    
   await this.getIndexRecommendData()

    //轮播
    this.loop();
    //nav横向滑动
    this.sildeX();
  },
  methods: {
    //
    ...mapActions(['getIndexRecommendData']),

    loop() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    },
    sildeX() {
      this.$nextTick(() => {
        // console.log(this.$refs.navContainer);
       new BScroll(this.$refs.navContainer,{scrollX:true});
      });
    },
  
  }
};
</script>

<style lang="stylus" scoped>
.indexContainer
  position relative
  width: 100%
  height: 100%
  overflow: hidden
  .header
    width: 100%
    .header-top 
      width: 100%
      height: 100%
    .header-bottom 
      position: relative
      width: 100%
      height: 60px
      display: flex
      justify-content: space-around
      margin: 5px 0 10px
      .logo
        width: 140px
        height: 40px
        margin-top: 10px
      input
        width: 60%
        height: 60px
        background: #eee
        &::placeholder
          text-align: center
      .icon-search
        position: absolute
        left: 220px
        top: 15px
        font-size: 36px
      button
        border: 2px solid red
        color: red
        margin-top: 10px
        border-radius: 2px
  .nav
    display flex
    width: 100%
    height: 70px
    .navContent
      width 600px
      height 70px
      display flex
      overflow hidden
      ul
        display: flex
        height: 70px
        width 1350px
        li
          width: 150px
          height: 70px
          margin: 0 10px
          font-size: 28px
          white-space: nowrap
          line-height: 50px
          text-align: center
          margin: 0 10px
          &:nth-of-type(1)
            color: red
    .iconfont
      display: block
      width: 100px
      height: 70px
      line-height: 70px
      text-align: right
      font-size: 44px
  .swiper-container
    width: 100%
    height: 340px
    .swiper-wrapper
      width: 100%
      height: 340px
      .swiper-slide
        width: 100%
        height: 340px
        img
          width: 100%
          height: 100%
  .feature
    display flex
    justify-content space-around
    width 100%
    height 50px
    margin 10px 0
    div
      display flex
      align-items center
      img
        width 30px
        height 30px  
      span
        margin-left 5px 
  .categoryContent
    display flex
    flex-wrap wrap
    justify-content space-around
    width 100%
    .categoryItem
      width 18%
      display flex
      flex-direction column
      .pic
        width 100% 
      .text
        text-align center
        margin-top 10px
  .newUserPic
    width 100%
    img
      width 100% 
      margin-top 25px
  .newPersonContainer
    margin 20px
    width 95%
    height 440px
    overflow hidden
    .title
      display block
      text-align center 
      font-size 36px 
      margin-bottom 10px
    .left
      position relative
      float left
      width 49%
      height 440px
      background #F9E9CF
      span
        display block
        font-size 36px
        margin 30px 0 18px 20px
      img
        display block
        width 75%
        margin 0 auto  
      .rightArrow
        position absolute 
        background-image url('./images/rightArrow.webp')
        background-size cover
        width 30px
        height 20px
        left 210px
        bottom 115px 
    .right
      float right
      width 49%
      height 440px
      .right-top
        position relative
        height 195px
        margin-bottom 10px
        background #FBE2D3
        overflow hidden
        .soapTitle
          font-size 30px
          margin 20px 0 0 20px
          .title-b
            color #7F7F7F
            margin-top 10px
            font-size 26px
        .soapPic
          position absolute
          right 0
          bottom 0
          width 180px
          height 180px 
        .disCount
          position absolute
          top 20px
          right 20px
          width 80px
          height 80px
          border-radius 50%
          background #F59524
          text-align center
          color white
          z-index 1
          .line1
            margin 10px 0 
          .line2
            text-decoration line-through         
      .right-bottom
        position relative
        height 195px
        background #FFECC2 
        overflow hidden
        .washTitle
          font-size 30px
          margin 20px 0 0 20px 
          .title-b
            display inline-block
            color #fff
            background #CBB693
            margin-top 10px
            font-size 26px
            padding 5px 
        .washPic
          position absolute
          right 0
          bottom 0
          width 180px
          height 180px 
        .disCount
          position absolute
          top 20px
          right 20px
          width 80px
          height 80px
          border-radius 50%
          background #F59524
          text-align center
          color white
          z-index 1
          .line1
            margin 10px 0 
          .line2
            text-decoration line-through
  .line
    width 100%
    height 20px
    background #eee          
  .hotListContainer
    overflow hidden
    margin 0 20px
    width 95%
    height 650px
    // background green
    .hotListName
      height 50px
      margin 20px 0 0 10px
      font-size 32px
    .hotListContent 
      display flex
      flex-wrap wrap
      justify-content space-between
      width 100%
      height 550px
      // background red
      div
        position relative
        height 32%
        width 24%
        background #F5F5F5
        span 
          display block
          font-size 28px
          margin 20px auto
          text-align center
        img 
          position absolute
          top 60px
          right 30px
          width 120px
          height 120px   
      .item-1
        position relative
        width 49%
        height 32%
        background #F9F3E4
        .name-1
          position relative
          text-align left
          display block
          font-size 30px
          margin 40px 0 0 20px
          &:after
            position absolute
            left 0
            bottom -20px
            content ""
            width 60px
            height 5px
            background #333
        .pic-1
          position absolute
          top 10px
          right 30px
          width 170px
          height 170px  
      .item-2
        position relative
        width 49% 
        height 32%
        background #EBEFF6 
        .name-2
          position relative
          text-align left
          display block
          font-size 30px
          margin 40px 0 0 20px
          &:after
            position absolute
            left 0
            bottom -20px
            content ""
            width 60px
            height 5px
            background #333
        .pic-2
          position absolute
          top 10px
          right 30px
          width 170px
          height 170px
  

                                  
</style>