<template>
  <div class="register">
    <h2>欢迎登录</h2>
    <div class="input">
      账号：
      <input
        type="username"
        id="phone"
        class="inputbox"
        v-model="username"
        placeholder="请输入邮箱地址/手机号码"
      />
      <br />
      <br />密码：
      <input type="password" id="upwd" class="crypto" v-model="password" placeholder="请输入您的密码" />
    </div>
    <div class="chose">
      <input type="checkbox" value="0" />自动登录
      <a href="javascript:;" class="password">忘记密码</a>
    </div>
    <button class="btn" @click="login">登录</button>
    <!-- <div>
              <sessionStorage class="setitem" name="东东"></sessionStorage>
    </div>-->
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: "",
      password: "",
      loading: false
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    login() {
      var url = "use/";
      var obj = {
        user_name: this.username,
        user_pwd: this.password
      };
      this.axios.get(url, { params: obj }).then(result => {
        //console.log(result);
        if (result.data.code != 1) {
          this.$message({
            showClose: true,
            message: "请输入正确的用户名或密码",
            type: "err",
            duration:1000
          });
        } else {
            this.$message({
            showClose: true,
            message: result.data.msg,
            type: "success",
            duration:1000
          });
          this.setUser(result.data.data[0].user_name);
          //跳转到前一个页面
          //this.$router.go(-2);
          var user_id = result.data.data[0].user_id;
          //设置session
          sessionStorage.setItem("user_id", user_id);
          //获取session值
          console.log(sessionStorage.getItem("user_id"));
          this.$router.push("/index");
        }
      });

      // var uname=document.getElementById("uname");
      // sessionStorage.setItem('uname',uname.value);
      // alert("2秒跳转到首页")
      // setTimeout(function(){
      //     location.href='index.vue'
      // },2000);
    }
  },
  created() {}
};
</script>
<style>
.register {
  /*父元素*/
  width: 482px;
  height: 1000.06;
  text-align: center;
  background: #f5f7fa;
  margin: 0 auto;
  margin-top: 130px;
}
.register > h2 {
  margin-left: -349px;
}
.input {
  margin-top: 40px;
  margin-right: 42px;
}
.input > input {
  padding: 9px;
  width: 275px;
  height: 20spx;
  margin-top: 14px;
}
.chose {
  /*自动登录忘记密码*/
  margin-left: -1px;
  margin-top: 43px;
}
.chose > a {
  margin-left: 136px;
}
.btn {
  padding: 5px;
  width: 332px;
  height: 43px;
  margin-top: 17px;
  background: #ff5a5f;
  border-color: #ff5a5f;
  margin-right: 38px;
  border-radius: 5px;
}
</style>