<template>
    <div>
        <!-- 头部固定悬浮 -->
        <div class="div_header1">
            <div @click="alert_show_click()">
                <svg viewBox="0 0 1000 1000" role="img" aria-label="房源" focusable="false" style="height: 32px; width: 32px; display: block; fill: currentcolor;">
                    <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z">                        
                    </path>
                </svg>
            </div>
            <div>
                <h3>请填写房源信息</h3>
            </div>
        </div>
        <!-- 头部进度条 -->
        <div class="div_header2">
            <div v-show="showbar>=1"></div>
            <div v-show="showbar>=2"></div>
            <div v-show="showbar>=3"></div>
            <div v-show="showbar>=4"></div>
            <div v-show="showbar>=5"></div>
            <div v-show="showbar>=6"></div>
            <div v-show="showbar>=7"></div>
            <div v-show="showbar>=8"></div>

        </div>
        <!-- 点击左上角图标弹出弹框 -->
        <div class="icon_alert" v-show="alert_show==true" @click="div_alert_show_close()">
            <div @click.stop>
                <div @click="alert_show_close()">
                    <svg viewBox="0 0 24 24" role="img" aria-label="关闭" focusable="false" style="height: 16px; width: 16px; display: block; fill: rgb(118, 118, 118);"><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule="evenodd"></path></svg>
                </div>
                <div>
                    <h1>不要忘记保存已填写的信息！</h1>
                    <p>
                        您只需再添加一些信息，就可保存你的房源。如果您有任何关于<a>成为房东</a>或<a>创建房源</a>的问题，可以前往帮助中心，了解相关信息。
                    </p>
                </div>
                <div id="btn_alert">
                    <div @click="alert_show_close()">返回</div>
                    <div @click="return1()">退出并放弃保存</div>
                </div>
            </div>
        </div>
        <!-- body -->
        <div>
            <router-view @change="change"></router-view>

        </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            Airbnb_House:{
               House_Building:-1,
               Rent_Type:-1,
               House_people_num:-1,
               House_bednum:-1,
               House_restroom:-1,
            },
            alert_show:false,
            add_page:0,
            pageurl:"/add_become_a_host_room/bedrooms",
            showbar:1
    }},
    // created(){
    //      this.$router.push("/room");
    // },
    // created() {
    //     console.log(sessionStorage.getItem("user_id"));
    // },
    methods:{    
        return1(){
            this.$router.push("/index")
        },
        change(show){
             //console.log(show)
            this.showbar=show;
        },   
        alert_show_click(){
            // console.log(this.alert_show)
            this.alert_show=true;
            // console.log(this.alert_show)
        },
        div_alert_show_close(e){
            //大div的点击事件
            this.alert_show=false;           
        },
        alert_show_close(e){
            //×的点击事件
            this.alert_show=false;           
        },        
    },
    components:{        
    },
    mounted(){
        this.$router.replace('/add_become_a_host_room')
    }
}

</script>

<style scoped>
.div_header1{
    height:64px;
    width: 100%;
    line-height: 64px;
    text-align: left;
    box-sizing: border-box;
    z-index: 100;
    position: fixed;
    background:#fff; 
}
.div_header1 div:first-child{
    float: left;
    color:#008489;
    padding-left: 16px;
    padding-top:15px; 
    cursor: pointer;
}
.div_header1 div:first-child svg{   
    padding: 0px 0px 0px 0px;
}
.div_header1 div:last-child{
    float: left;
    padding-left: 20px;
}

.div_header1 div:last-child h3{
    color:#484848;
    font-weight: 400;
}
.div_header2{
    height:10px;
    width: 100%;
    background: #edefed;  
    z-index: 100;  
    position: fixed;
    top:64px;
}
.div_header2:after{
	content:"";
	display:block;
	clear:both;
}
.div_header2>div{
    background-color: #008489;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    height:10px;
    position: absolute;
    left:0px;
}
.div_header2>div:first-child{
    width: 3%;
}
.div_header2>div:nth-child(2){
    width: 14.28571428571429%;
}
.div_header2>div:nth-child(3){
    width: calc(14.28571428571429% * 2);
    float:left;
}
.div_header2>div:nth-child(4){
    width: calc(14.28571428571429% * 3);
    float:left;
}
.div_header2>div:nth-child(5){
    width: calc(14.28571428571429% * 4);
    float:left;
}
.div_header2>div:nth-child(6){
    width: calc(14.28571428571429% * 5);
    float:left;
}
.div_header2>div:nth-child(7){
    width: calc(14.28571428571429% * 6);
    float:left;
}
.div_header2>div:last-child{
    border-top-right-radius: none;
    border-bottom-right-radius: none;
}

/* icon弹框 */
.icon_alert{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 200;
    background:rgba(0,0,0,0.6)
}
.icon_alert>div{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width: 569px;
    height:277px;
    box-sizing: border-box;
    padding:20px 32px 32px 32px;
    background: #ffffff;
}
.icon_alert>div>div:first-child{
    height:56px;
    width: 56px;
    padding: 20px 0 20px 0;
    box-sizing: border-box;
}
.icon_alert>div>div:nth-child(2) h1{
    font-size: 24px;
    font-weight: 800;
    color:#484848;
    padding: 2px 0 2px 0;
    line-height: 1.25em;
}
.icon_alert>div>div:nth-child(2) p{
    margin-top: 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375em;
    color:rgb(72,72,72)
}
.icon_alert>div>div:nth-child(2) p a{
    color:#008489;
}
.icon_alert>div>div:nth-child(2) p a:hover{
    text-decoration: underline;
}
.icon_alert>div>div:last-child{
    margin-top:20px;
}
.icon_alert>div>div:last-child>div{
    float:left;
}
.icon_alert>div>div:last-child:after{
    content:"";
    display:block;
    clear: both;
}
.icon_alert>div>div:last-child>div:first-child{
    height:48px;
    width: 80px;
    padding: 12px 21px 12px 23px;
    box-sizing: border-box;
    background: #008489;
    border-radius: 5%;
    font-size: 16px;
    font-weight: 600;
    color:#fff;
}
.icon_alert>div>div:last-child>div:last-child{
    height:48px;
    width: 168px;
    padding: 11px 21px 13px 23px;
    box-sizing: border-box;
    background: #fff;
    border:2px solid #008489;
    border-radius: 5%;
    font-size: 16px;
    font-weight: 600;
    color:#008489;
    margin-left: 10px;
}


</style>
