<template>
  <div class="s_content">
    <div class="s_content_c inner_c">
      <div class="s_info">
        <div class="s_title">
          <a href="#">首页</a>
          &gt;
          <span>所有文章</span>
        </div>
        <div class="article">
          <div class="all">
            <h4>所有文字</h4>
            <ul>
              <li>
                <div class="pic">
                  <a href="#">
                    <img src="../assets/h144.jpeg" alt />
                  </a>
                </div>
                <div class="content">
                  <h5>9款高颜值饭盒</h5>
                  <span>2017-01-19 18:02</span>
                  <p>这款属于 Bento&co 的 Temahima 系列，这个系列以 24 个节气为设计核心，将季节的特色体现在饭盒的图案上，别有一番情调。除了自用，作为礼物送人也很不错。</p>
                  <b>
                    <i></i>家居
                  </b>
                </div>
              </li>
              <li>
                <div class="pic">
                  <a href="#">
                    <img src="../assets/h146.jpeg" alt />
                  </a>
                </div>
                <div class="content">
                  <h5>9款高颜值饭盒</h5>
                  <span>2017-01-19 18:02</span>
                  <p>这款属于 Bento&co 的 Temahima 系列，这个系列以 24 个节气为设计核心，将季节的特色体现在饭盒的图案上，别有一番情调。除了自用，作为礼物送人也很不错。</p>
                  <b>
                    <i></i>家居
                  </b>
                </div>
              </li>
              <li>
                <div class="pic">
                  <a href="#">
                    <img src="../assets/h145.jpeg" alt />
                  </a>
                </div>
                <div class="content">
                  <h5>9款高颜值饭盒</h5>
                  <span>2017-01-19 18:02</span>
                  <p>这款属于 Bento&co 的 Temahima 系列，这个系列以 24 个节气为设计核心，将季节的特色体现在饭盒的图案上，别有一番情调。除了自用，作为礼物送人也很不错。</p>
                  <b>
                    <i></i>家居
                  </b>
                </div>
              </li>
            </ul>
          </div>
          <div class="catalog">
            <div class="top">
              <h5>文章目录</h5>
              <ul>
                <li class="cur">
                  <span>·</span>
                  <a href="#">所有文章</a>
                </li>
                <li>
                  <span>·</span>
                  <a href="#">未分类目录</a>
                </li>
                <li>
                  <span>·</span>
                  <a href="#">家居生活</a>
                </li>
              </ul>
            </div>
            <div class="tag">
              <h5>文章标签</h5>
              <a href="#">家居</a>
            </div>
          </div>
        </div>
        <div class="pages">
          <span>&lt;</span>
          <a href="#">1</a>
          <span>&gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  padding-bottom: 80px;
  position: relative;
}
.s_content .s_content_c .s_info .s_title {
  line-height: 40px;
  border-bottom: 1px solid #dddddd;
  font-size: 14px;
  color: #555555;
  padding-top: 20px;
  margin-bottom: 20px;
}
.s_content .s_content_c .s_info .s_title a {
  color: #000;
}
.s_content .s_content_c .s_info .article {
  overflow: hidden;
}
.s_content .s_content_c .s_info .article .all {
  width: 815px;
  float: left;
}
.s_content .s_content_c .s_info .article .all h4 {
  font-size: 24px;
  color: #555;
}
.s_content .s_content_c .s_info .article .all li {
  border-bottom: 1px solid #dddddd;
  padding: 30px 0;
  overflow: hidden;
}
.s_content .s_content_c .s_info .article .all li .pic {
  width: 205px;
  float: left;
  text-align: center;
}
.s_content .s_content_c .s_info .article .all li .content {
  width: 580px;
  padding: 0 15px;
  float: left;
}
.s_content .s_content_c .s_info .article .all li .content h5 {
  font-size: 18px;
  font-weight: bold;
  color: #555555;
}
.s_content .s_content_c .s_info .article .all li .content span {
  font-size: 12px;
  color: #8c77a1;
  line-height: 35px;
}
.s_content .s_content_c .s_info .article .all li .content p {
  font-size: 14px;
  color: #555;
}
.s_content .s_content_c .s_info .article .all li .content b {
  font-size: 14px;
  color: #666;
  display: inline-block;
  line-height: 40px;
}
.s_content .s_content_c .s_info .article .all li .content b i {
  display: inline-block;
  width: 19px;
  height: 19px;
  margin-right: 5px;
  background: url(../assets/main.png) no-repeat -101px -70px;
  vertical-align: middle;
}
.s_content .s_content_c .s_info .article .catalog {
  float: right;
  width: 260px;
  height: 500px;
}
.s_content .s_content_c .s_info .article .catalog .top h5 {
  line-height: 50px;
  font-size: 18px;
  color: #555;
}
.s_content .s_content_c .s_info .article .catalog .top ul li {
  height: 47px;
  border-top: 1px solid #dddddd;
  line-height: 47px;
  padding-left: 27px;
  position: relative;
}
.s_content .s_content_c .s_info .article .catalog .top ul li span {
  position: absolute;
  left: 8px;
  top: 1px;
}
.s_content .s_content_c .s_info .article .catalog .top ul li.cur {
  background: #f6f6f6;
}
.s_content .s_content_c .s_info .article .catalog .top ul li:hover {
  background: #f6f6f6;
}
.s_content .s_content_c .s_info .article .catalog .tag h5 {
  line-height: 50px;
  border-bottom: 1px solid #dddddd;
  color: #555;
  margin-bottom: 10px;
}
.s_content .s_content_c .s_info .article .catalog .tag a {
  background: #efefef;
  display: inline-block;
  padding: 3px 5px;
  border-radius: 1px;
  font-size: 14px;
}
.s_content .s_content_c .s_info .pages {
  position: absolute;
  right: 35px;
  bottom: 40px;
}
.s_content .s_content_c .s_info .pages a {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  margin: 0 5px;
  border-radius: 3px;
  background: #9dafb8;
  color: #fff;
  text-align: center;
}
.s_content .s_content_c .s_info .pages span {
  color: #a3a3a3;
}
</style>