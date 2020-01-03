<template>
  <div>
    <!-- 精选 -->
    <el-carousel v-if="cullingActivities.length > 0" indicator-position="outside">
      <el-carousel-item v-for="(item,i) in cullingActivities[0].prduct_list" :key="i">
        <div class="carousel">
          <img @click="detail(item.product_id)" :src="baseImgUrl + item.image_url" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <div v-if="cullingActivities.length === 0" 暂无精选活动，敬请期待！></div>
    <!-- 秒杀 -->
    <!-- <div class="d1">
      <p class="p1">
        <a>{{secKillActivicities[0].activity_name}}</a>
      </p>
      <p class="p2">{{secKillActivicities[0].description}}</p>
      <el-carousel :interval="40000" type="card" height="500px">
        <el-carousel-item v-for="(item,i) in secKillActivicities[0].prduct_list" :key="i">
          <div class="carousel">
            <img :src="baseImgUrl + item.image_url" />
            <p class="p11">{{item.product_name}}</p>
            <p class="p12">￥{{item.price}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>-->
    <!-- 促销 -->
    <div class="d2">
      <p class="p1">
        <a>{{promotionActivities[0].activity_name}}</a>
      </p>
      <p class="p2">{{promotionActivities[0].description}}</p>
      <div class="d21" @click="toActicity">
        <div class="a21 imgOuter">
          <img :src="baseImgUrl + promotionImgs[0]" alt class="img21" />
        </div>
        <div class="a22 imgOuter">
          <img :src="baseImgUrl + promotionImgs[1] " alt class="img22" />
        </div>
        <!-- <div class="a23 imgOuter">
          <img :src="baseImgUrl + promotionImgs[2] " alt class="img23" />
        </div>-->
      </div>
    </div>
    <!-- 预div告 -->
    <div class="d4">
      <p class="p1">
        <!-- <a href>全球大牌优选，买手用心挑选</a> -->
        <a href>活动预告，好货等你挑</a>
      </p>
      <p class="p2">全球好货 原装正品 海外直邮</p>
      <div class="d41">
        <div v-for="item in willStartActivities">
          <p style="font-size:24px;margin-top:30px">{{item.activity_name}}</p>
          <p style="font-size:16px">{{item.description}}</p>
          <p>
            <span style="color: #e61d1d; font-size: 22px">{{item.start_time}}</span> ~
          </p>
          <p>
            <span style="color: #e61d1d; font-size: 22px">{{item.end_time}}</span>
          </p>敬请期待
        </div>
        <!-- <a href class="img41">
          <img src="../assets/img51.jpg" alt />
        </a>
        <a href class="img42">
          <img src="../assets/img52.jpg" alt />
        </a>
        <a href class="img43">
          <img src="../assets/img54.jpg" alt />
        </a>
        <a href class="img44">
          <img src="../assets/img53.jpg" alt />
        </a>-->
      </div>
      <!-- <div class="d42">
        <ul class="ul43">
          <li class="li41">
            <div>
              <a href="#">
                <img src="../assets/img55.png" alt />
              </a>
            </div>
            <p>
              <a href>自然生活，精选用料</a>
            </p>
          </li>
          <li class="li41">
            <div>
              <a href="#">
                <img src="../assets/img56.png" alt />
              </a>
            </div>
            <p>
              <a href>源点生活</a>
            </p>
          </li>
          <li class="li41">
            <div>
              <a href="#">
                <img src="../assets/img57.png" alt />
              </a>
            </div>
            <p>
              <a href="#">puree好设计好生活</a>
            </p>
          </li>
          <li class="li41">
            <div>
              <a href="#">
                <img src="../assets/img58.png" alt />
              </a>
            </div>
            <p>
              <a href="#">家具精品之选</a>
            </p>
          </li>
          <li class="li42">
            <div>
              <a href="#">
                <img src="../assets/img59.png" alt />
              </a>
            </div>
            <p>
              <a href="#">木香，手工制作</a>
            </p>
          </li>
        </ul>
      </div>-->
    </div>
    <!-- <div class="d5">
      <p class="p1">
        <a href>良品体验</a>
      </p>
      <p class="p2">用户反馈，是我们改进的目标</p>
      <div class="d51">
        <ul>
          <li>
            <a href="#">
              <img src="../assets/img61.png" alt />
            </a>
            <div class="d52">
              <p>
                <span class="w51">天草陶石咖啡杯套装</span>
                <span class="w52">¥299</span>
              </p>
              <p
                class="w53"
              >使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化</p>
              <p>
                <span class="w54">alice</span>
                <span class="w55">2016-12-16 09:59</span>
              </p>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img62.png" alt />
            </a>
            <div class="d52">
              <p>
                <span class="w51">骨瓷印花餐具</span>
                <span class="w52">¥699</span>
              </p>
              <p
                class="w53"
              >使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化</p>
              <p>
                <span class="w54">王先生</span>
                <span class="w55">2016-12-17 09:59</span>
              </p>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img63.png" alt />
            </a>
            <div class="d52">
              <p>
                <span class="w51">黑色帆布双肩包</span>
                <span class="w52">¥299</span>
              </p>
              <p class="w53">挺好的，尺码真的很正！背部拉链设计，放心出行，为短途商旅贴心设计。防水尼龙与牛皮的优雅结合，轻便小巧，简约百搭，防水尼龙，可折叠双肩背包</p>
              <p>
                <span class="w54">爱丽丝</span>
                <span class="w55">2016-12-10 07:59</span>
              </p>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img64.png" alt />
            </a>
            <div class="d52">
              <p>
                <span class="w51">桌面书籍收纳组合套装</span>
                <span class="w52">¥199</span>
              </p>
              <p
                class="w53"
              >挺好的，特别暖，尺码真的很正！就是靴口太小了，要提着穿，心好累哦，本来都是一脚蹬来着，不过看在你这么暖的份上就原谅你了哈哈哈。真的可以媲美油叽叽，很开心。------三石是我男神</p>
              <p>
                <span class="w54">小蚂蚁</span>
                <span class="w55">2016-12-15 08:00</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
import fetch from "../http/index";
import { mapState } from "vuex";

export default {
  data() {
    return {
      willStartActivities: [], // 未开始
      cullingActivities: [{}], // 进行中-精选
      promotionActivities: [{}], // 进行中-促销
      promotionImgs: [],
      secKillActivicities: [{}] // 进行中-秒杀
    };
  },
  computed: {
    ...mapState(["baseImgUrl"])
  },
  mounted() {
    // 未开始活动
    fetch("get", "/activity/status/1").then(data => {
      this.willStartActivities = data;
    });
    // 进行中的活动
    fetch("get", "/activity/status/2").then(data => {
      this.cullingActivities = this.handleData(data, 1);
      this.promotionActivities = this.handleData(data, 2);
      this.secKillActivicities = this.handleData(data, 3);
      this.promotionImgs =
        this.promotionActivities[0].prduct_list.map(prot => prot.image_url) ||
        [];
    });
    
  },
  methods: {
    detail(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
    toActicity() {
      const id = this.promotionActivities[0].activity_id;
      const name = this.promotionActivities[0].activity_name;
      this.$router.push({ name: "activity", params: { id, name } });
    },
    handleData(data, type) {
      const temp = data.filter(ac => ac.activity_type === type);
      return temp.length === 0
        ? [{ activity_name: "暂无活动，敬请期待" }]
        : temp;
    }
  }
};
</script>

<style scoped>
.carousel {
  text-align: center;
  cursor: pointer;
}
.carousel img {
  /* min-width: 500px; */
  max-width: 100%;
  max-height: 400px;
}
.carousel .p11 {
  margin-top: 21px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  line-height: 20px;
}
.carousel .p12 {
  color: rgb(219, 46, 46);
  font-size: 14px;
  line-height: 20px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d4d4d459;
}
.hb {
  margin-top: 68px;
  position: relative;
  overflow: hidden;
}
.hb > a {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.hb img {
  width: 100%;
  height: auto;
}
.hb > ul {
  position: absolute;
  top: 85%;
  left: 45.5%;
  z-index: 4;
}
.hb > ul > li {
  float: left;
  margin: 0 10px;
  width: 25px;
  height: 5px;
  background: white;
  display: block;
}
.hb > ul > li:first-child {
  width: 25px;
  background: #c78a49;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.clear {
  *zoom: 1;
}
.d1 {
  width: 100%;
  padding-top: 50px;
}
.p1 a {
  display: block;
  font-size: 24px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  width: 100%;
  height: 31px;
  text-align: center;
  line-height: 31px;
}
.p2 {
  font-size: 14px;
  color: rgb(153, 153, 153);
  line-height: 35px;
  text-align: center;
}
.d11 {
  width: 200%;
  height: 496px;
  margin: 0 auto;
  position: relative;
}
.d11 > a {
  text-decoration: none;
  width: 20px;
  height: 30px;
  position: absolute;
  font-size: 30px;
  line-height: 40px;
  color: rgb(200, 200, 200);
}
.d11 > a > span:hover {
  color: rgb(153, 153, 153);
}
.d11 > div {
  width: 1140px;
  height: 365px;
  margin-top: 0;
  margin-left: 104.5px;
  overflow: hidden;
}
.d11 ul li {
  float: left;
  width: 285px;
  height: 365px;
  margin: 0;
  text-align: center;
}
.d11 ul li img {
  width: 275px;
  height: 275px;
}
.a21 img {
  width: 680px;
  /* height: 380px; */
}
.a22 img {
  width: 450px;
  /* height: 185px; */
}
.a23 img {
  width: 450px;
  /* height: 185px; */
}
.d21 > .imgOuter {
  float: left;
  overflow: hidden;
}
.a21 {
  width: 680px;
  height: 380px;
}
.a22 {
  width: 450px;
  /* height: 185px; */
  position: absolute;
  top: 0;
  right: 0;
}
.a23 {
  width: 450px;
  height: 185px;
  position: absolute;
  bottom: 4px;
  right: 0;
}
.d21 {
  width: 1140px;
  height: 384px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.d21 img:hover {
  transform: scale(1.2, 1.2);
  transition: all 0.3s linear;
}
.d3 {
  width: 100%;
  height: 736px;
  padding-top: 50px;
}
.d3 .img30 {
  width: 220px;
  height: 309px;
}
.d3 .img31 {
  width: 220px;
  height: 220px;
  margin-bottom: 4px;
}
.d3 .d31 {
  width: 1150px;
  height: 640px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  margin-top: 30px;
  padding-left: 10px;
}
.d3 .img30 {
  float: left;
  margin-bottom: 11px;
  margin-right: 10px;
}
.d3 li {
  width: 220px;
  height: 309px;
  margin-bottom: 11px;
  margin-right: 10px;
  background-color: #f8f8f8;
}
.d3 .ul31 li {
  float: left;
}
.d3 .ul32 li {
  float: left;
}
.d3 li a {
  text-decoration: none;
}
.d3 .w31 {
  display: block;
  height: 32px;
  line-height: 16px;
  font-size: 12px;
  color: rgb(51, 51, 51);
  font-weight: bold;
  padding: 0 10px;
}
.d3 .w32 {
  display: block;
  line-height: 22px;
  font-size: 14px;
  color: rgb(219, 46, 46);
  margin-top: 5px;
}
.d3 img,
li:hover {
}
li:after {
  content: "";
  display: block;
  clear: both;
}
li {
  *zoom: 1;
}
.d4 {
  width: 100%;
  height: 526px;
  padding-top: 50px;
}
.d4 .d41 {
  width: 1140px;
  height: 358px;
  margin: 0 auto;
  margin-top: 23px;
  position: relative;
  display: flex;
  justify-content: center;
}
.d4 .d41 > div {
  width: 400px;
  box-shadow: 0 2px 4px #00000012;
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: #d4d4d459;
}
.d4 .d41 p {
  margin: 10px;
}

.img41 {
  position: absolute;
  left: 0;
  top: 0;
  width: 504px;
  height: 358px;
}
.img42 {
  position: absolute;
  right: 211px;
  top: 0;
  width: 411px;
  height: 172px;
}
.img43 {
  position: absolute;
  right: 0;
  top: 0;
  width: 197px;
  height: 358px;
}
.img44 {
  position: absolute;
  right: 211px;
  bottom: 0;
  width: 411px;
  height: 172px;
}
.img41 img {
  width: 504px;
  height: 358px;
}
.img42 img {
  width: 411px;
  height: 172px;
}
.img44 img {
  width: 411px;
  height: 172px;
}
.img43 img {
  width: 197px;
  height: 358px;
}
.d41 > a {
  overflow: hidden;
}
.img41 :hover {
  transform: scale(1.1);
  transition: 0.3s linear;
}
.img42 :hover {
  transform: scale(1.1);
  transition: 0.3s linear;
}
.img43 :hover {
  transform: scale(1.1);
  transition: 0.3s linear;
}
.img44 :hover {
  transform: scale(1.1);
  transition: 0.3s linear;
}
.ul43 li {
  float: left;
  width: 210px;
  height: 139px;
  text-align: center;
}
.d42 {
  width: 1140px;
  height: 167px;
  margin: 20px auto 0;
}
.d42 .li41 {
  margin: 0 22px 28px 0;
}
.d42 .li42 {
  margin: 0 0 28px;
}
.d42 p a {
  width: 200px;
  height: 15px;
  padding: 0 5px;
  text-decoration: none;
  font-size: 14px;
  line-height: 15px;
  color: rgb(93, 93, 93);
}
.d42 div {
  width: 207.89px;
  height: 90px;
  border: 1px solid rgb(232, 232, 232);
  margin-bottom: 10px;
  overflow: hidden;
}
.d42 div a {
  width: 99%;
}
.d42 div img {
  width: 176px;
  height: 88px;
  display: block;
  padding: 100px;
  margin-top: -100px;
  margin-left: -100px;
}
.d42 img:hover {
  transform: translateX(-40px);
  transition: 0.3s linear;
}
.d5 {
  width: 100%;
  height: 513px;
  padding: 50px 0;
  background-color: rgb(244, 240, 234);
}
.d5 li {
  float: left;
  width: 276px;
  height: 432px;
  margin: 0 9px 0 0;
  background-color: white;
  overflow: hidden;
}
.d51 {
  width: 1140px;
  height: 432px;
  margin: 15px 104.5px 0;
  position: relative;
}
.d5 li img {
  width: 276px;
  height: 276px;
}
.d5 li img:hover {
  transform: scale(1.05);
  transition: 0.3s linear;
}
.d5 .d52 {
  width: 236px;
  height: 124px;
  padding: 20px 15px;
  background-color: white;
  position: absolute;
  bottom: 0;
  margin-left: 5px;
}
.w51 {
  font-size: 14px;
  color: rgb(51, 51, 51);
  font-weight: bold;
}
.w52 {
  font-size: 14px;
  color: rgb(199, 138, 73);
  float: right;
}
.w53 {
  width: 236px;
  height: 68px;
  margin: 12px auto;
  font-size: 12px;
  color: rgb(77, 77, 77);
  overflow: hidden;
}
.w54 {
  font-size: 13px;
  line-height: 13px;
  color: rgb(119, 119, 119);
}
.w55 {
  font-size: 13px;
  line-height: 13px;
  color: rgb(119, 119, 119);
  margin-left: 0.5em;
}
</style>