<template>
<div>
  <user-header style='position:fixed; top:0; background:#ffffff; width:100%;'></user-header>
  <div class="search">
    <div class="search-nav-container _i8vcof" style="position:fixed; top:61px; border:1px solid #ccc;">
      <div>
        <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,0)"
            :style="active[0]?isActive:noActive"
          >日期</el-button>
          <div class="search-condition" v-show="active[0]">
            <div class="search-condition-detail">
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;" @click="closeaccess">取消</a>
              </span>
              <span>
                <a href="javascript:;" @click="access">确定</a>
              </span>
            </div>
          </div>
        </div>

        <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,1)"
            :style="active[1]?isActive:noActive"
          >人数</el-button>
          <div class="search-condition" v-show="active[1]">
            <div class="search-condition-detail">
              <div class="s-people">
                <div class="people-num-detail">
                  <span>成人</span>
                  <el-input-number
                    size="mini"
                    v-model="num1"
                    @change="handleChange"
                    :min="0"
                    :max="50"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div class="people-num-detail">
                  <span>儿童</span>
                  <el-input-number
                    size="mini"
                    v-model="num2"
                    @change="handleChange"
                    :min="0"
                    :max="50"
                    label="描述文字"
                  ></el-input-number>
                </div>
                <div class="people-num-detail">
                  <span>婴儿</span>
                  <el-input-number
                    size="mini"
                    v-model="num3"
                    @change="handleChange"
                    :min="0"
                    :max="50"
                    label="描述文字"
                  ></el-input-number>
                </div>
              </div>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;" @click="closeaccess">取消</a>
              </span>
              <span>
                <a href="javascript:;" @click="access">确定</a>
              </span>
            </div>
          </div>
        </div>

        <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,2)"
            :style="active[2]?isActive:noActive"
          >房源类型</el-button>
          <div class="search-condition" v-show="active[2]">
            <div class="search-condition-detail">
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="整个房源"></el-checkbox>
                <el-checkbox label="独立房间"></el-checkbox>
                <el-checkbox label="合住房间"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;" @click="closeaccess">取消</a>
              </span>
              <span>
                <a href="javascript:;" @click="access">确定</a>
              </span>
            </div>
          </div>
        </div>

        <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,3)"
            :style="active[3]?isActive:noActive"
          >价格</el-button>
          <div class="search-condition" v-show="active[3]">
            <div class="search-condition-detail">
              <el-slider v-model="price[0]" :min="50" :max="4999" show-input></el-slider>
              <el-slider v-model="price[1]" :min="price[0]+1" :max="5000" show-input></el-slider>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;" @click="closeaccess">取消</a>
              </span>
              <span>
                <a href="javascript:;" @click="access">确定</a>
              </span>
            </div>
          </div>
        </div>

        <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,4)"
            :style="active[4]?isActive:noActive"
          >闪购</el-button>
          <div class="search-condition" v-show="active[4]">
            <div class="search-condition-detail">
              <el-switch v-model="flash" active-text="闪购" inactive-text="无"></el-switch>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;" @click="closeaccess">取消</a>
              </span>
              <span>
                <a href="javascript:;" @click="access">确定</a>
              </span>
            </div>
          </div>
        </div>

        <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,5)"
            :style="active[5]?isActive:noActive"
          >位置区域</el-button>
          <div class="search-condition" v-show="active[5]">
            <div class="search-condition-detail">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="热点" name="first">热点</el-tab-pane>
                <el-tab-pane label="行政区" name="second">
                  <div class="search-district" v-for="(item,index) of disList" :key="index">
                    <a
                      href="javascript:;"
                      :data-latitude="item.District_latitude"
                      :data-longitude="item.District_longitude"
                      @click="SearchByArea($event)"
                    >{{item.District_name}}</a>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="商圈" name="third">商圈</el-tab-pane>
                <el-tab-pane label="景点" name="fourth">景点</el-tab-pane>
              </el-tabs>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;" @click="closeaccess">取消</a>
              </span>
              <span>
                <a href="javascript:;" @click="access">确定</a>
              </span>
            </div>
          </div>
        </div>

        <!-- <div class="btn-box">
          <el-button
            plain
            id="SearchBtn"
            v-on:click="change($event,6)"
            :style="active[6]?isActive:noActive"
          >更多筛选条件</el-button>
          <div class="search-condition" v-show="active[6]">
            <div class="search-condition-detail">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                  <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间" required>
                  <el-col :span="11">
                    <el-form-item prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-form-item prop="date2">
                      <el-time-picker
                        placeholder="选择时间"
                        v-model="ruleForm.date2"
                        style="width: 100%;"
                      ></el-time-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送" prop="delivery">
                  <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                  <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源" prop="resource">
                  <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式" prop="desc">
                  <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="search-ctrl">
              <span>
                <a href="javascript:;">取消</a>
              </span>
              <span>
                <a href="javascript:;">确定</a>
              </span>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <div style="height:109px;"></div>
    <div class="search-container">
      <div class="search-index">
        <h3 id='datanum' class="search-num">{{this.housenum}}</h3>
        <div class="search-subject">
          <SearchCard
            v-for="(item,i) of dataList"
            :key="i"
            :House_name="item.House_name"
            :House_Amenities="item.House_Amenities"
            :House_Bed="item.House_Bed"
            :House_Building="item.House_Building"
            :House_price="item.House_price"
            :House_tag="item.House_tag"
            :House_type="item.House_type"
            :House_detail="item.House_detail"
            :House_id="item.House_id"
            :House_imgurl="item.House_imgurl"
            ></SearchCard>
        </div>
      </div>
      <div id="mapBox" class="search-map-box">
        <div ref="map" id="map" class="search-map"></div>
      </div>
    </div>
    <div class="search-mask" v-show="mask"></div>
  </div>
