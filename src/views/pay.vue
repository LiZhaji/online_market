<template>
  <div class="pay clearfix">
    <div class="order-address">
      <div class="header-wrapper border-bottom">
        <span class="header-title">确认收货地址</span>
      </div>
      <div class="address-list">
        <div class="send-tip">
          <span>寄送至</span>
        </div>
        <div>
          <el-radio-group v-model="radio">
            <el-row style="padding-bottom: 10px">
              <el-col :offset="3">
                <el-radio :label="1">浙江省 杭州市 西湖区 翠苑街道 翠苑新村2区2幢2单元（炸鸡 收）18732324603</el-radio>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px">
              <el-col :offset="3">
                <el-radio :label="2">浙江省 杭州市 江干区 浙江理工大学（可乐 收）18732324603</el-radio>
              </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
              <el-col :offset="3">
                <el-radio :label="3">浙江省 杭州市 江干区 浙江理工大学生活二区（薯条 收）18732324603</el-radio>
              </el-col>
            </el-row>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div class="send-tip">
        <span style="color: #f40;line-height: 26px;margin-right: 18px;font-weight: 700;">支付方式</span>
      </div>
      <div style="margin-left: 70px">
        <el-radio label="1" border v-model="pay_method">余额</el-radio>
        <el-radio label="2" border v-model="pay_method">微信</el-radio>
        <el-radio label="3" border v-model="pay_method">支付宝</el-radio>
      </div>
    </div>
    <div class="item-headers">
      <div class="header-wrapper">
        <span class="header-title">确认订单信息</span>
      </div>
      <div class="dtrolley">
        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="商品名称">
            <template slot-scope="scope">
              <img :src="baseImgUrl + scope.row.image_url" alt />
              {{scope.row.product_name}}
            </template>
          </el-table-column>
          <el-table-column prop="price" label="商品单价(元)"></el-table-column>
          <el-table-column label="数量" width="160" prop="add_amount"  show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="小计(元)" show-overflow-tooltip >
            <template slot-scope="scope">{{scope.row.price * scope.row.add_amount}}</template>
          </el-table-column>
        </el-table>
      </div>

    </div>
    <div class="end">
      <div class="realpay">
        <div>
          <span class="realpay_title">实付款：</span>
          <span class="realpay_symbol price">¥</span>
          <span class="realpay_price price">{{sum}}</span>
        </div>
        <div>
          <span class="realpay_title">寄送至：</span>
          <span class="confirmAddr" v-if="radio == 1">浙江省 杭州市 西湖区 翠苑街道 翠苑新村2区2幢2单元</span>
          <span class="confirmAddr" v-if="radio == 2">浙江省 杭州市 江干区 浙江理工大学</span>
          <span class="confirmAddr" v-if="radio == 3">浙江省 杭州市 江干区 浙江理工大学生活二区</span>
        </div>
        <div>
          <span class="realpay_title">收货人：</span>
          <span class="confirmAddr" v-if="radio == 1">炸鸡 1851365339</span>
          <span class="confirmAddr" v-if="radio == 2">可乐 1851365339</span>
          <span class="confirmAddr" v-if="radio == 3">薯条 1851365339</span>
        </div>
      </div>
      <div class="submit">
        <a role="button" title="提交订单" @click="submit">确认支付</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
  data(){
    return{
      tableData:[],
      radio: 1,
      pay_method: '1',
      sum: 0,

    }
  },
  computed: {
    ...mapState(["baseImgUrl"])
  },
  mounted() {
    this.init();
  },
  methods:{
    init() {
        if (this.$route.hasOwnProperty('query') && this.$route.query.hasOwnProperty('data')) {
          this.tableData = this.$route.query.data;
          this.tableData.forEach((item)=>{
            this.sum += item.price * item.add_amount
          })
        }
    },
    submit(){
      this.$message({
        message: "支付成功！",
        type: "success"
      });
    }

  }

};
</script>

<style>
  .dtrolley img {
    width: 60px;
    height: 60px;
  }
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.price {
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  color: rgb(255, 68, 0);
  font-size: 14px;
  min-width: 100px;
}
.pay {
  width: 1000px;
  margin: 70px auto;
  padding: 30px 20px;
  background: white;
}
.header-wrapper {
  margin-bottom: 15px;
  color: #333;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
}
.border-bottom {
  border-bottom: 2px solid #f1f1f1;
}

.order-address .send-tip {
  display: inline;
  color: #f40;
  line-height: 26px;
  margin-right: 18px;
  font-weight: 700;
}
.order-address .each-address .mobile {
  color: grey;
  font-weight: 700;
}
.order-address .each-address {
  display: inline-block;
  margin-left: 85px;
}
.order-address .each-address.selected {
  margin-right: 66px;
  margin-left: 0;
}
.order-address .address-contents .addr-info {
  font-size: 14px;
  color: #333;
}
.order-address .address-contents.checked .addr-info {
  font-size: 14px;
  font-weight: 700;
}

.item-headers {
  margin-top: 35px;
}
.item-headers-wrap {
  margin-top: 15px;
  color: #6c6c6c;
}
.item-cloumn {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-bottom: 3px solid #b2d1ff;
  font-size: 12px;
  margin-left: 1px;
  vertical-align: bottom;
}
.item-cloumn-0 {
  width: 310px;
  margin-left: 0;
}
.item-cloumn-1 {
  width: 180px;
}
.item-cloumn-2,
.item-cloumn-3 {
  width: 120px;
}
.item-cloumn-4 {
  width: 180px;
}
.item-cloumn-5 {
  width: 130px;
}

.item-row {
  font-size: 14px;
  color: #333;
  display: inline-block;
}
.item-row .cell {
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  margin-right: 1px;
}
.item-row .info-detail {
  width: 310px;
  padding: 10px 0 10px 10px;
  box-sizing: content-box;
  margin-right: 1px;
  height: 50px;
  vertical-align: middle;
}
.item-row .info-img {
  width: 50px;
  height: 50px;
}
.item-row .info-msg {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 25px;
}
.item-row .info-msg:hover {
  color: #ff0036;
}
.item-row .info-sku {
  width: 180px;
}

.item-row .info-price,
.item-row .order-quantity {
  width: 120px;
}

.item-row .order-price {
  width: 130px;
}

.textarea,
.delivery,
.total {
  display: inline-block;
  padding: 10px;
  font-size: 14px;
  color: #333;
  vertical-align: top;
}
.textarea .textarea_title,
.delivery .delivery__title {
  vertical-align: top;
  display: inline-block;
}
.textarea .textarea_input {
  width: 328px;
  height: 60px;
  resize: none;
  padding: 4px;
  border: 1px solid #ccc;
  outline: none;
  overflow: auto;
}
.delivery {
  margin-left: 50px;
}
.delivery .delivery_price {
  margin-left: 135px;
}
.total {
  float: right;
  margin-right: 140px;
}

.end {
  float: right;
  margin-right: 100px;
}
.realpay {
  line-height: 1.6;
  margin-top: 10px;
  font-size: 14px;
  border: 2px solid #ec610f;
  padding: 10px 20px;
}
.realpay .realpay_title {
  font-weight: 700;
  color: #333;
}
.realpay .realpay_price {
  font-size: 20px;
}
.realpay .confirmAddr {
  color: gray;
  font-size: 12px;
}
.submit {
  margin-top: 10px;
  margin-left: 300px;
  padding: 10px 25px;
  background: #f13c3cd9;
  border-radius: 2px;
  color: white;
  cursor: pointer;
}
</style>
