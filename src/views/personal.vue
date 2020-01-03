<template>
  <div class="personal">
    <div
      style=" background-color: #FFFFFF;margin: 10px;box-shadow: 0 0px 2px 2px #DEE3DF;border-radius: 8px;"
    >
      <el-row>
        <el-col :span="7">
          <span>
            <img class="logo" src="../assets/me.png" />
          </span>
        </el-col>
        <el-col :span="14">
          <el-form label-width="100" ref="data" :model="data" class="content">
            <el-row>
              <el-form-item>
                <el-col
                  style="font-size: 30px;color: #000; font-weight: normal;margin-top: 60px"
                >{{ data.nickname}}</el-col>
              </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="电话:">{{data.phone}}</el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="性别:">{{data.sex}}</el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="邮箱:">{{data.email}}</el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="18" style="text-align: right">
                <el-button class="el-icon-edit" @click="editUser">修改个人信息</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <personal-dialog
        :dialog-show="detailDialogShow"
        :detail-info="detailInfo"
        @refresh="getUser()"
      ></personal-dialog>
    </div>
    <div class="container payment-con">
      <div id="checkoutGoodsList" class="checkout-goods-box">
        <div class="xm-box">
          <div class="box-hd">
            <h2 class="title">我的订单</h2>
          </div>
          <div class="box-bd">
            <dl class="checkout-goods-list">
              <dt class="clearfix">
                 
                <span class="col col-1">订单编号</span>
                <span class="col col-2">价格</span>
                <span class="col col-3">收获地址</span>
                <span class="col col-4">创建时间</span>
              </dt>

              <dd class="item clearfix" v-for="item in orderList">
                <div class="item-row">
                  <div class="col col-1">
                    <div class="g-pic">
                      <!-- <img
                        src="http://i1.mifile.cn/a1/T11lLgB5YT1RXrhCrK!40x40.jpg"
                        srcset="http://i1.mifile.cn/a1/T11lLgB5YT1RXrhCrK!80x80.jpg 2x"
                        width="40"
                        height="40"
                      /> -->
                    </div>
                    <div class="g-info">
                      <a href="#">{{item.order_num}}</a>
                    </div>
                  </div>

                  <div class="col col-2" >{{item.total_price}}元</div>
                  <div class="col col-3">{{item.address}}</div>
                  <div class="col col-4">{{item.create_time}}</div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import http from "../http/index";
import PersonalDialog from "./personal-dialog";
export default {
  components: {
    PersonalDialog
  },
  data() {
    return {
      detailDialogShow: false,
      detailInfo: {},
      data: {
        nickname: "",
        phone: "",
        sex: "",
        email: ""
      },
      orderList:[]
    };
  },
  mounted() {
    this.getUser();
    this.getList()
  },
  methods: {
    getUser() {
      const user_id =  localStorage.getItem('userId')
      http("get", "/user/info/" + user_id).then(data => {
        this.data = data;
      });
    },
    editUser() {
      this.detailDialogShow = !this.detailDialogShow;
      this.detailInfo = this.data;
    },
    getList(){
      const user_id =  localStorage.getItem('userId')
       http('get',`/order/${user_id}`).then(data =>{
         console.log(data,88);
         
         this.orderList = data
       })
    }
  }
};
</script>

