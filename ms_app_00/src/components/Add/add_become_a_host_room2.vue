<template>
    <!-- 房客数量，床数量，床型 -->
    <div class="div_bg">
        <div class="div_bgfff"></div>
        <div class="div_bgfff2"></div>
        <div class="div_body" style="padding-top:74px;">
            <div>
                <div class="div_title font_title1">
                    <p>您的房源可以住几位房客？</p>
                </div>
                <div class="font-title3">
                    <p>请确保您准备了足够的床位，让所有房客都能舒适入住。</p>
                </div>
                <div class="div_body3">
                    <div class="font-title4">
                        <p>最多容纳房客人数</p>
                    </div>
                    <div class="btn_add">
                        <div @click="people_count(-1)">
                            <span class="div_btn_add" id="people_reduce">
                                <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                </svg>
                            </span>
                        </div>
                        <div id="people_count">
                            <span v-text="peoplecount">4</span>
                        </div>
                        <div @click="people_count(1)">
                            <span class="div_btn_add">
                                <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                    <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="div_body4" @click="blurbedroom()">
                    <p @click="loadMore1" class="font-title5">有几个卧室？</p>
                    <div class="div_bedroom">
                        <select @click.stop="bedroom()" name="bedroom" id="select_bedroom"> -->
                <!-- <option value="i" v-for="(bed,i)of bedrooms" :key="i" v-text="bed">111</option>
                            <option value="i">0间卧室</option>
                        </select>
                    </div>
                </div> -->
                <div class="div_body5">
                    <div>
                        <p class="font-title5">有几张床？</p>
                    </div>
                    <div class="font-title4">
                        <p>床铺数量</p>
                    </div>
                    <div class="btn_add" style="float:left" id="div_bed_count">
                        <div @click="bed_count(-1)" style="opacity:0.3;">
                            <span class="div_btn_add">
                                <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                </svg>
                            </span>
                        </div>
                        <div id="bed_count">
                            <span v-text="bedcount"></span>
                        </div>
                        <div @click="bed_count(1)">
                            <span class="div_btn_add">
                                <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                    <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="div_body6">
                    <h3>床型信息</h3>
                    <p class="font-title3" style="margin:10px 0 20px">
                        告知房客每个房间的床铺类型，有助于他们了解床型信息。
                    </p>
                </div>
                <div class="div_body7">
                    <div class="div_body7_show">
                        <div>
                            <p>合用空间</p>
                            <p class="font-title5" style="padding-top:2px;" v-text="`${bedroomcount}张床`"></p>
                        </div>
                        <div>
                            <div id="addbed" @click="btn_addbed(1)" v-show="addbed=='true'">
                                添加床铺
                            </div>
                            <div id="addbed" v-show="addbed=='false'" @click="btn_addbed(0)" style="font-weight:600">
                                完成
                            </div>
                        </div>
                    </div>
                    <!-- 隐藏区域 -->
                    <div class="div_body7_blank" v-show="addbed=='false'">
                        <!-- 沙发床 -->
                        <div>
                            <div class="text_addreduce">
                                <p>沙发床</p>
                            </div>
                            <div class="btn_add">
                                <div @click="bed1_count(-1)" style="opacity:0.3;" id="btn_reduce1">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <div class="count_addreduce">
                                    <span v-text="bed1count"></span>
                                </div>
                                <div @click="bed1_count(1)" id="btn_add1">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                            <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 沙发 -->
                        <div>
                            <div class="text_addreduce">
                                <p>沙发</p>
                            </div>
                            <div class="btn_add">
                                <div @click="bed2_count(-1)" style="opacity:0.3;" id="btn_reduce2">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <div class="count_addreduce">
                                    <span v-text="bed2count"></span>
                                </div>
                                <div @click="bed2_count(1)" id="btn_add2">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                            <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 地板床垫 -->
                        <div>
                            <div class="text_addreduce">
                                <p>地板床垫</p>
                            </div>
                            <div class="btn_add">
                                <div @click="bed3_count(-1)" style="opacity:0.3;" id="btn_reduce3">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <div class="count_addreduce">
                                    <span v-text="bed3count"></span>
                                </div>
                                <div @click="bed3_count(1)" id="btn_add3">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                            <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 单人床 -->
                        <div>
                            <div class="text_addreduce">
                                <p>单人床</p>
                            </div>
                            <div class="btn_add">
                                <div @click="bed4_count(-1)" style="opacity:0.3;" id="btn_reduce4">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <div class="count_addreduce">
                                    <span v-text="bed4count"></span>
                                </div>
                                <div @click="bed4_count(1)" id="btn_add4">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                            <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 双人床 -->
                        <div>
                            <div class="text_addreduce">
                                <p>双人床</p>
                            </div>
                            <div class="btn_add">
                                <div @click="bed5_count(-1)" style="opacity:0.3;" id="btn_reduce5">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                        </svg>
                                    </span>
                                </div>
                                <div class="count_addreduce">
                                    <span v-text="bed5count"></span>
                                </div>
                                <div @click="bed5_count(1)" id="btn_add5">
                                    <span class="div_btn_add">
                                        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false"
                                            style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                            <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                                            <rect height="12" rx="1" width="2" x="11" y="6"></rect>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 底部固定悬浮 -->
                <div class="div_footer1">
                    <div>
                        <div class="div_margin">
                            <div></div>
                            <div>
                                <div class="div_return_submit">
                                    <div class="div_div_svg_return1">
                                        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true"
                                            focusable="false"
                                            style="height: 2.8em; width: 1em; display: block; fill: currentcolor;">
                                            <path
                                                d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                                                fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="return_btn" @click="return1">返回</div>
                                    <div class="next_btn" @click="submit">下一个</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 空白底边 -->
                <div style="height:20px;">
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
                bedroomcount:0,
                bedrooms: [],
                bedcount: 1,
                peoplecount: 4,
                addbed: 'true',
                bed1count: 0,
                bed2count: 0,
                bed3count: 0,
                bed4count: 0,
                bed5count: 0,
            }
        },

        created() {
            this.loadMore1();

        },
        methods: {
            savelocalStorage(){
                localStorage.setItem("House_bednum", this.bedcount)
                localStorage.setItem("House_people_num", this.peoplecount)
                localStorage.setItem("bed1count", this.bed1count)
                localStorage.setItem("bed2count", this.bed2count)
                localStorage.setItem("bed3count", this.bed3count)
                localStorage.setItem("bed4count", this.bed4count)
                localStorage.setItem("bed5count", this.bed5count)
            },
            submit() {
                this.savelocalStorage()
                this.$emit('change',3);
                this.$router.push("/add_become_a_host_room/bathrooms")
            },
            return1() {
                this.savelocalStorage()
                // this.$router.push("/add_become_a_host_room/room")
                this.$router.go(-1);
            },
            loadMore1() {
                // if(this.add_page>=1){
                //     this.Airbnb_House.House_people_num=4;
                //     this.Airbnb_House.House_bednum=1
                // }          
                // console.log(this.$route.query)  
            },
            // bedroom(){
            //     var select_bedroom=document.getElementById("select_bedroom")
            //     var div_select_bedroom=select_bedroom.parentNode;
            //     console.log(div_select_bedroom)
            //     div_select_bedroom.style.border="1px solid #008489"
            //     select_bedroom.style.outline="none"
            // },
            // blurbedroom(){
            //     var select_bedroom=document.getElementById("select_bedroom")
            //     var div_select_bedroom=select_bedroom.parentNode;
            //     div_select_bedroom.style.border="0px solid transparent"
            // },
            bed_count(n) {
                var div_bed_count = document.getElementById("div_bed_count")
                var bed_reduce = div_bed_count.firstChild;
                let count = this.bedcount
                if (n == 1) {
                    bed_reduce.style.opacity = "1"
                    count += n;
                }
                if (n == -1 && count > 2) {
                    count += n;
                } else if (n == -1 && count == 2) {
                    bed_reduce.style.opacity = "0.3"
                    count += n;
                }
                this.bedcount = count;
                //console.log(this.bedcount)
            },
            people_count(m) {
                var people_reduce = document.getElementById("people_reduce")
                if (m == 1) {
                    people_reduce.style.opacity = "1"
                    this.peoplecount += m;
                    //console.log(this.peoplecount)
                }
                if (m == -1 && this.peoplecount > 2) {
                    this.peoplecount += m;
                } else if (m == -1 && this.peoplecount == 2) {
                    people_reduce.style.opacity = "0.3"
                    this.peoplecount += m;
                }
                //console.log(1);
                // this.Airbnb_House.House_people_num=this.peoplecount; 
                // console.log(Airbnb_House) ;     
            },
            btn_addbed(n) {
                if (n == 1) {
                    this.addbed = 'false'
                } else {
                    this.addbed = 'true'
                }

            },
            bed1_count(z) {
                var btn_reduce1 = document.getElementById("btn_reduce1")
                var btn_add1 = document.getElementById("btn_add1")
                if (z == 1) {
                    if (this.bed1count < 8) {
                        btn_reduce1.style.opacity = "1"
                        this.bed1count += z;
                    } else if (this.bed1count == 8) {
                        btn_add1.style.opacity = "0.3"
                        this.bed1count += z;
                    }
                } else {
                    if (this.bed1count > 1) {
                        this.bed1count += z;
                        btn_add1.style.opacity = "1"
                        this.bedroomcount+=z
                    } else if (this.bed1count == 1) {
                        btn_reduce1.style.opacity = "0.3"
                        this.bed1count += z;
                    }
                }
                this.bedroomcount=this.bed1count+this.bed2count+this.bed3count+this.bed4count+this.bed5count
                // console.log(this.bed1count)
            },
            bed2_count(z) {
                var btn_reduce2 = document.getElementById("btn_reduce2")
                var btn_add2 = document.getElementById("btn_add2")
                if (z == 1) {
                    if (this.bed2count < 8) {
                        btn_reduce2.style.opacity = "1"
                        this.bed2count += z;
                    } else if (this.bed2count == 8) {
                        btn_add2.style.opacity = "0.3"
                        this.bed2count += z;
                    }
                } else {
                    if (this.bed2count > 1) {
                        this.bed2count += z;
                        btn_add2.style.opacity = "1"
                    } else if (this.bed2count == 1) {
                        btn_reduce2.style.opacity = "0.3"
                        this.bed2count += z;
                    }
                }
                this.bedroomcount=this.bed1count+this.bed2count+this.bed3count+this.bed4count+this.bed5count
                // console.log(this.bed2count)
            },
            bed3_count(z) {
                var btn_reduce3 = document.getElementById("btn_reduce3")
                var btn_add3 = document.getElementById("btn_add3")
                if (z == 1) {
                    if (this.bed3count < 8) {
                        btn_reduce3.style.opacity = "1"
                        this.bed3count += z;
                    } else if (this.bed3count == 8) {
                        btn_add3.style.opacity = "0.3"
                        this.bed3count += z;
                    }
                } else {
                    if (this.bed3count > 1) {
                        this.bed3count += z;
                        btn_add3.style.opacity = "1"
                    } else if (this.bed3count == 1) {
                        btn_reduce3.style.opacity = "0.3"
                        this.bed3count += z;
                    }
                }
                this.bedroomcount=this.bed1count+this.bed2count+this.bed3count+this.bed4count+this.bed5count
                // console.log(this.bed3count)
            },
            bed4_count(z) {
                var btn_reduce4 = document.getElementById("btn_reduce4")
                var btn_add4 = document.getElementById("btn_add4")
                if (z == 1) {
                    if (this.bed4count < 8) {
                        btn_reduce4.style.opacity = "1"
                        this.bed4count += z;
                    } else if (this.bed4count == 8) {
                        btn_add4.style.opacity = "0.3"
                        this.bed4count += z;
                    }
                } else {
                    if (this.bed4count > 1) {
                        this.bed4count += z;
                        btn_add4.style.opacity = "1"
                    } else if (this.bed4count == 1) {
                        btn_reduce4.style.opacity = "0.3"
                        this.bed4count += z;
                    }
                }
                this.bedroomcount=this.bed1count+this.bed2count+this.bed3count+this.bed4count+this.bed5count
                // console.log(this.bed4count)
            },
            bed5_count(z) {
                var btn_reduce5 = document.getElementById("btn_reduce5")
                var btn_add5 = document.getElementById("btn_add5")
                if (z == 1) {
                    if (this.bed5count < 8) {
                        btn_reduce5.style.opacity = "1"
                        this.bed5count += z;
                    } else if (this.bed5count == 8) {
                        btn_add5.style.opacity = "0.3"
                        this.bed5count += z;
                    }
                } else {
                    if (this.bed5count > 1) {
                        this.bed5count += z;
                        btn_add5.style.opacity = "1"
                    } else if (this.bed5count == 1) {
                        btn_reduce5.style.opacity = "0.3"
                        this.bed5count += z;
                    }
                }
                this.bedroomcount=this.bed1count+this.bed2count+this.bed3count+this.bed4count+this.bed5count
                // console.log(this.bed5count)
            }
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
        width: 60%;
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

    .font-title3 {
        font-weight: 400;
        line-height: 1.375em;
        color: rgb(72, 72, 72);
        margin-bottom: 32px;
    }

    .font-title4 {
        font-weight: 600;
        width: 40%;
        line-height: 1.375em;
        color: #484848;
        margin-bottom: 32px;
        float: left;
    }

    .div_body3:after {
        content: "";
        display: block;
        clear: both;
    }

    .div_body3>div:last-child {
        float: left;
    }

    .btn_add {
        width: 60%;
    }

    .btn_add>div {
        float: left;
    }

    .div_btn_add {
        display: block;
        width: 32px;
        height: 32px;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid rgb(0, 132, 137);
        position: relative;
    }

    .btn_add:after {
        content: "";
        display: block;
        clear: both;
    }

    .div_btn_add>svg {
        position: absolute;
        top: 25%;
        left: 25%;
    }

    #people_count {
        width: 15%;
        display: flex;
        justify-content: center;
    }

    #people_count>span {
        display: block;
        line-height: 36px;
        font-weight: 600;
        color: #484848;
    }

    .font-title5 {
        color: #767676;
        padding: 9px 0 8px;
        font-size: 19px;
    }

    .div_bedroom {
        width: 320px;
        line-height: 24px;
        background: #fff;
        margin-bottom: 8px;
        border: 0px solid transparent;
        border-radius: 2px;
        box-sizing: border-box;
    }

    #select_bedroom {
        height: 46px;
        width: 100%;
        font-size: 13.33px;
        font-family: Arial;
        font-weight: 400;
        padding: 11px 40px 11px 11px;
        color: #484848;
        border: 1px solid #eee;
    }

    #bed_count {
        width: 15%;
        text-align: center;
        vertical-align: middle;
        height: 34px;
    }

    #bed_count>span {
        display: block;
        margin: 7px auto;
        font-weight: 600;
    }

    .div_body6 {
        box-sizing: border-box;
        padding: 30px 0;
        text-align: left;
        clear: left;
    }

    .div_body6>h3 {
        font-size: 24px;
        font-weight: normal;
        color: #484848;
    }

    .div_body7 {
        border-top: 1px solid #dce0e0;
        border-bottom: 1px solid #dce0e0;
        padding-top: 28px;
        padding-bottom: 28px;
        color: #484848;
    }

    .div_body7_show:after {
        content: "";
        display: block;
        clear: both;
    }

    .div_body7_show p:first-child {
        font-size: 19px;
    }

    .div_body7_show>div:first-child {
        width: 40%;
        float: left;
    }

    .div_body7_show>div>div:first-child {
        float: right;
    }

    .div_body7_show>div:last-child {
        float: right;
        width: 58%;
    }

    .div_body7_show {
        margin-bottom: 25px;
    }

    #addbed {
        float: right;
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        border: 1px solid #c4c4c4;
        cursor: pointer;
        padding: 9px 27px;
        border-radius: 4px;
        line-height: 1.43;
        text-align: center;
        font-family: inherit;

    }

    .div_body7_blank>div {
        margin-bottom: 18px;
        height: 36.8px;
    }

    /*加减号样式*/
    .text_addreduce {
        font-weight: 600;
        width: 40%;
        line-height: 1.375em;
        color: #484848;
        float: left;
        margin-top: 10px;
    }

    .div_btn_add {
        display: block;
        width: 32px;
        height: 32px;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid rgb(0, 132, 137);
        position: relative;
    }

    .btn_add {
        float: left
    }

    .btn_add:after {
        content: "";
        display: block;
        clear: both;
    }

    .div_btn_add>svg {
        position: absolute;
        top: 25%;
        left: 25%;
    }

    .count_addreduce {
        width: 15%;
        text-align: center;
        vertical-align: middle;
        height: 34px;
    }

    .count_addreduce>span {
        display: block;
        margin: 7px auto;
        font-weight: 600;
    }

    
</style>