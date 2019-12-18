<template>
<div class='footer'>
    <div id='btn'>
        <h2>注册爱彼迎</h2>
        <!-- <h3>没有账号?
      <a class="password">注册</a> -->
    <!-- </h3> -->
    </div>
    <div class='zc'>
        用户名：<input type="text" @blur="selName"  id='uname' v-model='name' placeholder='请输入用户名' >
        <br>
        <br>
        密码：<input type="password" id='upwd'  v-model='password' placeholder="请输入密码">
        <br>
        <br>
        <div class="gender_radio">
        性别：
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="0">女</el-radio>
        </div>        
             <!-- <label>   
            <input type="radio" id='gender' v-model='age' name="gender">男</label>
            <label>
            <input type="radio" id='gender' v-model='age' name="gender">女</label>
            <span id="u_gender"></span> -->
        <br>
        手机：<input type="text" id='phone' v-model='call' placeholder='请输入手机号'>
        <br>
        <br>
        邮箱：<input type="text" id='email' v-model='email' placeholder='请输入邮箱'>
        <br> 
        <br>
    </div>
        <div class='account'>
            <a :href="`#/`+'loginzmw'" >账号登录</a>
        </div>
    <div class='sign'>
        <el-button :plain="true" class='btn1' @click='regin'>提交注册信息</el-button>
    </div>
</div>
<!-- <div id='msg'></div>
<a href="loginzme.vue">账号登陆</a> -->
</template>
<script>
 export default {
     data(){
        return{ 
            name:'',
            password:'',
            age:'',
            call:'',
            email:'',
            radio:'1'
        }
    },
    methods:{
        regin(){
            //console.log(this.name,this.password);
            if(this.name==""){
                this.$message("用户名不能为空");
                return;
            }
            if(!this.password){
                this.$message("密码不能为空");
                return;
            }
            if(!this.radio){
                this.$message("性别不能为空");
            }
            if(!this.call){
                this.$message("号码不能为空");
            }
            if(!this.email){
                this.$message("邮箱不能为空");
            }
            var url="/use/reg";
            var obj={
                user_name:this.name,
                user_pwd:this.password,
                user_gender:this.radio,
                user_phone:this.call,
                user_email:this.email
            };
            this.axios.get(url,{params:obj}).then(result=>{
                //console.log(result.data.data);
                if(result.data.data=="注册成功"){
                    this.$message("注册成功");
                }
            });
            
        },
        selName(){
            var url="/use/selName";
            var obj={user_name:this.name};
            this.axios.get(url,{params:obj}).then(result=>{
                //console.log(result.data);
                if(!this.name){
                    this.$message("用户名不能为空");
                }else{
                    this.$message(result.data.data);
                    
                }
                
            });
        }
    },
    created(){

    }
}
</script>
<style scope>
    *{padding:0;margin:0}
    ul,li{list-style:none;}
    a{text-decoration:none;}
/*--------------------------------------------------------*/
    .footer{/*登录父级*/
        width:568px;
        height:1500.06;
        text-align:center;
        background:#f5f7fa;
       /* position:relative;*/
        margin-left:461px;
        margin-top:130px;
    }
    .footer>div>h2{/*font 登录*/
       margin-right:360px; 
    }
    .footer>div>h3{/*没有账号？*/
        margin-right:350px;
         padding-top:10px;
    }
    .footer>div>h3>a{/*注册*/
       margin-top:90px;
        /*margin-right:177px;*/
        color:rgb(0,132,137);
        font-family:"微软雅黑";
    }
    .zc{/*输入框父元素*/
        margin-top:31px;
        color:#272424;
       
    }
    .zc>input{/*5个输入框*/
       padding:5px;
        width:351px;
        height:32px;
        border-color:#0a0a0a;
        border:1px;
    }
     .account>a{/*账号登录*/
        margin-left:290px;
        color:rgb(0,132,137);
    } 
    .sign>button{
        width:341px;
        height:42px;
        /* padding:-6px; */
        background-color:#ff5a5f;
        border-color:#ff5a5f;
        margin-top:24px;
        border-radius:5px;
    }
    .gender_radio{
        margin-left:-242px !important;
    }
</style>

