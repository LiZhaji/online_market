<template>
  <div class="sd">
    <div class="swrap">
      <div class="pd">
        <p>购物车</p>
      </div>
      <div class="dtrolley">
        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <!-- tooltip-effect="dark" -->
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="商品名称" width="420">
            <template slot-scope="scope">
              <img :src="baseImgUrl + scope.row.image_url" alt />
              {{scope.row.product_name}}
            </template>
          </el-table-column>
          <el-table-column prop="price" label="单价" width="160"></el-table-column>
          <el-table-column label="数量" width="160" show-overflow-tooltip>
            <template slot-scope="scope">
              <span class="dhs5 clearfix">
                <a
                  href="javascript:void(0)"
                  class="sub"
                  @click="changeCount(null, scope.row, 'down')"
                >-</a>
                <input
                  type="text"
                  class="num"
                  v-model="scope.row.add_amount"
                  @change="changeCount($event, scope.row, 'input')"
                />
                <a
                  href="javascript:void(0)"
                  class="add"
                  @click="changeCount(null, scope.row, 'up')"
                >+</a>
              </span>
            </template>
          </el-table-column>
          <el-table-column label="小计" show-overflow-tooltip>
            <template slot-scope="scope">{{scope.row.price * scope.row.add_amount}}</template>
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <span class="blue" @click="delProduct(scope.row)">删除</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="dtb">
          <div class="shopAll">
            <div>
              <el-button round @click="delPart">删除</el-button>
              <el-button round>清除下架商品</el-button>
              <div class="check_info">
                已选商品
                <span class="allNum">{{totalCount}}</span>
                件
                <span>合计（不含运费）：</span>
                <span class="allSum">￥{{totalPrice}}</span>
                <span>
                  已优惠：
                  <span>￥0</span>
                </span>
              </div>
              <div class="btn" @click="check">确认结算</div>
            </div>
          </div>
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
      tableData: [],
      selectedProduct: [],
      totalPrice: 0,
      totalCount: 0
    };
  },
  computed: {
    ...mapState(["baseImgUrl", "userId"]),
    selectedIds() {
      return this.selectedProduct.map(item => item.id);
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const userId = localStorage.getItem("userId");
      http("get", `/cart/list/${userId}`).then(data => {
        this.tableData = data;
      });
    },
    changeCount(e, product, type) {
      let count = type === "input" ? e.target.value : product.add_amount;
      if (type !== "input") {
        if (type === "down" && count <= 1) {
          return;
        }
        type === "down" ? count-- : type === "up" ? count++ : "";
      }

      const userId = localStorage.getItem("userId");
      const data = {
        modified_amount: count,
        product_id: product.product_id,
        user_id: userId
      };
      http("post", "/cart/modify", data).then(data => {
        this.getList();
        this.getCarList();
      });
    },
    handleSelectionChange(val) {
      const data = val.map(product => {
        return {
          id: product.id,
          product_id: product.product_id,
          amount: product.add_amount
        };
      });
      this.selectedProduct = data;
      this.totalPrice = val.reduce(
        (price, product) => (price += product.price * product.add_amount),
        0
      );
      this.totalCount = val.reduce(
        (count, product) => (count += product.add_amount),
        0
      );
      console.log(val);
    },
    delProduct(product) {
      this.$confirm("确定从购物车删除该商品吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          http("delete", `/cart/${product.id}`)
            .then(data => {
              this.$message({
                message: "删除成功！",
                type: "success"
              });
              this.getList();
              this.getCarList();
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
    },
    delPart(product) {
      if (this.selectedProduct.length === 0) {
        this.$message({
          message: "请选择商品！"
        });
        return;
      }
      this.$confirm("确定从购物车删除选中商品吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          http("delete", `/cart/deleteBatch`, { ids: this.selectedIds })
            .then(data => {
              this.$message({
                message: "删除成功！",
                type: "success"
              });
              this.getList();
              this.getCarList();
            })
            .catch(err => {
              console.log(err, 222);
            });
        })
        .catch(err => {
          console.log(err, 222);
        });
    },
    check() {
      this.$router.push("/pay");
    },
    getCarList() {
      const userId = localStorage.getItem("userId");
      http("get", `/cart/list/${userId}`).then(data => {
        const totalPrice = data.reduce(
          (price, product) => (price += product.price * product.add_amount),
          0
        );
        const totalCount = data.reduce(
          (count, product) => (count += product.add_amount),
          0
        );

        this.$store.state.totalPrice = totalPrice;
        this.$store.state.totalCount = totalCount;
      });
    }
  }
};
</script>

<style scoped>
.clearfix::before,
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.dtrolley .blue {
  color: #409eff;
  cursor: pointer;
}
.sd {
  width: 100%;
  padding-top: 68px;
}
.swrap {
  margin: 0 114.5px;
}
.pd {
  width: 100%;
  height: 54px;
  padding-top: 40px;
}
.pd > p {
  font-size: 30px;
  color: rgb(51, 51, 51);
  font-weight: 400;
  margin-bottom: 6px;
}
.dtrolley {
  border: 1px solid rgb(221, 221, 221);
  border-bottom: none;
  border-radius: 3px;
  margin-bottom: 120px;
}
.dtrolley img {
  width: 60px;
  height: 60px;
}
.dhs5 {
  width: 121px;
}
.dtrolley .dhs5 {
  width: 78px;
  height: 26px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 2px;
  text-align: center;
  margin-left: 0;
  float: left;
  font-size: 12px;
  color: rgb(102, 102, 102);
}
.dtrolley .dhs5 input {
  width: 38px;
  height: 24px;
  font-size: 12px;
  border: none;
  text-align: center;
  margin-top: 1px;
}
.dtb > p {
  width: 1118px;
  height: 101px;
  margin-top: 10px;
  border-bottom: 1px solid rgb(221, 221, 221);
  position: relative;
}
.shopAll {
  height: 48px;
  padding: 20px 30px;
  margin-top: 10px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  background: white;
  position: relative;
}
.shopAll .check_info {
  height: 59px;
  display: inline-block;
  font-size: 12px;
  position: absolute;
  right: 240px;
}
.shopAll .check_info span:first-child {
  font-size: 16px;
  color: rgb(255, 68, 68);
  font-weight: 700;
}
.shopAll .check_info span:nth-child(3) {
  font-size: 24px;
  display: inline-block;
  line-height: 18px;
  color: rgb(255, 68, 68);
  font-weight: 700;
}
.shopAll .check_info span:nth-child(4) {
  display: block;
  margin-left: 194px;
  color: #666;
}
.shopAll .check_info span:nth-child(4) > span {
  font-size: 14px;
}
.shopAll .btn {
  display: inline-block;
  position: absolute;
  right: 30px;
  text-align: center;
  text-decoration: none;
  width: 72px;
  height: 46px;
  border: 1px solid white;
  border-radius: 3px;
  background: rgb(255, 68, 68);
  font-size: 18px;
  line-height: 46px;
  padding: 0 60px;
  color: white;
  cursor: pointer;
}
</style>