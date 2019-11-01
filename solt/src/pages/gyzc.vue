<template>
  <v-container fill-height fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="content">
          <!-- 大屏背景 -->
          <div class="left_top"></div>
          <div class="right_top"></div>
          <div class="left_bottom"></div>
          <div class="right_bottom"></div>
          <div class="left"></div>
          <div class="right"></div>

          <router-view />

          <!-- 菜单 -->
          <div class="menu">
            <div class="menu_box">
              <router-link
                class="text"
                v-for="(item, index) in menuarr"
                :key="index"
                :class="{'current': isCurrentRoute(item.routeName)}"
                :to="{ name: item.routeName }"
              >
                {{item.name}}
                <span v-if="index!==menuarr.length-1">|</span>
              </router-link>
            </div>
            <div class="menu_line"></div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import services from "@/services";

export default {
  name: "gyzc", // 国有资产
  data() {
    return {
      menuarr: [
        {
          name: "国资主页",
          routeName: "gyzc.zy"
        },
        {
          name: "比较分析",
          routeName: "gyzc.bjfx"
        },
        {
          name: "资产画像",
          routeName: "gyzc.zchx"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    init() {},
    isCurrentRoute(routeName) {
      if (routeName === "gyzc.zy") {
        return (
          this.$route.name === "gyzc.zy" ||
          this.$route.name === "gyzc.zl" ||
          this.$route.name === "gyzc.fw" ||
          this.$route.name === "gyzc.fj"
        );
      }
      return routeName === this.$route.name;
    }
  },
  mounted() {
    // this.init();
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 500px;
  padding: 40px 20px;
  position: relative;
}
.left_top {
  height: 114px;
  width: 490px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-image: url("../assets/images/frame_left_top.png");
  background-size: 100%;
}
.right_top {
  height: 114px;
  width: 490px;
  position: absolute;
  top: 0px;
  right: 0px;
  background-image: url("../assets/images/frame_right_top.png");
  background-size: 100%;
}
.left_bottom {
  height: 100px;
  width: 618px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-image: url("../assets/images/frame_left_bottom.png");
  background-size: contain;
}
.right_bottom {
  height: 100px;
  width: 618px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-image: url("../assets/images/frame_right_bottom.png");
  background-size: 100%;
}
.left {
  position: absolute;
  width: 10px;
  height: calc(100% - 40px);
  top: 20px;
  left: 0px;
  background-size: cover;
  background-image: url("../assets/images/frame_left.png");
}
.right {
  position: absolute;
  width: 10px;
  height: calc(100% - 40px);
  top: 20px;
  right: 0px;
  background-size: cover;
  background-image: url("../assets/images/frame_right.png");
  background-position: top right;
}
.menu {
  width: calc(100% - 980px);
  height: 42px;
  position: absolute;
  top: -21px;
  left: 490px;
}
.menu_line {
  width: 100%;
  position: absolute;
  height: 1px;
  border-top: 1px solid #07437a;
  top: 21px;
  left: 0px;
}
.menu_box {
  height: 42px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.menu_box .text {
  width: 118px;
  float: left;
  height: 42px;
  line-height: 42px;
  position: relative;
  text-align: center;
  border: 1px solid #0081cb;
  color: #015185;
  background-color: #022a41;
  border-left: 0px;
  cursor: pointer;
  border-right: 0px;
  background-size: cover;
}
.menu_box .text.current {
  color: #0092b1;
}
.menu_box .text:nth-of-type(1) {
  border-left: 1px solid #0081cb;
}
.menu_box .text:nth-last-of-type(1) {
  border-right: 1px solid #0081cb;
}
.menu_box .text span {
  color: #0081cb;
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
