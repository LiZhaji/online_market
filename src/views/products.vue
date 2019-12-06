<template>
  <div class="s_content">
    <div class="s_content_c inner_c">
      <div class="s_info">
        <div class="s_title">
          <a href="#">首页</a>
          &gt;
          <span>所有商品</span>
        </div>
        <div class="screen">
          <table>
            <tr class="t2">
              <th>类别</th>
              <td>
                <span
                  :class="{checked: item.checked}"
                  @click="getCategory(1, item)"
                  v-for="item in one_catalogy"
                >{{item.name}}</span>
              </td>
            </tr>
            <tr class="t2">
              <th class="white"></th>
              <td>
                <span
                  :class="{checked: item.checked}"
                  @click="getCategory(2, item)"
                  v-for="item in two_catalogy"
                >{{item.name}}</span>
              </td>
            </tr>
            <tr class="t2">
              <th class="white"></th>
              <td>
                <span
                  :class="{checked: item.checked}"
                  @click="assignCaty(3, null, item)"
                  v-for="item in three_catalogy"
                >{{item.name}}</span>
              </td>
            </tr>
          </table>
        </div>
        <div class="fun">
          <div class="filter">
            <span>筛选：</span>
            <div href="#" class="s3">
              商品名称
              <input
                class="filter_input"
                @keyup.enter="getProducts"
                type="text"
                v-model="filter.product_name"
              />
            </div>
            <div href="#" class="s2">
              价格
              <input
                class="filter_input"
                @keyup.enter="getProducts"
                type="text"
                v-model="filter.start_price"
              /> -
              <input
                class="filter_input"
                @keyup.enter="getProducts"
                type="text"
                v-model="filter.end_price"
              />
            </div>
          </div>
          <div class="swi">
            <span>仅显示有货：</span>
            <a
              class="status"
              href="#"
              :class="{btnBlue: status1}"
              @click="status1 = !status1; getProducts()"
            >
              <i :class="{btnRight: status1}"></i>
            </a>
          </div>
        </div>
        <div class="s_prod">
          <ul class="pub_pro">
            <li v-for="product in products">
              <img :src="baseImgUrl + product.image_url" :alt="product.product_name" />
              <div class="cont">
                <h5>{{product.product_name}}</h5>
                <span class="price">
                  ￥
                  <span>{{product.price}}</span>
                </span>
                <span class="sold_out">
                  已售
                  <span>{{product.sold_out}}</span> 件
                </span>
              </div>
              <div class="mask">
                <a href="javascript:;" class="btn" @click="detail(product.product_id)">查看详情</a>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="pages">
          <a href="#">&lt;</a>
          <a href="#" class="tol cur">1</a>
          <a href="#" class="tol">2</a>
          <a href="#">&gt;</a>
        </div>-->
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
      products: [],
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
        size: 10,
        status: ""
      },
      status1: false
    };
  },
  computed: {
    ...mapState(["baseImgUrl"])
  },
  mounted() {
    this.getProducts();
    this.getCategory(0, 0);
  },
  methods: {
    getProducts() {
      this.filter.status = this.status1 ? 1 : "";
      const data = Object.assign({}, this.filter);
      http("post", "/product/list", data).then(data => {
          this.products = data
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
      this.getProducts();
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
    detail(id) {
      // this.$router.push({path: '/detail', query: {id}})
      this.$router.push({name: 'detail', params: {id}})
    }
  }
};
</script>

<style scoped>
.checked {
  color: #e3be96;
}
.cont h5 {
  margin: 10px 0;
}
.price {
  font-size: 0.8rem;
  color: rgb(82, 80, 80);
}
.price span {
  font-size: 1rem;
  color: red;
}
.sold_out {
  color: gray;
  font-size: 0.7rem;
  float: right;
}
.sold_out span {
  font-size: 0.9rem;
}
.s_content {
  width: 100%;
  background: #f2f2f2;
  padding-bottom: 60px;
}
.s_content .s_content_c {
  padding-top: 69px;
  background: #fff;
}
.s_content .s_content_c .s_info {
  padding: 10px;
}
.s_content .s_content_c .s_info .s_title {
  line-height: 40px;
  border-bottom: 1px solid #dddddd;
  font-size: 14px;
  color: #555555;
  padding-top: 20px;
}
.s_content .s_content_c .s_info .s_title a {
  color: #000;
}
.s_content .s_content_c .s_info .screen {
  padding: 30px 0;
  margin-bottom: 10px;
}
.s_content .s_content_c .s_info .screen table {
  width: 100%;
  line-height: 53px;
  font-size: 12px;
}
.s_content .s_content_c .s_info .screen table tr {
  border: 1px solid #ddd;
  overflow: hidden;
}
.s_content .s_content_c .s_info .screen table th {
  border-right: 1px solid #dddddd;
  width: 90px;
  text-align: center;
  font-weight: bold;
  color: #555555;
}
.s_content .s_content_c .s_info .screen table td {
  padding-left: 10px;
}
.s_content .s_content_c .s_info .screen table td span {
  margin-right: 30px;
  cursor: pointer;
}
.s_content .s_content_c .s_info .screen table td span:hover {
  text-decoration: underline;
}
.s_content .s_content_c .s_info .screen table .t2 {
  background: #f3f4f4;
}
.s_content .s_content_c .s_info .screen table .t2 .white {
  background: white;
  border: none;
}
.s_content .s_content_c .s_info .fun {
  padding: 0 20px;
  font-size: 14px;
  color: #999999;
  line-height: 46px;
  overflow: hidden;
  margin-bottom: 10px;
}
.s_content .s_content_c .s_info .fun .filter {
  float: left;
}
.s_content .s_content_c .s_info .fun .filter div {
  padding: 8px 10px;
  margin: 5px;
  display: inline-block;
  line-height: 12px;
  border-radius: 2px;
}
.s_content .s_content_c .s_info .fun .filter div:hover {
  color: #555555;
}
.s_content .s_content_c .s_info .fun .filter .filter_input {
  width: 60px;
  height: 15px;
  border-radius: 2px;
  border: 1px solid gray;
  padding: 3px 5px;
}

.s_content .s_content_c .s_info .fun .swi {
  float: left;
  margin-left: 20px;
}
.status {
  display: inline-block;
  width: 38px;
  height: 16px;
  background: #909090;
  border: 2px solid #999;
  border-radius: 10px;
  vertical-align: middle;
}
.s_content .s_content_c .s_info .fun .swi a i {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
}
.btnBlue {
  background: #38b0ec;
  border: 2px solid #38b0ec;
}
.btnRight {
  margin-left: 22px;
}
.s_content .s_content_c .s_info .s_prod {
  overflow: hidden;
  padding: 0 20px;
}
.s_content .s_content_c .s_info .s_prod ul {
  overflow: hidden;
  width: 1164px;
}
.s_content .s_content_c .s_info .s_prod ul li {
  width: 246px;
  height: 362px;
  margin-right: 45px;
  margin-bottom: 30px;
  float: left;
  position: relative;
}
.s_content .s_content_c .s_info .s_prod ul li img {
  width: 100%;
  height: 246px;
  background: #efefef;
  display: inline-block;
}
.s_content .s_content_c .s_info .s_prod ul li:hover .mask {
  display: block;
}
.s_content .s_content_c .s_info .pages {
  text-align: right;
  color: #a3a3a3;
}

.s_content .s_content_c .s_info .pages .tol {
  display: inline-block;
  width: 30px;
  height: 30px;
  color: #999;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  margin: 0 3px;
}
.s_content .s_content_c .s_info .pages .cur {
  background: #9dafb8;
  color: #fff;
}
.s_content .s_content_c .s_info .pages .tol:hover {
  background: #9dafb8;
  color: #fff;
}
</style>