<style scoped>
ul,li,p,dl,dd,h1,h2,h3,h4,h5,h6 {
	padding:0;
	margin:0
}
ul,li,ol {
	list-style:none
}
em {
	font-style:normal
}
.icon-checkbox {
	display:inline-block;
	width:14px;
	height:14px;
	line-height:14px;
	font-size:14px;
	font-weight:bold;
	text-align:center;
	border:1px solid #8c8c8c;
	background:#fff;
	vertical-align:middle;
	color:#fff
}
.icon-checkbox-checked {
	color:#90ce36
}
.checkout-box {
	background:#fff
}
.checkout-box .checkout-box-ft {
	padding-top:10px
}
.checkout-box .xm-box {
	border:none;
	margin-bottom:20px
}
.checkout-box .xm-box .box-hd {
	height:44px;
	padding-top:6px;
	margin-bottom:20px
}
.checkout-box .xm-box .box-hd .title {
	margin:0;
	line-height:44px
}
.addr-list-toggle-wrap {
	display:block;
	height:20px;
	margin-top:20px;
	text-align:center;
	border-top:1px solid #dfdfdf;
	zoom:1;
	position:relative
}
.addr-list-toggle-wrap span {
	display:block;
	width:98px;
	height:18px;
	line-height:1;
	border:1px solid #dfdfdf;
	border-top:1px solid #fff;
	cursor:pointer;
	position:absolute;
	top:-1px;
	left:50%;
	margin-left:-50px;
	text-align:center
}
.addr-list-toggle-wrap span .arrow {
	font-size:16px
}
.addr-list-toggle-wrap .on .arrow {
	display:inline-block;
	-webkit-transform:rotate(180deg);
	-moz-transform:rotate(180deg);
	-ms-transform:rotate(180deg);
	-o-transform:rotate(180deg);
	transform:rotate(180deg)
}
.xm-address-list {
	margin-left:-10px
}
.xm-address-list .item {
	float:left;
	_display:inline;
	width:264px;
	height:160px;
	padding:15px 18px;
	position:relative;
	border:1px solid #dfdfdf;
	margin:0 0 10px 10px;
	cursor:pointer;
	background:#fafafa
}
.xm-address-list .item:hover {
	background:#f3f3f3
}
.xm-address-list .item .edit-btn {
	display:none;
	width:58px;
	height:18px;
	line-height:18px;
	margin-top:8px;
	text-align:center;
	color:#333;
	font-size:12px;
	cursor:pointer;
	border:1px solid #dfdfdf
}
.xm-address-list .item dt {
	margin:0;
	height:30px;
	line-height:30px;
	margin-bottom:10px;
	border-bottom:1px solid #dfdfdf;
	color:#333
}
.xm-address-list .item dt strong {
	float:left;
	font-weight:400
}
.xm-address-list .item dt span {
	float:right
}
.xm-address-list .item dt .tag {
	height:18px;
	line-height:18px;
	margin-top:6px;
	padding:0 10px;
	font-size:12px;
	background:#dfdfdf
}
.xm-address-list .item dd {
	margin:0;
	line-height:1.6;
	color:#6d6d6d
}
.xm-address-list .item dd .tel {
	color:#333
}
.xm-address-list .selected {
	border-color:#ff4646;
	background:#fff;
	cursor:default
}
.xm-address-list .selected:hover {
	background:#fff
}
.xm-address-list .selected .edit-btn {
	display:block;
	background:#f3f3f3
}
.xm-address-list .use-new-addr {
	text-align:center;
	color:#8c8c8c
}
.xm-address-list .use-new-addr .icon-add {
	display:block;
	margin-top:37px;
	font-size:36px;
	line-height:1;
	font-weight:normal
}
.xm-edit-addr-backdrop {
	display:none;
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	background:#000;
	opacity:.3;
	filter:alpha(opacity=30);
	z-index:1040
}
.xm-edit-addr-box {
	display:none;
	position:absolute;
	background:#fff;
	border:1px solid #ff4646;
	z-index:1050
}
.xm-edit-addr-box .bd {
	padding:20px
}
.xm-edit-addr-box .bd .item {
	margin-bottom:10px
}
.xm-edit-addr-box .bd .item label {
	display:none;
	margin-bottom:5px
}
.xm-edit-addr-box .bd .item label span {
	color:#ee330a
}
.xm-edit-addr-box .bd .item .input,.xm-edit-addr-box .bd .item .input-area {
	width:240px;
	background:#fff;
	border:1px solid #dfdfdf;
	color:#333
}
.xm-edit-addr-box .bd .item .input:focus,.xm-edit-addr-box .bd .item .input-area:focus {
	border-color:#ff4646;
	outline:none
}
.xm-edit-addr-box .bd .item .input {
	height:28px;
	line-height:28px;
	padding:0 10px
}
.xm-edit-addr-box .bd .item .input-area {
	height:40px;
	line-height:20px;
	padding:5px 10px
}
.xm-edit-addr-box .bd .item .xm-ph-blur {
	color:#8c8c8c
}
.xm-edit-addr-box .bd .item select {

	margin-right:5px;
	margin-bottom:8px
}
.xm-edit-addr-box .bd .item .select-1,.xm-edit-addr-box .bd .item .select-2 {
	width:124px
}
.xm-edit-addr-box .bd .item .select-2 {
	margin-right:0
}
.xm-edit-addr-box .bd .item .select-3 {
	width:260px;
	margin-right:0
}
.xm-edit-addr-box .bd .item .zipcode-tip {
	margin:5px 0 0;
	font-size:12px;
	color:#8c8c8c
}
.xm-edit-addr-box .bd .item .tel-modify-tip {
	display:none;
	margin-top:5px;
	color:#8c8c8c;
	font-size:12px
}
.xm-edit-addr-box .bd .item .tel-modify-tip em {
	color:#ee330a
}
.xm-edit-addr-box .bd .item .tip-msg {
	display:none;
	margin-top:5px;
	color:#f32f39;
	font-size:12px
}
.xm-edit-addr-box .ft {
	padding:20px;
	background:#fafafa;
	text-align:center
}
.xm-edit-addr-box .ft .btn {
	width:124px
}
.xm-edit-addr-box .ft .btn-lineDake {
	float:left;
	border-color:#dfdfdf
}
.xm-edit-addr-box .ft .btn-primary {
	float:right
}
@media (max-width:1200px) {
	.xm-address-list .item {
	width:265px
}
}.xm-address-list .tip {
	margin:0 0 10px 10px;
	color:#d6313a
}
.checkout-option-list li {
	float:left;
	min-width:125px;
	_width:125px;
	padding:15px 30px;
	border:1px solid #dfdfdf;
	margin-right:10px;
	background:#fafafa;
	cursor:pointer;
	white-space:nowrap
}
.checkout-option-list li:hover {
	background:#f3f3f3
}
.checkout-option-list li input {
	display:none
}
.checkout-option-list li p {
	color:#333
}
.checkout-option-list li p span {
	display:block;
	line-height:1.2;
	color:#6d6d6d;
	font-size:12px
}
.checkout-option-list .selected {
	border-color:#ff4646;
	background:#fff
}
.checkout-option-list .selected:hover {
	background:#fff
}
.e-invoice-tip {
	margin-top:10px;
	font-size:12px;
	color:#6d6d6d
}
.e-invoice-tip a {
	color:#ff4646
}
.invoice-info {
	width:620px;
	padding:20px 30px;
	margin-top:20px;
	border:1px solid #dfdfdf
}
.nvoice-info-1 p {
	color:#333;
	line-height:1.8
}
.nvoice-info-1 .tip {
	color:#f32f39
}
.nvoice-info-1 dl {
	margin-top:15px;
	font-size:12px;
	color:#8c8c8c
}
.nvoice-info-1 dl dt {
	margin-bottom:8px
}
.invoice-info-2 p {
	color:#333;
	line-height:1.8
}
.invoice-info-2 .type {
	margin-top:5px
}
.invoice-info-2 .type li {
	float:left;
	width:118px;
	height:32px;
	line-height:32px;
	margin-right:10px;
	color:#333;
	text-align:center;
	border:1px solid #dfdfdf;
	cursor:pointer;
	background:#fafafa
}
.invoice-info-2 .type li input {
	display:none
}
.invoice-info-2 .type li:hover {
	background:#f3f3f3
}
.invoice-info-2 .type .selected {
	border-color:#ff4646;
	background:#fff
}
.invoice-info-2 .type .selected:hover {
	background:#fff
}
.invoice-info-2 .invoice-title {
	margin-top:20px
}
.invoice-info-2 .invoice-title label {
	display:block;
	margin-bottom:5px;
	color:#333
}
.invoice-info-2 .invoice-title input {
	width:180px;
	border:1px solid #dfdfdf;
	height:38px;
	line-height:38px;
	padding:0 10px
}
.invoice-info-2 .invoice-title input:focus {
	outline:none;
	border-color:#ff4646
}
.invoice-info-2 .invoice-title .tip-msg {
	margin-left:10px;
	color:#f32f39
}
.checkout-goods-box .xm-box {
	margin-bottom:0
}
.checkout-goods-box .xm-box .box-hd {
	border-bottom:none;
	margin-bottom:5px
}
.checkout-goods-list {
	margin-bottom:30px;
	overflow:hidden
}
.checkout-goods-list .col-2,.checkout-goods-list .col-3 {
	text-align:center
}
.checkout-goods-list .col-2 {
	width:118px
}
.checkout-goods-list .col-3 {
	width:360px
}
.checkout-goods-list .col-4 {
	width:252px;
	padding-right:30px;
	text-align:right
}
.checkout-goods-list dt {
	padding:9px 0;
	font-size:12px;
	line-height:1;
	*line-height:normal;
	background:#fafafa;
	color:#8c8c8c
}
.checkout-goods-list dt .col {
	float:left
}
.checkout-goods-list dt .col-1 {
	width:380px;
	padding-left:20px
}
.checkout-goods-list dt .col-3 {
/*	border-left:1px solid #dfdfdf;
	border-right:1px solid #dfdfdf*/
}
.checkout-goods-list .item {
	display:table;
	padding:10px 0;
	color:#333
}
.checkout-goods-list .item .item-row {
	display:table-row
}
.checkout-goods-list .item .col {
	display:table-cell;
	vertical-align:middle;
	*float:left;
	*margin-top:10px
}
.checkout-goods-list .item .col-1 {
	width:384px;
	padding-left:20px;
	*margin-top:0
}
.checkout-goods-list .item .col-1 .g-info,.checkout-goods-list .item .col-1 .g-pic {
	display:table-cell;
	vertical-align:middle;
	*float:left
}
.checkout-goods-list .item .col-1 .g-pic {
	width:40px;
	height:40px;
	padding-right:10px
}
.checkout-goods-list .item .col-1 .g-info {
	*margin-top:10px
}
.checkout-goods-list .item .col-1 .g-info a {
	color:#333
}
.checkout-goods-list .item .col-1 .g-info .label {
	display:inline-block;
	_display:inline;
	height:16px;
	margin:-2px 0 0 10px;
	padding:0 6px;
	line-height:16px;
	_height:14px;
	_line-height:1;
	_padding-top:2px;
	text-align:center;
	color:#fff;
	background:#e9323e;
	font-size:12px;
	vertical-align:middle
}
.checkout-goods-list .item .col-1 .g-info .baoxian-service {
	margin-left:5px;
	font-size:12px;
	color:#ff4646;
	text-decoration:underline
}
.checkout-goods-list .item .col-4 {
	color:#ff4646
}
.checkout-count {
	position:relative;
	padding:25px 30px 25px 0;
	min-height:160px;
	_height:160px;
	border-top:1px solid #dfdfdf;
	border-radius:0 0 5px 5px
}
.xm-add-buy {
	*width:300px
}
.xm-add-buy ul {
	margin-bottom:-10px;
	zoom:1;
	white-space:nowrap
}
.xm-add-buy .item {
	height:16px;
	line-height:16px;
	padding:7px 10px;
	margin-bottom:10px;
	position:relative;
	background:#f3f3f3;
	color:#333;
	font-size:12px;
	cursor:pointer;
	zoom:1
}
.xm-add-buy .item:hover {
	background-color:#dfdfdf
}
.xm-add-buy .item .icon-checkbox {
	float:left;
	margin-right:8px
}
.xm-add-buy .item .g-detail {
	display:none;
	width:334px;
	height:66px;
	padding:20px;
	border:1px solid #dfdfdf;
	position:absolute;
	top:0;
	right:-393px;
	background:#fff;
	line-height:22px
}
.xm-add-buy .item .g-detail img {
	float:left;
	width:66px;
	height:66px;
	margin-right:20px
}
.xm-add-buy .item .g-detail .name {
	font-size:14px;
	color:#333;
	font-weight:normal;
	white-space:nowrap;
	text-overflow:ellipsis;
	overflow:hidden
}
.xm-add-buy .item .g-detail .price {
	font-size:12px
}
.xm-add-buy .item .g-detail .price strong {
	color:#ff4646
}
.xm-add-buy .item .g-detail .price del {
	margin-left:8px;
	color:#8c8c8c
}
.xm-add-buy .item .g-detail .desc {
	font-size:12px;
	color:#8c8c8c;
	white-space:nowrap;
	text-overflow:ellipsis;
	overflow:hidden
}
.xm-add-buy .item .g-detail .arrow {
	display:block;
	width:0;
	height:0;
	overflow:hidden;
	position:absolute;
	top:7px;
	left:-7px;
	border-style:dashed solid dashed dashed;
	border-width:7px 7px 7px 0;
	border-color:transparent #fff transparent transparent;
	z-index:2
}
.xm-add-buy .item .g-detail .arrow-b {
	display:block;
	width:0;
	height:0;
	overflow:hidden;
	position:absolute;
	top:6px;
	left:-8px;
	border-style:dashed solid dashed dashed;
	border-width:8px 8px 8px 0;
	border-color:transparent #dfdfdf transparent transparent;
	z-index:1
}
.xm-add-buy .item .icon-hot {
	vertical-align:top;
	margin-left:5px
}
.xm-add-buy .selected {
	background:#ff4646;
	color:#fff
}
.xm-add-buy .selected .icon-checkbox {
	color:#90ce36
}
.xm-add-buy .selected:hover {
	background:#ff4646
}
.checkout-count-extend {
	float:left;
	position:relative
}
.checkout-count-extend  h3{
	font-size: 18px;
	font-weight: 400;
	color: #333;
	}
	.checkout-count-extend input{
		 width:700px; height:100px; border:1px solid #dfdfdf;
	}
