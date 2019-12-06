<template>
  <div class="d11">
    <div class="d111">
      <p class="p1">
        <span>
          <a href="./index.html">首页</a>
        </span>
        <span class="s11">></span>
        <span>
          <a href="#">所有商品</a>
        </span>
        <span class="s11">></span>
        <span class="s12">{{product.product_name}}</span>
      </p>
    </div>
    <div class="d112">
      <div class="d1121">
        <div class="magnifier" id="magnifier1">
          <div class="magnifier-container">
            <div class="images-cover">
              <img :src="baseImgUrl + curImg" />
            </div>
            <!--当前图片显示容器-->
            <div class="move-view"></div>
            <!--跟随鼠标移动的盒子-->
          </div>
          <div class="magnifier-assembly">
            <div class="magnifier-line">
              <ul class="clearfix animation03">
                <li v-for="img in product.sub_image_url_list">
                  <div class="small-img" @click="changeImg(img)">
                    <img :src="baseImgUrl + img" />
                  </div>
                </li>
              </ul>
            </div>
            <!--缩略图-->
          </div>
          <div class="magnifier-view"></div>
          <!--经过放大的图片显示容器-->
        </div>
      </div>
      <div class="d1122">
        <p class="p1">{{product.product_name}}</p>
        <p class="p2">{{product.description}}</p>
        <p class="p3">
          <span class="s1">￥{{product.price}}</span>
          <span class="s2">已售出{{product.sold_out}}件</span>
        </p>
        <p class="p_"></p>
        <p class="p4">选择数量</p>
        <p class="p5">
          <span class="s3">
            <a href="javascript:void(0)" class="s31" id="s31" @click="changeCount(null, 'down')">-</a>
            <input type="text" class="s32" v-model="count" id="s32" @change="changeCount($event, 'input')"/>
            <a href="javascript:void(0)" class="s33" id="s33" @click="changeCount(null, 'up')">+</a>
          </span>
          <span class="s4">件（库存{{product.amount}}件）</span>
        </p>
        <p class="p6">
          <a @click="addToCar">加入购物车</a>
        </p>
      </div>
    </div>
    <div class="d113"></div>
  </div>
</template>

<script>
import http from "../http/index";
import { mapState } from "vuex";

export default {
  data() {
    return {
      curImg: "",
      product: {},
      count: 1
    };
  },
  computed: {
    ...mapState(["baseImgUrl"])
  },
  mounted() {
    const id = this.$route.params.id;
    http("get", `/product/${id}`).then(data => {
      this.product = data;
      this.curImg = data.image_url;
    });
  },
  methods: {
    changeImg(url) {
      this.curImg = url;
    },
    changeCount(e, type) {
      const amount = this.product.amount
      if (type === 'input' && e.target.value > amount) {
        this.count = amount
        return
      }else if (type === "down" && this.count <= 1) {
        return;
      }else if (type === "up" && this.count >= amount) {
        return;
      }
      type === "down" ? this.count-- : type === "up" ? this.count++ : "";
    },
    addToCar() {
      const userId = localStorage.getItem("userId");
      const data = {
        add_amount: this.count,
        product_id: this.product.product_id,
        user_id: userId
      };
      http("post", "/cart", data).then(data => {
        this.$message({
          message: "加入成功，在购物车等你哦！",
          type: "success"
        });
      });
    }
  }
};
</script>

<style scoped>
.d1 {
  width: 100%;
  height: 1301px;
  margin: 0 auto;
  background-color: rgb(242, 242, 242);
}
.d11 {
  width: 1140px;
  height: 803px;
  margin: 68px 104.5px 60px;
  background-color: white;
}
.d111 {
  width: 1080px;
  height: 41px;
  padding: 30px 30px 20px;
}
.p1 {
  width: 1080px;
  height: 40px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
.p1 a {
  text-decoration: none;
  color: black;
  font-size: 14px;
  line-height: 40px;
}
.p1 span {
  margin-right: 8px;
}
.s11 {
  font-size: 14px;
  line-height: 40px;
  color: rgb(85, 85, 85);
}
.s12 {
  font-size: 14px;
  line-height: 40px;
  color: rgb(85, 85, 85);
}
.d112 {
  width: 1080px;
  height: 582px;
  padding: 10px 30px 0;
}
.d1121 .magnifier-assembly {
  margin-top: 27px;
  padding: 0;
}
.d1121 .img1 img {
  width: 453px;
  height: 453px;
}
.d1121 .small-img {
  width: 75px;
  height: 75px;
  border: none;
  margin: 0;
}
.d1121 {
  width: 555px;
  height: 581px;
}
.d1121 .magnifier {
  margin-left: 0;
  margin-top: 0;
}
.d1121 .magnifier-container {
  border: none;
}
.d1122 {
  width: 399.6px;
  height: 259px;
  margin: 0 54px 0 32.3px;
}
.d112 > div {
  float: left;
}
.d1122 .p1 {
  width: 399.6px;
  height: 22px;
  line-height: 22px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  border: 0;
}
.d1122 .p2 {
  width: 399.6px;
  margin-top: 9px;
  font-size: 14px;
  color: rgb(153, 153, 153);
  line-height: 22px;
}
.d1122 .p3 {
  width: 399.6px;
  height: 20px;
  margin-top: 26px;
}
.d1122 .s1 {
  width: 56px;
  height: 27px;
  font-size: 20px;
  color: rgb(219, 46, 46);
  font-weight: bold;
  line-height: 20px;
  margin-right: 14px;
}
.d1122 .s2 {
  width: 64px;
  height: 20px;
  font-size: 14px;
  line-height: 14px;
  color: rgb(85, 85, 85);
}
.d1122 .p_ {
  width: 399.6px;
  height: 5px;
  border-bottom: 1px solid rgb(221, 221, 221);
  margin-top: 14px;
}
.d1122 .p4 {
  font-size: 14px;
  width: 399.6px;
  height: 14px;
  padding: 14px 0 4px 0;
  color: #555;
  line-height: 14px;
  margin-top: 5px;
}
.d1122 .p5 {
  width: 399.6px;
  height: 28px;
  margin-top: 6px;
}
.d1122 .p5 .s31,
.s33 {
  width: 26px;
  height: 26px;
  border: 1px solid rgb(221, 221, 221);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  color: rgb(153, 153, 153);
  font-weight: bold;
}
.d1122 .p5 .s32 {
  width: 42px;
  height: 26px;
  border: none;
  border-bottom: 1px solid rgb(221, 221, 221);
  border-top: 1px solid rgb(221, 221, 221);
  margin: 0 -5px;
  text-align: center;
}
.d1122 .p5 .s4 {
  width: 116px;
  height: 28px;
  font-size: 14px;
  line-height: 28px;
  color: #555;
}
.p6 {
  width: 399.6px;
  height: 50px;
  margin-top: 20px;
}
.p6 > a {
  display: block;
  width: 280px;
  height: 50px;
  text-align: center;
  color: white;
  font-size: 20px;
  background-color: rgb(199, 138, 73);
  line-height: 50px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}
.d113 {
  width: 1080px;
  height: 81px;
  margin: 40px 30px 0;
  border-top: 1px solid black;
}
.move-view {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bbbbbb;
}
.magnifier-view {
  border: 1px solid #bbbbbb;
}
</style>