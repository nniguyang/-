<template>
  <div>
    <div style="height:61px;">
      <!-- 引入头组件 -->
      <user-header style='position:fixed; top:0; background:#ffffff; width:100%;'></user-header>
    </div>
    <div class="data_main">
      <div class="result_title">
        <div class="result_left">
          <!-- 搜索结果城市名 -->
          <div>{{state}}</div>
          <div>搜索结果</div>
        </div>
        <div class="return_btn" @click="return_story">返回故事</div>
      </div>
      <div style="margin:32px 0;">
        <div class="common_title">
          <div class="story_class">
            故事类别
          </div>
          <div style="margin-top:16px;position:relative">
            <div class="class_carousel">  
              <ul class="class_carousel_ul transition">
                <li id="carousel_first_li">
                  <div class="carousel_img"></div>
                  <div class="carousel_text">
                    <div>美食</div>
                    <div>198</div>
                  </div>
                </li>
                <li>
                  <div class="carousel_img"></div>
                  <div class="carousel_text">
                    <div>景点</div>
                    <div>158</div>
                  </div>
                </li>
                <li>
                  <div class="carousel_img"></div>
                  <div class="carousel_text">
                    <div>房源</div>
                    <div>126</div>
                  </div>
                </li>
                <li>
                  <div class="carousel_img"></div>
                  <div class="carousel_text">
                    <div>店铺</div>
                    <div>51</div>
                  </div>
                </li>
                <li>
                  <div class="carousel_img"></div>
                  <div class="carousel_text">
                    <div>活动</div>
                    <div>39</div>
                  </div>
                </li>
                <li>
                  <div class="carousel_img"></div>
                  <div class="carousel_text">
                    <div>文化</div>
                    <div>24</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="btn_carousel">
              <div class="btn_left" @click="btn_left" id="btn_left_1">
              </div>
              <div class="btn_right" @click="btn_right">
              </div>
            </div> 
          </div>
        </div>
        <div class="common_title">
          <div class="story_class">
            住.有趣房东
          </div>
          <div class="careful_story">
            <!-- 每一行4个 -->
            <div style="margin-top:32px;">
              <ul class="careful_story_list">
                <li v-for="(item,m) of list_msg_live" :key="m">
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryList(item,m)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{state}}</span>
                      <span>{{item.detail_title}}</span>
                    </div>
                    <div class="careful_story_user">
                      <!-- 头像 -->
                      <div class="story_user_img">
                        <img :src="'http://127.0.0.1:3000/'+item.user_img" alt="">
                      </div>
                      <!-- <div class="story_user_num"> -->
                        <!-- 点赞 -->
                        <div class="story_user_zan"></div>
                        <!-- 数量 -->
                        <div class="story_user_zan_number">{{item.give_like}}</div>
                        <!-- 评论 -->
                        <div class="story_user_com" id="story_user_com"></div>
                        <!-- 数量 -->
                        <div class="story_user_com_number">{{item.give_comment}}</div>
                      <!-- </div> -->
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="common_title">
          <div class="story_class">
            食.咖啡店
          </div>
          <div class="careful_story">
            <!-- 每一行4个 -->
            <div style="margin-top:32px;">
              <ul class="careful_story_list">
                <li v-for="(item,m) of list_msg_food" :key="m">
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryList(item,m)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{state}}</span>
                      <span>{{item.detail_title}}</span>
                    </div>
                    <div class="careful_story_user">
                      <!-- 头像 -->
                      <div class="story_user_img">
                        <img :src="'http://127.0.0.1:3000/'+item.user_img" alt="">
                      </div>
                      <!-- <div class="story_user_num"> -->
                        <!-- 点赞 -->
                        <div class="story_user_zan"></div>
                        <!-- 数量 -->
                        <div class="story_user_zan_number">{{item.give_like}}</div>
                        <!-- 评论 -->
                        <div class="story_user_com" id="story_user_com"></div>
                        <!-- 数量 -->
                        <div class="story_user_com_number">{{item.give_comment}}</div>
                      <!-- </div> -->
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="common_title">
          <div class="story_class">
            玩.展览
          </div>
          <div class="careful_story">
            <!-- 每一行4个 -->
            <div style="margin-top:32px;">
              <ul class="careful_story_list">
                <li v-for="(item,m) of list_msg_active" :key="m">
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryList(item,m)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{state}}</span>
                      <span>{{item.detail_title}}</span>
                    </div>
                    <div class="careful_story_user">
                      <!-- 头像 -->
                      <div class="story_user_img">
                        <img :src="'http://127.0.0.1:3000/'+item.user_img" alt="">
                      </div>
                      <!-- <div class="story_user_num"> -->
                        <!-- 点赞 -->
                        <div class="story_user_zan"></div>
                        <!-- 数量 -->
                        <div class="story_user_zan_number">{{item.give_like}}</div>
                        <!-- 评论 -->
                        <div class="story_user_com" id="story_user_com"></div>
                        <!-- 数量 -->
                        <div class="story_user_com_number">{{item.give_comment}}</div>
                      <!-- </div> -->
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="common_title">
            <div class="story_class">
              全部故事
            </div>
            <div class="careful_story">
            <!-- 每一行4个 -->
            <div style="margin-top:32px;">
              <ul class="careful_story_list">
                <li v-for="(item,m) of list_msg" :key="m">
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryList(item,m)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{state}}</span>
                      <span>{{item.detail_title}}</span>
                    </div>
                    <div class="careful_story_user">
                      <!-- 头像 -->
                      <div class="story_user_img">
                        <img :src="'http://127.0.0.1:3000/'+item.user_img" alt="">
                      </div>
                      <!-- <div class="story_user_num"> -->
                        <!-- 点赞 -->
                        <div class="story_user_zan"></div>
                        <!-- 数量 -->
                        <div class="story_user_zan_number">{{item.give_like}}</div>
                        <!-- 评论 -->
                        <div class="story_user_com" id="story_user_com"></div>
                        <!-- 数量 -->
                        <div class="story_user_com_number">{{item.give_comment}}</div>
                      <!-- </div> -->
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <my-footer></my-footer>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      clickRightTime:0, //记录点击次数
      clickLeftTime:0,
      state:"",
      list_msg:[],
      list_msg_live:[],
      list_msg_food:[],
      list_msg_active:[]
    }
  },
  methods: {
    //获取图片
    careStoryList(item,i){
      return "backgroundImage:"+"url(http://127.0.0.1:3000/"+item.md_img+")"
    },
    btn_right(){
      var btn_left_a=document.getElementsByClassName("btn_left")[0];
      this.clickRightTime++;
      //console.log(this.clickRightTime);
      var class_carousel_ul=document.getElementsByClassName("class_carousel_ul")[0];
      if(this.clickRightTime==1){
        //右按钮显示
        btn_left_a.style.display="block";
      }
      if(this.clickRightTime<=2){
        class_carousel_ul.style.marginLeft=`${(-256*parseInt(this.clickRightTime))}px`;
      }
      //右按钮点击2次，右按钮隐藏
      if(this.clickRightTime==2){
        var btnRight=document.getElementsByClassName("btn_right")[0];
        btnRight.style.display="none";
        this.clickRightTime-=2;
      }   
    },
    btn_left(){
      var btn_right_a=document.getElementsByClassName("btn_right")[0];
      this.clickLeftTime--;
      //console.log(this.clickLeftTime);
      var class_carousel_ul=document.getElementsByClassName("class_carousel_ul")[0];
      if(this.clickLeftTime>=-2){
        class_carousel_ul.style.marginLeft=`${(-256*parseInt(this.clickLeftTime)-512)}px`
      }
      if(this.clickLeftTime==-1){
        //右按钮显示
        btn_right_a.style.display="block";
      }
      //获取当前元素的margin-left
      var marginL=class_carousel_ul.style.marginLeft;//点击一次256px
      // console.log(marginL);
      // 点击两次，左按钮隐藏
      if(this.clickLeftTime==-2){
        var btnLeft=document.getElementsByClassName("btn_left")[0];
        btnLeft.style.display="none";
        this.clickLeftTime=0;
        // console.log(this.clickLeftTime);
      }
    },
    return_story(){
      //点击返回story.vue
      this.$router.push("/story");
    }
  },
  created(){
    var city1 = this.$route.query.city;
    //console.log(city1);
    this.state=city1;
    var url="/story/search_result";
      var obj={city:this.state};
      this.axios.get(url,{params:obj}).then(result=>{
        //console.log(22222,result.data.data);
        var res_msg=result.data.data;
        //当前城市变量绑定查询到的城市
        //this.state=result.data.data.city;
        this.list_msg=res_msg;
        //1.住 list_msg_live
        for(var index1=0;index1<res_msg.length;index1++){
          if(this.list_msg[index1].story_family=="房源"){
            this.list_msg_live.push(res_msg[index1]);
          }
        }
        //2.美食 list_msg_food
        //查询获取的数据中story_family为美食d的数据，push到list_msg_food数组中
        for(var index2=0;index2<res_msg.length;index2++){
          if(this.list_msg[index2].story_family=="美食"){
            this.list_msg_food.push(res_msg[index2]);
          }
        }
        //console.log(this.list_msg_food);
        //3.玩.展览 活动 list_msg_active
        for(var index3=0;index3<res_msg.length;index3++){
          if(this.list_msg[index3].story_family=="文化"){
            this.list_msg_active.push(res_msg[index3]);
          }
        }
        //console.log(res_msg);
      })
    }
}
</script>
<style scoped>
#btn_left_1{
  display:none;
}
/*设置过渡*/ 
.class_carousel_ul.transition{
  transition:all .5s linear;
}
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
}
ul{list-style:none;}
a{text-decoration: none;}
.data_main{
  position: relative;
  width:1080px;
  padding:0 32px;
  margin:0 auto;
}
.result_title{
  position:relative;
  margin-top: 32px;
}
.result_left{
  color: #484848;
}
.result_left>:first-child{
  padding: 6px 0;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.125em; 
}
.result_left>:last-child{
  margin: 0px;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
}
.return_btn{
  position: absolute;
  top:22px;
  right:0px;
  border:1px solid rgb(0, 132, 137);
  text-align: center;
  padding:6px 15px;
  color: #008489;
  background: transparent;
  border-radius: 5px; 
  font-weight:600px;
  font-size:14px;
  cursor: pointer;
}
.common_title{
  margin-top:32px;
  position: relative;
}
.story_class{
  word-wrap: break-word;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
  color: #484848;
  padding:2px 0;
}