.checkout-count-extend .item input {
	display:none
}
.checkout-count-extend .coupon-box {
	display:none;
	width:370px;
	margin-bottom:10px;
	border:1px solid #dfdfdf;
	background:#fff
}
.checkout-count-extend .coupon-box .arrow-border,.checkout-count-extend .coupon-box .arrow-bg {
	display:none;
	width:0;
	height:0;
	position:absolute;
	overflow:hidden;
	border-style:dashed solid solid
}
.checkout-count-extend .coupon-box .arrow-border {
	left:40px;
	top:-8px;
	border-width:0 8px 8px;
	border-color:transparent transparent #dfdfdf
}
.checkout-count-extend .coupon-box .arrow-bg {
	left:42px;
	top:-6px;
	border-width:0 6px 6px;
	border-color:transparent transparent #fff
}
.checkout-count-extend .coupon-box .coupon-code {
	width:228px;
	height:34px;
	line-height:34px;
	padding:0 10px;
	border:1px solid #dfdfdf;
	color:#8c8c8c
}
.checkout-count-extend .coupon-box .coupon-code:hover,.checkout-count-extend .coupon-box .coupon-code:focus {
	border-color:#ff4646;
	outline:none
}
.checkout-count-extend .coupon-tab-nav .nav-item {
	float:left;
	width:50%;
	height:45px;
	line-height:45px;
	text-align:center;
	margin-left:-1px;
	border-left:1px solid #dfdfdf;
	border-bottom:1px solid #dfdfdf;
	color:#6d6d6d;
	cursor:pointer
}
.checkout-count-extend .coupon-tab-nav .current {
	color:#333;
	border-bottom:none
}
.checkout-count-extend .coupon-tab-con .con-item {
	display:none;
	text-align:center
}
.checkout-count-extend .coupon-tab-con .con-item .con-item-bd {
	padding:20px
}
.checkout-count-extend .coupon-tab-con .con-item .con-item-ft {
	padding:10px 0;
	background:#fafafa
}
.checkout-count-extend .coupon-tab-con .con-item .coupon-tip {
	display:none;
	margin-bottom:6px;
	font-size:12px;
	color:#f32f39
}
.checkout-count-extend .coupon-tab-con .current {
	display:block
}
.checkout-count-extend .coupon-tab-con .btn {
	margin:0 5px
}
.checkout-count-extend .coupon-tab-con .btn-lineDakeLight {
	border-color:#dfdfdf
}
.checkout-count-extend .coupon-list li {
	margin:8px 0;
	padding-left:20px;
	cursor:pointer;
	color:#333;
	text-align:left;
	font-size:12px;
	position:relative
}
.checkout-count-extend .coupon-list li span {
	float:right;
	display:none
}
.checkout-count-extend .coupon-list li i {
	color:#6d6d6d;
	font-style:normal
}
.checkout-count-extend .coupon-list .selected {
	background:none;
	color:#ff4646
}
.checkout-count-extend .coupon-list input {
	position:absolute;
	top:2px;
	left:0
}
.checkout-count-extend .coupon-result {
	display:none
}
.checkout-count-extend .coupon-result i {
	font-style:normal
}
.checkout-count-extend .coupon-result a {
	margin-left:20px;
	color:#fff;
	text-decoration:underline
}
.checkout-price {
	float:right;
	text-align:right;
	color:#333
}
.checkout-price ul {
	margin-bottom:20px
}
.checkout-price li {
	line-height:2;
	text-align:right
}
.checkout-price li span {
	display:inline-block;
	min-width:130px;
	_width:150px;
	color:#ff4646
}
.checkout-price .checkout-total {
	*line-height:1
}
.checkout-price .checkout-total span {
	display:inline-block;
	min-width:130px;
	_width:150px;
	color:#ff4646
}
.checkout-price .checkout-total span strong {
	margin-right:5px;
	font-size:30px;
	font-weight:normal;
	white-space:nowrap
}
.checkout-confirm {
	padding:20px 30px;
	background:#fafafa;
	text-align:right;
	color:#333
}
.checkout-confirm p {
	font-size:12px
}
.checkout-confirm .btn-back-cart {
	border-color:#dfdfdf
}
.checkout-confirm .btn-primary {
	margin-left:5px
}
.modal-choose-pro {
	width:930px;
	height:480px;
	margin-top:-240px;
	margin-left:-435px
}
.modal-choose-pro .more {
	position:absolute;
	top:6px;
	right:0
}
.modal-choose-pro .modal-body {
	text-align:center
}
.modal-choose-pro .modal-choose-pro-list-wrap {
	overflow:hidden
}
.modal-choose-pro .modal-choose-pro-list-wrap li {
	float:left;
	width:290px;
	height:280px;
	border-left:1px solid #dfdfdf;
	margin-left:-1px;
	text-align:center;
	color:#999;
	cursor:pointer;
	color:#333;
	position:relative
}
.modal-choose-pro .modal-choose-pro-list-wrap li input {
	display:none
}
.modal-choose-pro .modal-choose-pro-list-wrap li img {
	display:block;
	margin:0 auto 20px
}
.modal-choose-pro .modal-choose-pro-list-wrap li .icon-checkbox {
	position:absolute;
	top:0;
	left:30px
}
.modal-choose-pro .modal-choose-pro-list-wrap .selected .icon-checkbox {
	color:#90ce36
}
.modal-choose-pro-2 {
	width:640px;
	margin-left:-320px
}
.modal-choose-pro-4 {
	width:1210px;
	margin-left:-605px
}
.lipin-modal {
	width:400px;
	margin-left:-200px
}
.lipin-modal .modal-header {
	padding:30px 0 0;
	line-height:1;
	text-align:center;
	border:none
}
.lipin-modal .modal-header .title {
	margin-bottom:15px;
	font-size:24px;
	color:#ed5567
}
.lipin-modal .modal-header p {
	line-height:1.5;
	font-size:14px
}
.lipin-modal .modal-body ul {
	display:block;
	padding:20px;
	border:1px solid #ededed;
	border-radius:5px;
	background:#f5f7fa
}
.lipin-modal .modal-body ul li {
	padding-left:70px;
	margin:5px 0;
	line-height:1.5;
	position:relative
}
.lipin-modal .modal-body ul li strong {
	position:absolute;
	top:0;
	left:0;
	_top:-2px;
	_left:-70px
}
.lipin-modal .modal-footer {
	padding:5px 0 20px;
	border:none;
	background:none;
	text-align:center
}
.lipin-modal .modal-footer .btn {
	margin:0 10px
}
.checkout-title-tip {
	float:left;
	font-size:12px;
	margin:20px 0 0 20px;
	padding-left:10px;
	border-left:1px solid #ededed;
	line-height:1;
	color:#f3f3f3
}
.checkout-title-tip a {
	color:#f3f3f3
}
.yushou-modal {
	width:670px;
	height:570px;
	margin-left:-350px;
	margin-top:-300px;
	_margin-top:0
}
.yushou-modal h2 {
	margin:14px 0 35px 0;
	text-align:center;
	font-size:34px;
	line-height:1.5;
	color:#333
}
.yushou-modal .list {
	width:400px;
	margin:0 auto 40px;
	overflow:hidden
}
.yushou-modal .list li {
	display:block;
	margin:0 0 -1px;
	padding:15px 0 10px 74px;
	border-bottom:1px solid #ededed;
	position:relative
}
.yushou-modal .list li strong {
	display:block;
	font-size:18px;
	margin-bottom:5px
}
.yushou-modal .list li .icon-common {
	width:74px;
	height:50px;
	position:absolute;
	top:12px;
	left:0;
	background:url(http://c1.mifile.cn/f/i/2013/cn/icon/yushou/icon-yushou-checkout.png) no-repeat
}
.yushou-modal .list li .icon-1 {
	background-position:0 0
}
.yushou-modal .list li .icon-2 {
	background-position:0 -50px
}
.yushou-modal .list li .icon-3 {
	background-position:0 -100px
}
.yushou-modal .modal-footer {
	text-align:center
}
.yushou-modal .modal-footer .yushou-ok {
	display:block;
	margin-bottom:10px;
	text-align:center;
	color:#d6313a;
	cursor:pointer
}
.yushou-modal .modal-footer .selected .icon-checkbox {
	color:#90ce36
}
.yushou-modal .modal-footer .btn {
	margin:0 5px
}
.modal-baoxian {
	width:875px;
	height:570px;
	margin-left:-438px;
	margin-top:-285px
}
.modal-baoxian .modal-header h3 {
	text-indent:30px
}
.modal-baoxian .modal-body {
	height:369px;
	padding-left:60px
}
.modal-baoxian .modal-body .con-1 h4 {
	margin:0 0 20px;
	font-size:16px;
	color:#333
}
.modal-baoxian .modal-body .con-1 .icon-list {
	margin-bottom:35px
}
.modal-baoxian .modal-body .con-1 .icon-list .icon {
	display:block;
	width:80px;
	height:80px;
	margin:0 auto 10px;
	background:url(http://c1.mifile.cn/f/i/2014/cn/icon/icon-baoxian-service.png) no-repeat
}
.modal-baoxian .modal-body .con-1 .icon-list .icon-1 {
	background-position:0 0
}
.modal-baoxian .modal-body .con-1 .icon-list .icon-2 {
	background-position:0 -80px
}
.modal-baoxian .modal-body .con-1 .icon-list .icon-3 {
	background-position:0 -160px
}
.modal-baoxian .modal-body .con-1 .icon-list li {
	float:left;
	width:150px;
	text-align:center;
	color:#666
}
.modal-baoxian .modal-body .con-1 .xuzhi dt {
	margin-bottom:6px;
	font-size:16px;
	color:#333
}
.modal-baoxian .modal-body .con-1 .xuzhi dd {
	color:#666;
	line-height:2
}
.modal-baoxian .modal-body .con-1 .xuzhi dd a {
	margin-left:10px;
	color:#ff4646;
	cursor:pointer
}
.modal-baoxian .modal-body .con-2 .baoxian-service {
	height:340px;
	padding-right:20px;
	margin-bottom:12px;
	overflow-y:scroll;
	overflow-x:hidden;
	color:#8c8c8c;
	line-height:2
}
.modal-baoxian .modal-body .con-2 .baoxian-service .block {
	margin-bottom:20px
}
.modal-baoxian .modal-body .con-2 .baoxian-service .block .t span {
	margin-right:20px
}
.modal-baoxian .modal-body .con-2 .back {
	color:#ff4646;
	cursor:pointer
}
.modal-baoxian .modal-footer {
	text-align:right
}
.modal-baoxian .modal-footer .btn {
	margin-right:10px
}
.modal-baoxian .modal-footer .btn-lineDakeLight {
	border-color:#dfdfdf
}
.modal-baoxian .modal-footer p {
	float:left;
	line-height:40px;
	margin-left:40px;
	color:#333
}
.modal-baoxian .modal-footer p span,.modal-baoxian .modal-footer p a {
	cursor:pointer
}
.modal-baoxian .modal-footer p a {
	color:#333;
	text-decoration:underline
}
@media (max-width:1260px) {
	.checkout-goods-list dt .col-1 {
	width:380px
}
.checkout-goods-list .item .col-1 {
	width:380px;
}
.modal-choose-pro-4 {
	width:930px;
	margin-left:-465px
}
.modal-choose-pro-4 .modal-choose-pro-list-wrap li {
	width:218px
}
.modal-choose-pro-4 .modal-choose-pro-list-wrap li img {
	width:200px;
	height:200px
}

}
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
.navigation{
    z-index: 100;
    width: 100%;
    height: 68px;
    background-color: white;
    position: fixed;
    top:0;
    right: 0;
    border-bottom: 1px solid #ededed;
    box-shadow: 0 0.1px 10px -4px #999999;
}
.wrap{
    z-index: 100;
    width: 1140px;
    margin: 0 auto;
}
.navigation li{
    z-index: 100;
    display: block;
}
.navigation .logo,.ul-bar-left li{
    float: left;
    display: block;
    padding: 0 30px;
}
.navigation .ul-bar-left li:hover{
    background-color: rgb(230,214,198);
}
.navigation .ul-bar-right li{
    float: right;
    padding: 0 7px;
}
.img2{
    margin-top: 23px;
    margin-right: -13px;
}
.img3{
    margin-right: 105px;
    margin-top: 22px;
}
.logo{
    margin: 20.6px 14px 0 -14px;
}
.logoi{
    width: 110px;
    height: 27.88px;
}
.a0{
    font-weight: bold;
    margin-right: -7px;
}
.navigation .word{
    text-decoration: none;
    color: #000000;
    display: block;
    font-size: 14px;
    line-height: 68px;
}
.navigation .img2,.img3{
    vertical-align: middle;
    text-align: center;
}
.wrap2{
    width: 100%;
    height: auto;
    position: absolute;
    top: 68px;
    background-color: white;
    display: none;
}
.wrap2>ul>li>a{
    text-decoration: none;
    color: rgb(31, 31, 31);
    font-size: 14px;
    line-height: 38px;
}
.wrap2>ul>li>a:hover{
    color: rgb(227,190,150);
}
.wrap2>ul{
    float: left;
    margin: 40px 0 0 305px;
}
.wrap2 .wA1{
    margin-left: 137px;
}
.wrap2>div{
    float: left;
    width: 248px;
    height: 339px;
    margin: 0 auto;
    text-align: center;
}
.w2I{
    width: 200px;
    height: 200px;
    padding: 24px;
    display: block;
}
.w2I img{
    width: 200px;
    height: 200px;
}
.w2P1{
    display: block;
    width: 198px;
    height: 30px;
    padding: 0 25px;
    text-decoration: none;
    color: rgb(51,51,51);
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    margin-top: 10px;
}
.w2P2{
    width: 223px;
    height: 44px;
    padding-left: 25px;
    margin-top: 5px;
    font-size: 14px;
    color: red;
}
.d6{
    width: 100%;
    height: 390px;
    background-color: #faf8f8;
    margin-top: 80px;
}
.d61{
    width: 1140px;
    height: 168px;
    padding-top: 60px;
    margin: 0 104.5px;

}
.d62{
    width: 1349px;
    height: 111px;
    border-top: 1px solid #e6e6e6;
    margin: 50px 0 0;
}
.d611{
    width: 307px;
    height: 165px;
}
.d611 img{
    width: 110px;
    height: 27.875px;
}
.d611 p{
    width: 307px;
    height: 85px;
    margin: 12px 0 40px;
    font-size: 12px;
    color: rgb(133, 92, 49);
}
.d611 p:hover{
    color: #c78a49;
}
.d612 :hover{
    color: #c78a49;
}
.d613 p:hover{
    color: #c78a49;
}
.d612{
    width: 470px;
    height: 168px;
    margin: 0 0 0 60px;
}
.d612 ul{
    float: left;
}
.li61{
    width: 152.75px;
    height: 36px;
}
.li62{
    width: 152.75px;
    height: 30px;
}
.li61 a{
    font-size: 14px;
    color: rgb(51, 51, 51);
    line-height: 36px;
    text-decoration: none;
}
.li62 a{
    font-size: 12px;
    color: rgb(51, 51, 51);
    line-height: 30px;
    text-decoration: none;
}
.weixin,.weibo{
    width: 120px;
    height: 140px;
    margin: 0 0 0 17px;
}
.d613 img{
    width: 120px;
    height: 120px;
}
.d613 p{
    width: 120px;
    height: 20px;
    font-size: 14px;
    text-align: center;
}
.d613>div{
    float: right;
}
.d611,.d612{
    float: left;
}
.d613{
    float: right;
}
.d621{
    width: 1140px;
    height: 71px;
    padding: 20px 0;
    margin: 0 auto;
    position: relative;
}
.p61{
    font-size: 12px;
    color: rgb(145, 145, 145);
    width: 570px;
    height: 19px;
    padding-bottom: 10px;
    margin: 10px 0 6px 0;
}
.p621{
    width: 39px;
    height: 36px;
    /*overflow: hidden;*/
    position: relative;
}
.p622{
    width: 50px;
    height: 36px;
    color: rgb(145, 145, 145);
    font-size: 12px;
    padding-left: 5px;
}
.img61{
    z-index: 10;
    position: absolute;
    top:0;
    left:0;
}
.img61:hover{
    opacity: 0;
    transition: 0.2s linear;
}
.d622 li{
    float: right;
    width: 112px;
    height: 36px;
}
.d622 li p{
    float: left;
}
.d622 ul{
    position: absolute;
    top: 38px;
    right: -18px;
}
.d7{
    width: 100%;
    height: 18px;
    padding: 30px 0;
    border-top: 2px solid rgb(217, 217, 217);
    background-color: rgb(238, 238, 238);
    margin: 0 auto;
    text-align: center;
    position: relative;
}
.s71{
    position: absolute;
    top: 33px;
    left: 574px;
}
.s71 a{
    width: 16px;
    height: 15px;
    overflow: hidden;
}
.s72{
    color: rgb(221, 221, 221);
    height: 18px;
    margin-left: 23px;
}
.s73 a{
    color: rgb(165, 165, 165);
    font-size: 12px;
    height: 12px;
    text-decoration: none;
}
@charset "utf-8";
/* CSS Document */
html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, address, big, cite, code, del, em, font, img, ins, small, strong, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend {
    margin: 0;
    padding: 0
}

ol, ul {
    list-style: none
}

:focus {
    outline: 0
}

a img {
    border: 0
}

a {
    text-decoration: none
}

img {
    vertical-align: middle
}

table {
    empty-cells: show
}

ins {
    text-decoration: none
}

del {
    text-decoration: line-through
}

em {
    font-style: normal
}

button::-moz-focus-inner, input[type=reset]::-moz-focus-inner, input[type=button]::-moz-focus-inner, input[type=submit]::-moz-focus-inner, input[type=file] > input[type=button]::-moz-focus-inner {
    border: 0;
    padding: 0
}

body {
    font: 12px/150% Arial, Verdana, "\5b8b\4f53";
    color: #666;
    background: #fff;
    _background-image: url(about:blank);
    _background-attachment: fixed
}

.fl {
    float: left
}

.fr {
    float: right
}

.clearfix:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
}

.button {
    color: #fff;
    padding: 0 10px;
    border-color: #ED6002;
    background-color: #FE8502;
    display: inline-block;
    height: 24px;
    line-height: 23px;
    font-size: 12px;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    vertical-align: top;
    cursor: pointer;
    text-decoration: none;
}

.button:hover {
    cursor: pointer;
    text-decoration: underline;
}

a.button {
    color: #fff;
}

a.button:hover {
    color: #fff;
}

.w {
    width: 1200px;
    margin: 0 auto;
}

.alink_v2013 a {
    color: #666;
    text-decoration: none;
}

.alink_v2013 a:hover {
    color: red;
    text-decoration: underline;
    cursor: pointer;
}

/*顶部快捷菜单的样式*/
.shortcut_v2013 {
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #d8d8d8;
}

.shortcut_v2013 .w {
    height: 30px;
    line-height: 30px;
}

.shortcut_v2013 .menu {
    height: 24px;
    line-height: 24px;
    margin-top: 2px;
    position: relative;
}

.shortcut_v2013 .menu_hd {
    padding: 1px 12px 0 12px;
    position: relative;
}

.shortcut_v2013 .hover {
}

.shortcut_v2013 .hover .menu_hd {
    padding: 0 11px;
    border: 1px solid #ddd;
    border-bottom: 0;
    background: #fff;
    z-index: 2;
}

.shortcut_v2013 .li_m5 li {
    padding: 0 2px 0 3px;
}

.shortcut_v2013 .menu_hd b {
    display: inline-block;
    width: 8px;
    height: 8px;
    overflow: hidden;
    margin-left: 5px;
    line-height: 10px;
    -webkit-transition: -webkit-transform .2s ease-in;
    -webkit-backface-visibility: hidden;
    -moz-transition: -moz-transform .2s ease-in;
    -o-transition: -o-transform .2s ease-in;
    transition: transform .2s ease-in;
}

.shortcut_v2013 .hover b {
    border-color: #323030 transparent transparent;
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
}

.shortcut_v2013 b em {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    border-width: 4px;
    border-color: #323030 transparent transparent;
    overflow: hidden;
    zoom: 1;
    font-size: 0;
}

.shortcut_s {
    border-right: 1px solid #bababa;
}

.menu_bd {
    display: none;
    border: 1px solid #ddd;
    position: absolute;
    top: 24px;
    left: -1px;
    background: #fff;
    z-index: 10;
    padding: 5px 10px;
    width: 100px;
}

.menu_bd_spw {
    width: 360px;
}

.shortcut_v2013 .hover .menu_bd {
    display: block;
}

/*头部*/
.header_2013 .w {
    height: 115px;
    line-height: 115px;
}

/*头部logo*/
.logo_v2013 {
    float: left;
    width: 325px;
}

.logo_v2013 a {
    text-decoration: none;
}

.logo_v2013 a .border_r {
    border-right: #f1f1f1 1px solid
}

/*头部搜索*/
.header_searchbox {
    width: 570px;
    margin-left: 16px;
    float: left;
    position: relative;
    z-index: 8;
    height: 82px;
    padding-top: 36px;
}

.header_searchbox .header_search_input {
    width: 460px;
    height: 17px;
    padding: 7px 5px;
    border: solid #e21a27;
    border-width: 2px 0 2px 2px;
    float: left;
    font-size: 12px;
    font-family: Tahoma, Geneva, sans-serif;
    color: #999;
    outline: 0 none;
}

.header_searchbox .header_search_btn {
    width: 83px;
    height: 35px;
    border: 0 none;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
    float: left;
    background: #e11926;
    cursor: pointer;
    _margin-left: -2px;
    padding: 0;
    font-family: "Microsoft YaHei"
}

.header_searchbox .hot_word {
    overflow: hidden;
    height: 18px;
    line-height: 18px;
    margin-top: 6px;
    margin-left: 5px;
    float: left;
    width: 446px;
}

.header_searchbox .hot_word li {
    float: left;
    margin-right: 12px;
}

.header_searchbox .hot_word a {
    color: #cecece;
    text-decoration: none;
}

.header_searchbox .hot_word a:hover {
    color: red;
}

.header_searchbox .hot_word .red {
    color: red;
}


/*头部购物车*/
.cart_box {
    float: right;
    margin-top: 38px;
    z-index: 8;
    -webkit-backface-visibility: hidden;
    line-height: normal;
}

.cart_box .cart_link {
    -webkit-backface-visibility: hidden;
    text-decoration: none;
    display: block;
    width: 138px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #eaeaea;
    background: #f7f5f6;
    z-index: 2;
}

.cart_box .cart_gif {
    float: left;
    width: 24px;
    height: 24px;
    overflow: hidden;
    padding: 4px 8px;
}

.cart_box .text {
    width: 86px;
    height: 32px;
    line-height: 32px;
    color: #666;
    overflow: hidden;
    float: left;
    padding-left: 6px;
    font-family: tahoma, arial, "\5b8b\4f53";
    border-right: #eaeaea solid 1px;
}

.cart_box .icon_arrow_right {
    margin: 4px 3px -2px 5px;
    position: absolute;
    top: 11px;
    right: 2px;
    overflow: hidden;
    width: 6px;
    height: 3px;
}

.cart_box .cart_content {
    position: absolute;
    margin-left: -162px;
    margin-top: -2px;
    background: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    display: none;
    z-index: 8;
}

.cart_box .cart-icons {
    display: none;
    width: 138px;
    height: 5px;
    background: #fff;
    overflow: hidden;
    position: absolute;
    top: -5px;
    right: 0;
}

.cart_box .cart_content_null {
    width: 260px;
    text-align: center;
    padding: 20px;
    color: #666;
    font-size: 14px;
    display: none;
    _zoom: 1;
    background: #FFF;
    line-height: normal;
}

.cart_content .cart_content_all, .cart_content .cart_content_center {
    width: 300px;
    _zoom: 1;
}

.cart_box .cart_left_time {
    height: 37px;
    line-height: 37px;
    border-bottom: solid 1px #eee;
    padding-left: 30px;
}

/*.cart_box .num {
    width: 16px;
    height: 13px;
    line-height: 13px;
    color: #fff;
    position: absolute;
    font-family: "Microsoft YaHei";
    text-align: center;
    padding: 0;
    margin: 0;
    margin-left:-10px;
    margin-top:-6px;
    overflow: hidden;
    background: url(../images/index_icon.png) no-repeat  0 -34px;
}*/
.cart_box .num {
    line-height: 13px;
    color: #fff;
    position: absolute;
    text-align: center;
    padding: 1px 6px;
    margin: 0;
    margin-left: -10px;
    margin-top: -6px;
    overflow: hidden;
    background-color: #e11927;
    border-radius: 5px;
}

.cart_left_time span {
    color: #e11927;
    font-weight: 700
}

.cart_box .cart_content_center {
    max-height: 234px;
    _height: 234px;
    overflow: auto;
    margin-bottom: -1px;
    width: 300px;
    _zoom: 1;
}

.cart_box .cart_con_single {
    height: 61px;
    padding: 8px 12px;
    border-bottom: 1px dashed #d3d3d3;
    overflow: hidden;
}

.cart_box .cart_con_single:hover {
    background: #f2f2f2;
}

.cart_box .single_pic {
    width: 62px;
    height: 62px;
    float: left;
    overflow: hidden;
}

.cart_box .single_pic a {
    border: 1px solid #f5f5f5;
    width: 60px;
    height: 60px;
    display: inline-block;
}

.cart_content .single_pic a img {
    width: 60px;
    height: 60px;
    display: inline-block;
}

.cart_box .single_info {
    width: 187px;
    padding-left: 10px;
    float: left;
    overflow: hidden;
}

.cart_box .single_info .price {
    color: #e11927;
    font-family: arial;
}

.cart_content .single_info a.name {
    display: block;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
}

.cart_content .single_info a.name, .cart_content .price_all .delete, .cart_content .con_all .price_whole, .cart_content .con_all .num_two {
    font-size: 12px;
    text-decoration: none;
    color: #3d3d3d;
}

.cart_content .single_info a.name:hover, .cart_content .price_all .delete:hover, .cart_content .price_all .price, .cart_content .con_all .price_gongji span, .cart_content .con_all .price_gongji em, .cart_content .con_all .num_all {
    color: #e11927;
}

.car-current .cart_link {
    -webkit-backface-visibility: hidden;
    padding-bottom: 1px;
    border-bottom: 0
}

.cart_box .cart_link:hover {
    background: #fff;
}

.cart_box .cart_link:hover .text {
    -webkit-backface-visibility: hidden;
    border-right: 1px solid #ffffff
}

.cart_box .cart_link:hover .cart_gif {
    background: #fff;
}

.car-current .text {
    background: #fff;
    -webkit-backface-visibility: hidden;
    padding-bottom: 1px;
    border-bottom: 0;
    color: #ed145b
}

.car-current .icon_arrow_right {
    -webkit-backface-visibility: hidden;
    -o-transform: rotate(180deg);
    -o-transform-origin: 50% 30%;
    -o-transition: transform .2s ease-in;
    -webkit-transform: rotate(180deg);
    -webkit-transform-origin: 50% 50%;
    -webkit-transition: transform .2s ease-in;
    -moz-transform: rotate(180deg);
    -moz-transform-origin: 50% 50%;
    -moz-transition: transform .2s ease-in;
    transform: rotate(180deg);
    transform-origin: 50% 50%;
    transition: transform .2s ease-in
}

.car-current .cart_content {
    display: block;
}

.car-current .cart-icons {
    display: block;
}

.cart_content .price_all, .cart_content .con_all .price_whole, .cart_content .con_all .num_two {
    height: 25px;
    line-height: 25px;
    display: inline-block;
}

.cart_box .con_all {
    padding: 5px 15px;
    width: 270px;
    background: #f9f9f9;
    overflow: hidden;
    position: relative;
    z-index: 8;
}

.cart_content .con_all .price_whole {
    width: 270px;
}

.cart_content .con_all .price_gongji {
    float: left;
}

.cart_content .con_all .price_gongji em {
    font-weight: 400;
    padding: 0 2px 0 5px;
}

.cart_content .price_all .price, .cart_content .con_all .price_gongji em, .cart_content .con_all .num_all, .cart_content .con_all .price_gongji span {
    font-size: 14px;
    font-weight: 700;
    font-family: arial;
}

.cart_content .con_all .cart_btn {
    position: absolute;
    left: 190px;
    top: 20px;
    display: block;
    width: 98px;
    height: 26px;
    background: #e11927;
    border: solid 1px #e00a50;
    color: #fff;
    text-align: center;
    line-height: 26px;
    text-decoration: none;
}

.cart_content .con_all .price_gongji span {
    font-size: 18px;
}

/*水平翻转*/
.flipx {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1); /*IE*/
    filter: FlipH;
}

