<template>
    <div>
        <!--引入头部组件-->
        <div class="abs">
            <user-header class="position-abs"></user-header>
        </div>
        <div class="block">
            <el-carousel width='100%' height="530px">
                <el-carousel-item v-for="(item,i) in Carousellist" :key="i">
                    <div>
                        <img style="width:100%;height:530px"
                            :src="'http://127.0.0.1:3000/img/img-index/'+item.Carousel_imgurl" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 中间主体部分 -->
        <section>
            <h1 class="indextitle">夏季特惠房源</h1>
            <!--夏季特惠房源-->
            <p class="litletitle">低至 7 折，可叠加使用礼券</p>
            <div class="btn-container">
                <button @click="changeblue(0)" :class="{isblue:i==0}" class="my-btn">成都</button>
                <button @click="changeblue(2)" :class="{isblue:i==2}" class="my-btn">北京</button>
                <button @click="changeblue(1)" :class="{isblue:i==1}" class="my-btn">上海</button>
                <button @click="changeblue(3)" :class="{isblue:i==3}" class="my-btn">重庆</button>
                <button @click="changeblue(4)" :class="{isblue:i==4}" class="my-btn">广州</button>
                <button @click="changeblue(5)" :class="{isblue:i==5}" class="my-btn">西安</button>
                <button @click="changeblue(6)" :class="{isblue:i==6}" class="my-btn">南京</button>
            </div>
            <!-- 主题页图文 -->
            <div>
                <div class="flexbox">
                    <!--每层 弹性布局-->
                    <div class="box-item" v-for="(item,key) of houselist" :key="key">
                        <!--每个房间内容-->
                        <div>
                            <!-- 图 -->
                            <router-link to="/details">
                                <img :src="'http://127.0.0.1:3000/img'+item.House_imgurl" alt="">
                            </router-link>
                        </div>
                        <div class="house-buliding">
                            <span>{{item.House_Building}}</span> <span>·</span> <span>{{item.House_Bed}}</span>
                        </div>
                        <div>
                            <a class="house-name" href="javascirpt:;">
                                {{item.House_name}}
                            </a>
                        </div>"
                        <div class="house-name">
                            <!---价格-->
                            <span>{{(item.House_price*item.House_tag).toFixed(2)}}</span><del
                                class="delprice">￥{{item.House_price.toFixed(2)}}</del><span class="delprice">每晚</span>
                        </div>
                        <div style='padding-bottom:20px;'>
                            <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}">
                            </el-rate>
                            五星房东
                        </div>

                    </div>
                </div>
                <router-link class="getmore" to="/Search">查看更多房源></router-link>

            </div>

            <!--                 热门目的地                     -->
            <h1 class="indextitle">热门目的地 </h1>
            <div class="btn-container">
                <button @click="changeblue2(0)" :class="{isblue:j==0}" class="my-btn">成都</button>
                <button @click="changeblue2(2)" :class="{isblue:j==2}" class="my-btn">北京</button>
                <button @click="changeblue2(1)" :class="{isblue:j==1}" class="my-btn">上海</button>
                <button @click="changeblue2(3)" :class="{isblue:j==3}" class="my-btn">重庆</button>
                <button @click="changeblue2(4)" :class="{isblue:j==4}" class="my-btn">广州</button>
                <button @click="changeblue2(5)" :class="{isblue:j==5}" class="my-btn">西安</button>
                <button @click="changeblue2(6)" :class="{isblue:j==6}" class="my-btn">南京</button>
            </div>
            <!-- 主题页图文 -->
            <div>
                <div class="flexbox">
                    <!--每层 弹性布局-->
                    <div class="box-item" v-for="(item,key) of houselist2" :key="key">
                        <!--每个房间内容-->
                        <div>
                            <!-- 图 -->
                            <router-link to="/details">
                                <img :src="'http://127.0.0.1:3000/img'+item.House_imgurl" alt="">
                            </router-link>
                        </div>
                        <div class="house-buliding">
                            <span>{{item.House_Building}}</span> <span>·</span> <span>{{item.House_Bed}}</span>
                        </div>
                        <div>
                            <a class="house-name" href="javascirpt:;">
                                {{item.House_name}}
                            </a>
                        </div>"
                        <div class="house-name">
                            <!---价格-->
                            <span>{{(item.House_price*item.House_tag).toFixed(2)}}</span><del
                                class="delprice">￥{{item.House_price.toFixed(2)}}</del><span class="delprice">每晚</span>
                        </div>
                        <div style='padding-bottom:20px;'>
                            <el-rate v-model="value" disabled show-score text-color="#00848A" score-template="{value}">
                            </el-rate>
                            五星房东
                        </div>

                    </div>
                </div>
                <router-link class="getmore" to="/Search">查看更多房源></router-link>

            </div>


            <!--                 精选故事                    -->
            <h1 class="indextitle">精彩旅行故事</h1>
            <!-- 主题页图文 -->
            <div>
                <div class="flexbox">
                    <!--每层 弹性布局-->
                    <div class="box-item-story" v-for="(item,key) of sel_list" :key="key">
                    <div>
                        <!--每个房间内容-->
                        <div class="storybox">
                            <!-- 图 -->
                            <router-link to="/Story">
                                <img :src="'http://127.0.0.1:3000/'+item.md_img" alt="">
                                <div class="storyitem1">
                                    <svg viewBox="0 0 16 16" fill="currentColor" fill-opacity="0" stroke="#ffffff"
                                        stroke-width="1" focusable="false" aria-label="赞" role="img"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        style="height: 20px; width: 20px; display: block; overflow: visible;">
                                        <path
                                            d="m7.3 1.7c-.2.6-.2 2.3-3.5 3.4-2.7.9-3.3 3.4-3.3 5.4 0 1.8.6 5 4.8 5h6.2c.9 0 1.5-.4 1.5-1.1s-.5-1.1-1-1.1c.5 0 1.5-.1 1.5-1.1 0-1.1-1-1.1-1-1.1.8 0 1.5-.3 1.5-1.1 0-.9-.7-1.1-1.5-1.1.8 0 1.5-.3 1.5-1.1s-.8-1.1-1.5-1.1h-4.5c-.2 0-.4-.1-.4-.3-.1-.2-.1-.4 0-.5.1-.2 1.1-1 1.6-2 .3-.6.4-1.4.3-2 0-.4-.3-1.2-1.1-1.2s-1 .9-1.1 1.2z">
                                        </path>
                                    </svg>
                                </div>

                                <div class="storyitem2">{{item.story_family}}</div>
                            </router-link>
                        </div>
                        <div class="story-buliding">
                            <span>{{item.city}}</span><span>{{item.detail_title}}</span>
                        </div>
                        <div class="story-name">
                            <!---点赞评论-->
                            <div class="touxiang"><img :src="'http://127.0.0.1:3000/'+item.user_img" alt=""></div>
                            <svg viewBox="0 0 16 16" role="img" aria-label="“赞”的数量" focusable="false"
                                style="height: 14px; width: 14px; fill: rgb(118, 118, 118);">
                                <path
                                    d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11">
                                </path>
                            </svg>
                            <span class="givelike">{{item.give_like}}</span>
                            <svg viewBox="0 0 16 16" role="img" aria-label="评论数量" focusable="false"
                                style="height: 14px; width: 14px; fill: rgb(118, 118, 118);">
                                <path
                                    d="m4.5 7h4c .28 0 .5.23.5.5s-.22.5-.5.5h-4c-.28 0-.5-.23-.5-.5s.22-.5.5-.5m-.5-2.5c0-.28.22-.5.5-.5h7c .28 0 .5.23.5.5s-.23.5-.5.5h-7c-.28 0-.5-.23-.5-.5m8.5-3.5h-9c-1.38 0-2.5 1.12-2.5 2.5v12c0 .25.18.45.42.49.03.01.05.01.08.01.21 0 .41-.14.47-.34.56-1.69 2.74-3.66 7.03-3.66h3.5c1.38 0 2.5-1.12 2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5">
                                </path>
                            </svg>
                            <span class="givelike">{{item.give_comment}}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <router-link class="getmore" to="/Story">更多精彩故事></router-link>

            </div>

        </section>

        <!-- 引入底部组件 -->
        <my-footer></my-footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               
                Carousellist: [],
                i: 2,
                j: 1,
                value: 5,
                city: "北京",
                houselist: [{
                    House_Bed: "",
                    House_Building: "",
                    House_imgurl: "/img-index/index1.jpg",
                    House_name: "",
                    House_price: 0,
                    House_tag: ""
                }],
                houselist2: [{
                    House_Bed: "",
                    House_Building: "",
                    House_imgurl: "/img-index/index2.jpg",
                    House_name: "",
                    House_price: 0,
                    House_tag: ""
                }],
                sel_list: [],

            }
        },
        created() {
            this.getcarouserimg(),
                this.changeblue(this.i)
            this.changeblue2(this.j)
           
            this.getstory()
        },
        methods: {

            getstory() {
                var url = "/index/story";
                this.axios.get(url).then(result => {
                    console.log(result.data);
                    //通过sel_list[]数组来接收数据，显示在页面上  
                    this.sel_list = result.data;
                    console.log(this.sel_list[0].md_img, 111);
                });
            },
            getcarouserimg() {
                this.axios.get("/index/Carousel").then(result => {
                    //console.log(result.data.data)
                    this.Carousellist = result.data.data

                })
            },
            changeblue(i) {
                this.i = i;
                var url = "/index/cities";
                var obj = { i }
                this.axios.get(url, { params: obj }).then(res => {
                    // console.log(res.data.data[0].House_imgurl)
                    this.houselist = res.data.data
                })
            },
            changeblue2(j) {
                this.j = j;
                var url = "/index/cities2";
                var obj = { j }
                this.axios.get(url, { params: obj }).then(res => {
                    // console.log(res.data.data[0].House_imgurl)
                    this.houselist2 = res.data.data
                })
            },
            getstory() {
                var url = "/story";
                this.axios.get(url).then(result => {
                    //console.log(result.data);
                    //通过sel_list[]数组来接收数据，显示在页面上
                    this.sel_list = result.data;
                    //console.log(this.sel_list[0].md_img,this.careStoryTop.backgroundImage );
                });
            }
        },
    }
