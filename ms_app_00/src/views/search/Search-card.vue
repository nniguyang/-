<template>
  <div>
    <div class="search-card _1wbi47zw" @click="gotoDetails">
      <div class="search-card-img">
        <el-carousel trigger="click" height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">
              <img :src="`http://127.0.0.1:3000/img${House_imgurl}`" alt />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="search-card-detail">
        <div class="search-house-detail">
          <div class="s-h-text">
            <span>{{House_type}}</span>
            <span>1室1.5卫1床{{House_id}}</span>
          </div>
          <div class="s-h-name">{{House_name}}</div>
          <div class="s-h-label-box">
            <span class="s-h-label">5.0分·192条评论</span>
            <span class="s-h-label">超赞房东</span>
            <span class="s-h-label">近地铁</span>
            <span class="s-h-label">高性价比</span>
            <span class="s-h-label">自助入住</span>
          </div>
        </div>
        <div class="search-house-price">
          <div class="_1ovgt1s0">￥{{House_price}}</div>
          <div class="_6rrm590">每晚</div>
          <div class="_6rrm590">
            <i class="el-icon-circle-check"></i>满七天立享9.5折
          </div>
          <div class="search-user-head">
            <img src="./img/a23a2645-fc2b-44db-bfc6-2f9cae228b56.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class></div>
  </div>
</template>
<script>
export default {
  props: {
    House_name:"",
    House_Amenities: "",
    House_Bed: "",
    House_Building: "",
    House_price: "",
    House_tag: "",
    House_type: "",
    House_detail: "",
    House_id:"",
    House_imgurl:""
  },
  data() {
    return {
      
    };
  },
  methods: {
    gotoDetails(){
      console.log(this.House_id);
      this.$router.push("/details?HouseId="+this.House_id);
    },
  },
  created(){}
};
</script>
<style scoped>
._gig1e7 {
  padding-left: 8px !important;
  padding-right: 8px !important;
}
._gig1e7 {
  width: 100% !important;
  height: 100% !important;
  padding-top: 8px !important;
  padding-bottom: 12px !important;
}
.search-card {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  margin: 8px 8px 12px;
  transition: all 0.5s linear;
  cursor:pointer;
}
.search-card:hover {
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
}
._1wbi47zw {
  position: relative !important;
  color: #484848 !important;
  height: 100% !important;
  border: 1px solid #ebebeb !important;
  border-radius: 3px !important;
}
.search-card-img {
  width: 300px;
  height: 200px;
  border-radius: 3px !important;
}
.search-card-img img {
  width: 300px;
  height: 200px;
  border-radius: 3px !important;
}
.search-card-detail {
  width: 585px;
  height: 200px;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
}
.search-house-detail {
  width: 70%;
  padding-right: 10px;
}
.search-house-price {
  width: 30%;
  border-left: 1px solid #f1f1f1;
  box-sizing: border-box;
  text-align: right;
  position: relative;
}
.s-h-text {
  color: #767676;
  font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
    "Microsoft YaHei", "Heiti SC" !important;
  font-size: 12px !important;
  line-height: 1.33333em !important;
  font-weight: 800 !important;
}
.s-h-name {
  color: #484848 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
    "Microsoft YaHei", "Heiti SC" !important;
  font-size: 16px !important;
  line-height: 1.375em !important;
  font-weight: 800 !important;
}
.s-h-label-box {
  margin-top: 8px;
}
.s-h-label {
  display: inline-block;
  position: relative !important;
  color: #484848 !important;
  padding: 2.4px 8.8px !important;
  border-radius: 15px !important;
  background-color: #eaf7ea !important;
  color: #484848 !important;
  margin: 3px !important;
  word-wrap: break-word !important;
  font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
    "Microsoft YaHei", "Heiti SC" !important;
  font-size: 12px !important;
  line-height: 1.33333em !important;
  font-weight: 800 !important;
}
/* price 字体 样式 */
._1ovgt1s0 {
  color: #484848 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
    "Microsoft YaHei", "Heiti SC" !important;
  font-size: 18px !important;
  line-height: 1.44444em !important;
  font-weight: 800 !important;
}
._6rrm590 {
  color: #484848 !important;
  margin: 10px 0 !important;
  word-wrap: break-word !important;
  font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
    "Microsoft YaHei", "Heiti SC" !important;
  font-size: 12px !important;
  line-height: 1.33333em !important;
  font-weight: 400 !important;
}
.search-user-head {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
}
.search-user-head img {
  width: 40px;
  height: 40px;
  background-color: #d8d8d8 !important;
  border-radius: 50% !important;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: #ffffff !important;
  overflow: hidden !important;
  display: block !important;
}
/* 图片轮播 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<style>
  .el-carousel__button {
    width: 25px !important;
  }
  .el-carousel__indicator {
    padding: 10px 3px !important;
  }
</style>