/*底部总体样式 20150430 by zhangbin*/
/*底部承诺样式*/
.promise_box {
    width: 100%;
    background-color: #e0e0e0;
    overflow: hidden;
    padding: 17px 0px;
    margin-top: 50px;
}

.promise_box ul {
    width: 100%;
    float: left;
}

.promise_box ul li {
    float: left;
    padding: 0 45px;
}

.promise_box ul li img {
    float: left
}

.promise_box ul li span {
    float: left;
    line-height: 50px;
    font-family: "Microsoft YaHei";
    color: #000;
    font-size: 18px;
    padding-left: 13px;
}

/*公共脚部分*/
.footer_v2013 .foot_p1, .footer_v2013 .foot_p2 {
    text-align: center;
}

.footer_v2013 .foot_p1 a {
    margin: 0 10px;
}

.footer_v2013 .foot_p2 {
    color: #a6a5a6;
}

.footer_v2013 .foot_p2 span {
    margin: 0 10px;
}

.footer_v2013 .foot_mt30 {
    margin-top: 30px;
}

pre {
    line-height: 22px;
}

/*公共脚部分*/

.bottom-links {
    width: 100%;
    text-align: center;
    background-color: #f5f5f5;
}

.bottom-links-title {
    font-size: 15px;
    color: #000000;
    font-family: "Microsoft YaHei";
    text-align: left;
}

