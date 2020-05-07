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
    <div class="nav" ref="navContainer">
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
  </div>
</template>

<script>
import { Button } from "vant";
import Swiper from "swiper";
import BScroll from "better-scroll";
export default {
  name: "index",
  components: {
    [Button.name]: Button
  },
  mounted() {
    //轮播
    this.loop();
    //nav横向滑动
    this.sildeX();
       let BScrollNav=new BScroll(this.$refs.navContainer);
  },
  methods: {
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
        console.log(this.$refs.navContainer);
        let BScrollNav=new BScroll(this.$refs.navContainer,{scrollX:true});
        console.log(BScrollNav)
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.indexContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .header {
    width: 100%;

    .header-top {
      width: 100%;
      height: 100%;
    }

    .header-bottom {
      position: relative;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-around;
      margin: 5px 0 10px;

      .logo {
        width: 140px;
        height: 40px;
        margin-top: 10px;
      }

      input {
        width: 60%;
        height: 60px;
        background: #eee;

        &::placeholder {
          text-align: center;
        }
      }

      .icon-search {
        position: absolute;
        left: 220px;
        top: 15px;
        font-size: 36px;
      }

      button {
        border: 2px solid red;
        color: red;
        margin-top: 10px;
        border-radius: 2px;
      }
    }
  }

  .nav {
    width: 100%;
    height: 70px;
    display: flex;

    ul {
      display: flex;
      height: 70px;

      li {
        width: 150px;
        height: 70px;
        margin: 0 10px;
        font-size: 28px;
        white-space: nowrap;
        line-height: 50px;
        text-align: center;
        margin: 0 10px;

        &:nth-of-type(1) {
          color: red;
        }
      }
    }

    .icon-xiala {
      display: block;
      width: 100px;
      height: 50px;
      line-height: 50px;
      text-align: right;
      font-size: 44px;
    }
  }

  .swiper-container {
    width: 100%;
    height: 340px;

    .swiper-wrapper {
      width: 100%;
      height: 340px;

      .swiper-slide {
        width: 100%;
        height: 340px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>