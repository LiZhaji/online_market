<template>
  <div class="header">
    <div class="header_c inner_c">
      <h1 class="logo">青竹商城</h1>
      <dl class="allType">
        <dt>
          <a href="#">查看所有类型</a>
        </dt>
        <dd>
          <div class="dd_inn">
            <ul class="dd_cont">
              <li v-for="item in one_catalogy" @click="getCategory(1, item)">
                <span :class="{checked: item.checked}">{{item.name}}</span>
              </li>
            </ul>
            <ul class="dd_cont">
              <li v-for="item in two_catalogy" @click="getCategory(2, item)">
                <span :class="{checked: item.checked}">{{item.name}}</span>
              </li>
            </ul>
            <ul class="dd_cont">
              <li v-for="item in three_catalogy" @click="assignCaty(3, null, item)">
                <span :class="{checked: item.checked}">{{item.name}}</span>
              </li>
            </ul>
            <ul class="pro">
              <li v-for="item in products">
                <a href="#">
                  <div class="pic">
                    <img :src="baseImgUrl + item.image_url" />
                  </div>
                  <div class="content">
                    <h3>{{item.name}}</h3>
                    <span>￥{{item.price}}</span>
                  </div>
                </a>
                <div class="mask">
                  <span class="btn" @click="proDetail(item.id)">查看详情</span>
                </div>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
      <ul class="nav">
        <li>
          <router-link to="/homepage">首页</router-link>
        </li>
        <li>
          <router-link to="/products">所有产品</router-link>
        </li>
        <li>
          <router-link to="/blog">博客</router-link>
        </li>
        <li>
          <router-link to="/article">文章列表</router-link>
        </li>
      </ul>
      <a href="#" class="search"></a>
      <div class="reg">
        <div class="reg_c">
          <router-link to="/login">登录</router-link>
          <span>&nbsp;|&nbsp;</span>
          <router-link to="/register">注册</router-link>
        </div>
        <div class="ico">
          <span class="ico_c" @click="toShopcar"></span>
          <div class="settle">
            <p class="con">
              {{totalCount}}件商品 共计：
              <span>￥{{totalPrice}}</span>
            </p>
            <a class="btn" @click="$router.push('/pay')">结算</a>
          </div>
          <span class="con">0</span>
        </div>
        <div class="avatar">
          <img src="../assets/h144.jpeg" alt="avatar" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../http/index";
import { mapState } from "vuex";

export default {
  data() {
    return {
      one_catalogy: [],
      two_catalogy: [],
      three_catalogy: [],
      filter: {
        start_price: "",
        end_price: "",
        one_category_id: "",
        two_category_id: "",
        three_category_id: "",
        product_name: "",
        page: 1,
        size: 5,
        status: ""
      },
      products: [],
      totalPrice: 0,
      totalCount: 0
    };
  },
  computed: {
    ...mapState(["baseImgUrl"])
  },
  mounted() {
    this.getCategory(0, 0);
    this.getCarList()
  },
  methods: {
    getCarList() {
      const userId = localStorage.getItem("userId");
      http("get", `/cart/list/${userId}`).then(data => {
        this.totalPrice = data.reduce(
          (price, product) => (price += product.price * product.add_amount),
          0
        );
        this.totalCount = data.reduce(
          (count, product) => (count += product.add_amount),
          0
        );
      });
    },
    getCategory(curLevel, item) {
      http("get", `/category/tree/${item.id || item}`).then(data => {
        this.assignCaty(curLevel, data, item);
      });
    },
    assignCaty(curLevel, data, item) {
      const map = {
        1: "one_catalogy",
        2: "two_catalogy",
        3: "three_catalogy"
      };
      if (data) {
        const cats = data.children;
        const caty = cats.map(item => {
          return {
            name: item.category_name,
            id: item.category_id,
            checked: false
          };
        });
        this[map[curLevel + 1]] = caty;
      }

      if (curLevel === 1) {
        this.three_catalogy = [];

        this.filter.one_category_id = item.id;
        this.filter.two_category_id = "";
        this.filter.three_category_id = "";
      } else if (curLevel === 2) {
        this.filter.two_category_id = item.id;
        this.filter.three_category_id = "";
      } else if (curLevel === 3) {
        this.filter.three_category_id = item.id;
      }
      curLevel === 3 ? this.getProducts() : "";
      this.changeStyle(curLevel, item);
    },
    changeStyle(level, curItem) {
      if (!level) {
        return;
      }
      const map = {
        1: "one_catalogy",
        2: "two_catalogy",
        3: "three_catalogy"
      };
      this[map[level]].forEach(item => {
        item.checked = false;
      });
      curItem.checked = true;
    },
    getProducts() {
      this.filter.status = this.status1 ? 1 : "";
      const data = Object.assign({}, this.filter);
      http("post", "/product/list", data).then(res => {
        this.products = data;
      });
    },
    proDetail(id) {
      this.router.push("/detail");
    },
    toShopcar() {
      this.$router.push("/shopcar");
    }
  }
};
</script>