.bottom-links .cols {
    margin: 0px auto;
    width: 1200px;
    padding: 10px 0px;
    border-bottom: #d6d6d6 solid 1px;
}

.bottom-links .col {
    float: left;
    padding: 0 60px;
    margin-top: 15px;
}

.bottom-links-items {
    margin-top: 18px;
    text-align: left;
}

.bottom-links-items img {
    margin-right: 10px;
}

.bottom-links-items li {
    padding: 3px 0;
}

.bottom-links-items a {
    color: #666;
    text-decoration: none;
    font-family: "Microsoft YaHei";
}

.bottom-links-items a:hover {
    color: red;
    text-decoration: underline;
    cursor: pointer;
}

.bottom-about {
    width: 100%;
    height: 175px;
    text-align: center;
    padding-top: 30px;
    background-color: #f5f5f5;
}

.bottom-about a {
    color: #666666;
    text-decoration: none;
    line-height: 20px;
}

.bottom-about a:hover {
    text-decoration: underline;
}

/*右侧返回顶部，微信扫描样式*/
.fixed-buttons {
    position: fixed;
    bottom: 60px;
    right: 60px;
}

.fixed-buttons li {
    margin-top: 12px;
}

.fixed-buttons img {
    cursor: pointer;
}

.fixed-weixin .weixin-pic {
    position: absolute;
    margin-left: -170px;
    margin-top: -100px;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: margin-left .3s ease-out, opacity .3s, visibility .3s;
    -moz-transition: margin-left .3s ease-out, opacity .3s, visibility .3s;
    -ms-transition: margin-left .3s ease-out, opacity .3s, visibility .3s;
    -o-transition: margin-left .3s ease-out, opacity .3s, visibility .3s;
    transition: margin-left .3s ease-out, opacity .3s, visibility .3s;
    box-shadow: 0 0 4px #eaeaea;
    border: 2px solid #d9d9d9;
    padding: 6px;
    background-color: #fff;
}

