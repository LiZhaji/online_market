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
        <div class="each-address selected">
          <label aria-checked="true" class="address-contents checked">
            <input name="address" type="radio" aria-checked="true" checked />
            <span class="addr-info">
              <span class="provinceName">浙江省</span>
              <span class="cityName">杭州市</span>
              <span class="areaName">余杭区</span>
              <span class="townName">五常街道</span>
              <span class="addressDetail">余杭区文一西路969号六号楼</span>（leeex 收）
              <span class="mobile">18513127639</span>
            </span>
          </label>
        </div>
        <div class="each-address">
          <label aria-checked="false" class="address-contents">
            <input name="address" type="radio" aria-checked="false" />
            <span class="addr-info">
              <span class="provinceName">浙江省</span>
              <span class="cityName">杭州市</span>
              <span class="areaName">西湖区</span>
              <span class="townName">翠苑街道</span>
              <span class="addressDetail">翠苑新村2区2幢2单元</span>（炸鸡 收）
              <span class="mobile">18732324603</span>
            </span>
          </label>
        </div>
        <div class="each-address">
          <label aria-checked="false" class="address-contents">
            <input name="address" type="radio" aria-checked="false" />
            <span class="addr-info">
              <span class="provinceName">浙江省</span>
              <span class="cityName">杭州市</span>
              <span class="areaName">西湖区</span>
              <span class="townName">翠苑街道</span>
              <span class="addressDetail">翠苑新村2区2幢2单元</span>（炸鸡 收）
              <span class="mobile">18732324603</span>
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="item-headers">
      <div class="header-wrapper">
        <span class="header-title">确认订单信息</span>
      </div>
      <div class="item-headers-wrap item-headers-column-6">
        <div class="item-cloumn item-cloumn-0">商品信息</div>
        <div class="item-cloumn item-cloumn-1">商品属性</div>
        <div class="item-cloumn item-cloumn-2">单价</div>
        <div class="item-cloumn item-cloumn-3">数量</div>
        <div class="item-cloumn item-cloumn-5">小计</div>
      </div>
    </div>

    <div class="clearfix">
        <div class="item-row">
          <div class="cell info-detail">
            <img
              class="info-img"
              src="//img.alicdn.com/imgextra/i2/43650797/O1CN01Hzbp0v1Hl4EVtoNth_!!43650797.jpg_100x100q90.jpg"
            />
            <div class="cell info-msg">可爱创意精美书签夹</div>
          </div>
          <div class="cell info-sku">颜色分类：酒红色[5个装]</div>
          <div class="cell info-price">32.50</div>
          <div class="cell order-quantity">1</div>
          <div class="cell order-price price">89.00</div>
        </div>
        <div class="item-row">
          <div class="cell info-detail">
            <img
              class="info-img"
              src="//img.alicdn.com/imgextra/i2/43650797/O1CN01Hzbp0v1Hl4EVtoNth_!!43650797.jpg_100x100q90.jpg"
            />
            <div class="cell info-msg">可爱创意精美书签夹</div>
          </div>
          <div class="cell info-sku">颜色分类：酒红色[5个装]</div>
          <div class="cell info-price">32.50</div>
          <div class="cell order-quantity">1</div>
          <div class="cell order-price price">89.00</div>
        </div>
        <div class="item-row">
          <div class="cell info-detail">
            <img
              class="info-img"
              src="//img.alicdn.com/imgextra/i2/43650797/O1CN01Hzbp0v1Hl4EVtoNth_!!43650797.jpg_100x100q90.jpg"
            />
            <div class="cell info-msg">可爱创意精美书签夹</div>
          </div>
          <div class="cell info-sku">颜色分类：酒红色[5个装]</div>
          <div class="cell info-price">32.50</div>
          <div class="cell order-quantity">1</div>
          <div class="cell order-price price">89.00</div>
        </div>
        <div class="textarea">
          <label class="textarea_title">备注：</label>
          <textarea class="textarea_input" placeholder="选填,请先和商家协商一致" maxlength="200"></textarea>
        </div>
        <div class="delivery border-bottom">
          <span class="delivery_title">运送方式：</span>
          <span>普通配送 快递 自费</span>
          <span class="delivery_price price">10.00</span>
        </div>

      <div class="total">
        <span>合计(含运费)</span>
        <span class="price">￥189.00</span>
      </div>
    </div>

    <div class="end">
      <div class="realpay">
        <div>
          <span class="realpay_title">实付款：</span>
          <span class="realpay_symbol price">¥</span>
          <span class="realpay_price price">189.00</span>
        </div>
        <div>
          <span class="realpay_title">寄送至：</span>
          <span class="confirmAddr">浙江省 杭州市 余杭区 五常街道 余杭区文一西路969号六号楼</span>
        </div>
        <div>
          <span class="realpay_title">收货人：</span>
          <span class="confirmAddr">leeex 1851365339</span>
        </div>
      </div>
      <div class="submit">
        <a role="button" title="提交订单">确认支付</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  margin-left: 300px;
  padding: 10px 25px;
  background: #f13c3cd9;
  border-radius: 2px;
  color: white;
  cursor: pointer;
}
</style>
