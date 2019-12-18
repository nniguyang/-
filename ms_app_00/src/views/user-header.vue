<template>
  <!-- 用户个人信息 -->
  <div id="my-header">
    <!--搜索框-->
    <div class="search">
      <div>
        <svg
          viewBox="0 0 1000 1000"
          role="img"
          aria-label="房源"
          focusable="false"
          style="height: 32px; width: 32px; display: block; fill:red;"
        >
          <path
            d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
          ></path>
        </svg>
      </div>
      <el-input class="aaa" placeholder="任何目的地" v-model="input" clearable @change="search"></el-input>
    </div>
    <!--导航-->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">人民币-￥</template>
        <el-menu-item index="1-1">美元-$</el-menu-item>
        <el-menu-item index="1-2">日元-￥</el-menu-item>
        <el-menu-item index="1-3">英镑-￥</el-menu-item>
        <el-menu-item index="1-3">英镑-￥</el-menu-item>
        <el-menu-item index="1-3">英镑-￥</el-menu-item>
        <el-menu-item index="1-3">英镑-￥</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">手机端</template>
        <el-menu-item index="2-1">
          <img class="my-img" src="http://127.0.0.1:3000/img/img-index/kehuduan.png" alt>
          <img class="my-img" src="http://127.0.0.1:3000/img/img-index/weixin.png" alt>
          <img class="my-img" src="http://127.0.0.1:3000/img/img-index/xiaochengxu.jpg" alt>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">成为房东/体验达人</template>
        <el-menu-item index="3-1">
          <router-link to="add_become_a_host_room">发布房源</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link to="add_become_a_host_room">开展体验</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <router-link to="Story">故事</router-link>
      </el-menu-item>
      <el-menu-item index="5" v-show="gy">
        <router-link to>帮助</router-link>
      </el-menu-item>
      <el-menu-item index="6" v-show="gyh">
        <router-link to>行程</router-link>
      </el-menu-item>
      <el-menu-item index="7" v-show="gyh">
        <router-link to>房源订单中心</router-link>
      </el-menu-item>
      <el-menu-item index="8" v-show="gyh">
        <router-link to>消息</router-link>
      </el-menu-item>
      <el-menu-item index="9" v-show="gyh">
        <router-link to>心愿单</router-link>
      </el-menu-item>
      <el-menu-item index="10" v-show="gyh">
        <a href="javascript:;">
          <img :src="user_imgurl" alt @click="user_bn">
        </a>
        <el-card class="box-card" v-show="show">
          <div v-for="(elem,i) of list" :key="i" class="text item" @click="g(i)">
            <router-link :to="elem.href">{{elem.msg}}</router-link>
          </div>
        </el-card>
      </el-menu-item>
      <el-menu-item index="6" v-show="gy">
        <router-link to="login">注册</router-link>
      </el-menu-item>
      <el-menu-item index="7" v-show="gy">
        <router-link to="loginzmw">登录</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gy: true,
      gyh: false,
      activeIndex: "1",
      input: "",
      list: [
        { href: "userdata", msg: "个人资料" },
        { href: "", msg: "账号" },
        { href: "", msg: "礼券中心" },
        { href: "", msg: "邀请好友" },
        { href: "userguide", msg: "我的旅行指南" },
        { href: "", msg: "商务爱彼迎" },
        { href: "index", msg: "退出" }
      ],
      show: false,
      user_imgurl: ""
    };
  },
  watch: {
    input() {
      //console.log(this.input);
    }
  },
  created() {
    this.loader();
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    },
    search() {
      console.log(this.input);
      this.$router.push("/Search?lid=" + this.input);
    },
    user_bn() {
      this.show = !this.show;
    },
    loader() {
      this.axios.get("user/").then(result => {
        if (result.data.code > 0) {
          if (sessionStorage.getItem("user_id") !== null) {
            if (result.data.data[0].user_imgurl == null) {
              this.user_imgurl = `https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png`;
            } else {
              this.user_imgurl =
                `http://127.0.0.1:3000/` + result.data.data[0].user_imgurl;
            }
            this.gy = false;
            this.gyh = true;
          } else {
            this.gy = true;
            this.gyh = false;
          }
        }
      });
    },
    g(i) {
      if (this.list[i].msg == "退出") {
        sessionStorage.clear();
        console.log(sessionStorage.getItem("user_id"));
        this.gy = true;
        this.gyh = false;
      }
    }
  }
};
</script>
<style scoped>
.my-img {
  width: 160px !important;
  height: 160px !important;
}

#my-header {
  min-width: 1450px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
}

.search {
  padding-top: 15px;
  padding-left: 20px;
  width: 30%;
  display: flex;
  align-items: center;
}

div.search > div:first-child {
  padding-right: 15px;
}

.el-menu-demo {
  background-color: transparent;
}

.el-menu--horizontal:last-child {
  position: relative;
}

.el-menu--horizontal:last-child a img {
  width: 44px;
  height: 46px;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 50%;
}

.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow {
  width: 282px;
  height: 353.8px;
  position: absolute;
  left: -198px;
  top: 61px;
  z-index: 100;
}

.el-menu-item * {
  width: 242px;
  height: 45px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  line-height: 45px;
  border-bottom: 1px solid rgba(191, 191, 191, 0.2);
}

.el-menu-item *:hover {
  border-bottom: 1px solid #000;
}

.el-menu--horizontal > .el-menu-item a {
  border-bottom: none;
}
</style>