.fixed-weixin.show .weixin-pic {
    visibility: visible;
    opacity: 1;
    margin-left: -118px;
}

.fixed-bar {
    width: 100%;
    position: fixed;
    height: 53px;
    z-index: 10;
    opacity: 1;
    -webkit-transition: top .3s ease-out;
    -moz-transition: top .3s ease-out;
    -ms-transition: top .3s ease-out;
    -o-transition: top .3s ease-out;
    transition: top .3s ease-out;
    box-shadow: 0 0 4px #eaeaea;
    top: -53px;
}

.fixed-bar-bg {
    display: block;
    width: 100%;
    background-color: #000;
    height: 50px;
    top: -50px;
    z-index: 10;
    position: fixed;
    opacity: .5;
    -webkit-transition: top .3s ease-out;
    -moz-transition: top .3s ease-out;
    -ms-transition: top .3s ease-out;
    -o-transition: top .3s ease-out;
    transition: top .3s ease-out;
}

.fixed-bar-bg.show {
    top: 0;
}

.fixed-bar.show {
    top: 0;
}

.fixed-bar.show .shop_Nav {
    background-color: #FFF;
    padding: 8px 0;
    margin-top: 0px;
    position: relative;
    z-index: 9999
}

.fixed-bar.show .shop_Nav .r_icon {
    margin-top: 5px;
}