</script>
<style scoped>
    .story-buliding{
        height:39px;
        overflow:hidden;
    }
    .story-buliding span:first-child {
        font: 18px Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
        margin-right:5px;
        font-weight:800 !important
    }
    .story-name{
        line-height:19px;
        vertical-align:middle;
    }
    .story-buliding span:last-child {
        font: 12px 微软雅黑, Circular, PingFang-SC, "Hiragino Sans GB", "Microsoft YaHei", "Heiti SC" !important;
        color:#484848;

    }

    svg+span.givelike {
        font-size:12px;
        color:#484848;
        margin-left:5px;
        margin-right:5px;
        font-weight:0;
    }

    .story-buliding {
        margin: 5px 0;
        font: 10px Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
        font-weight:600;
    }

    .touxiang {
        display: inline-block;
    }

    .touxiang img {
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin-right: 10px
    }

    .storybox {
        position: relative;
    }

    .storyitem1 {
        position: absolute;
        top: -310px;
        right: 6px;
    }

    .storyitem2 {
        position: absolute;
        bottom:10px;
        right: 10px;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 3px;
        background: white;
        text-align: center;
        line-height: 20px;
        font-size:12px;
        padding:3px;
        font-weight:800;
        background:rgba(255,255,255,0.9);
        color: rgb(72, 72, 72) !important;
    }

    .position-abs {
        position: absolute;
        width: 100%;
        z-index: 10;
    }

    el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    section {
        width:70%;
        margin-top: 100px;
        margin: 0 auto;
        overflow: hidden;
    }

    .indextitle {
        color: #484848;
        padding: 10px;
        font-weight:800 !important;
        font:24px Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
        line-height:30px !important;
    }

    .litletitle {
        padding:0 10px;
        font: 16px Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC"
    }

    .btn-container {
        width: 1500px;
        overflow: hidden;
        padding-bottom: 20px;
        padding-top: 10px;
    }

    .my-btn {
        width: 120px;
        height: 48px;
        margin-right: 12px;
        border: 1px solid #eee;
        border-radius: 5px;
        background: #fff;
        outline: none;
        box-sizing: border-box;
        font-weight:700;
        font-size:17px;
    }

    .my-btn:hover {
        box-shadow: 0 2px 5px #888
    }

    .isblue {
        background: #00848a;
        border: 0;
        color:#ffffff;
    }

    .flexbox {
        display: flex;
        flex-wrap: wrap;
        width:100%;
        justify-content: space-between;

    }

    .box-item {
        width:32%;
    }

    .flexbox a>img {
        width: 100%;
        border-radius: 5px;
        height: 100%
    }

    .house-buliding {
        color: #714e33;
        font: 12px Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
        font-weight:800 !important;
    }

    .house-name {
        color: #484848;
        font: 16px Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
        font-weight:800;
    }

    .delprice {
        color: #484848;
        font: 12px Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    }

    .getmore {
        font-weight: 600;
        padding:30px 0;
        display: inline-block;
        font-size: 17px;
        font-weight: 600;
        line-height: 22px;
        color: #008489;
        padding-left:10px;
    }

    .box-item-story {
        width:25%;
    }
    .box-item-story>div{
        width:95%;
        margin:0 auto;
    }
    .box-item-story>div>div>a>img {
        width:100%;
        height:246px;
    }
</style>
<style>
    .el-rate__icon {
        font-size:14px !important;
        margin-right:0px !important;
        color: #00848A !important;
        -webkit-transition: .3s;
        transition: .3s;
    }
</style>