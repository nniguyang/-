<template>
  <!-- 出租类型、房源类型 -->
  <div class="div_bg">
    <div class="div_bgfff"></div>
    <div class="div_bgfff2"></div>
    <div class="div_body" style="padding-top:74px;">
      <div>
        <div class="div_title font_title1">
          <p>您打算出租的是什么样的房子？</p>
        </div>
        <div class="div_body1">
          <div class="font_title2">
            <p>房源类型</p>
          </div>
          <div class="div_btn" id="housingResources">
            <div
              @click="select(i,type)"
              v-for="(type,i) of housingResources_Type"
              :key="i"
              v-text="type.housingResources_name"
              :data-id="type.housingResources_id"
            ></div>
          </div>
          <div>
            <a href="javascript:;" style="padding-left:0px;" @click="show()" id="type">其他房源类型</a>
          </div>
        </div>
        <div class="div_body2">
          <div class="font_title2">
            <p>出租类型</p>
          </div>
          <div class="div_btn" id="Rent_Type">
            <div @click="Rentselect(0)" style="background:rgb(178,218,219)">
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style="height: 24px; width: 24px; display: block; fill: currentcolor;"
              >
                <path
                  d="m23.57 11.4-1.75-1.76-3.85-3.87-1.78-1.79-2.7-2.71-.82-.83-.22-.23-.06-.06c-.22-.22-.53-.22-.73-.02l-1.75 1.76-3.85 3.87-3.85 3.87-1.75 1.76a1.49 1.49 0 0 0 -.44 1.05v.01c0 .38.15.77.44 1.06l.55.55a1.49 1.49 0 0 0 2.01.08v8.4c0 .81.68 1.45 1.5 1.45h15c .82 0 1.5-.65 1.5-1.45v-8.4c.59.49 1.45.47 2.01-.08l.55-.55c.29-.29.44-.68.44-1.06v-.01c0-.38-.14-.77-.44-1.06zm-3.57 11.16c0 .24-.22.45-.5.45h-15c-.28 0-.5-.21-.5-.45v-9.36l8-7.99 8 7.99zm2.85-9.74-.55.55c-.2.2-.52.2-.71.01l-9.24-9.22a.5.5 0 0 0 -.71 0l-9.24 9.22a.5.5 0 0 1 -.71-.01l-.55-.55a.5.5 0 0 1 -.01-.71l1.75-1.76 3.85-3.87 3.85-3.87 1.4-1.4.77.77 2.7 2.71 1.78 1.79 3.85 3.87 1.75 1.76a.51.51 0 0 1 -.01.71z"
                  fill-rule="evenodd"
                />
              </svg>
              <div class="font_title3" v-text="Rent_Type[0].Rent_name"></div>
              <div v-text="Rent_Type[0].Rent_about"></div>
            </div>
            <div @click="Rentselect(1)">
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style="height: 24px; width: 24px; display: block; fill: currentcolor;"
              >
                <path
                  d="m17.5 17a .5.5 0 0 0 -.5.5v2.11c0 .22-.16.39-.33.39h-3.67v-15.03a.5.5 0 0 0 -.32-.47 477.53 477.53 0 0 0 -1.9-.73 737.69 737.69 0 0 0 -4.22-1.61l-.27-.1c-1.08-.4-2.03-.75-2.87-1.06h13.19c.22 0 .39.18.39.41v4.09a.5.5 0 0 0 1 0v-4.09c0-.78-.62-1.41-1.39-1.41h-16.11c-.02 0-.03.01-.05.01a.48.48 0 0 0 -.36.22c-.01.02-.03.04-.04.06a.49.49 0 0 0 -.05.21v17.8c0 .76.56 1.55 1.27 1.81l10.12 3.77c.85.32 1.62-.21 1.62-1.11v-1.77h3.67c.73 0 1.32-.63 1.32-1.39v-2.11a.5.5 0 0 0 -.5-.5zm-5.5 5.77c0 .2-.07.25-.27.18l-10.11-3.78c-.32-.12-.62-.54-.62-.88v-17.09c1.1.38 2.79 1 4.94 1.81l.27.1a738.69 738.69 0 0 1 5.79 2.21zm-2-11.27v3a .5.5 0 0 1 -1 0v-3a .5.5 0 1 1 1 0zm10-1.41v-.59a2.5 2.5 0 1 0 -5 0v .59a1.5 1.5 0 0 0 -1 1.41v3c0 .83.67 1.5 1.49 1.5h4.02a1.5 1.5 0 0 0 1.49-1.5v-3c0-.66-.42-1.21-1-1.41zm-4-.59a1.5 1.5 0 0 1 3 0v .5h-3zm4 5a .5.5 0 0 1 -.49.5h-4.02a.49.49 0 0 1 -.49-.5v-3a .5.5 0 0 1 .49-.5h4.02c.27 0 .49.22.49.5z"
                  fill-rule="evenodd"
                />
              </svg>
              <div class="font_title3" v-text="Rent_Type[1].Rent_name"></div>
              <div v-text="Rent_Type[1].Rent_about"></div>
            </div>
            <div @click="Rentselect(2)">
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style="height: 24px; width: 24px; display: block; fill: currentcolor;"
              >
                <path
                  d="m21.5 8c-.17 0-.34.02-.5.04v-2.54a2.5 2.5 0 0 0 -2.5-2.5h-13a2.5 2.5 0 0 0 -2.5 2.5v2.54a3.32 3.32 0 0 0 -.5-.04c-1.47 0-2.49.84-2.5 2.5-.01.81.22 1.37.65 1.79.09.09.29.26.35.32-.01.17-.02.65-.02 1.37a184.39 184.39 0 0 0 .01 1.54c.01.83.68 1.49 1.51 1.49h1.5v1.49c0 .89.68 1.5 1.5 1.5.86 0 1.5-.6 1.5-1.5v-1.5h10v1.5c0 .9.68 1.5 1.5 1.5s1.5-.6 1.5-1.5v-1.5h1.51c.83 0 1.5-.67 1.5-1.5v-2.89c.08-.06.26-.2.34-.28.43-.4.65-.98.65-1.84 0-1.54-1.09-2.49-2.5-2.49zm-17.5-2.5c0-.83.67-1.5 1.5-1.5h13c .83 0 1.5.67 1.5 1.5v2.94c-.61.42-1 1.12-1 2.06v1.49c0 .01-14 .01-14 .01v-1.5c0-.98-.38-1.68-1-2.09zm2 13c0 .33-.18.5-.5.5-.29 0-.5-.19-.5-.5v-1.5h1zm13 0c0 .32-.21.5-.5.5-.3 0-.5-.18-.5-.5v-1.5h1zm3.66-6.89c-.06.06-.32.25-.35.27-.19.16-.31.35-.31.61v3.01a.5.5 0 0 1 -.5.5h-19a .5.5 0 0 1 -.51-.5 198.01 198.01 0 0 1 -.01-1.53c0-.75 0-1.28.02-1.43-.02-.3-.11-.46-.26-.62-.06-.06-.32-.28-.38-.34-.24-.24-.36-.54-.36-1.08.01-1.06.54-1.5 1.5-1.5.94 0 1.5.47 1.5 1.5v1.5c0 .56.45 1 1 1h14c .56 0 1-.45 1-1.01v-1.49c0-.98.6-1.5 1.5-1.5.89 0 1.5.53 1.5 1.5 0 .6-.12.91-.34 1.11z"
                  fill-rule="evenodd"
                />
              </svg>
              <div class="font_title3" v-text="Rent_Type[2].Rent_name"></div>
              <div v-text="Rent_Type[2].Rent_about"></div>
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
                <svg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style="height: 2.8em; width: 1em; display: block; fill: currentcolor;"
                >
                  <path
                    d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                    fill-rule="evenodd"
                  />
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
</template>
<script>
export default {
  data() {
    return {
      housingResources_Type: [],
      Rent_Type: [
        {
          Rent_name: ""
        },
        {
          Rent_name: ""
        },
        {
          Rent_name: ""
        }
      ],
      Rent_Type1: "",
      House_Building: ""
    };
  },
  created() {
    this.loadMore();
  },
  mounted() {
    setTimeout(() => {
      this.localStorage();
    }, 300);
  },
  methods: {
    loadMore() {
      this.axios
        .get("http://127.0.0.1:3000/add/housingResources_Type")
        .then(result => {
          this.housingResources_Type = result.data;
        });
      this.axios.get("http://127.0.0.1:3000/add/Rent_Type").then(result => {
        this.Rent_Type = result.data;
      });
      var loadtime = setInterval(() => {
        if (this.housingResources_Type.length > 0 && this.Rent_Type > 0) {
          this.localStorage();
          clearInterval(loadtime);
        }
      }, 10);
    },
    savelocalStorage() {
      localStorage.setItem("House_type", this.Rent_Type1);
      localStorage.setItem("House_Building", this.House_Building);
    },
    submit() {
      this.savelocalStorage();
      this.$emit("change", 2);
      this.$router.push("/add_become_a_host_room/bedrooms");
      // this.$router.push("/add_become_a_host_room/bedrooms?id=6");
      // this.$router.push({path:'/add_become_a_host_room/bedrooms' , params: { add_page:this.add_page }})
    },
    return1() {
      this.savelocalStorage();
      // this.$router.push("/index")
      this.$router.go(-1);
    },
    show() {
      var div = document.getElementById("housingResources");
      var divs = div.childNodes;
      for (var divc of divs) {
        //console.log(divc)
        divc.style.display = "block";
      }
      var type = document.getElementById("type");
      type.style.display = "none";
    },
    select(i) {
      var div = document.getElementById("housingResources");
      var divs = div.childNodes;
      for (var divc of divs) {
        divc.style.background = "rgb(242,242,242)";
      }
      divs[i].style.background = "rgb(178,218,219)";
      this.House_Building = i;
      //console.log(this.House_Building)
    },
    Rentselect(i) {
      var Rent_Type = document.getElementById("Rent_Type");
      var Rent_Types = Rent_Type.childNodes;
      for (var Rent_Typec of Rent_Types) {
        Rent_Typec.style.background = "rgb(242,242,242)";
      }
      Rent_Types[i].style.background = "rgb(178,218,219)";
      this.Rent_Type1 = i;
      // console.log(this.Rent_Type1)
    },
    localStorage() {
      let n = localStorage.getItem("House_Building");
      if (n > 11) {
        this.show();
      }
      this.select(n);
      let m = localStorage.getItem("House_type");
      this.Rentselect(m);
    }
  }
};
</script>
<style scoped>
.div_body {
  width: 60%;
  margin: auto;
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
  padding: 32px 0 24px;
}