.menu_show {
}

.menu_hide {
    display: none
}

/*导航条*/
.shop_Nav {
    width: 1200px;
    margin: 18px auto 0;
    height: 35px; /*border-bottom: 2px solid #2d2d2d;*/
    position: relative;
}

.shop_Nav .Menu_box {
    margin-left: 201px;
}

.shop_Nav .Menu_box li a {
    position: relative;
    display: inline-block;
    font-size: 16px;
    color: #333;
    line-height: 32px;
    height: 32px;
    padding: 0 21px;
    font-weight: bold;
}

.shop_Nav .Menu_box li a.yMenua {
    border-bottom: 3px solid #2d2d2d;
}

.shop_Nav .Menu_box li a:hover {
    border-bottom: 3px solid #2d2d2d;
}

.shop_Nav .Menu_box li {
    float: left;
    height: 33px;
    padding: 0 12px;
}

.shop_Nav .r_icon {
}

.shop_Nav .r_icon i {
    width: 24px;
    height: 24px;
    float: left;
    margin: 0 5px;
}

.shop_Nav .r_icon .i01 {
    background-position: -30px -34px;
}

.shop_Nav .r_icon .i02 {
    background-position: -62px -34px;
}

.shop_Nav .r_icon span {
    float: left;
    line-height: 24px;
    color: #333333;
    padding: 0 5px;
    font-family: "宋体"
}

.pullDown {
    z-index: 1;
    position: absolute;
}

.pullDownTitle {
    height: 35px;
    width: 201px;
    background: #c60c1a;
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    font-family: "Microsoft YaHei";
    text-align: left;
    line-height: 35px;
}

.pullDownTitle i {
    width: 18px;
    height: 18px;
    float: left;
    background-position: 0px -53px;
    margin: 9px 15px auto 25px
}

.left_menu {
    width: 187px;
    height: 420px;
    padding: 0 7px;
    background: #34383b;
    position: relative;
    z-index: 2;
}

