<template>
        <div class="add_end_bg">
            <div class="add_end" >
                <div class="add_end_font">
                    <div>
                        <div>您的房源信息正在审核，</div>
                        <div>请关注站内信息，</div>
                        <div>有消息我们会及时通知您</div>
                    </div>
                    <div style="margin-top:50px;">
                        <router-link to="/index" class="btn">&nbsp;回到首页</router-link>
                        <p style="font-size:16px;margin-left:60px;">3秒后将自动回到首页</p>
                    </div>
                </div>
                <div style="float:right;margin-right:90px;">
                    <img src="http://127.0.0.1:3000/img/add/calendar.f2586c5e.png" alt="">
                </div>
            
            </div>
        </div>
    </template>
    <script>
    export default {
         data(){return{
            
        }},
        methods:{
            load(){
                setTimeout(()=>{
                    this.$router.push("/index")
                },3000)
            }
        },
        mounted(){
            this.load();
        }
    }
    </script>
    <style scoped>
    .div_bg{
        background: #fff;
    }
    .add_end_font{
        float:left;
        font-size:28px;
    }
    .add_end_font>div{
        margin:100px 30px 0 260px;
        color:#008489;
    }
    .btn{
        display: block;
        height:48px;
        width:40%;
        padding: 12px 22px;
        margin:0px 0px 39px 77px;
        box-sizing: border-box;
        background: #008489;
        border-radius: 5%;
        font-size: 16px;
        font-weight: 600;
        color:#fff;
    }
    </style>


