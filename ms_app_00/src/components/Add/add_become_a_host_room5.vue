<template>
    <!-- 地图地址 -->

    <div class="div_bg">
        <div class="div_bgfff"></div>
        <div class="div_bgfff2" style="width:20%"></div>
        <div class="div_body" style="padding-top:74px;">
            <div>
                <div class="div_title font_title1" >
                    <p  v-show="div_location=='false'">我们未能找到您的确切地址。</p>
                    <p  v-show="div_location=='true'">&nbsp;</p>
                </div>
                <div class="div_body1" v-show="div_location=='false'">
                    <div>
                        <div>
                            <svg t="1563238760924" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1460" width="200" height="200">
                                <path
                                    d="M512 56.888889C261.688889 56.888889 56.888889 261.688889 56.888889 512s204.8 455.111111 455.111111 455.111111 455.111111-204.8 455.111111-455.111111-204.8-455.111111-455.111111-455.111111m0 853.333333c-221.866667 0-398.222222-176.355556-398.222222-398.222222s176.355556-398.222222 398.222222-398.222222 398.222222 176.355556 398.222222 398.222222-176.355556 398.222222-398.222222 398.222222"
                                    fill="#ef2252" p-id="1461"></path>
                                <path
                                    d="M512 682.666667c-17.066667 0-28.444444 5.688889-39.822222 17.066666-11.377778 11.377778-17.066667 22.755556-17.066667 39.822223 0 17.066667 5.688889 28.444444 17.066667 39.822222 11.377778 11.377778 22.755556 17.066667 39.822222 17.066666 17.066667 0 28.444444-5.688889 39.822222-17.066666 11.377778-11.377778 17.066667-22.755556 17.066667-39.822222 0-17.066667-5.688889-28.444444-17.066667-39.822223-11.377778-11.377778-22.755556-17.066667-39.822222-17.066666z m-51.2-455.111111l17.066667 409.6h62.577777L563.2 227.555556H460.8z"
                                    fill="#ef2252" p-id="1462"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="p_font1">拖动标记来设置您的位置。</p>
                        </div>
                        <div>
                            <p>（或者尝试再次
                                <span>输入您的地址</span>
                                。）
                            </p>
                        </div>
                    </div>
                </div>
                <div class="div_body2" v-show="div_location=='true'">
                    <div>
                        <div>
                            <svg t="1563240315361" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2238" width="200" height="200">
                                <path
                                    d="M512 0C228.430769 0 0 228.430769 0 512s228.430769 512 512 512 512-228.430769 512-512S795.569231 0 512 0z m0 945.230769C271.753846 945.230769 78.769231 752.246154 78.769231 512S271.753846 78.769231 512 78.769231s433.230769 192.984615 433.230769 433.230769-192.984615 433.230769-433.230769 433.230769z"
                                    p-id="2239" fill="#1afa29"></path>
                                <path
                                    d="M716.8 330.830769l-208.738462 248.123077c-15.753846 15.753846-43.323077 19.692308-59.076923 7.876923L299.323077 472.615385c-15.753846-11.815385-43.323077-7.876923-55.138462 7.876923-11.815385 15.753846-7.876923 43.323077 7.876923 55.138461l149.661539 114.215385c19.692308 15.753846 47.261538 23.630769 74.830769 23.630769 35.446154 0 70.892308-15.753846 94.523077-43.323077l208.738462-248.123077c15.753846-15.753846 11.815385-43.323077-3.938462-55.138461-19.692308-15.753846-43.323077-15.753846-59.076923 3.938461z"
                                    p-id="2240" fill="#1afa29"></path>
                            </svg>
                        </div>
                        <div>
                            <p class="p_font1">太好了！谢谢！</p>
                        </div>
                    </div>
                </div>
                <!-- 地图 -->
                <div class="div_body3" style="width:100%;height:370px;">
                    <div id="container" @click="map_title" style="width:100%;height:370px;"></div>

                </div>
               <!-- 底部固定悬浮 -->
        <div class="div_footer1">
                <div>
                    <div class="div_margin" style="width:100%;">
                        <div></div>
                        <div>
                            <div class="div_return_submit">
                                <div class="div_div_svg_return1">
                                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"
                                    style="height: 2.8em; width: 1em; display: block; fill: currentcolor;">
                                    <path
                                        d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                                        fill-rule="evenodd"></path>
                                    </svg>
                                </div>                           
                                <div class="return_btn" @click="return1">返回</div>
                                <div class="next_btn" @click="submit" style="min-width: 8%;max-width: 14%;">下一个</div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>

            </div>


        </div>
    </div>
</template>

<script>

</script>
<script>
    export default {
        data() {
            return {
                div_location: "false",
                districtid: 18,
                position: {},
            }
        },
        props: {

        },
        created() {
            this.load1(this.districtid);

        },
        methods: {
            submit() {
                this.$emit('change',6);
                this.$router.push("/add_become_a_host_room/photos")
            },
            return1() {
                // this.$router.push("/add_become_a_host_room/location")
                this.$router.go(-1);
            },
            load1() {
                this.districtid=this.$route.query.key
                var did = this.districtid;
                this.axios.get("http://127.0.0.1:3000/add/dd", {
                    params: {
                        "did": did
                    }
                }).then(result => {
                    this.position = result.data;
                })
            },
            getLocation() { // 从高德地图api获取浏览器定位
                var map = new AMap.Map('container', {
                    zoom: 11, //级别
                    center: [this.position[0].District_longitude, this.position[0].District_latitude],
                    viewMode: '3D' //使用3D视图
                });
            },
            map_title(){
                this.div_location="true"
            }

        },

        mounted() {
            setTimeout(() => {
                this.getLocation()
            }, 200)


        },

    }
</script>
<style scoped>
  
    .div_body {
        width: 60%;
        margin: auto;
        font-size: 16px;
    }

    .div_body>div {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 30px 16px 30px;
        padding-bottom: 102px;
        background: #fff;
    }

    .div_title {
        padding: 32px 0 24px;
    }

    .font_title1 {
        font-size: 24px;
        font-weight: 800;
        line-height: 1.25em;
        color: #484848;
        padding: 32px 0 10px;
    }

    .div_body1 {
        text-align: left;
        padding-left: 50px;
        font-size: 19px;
        background: #ffd1c4;
        padding: 15px 30px 15px 15px;
        border-radius: 2px;
        box-sizing: border-box;
        height: 80px;
    }

    .div_body1>div>div:first-child {
        padding: 2px 10px 0 0;
    }

    .icon {
        width: 22px;
        height: 22px;
    }

    .div_body1>div>div {
        float: left;
    }

    .div_body1>div>div:last-child {
        float: none;
        clear: both;
    }

    .div_body1>div:nth-child(2) {
        float: left;
    }

    .div_body1 p,
    span {
        color: #484848;
    }

    .p_font1 {
        font-size: 19px;
        font-weight: bold;
        text-align: left;
        line-height: 1.43;
    }

    .div_body1 span {
        text-decoration: underline;
        cursor: pointer;
    }

    .div_body2 {
        box-sizing: border-box;
        background: #bfeeb0;
        color: #484848;
        padding: 15px 30px 15px 15px;
        border-radius: 2px;
        width: 100%;
        height: 55px;
    }

    .div_body2>div>div:first-child {
        float: left;
        padding-right: 10px;
    }

    .div_body2>div>div:last-child {
        float: left;
    }

    #container {
        width: 100%;
        height: 100%;
    }
</style>