ul,li,p,dl,dd,h1,h2,h3 {
	padding:0;
	margin:0
}
ul,li,ol {
	list-style:none
}
em {
	font-style:normal
}
.payment-con {
	margin-top:20px
}
.payment-con .xm-plain-box .box-hd .title {
	float:left
}
.payment-con .xm-plain-box .box-hd .tip-tag {
	float:left;
	height:18px;
	line-height:18px;
	padding:0 7px;
	margin:17px 20px 0 20px;
	color:#ff4a00;
	font-size:12px
}
.payment-con .xm-plain-box .box-bd {
	border-bottom:none
}
.payment-con .xm-plain-box .box-ft {
	background:#fafafa;
	padding:20px 30px;
	margin-top:20px;
	border-top:none
}
.payment-con .xm-plain-box .box-ft .btn,.payment-con .xm-plain-box .box-ft .tip {
	float:right;
	margin-left:10px
}
.payment-con .xm-plain-box .box-ft .btn-lineDakeLight {
	border-color:#dfdfdf
}
.payment-con .xm-plain-box .box-ft .tip {
	line-height:40px
}
.order-info {
	border:1px solid #dfdfdf;
	padding:25px 30px 25px 260px;
	margin-bottom:15px;
	position:relative;
	zoom:1
}
.order-info .msg {
	_height:58px;
	margin-bottom:20px
}
.order-info h3 {
	font-size:24px;
	color:#000;
	font-weight:normal
}
.order-info p {
	line-height:1.6;
	color:#6d6d6d
}
.order-info p .line {
	margin:0 3px
}
.order-info p .pay-time-tip {
	margin:0 2px;
	color:#ff4a00
}
.order-info .post-date {
	color:#333;
	font-size:18px
}
.order-info .icon-box {
	width:240px;
	height:100%;
	_height:194px;
	position:absolute;
	top:0;
	left:0;
	background:#fafafa;
	zoom:1
}
.order-info .icon-box .iconfont {
	display:block;
	width:90px;
	height:90px;
	line-height:1;
	position:absolute;
	top:50%;
	left:50%;
	margin-left:-50px;
	margin-top:-50px;
	text-align:center;
	font-size:90px;
	border:5px solid #83bd39;
	color:#83bd39;
	border-radius:50%
}
.iconfont img{ margin-top:20px;}
.payment-box {
	border-bottom:1px solid #dfdfdf;
	position:relative
}
.payment-box dt {
	width:200px;
	padding:25px 20px 20px;
	position:absolute;
	top:0;
	left:0;
	color:#333;
	font-size:12px;
	z-index:10
}
.payment-box dt strong {
	font-size:14px
}
.payment-box dt a:hover {
	text-decoration:underline
}
.payment-box dt p {
	color:#8c8c8c
}
.payment-box dd {
	width:100%;
	position:relative;
	background:#fafafa;
	z-index:5
}
.payment-box dd .select-other {
	position:absolute;
	top:50%;
	left:450px;
	margin-top:-15px
}
.payment-box dd .hd-tip {
	position:absolute;
	top:35px;
	left:400px
}
.payment-box dd .hd-tip .tip-tag {
	display:inline-block;
	height:18px;
	line-height:18px;
	color:#fff;
	padding:0 8px;
	margin:0 5px;
	background-color:#ff4a00;
	font-size:12px
}
.payment-list {
	margin-left:240px;
	padding:20px;
	background:#fff
}
.payment-list li {
	float:left;
	width:167px;
	padding:10px 0
}
.payment-list li label {
	cursor:pointer
}
.payment-list li input {
	vertical-align:middle
}
.payment-list li img {
	margin-left:5px; width:140px;
}
.alipay-qrcode {
	display:none;
	margin-left:240px;
	padding:30px 0 30px 40px;
	border-top:1px solid #dfdfdf;
	position:relative;
	background-color:#eee
}
.alipay-qrcode:after {
	content:'';
	display:inline-block;
	width:0;
	height:0;
	_font-size:0;
	_line-height:1;
	margin-left:5px;
	margin-top:-2px;
	border-width:0 9px 9px;
	border-style:dashed dashed solid;
	border-color:transparent transparent #dfdfdf;
	position:absolute;
	top:-7px;
	left:70px;
	z-index:1
}
.alipay-qrcode:before {
	content:'';
	display:inline-block;
	width:0;
	height:0;
	_font-size:0;
	_line-height:1;
	margin-left:5px;
	margin-top:-2px;
	border-width:0 8px 9px;
	border-style:dashed dashed solid;
	border-color:transparent transparent #eee;
	position:absolute;
	top:-6px;
	left:71px;
	z-index:2
}
.alipay-qrcode .box {
	width:600px;
	height:360px;
	padding-top:30px;
	background-color:#fff
}
.alipay-qrcode iframe {
	float:left
}
.alipay-qrcode .tip {
	float:left;
	height:330px;
	width:258px;
	padding-left:40px;
	border-left:1px solid #dfdfdf
}
.alipay-qrcode .tip .title {
	margin-top:110px;
	margin-bottom:10px;
	font-size:18px;
	color:#6d6d6d
}
.alipay-qrcode .tip .title span {
	color:#d6313a
}
.alipay-qrcode .tip .more {
	color:#666
}
.alipay-qrcode .tip .more a {
	color:#4e85fc
}
.pay-tip {
	background:url("http://s1.mi.com/zt/2013//payment-mitu.jpg") no-repeat 70px 20px
}
.pay-tip a {
	color:#ee330a
}
.pay-tip .fail,.pay-tip .success {
	float:right;
	width:230px;
	padding:15px
}
.pay-tip .fail h4,.pay-tip .success h4 {
	margin:0;
	color:#6d6d6d
}
.pay-tip .fail p,.pay-tip .success p {
	padding-top:10px;
	font-size:12px
}
.pay-tip .fail p a:hover,.pay-tip .success p a:hover {
	text-decoration:underline
}
.pay-tip .success {
	clear:right
}
.payment-balance {
	height:44px
}
.payment-balance .item2 {
	float:right;
	margin-top:12px
}
.payment-balance .num {
	color:#ff4a00
}
.payment-balance .item1 {
	margin-top:12px;
	cursor:pointer
}
.payment-balance .item1 .iconfont {
	display:inline-block;
	width:14px;
	height:14px;
	line-height:1;
	border:1px solid #dfdfdf;
	font-size:14px;
	color:#fff;
	vertical-align:0
}
.payment-balance .selected .iconfont {
	color:#90ce36
}
.balance-pay h3 {
	margin-bottom:10px;
	font-size:18px;
	color:#333
}
.balance-pay h3 .num {
	color:#ff4a00
}
.balance-pay .input {
	width:180px;
	height:38px;
	line-height:38px;
	padding:0 10px;
	margin-right:10px;
	border:1px solid #dfdfdf
}
.balance-pay .send-again {
	cursor:pointer
}
.balance-pay .btn {
	margin:20px 0
}
.fenqi-detail {
	margin-left:240px;
	padding:20px;
	background:#fff;
	margin-top:-20px
}
.fenqi-detail li {
	float:left;
	width:167px;
	padding:10px 0
}
.fenqi-detail li label {
	cursor:pointer
}
.fenqi-detail li input {
	vertical-align:middle
}
.fenqi-detail li img {
	margin-left:5px
}
.fenqi-detail .options .item {
	float:left;
	padding:10px 20px;
	margin-right:20px;
	color:#6d6d6d;
	background:#fafafa;
	border:1px solid #dfdfdf;
	cursor:pointer
}
.fenqi-detail .options .item span {
	display:block;
	font-size:18px;
	color:#333
}
.fenqi-detail .options .item input {
	display:none
}
.fenqi-detail .options .selected {
	border-color:#ff4a00;
	background:#fff
}
.fenqi-detail .info {
	padding-top:20px;
	line-height:2;
	color:#333
}
.fenqi-detail .info span {
	color:#ff4a00
}
.fenqi-detail .info .tip {
	line-height:1.5;
	padding-top:20px;
	font-size:12px;
	color:#8c8c8c
}
.pay-hd {
	margin-left:240px;
	padding:20px 20px 0;
	background:#fff
}
.pay-hd .info {
	color:#666
}
.pay-hd .info span {
	color:#ff4a00
}
.pay-hd .info a {
	font-size:12px;
	margin-left:10px;
	text-decoration:underline
}
.pay-hd .payment-list {
	margin:0;
	padding:10px 0 20px;
	border-bottom:1px solid #dfdfdf
}
.pay-hd .payment-list li {
	width:30%
}
.pay-hd .payment-list li .icon {
	display:inline-block;
	height:22px;
	line-height:22px;
	padding:0 10px;
	color:#fff;
	background-color:#90ce36;
	font-size:12px;
	position:relative
}
.pay-hd .payment-list li .icon i {
	display:block;
	width:0;
	height:0;
	border-width:5px 5px 5px 0;
	border-style:dashed solid dashed dashed;
	border-color:transparent #90ce36 transparent transparent;
	position:absolute;
	top:6px;
	left:-5px;
	overflow:hidden
}
#alipayqrcodeFrame {
	background:url(http://c1.mifile.cn/f/i/2014/cn/loading.gif) no-repeat center center
}
.event-unionpay {
	display:none;
	position:absolute;
	top:80px;
	left:447px;
	font-size:12px;
	color:#333
}
.event-unionpay a {
	margin-left:5px;
	color:#3795fe
}
.xhw{ background-color:#ffffff; clear:both; padding:20px;}
.whx_banner { padding-bottom:20px;}
.whx_banner .p1{ color:#666666; float:left; }
.whx_banner .p2{ color:#999999; float:left;}
.whx_banner input{ float:left; margin-left:10px; background-color:#f3f3f3; border:1px solid #dfdfdf; color:#999999;}
.whx_banner .a3{ color:#ff4646;}
.el-form-item__label {
  font-family: HiraginoSansGB-W3;
  font-size: 20px;
  line-height: 40px;
  color: #999;
  letter-spacing: 0;
}
.el-form-item__content {
  font-family: HiraginoSansGB-W3;
  font-size: 20px;
  line-height: 40px;
  color: #333333;
  letter-spacing: 0;
}
.content {
  font-family: HiraginoSansGB-W3;
  font-size: 20px;
  line-height: 40px;
  color: #333333;
  letter-spacing: 0;
}
.personal {
  margin-top: 100px;
}
</style>
