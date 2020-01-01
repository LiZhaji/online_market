<template>
  <div class="login">
    <div class="main">
      <h2>登录</h2>
      <input v-model="name" type="text" placeholder="用户名" class="in1" />
      <input v-model="nickname" type="text" placeholder="昵称" class="in1" />
      <input v-model="email" type="text" placeholder="邮箱" class="in1" />
      <input v-model="psw" type="password" placeholder="密码" />
      <p>
        <router-link class="l" to="/login">已有账号</router-link>
        <a href="#" class="r">忘记密码</a>
      </p>
      <input type="button" @click="register" value="登录" class="btn_d" />
      <div class="acc">
        <span>社交账号登录</span>
        <p>
          <a href="#" class="a1"></a>
          <a href="#" class="a2"></a>
          <a href="#" class="a3"></a>
          <a href="#" class="a4"></a>
          <a href="#" class="a5"></a>
          <a href="#" class="a6"></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import fetch from "../http/index";
export default {
  data(){
    return{
      name: 'lyj',
      psw: '123456',
      nickname: 'zhaji',
      email: '12121212@qq.com'
    }
  },
  methods:{
    register(){
      const params = {
        login_name: this.name,
        password: this.psw,
        nickname: this.nickname,
        email: this.email
      }
      fetch('post', '/user/register', params).then(res => {
        if (res.data.success) {
          console.log('注册成功！');
          localStorage.setItem(" needLogin", false);
          this.$router.replace('/homepage')
        }
      })
    }
  }
};
</script>

<style scoped>
.login {
  background: #f2f2f2;
  padding: 120px;
  padding-top: 190px;
}
.login .main {
  width: 322px;
  margin: 0 auto;
  padding: 30px 40px;
  background: #fff;
}
.login .main h2 {
  height: 40px;
}
.login .main input {
  width: calc(100% - 15px);
  height: 38px;
  outline: none;
  padding-left: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  margin-bottom: 22px;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #c0c4cc;
  font-size: 14px;
}
.login .main p {
  font-size: 12px;
  color: #4685ec;
  height: 30px;
}
.login .main p .l {
  float: left;
}
.login .main p .r {
  float: right;
}
.login .main .btn_d {
  width: 100%;
  padding-left: 0;
  background: #4685ec;
  color: #fff;
  margin-bottom: 10px;
}
.login .main .btn_d:hover {
  opacity: 0.9;
}
.login .main .acc {
  height: 56px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  position: relative;
}
.login .main .acc span {
  width: 72px;
  height: 16px;
  font-size: 12px;
  color: rgb(102, 102, 102);
  background-color: white;
  padding: 0 6px;
  position: absolute;
  top: -8px;
  left: 37%;
}
.login .main .acc p {
  padding-left: 10px;
}
.login .main .acc a {
  display: inline-block;
  width: 34px;
  height: 33px;
  background: url(../assets/qq.png);
  margin: 0 6px;
}
.login .main .acc a.a1:hover {
  background: url(../assets/qq2.png);
}
.login .main .acc a.a2 {
  background: url(../assets/wb.png);
}
.login .main .acc a.a2:hover {
  background: url(../assets/wb2.png);
}
.login .main .acc a.a3 {
  background: url(../assets/wx.png);
}
.login .main .acc a.a3:hover {
  background: url(../assets/wx2.png);
}
.login .main .acc a.a4 {
  background: url(../assets/wy.png);
}
.login .main .acc a.a4:hover {
  background: url(../assets/wy2.png);
}
.login .main .acc a.a5 {
  background: url(../assets/rr.png);
}
.login .main .acc a.a5:hover {
  background: url(../assets/rr2.png);
}
.login .main .acc a.a6 {
  background: url(../assets/db.png);
}
.login .main .acc a.a6:hover {
  background: url(../assets/db2.png);
}
/* 注册部分的代码 */
.login .main .zc {
  color: #555;
}
.login .main .zc a {
  color: #4685ec;
}
</style>