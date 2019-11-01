import Vue from "vue";
import Router from "vue-router";

import Jsc from "@/pages/jsc"; // 驾驶舱
import Gyzc from "@/pages/gyzc"; // 国有资产
import gyzcZy from "@/pages/gyzcZy";
import gyzcZl from "@/pages/gyzcZl";
import gyzcFw from "@/pages/gyzcFw";
import gyzcFj from "@/pages/gyzcFj";
import gyzcBjfx from "@/pages/gyzcBjfx";
import gyzcZchx from "@/pages/gyzcZchx";
import Gwycyx from "@/pages/gwycyx"; // 公务用车运行
import Ggjgjn from "@/pages/ggjgjn"; // 公共机构节能
import Jgyxcb from "@/pages/jgyxcb"; // 机关运行成本

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/gyzc/gzzy"
    },
    {
      path: "/jsc",// 驾驶舱
      name: "jsc",
      component: Jsc,
      children: []
    },
    {
      path: "/gyzc",// 国有资产
      name: "gyzc",
      component: Gyzc,
      redirect: "/gyzc/gzzy",
      children: [
        {
          path: "/gyzc/gzzy", // 国资主页
          name: "gyzc.zy",
          component: gyzcZy
        },
        {
          path: "/gyzc/gzzl", // 国资主页 - 坐落
          name: "gyzc.zl",
          component: gyzcZl
        },
        {
          path: "/gyzc/gzfw", // 国资主页 - 房屋
          name: "gyzc.fw",
          component: gyzcFw
        },
        {
          path: "/gyzc/gzfj", // 国资主页 - 房间
          name: "gyzc.fj",
          component: gyzcFj
        },
        {
          path: "/gyzc/bjfx", // 比较分析
          name: "gyzc.bjfx",
          component: gyzcBjfx
        },
        {
          path: "/gyzc/zchx", // 资产画像
          name: "gyzc.zchx",
          component: gyzcZchx
        }
      ]
    },
    {
      path: "/gwycyx",// 公务用车运行
      name: "gwycyx",
      component: Gwycyx,
      children: []
    },
    {
      path: "/ggjgjn",// 公共机构节能
      name: "ggjgjn",
      component: Ggjgjn,
      children: []
    },
    {
      path: "/jgyxcb",// 机关运行成本
      name: "jgyxcb",
      component: Jgyxcb,
      children: []
    }
  ]
});
