<template>
    <!-- 卫生间数量 -->
    <div class="div_bg">
        <div class="div_bgfff"></div>
        <div class="div_bgfff2"></div>
        <div class="div_body" style="padding-top:74px;">
            <div>
            <div class="div_title font_title1">
                <p>有几个卫生间？</p>
            </div>
            <div class="font-title3">
                <p>没有淋浴区或浴缸的卫生间算半个卫生间。</p>
            </div>
            <div class="div_body1">
                <div class="text_addreduce">
                    <p>卫生间</p>
                </div>
                <div class="btn_add">
                    <div @click="bed_count(-1)" id="btn_reduce">
                        <span class="div_btn_add">
                            <svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"
                                style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                <rect height="2" rx="1" width="12" x="6" y="11"></rect>
                            </svg>
                        </span>
                    </div>
                    <div class="count_addreduce">
                        <span v-text="count"></span>
                    </div>
                    <div @click="bed_count(1)" id="btn_add">
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
            <!-- 底部固定悬浮 -->
            <div class="div_footer1">
                <div>
                    <div class="div_margin">
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
      count: 1
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    savelocalStorage(){
        localStorage.setItem("House_restroom", this.count)
    },
    loadMore() {
      // if(this.add_page>=2){
      //     this.Airbnb_House.House_restroom=0;
      // }
    },
    submit() {
      this.savelocalStorage();
      this.$emit("change", 4);
      this.$router.push("/add_become_a_host_room/location");
    },
    return1() {
      this.savelocalStorage();
      // this.$router.push("/add_become_a_host_room/bedrooms");
      this.$router.go(-1);
    },

    bed_count(z) {
      var btn_reduce = document.getElementById("btn_reduce");
      var btn_add = document.getElementById("btn_add");
      if (z == 1) {
        if (this.count < 8) {
          btn_reduce.style.opacity = "1";
          this.count += z;
        } else if (this.count == 8) {
          btn_add.style.opacity = "0.3";
          this.count += z;
        }
      } else {
        if (this.count > 1) {
          this.count += z;
          btn_add.style.opacity = "1";
        } else if (this.count == 1) {
          this.count += -0.5;
        } else if (this.count == 0.5) {
          this.count += -0.5;
          btn_reduce.style.opacity = "0.3";
        }
      }
      //console.log(this.count)
      // this.Airbnb_House.House_restroom=this.count
      //console.log(this.Airbnb_House.House_restroom);
    }
  }
};
</script>
<style scoped>
html {
  background: #f8f8f8;
  position: absolute !important;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.div_body {
  width: 60%;
  margin: auto;
  font-size: 16px;
}

.div_body > div {
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

.text_addreduce {
  font-weight: 600;
  width: 40%;
  line-height: 1.375em;
  color: #484848;
  float: left;
  margin-top: 10px;
}

.div_btn_add {
  float: left;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgb(0, 132, 137);
  position: relative;
}

.btn_add {
  float: left;
  width: 60%;
}

.btn_add > div {
  float: left;
  width: 32px;
  height: 32px;
}

.btn_add:after {
  content: "";
  display: block;
  clear: both;
}

.div_btn_add > svg {
  position: absolute;
  top: 25%;
  left: 25%;
}

.count_addreduce {
  width: 15% !important;
  text-align: center;
  vertical-align: middle;
  height: 34px;
}

.count_addreduce > span {
  display: block;
  margin: 7px auto;
  font-weight: 600;
}
</style>