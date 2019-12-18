<template>
  <div>
    <div style="height:61px;">
      <!-- 引入头组件 -->
      <user-header style='position:fixed; top:0; background:#ffffff; width:100%;'></user-header>
    </div>
    <div class="user_data">
      <div class="data_left">
        <ul>
          <li v-for="(elem,i) of list" :key="i">
            <!-- <a :class="{black:changeBlack==i}" @click="toggle(i)">{{elem.msg}}</a> -->
            <a :href="`#`+elem.urly">{{elem.msg}}</a>
          </li>
        </ul>
        <el-button>查看个人资料</el-button>
      </div>
      <div class="data_right">
        <div id="userdata">
          <div class="data_first">
            <div class="title">必填</div>
            <el-form ref="form" label-width="200px">
              <el-form-item label="用户名">
                <el-input v-model="name"></el-input>
                <div class="text-muted">您的公开个人资料将仅显示您的名字。申请预订时，房东会看到您的名字和姓氏。</div>
              </el-form-item>
              <el-form-item label="性别">
                <select v-model="sex">
                  <option value="1">男性</option>
                  <option value="0">女性</option>
                  <option value="-1">保密</option>
                </select>
                <div class="text-muted">此数据仅用于分析，我们不会透露给其它用户。</div>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-date-picker align="right" type="date" placeholder="选择日期"></el-date-picker>
                <div class="text-muted">此数据将帮助我们更好地为您提供服务，除必要的内部使用外，我们不会将您的信息透露给房东或其他用户。您必须年满 18 周岁才能使用爱彼迎的网站和服务。</div>
              </el-form-item>
              <el-form-item label="电子邮件地址">
                <el-input v-model="email"></el-input>
                <div class="text-muted">
                  我们不会向其他爱彼迎用户透露您的个人邮箱地址。
                  <a href="javascrpt:;">了解更多</a>。
                </div>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="phone"></el-input>
                <div class="text-muted">只有在您和另一名爱彼迎用户确认预订时，此资料才会被分享。这是我们帮助大家联系彼此的方式。</div>
              </el-form-item>
              <el-form-item label="登录时间">
                <el-input v-model="user_login_time" disabled></el-input>
                <div class="text-muted">此数据会显示您最近一次登录的时间</div>
              </el-form-item>
              <el-form-item label="注册时间">
                <el-input v-model="user_reg_time" disabled></el-input>
                <div class="text-muted">此数据会显示您注册的时间</div>
              </el-form-item>
              <el-form-item label="首选语言">
                <select>
                  <option>Bahasa Indonesia</option>
                  <option>Bahasa Melayu</option>
                  <option>Català</option>
                  <option>Dansk</option>
                  <option>Deutsch</option>
                  <option>English</option>
                  <option>Español</option>
                  <option>Eλληνικά</option>
                  <option>Français</option>
                  <option>Hrvatski</option>
                  <option>Italiano</option>
                  <option>Magyar</option>
                  <option>Nederlands</option>
                  <option>Norsk</option>
                  <option>Polski</option>
                  <option>Português</option>
                  <option>Suomi</option>
                  <option>Svenska</option>
                  <option>Türkçe</option>
                  <option>Íslenska</option>
                  <option>Čeština</option>
                  <option>Русский</option>
                  <option>עברית</option>
                  <option>العربية</option>
                  <option>ภาษาไทย</option>
                  <option selected="selected">中文 (简体)</option>
                  <option>中文 (繁體)</option>
                  <option>日本語</option>
                  <option>한국어</option>
                </select>
                <div class="text-muted">我们将会使用此语言给您发消息。</div>
              </el-form-item>
              <el-form-item label="首选货币">
                <select>
                  <option>澳大利亚元</option>
                  <option>阿联酋迪拉姆</option>
                  <option>保加利亚列弗</option>
                  <option>波兰兹罗提</option>
                  <option>巴西雷亚尔</option>
                  <option>丹麦克朗</option>
                  <option>俄罗斯卢布</option>
                  <option>菲律宾比索</option>
                  <option>港币</option>
                  <option>哥伦比亚比索</option>
                  <option>哥斯达黎加科朗</option>
                  <option>韩元</option>
                  <option>捷克克朗</option>
                  <option>加拿大元</option>
                  <option>克罗地亚库纳</option>
                  <option>罗马尼亚列伊</option>
                  <option>摩洛哥迪拉姆</option>
                  <option>秘鲁索尔</option>
                  <option>马来西亚林吉特</option>
                  <option>墨西哥比索</option>
                  <option>美元</option>
                  <option>南非兰特</option>
                  <option>挪威克朗</option>
                  <option>欧元</option>
                  <option>瑞典克朗</option>
                  <option selected="selected">人民币</option>
                  <option>瑞士法郎</option>
                  <option>日元</option>
                  <option>沙特里亚尔</option>
                  <option>新台币</option>
                  <option>土耳其里拉</option>
                  <option>泰铢</option>
                  <option>乌拉圭比索</option>
                  <option>新加坡元</option>
                  <option>新西兰元</option>
                  <option>匈牙利福林</option>
                  <option>英镑</option>
                  <option>印度卢比</option>
                  <option>以色列新谢克尔</option>
                  <option>智利比索</option>
                </select>
                <div class="text-muted">我们将会使用此货币为您显示价格。</div>
              </el-form-item>
              <el-form-item label="您住的地方">
                <el-input placeholder="例如，法国巴黎 / 纽约布鲁克林 / 伊利诺伊州芝加哥"></el-input>
              </el-form-item>
              <el-form-item label="自我介绍">
                <textarea cols="90" rows="7" placeholder="比如喜欢看电影,旅游,爬山..."></textarea>
                <div class="text-muted">
                  爱彼迎以相互信任为基础，请帮助其他人了解您。
                  <br />告诉他们您喜欢什么，您离开了哪几样东西就不能活？分享您最喜爱的旅游目的地、书籍、电影、电视节目、音乐以及美食。
                  <br />告诉他们您会是个什么样的房东或房客，您旅游的风格是怎样的，您作为爱彼迎房东的风格又如何。
                  <br />您也可以向大家介绍一下自己的人生格言。
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div class="data_first">
            <div class="title">选填</div>
            <el-form ref="form" label-width="200px">
              <el-form-item label="学校">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="工作">
                <el-input placeholder="公司名称或工作职位"></el-input>
              </el-form-item>
              <el-form-item label="时区">
                <div class="select">
                  <select id="user_preference_time_zone" name="user_preference[time_zone]">
                    <option value></option>
                    <option value="International Date Line West">(GMT-11:00) International Date Line West</option>
                    <option value="Midway Island">(GMT-11:00) Midway Island</option>
                    <option value="Samoa">(GMT-11:00) Samoa</option>
                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                    <option value="Alaska">(GMT-09:00) Alaska</option>
                    <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                    <option value="Tijuana">(GMT-08:00) Tijuana</option>
                    <option value="Arizona">(GMT-07:00) Arizona</option>
                    <option value="Chihuahua">(GMT-07:00) Chihuahua</option>
                    <option value="Mazatlan">(GMT-07:00) Mazatlan</option>
                    <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                    <option value="America/Chicago">(GMT-06:00) America/Chicago</option>
                    <option value="Central America">(GMT-06:00) Central America</option>
                    <option value="Central Time (US &amp; Canada)">(GMT-06:00) Central Time (US &amp; Canada)</option>
                    <option value="Guadalajara">(GMT-06:00) Guadalajara</option>
                    <option value="Mexico City">(GMT-06:00) Mexico City</option>
                    <option value="Monterrey">(GMT-06:00) Monterrey</option>
                    <option value="Saskatchewan">(GMT-06:00) Saskatchewan</option>
                    <option value="Bogota">(GMT-05:00) Bogota</option>
                    <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                    <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                    <option value="Lima">(GMT-05:00) Lima</option>
                    <option value="Quito">(GMT-05:00) Quito</option>
                    <option value="Atlantic Time (Canada)">(GMT-04:00) Atlantic Time (Canada)</option>
                    <option value="Caracas">(GMT-04:00) Caracas</option>
                    <option value="Georgetown">(GMT-04:00) Georgetown</option>
                    <option value="La Paz">(GMT-04:00) La Paz</option>
                    <option value="Santiago">(GMT-04:00) Santiago</option>
                    <option value="Newfoundland">(GMT-03:30) Newfoundland</option>
                    <option value="Brasilia">(GMT-03:00) Brasilia</option>
                    <option value="Buenos Aires">(GMT-03:00) Buenos Aires</option>
                    <option value="Greenland">(GMT-03:00) Greenland</option>
                    <option value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
                    <option value="Azores">(GMT-01:00) Azores</option>
                    <option value="Cape Verde Is.">(GMT-01:00) Cape Verde Is.</option>
                    <option value="Edinburgh">(GMT+00:00) Edinburgh</option>
                    <option value="Europe/Lisbon">(GMT+00:00) Europe/Lisbon</option>
                    <option value="Europe/London">(GMT+00:00) Europe/London</option>
                    <option value="Lisbon">(GMT+00:00) Lisbon</option>
                    <option value="London">(GMT+00:00) London</option>
                    <option value="Monrovia">(GMT+00:00) Monrovia</option>
                    <option value="UTC">(GMT+00:00) UTC</option>
                    <option value="Amsterdam">(GMT+01:00) Amsterdam</option>
                    <option value="Belgrade">(GMT+01:00) Belgrade</option>
                    <option value="Berlin">(GMT+01:00) Berlin</option>
                    <option value="Bern">(GMT+01:00) Bern</option>
                    <option value="Bratislava">(GMT+01:00) Bratislava</option>
                    <option value="Brussels">(GMT+01:00) Brussels</option>
                    <option value="Budapest">(GMT+01:00) Budapest</option>
                    <option value="Casablanca">(GMT+01:00) Casablanca</option>
                    <option value="Copenhagen">(GMT+01:00) Copenhagen</option>
                    <option value="Dublin">(GMT+01:00) Dublin</option>
                    <option value="Ljubljana">(GMT+01:00) Ljubljana</option>
                    <option value="Madrid">(GMT+01:00) Madrid</option>
                    <option value="Paris">(GMT+01:00) Paris</option>
                    <option value="Prague">(GMT+01:00) Prague</option>
                    <option value="Rome">(GMT+01:00) Rome</option>
                    <option value="Sarajevo">(GMT+01:00) Sarajevo</option>
                    <option value="Skopje">(GMT+01:00) Skopje</option>
                    <option value="Stockholm">(GMT+01:00) Stockholm</option>
                    <option value="Vienna">(GMT+01:00) Vienna</option>
                    <option value="Warsaw">(GMT+01:00) Warsaw</option>
                    <option value="West Central Africa">(GMT+01:00) West Central Africa</option>
                    <option value="Zagreb">(GMT+01:00) Zagreb</option>
                    <option value="Athens">(GMT+02:00) Athens</option>
                    <option value="Bucharest">(GMT+02:00) Bucharest</option>
                    <option value="Cairo">(GMT+02:00) Cairo</option>
                    <option value="Harare">(GMT+02:00) Harare</option>
                    <option value="Helsinki">(GMT+02:00) Helsinki</option>
                    <option value="Jerusalem">(GMT+02:00) Jerusalem</option>
                    <option value="Kyiv">(GMT+02:00) Kyiv</option>
                    <option value="Pretoria">(GMT+02:00) Pretoria</option>
                    <option value="Riga">(GMT+02:00) Riga</option>
                    <option value="Sofia">(GMT+02:00) Sofia</option>
                    <option value="Tallinn">(GMT+02:00) Tallinn</option>
                    <option value="Vilnius">(GMT+02:00) Vilnius</option>
                    <option value="Baghdad">(GMT+03:00) Baghdad</option>
                    <option value="Istanbul">(GMT+03:00) Istanbul</option>
                    <option value="Kuwait">(GMT+03:00) Kuwait</option>
                    <option value="Minsk">(GMT+03:00) Minsk</option>
                    <option value="Moscow">(GMT+03:00) Moscow</option>
                    <option value="Nairobi">(GMT+03:00) Nairobi</option>
                    <option value="Riyadh">(GMT+03:00) Riyadh</option>
                    <option value="St. Petersburg">(GMT+03:00) St. Petersburg</option>
                    <option value="Volgograd">(GMT+03:00) Volgograd</option>
                    <option value="Tehran">(GMT+03:30) Tehran</option>
                    <option value="Abu Dhabi">(GMT+04:00) Abu Dhabi</option>
                    <option value="Baku">(GMT+04:00) Baku</option>
                    <option value="Muscat">(GMT+04:00) Muscat</option>
                    <option value="Tbilisi">(GMT+04:00) Tbilisi</option>
                    <option value="Yerevan">(GMT+04:00) Yerevan</option>
                    <option value="Kabul">(GMT+04:30) Kabul</option>
                    <option value="Ekaterinburg">(GMT+05:00) Ekaterinburg</option>
                    <option value="Islamabad">(GMT+05:00) Islamabad</option>
                    <option value="Karachi">(GMT+05:00) Karachi</option>
                    <option value="Tashkent">(GMT+05:00) Tashkent</option>
                    <option value="Chennai">(GMT+05:30) Chennai</option>
                    <option value="Kolkata">(GMT+05:30) Kolkata</option>
                    <option value="Mumbai">(GMT+05:30) Mumbai</option>
                    <option value="New Delhi">(GMT+05:30) New Delhi</option>
                    <option value="Sri Jayawardenepura">(GMT+05:30) Sri Jayawardenepura</option>
                    <option value="Kathmandu">(GMT+05:45) Kathmandu</option>
                    <option value="Almaty">(GMT+06:00) Almaty</option>
                    <option value="Astana">(GMT+06:00) Astana</option>
                    <option value="Dhaka">(GMT+06:00) Dhaka</option>
                    <option value="Urumqi">(GMT+06:00) Urumqi</option>
                    <option value="Rangoon">(GMT+06:30) Rangoon</option>
                    <option value="Asia/Bangkok">(GMT+07:00) Asia/Bangkok</option>
                    <option value="Bangkok">(GMT+07:00) Bangkok</option>
                    <option value="Hanoi">(GMT+07:00) Hanoi</option>
                    <option value="Jakarta">(GMT+07:00) Jakarta</option>
                    <option value="Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
                    <option value="Novosibirsk">(GMT+07:00) Novosibirsk</option>
                    <option value="Asia/Kuala_Lumpur">(GMT+08:00) Asia/Kuala_Lumpur</option>
                    <option value="Asia/Shanghai">(GMT+08:00) Asia/Shanghai</option>
                    <option value="Beijing">(GMT+08:00) Beijing</option>
                    <option value="Chongqing">(GMT+08:00) Chongqing</option>
                    <option value="Hong Kong" selected="selected">(GMT+08:00) Hong Kong</option>
                    <option value="Irkutsk">(GMT+08:00) Irkutsk</option>
                    <option value="Kuala Lumpur">(GMT+08:00) Kuala Lumpur</option>
                    <option value="Perth">(GMT+08:00) Perth</option>
                    <option value="Singapore">(GMT+08:00) Singapore</option>
                    <option value="Taipei">(GMT+08:00) Taipei</option>
                    <option value="Ulaan Bataar">(GMT+08:00) Ulaan Bataar</option>
                    <option value="Osaka">(GMT+09:00) Osaka</option>
                    <option value="Sapporo">(GMT+09:00) Sapporo</option>
                    <option value="Seoul">(GMT+09:00) Seoul</option>
                    <option value="Tokyo">(GMT+09:00) Tokyo</option>
                    <option value="Yakutsk">(GMT+09:00) Yakutsk</option>
                    <option value="Adelaide">(GMT+09:30) Adelaide</option>
                    <option value="Darwin">(GMT+09:30) Darwin</option>
                    <option value="Brisbane">(GMT+10:00) Brisbane</option>
                    <option value="Canberra">(GMT+10:00) Canberra</option>
                    <option value="Guam">(GMT+10:00) Guam</option>
                    <option value="Hobart">(GMT+10:00) Hobart</option>
                    <option value="Melbourne">(GMT+10:00) Melbourne</option>
                    <option value="Port Moresby">(GMT+10:00) Port Moresby</option>
                    <option value="Sydney">(GMT+10:00) Sydney</option>
                    <option value="Vladivostok">(GMT+10:00) Vladivostok</option>
                    <option value="Magadan">(GMT+11:00) Magadan</option>
                    <option value="New Caledonia">(GMT+11:00) New Caledonia</option>
                    <option value="Solomon Is.">(GMT+11:00) Solomon Is.</option>
                    <option value="Auckland">(GMT+12:00) Auckland</option>
                    <option value="Fiji">(GMT+12:00) Fiji</option>
                    <option value="Kamchatka">(GMT+12:00) Kamchatka</option>
                    <option value="Marshall Is.">(GMT+12:00) Marshall Is.</option>
                    <option value="Wellington">(GMT+12:00) Wellington</option>
                    <option value="Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
                  </select>
                </div>
                <div class="text-muted">您所在地的时区。</div>
              </el-form-item>
              <el-form-item label="语言">
                <div class="text-muted">无</div>
                <div class="text-muted">
                  <a href="javascript:;">+添加更多</a>
                </div>
                <div class="text-muted">添加别人在爱彼迎与您对话时可以使用的所有语言</div>
              </el-form-item>
              <el-form-item label="增值税号">
                <div class="text-muted">
                  <a href="javascript:;">+添加增值税号</a>
                </div>
                <div class="text-muted">
                  对于欧盟用户以及征收增值税国家/地区的用户，我们收取的服务费将被征收增值税。如果您居住的国家/地区需要征收增值税，在输入有效的增值税号后，您将不会被收取该税费。
                  <a href="javascript:;">查看关于增值税的常见问题</a>
                </div>
              </el-form-item>
              <el-form-item label="紧急联系人">
                <div class="text-muted">
                  <a href="javascript:;">+添加联系人</a>
                </div>
                <span class="text-muted">请提供一个您信任的联系人，如果出现紧急情况，我们的客户体验团队可以通知该联系人。</span>
              </el-form-item>
              <el-form-item label="收货地址">
                <div class="text-muted">
                  <a href="javascript:;">+添加收货地址</a>
                </div>
              </el-form-item>
              <el-form-item label="房客个人资料">
                <div class="text-muted">
                  <a href="javascript:;">+添加新的房客个人资料</a>
                </div>
                <span class="text-muted">只有当您前往中国的时候才需要提供此信息，我们不会和您的房东或其他房客分享该信息。</span>
              </el-form-item>
            </el-form>
          </div>
          <div class="data_first">
            <div class="title">商务差评</div>
            <el-form ref="form" label-width="200px">
              <el-form-item label="工作邮箱">
                <el-input></el-input>
                <div class="text-muted">
                  在您下次的搜索中，选择筛选条件
                  <strong>旅程类型</strong>，找到完美的商务差旅房源。
                  <a href="javascript:;">了解详情</a>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <el-button type="danger" round style="margin-bottom:50px;" @click="open">保存</el-button>
        </div>
        <div id="second">
          <div class="data_first">
            <div class="title">个人头像</div>
            <div class="uphone">
              <div class="uphone_left">
                <img :src="user_imgurl" />
              </div>
              <div class="uphone_right">
                <div class="text-muted">清晰的正面脸部照片是房东和房客互相认识对方的重要途径。您能想象把自己的房子租给一只猫吗？
                  请确保使用能够清楚显示您面部的照片，并确认其中不包含任何您不希望其他房东或房客看到的个人或敏感信息。</div>
                <div>
                  <!-- 选择图片 -->
                  <input type="file" accept="image/*" @change="chooseImg" />
                  <!-- 提交图片 -->
                  <img :src="base64" class="aa" />
                  <el-button type="danger" round style="margin-bottom:50px;" @click="open1">保存</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="three">
          <div class="data_first">
            <div class="title">您已验证信息</div>
            <h3>电子邮件地址</h3>
            <div class="text-muted">您已经确认您的电子邮件地址。已确认的电子邮件地址非常重要，因为它能够让我们与您进行安全的沟通。</div>
            <h3>手机号</h3>
            <div style="margin-top:20px;">只有在您的预订确认后，我们才会把您的电话号码与另一位爱彼迎用户分享。</div>
          </div>
        </div>
        <div id="four">
          <div class="data_first">
            <div class="title">过往评价</div>
            <div class="text-muted">预订的住宿结束后才能在爱彼迎网站上撰写评价。您收到的评价将出现在这里以及您公开的个人资料中。</div>
            <div style="margin-top:20px;">尚未有人对您进行评价。</div>
          </div>
        </div>
        <div id="five">
          <div class="data_first">
            <div class="title">等待批准</div>
            <div class="text-muted">您接受的推荐语将会出现在您的公开个人资料中。您忽略的推荐语将不会出现在您的个人资料中，且对方不会收到通知。</div>
            <div style="margin-top:20px;">没有等待审核的推荐语</div>
          </div>
          <div class="data_first">
            <div class="title">您过往的推荐语</div>
            <div class="text-muted">撰写推荐语必须有个人头像。有个人头像的用户撰写的推荐语才会出现在您的公开个人资料中。</div>
            <div style="margin-top:20px;">还没有人为您撰写过推荐语。 了解怎样获得推荐语.</div>
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
        list: [
          { urly: "userdata", msg: "编辑个人资料" },
          { urly: "second", msg: "照片" },
          { urly: "", msg: "信任和验证" },
          { urly: "", msg: "评价" },
          { urly: "", msg: "推荐语" }
        ],
        name: "",
        email: "",
        phone: "",
        sex: "",
        user_login_time: "",
        user_reg_time: "",
        user_imgurl: "",
        base64: ""
      };
    },
    created() {
      this.getuser();
      /*
      //post请求
      //stringify将js对象转换查询字符串
      var url = http://127.0.0.1:3000/
      var postData = this.qs.stringify({
        属性名:属性值,
        属性名:属性值
      })
      this.axios.post(url,postData).then(result=>{
        console.log(result)
      })
      */
    },
    methods: {
      getuser() {
        this.axios.get("user/").then(result => {
          if (result.data.code > 0) {
            this.name = result.data.data[0].user_name;
            this.email = result.data.data[0].user_email;
            this.phone = result.data.data[0].user_phone;
            this.sex = result.data.data[0].user_gender;
            this.user_login_time = result.data.data[0].user_login_time;
            this.user_reg_time = result.data.data[0].user_reg_time;
            if (result.data.data[0].user_imgurl == null) {
              this.user_imgurl = `https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png`;
            } else {
              this.user_imgurl =
                `http://127.0.0.1:3000/` + result.data.data[0].user_imgurl;
            }
          } else {
            this.$alert("您还没有登录,请登录!", "消息提示");
          }
        });
      },
      open() {
        this.$confirm("此操作将保存您修改的数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "保存成功!"
            });
            this.axios
              .get("user/user_update", {
                params: {
                  name: this.name,
                  email: this.email,
                  phone: this.phone,
                  sex: this.sex
                }
              })
              .then(result => {
                console.log(result);
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消保存"
            });
          });
      },
      chooseImg(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        var img = new Image();
        // 读取图片
        reader.readAsDataURL(file);
        // 读取完毕后的操作
        reader.onloadend = e => {
          img.src = e.target.result;
          // 这里的e.target就是reader
          // console.log(reader.result)
          // reader.result就是图片的base64字符串
          this.base64 = reader.result;
        };
      },
      open1() {
        this.$confirm("您本次将要上传本张图片, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "上传成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消上传"
            });
          });
      }
    }
  };
</script>
<style scoped>
  .user_data {
    width: 1056px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .data_left {
    width: 20%;
    float: left;
    position: fixed;
  }

  .data_right {
    width: 80%;
    float: right;
  }

  .data_left ul li {
    margin-bottom: 15px;
  }

  .data_left ul li:hover {
    cursor: pointer;
  }

  .title {
    height: 42.6px;
    background: #edefed;
    line-height: 42.6px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .text-muted {
    color: #767676;
  }

  .data_first {
    border: 1px solid rgba(191, 191, 191, 0.2);
    box-sizing: border-box;
    margin-bottom: 30px;
  }

  .uphone {
    display: flex;
    justify-content: center;
    height: 300px;
  }

  .uphone .uphone_left {
    width: 40%;
    line-height: 300px;
    text-align: center;
  }

  .uphone .uphone_left img {
    height: 300px;
  }

  .uphone .uphone_right {
    width: 60%;
    text-align: center;
  }

  .uphone .uphone_right div.text-muted {
    text-align: center;
    margin-bottom: 20px;
  }

  .aa {
    height: 150px;
  }
</style>