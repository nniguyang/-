<template>
  <div>
    <div class="images" style="display:none" v-viewer="{movable: false}">
      <img v-for="(src,i) of houseData" :src="src.HouseImg_md" :key="i" />
    </div>
    <user-header></user-header>
    <div class="topimg">
      <div class="topleft">
        <img :src="houseData[0].HouseImg_lg" @mouseover="imgLg" @mouseout="imgSm" @click="show" />
        <div class="imgshadow"></div>
      </div>
      <div class="topright">
        <div class="rightimg" v-for="(item,i) of houseData" :key="i">
          <img :src="item.HouseImg_md" @mouseover="imgLg" @mouseout="imgSm" @click="show" />
          <div class="imgshadow"></div>
        </div>
      </div>
      <button class="share" @click="share">
        <img src="http://127.0.0.1:3000/img/details/share.png" />分享
      </button>
      <button class="save" @click="save">
        <img src="http://127.0.0.1:3000/img/details/save.png" />保存
      </button>
      <button class="lookimg" @click="show">查看图片</button>
    </div>
    <div class="main">
      <div class="main_nav">
        <div class="ul">
          <ul>
            <li>
              <a :class="{black:changeBlack==0}" href="javascript:;" @click="toggle(0)">详情</a>
            </li>
            <li>
              <div class="circle"></div>
              <a href="javascript:;" :class="{black:changeBlack==1}" @click="toggle(1)">评价</a>
            </li>
            <li style="width:75px;">
              <div class="circle"></div>
              <a href="javascript:;" :class="{black:changeBlack==2}" @click="toggle(2)">可定日期</a>
            </li>
            <li>
              <div class="circle"></div>
              <a href="javascript:;" :class="{black:changeBlack==3}" @click="toggle(3)">位置</a>
            </li>
            <li>
              <div class="circle"></div>
              <a href="javascript:;" :class="{black:changeBlack==4}" @click="toggle(4)">须知</a>
            </li>
            <li>
              <div class="circle"></div>
              <a href="javascript:;" :class="{black:changeBlack==5}" @click="toggle(5)">房东</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_main">
        <div class="mainleft">
          <div class="details">
            <div>
              <span>北京</span>
              <span class="dian">·</span>
              <span>整套公寓</span>
            </div>
            <div style="font-size:32px">
              <p>{{houseData[0].House_name}}</p>
            </div>
            <div class="housetags">
              <div class="roomnum">
                <img src="http://127.0.0.1:3000/img/details/door.png" alt />
                <span>{{houseData[0].House_bednum}}间卧室</span>
              </div>
              <div class="roomnum">
                <img src="http://127.0.0.1:3000/img/details/chuang.png" alt />
                <span>{{houseData[0].House_bednum}}张床</span>
              </div>
              <div class="roomnum">
                <img src="http://127.0.0.1:3000/img/details/wc.png" alt />
                <span>{{houseData[0].House_restroom}}间卫生间</span>
              </div>
              <div class="roomnum">
                <img src="http://127.0.0.1:3000/img/details/pnum.png" alt />
                <span>最多住{{houseData[0].House_people_num}}人</span>
              </div>
            </div>
            <div class="housemessage">
              <div v-for="(label,i) of labels" :key="i">{{label}}</div>
            </div>
            <div class="line"></div>
            <div class="master">
              <div class="img" @click="toggle(5)">
                <img
                  src="https://z1.muscache.cn/im/pictures/user/f46bac88-1562-4336-a382-bc715c9208a8.jpg?aki_policy=profile_x_medium"
                  alt
                />
              </div>
              <div class="text">
                <div>
                  <span>
                    房东：茜茜Elizabeth
                    <a href>联系房东</a>
                  </span>
                </div>
                <div>
                  <span>共收到336条评价 · 已验证</span>
                </div>
              </div>
            </div>
            <div class="masternext">
              <div>
                <span>Hi,很开心在这个美好的季节与你相遇,分享家和生活,你想知道的都在下面啦:</span>
              </div>
              <div style="margin-top:50px">
                <a style="font-size:18px" @click="more">更多房源介绍</a>
              </div>
            </div>
            <div class="line"></div>
            <div class="rooms">
              <div class="room" v-for="(num,i) of roomnum" :key="i">
                <div>
                  <span>卧室{{num}}</span>
                </div>
                <div>
                  <svg
                    t="1563253594791"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2238"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M218.3 515.7c-11 0-20-9-20-20V204.4c0-22.4 20-40.7 44.5-40.7h543.7c24.6 0 44.5 18.3 44.5 40.7v290.5c0 11-9 20-20 20s-20-9-20-20V205.1c-0.6-0.5-2.2-1.4-4.5-1.4H242.8c-2.5 0-4 0.9-4.5 1.4v290.6c0 11.1-8.9 20-20 20zM942.4 827.5H87c-11 0-20-9-20-20v-186c0-11 9-20 20-20h855.3c11 0 20 9 20 20v186c0.1 11-8.9 20-19.9 20z m-835.4-40h815.3v-146H107v146z"
                      p-id="2239"
                      fill="#2c2c2c"
                    />
                    <path
                      d="M87 897.5c-11 0-20-9-20-20v-68c0-11 9-20 20-20s20 9 20 20v68c0 11-8.9 20-20 20zM942.4 897.5c-11 0-20-9-20-20v-68c0-11 9-20 20-20s20 9 20 20v68c0 11-9 20-20 20zM87 639.7c-8.3 0-15.7-5.1-18.7-12.8-3-7.7-0.8-16.5 5.3-22l144-129.2c3.7-3.3 8.4-5.1 13.4-5.1h567.3c4.9 0 9.7 1.8 13.4 5.1l144 129.2c6.2 5.5 8.3 14.3 5.3 22-3 7.7-10.4 12.8-18.7 12.8H87z m151.7-129.2l-99.4 89.2h750.8l-99.4-89.2h-552z"
                      p-id="2240"
                      fill="#2c2c2c"
                    />
                    <path
                      d="M462.2 496c-11 0-20-9-20-20V336.1H327.1V476c0 11-9 20-20 20s-20-9-20-20V331.2c0-19.4 14.3-35.1 31.9-35.1h131.4c17.6 0 31.9 15.8 31.9 35.1V476c-0.1 11-9 20-20.1 20zM722.2 496c-11 0-20-9-20-20V336.1h-115V476c0 11-9 20-20 20s-20-9-20-20V331.2c0-19.4 14.3-35.1 31.9-35.1h131.4c17.6 0 31.9 15.8 31.9 35.1V476c-0.2 11-9.1 20-20.2 20z"
                      p-id="2241"
                      fill="#2c2c2c"
                    />
                  </svg>
                </div>
                <div>
                  <span>1张{{houseData[0].House_Bed}}</span>
                </div>
              </div>
            </div>
            <div class="promise">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style="height: 24px; width: 24px; display: block; fill: rgb(96, 182, 181);"
                >
                  <path
                    d="m11.9885999 21.958c-7.062-2.999-9.894-8.081-8.576-15.373 3.54-.523 6.405-1.966 8.576-4.329 2.171 2.363 5.036 3.806 8.576 4.329 1.318 7.292-1.514 12.374-8.576 15.373m9.491-15.915c-.042-.211-.214-.372-.428-.399-3.679-.473-6.564-1.961-8.681-4.467-.2-.236-.564-.236-.764 0-2.117 2.506-5.002 3.994-8.681 4.467-.214.027-.386.188-.428.399-1.57899999 8.018 1.548 13.703 9.3 16.919.122.051.26.051.382 0 7.752-3.216 10.879-8.901 9.3-16.919"
                    fill="#484848"
                  />
                  <path
                    d="m16.1218999 11.274-5.5 4.5c-.415.339-1.024.292-1.381-.11l-2-2.25c-.367-.412-.329-1.044.083-1.411.413-.367 1.045-.33 1.412.083l1.363 1.532 4.756-3.892c.428-.349 1.058-.286 1.408.141.349.427.286 1.057-.141 1.407m3.767-3.54c-.019-.276-.165-.379-.4-.421-2.949-.437-5.449-1.625-7.304-3.539-.066-.068-.136-.114-.19-.114-.06 0-.131.046-.197.114-1.855 1.914-4.355 3.102-7.303 3.539-.235.042-.381.145-.4.421-.285 4.085.049 9.185 7.397 13.01.164.086.344.156.497.156.159 0 .339-.07.503-.156 7.347-3.825 7.681-8.925 7.397-13.01"
                  />
                </svg>
              </div>
              <div>
                <span class="_1a5a9507">爱彼迎旅行保障</span>
              </div>
              <div>
                <span class="_11dqbld7">|</span>
              </div>
              <div>
                <span class="_11dqbld7" style="font-weight: 400">全方位保障 · 出行无忧</span>
              </div>
            </div>
            <div class="houserool">
              <div class="rools" v-for="(message,i) of messages" :key="i">
                <div>{{message}}</div>
                <div>{{rools[i]}}</div>
              </div>
            </div>
            <div class="amenities">
              <div class="amenity" v-for="(amenity,i) of amenities" :key="i">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    style="height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path :d="aimgs[i]" fill-rule="evenodd" />
                  </svg>
                </div>
                <div>{{amenity}}</div>
              </div>
            </div>
          </div>
          <div class="speak">
            <h1>评价</h1>
            <div>
              <div style="width:30%">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
              <div>
                <h4>您的评价</h4>
                <div>
                  <div v-for="(v,i) of verb" :key="i">
                    <div>{{v}}</div>
                    <el-rate v-model="value1[i]" show-text color="#008489"></el-rate>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="leftdate">
            <h1>可定日期</h1>
            <div>
              <el-calendar v-model="value2">
                <template slot="dateCell" slot-scope="{date, data}">
                  <p
                    :class="data.isSelected ? 'is-selected' : ''"
                  >{{ data.day.split('-').slice(1).join('-') }} ￥{{parseInt(houseData[0].House_price*0.9)}}</p>
                </template>
              </el-calendar>
            </div>
          </div>
          <div class="address">
            <h1>位置</h1>
            <div style="margin-top: 32px;font-weight: 800">
              <div class="_1m9t1a27">{{houseData[0].House_address}}</div>
            </div>
            <div style="margin-top:20px;">
              <p>·</p>
              <div style="font-size: 16px;margin:30px 0">
                <a href="javascript:;" style="font-size: 16px" @click="addressmore">查看更多</a>
              </div>
              <p style="margin:20px 0;font-weight: 800">出行信息</p>
              <div
                style="height: 109px;overflow: hidden;white-space: pre-wrap;margin-top: -50px"
              >{{houseData[0].House_travel_message}}</div>
              <div style="font-size: 16px;margin:30px 0">
                <a href="javascript:;" style="font-size: 16px" @click="addressmore">查看更多</a>
              </div>
            </div>
            <!--隐藏的查看更多-->
            <div class="addressmore" style="display:none;">
              <div>
                <div class="close" @click="addressmore">×</div>
                <h1>位置</h1>
                <div style="margin-top:32px;font-weight: 800">
                  <div>{{houseData[0].House_address}}</div>
                </div>
                <div>
                  <div style="white-space: pre-wrap">{{houseData[0].House_detailed_address}}</div>
                </div>
                <div style="font-weight:800;">出行信息</div>
                <div>
                  <div style="white-space: pre-wrap">{{houseData[0].House_travel_message}}</div>
                </div>
              </div>
            </div>
            <div class="map">
              <div class="mapimg">
                <img
                  @click="moremap"
                  src="https://restapi.amap.com/v3/staticmap?key=a7708a7c3c84313afa7ac50b3cdf0bf7&location=116.41322,39.89574&zoom=13&size=595*280"
                  alt
                />
                <img
                  @click="moremap"
                  src="https://z1.muscache.cn/airbnb/static/packages/home_pin.fb50ae56.png"
                  alt
                />
                <div class="maplg" @click="moremap">放大地图</div>
              </div>
              <div class="mapmessage">
                <div>
                  <div>
                    <svg
                      t="1563534899772"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="12872"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M497.839884 374.125182c-98.375546 0-178.864629 80.489083-178.864629 178.864629 0 46.206696 17.886463 89.432314 47.697234 120.733624 32.791849 35.772926 78.998544 58.131004 131.167395 58.131005 98.375546 0 178.864629-80.489083 178.864628-178.864629 0-44.716157-16.395924-84.960699-43.225618-116.262009-31.30131-37.263464-80.489083-62.60262-135.63901-62.60262z"
                        fill="#030000"
                        p-id="12873"
                      />
                      <path
                        d="M892.832606 271.27802h-17.886463v-7.452692h-126.695779v7.452692h-116.262009l22.358079-22.358078V163.959243H344.31441v84.960699l22.358079 22.358078H104.3377c-16.395924 0-29.810771 13.414847-29.810771 29.810772v484.425036c0 16.395924 13.414847 29.810771 29.810771 29.810772h788.494906c16.395924 0 29.810771-13.414847 29.810771-29.810772V301.088792c0-16.395924-13.414847-29.810771-29.810771-29.810772zM719.930131 624.535662c-29.810771 93.90393-117.752547 160.978166-220.599709 160.978166s-190.788937-67.074236-220.599709-160.978166c-7.452693-22.358079-11.924309-46.206696-11.924308-71.545851 0-32.791849 5.962154-64.093159 19.377001-90.922853 35.772926-83.47016 117.752547-140.110626 213.147016-140.110626s177.37409 58.131004 213.147016 140.110626c11.924309 28.320233 19.377001 59.621543 19.377002 90.922853-1.490539 25.339156-5.962154 49.187773-11.924309 71.545851z"
                        fill="#030000"
                        p-id="12874"
                      />
                      <path
                        d="M135.63901 329.409025m-28.320233 0a28.320233 28.320233 0 1 0 56.640466 0 28.320233 28.320233 0 1 0-56.640466 0Z"
                        fill="#030000"
                        p-id="12875"
                      />
                      <path
                        d="M400.954876 183.336245H596.215429v44.716157H400.954876zM742.28821 229.54294h135.63901v32.791849h-135.63901z"
                        fill="#030000"
                        p-id="12876"
                      />
                    </svg>
                  </div>
                  <div>周边热门：天坛（约1.6公里）、大栅栏/前门大街（约1.6公里）、天安门广场（约1.8公里）</div>
                </div>
                <div>
                  <div>
                    <svg
                      t="1563535648867"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="15165"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M786.068006 789.334399l47.366797 168.918177-63.683415 0-15.646352-62.577221-482.253512 0-15.646352 62.577221-64.695464 0 47.355541-168.923294c-61.891605-7.643074-112.031563-59.812247-112.031563-123.764791L126.833687 226.983641c0-69.206198 58.154491-125.311007 127.360689-125.311007L382.577349 101.672634 382.577349 39.017642l260.870426 0 0 62.654992 127.360689 0c69.205175 0 125.308961 56.103786 125.308961 125.311007l0 438.58085C896.117424 729.545688 847.989287 781.730211 786.068006 789.334399L786.068006 789.334399zM766.708076 665.564491 766.708076 540.253484l-62.654992 0 0 125.311007L766.708076 665.564491 766.708076 665.564491zM734.337831 830.970682l-12.592806-40.095183L303.189254 790.875498l-12.593829 40.095183L734.337831 830.970682 734.337831 830.970682zM254.194376 665.564491l62.654992 0L316.849368 540.253484l-62.654992 0L254.194376 665.564491 254.194376 665.564491zM190.510962 226.983641l0 250.615874 256.771061 0L447.282023 226.983641 190.510962 226.983641 190.510962 226.983641zM574.641689 101.672634 446.258717 101.672634l0 62.656015L574.641689 164.328649 574.641689 101.672634 574.641689 101.672634zM832.441173 226.983641 574.641689 226.983641l0 250.615874 257.799484 0L832.441173 226.983641 832.441173 226.983641zM832.441173 226.983641"
                        p-id="15166"
                      />
                    </svg>
                  </div>
                  <div>附近地铁站：磁器口（约500米）、崇文门（约700米）、桥湾（约700米）</div>
                </div>
                <div>
                  <div>
                    <svg
                      t="1563535707100"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="16330"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M897.5 126.6c16.7 19.8 19 47.9 6.9 84.5-12.1 36.5-32.8 69.3-61.7 98.2l-92 91.9 91.5 397.1c1.9 7.2-0.4 13.6-6.9 18.8l-73.1 54.7c-2.6 2.3-6.3 3.4-10.8 3.4-1.5 0-2.8-0.2-3.9-0.6-5.8-1.2-9.7-4.2-12-9.1L576.1 575.8 428.4 723.5l30.2 110.6c1.9 6.5 0.4 12.3-4.6 17.6l-54.8 55c-3.4 3.4-7.8 5.2-13 5.2H385c-5.8-0.7-10.3-3.2-13.7-7.5l-108-143.8-143.8-107.7c-4.2-2.6-6.6-7.1-7.5-13-0.4-5 1.3-9.7 5.2-14.3l54.7-55.3c3.4-3.4 7.8-5.2 13-5.2 2.3 0 3.8 0.2 4.6 0.6l110.6 30.2 147.7-147.7-289.4-159.6c-5.3-3-8.5-7.6-9.7-13.7-0.7-6.2 0.9-11.1 5.2-15.4l73.1-73.1c5.3-5 11-6.5 17.2-4.6l379.5 90.7 91.3-91.3c28.9-28.9 61.7-49.4 98.2-61.7 36.2-12 64.5-9.6 84.3 7.1z"
                        p-id="16331"
                      />
                    </svg>
                  </div>
                  <div>机场 / 火车站：南苑机场（约12.8公里）、北京首都国际机场（约26.1公里）、北京火车站（约1.6公里）、北京南站（约5.0公里）、北京西站（约7.9公里）</div>
                </div>
                <div>
                  <div>
                    <svg
                      t="1563535782242"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="18482"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M850.6 410.2L525.8 139.5c-8-6.7-19.6-6.7-27.6 0L344 268.1v-18.6c0-11-9-20-20-20h-50c-11 0-20 9-20 20v93.7l-80.4 67.1c-15.4 12.8-6.3 38 13.8 38h37.8v428c0 11 8.9 20 20 20H779c11 0 20-8.9 20-20v-428h37.8c20.1-0.1 29.2-25.2 13.8-38.1zM371.4 547.1c0 7.5-6 13.5-13.5 13.5h-40.4c-7.5 0-13.5-6-13.5-13.5v-40.4c0-7.5 6-13.5 13.5-13.5h40.4c7.5 0 13.5 6 13.5 13.5v40.4z m0-91c0 7.5-6 13.5-13.5 13.5h-40.4c-7.5 0-13.5-6-13.5-13.5v-40.4c0-7.5 6-13.5 13.5-13.5h40.4c7.5 0 13.5 6 13.5 13.5v40.4z m93.2 91c0 7.5-6 13.5-13.5 13.5h-40.4c-7.5 0-13.5-6-13.5-13.5v-40.4c0-7.5 6-13.5 13.5-13.5h40.4c7.5 0 13.5 6 13.5 13.5v40.4z m0-91c0 7.5-6 13.5-13.5 13.5h-40.4c-7.5 0-13.5-6-13.5-13.5v-40.4c0-7.5 6-13.5 13.5-13.5h40.4c7.5 0 13.5 6 13.5 13.5v40.4z m281.1 376.6c0 11.1-9 20.1-20.1 20.1H575.8c-11.1 0-20.1-9-20.1-20.1V622.9c0-11.1 9-20.1 20.1-20.1h149.8c11.1 0 20.1 9 20.1 20.1v209.8z"
                        p-id="18483"
                      />
                      <path d="M713.6 739.1m-15 0a15 15 0 1 0 30 0 15 15 0 1 0-30 0Z" p-id="18484" />
                    </svg>
                  </div>
                  <div>房源具体位置将在预订确认后提供</div>
                </div>
                <div>
                  <a @click="moremap">查看更多周边信息</a>
                </div>
              </div>
            </div>
            <div class="moremap addressmore" style="display: none">
              <div>
                <div class="close" @click="moremap">×</div>
                <div class="open">
                  <div class="left">
                    <div>
                      <span @click="mapnav(1)" :class="{mapnavbottom:changeBlue==1}">
                        <svg
                          t="1563534899772"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="12872"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M497.839884 374.125182c-98.375546 0-178.864629 80.489083-178.864629 178.864629 0 46.206696 17.886463 89.432314 47.697234 120.733624 32.791849 35.772926 78.998544 58.131004 131.167395 58.131005 98.375546 0 178.864629-80.489083 178.864628-178.864629 0-44.716157-16.395924-84.960699-43.225618-116.262009-31.30131-37.263464-80.489083-62.60262-135.63901-62.60262z"
                            fill="#030000"
                            p-id="12873"
                          />
                          <path
                            d="M892.832606 271.27802h-17.886463v-7.452692h-126.695779v7.452692h-116.262009l22.358079-22.358078V163.959243H344.31441v84.960699l22.358079 22.358078H104.3377c-16.395924 0-29.810771 13.414847-29.810771 29.810772v484.425036c0 16.395924 13.414847 29.810771 29.810771 29.810772h788.494906c16.395924 0 29.810771-13.414847 29.810771-29.810772V301.088792c0-16.395924-13.414847-29.810771-29.810771-29.810772zM719.930131 624.535662c-29.810771 93.90393-117.752547 160.978166-220.599709 160.978166s-190.788937-67.074236-220.599709-160.978166c-7.452693-22.358079-11.924309-46.206696-11.924308-71.545851 0-32.791849 5.962154-64.093159 19.377001-90.922853 35.772926-83.47016 117.752547-140.110626 213.147016-140.110626s177.37409 58.131004 213.147016 140.110626c11.924309 28.320233 19.377001 59.621543 19.377002 90.922853-1.490539 25.339156-5.962154 49.187773-11.924309 71.545851z"
                            fill="#030000"
                            p-id="12874"
                          />
                          <path
                            d="M135.63901 329.409025m-28.320233 0a28.320233 28.320233 0 1 0 56.640466 0 28.320233 28.320233 0 1 0-56.640466 0Z"
                            fill="#030000"
                            p-id="12875"
                          />
                          <path
                            d="M400.954876 183.336245H596.215429v44.716157H400.954876zM742.28821 229.54294h135.63901v32.791849h-135.63901z"
                            fill="#030000"
                            p-id="12876"
                          />
                        </svg> 热门
                      </span>
                      <span @click="mapnav(2)" :class="{mapnavbottom:changeBlue==2}">
                        <svg
                          t="1563535648867"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="15165"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M786.068006 789.334399l47.366797 168.918177-63.683415 0-15.646352-62.577221-482.253512 0-15.646352 62.577221-64.695464 0 47.355541-168.923294c-61.891605-7.643074-112.031563-59.812247-112.031563-123.764791L126.833687 226.983641c0-69.206198 58.154491-125.311007 127.360689-125.311007L382.577349 101.672634 382.577349 39.017642l260.870426 0 0 62.654992 127.360689 0c69.205175 0 125.308961 56.103786 125.308961 125.311007l0 438.58085C896.117424 729.545688 847.989287 781.730211 786.068006 789.334399L786.068006 789.334399zM766.708076 665.564491 766.708076 540.253484l-62.654992 0 0 125.311007L766.708076 665.564491 766.708076 665.564491zM734.337831 830.970682l-12.592806-40.095183L303.189254 790.875498l-12.593829 40.095183L734.337831 830.970682 734.337831 830.970682zM254.194376 665.564491l62.654992 0L316.849368 540.253484l-62.654992 0L254.194376 665.564491 254.194376 665.564491zM190.510962 226.983641l0 250.615874 256.771061 0L447.282023 226.983641 190.510962 226.983641 190.510962 226.983641zM574.641689 101.672634 446.258717 101.672634l0 62.656015L574.641689 164.328649 574.641689 101.672634 574.641689 101.672634zM832.441173 226.983641 574.641689 226.983641l0 250.615874 257.799484 0L832.441173 226.983641 832.441173 226.983641zM832.441173 226.983641"
                            p-id="15166"
                          />
                        </svg> 地铁站
                      </span>
                      <span @click="mapnav(3)" :class="{mapnavbottom:changeBlue==3}">
                        <svg
                          t="1563535707100"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="16330"
                          width="10"
                          height="10"
                        >
                          <path
                            d="M897.5 126.6c16.7 19.8 19 47.9 6.9 84.5-12.1 36.5-32.8 69.3-61.7 98.2l-92 91.9 91.5 397.1c1.9 7.2-0.4 13.6-6.9 18.8l-73.1 54.7c-2.6 2.3-6.3 3.4-10.8 3.4-1.5 0-2.8-0.2-3.9-0.6-5.8-1.2-9.7-4.2-12-9.1L576.1 575.8 428.4 723.5l30.2 110.6c1.9 6.5 0.4 12.3-4.6 17.6l-54.8 55c-3.4 3.4-7.8 5.2-13 5.2H385c-5.8-0.7-10.3-3.2-13.7-7.5l-108-143.8-143.8-107.7c-4.2-2.6-6.6-7.1-7.5-13-0.4-5 1.3-9.7 5.2-14.3l54.7-55.3c3.4-3.4 7.8-5.2 13-5.2 2.3 0 3.8 0.2 4.6 0.6l110.6 30.2 147.7-147.7-289.4-159.6c-5.3-3-8.5-7.6-9.7-13.7-0.7-6.2 0.9-11.1 5.2-15.4l73.1-73.1c5.3-5 11-6.5 17.2-4.6l379.5 90.7 91.3-91.3c28.9-28.9 61.7-49.4 98.2-61.7 36.2-12 64.5-9.6 84.3 7.1z"
                            p-id="16331"
                          />
                        </svg> 机场/火车站
                      </span>
                    </div>
                    <div>
                      <div class="hot">
                        <div>
                          <div>
                            <div>1.天坛</div>
                            <div>约1.6公里</div>
                          </div>
                          <div>景点</div>
                        </div>
                      </div>
                      <div class="subway" style="display:none">
                        <div>
                          <div>
                            <div>1.天坛</div>
                            <div>约1.6公里</div>
                          </div>
                          <div>景点</div>
                        </div>
                      </div>
                      <div class="plane" style="display:none">
                        <div>
                          <div>
                            <div>1.天坛</div>
                            <div>约1.6公里</div>
                          </div>
                          <div>景点</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="right" id="map"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="notice">
            <h1>须知</h1>
            <div>
              <div>
                <div style="font-weight: 800">基本要求</div>
                <div>
                  <p>禁止吸烟</p>
                  <p>不允许携带宠物</p>
                  <p>不允许举办派对和活动</p>
                  <a @click="moremap">房屋守则</a>
                </div>
              </div>
              <div>
                <div style="font-weight:800">取消政策</div>
                <div>
                  中等
                  <a @click="moremap">查看完整详情</a>
                </div>
              </div>
              <div>
                <div style="font-weight: 800">安全须知</div>
                <div>该房源未安装一氧化碳报警器</div>
              </div>
              <div>
                <div style="font-weight: 800">交易提示</div>
                <div>
                  为了保护您的账号隐私和付款安全，请不要相信其它任何平台的折扣或礼金券代订，并始终在爱彼迎站内转账和交流。
                  <a @click="moremap" style="font-size: 16px">查看详情</a>
                </div>
              </div>
            </div>
          </div>
          <div class="housename">
            <h1>房东</h1>
            <div class="master">
              <div class="text">
                <div>
                  <span style="font-weight: 800">
                    茜茜Elizabeth
                    <a href>联系房东</a>
                  </span>
                </div>
                <div style="font-size: 14px;font-weight: 800;margin: 10px 0">
                  <span>北京, 中国 · 注册时间：2018年7月</span>
                </div>
                <div>
                  <svg
                    viewBox="0 0 14 24"
                    role="img"
                    aria-label="超赞房东"
                    focusable="false"
                    style="height: 24px; width: 24px; fill: currentcolor;"
                  >
                    <path
                      d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                      fill="#fff"
                    />
                    <path
                      d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                      fill="#ffb400"
                    />
                    <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f" />
                    <path
                      d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                      fill="#484848"
                    />
                  </svg>
                  <span style="margin-left:10px">超赞房东</span>
                </div>
              </div>
              <div class="img" @click="toggle(5)">
                <img
                  src="https://z1.muscache.cn/im/pictures/user/f46bac88-1562-4336-a382-bc715c9208a8.jpg?aki_policy=profile_x_medium"
                  alt
                />
              </div>
            </div>
            <div style="margin: 30px 0">
              <div style="font-weight: 800;">自我介绍</div>
              <div style="margin: 20px 0">
                哈喽亲亲们~我是你们超温柔的房东茜茜Elizabeth ~~
                我喜欢打游戏~ 如果有小哥哥小姐姐来我家住觉得无聊的话,我可以陪你们打游戏鸭!!三级头三级甲98k全是你的!!如果喜欢手游,吃鸡王者阴阳师第五人格随便挑!!如果喜欢大厂,Steam暴雪EA育碧随便挑~~
                如果你心情不好,郁闷难过了,我也可以当你的树洞,听你发泄~陌生人其实是你不错的聆听者呢~
              </div>
              <a @click="moremap">查看更多</a>
            </div>
            <div>
              <div>与客房的互动</div>
              <div style="margin: 30px 0">·</div>
              <a @click="moremap">查看更多</a>
            </div>
            <div style="margin:30px 0;white-space: pre-wrap">
              语言：العربية, Bengali, 中文, Čeština, Dansk, Nederlands, English, Suomi, Français, Deutsch, Eλληνικά, עברית, Hindi, Magyar, Bahasa, Italiano, 日本語, 한국어, Bahasa Melayu, Norsk, Polski, Português, Punjabi, Русский, Sign, Español, Svenska, Tagalog, ภาษาไทย, Türkçe, Українська
              回复率：99%
              回复时间：1小时内
            </div>
            <div>
              <p style="font-weight: 800;margin: 10px 0">合作的房东</p>
              <p>亲爱的派大星帮忙处理出租待客事宜。</p>
              <div class="hezuoimg" style="margin: 20px 0">
                <img
                  src="https://z1.muscache.cn/im/pictures/user/d55eb9b5-b83f-4729-881b-5f5bc1c32133.jpg?aki_policy=profile_x_medium"
                  alt
                />
              </div>
            </div>
          </div>
          <div class="travelpromise" style="border: 0">
            <h1>爱彼迎旅行保障</h1>
            <div style="display: flex;justify-content: space-between;width: 100%;margin:30px 0">
              <div>
                <div style="width: 36px; height: 36px;">
                  <img
                    src="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.5308a6c4.png"
                    width="36"
                    height="36"
                    alt="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.5308a6c4.png"
                  />
                </div>
                <div>
                  <p>安心房源保障</p>
                  <p>人工审核中国房源</p>
                </div>
              </div>
              <div>
                <div style="width: 36px; height: 36px;">
                  <img
                    class="_1u6feuz3"
                    src="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.f142a9a0.png"
                    width="36"
                    height="36"
                    alt="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.f142a9a0.png"
                  />
                </div>
                <div>
                  <p>专业中文客服</p>
                  <p>7 × 24 小时中文服务</p>
                </div>
              </div>
              <div>
                <div style="width: 36px; height: 36px;">
                  <img
                    class="_1u6feuz3"
                    src="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.da0afd2d.png"
                    width="36"
                    height="36"
                    alt="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.da0afd2d.png"
                  />
                </div>
                <div>
                  <p>旅行安全保障</p>
                  <p>多重风险控制设计</p>
                </div>
              </div>
            </div>
            <a @click="moremap">查看全方位保障计划</a>
          </div>
          <div class="more">
            <h1>更多适合您的房源</h1>
            <div></div>
          </div>
          <div class="other">
            <h1>北京附近的其他选择</h1>
          </div>
        </div>
        <div class="mainright">
          <div class="rightdate">
            <div class="price">
              <p>
                <span>￥{{parseInt(houseData[0].House_price*0.9)}}</span>&nbsp;
                <s style="font-size:14px;color: #aaa">￥{{houseData[0].House_price}}</s>&nbsp;
                <span style="font-size:14px;color: #000">每晚</span>
              </p>
              <div>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </div>
            </div>
            <div class="dated">
              日期
              <div>
                <mydate class="mydate"></mydate>
              </div>
            </div>
            <div class="people">
              人数
              <div>
                <div style="padding: 15px;height:20px;cursor: pointer;">{{peoplenum1+peoplenum2}}人</div>
                <div class="changenum">
                  <div class="changenum1">
                    <div>成人</div>
                    <div>
                      <div class="reduce" @click="desc(1)">
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="subtract"
                          focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                        </svg>
                      </div>
                      <div class="number">{{peoplenum1}}</div>
                      <div class="add" @click="add(1)">
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="add"
                          focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="changenum1">
                    <div>
                      儿童
                      <p style="font-size:10px;color:#666">2 - 12岁</p>
                    </div>
                    <div>
                      <div class="reduce" @click="desc(2)">
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="subtract"
                          focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                        </svg>
                      </div>
                      <div class="number">{{peoplenum2}}</div>
                      <div class="add" @click="add(2)">
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="add"
                          focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="changenum1">
                    <div>
                      婴儿
                      <p style="font-size:10px;color:#666">2岁以下</p>
                    </div>
                    <div>
                      <div class="reduce" @click="desc(3)">
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="subtract"
                          focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                        </svg>
                      </div>
                      <div class="number">{{peoplenum3}}</div>
                      <div class="add" @click="add(3)">
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="add"
                          focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                        >
                          <rect height="2" rx="1" width="12" x="6" y="11" />
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="changenum1" style="padding:0px 15px">
                    <p style="font-size:10px;color:#666">最多2位房客，婴幼儿不计算在内。</p>
                  </div>
                  <div class="changenum1" style="padding-left: 80%">
                    <el-button type="danger" size="mini" @click="people">关闭</el-button>
                  </div>
                </div>
              </div>
            </div>
            <div
              style="display:flex;justify-content: space-between;border-bottom:1px solid #ddd;margin:20px 0;padding:10px 0;position: absolute;bottom:60px;width:90%;z-index:-1"
            >
              <div style="font-weight:800">总价</div>
              <div>
                <span style="font-weight:800">￥</span>
                {{parseInt(this.houseData[0].House_price*0.9)}}
              </div>
            </div>
            <div class="yuding">预定</div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
