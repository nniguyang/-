<template>
    <!-- 房源名称 -->
    <div class="div_bg">
        <div class="div_bgfff"></div>
        <div class="div_bgfff2"></div>
        <div class="div_body" style="padding-top:74px;">
            <div>
                <div class="div_title font_title1">
                    <p>为您的房源起个名字</p>
                </div>
                <div class="font-title3">
                    <p>为房源起一个能突出其独特之处的标题，吸引更多房客。</p>
                </div>
                <div class="div_body1">
                    <input type="text" maxlength="50" placeholder="房源名称" v-model="House_name" @change="House_namechange"
                        @keyup="housenamecount">
                </div>
                <div class="font-title3" style="margin-top:5px;">
                    <p v-text="`剩余${namecount}个字符`"></p>
                </div>
                <div class="font-title3" style="margin-top:40px;">
                    <p>好的房源标题可以增加房客的点击率，房屋名称可包含地标、位置、附近交通、房屋特色等信息。</p>
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
                                    <div class="next_btn" @click="submit">完成</div>
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
                House_City_id: "",
                House_District_id: "",
                House_address: "",
                House_number: "",
                House_name: "",
                namecount: 50,
                housingResources_Type: {},
                Rent_Type: [],
                House_type: "",
                House_Building: "",
                House_people_num: "",
                House_bednum: "",
                House_Bed: "",
                House_restroom: "",
                House_name: "",
                House_User_id: "",
                
            }
        },
         mounted(){
             this.load();
        },
        methods: {
             load(){
                 this.axios.get("http://127.0.0.1:3000/add/housingResources_Type").then(result => {
                     let aa=localStorage.getItem("House_Building");
                    this.House_Building=result.data[aa].housingResources_name;
                    });
                this.axios.get("http://127.0.0.1:3000/add/Rent_Type").then(result => {
                    let aa=localStorage.getItem("House_type");
                    this.House_type=result.data[aa].Rent_name;
                });
                this.House_User_id=sessionStorage.getItem("user_id");
             },      
            submit() {
                localStorage.setItem("House_name", this.House_name)
                // console.log(sessionStorage.getItem("user_id"))
                // this.housingResources_Type=localStorage.getItem("House_type")
                //合用空间床
                if (localStorage.getItem("bed1count")) {
                    this.House_Bed = localStorage.getItem("bed1count")
                }
                if (localStorage.getItem("bed2count")) {
                    this.House_Bed += `|${localStorage.getItem("bed2count")}`
                }
                if (localStorage.getItem("bed3count")) {
                    this.House_Bed += `|${localStorage.getItem("bed3count")}`
                }
                if (localStorage.getItem("bed4count")) {
                    this.House_Bed += `|${localStorage.getItem("bed4count")}`
                }
                if (localStorage.getItem("bed5count")) {
                    this.House_Bed += `|${localStorage.getItem("bed5count")}`
                }
                //  console.log(this.House_Bed)
                //0|0|0|0|0          
                this.House_people_num = localStorage.getItem("House_people_num")
                this.House_bednum = localStorage.getItem("House_bednum")
                this.House_City_id = localStorage.getItem("House_City_id")
                this.House_District_id = localStorage.getItem("House_District_id")
                this.House_address = localStorage.getItem("House_address")
                this.House_number = localStorage.getItem("House_number")
                this.House_name = localStorage.getItem("House_name")            
                this.House_restroom = localStorage.getItem("House_restroom")

                // this.House_type = localStorage.getItem("House_type")
                // this.House_Building = localStorage.getItem("House_Building")
                //接口
                 var obj={                    
                    // House_id:null,
                    House_City_id:this.House_City_id,//1
                    House_District_id:this.House_District_id,//1
                    House_address:this.House_address,//1
                    House_number:this.House_number,//1
                    House_name:this.House_name,//1
                    House_restroom:this.House_restroom,
                    House_people_num:this.House_people_num,//1
                    House_bednum:this.House_bednum,//1
                    // House_Bed:this.House_Bed,//合用空间床格式

                    House_User_id:this.House_User_id,
                    House_type:this.House_type,
                    House_Building:this.House_Building
                };
                this.axios.get("http://127.0.0.1:3000/add/ceshi", {params:obj}).then(result => {
                    //  console.log(result.data);
                })
                this.$router.push("/add_end")
            },
            return1() {
                localStorage.setItem("House_name", this.House_name)
                // this.$router.push("/add_become_a_host_room/photos")
                this.$router.go(-1);
            },
            House_namechange() {
                // this.Airbnb_House.House_name = this.House_name;
            },
            housenamecount() {
                this.namecount = 50 - this.House_name.length
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

    .div_body1>input {
        padding: 20px;
        width: 100%;
        border: 1px solid #dce0e0;
        border-radius: 3px;
        box-sizing: border-box;
        color: #484848;
        font-size: 100%;
    }
</style>