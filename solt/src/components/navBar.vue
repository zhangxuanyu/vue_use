<template>
  <header class="nav_bar">
    <div class="left_container"></div>
    <div class="center_container">
      <router-link
        class="nav_list"
        v-for="(item, index) in menuarr"
        :key="index"
        :class="{'current': $route.name.indexOf(item.routeName) > -1}"
        :to="{name: item.routeName}"
      >{{item.name}}</router-link>
    </div>
    <div class="right_container">
      <a class="btn_weather" href="void:javascript(0)"></a>
      <a class="btn_close" href="void:javascript(0)"></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "navBar", // 顶部导航模块
  components: {},
  data: () => ({
    menuarr: [
      {
        name: "驾驶舱",
        routeName: "jsc"
      },
      {
        name: "国有资产",
        routeName: "gyzc"
      },
      {
        name: "公务用车运行",
        routeName: "gwycyx"
      },
      {
        name: "公共机构节能",
        routeName: "ggjgjn"
      },
      {
        name: "机关运行成本",
        routeName: "jgyxcb"
      }
    ]
  }),
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.nav_bar {
  height: 110px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}
.nav_bar > div {
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.nav_bar > .left_container {
  width: 540px;
  flex-shrink: 0;
  background-image: url(../assets/images/headbg_left.png);
}
.nav_bar > .center_container {
  flex-grow: 1;
  background-image: url(../assets/images/headbg.png);
  background-repeat: repeat-x;
}
.nav_bar > .center_container .nav_list {
  width: calc(20% - 24px);
  max-width: 160px;
  height: 60px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/images/nav_normal.png);
  background-size: 100% 100%;
  margin-top: 15px;
  margin-left: 20px;
  font-size: 20px;
  color: #00d2ff;
  text-align: center;
}
.nav_bar > .center_container .nav_list.current {
  background-image: url(../assets/images/nav_click.png);
  color: #fff;
  font-weight: bold;
}
.nav_bar > .right_container {
  width: 226px;
  padding: 0 15px;
  box-sizing: border-box;
  justify-content: center;
  background-image: url(../assets/images/headbg_right.png);
  background-size: 100% 100%;
}
.nav_bar > .right_container a {
  width: 30px;
  height: 30px;
  margin: 15px 15px 0;
}
a.btn_weather {
  background-image: url(../assets/images/icon_weather.png);
}
a.btn_close {
  background-image: url(../assets/images/icon_close.png);
}
</style>