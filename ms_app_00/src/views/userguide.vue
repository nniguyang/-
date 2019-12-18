<template>
  <div>
    <div style="height:61px;">
      <!-- 引入头组件 -->
      <user-header style='position:fixed; top:0; background:#ffffff; width:100%;'></user-header>
    </div>
    <div class="guide">
      <div class="guide_top">
        <div style="font-size:30px;">旅游指南</div>
        <div style="font-size:15px;">由爱彼迎房东为您精选每座城市的最佳去处。从咖啡馆、公园，到鲜为人知的隐秘景点，应有尽有，现在就来探索吧。</div>
      </div>
      <div class="guide_bottom">
        <div style="font-size:30px;margin-bottom:20px;">北美洲</div>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple-dark bigimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_san_francisco_carousel@2x.jpg)">
              <div class="bgimg">
                  <strong>旧金山</strong><br>6237个去处
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_new_york_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>纽约</strong><br>12345个去处
                </div>
              </div>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_los_angeles_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>洛杉矶</strong><br>54321个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_chicago_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>芝加哥</strong><br>6789个去处
                </div>
              </div>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_seattle_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>西雅图</strong><br>9876个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_vancouver_carousel@2x.jpg)">
              <div class="bgimg">
                  <strong>温哥华</strong><br>8888个去处
              </div>
            </div>
            <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_boston_carousel@2x.jpg)">
              <div class="bgimg">
                  <strong>波士顿</strong><br>6666个去处
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <el-row>
              <div class="grid-content bg-purple-dark bigimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_montreal_carousel@2x.jpg);">
                <div class="bgimg">
                    <strong>蒙特利亚</strong><br>5368个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_portland_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>波特兰</strong><br>4396个去处
                </div>
              </div>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_philadelphia_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>费城</strong><br>3294个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_san_diego_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>圣地亚哥</strong><br>6546个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_phoenix_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>凤凰城</strong><br>9237个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_d.c._carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>哥伦比亚特区</strong><br>6557个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_new_orleans_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>新奥尔良</strong><br>8237个去处
                </div>
              </div>
            </el-row>
          </el-col>
        </el-row>
        <div style="font-size:30px;margin-bottom:20px;">欧洲</div>
        <el-row>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_prague_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>布拉格</strong><br>6237个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_budapest_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>布达佩斯</strong><br>62997个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_stockholm_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>斯德哥尔摩</strong><br>16237个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_florence_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>佛罗伦萨</strong><br>5237个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-dark bigimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_amsterdam_carousel@2x.jpg)">
              <div class="bgimg">
                  <strong>阿姆斯特丹</strong><br>26237个去处
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_berlin_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>柏林</strong><br>237个去处
                </div>
              </div>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_rome_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>罗马</strong><br>627个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_barcelona_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>巴塞罗那</strong><br>62237个去处
                </div>
              </div>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_copenhagen_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>哥本哈根</strong><br>6237个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_melbourne_carousel@2x.jpg)">
              <div class="bgimg">
                  <strong>墨尔本</strong><br>6237个去处
              </div>
            </div>
            <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_buenos_aires_carousel@2x.jpg)">
              <div class="bgimg">
                  <strong>布宜诺斯艾利斯</strong><br>61237个去处
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <el-row>
              <div class="grid-content bg-purple-dark bigimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_london_carousel@2x.jpg);">
                <div class="bgimg">
                    <strong>伦敦</strong><br>6237个去处
                </div>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row>
              <div class="grid-content bg-purple-dark smallimg" style="margin-bottom:20px;background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_sao_paulo_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>圣保罗</strong><br>6237个去处
                </div>
              </div>
              <div class="grid-content bg-purple-dark smallimg" style="background-image:url(https://z1.muscache.cn/airbnb/guidebook/v1_new_york_carousel@2x.jpg)">
                <div class="bgimg">
                    <strong>布鲁塞尔</strong><br>3237个去处
                </div>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {

  }
};
</script>
<style scoped>
.guide {
  width: 880px;
  margin: 30px auto;
}
.guide_top {
  padding: 20px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-bottom: 30px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bigimg {
  width: 420px;
  height: 280px;
  background-size: cover;
  position: relative;
}
.smallimg {
  width: 200px;
  height: 130px;
  background-size: cover;
  position: relative;
}
.bgimg{
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
}
</style>