<style>
.header .header_c .allType .dd_inn .dd_cont li span.checked {
  color: #b98246;
}
/* 公共类，设置页面的版心 */

.inner_c {
  /* 版心的宽度 */
  width: 1140px;
  /* 居中显示 */
  margin: 0 auto;
}
/* 设置a标签的下划线 */
a,
routerLink {
  text-decoration: none;
  color: inherit;
}
/* 设置遮罩，公共类 */
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: none;
}
.mask .btn {
  width: 138px;
  height: 52px;
  position: absolute;
  background: #c78a49;
  color: #fff;
  text-align: center;
  line-height: 52px;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  margin-top: -26px;
  margin-left: -69px;
}
.header {
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 14px;
  color: #333333;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
}
.header .header_c {
  height: 68px;
}
.header .header_c h1 {
  width: 200px;
  height: 68px;
  background: url(../assets/logo.png) no-repeat 22px 15px;
  text-indent: -999em;
  overflow: hidden;
  float: left;
}
.header .header_c .allType {
  float: left;
  line-height: 68px;
}
.header .header_c .allType dt {
  width: 120px;
  height: 68px;
  text-align: center;
}
.header .header_c .allType dt a {
  display: block;
}
.header .header_c .allType dt:hover {
  background: #e6d6c6;
}
.header .header_c .allType dd {
  height: 340px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 68px;
  display: none;
  background: #fff;
}
.header .header_c .allType:hover dd {
  display: block;
  background: #f9f3ec;
}
.header .header_c .allType .dd_inn {
  width: 968px;
  margin: 0 auto;
  padding-left: 280px;
  padding-top: 60px;
}
.header .header_c .allType .dd_inn .dd_cont {
  line-height: 38px;
  width: 50px;
  float: left;
}
.header .header_c .allType .dd_inn .dd_cont li span {
  color: #1f1f1f;
  cursor: pointer;
}
.header .header_c .allType .dd_inn .dd_cont li span:hover {
  color: #e3be96;
}
.header .header_c .allType .dd_inn .pro {
  width: 710px;
  height: 280px;
  float: left;
}
.header .header_c .allType .dd_inn .pro li {
  width: 173px;
  height: 280px;
  margin-right: 60px;
  float: left;
  position: relative;
}
.header .header_c .allType .dd_inn .pro li:hover .mask {
  display: block;
}
.header .header_c .allType .dd_inn .pro li .pic img {
  width: 100%;
}
.header .header_c .allType .dd_inn .pro li .content {
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}

.header .header_c .allType .dd_inn .pro li .content span {
  color: #db2e2e;
}
.header .header_c .nav {
  float: left;
  line-height: 68px;
}
.header .header_c .nav li {
  float: left;
  padding: 0 28px;
}
.header .header_c .nav li routerLink {
  display: block;
}
.header .header_c .nav li:hover {
  background: #e6d6c6;
}
.header .header_c .search {
  width: 25px;
  height: 25px;
  background: url(../assets/img00.png);
  float: left;
  margin-top: 20px;
  margin-left: 138px;
}
.header .header_c .reg {
  float: right;
  line-height: 68px;
  position: relative;
  text-align: right;
}
.header .header_c .reg a {
  display: inline-block;
}
.header .header_c .reg .ico .ico_c {
  display: inline-block;
  width: 28px;
  height: 26px;
  background: url(../assets/0.png);
  vertical-align: middle;
  margin-left: 10px;
}
.header .header_c .reg .con {
  font-weight: bold;
}

.header .header_c .reg .settle {
  width: 230px;
  height: 114px;
  background: purple;
  position: absolute;
  right: 2px;
  top: 69px;
  padding: 10px;
  background: #f2f2f2;
  border: 1px solid #dddddd;
  border-top: none;
  text-align: center;
  display: none;
}
.header .header_c .reg .settle a {
  display: block;
  height: 44px;
  background: #c78a49;
  color: #fff;
  line-height: 44px;
  font-size: 14px;
  border-radius: 4px;
}
.header .header_c .reg .reg_c,
.header .header_c .reg .ico,
.header .header_c .reg .avatar {
  float: left;
}
.header .header_c .reg .avatar img {
  width: 45px;
  height: 45px;
  border-radius: 50px;
}
.header .header_c .reg .settle p span {
  color: #db2e2e;
}
.header .header_c .reg .ico:hover .settle {
  display: block;
}
</style>