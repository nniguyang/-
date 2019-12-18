<template>
  <div>
    <div style="height:61px;">
      <!-- 引入头组件 -->
      <user-header style='position:fixed; top:0; background:#ffffff; width:100%;'></user-header>
    </div>
    <!-- 以下是搜索界面 -->
    <div class="search_story search_active" id="search_story_main">
      <div style="margin-top:32px;">
        <div class="search_input">
          <el-autocomplete  placeholder="请输入搜索内容" id="el_input" @keyup.enter.native="insearch" v-model="state"
          :fetch-suggestions="querySearchAsync" @select="handleSelect" v-focus ></el-autocomplete>
          <div>
            <img class="cancel_search" @click="cancel_seachStory" src="http://127.0.0.1:3000/img/story/cancel.png" alt="">
          </div>
        </div>
        <!-- <el-table :data="peopleMange"> 
        </el-table> -->
        <div class="hot_place">
          <div class="hot_title">
            热门目的地
          </div>
          <ul class="hot_city_list">
            <li v-for="(item3,p) of hot_place1" :key="p">
              <a href="javascript:;">
                <div><img :src="'http://127.0.0.1:3000/'+item3.hot_place_img" ></div>
                <p>{{item3.hot_city}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="near_search">
          <div class="near_search_title hot_title">
            最近搜索
          </div>
          <ul class="near_search_list">
            <li v-for="(item1,j) of hot_city_list" :key="j">{{item1}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 以下是story主页面的内容 暂时设置为display:none-->
    <div class="main" id="main">
        <!-- 故事标题 -->
        <div class="story_title">
          <span>故事</span>
          <a href="javascript:;" id="search_story1" @click="search_story1">搜索故事
            <img src="http://127.0.0.1:3000/img/story/story_search.png" alt="">
          </a>
        </div>
        <!-- 导航栏 -->
        <!-- 1.精选故事 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="精选故事" name="first">
            <div class="common_title">
              <div class="recommend_search">推荐搜索</div>
              <div style="margin-top:32px">
                <!-- 无限滚动 -->
                <ul class="recommend_list">
                  <!-- li可以绑定v-for -->
                  <li>
                    <div class="recommend_mask"></div>
                    <div class="recommend_text">
                      <p>上海</p>
                      <p>推荐搜索</p>
                    </div>
                    <!-- 上面覆盖一层半透明遮罩层 -->
                  </li>
                  <li>
                    <div class="recommend_text">
                      <p>成都</p>
                      <p>热门搜索</p>
                    </div>
                    <div class="recommend_mask"></div>
                  </li>
                  <li>
                    <div class="recommend_text">
                      <p>京都</p>
                      <p>本周热度</p>
                    </div>
                    <div class="recommend_mask"></div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 故事集 -->
            <div class="common_title">
              <div class="recommend_search">故事集
                <a id="select_all" href="javascript:;">查看全部</a>
              </div>
              <div style="margin-top:32px;">
                <div class="story_collections">
                  <ul class="story_collections_list">
                    <li>
                      <div>
                        <a href="javascript:;">
                          <div>城市合辑</div>
                          <div class="collections_title">
                            <div>北京竟然有这些</div>
                            <div>不可思议的酒吧</div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a href="javascript:;">
                          <div>爱彼迎民宿指南</div>
                          <div class="collections_title">
                            <div>住进[山水间]</div>
                            <div>在民宿中亲近自然</div>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <a href="javascript:;">
                          <div>爱彼迎民宿指南</div>
                          <div class="collections_title">
                            <div>住进[旧时光]</div>
                            <div>在民宿中重拾历史</div>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- 精选故事 -->
            <div class="common_title">
              <div class="recommend_search">精选故事</div>
              <div class="careful_story">
                <!-- 每一行4个 -->
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>{{item.story_family}}</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
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
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>{{item.story_family}}</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
                          <span>{{item.detail_title}}</span>
                        </div>
                        <div class="careful_story_user">
                          <!-- 头像 -->
                          <div class="story_user_img">
                            <img v-lazy="'http://127.0.0.1:3000/'+item.user_img" alt="">
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
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>{{item.story_family}}</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
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
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>{{item.story_family}}</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
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
          </el-tab-pane>
          <el-tab-pane label="房源" name="second">
            <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>房源</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
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
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>房源</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
                          <span>{{item.detail_title}}</span>
                        </div>
                        <div class="careful_story_user">
                          <!-- 头像 -->
                          <div class="story_user_img">
                            <img v-lazy="'http://127.0.0.1:3000/'+item.user_img" alt="">
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
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>房源</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
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
                <div style="margin-top:32px;">
                  <ul class="careful_story_list" id="careful_story_list">
                    <li v-for="(item,i) of sel_list" :key="i" >
                      <a href="javascript:;">
                        <div class="careful_story_top" :style="careStoryTop(item,i)">
                          <div>房源</div>
                          <!-- 点赞 -->
                          <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                        </div>
                        <div class="careful_story_detail">
                          <span>{{item.city}}</span>
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
          </el-tab-pane>
          <el-tab-pane label="景点" name="third">
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>景点</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>景点</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>景点</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>景点</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
          </el-tab-pane>
          <el-tab-pane label="美食" name="fourth">
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>美食</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>美食</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>美食</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>美食</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
          </el-tab-pane>
          <el-tab-pane label="文化" name="fifth">
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>文化</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>文化</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>文化</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>文化</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
          </el-tab-pane>
          <el-tab-pane label="活动" name="sixth">
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>活动</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
          </el-tab-pane>
          <el-tab-pane label="店铺" name="seventh">
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>店铺</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>店铺</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>店铺</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
            <div style="margin-top:32px;">
              <ul class="careful_story_list" id="careful_story_list">
                <li v-for="(item,i) of sel_list" :key="i" >
                  <a href="javascript:;">
                    <div class="careful_story_top" :style="careStoryTop(item,i)">
                      <div>店铺</div>
                      <!-- 点赞 -->
                      <div class="story_top_zan" @click="zanAdd(item,i,s)"></div>
                    </div>
                    <div class="careful_story_detail">
                      <span>{{item.city}}</span>
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
          </el-tab-pane>
        </el-tabs>
        
    </div> 
    <div id="footer">
      <my-footer></my-footer>
    </div>
  </div>


</template>
<script>
// import MyHeader from '/MyHeader.vue'
export default {
  // components:{headerComponent},
  data() {
    return {
      activeName: 'first',//设置当前显示的是第一个标签内容
      count:0,
      sel_list:[],//从数据库获取的数据列表
      hot_city_list:[],
      input:'',
      s:0,
      timeout:  null,
      restaurants: [],
      state: '',
      hot_place1:[]
    };
  },
  methods: {
    //实现背景图片动态生成
    careStoryTop(item,i){
      return "backgroundImage:"+"url(http://127.0.0.1:3000/"+item.md_img+")"
    },
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    load () {
      this.count += 2;
    },
    zanAdd(item,i,s){
      item.give_like++;
      //console.log(item.give_like,this.s);
      if(this.s==1){  
        item.give_like-=2;
        //console.log(item.give_like,this.s);
        //this.s=0;
      }
      this.s++;
    },
    // 键盘回车实现搜索查询，将input内容追加到数组中，然后在页面中显示，并跳转到相应的搜索页面
      insearch(){
        //当输入数据和当前数组中元素内容不同时，在数组开头追加元素，
        var pos=this.hot_city_list.indexOf(this.state);
        if(pos<0){
          this.hot_city_list.unshift(this.state);
        }
        //console.log(this.hot_city_list);
        var hot_place=document.getElementsByClassName("hot_place")[0];
        //console.log(hot_place);
        hot_place.style.display="none";
        //异步查询数据库中包含搜索词的内容!!!
        var url="/story/search_result";
        var obj={city:this.state};
        this.axios.get(url,{params:obj}).then(result=>{
          //console.log(1111,result.data.data[0].city);
          var city_result=result.data.data[0].city;
          //console.log(3333,city_result);
          //跳转到search_result.vue
          this.$router.push(`/Search_result?city=${city_result}`);
        })
      },
      loadAll() {
        return [
          { "value": "北京" },
          { "value": "上海" },
          { "value": "深圳" },
          { "value": "珠海" },
          { "value": "东京" }
        ];
      },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      //console.log(item.value);
      //document.querySelector('input').focus();//当选中选项后，input中二次自动获取焦点
      document.getElementById('el_input').focus();
    },
    //点击搜索故事按钮，当前主页面添加active样式，即隐藏；搜索页面显示，去除story_active样式
    search_story1(){
      var search_story_main=document.getElementById("search_story_main");
      var main=document.getElementById("main");
      main.style.display="none";
      search_story_main.style.display="block";
      //页脚部分隐藏
      var foot=document.getElementById("footer");
      foot.style.display="none";
    },
    cancel_seachStory(){
      var search_story_main=document.getElementById("search_story_main");
      var main=document.getElementById("main");
      main.style.display="block";
      search_story_main.style.display="none";
      //页脚部分显示
      var foot=document.getElementById("footer");
      foot.style.display="block";
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created(){
    //1.请求主页面
    var url="/story";
    this.axios.get(url).then(result=>{
      //console.log(result.data);
      //通过sel_list[]数组来接收数据，显示在页面上
      this.sel_list=result.data;
      //console.log(this.sel_list[0].md_img,this.careStoryTop.backgroundImage );
    });
    //2.请求热门目的地
    var url2="/story/hot_place";
    this.axios.get(url2).then(result=>{
      //console.log(result.data.data);
      this.hot_place1=result.data.data;
    })
  },
  //二次获取焦点
  directives: {
    focus: {
        inserted: function (el) {
          el.querySelector('input').focus()
        }
    }
  }
}   
</script>
<style scoped>
/*无限下拉*/ 
.infinite-list{
 /**/max-height: 100vh;
    overflow-y: auto; 
}

.search_story.search_active{
  display:none;
}
/*搜索界面*/
.search_story{
  width: 1080px;
  position: relative;
  overflow: hidden;
  padding: 0 32px;
  margin: 0 auto;
  color:#484848;
  font-weight:400;
}
.search_input{
  width:1080px;
  background: #fff;
  margin:0 auto;
  border-bottom:2px solid #008489;
  font-size:16px;
  position: relative;
}
/*父子组建中加deep修改组件原有样式*/ 
.search_input /deep/ #el_input{
  border:none !important;
  width:1080px;
  margin:0 auto;
  line-height:24px;
  font-size:16px !important;
  color:#484848 !important;
}
img.cancel_search{
  float: right;
  width:15px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  top:13px;
  right:51px;
}
.hot_title{
  margin-top:20px;
  font-size:14px;
}
ul.hot_city_list{
  margin-top:16px;
}
ul.hot_city_list::before{
  content:"";
  display:table;
}
ul.hot_city_list::after{
  content:"";
  display:table;
  clear:both;
}
ul.hot_city_list>li{
  float:left;
  text-align: center;
  margin: 8px 24px 10px 4px;
}
ul.hot_city_list>li img{
  width:44px;
  height:44px;
  border-radius:50%;
  background-color: #dbdbdb;
  margin-bottom:8px;
}
ul.hot_city_list>li>a{
  font-size:14px;
  font-weight:400;
  color:#484848;
}
/*最近搜索*/ 
.near_search{
  margin-top:48px;
}
ul.near_search_list>li{
  padding:16px 0;
  border-bottom: 1px solid rgb(235, 235, 235);
}

*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
}
ul{list-style:none;}
a{text-decoration: none;}
.main{
  position: relative;
  width:1080px;
  padding:0 32px;
  margin:0 auto;
  /* border:1px solid #f00; */
}
.main.main_active{
  display:none;
}
.story_title{
  padding:6px 0;
  color: #484848;
  height: 48px;
  line-height: 48px;
}
.story_title>:first-child{
  /* margin: 0px; */
  word-wrap: break-word;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.125em;
  
  /* padding:6px 0; */
}
.story_title>:nth-child(2){
  font-size:14px;
  font-weight: 400;
  float:right;
  color:#484848;
}
.story_title img{
  width:15px;
  height: 15px;
}
.story_content::after{
  content:"";
  display:table;
  clear:both;
}
/*导航栏*/ 
/*修改生成元素样式*/ 
/*
.el-tabs__nav-scroll{
  margin-top:32px !important;
}
.el-tabs__nav .is-top{
  border-bottom: 1px solid #EBEBEB !important;
  position: relative !important;
  display: inline-block !important;
  vertical-align: middle !important;
  min-width: 100%;
  margin-top:8px !important;
}
.el-tabs__item{
  float:left !important;
  padding:16px 0 !important;
  margin:0 24px 0 0 !important;
  color:#484848 !important;
  font-size:14px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
}
#tab-first{
  color:#484848 !important;
}
*/
/* .el-tabs__item is-top is-active{

} */
ul.story_nav{
  border-bottom: 1px solid #EBEBEB;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-width: 100%;
  margin-top:8px;
}
ul.story_nav>li{
  float:left;
  padding:16px 0;
  margin:0 24px 0 0;
  color:#484848;
  font-size:14px;
  font-weight: 600;
  cursor: pointer;
}
ul.story_nav>li.active{
  color:#008489;
  border-bottom: 2px solid #008489;
}
.common_title{
  margin-top:32px;
  position: relative;
}
/*推荐搜索*/ 
.recommend_search{
  word-wrap: break-word;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
  color: #484848;
  padding:2px 0;
}
ul.recommend_list{
  /* width: 156px; */
  height: 156px;
  margin:0 -8px;
}
ul.recommend_list::before{
  content:"";
  display:table;
}
ul.recommend_list::after{
  content:"";
  display:table;
  clear:both;
}
ul.recommend_list>li{
  display: block;
  position: relative;
  float:left;
  width: 156px;
  height:156px;
  background-image:url(http://127.0.0.1:3000/img/story/recommend_city_1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply !important;
  margin:0 8px;
  text-align: center;
  /* 设置边框为圆角 */
  border-radius: 10px;
  cursor: pointer;
}
ul.recommend_list>li:nth-child(2)>div.recommend_mask{
  background-image:url(http://127.0.0.1:3000/img/story/recommend_cityhide_2.jpg);
}
ul.recommend_list>li:nth-child(3)>div.recommend_mask{
  background-image:url(http://127.0.0.1:3000/img/story/recommend_cityhide_3.jpg);
}
ul.recommend_list>li>div.recommend_mask{
  position:absolute;
  top:0;
  left:0;
  width:156px;
  height: 156px;
  border-radius: 10px;
  /* 背景色需要考究 */
  background-image:url(http://127.0.0.1:3000/img/story/recommend_cityhide_1.jpg);
  z-index: 0;
  opacity:0.70; 
}
.recommend_text{
  z-index: 999;
}
.recommend_text>:first-child{
  margin-top:44px;
  font-size: 24px;
  font-weight: 600;
  color:#000;
  z-index: 1000;
}
.recommend_text>:last-child{
  margin-top:8px;
  font-size: 14px;
  font-weight: 600;
  color:#000;
}
#select_all{
  float:right;
  font-size:14px;
  color:#484848;
}
#select_all:hover{
  text-decoration: underline;
}
.story_collections{
  height:164px;

}
.story_collections::before{
  content:"";
  display:table;
}
.story_collections::after{
  content:"";
  display:table;
  clear:both;
}
ul.story_collections_list{
  display:flex;
  justify-content: space-between;
}
ul.story_collections_list>li{
  position:relative;
  /* margin:0 8px; */
  float:left;
  background:linear-gradient(rgba(129, 129, 129, 0), rgba(129, 129, 129, 0.9)),url(http://127.0.0.1:3000/img/story/story_collection_1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width:328px;
  height:164px;
  border-radius: 8px;
  cursor: pointer;
}
ul.story_collections_list>li:nth-child(2){
  background:linear-gradient(rgba(129, 129, 129, 0), rgba(129, 129, 129, 0.9)),url(http://127.0.0.1:3000/img/story/story_collection_2.jpg);
}
ul.story_collections_list>li:nth-child(3){
  background:linear-gradient(rgba(129, 129, 129, 0), rgba(129, 129, 129, 0.9)),url(http://127.0.0.1:3000/img/story/story_collection_3.jpg);
}
ul.story_collections_list>li>div{
  position: absolute;
  left: 16px;
  bottom: 16px;
}
ul.story_collections_list>li a>div:first-child{
  display: inline;
  padding:2px 8px 4px 8px;
  color:#484848;
  background-color:#fff;
  border-radius: 4px;
  font-size:12px;
  font-weight: 600px;
}
.collections_title{
  margin-top:8px;
}
.collections_title>div{
  color: #fff;
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
}
/*精选故事*/
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