.div_body1 {
  margin: 40px 0 16px;
}

.font_title2 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.44444em;
  color: rgb(72, 72, 72);
}

.div_btn {
  margin: 16px -8px;
}

.div_btn:after {
  content: "";
  display: block;
  clear: both;
}

.div_body1 .div_btn > div {
  float: left;
  box-sizing: border-box;
  color: rgb(72, 72, 72);
  font-size: 14px;
  width: calc(25% - 16px);
  margin: 9px 8px;
  height: 20px;
  padding: 7px 0;
  background: rgb(242, 242, 242);
  border: none;
  border-radius: 4px;
  height: 34px;
  text-align: center;
  cursor: pointer;
}

.div_body1 .div_btn > div button {
  padding: 7px 0;
}

.div_body1 a {
  color: #008489;
  font-weight: bold;
  padding: 10px 7px;
}

.return_btn:hover {
  text-decoration: underline;
}

.div_body2 .div_btn > div {
  float: left;
  box-sizing: border-box;
  color: rgb(72, 72, 72);
  font-size: 14px;
  width: calc(33.33% - 16px);
  margin: 9px 8px;
  padding: 16px;
  background: rgb(242, 242, 242);
  border: none;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
}

.font_title3 {
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
}

.font_title3 + div {
  font-weight: 300;
  line-height: 18px;
}