//引入子组件
import mydate from "./../components/Abb/Date";
export default {
  data() {
    return {
      houseData: [{ HouseImg_lg: "" }],
      houseId: 13,
      changeBlack: 0,
      changeBlue: 1,
      labels: [],
      roomnum: [],
      messages: [],
      rools: [],
      amenities: [],
      aimgs: [],
      value: 4.3,
      value1: [3, 3, 3, 3, 3, 3],
      value2: "2019-7-18",
      bed2count: 0,
      verb: [
        "如实描述",
        "位置便利",
        "沟通交流",
        "入住顺利",
        "干净卫生",
        "高性价比"
      ],
      i: 0,
      peoplenum1: 1,
      peoplenum2: 0,
      peoplenum3: 0
    };
  },
  methods: {
    bed_count(m) {
      var btn_reduce2 = document.getElementById("btn_reduce2");
      var btn_add2 = document.getElementById("btn_add2");
      if (z == 1) {
        if (this.bed2count < 8) {
          btn_reduce2.style.opacity = "1";
          this.bed2count += z;
        } else if (this.bed2count == 8) {
          btn_add2.style.opacity = "0.3";
          this.bed2count += z;
        }
      } else {
        if (this.bed2count > 1) {
          this.bed2count += z;
          btn_add2.style.opacity = "1";
        } else if (this.bed2count == 1) {
          btn_reduce2.style.opacity = "0.3";
          this.bed2count += z;
        }
      }
      console.log(this.bed2count);
    },
    imgLg(e) {
      e.target.style.width = "105%";
      var shadow = e.target.parentElement;
    },
    imgSm(e) {
      e.target.style.width = "100%";
    },
    show() {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.show();
    },
    scroll() {
      //console.log(new Date(this.value2).getDay())
      var scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop);
      var mainnav = document.querySelector(".main_nav");
      var ul = document.querySelector(".main_nav ul");
      var main_main = document.querySelector(".main_main");
      var speak = document.querySelector(".main_main .leftdate");
      var share = document.querySelector(".topimg .share");
      var save = document.querySelector(".topimg .save");
      var rightdate = document.querySelector(".main_main .rightdate");
      if (scrollTop > 380 && scrollTop < 5200) {
        mainnav.style.position = "fixed";
        mainnav.style.borderBottom = "1px solid #ddd";
        ul.style.borderBottom = "0";
        main_main.style.marginTop = "71px";
        share.style.position = "fixed";
        save.style.position = "fixed";
        share.style.right = "200px";
        save.style.right = "88px";
        rightdate.style = "position:fixed;top:80px;width:28.5%;right:88px";
      } else if (scrollTop >= 5200) {
        rightdate.style = "position:absolute;top:4700px;width:83.5%;right:0px";
      } else {
        mainnav.style.position = "";
        mainnav.style.borderBottom = "0";
        ul.style.borderBottom = "1px solid #ddd";
        main_main.style.marginTop = "30px";
        share.style.position = "absolute";
        save.style.position = "absolute";
        share.style.right = "140px";
        save.style.right = "25px";
        rightdate.style = "position:absolute;top:-30px;width:83.5%;right:0px";
      }
      if (scrollTop >= 1550 && scrollTop < 1850) {
        this.changeBlack = 1;
      } else if (scrollTop >= 1850 && scrollTop < 2800) {
        this.changeBlack = 2;
      } else if (scrollTop >= 2800 && scrollTop < 3800) {
        this.changeBlack = 3;
      } else if (scrollTop >= 3800 && scrollTop < 4340) {
        this.changeBlack = 4;
      } else if (scrollTop >= 4340) {
        this.changeBlack = 5;
      } else {
        this.changeBlack = 0;
      }
    },
    toggle(b) {
      this.changeBlack = b;

      if (b == 0) {
        document.documentElement.scrollTop = 350;
      } else if (b == 1) {
        document.documentElement.scrollTop = 1550;
      } else if (b == 2) {
        document.documentElement.scrollTop = 1850;
      } else if (b == 3) {
        document.documentElement.scrollTop = 2800;
      } else if (b == 4) {
        document.documentElement.scrollTop = 3800;
      } else if (b == 5) {
        document.documentElement.scrollTop = 4340;
      }
    },
    share() {
      this.$alert("微信", "分享");
    },
    more() {
      this.$alert(
        "概要：Hi,很开心在这个美好的季节与你相遇,分享家和生活,你想知道的都在下面啦:｢Sunny｣位于二环里人气旺盛的｢崇文门商圈｣楼下便是帝都老牌商业街,新世界百货､国瑞城购物中心｡而我的房子更像是隐秘城市的一处后花园｡｢超大的私人露天阳台非常惬意｣,7层楼高视野非常广阔~躺在被大片绿植拥抱的露台中央,轻轻摇晃躺椅,微风吹过,飘来薄荷柠檬加冰的清凉水汽,此时再来放一点夏日电音,忍不住在自己露台上放肆跳起来~是二环里最独一无二的享受之家了!｢卧室｣的落地玻璃大窗与露台相连,房间里淡蓝色的地中海元素带来度假气息,可住2人｡阳光和风景一揽入怀,躺在绵软的大床上,拥有一个自然醒的早晨｡+位置极好:- 楼下300米就是老牌商圈【崇文门】,新世界百货､国瑞城,上百家美食餐厅､超市､购物逛街､夜宵撸串都没问题｡- 10分钟车程或步行:天安门､国博､王府井大街､东交民巷､天坛､北京站- 紧邻超多著名医院:惠民儿童､两广中医､同仁堂､协和､北京医院- 600米5/7号线【磁器口】站,直达北京西站､东四､欢乐谷房间100%“一客一扫”,居住愉快~",
        "关于此房源"
      );
    },
    save() {
      this.$prompt("名称", "保存到心愿单", {
        confirmButtonText: "创建",
        cancelButtonText: "取消",
        inputPattern: /^\w+$/,
        inputErrorMessage: "请输入名称"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "创建成功，你的心愿单名称为: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消创建"
          });
        });
    },
    people() {
      var people = document.querySelector(".people>div");
      var yuding = document.querySelector(".mainright .yuding");
      if (people.style.height == "310px") {
        people.style.height = "50px";
      }
    },
    desc(i) {
      if (i == 1) {
        if (this.peoplenum1 > 1) {
          this.peoplenum1--;
        }
      }
      if (i == 2) {
        if (this.peoplenum2 > 0) {
          this.peoplenum2--;
        }
      }
      if (i == 3) {
        if (this.peoplenum3 > 0) {
          this.peoplenum3--;
        }
      }
    },
    add(i) {
      if (i == 1) {
        if (
          this.peoplenum1 <
          this.houseData[0].House_people_num - this.peoplenum2
        ) {
          this.peoplenum1++;
        }
      }
      if (i == 2) {
        if (
          this.peoplenum2 <
          this.houseData[0].House_people_num - this.peoplenum1
        ) {
          this.peoplenum2++;
        }
      }
      if (i == 3) {
        if (this.peoplenum3 < 5) {
          this.peoplenum3++;
        }
      }
    },
    addressmore() {
      var am = document.querySelector(".addressmore");
      if (am.style.display == "none") {
        am.style.display = "block";
      } else {
        am.style.display = "none";
      }
    },
    moremap() {
      setTimeout(() => {
        this.getLocation();
      }, 300);

      new Date().toLocaleDateString;
      var am = document.querySelector(".moremap");
      if (am.style.display == "none") {
        am.style.display = "block";
      } else {
        am.style.display = "none";
      }
      var img = document.querySelector(".moremap .pointimg");
      if (img != null) {
        img.parentElement.style.background = "rgba(255,255,255,0)";
        console.log(img.parentElement);
      }
    },
    mapnav(m) {
      this.changeBlue = m;
    },
    getLocation() {
      // 从高德地图api获取浏览器定位
      /*var map = new AMap.Map('map', {
                zoom: 11, //级别
                center: [116.412978, 39.895807],
                viewMode: '3D' //使用3D视图
            });*/
      //百度地图
      var map = new BMap.Map("map");
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(116.419378, 39.901908), 19);
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("北京");
      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      var point = new BMap.Point(116.419378, 39.901908); //根据经纬度创建地图上的一个点
      map.centerAndZoom(point, 14); //设置范围
      var html = `<img @click="moremap"  src="https://z1.muscache.cn/airbnb/static/packages/home_pin.fb50ae56.png" class="pointimg">`;
      //var marker = new BMap.Marker(point); //根据点来创建点状覆盖物
      //map.addOverlay(marker); //把这个覆盖物加载到地图上
      var myRichMarkerObject = new BMapLib.RichMarker(html, point, {
        anchor: new BMap.Size(0, 0),
        enableDragging: false
      });
      map.addOverlay(myRichMarkerObject);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
    var date = document.querySelector(".rightdate .dated .mydate");
    //console.log(date.value)
    var pnum = document.querySelector(".people>div>div:first-child");
    var people = document.querySelector(".people>div");
    var yuding = document.querySelector(".mainright .yuding");
    pnum.onclick = function() {
      people.style.borderColor = "#008489";
      //console.log(people)
      if (people.style.height == "310px") {
        people.style.height = "50px";
      } else {
        people.style.height = "310px";
      }
    };
  },
  created() {
    this.value2 = new Date();
    var url = "details";
    var url1 = "/index/cities";
    var obj = { house_id: this.houseId };
    var obj1 = { i: this.i };
    this.axios.get(url, { params: obj }).then(result => {
      this.houseData = result.data.data;
      this.labels = result.data.data[0].House_label.split(",");
      //console.log(this.messages)
      var num = this.houseData[0].House_bednum;
      for (var i = 1; i <= num; i++) {
        this.roomnum.push(i);
      }
      this.messages = this.houseData[0].House_message.split(",");
      this.rools = this.houseData[0].House_rool.split(",");
      this.amenities = this.houseData[0].House_HouseAmenities.split(",");
      this.aimgs = this.houseData[0].House_Aimg.split(",");
      //console.log(this.aimgs)
    });
    this.axios.get(url1, obj1).then(result => {
      console.log(result);
    });
  },
  components: {
    mydate
  }
};
</script>
<style  scoped>
user-header {
  z-index: 1000;
}
.topimg {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  position: relative;
}
.topright img,
.topleft img {
  width: 100%;
  transition: 0.5s;
  transform-origin: left top;
  cursor: pointer;
  opacity: 0.8;
}
.topleft {
  width: 50%;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
}
.topright {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-between;
}
.rightimg {
  width: 50%;
  height: 50%;
  border: 1px solid #000;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.imgshadow {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  display: none;
}
.share,
.save,
.lookimg {
  position: absolute;
  width: 90px;
  height: 40px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 3px -2px #000;
  border: 0;
  font: 14px 微软雅黑;
  font-weight: bold;
  cursor: pointer;
  z-index: 101;
}
.topimg button img {
  width: 20px;
  margin: -4px 7px;
}
.share {
  right: 140px;
  top: 5px;
}
.save {
  right: 25px;
  top: 5px;
}
.lookimg {
  top: 240px;
  right: 25px;
}
.main {
  width: 100%;
}
.main_nav {
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 100;
}
.main_nav .ul {
  width: 1050px;
  margin: auto;
}
.main_nav ul {
  width: 58%;
  height: 30px;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  padding-left: 0;
}
.main_nav ul li {
  float: left;
  width: 45px;
  text-align: left;
  line-height: 30px;
  position: relative;
}
.main_nav ul li .circle {
  width: 2px;
  height: 2px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 14px;
  left: -10px;
}
a {
  color: #008489;
  font-family: 微软雅黑;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}