</div>
</template>
<script>
import SearchCard from "./Search-card.vue";
//import BMapLib from 'BMapLib';
export default {
  name: "Map",
  data() {
    return {
      active: [false, false, false, false, false, false, false],
      isActive: { background: "#008489", color: "#fff" },
      noActive: {
        background: "#fff",
        color: "#484848",
        border: "1px solid #ccc"
      },
      input: "",
      housenum:'未有符合要求房源，请重新筛选',
      windowHeight: "",
      City_id: 2,
      disList: "",
      latitude: 39.9,
      longitude: 116.4,
      dataList: [],
      mask: false,
      date: "",
      num1: 1,
      num2: 0,
      num3: 0,
      checkList: [],
      price: [50, 5000],
      flash: false,
      activeName: "first",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource:"",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  components: {
    SearchCard
  },
  methods: {
    //访问后台接口
    SearchAxios(that) {
      var url = "http://127.0.0.1:3000/search";
      this.axios
        .get(url, {
          params: {
            House_City_id: this.City_id,
            Time_start: this.date[0],
            Time_end: this.date[1],
            people: "",
            children: "",
            baby: "",
            price: [this.price[0], this.price[1]],
            latitude: this.latitude,
            longitude: this.longitude
          }
        })
        .then(result => {
          //console.log(result.data);
          this.dataList = result.data;
          console.log(this.dataList);
          if(this.dataList!=''){
            this.housenum='超过300个房源';
          }else{
            this.housenum='未有符合要求房源，请重新筛选';
          }
          //console.log(that);
          this.drawMap(that);
        });
    },
    //获取区域
    SearchDIS() {
      var url = "http://127.0.0.1:3000/searchdis";
      this.axios
        .get(url, {
          params: {
            City_id: this.City_id
          }
        })
        .then(result => {
          console.log(result.data.data);
          this.disList = result.data.data;
        });
    },
    //根据选择区域获取数据
    SearchByArea(e) {
      //区域纬度
      console.log(e.target.dataset.latitude);
      //区域经度
      console.log(e.target.dataset.longitude);
      this.latitude = e.target.dataset.latitude;
      this.longitude = e.target.dataset.longitude;
      this.SearchAxios();
    },
    //加载地图模块高度
    mapHeight() {
      this.windowHeight = window.screen.availHeight;
      //console.log(this.windowHeight + "px");
      var mapbox = document.getElementById("mapBox");
      mapbox.style.height = this.windowHeight + "px";
    },
    //创建地图
    createMap() {
      /* eslint-disable */
      // 创建Map实例
      var map = new BMap.Map("map");
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 11);
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      // 设置地图显示的城市 此项是必须设置的
      //map.setCurrentCity("北京");
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      // //标注
      // var point = new BMap.Point(116.404, 39.915); // 创建标注
      // var marker = new BMap.Marker(point);
      //  map.addOverlay(marker);
      /*
      //创建测试用经纬度
      var x = [116.404, 116.414, 116.424]; // 测试用的3个点的经度
      var y = [39.915, 39.905, 39.895]; //测试用的3个点的纬度
      for (var i = 0; i < x.length; i++) {
        var point = new BMap.Point(x[i], y[i]); //根据经纬度创建地图上的一个点
        map.centerAndZoom(point, 15); //设置范围
        var marker = new BMap.Marker(point); //根据点来创建点状覆盖物
        map.addOverlay(marker); //把这个覆盖物加载到地图上
      }
      */
      //点击标注
      // marker.addEventListener("click", function() {
      //   console.log("您点击了标注");
      // });
      var htm = "";
      var htmlg = `<main id="main1"><div class='car'></div><div id="banner"><div id="btn-left"></div><ul id="ul-imgs" style="width:1400px; margin-left:0px;"><li><a href="javascript:;"><img src="./img/7bf9c0ef-3e6a-4e74-b9b4-3653fafeb02e.jpg"></a></li><li><a href="javascript:;"><img src="./img/e20b958d-fee5-482e-b958-bf8dee1c3dff.jpg"></a></li><li><a href="javascript:;"><img src="./img/e20b958d-fee5-482e-b958-bf8dee1c3dff.jpg"></a></li><li><a href="javascript:;"><img src="./img/e20b958d-fee5-482e-b958-bf8dee1c3dff.jpg"></a></li><li><a href="javascript:;"><img src="./img/7bf9c0ef-3e6a-4e74-b9b4-3653fafeb02e.jpg"></a></li></ul><ul id="ul-idxs"><li class="active"></li><li></li><li></li><li></li></ul><div id="btn-right"></div></div><div class='minidetail'><a href="javascript:;"><div class='minidetail-text'><span class='minihouse'>独立房间·1室1卫1床</span><span class='mininame'>利欧的房间 - 美梦</span></div></a><div class='miniprice'><span>￥158每晚</span></div><div class='miniheadimg'><img src="./img/a23a2645-fc2b-44db-bfc6-2f9cae228b56.jpg" alt=""></div><div class='sanjiao'></div></div></main>`;
      console.log(this.dataList);
      //this.minicarousel();
      for (var i = 0; i < this.dataList.length; i++) {
        var htmls = `<div id='minitag' class='minitag' click='tobig()'><span>￥${this.dataList[i].House_price}</span><div class='sanjiaos'></div></div>`;
        var htm = htmls;
        var point = new BMap.Point(
          this.dataList[i].House_longitude,
          this.dataList[i].House_latitude
        );
        var myRichMarkerObject = new BMapLib.RichMarker(htm, point, {
          anchor: new BMap.Size(0, 0),
          enableDragging: false
        });
        map.addOverlay(myRichMarkerObject);
      }
      //console.log('map'+map);
      //console.log('this'+this);
      //myRM.disableDragging();//设置Marker不能拖拽 否则是enableDragging();
      //map.addOverlay(myRM);// 设置显示覆盖物标志
      //事件
      //点击地图事件
      map.addEventListener("click", function() {
        console.log("您点击了地图。");
      });
      let that = this;
      //拖拽地图事件
      map.addEventListener("dragend", function() {
        var center = map.getCenter();
        console.log("地图中心点变更为：" + center.lng + ", " + center.lat);
        that.latitude = center.lat;
        that.longitude = center.lng;
        console.log(that.longitude, that.latitude);
        map.clearOverlays();
        // console.log('map'+map);
        // console.log('this'+this);
        var that2=this;
        //that = 外部 this
        console.log(123);
        that.SearchAxios(that2);
        console.log(123);
        //重新绘制地图
      });
      /* eslint-enable */
    },
    //修改筛选按钮样式
    change(event, index) {
      //获取点击对象
      //console.log(index);
      //console.log(event.target);
      if (this.active[index]) {
        this.active = this.active.map((item, index, arr) => {
          return false;
        });
      } else {
        this.active = this.active.map((item, index, arr) => {
          return false;
        });
        this.active[index] = true;
      }
    },
    //筛选条件方法,计数器改变
    handleChange(value) {
      console.log(value);
    },
    //tab
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    access() {
      //获取日期筛选条件
      console.log(this.date);
      //获取人数
      //console.log("成人" + this.num1, "儿童" + this.num2, "婴儿" + this.num3);
      //获取房间类型
      //console.log(this.checkList);
      //获取价格
      //console.log("低" + this.price[0], "高" + this.price[1]);
      this.SearchAxios();
      this.active = this.active.map((item, index, arr) => {
        return false;
      });
    },
    closeaccess() {
      this.active = this.active.map((item, index, arr) => {
        return false;
      });
    },
    //minicarousel
    minicarousel() {
      var i = 0;
      var LIWIDTH = 280;
      var DURATION = 500;
      var LICOUNT = 4;
      var ulImgs = document.getElementById("ul-imgs");
      var ulIdxs = document.getElementById("ul-idxs");
      var lis = ulIdxs.children;
      function moveTo(to) {
        if (to == undefined) {
          to = i + 1;
        }
        if (i == 0) {
          if (to > i) {
            ulImgs.className = "transition";
          } else {
            ulImgs.className = "";
            ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
            setTimeout(function() {
              moveTo(LICOUNT - 1);
            }, 100);
            return;
          }
        }
        i = to;
        ulImgs.style.marginLeft = -i * LIWIDTH + "px";
        for (var li of lis) {
          li.className = "";
        }
        console.log(i);
        if (i == LICOUNT) {
          i = 0;
          setTimeout(function() {
            ulImgs.className = "";
            ulImgs.style.marginLeft = 0;
          }, DURATION);
        }
        lis[i].className = "active";
      }
      var btnLeft = document.getElementById("btn-left");
      var btnRight = document.getElementById("btn-right");
      var canClick = true;
      btnRight.onclick = function() {
        move(1);
      };
      function move(n) {
        if (canClick) {
          console.log(i + n);
          moveTo(i + n);
          canClick = false;
          setTimeout(function() {
            canClick = true;
          }, DURATION + 100);
        }
      }
      btnLeft.onclick = function() {
        move(-1);
      };
      // var interval=3000;
      // var timer=setInterval(function(){
      //   moveTo()
      // },3000);
      // var banner=document.getElementById("banner");
      // banner.onmouseover=function(){
      //   clearInterval(timer);
      // }
      // banner.onmouseout=function(){
      //   timer=setInterval(function(){
      //     moveTo()
      //   },3000);
      // }
      var ulIdxs = document.getElementById("ul-idxs");
      var canClick = true;
      ulIdxs.onclick = function(e) {
        if (canClick) {
          var li = e.target;
          if (li.nodeName == "LI") {
            if (li.className !== "active") {
              for (var i = 0; i < lis.length; i++) {
                if (lis[i] == li) {
                  break;
                }
              }
              moveTo(i);
              setTimeout(function() {
                canClick = true;
              }, DURATION);
            }
          }
        }
      };
    },
    //minicarousel
    // closeBox(event){
    //   //解决点击其他位置时关闭active
    //   document.addEventListener("click", event => {
    //     console.log(event.target);
    //     if(event.target){
    //       this.active = this.active.map((item, index, arr) => {
    //         return false;
    //       });
    //     }
    //   });
    // },
    firstData() {
      //初始加载数据
      var url = "http://127.0.0.1:3000/search";
      this.axios
        .get(url, {
          params: {
            House_City_id: this.City_id,
            Time_start: this.date[0],
            Time_end: this.date[1],
            people: "",
            children: "",
            baby: "",
            price: [this.price[0], this.price[1]],
            latitude: this.latitude,
            longitude: this.longitude
          }
        })
        .then(result => {
          console.log(result.data);
          this.dataList = result.data;
          if(this.dataList!=''){
            this.housenum='超过300个房源';
          }else{
            this.housenum='未有符合要求房源，请重新筛选';
          }
          this.createMap();
        });
    },
    drawMap(that){
      onmouseenter
      for (var i = 0; i < this.dataList.length; i++) {
        var htmls = `<div id='tobig' onmouseenter='tobig()'><div id='minitag' class='minitag' ><span>￥${this.dataList[i].House_price}</span><div class='sanjiaos'></div></div></div>`;
        var htm = htmls;
        var point = new BMap.Point(
          this.dataList[i].House_longitude,
          this.dataList[i].House_latitude
        );
        var myRichMarkerObject = new BMapLib.RichMarker(htm, point, {
          anchor: new BMap.Size(0, 0),
          enableDragging: false
        });
        that.addOverlay(myRichMarkerObject);
      }
    },
    tobig(){
      console.log('tobig')
    }
  },
  mounted() {
    this.mapHeight();
    this.firstData();
  },
  created() {
    console.log(this.$route.query.lid);
    if (!this.$route.query.lid || this.$route.query.lid == "北京") {
      this.City_id =2;
      //经度
      this.longitude = 116.4;
      //纬度
      this.latitude = 39.9;
    }
    if (this.$route.query.lid == "上海") {
      this.City_id = 1;
      this.longitude = 121.47;
      this.latitude = 31.23;
    }
    //访问接口
    this.SearchDIS();
    //this.SearchAxios();
  }
};
</script>

<style scoped>
#SearchBtn {
  background: #fff;
  color: #484848;
  border: 1px solid #ccc;
}
.search-nav-container {
  position: relative;
  border-bottom: 1px solid #cccccc;
  z-index: 30;
}
._i8vcof {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 4;
  height: 48px;
  background: rgb(255, 255, 255);
  border-bottom: 0px;
  box-sizing: border-box;
  padding: 0 26px;
}
.el-button {
  display: inline-block;
  line-height: 0.5;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.el-button {
  margin-left: 10px;
}
.active {
  color: rgb(255, 255, 255);
  background: rgb(0, 132, 137);
}
.search-container {
  padding: 20px 26px 40px 26px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  /* border-top: 1px solid #cccccc; */
}
.search-num {
  margin-bottom: 0px !important;
  font-size: 24px !important;
  line-height: 30px !important;
  letter-spacing: normal !important;
  font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑",
    "Microsoft YaHei", "Heiti SC" !important;
  text-transform: undefined !important;
  color: #484848 !important;
  margin-left: 9px;
}
.search-index {
  width: 60%;
  border-right: 10px solid #cccccc;
}
.search-map-box {
  width:40%;
  position:fixed;
  top:108px;
  right: 0;
  border-left: 1px solid #cccccc;
}
.search-map {
  width: 100%;
  height: 100%;
}
.search-subject {
  box-sizing: border-box;
  padding-top: 20px;
  padding-right: 35px;
}
.el-button[data-v-633a08e5] {
  margin-left: 0;
}
.btn-box {
  position: relative;
  margin-left: 10px;
  display: inline-block;
}
.search-condition {
  position: absolute;
  left: 0;
  top: 45px;
  padding: 24px;
  min-width: 400px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  z-index: 999;
}
.people-num-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
span.el-checkbox__label {
  display: inline-block;
  padding: 10px !important;
  line-height: 30px !important;
  font-size: 20px !important;
}
.el-checkbox {
  font-weight: 700;
}
.search-ctrl {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.search-district {
  width: 100px;
  height: 40px;
  text-align: center;
  float: left;
  margin: 5px 5px 5px;
  box-sizing: border-box;
  line-height: 40px;
  /* border:1px solid #ccc;
  border-radius: 10px; */
}
.search-district a {
  color: rgb(72, 72, 72);
}
/* .search-mask {
  position: fixed;
  top: 48px;
  left: 0;
  background: #22222233;
  width: 100%;
  height: 100%;
  z-index:10;
} */
/* .search {
  transform: translate(0);
} */
.search-district a:hover {
  color: rgb(0, 132, 137);
}
/* minicarousel */
</style>

<style>
#main1 {
  display: none;
  width: 280px;
  margin: 0 auto;
}
#banner {
  display: none;
  width: 280px;
  overflow: hidden;
  position: relative;
}
#ul-imgs {
  list-style: none;
}
#ul-imgs.transition {
  transition: all 0.5s linear;
}
#ul-imgs > li {
  width: 280px;
  float: left;
}
#ul-imgs img {
  width: 280px;
}
#ul-idxs {
  width: 64px;
  margin: 0 auto;
  list-style: none;
  position: absolute;
  bottom: 25px;
  left: 50%;
  margin-left: -32px;
}
#ul-idxs > li {
  float: left;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}