#housingResources > div:nth-child(12) ~ div {
  display: none;
}

/*默认选中第一个*/
.Rent_Type_select {
  background: rgb(178, 218, 219);
}
</style>
<!-- 底部样式 -->
<style>
.div_footer1 {
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 100;
  height: 90px;
}

.div_footer1 > div {
  width: 60%;
  margin: auto;
  height: 90px;
}

.div_margin {
  background: #fff;
  width: 60%;
  height: 90px;
  box-sizing: border-box;
}
.div_margin > div:first-child {
  border: 1px solid #dce0e0;
  box-sizing: border-box;
  margin: 0 30px;
}

.div_margin > div:nth-child(2) {
  padding: 0 30px 16px 30px;
}
.div_return_submit:after {
  content: "";
  display: block;
  clear: both;
}
.div_return_submit {
  margin-top: 20px;
  width: 100%;
}
.div_return_submit svg {
  color: #008489;
}
.div_div_svg_return1 {
  float: left;
}
.return_btn {
  display: block;
  float: left;
  color: #008489;
  font-weight: bold;
  padding: 10px 7px;
  height: 48px;
}

.a_footer1:hover {
  text-decoration: underline;
}

.next_btn {
  float: right;
  height: 48px;
  min-width: 12%;
  max-width: 24%;
  padding: 12px 22px;
  box-sizing: border-box;
  background: #008489;
  border-radius: 5%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}
</style>
<!-- 背景色+两个常用字号 -->
<style>
.div_bgfff {
  position: fixed;
  width: 50%;
  background: #fff;
  z-index: -1;
  top: 0px;
  left: 0px;
  bottom: 0px;
}
.div_bgfff2 {
  position: fixed;
  width: 44%;
  background: #f8f8f8;
  z-index: -1;
  top: 0px;
  right: 0px;
  bottom: 0px;
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
</style>