.main_nav ul li a.black {
  color: #000;
}
a:hover {
  text-decoration: underline;
}
.main_main {
  width: 1050px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #484848;
  font-family: 微软雅黑;
}
.main_main .mainleft {
  width: 60%;
}
.main_main .mainleft a {
  font-size: 16px;
}
.main_main .mainright {
  width: 40%;
  position: relative;
}
.main_main .mainleft > div {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}
.main_main .mainleft > div:not(:first-child) {
  margin-top: 50px;
}
.main_main .details {
  font-size: 12px;
  font-weight: 800;
}
.main_main .details .dian {
  font-weight: lighter;
  margin: 0 5px;
}
.main_main .speak > div > div {
  margin: 20px 0px;
}
.main_main .speak > div > div > div {
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
.main_main .speak > div > div > div > div {
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 10px 0;
}
.main_main .leftdate .is-selected {
  color: #00f;
  border: 1px solid #00f;
}
.main_main .leftdate p {
  color: #008489;
  border: 1px solid #008489;
  border-radius: 5px;
  height: 70px;
  text-align: center;
  line-height: 35px;
}
.main_main .address .addressmore {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 102;
  overflow: scroll;
}
.main_main .address .addressmore > div {
  width: 500px;
  margin: 30px auto;
  background: #fff;
  box-shadow: 0px 0px 10px -5px #000;
  padding: 30px;
}
.main_main .address .addressmore > div .close {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 25px;
  font-size: 30px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px #000;
  margin-bottom: 10px;
}
.main_main .address .moremap > div {
  width: 1000px;
  height: 550px;
}
.main_main .address .moremap > div .open {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.main_main .address .moremap > div .open .left {
  width: 40%;
  height: 500px;
  font-size: 12px;
  font-weight: 800;
}
.main_main .address .moremap > div .open .left > div:first-child {
  width: 100%;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  font-weight: 800;
}
.main_main .address .moremap > div .open .left > div:first-child span {
  padding: 10px 0;
  margin: 0 10px;
  display: inline-block;
  cursor: pointer;
}
.main_main .address .moremap > div .open .left > div:last-child {
  width: 90%;
}
.main_main .address .moremap .mapnavbottom {
  border-bottom: 1px solid #008489;
}
.hot > div {
  border-bottom: 1px solid #ddd;
  padding: 15px 10px;
}
.hot > div > div:first-child {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.hot > div > div:first-child > div:first-child {
  font-size: 14px;
}
.hot > div > div:last-child {
  color: #767676;
  font-weight: 600;
}
.main_main .address .moremap > div .open .right {
  width: 55%;
  height: 500px;
}
.address .map .mapimg {
  position: relative;
  width: 100%;
  cursor: pointer;
}
.address .map .mapimg img:first-child {
  width: 100%;
}
.address .map .mapimg img:nth-child(2) {
  height: 64px;
  width: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.address .map .mapimg .maplg {
  background-color: rgb(255, 255, 255);
  color: rgb(72, 72, 72);
  position: absolute;
  right: 16px;
  top: 16px;
  border: 1px solid;
  border-style: solid rgb(72, 72, 72);
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
.address .map .mapmessage > div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}
.address .map .mapmessage > div > div:first-child {
  width: 5%;
}
.address .map .mapmessage > div > div:last-child {
  width: 95%;
}
.main_main .notice > div > div {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0;
}
.main_main .notice > div > div > div:first-child {
  width: 30%;
  margin: 10px 0;
}
.main_main .notice > div > div > div:last-child {
  width: 70%;
}
.main_main .notice > div > div p {
  margin: 10px 0;
}
.main_main .travelpromise > div > div {
  display: flex;
  justify-content: space-between;
  width: 30%;
  font-size: 14px;
  cursor: pointer;
}
.main_main .travelpromise > div > div > div:first-child {
  width: 25%;
}
.main_main .travelpromise > div > div > div:last-child {
  width: 75%;
}
.main_main .travelpromise > div > div > div:last-child p:first-child {
  font-weight: 800;
}
.main_main .rightdate {
  width: 83.5%;
  height: 370px;
  border: 1px solid #ddd;
  position: absolute;
  top: -30px;
  right: 0px;
  position: relative;
}
.mainleft .housetags {
  width: 70%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
}
.mainleft .housetags img {
  margin: 0px 5px -3px 0;
}
.mainleft .details .housemessage {
  width: 80%;
  display: flex;
  margin-top: 20px;
}
.housemessage div {
  background: #ddd;
  border-radius: 10px;
  padding: 3px 10px;
  margin-right: 10px;
}
.housemessage div:nth-child(1) {
  background: #eaf7ea;
  color: #296e00;
}
.housemessage div:nth-child(2) {
  background: #f7f3ea;
  color: #8a2400;
}
.details .line {
  border-bottom: 1px solid #eee;
  margin-top: 30px;
}
.master {
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.master .img,
.hezuoimg {
  width: 12%;
  height: 12%;
  cursor: pointer;
}
.master .img img,
.hezuoimg img {
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.master .text {
  width: 85%;
}
.master a {
  font-size: 16px;
  margin-left: 10px;
}
.master .text div:last-child {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
}
.masternext {
  padding: 40px 20px 20px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  font-family: 微软雅黑;
  background: #f8f8f8;
  border-radius: 5px;
}
.details .rooms {
  margin-top: 30px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: 150px;
  display: flex;
}
.details .rooms .room {
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100px;
  height: 80px;
  margin-right: 20px;
  padding: 15px;
}
.details .rooms .room div {
  margin-bottom: 5px;
}
.details .promise {
  border-bottom: 1px solid #ddd;
  display: flex;
  margin: 30px 0;
  padding-bottom: 30px;
  font-size: 16px;
}
.details .promise > div {
  margin-right: 20px;
}
.details .houserool {
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
}
.details .houserool .rools {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.details .houserool .rools div:first-child {
  width: 20%;
}
.details .houserool .rools div:last-child {
  width: 75%;
  font-weight: 400;
}
.details .amenities {
  display: flex;
  justify-content: space-between;
}
.details .amenity {
  width: 60px;
  height: 70px;
  margin: 30px 10px;
}
.details .amenity div {
  text-align: center;
  margin: 10px 0;
}
.mainright .rightdate {
  padding: 20px;
}
.mainright .price {
  border-bottom: 1px solid #ddd;
  color: #008489;
  padding-bottom: 10px;
  margin: 0 auto;
}
.mainright .price p:first-child {
  font-weight: 800;
  font-size: 22px;
}
.mainright .price p:last-child {
  font-weight: 600;
  font-size: 14px;
  color: #000;
}
.mainright .dated {
  margin-top: 20px;
}
.mainright .dated > div {
  width: 100%;
  margin: 10px 0;
}
.mainright .people > div {
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 50px;
  overflow: hidden;
  transition: height 1s;
}
.mainright .people .changenum {
  border-top: 2px solid #008489;
  font-size: 16px;
  font-weight: 600;
  background: #fff;
}
.mainright .people .changenum1 {
  padding: 15px;
  display: flex;
  justify-content: space-between;
}
.mainright .people .changenum1 > div:last-child {
  width: 30%;
}
.mainright .people .changenum1 > div:last-child {
  display: flex;
  width: 40%;
}
.mainright .reduce,
.mainright .add {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #008489;
  cursor: pointer;
}
.mainright .number {
  margin: 0 20px;
  line-height: 30px;
  height: 30px;
}
.mainright .reduce > svg,
.mainright .add > svg {
  margin: 7px auto;
}
.mainright .yuding {
  position: absolute;
  bottom: 30px;
  width: 89.9%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  background: #ff5a5f;
  border-radius: 5px;
  cursor: pointer;
  z-index: -1;
}
img {
  background: none !important;
}
</style>