.class_carousel{
  overflow: hidden;
  width:1030px;
  height:74px;
  position: relative;
}
ul.class_carousel_ul{
  width:1600px;
  height:74px;
}
ul.class_carousel_ul::before{
  content:"";
  display:table;
}
ul.class_carousel_ul::after{
  content:"";
  display:table;
  clear:both;
}
ul.class_carousel_ul>li{
  float:left;
  width:240px;
  height:74px;
  padding:0 8px;
  border:1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 3px;
  margin:0px 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
}

.class_carousel_ul .carousel_img{
  width:96px;
  height:72px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top:0;
  left:0px;
}
.class_carousel_ul li:first-child>.carousel_img{
  background-image:url(http://127.0.0.1:3000/img/story/story_search_list_1.jpg);
}
.class_carousel_ul li:nth-child(2)>.carousel_img{
  background-image:url(http://127.0.0.1:3000/img/story/story_search_list_2.jpg);
}
.class_carousel_ul li:nth-child(3)>.carousel_img{
  background-image:url(http://127.0.0.1:3000/img/story/story_search_list_3.jpg);
}
.class_carousel_ul li:nth-child(4)>.carousel_img{
  background-image:url(http://127.0.0.1:3000/img/story/story_search_list_4.jpg);
}
.class_carousel_ul li:nth-child(5)>.carousel_img{
  background-image:url(http://127.0.0.1:3000/img/story/story_search_list_5.jpg);
}
.class_carousel_ul li:nth-child(6)>.carousel_img{
  background-image:url(http://127.0.0.1:3000/img/story/story_search_list_6.jpg);
}
.class_carousel_ul .carousel_text{
  position: absolute;
  top:14px;
  left:112px;
}


/*左按钮*/ 

.btn_left,.btn_right{
  width:32px;
  height: 32px;
  position: absolute;
  top: 20px;
  background-size: cover;
  background-position: center center;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  line-height: 1;
  touch-action: manipulation;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
  border-radius: 50%;
  border:2px solid transparent;
  background-color: #fff;
}
.btn_left{
  background-image: url('http://127.0.0.1:3000/img/story/icon_left.png');
  left:-6px;
  
}
.btn_right{
  background-image: url('http://127.0.0.1:3000/img/story/icon_right.png');
  right:-13px;
}

/*住.有趣房东*/
ul.careful_story_list{
  display:flex;
  justify-content: space-between;
  flex-wrap:wrap;
}
ul.careful_story_list>li{
  width:242px;
  position: relative;
  margin-bottom:16px;
}
ul.careful_story_list>li .careful_story_top{
  width:242px;
  height: 242px;
  /* background-image:url("http://127.0.0.1:3000/img/story/bg_img1_1.jpg"); */
  background-position: center center;
  background-size: cover; 
  background-repeat: no-repeat;/**/
  border-radius: 8px;
  position:relative;
}
ul.careful_story_list>li>img{
  width:100%;
  height:100%;
  overflow:hidden;
  position:absolute;
  top:0;
  left:0;
  border-radius: 8px;

}
.careful_story_top>div:first-child{
  position: absolute;
  background-color: #fff;
  bottom: 8px;
  right: 8px;
  padding: 2px 8px 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color:#484848;
  font-weight: 800;
}
.story_top_zan{
  position: absolute;
  right:8px;
  top:8px;
  width:24px;
  height: 24px;
  background-image: url(http://127.0.0.1:3000/img/story/zan1_while.png);
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  
}
/* .story_top_zan:hover{
  background-image: url(http://127.0.0.1:3000/img/story/zan1_blank.png);
}当点赞时，变颜色，再点一次，更换颜色 
*/
.careful_story_detail{
  margin-top: 8px;
  line-height: 18px;
  max-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.2857142857142858em;
  color: #484848;
}
.careful_story_detail>:first-child{
  display:inline-block;
  margin-right:4px;
  font-weight: 800;
}
.careful_story_detail>:last-child{
  font-weight: 400;
}
.careful_story_user{
  margin-top: 4px;
  /* margin-left: -1.6px; */
  /* vertical-align: middle; */
  height: 24px;
  /* display:table-cell; */
}
.careful_story_user>div{
  float:left;
  
}
.careful_story_user::before{
  content:"";
  display:table;
}
.careful_story_user::after{
  content:"";
  display:table;
  clear:both;
}
.careful_story_user>.story_user_img>img{
  width:20px;
  height: 20px;
  border-radius:50%;
}
.story_user_zan,.story_user_com{
  width:15px;
  height: 15px;
  background-image: url(http://127.0.0.1:3000/img/story/zan_black.png);
  background-size: cover;
  background-position: center center;
  margin-top:3px;
}
.story_user_com{
  width:13px;
  height: 13px;
  background-image: url(http://127.0.0.1:3000/img/story/comment_black1.png);
  margin-top:5px;
}
.story_user_zan_number,.story_user_com_number{
  font-size:12px;
  font-weight: 400;
  color:#484848;
}
.careful_story_user>div:not(:first-child){
  margin-top:4px;
  margin-left:8px;
}
#story_user_com{
  margin-top:7px;
}  
</style>