#ul-idxs > li.active {
  background-color: #008489;
}
#btn-left,
#btn-right {
  /* display: none; */
  width: 20px;
  height: 36px;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px 20px;
  cursor: pointer;
}
#btn-left {
  left: 10px;
  top: 50%;
  margin-top: -18px;
  background-image: url(./img/left_ar.png);
}
#btn-right {
  right: 10px;
  top: 50%;
  margin-top: -18px;
  background-image: url(./img/right_ar.png);
}
#btn-left:hover,
#btn-right:hover {
  display: block;
}
.minidetail {
  padding: 12px;
  width: 280px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #dddddd;
  border-top: none;
}
.minidetail a {
  color: #484848;
  text-decoration: none;
}
.minidetail-text span {
  display: block;
  padding: 2px 0;
}
.minihouse {
  font-size: 12px;
  color: #767676;
}
.mininame {
  font-size: 16px;
  font-weight: 700;
}
.miniprice {
  padding: 2px 0;
  font-size: 14px;
  color: #484848;
}
.miniheadimg {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 40px;
  height: 40px;
}
.miniheadimg img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.sanjiao {
  position: absolute;
  background: #ffffff;
  width: 20px;
  height: 20px;
  bottom: -10px;
  left: 50%;
  margin-left: -10px;
  transform-origin: 10px 10px;
  transform: rotate(45deg);
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
/* 小标记 */
.minitag {
  width: 60px;
  position: relative;
  padding: 4px 5px;
  box-sizing: border-box;
  border: 1px solid #bbbbbb;
  color: #222222;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  transition: all 0.5s;
}
.minitag:hover {
  background: #008489;
  color: #ffffff;
}
.sanjiaos {
  position: absolute;
  bottom: -4px;
  left: 50%;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  border-top: none;
  border-left: none;
  width: 8px;
  height: 8px;
  transform-origin: 2px 2px;
  transform: rotate(45deg);
}
</style>
