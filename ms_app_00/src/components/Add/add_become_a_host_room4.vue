<template>
    <!-- 地址填写 -->
    <div class="div_bg">
        <div class="div_bgfff"></div>
        <div class="div_bgfff2"></div>
        <div class="div_body" style="padding-top:74px;">
            <div>
                <div class="div_title font_title1">
                    <p>您的房源位于什么地方？</p>
                </div>
                <div class="font-title3">
                    <p>房客只有在确认预订后才会获知确切的房源地址。</p>
                </div>
                <div class="div_body1">
                    <p class="select_title">省(直辖市、自治区)</p>
                    <select name="sad" id="asd" v-model="cityid" @change="district_select(cityid)">
                        <option value="-1">请选择</option>
                        <option :value="i+1" v-for="(c,i) of city" :key="i" v-text="c.City_name"></option>
                    </select>
                </div>
                <div class="div_body2" v-show="cityid!=-1">
                    <p class="select_title">市(区)</p>
                    <select name="sasdd" id="asdsd" v-model="districtid" @change="district_change()">
                        <option value="-1">请选择</option>
                        <option :value="d.District_id" v-for="(d,i) of district" :key="i" v-text="d.District_name">
                        </option>
                    </select>
                </div>
                <div class="div_body3">
                    <p class="select_title">详细地址（无需再写省市）</p>
                    <div>
                        <input type="text" v-model="House_address" @change="addresschange" class="input_text"
                            placeholder="例如：崂山国际花园1号楼">
                    </div>
                </div>
                <div class="div_body4">
                    <p class="select_title">门牌号（仅告知预订的房客）</p>
                    <div>
                        <input type="text" v-model="House_number" @change="numberchange" class="input_text"
                            placeholder="例如：1单元1202室">
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


            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                city: {},
                district: {
                    District_name: "",
                    District_id: ""
                },
                cityid: -1,
                districtid: -1,
                House_address: "",
                House_number: "",
            }
        },
       
        created() {
            this.loadMore()
        },

        methods: {
            savelocalStorage(){
                localStorage.setItem("House_City_id", this.cityid)
                localStorage.setItem("House_District_id", this.districtid)
                localStorage.setItem("House_address", this.House_address)
                localStorage.setItem("House_number", this.House_number)
            },
            submit() {
                this.savelocalStorage();
                this.$emit('change',5);
                this.$router.push({path: '/add_become_a_host_room/location2', query: {key: this.districtid}})
            },
            return1() {
                this.savelocalStorage();
                // this.$router.push("/add_become_a_host_room/bathrooms")
                this.$router.go(-1);
            },
            loadMore() {
                this.axios.get("http://127.0.0.1:3000/add/City").then(result => {
                    //console.log(result.data)
                    this.city = result.data;
                })
            },
            district_select(n) {
                //console.log(n);
                this.axios.get("http://127.0.0.1:3000/add/district", {
                    params: {
                        "id": n
                    }
                }).then(result => {
                    //console.log(result.data)
                    this.district = result.data;
                })
                // this.Airbnb_House.H
                // House_City_id = this.cityid;
                //console.log(this.Airbnb_House.House_City_id)            
            },
            district_change() {
               // this.Airbnb_House.House_District_id = this.districtid;
                //console.log(this.Airbnb_House.House_District_id)
            },
            addresschange() {
                //this.Airbnb_House.House_address = this.House_address;
                // console.log(this.Airbnb_House.House_address)
            },
            numberchange() {
               // this.Airbnb_House.House_number = this.House_number;
                //console.log(this.Airbnb_House.House_number)
            },
        }
    }
</script>
<style scoped>
  

    .div_body {
        width:60%;
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

    .select_title {
        padding: 9px 0 8px;
        font-size: 19px;
        color: #484848;
    }

    select {
        font-size: 19px;
        padding: 19px;
        color: #484848;
        border: 1px solid #aaa;
        border-radius: 2px;
        width: 100%;
    }

    .input_text {
        background: #fff5f2;
        font-size: 18px;
        line-height: 27px;
        color: #484848;
        padding: 15px;
        width: 100%;
        border-radius: 2px;
        font-weight: 400;
        font-family: Arial;
        box-sizing: border-box;
    }

    .div_body3>div {
        border: 1px solid #f8e5df;
    }

    .div_body4>div {
        border: 1px solid #f8e5df;
    }

   
</style>