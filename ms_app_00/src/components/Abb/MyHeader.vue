<template>
    <div id="my-header">
          <!--搜索框--> 
          <div class="search">
                <div>
                    <svg viewBox="0 0 1000 1000" role="img" aria-label="房源" focusable="false" style="height: 32px; width: 32px; display: block; fill:white;"><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
                </div>
                <el-input class="aaa" placeholder="任何目的地" v-model="input" clearable @change="search"></el-input>
            </div>
        <!--导航-->    
        <el-menu text-color="#fff" :default-active="activeIndex" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
            <el-submenu index="1" >
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
                    <img class="my-img" src="http://127.0.0.1:3000/img/img-index/kehuduan.png" alt="">
                    <img class="my-img" src="http://127.0.0.1:3000/img/img-index/weixin.png" alt="">
                    <img class="my-img" src="http://127.0.0.1:3000/img/img-index/xiaochengxu.jpg" alt="">
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
                <router-link to="Story" target="_blank">故事</router-link>
            </el-menu-item>
            <el-menu-item index="5">
                <a href="javascript:;" target="_blank">帮助</a>
            </el-menu-item>
            <el-menu-item index="6">
                <router-link to="login" >注册</router-link>
            </el-menu-item>
            <el-menu-item index="7">
                <router-link to="loginzmw">登录</router-link>
            </el-menu-item>
        </el-menu>
          
    </div>
</template>
<script>
export default {
    data(){
        return {
        activeIndex: '1',
        input:"",
        }
    
    },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      search(){
          console.log(this.input)
          this.$router.push("/Search/?lid="+this.input)
      }
    }
}
</script>
<style scoped>
    #my-header{
        display:flex;
        justify-content: space-between;
    }
   
   .search{
       padding-top:15px;
       padding-left:20px;
       width:30%;
       display:flex;
       align-items:center;
   
   }
   div.search>div:first-child{
       padding-right:15px;
   }
   .el-menu-demo{
    background-color:transparent;
   }
   .my-img{
       width: 160px;
       height:160px;
   }
</style>