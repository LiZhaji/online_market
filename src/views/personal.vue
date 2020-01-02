<template>
  <div class="personal">
    <div  style=" background-color: #FFFFFF;margin: 10px;box-shadow: 0 0px 2px 2px #DEE3DF;border-radius: 8px;">
      <el-row>
        <el-col :span="7">
          <span  >
            <img class="logo" src="../assets/me.png">
          </span>
        </el-col>
        <el-col :span="14">
          <el-form label-width="100" ref="data" :model="data" class="content">
            <el-row>
              <el-form-item>
                <el-col  style="font-size: 30px;color: #000; font-weight: normal;margin-top: 60px">
                  {{ data.nickname}}
                </el-col>
              </el-form-item>
            </el-row>
            <el-row>
              <el-col  :span="10">
                <el-form-item label="电话:">
                  {{data.phone}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="性别:">
                  {{data.sex}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col  :span="10">
                <el-form-item label="邮箱:">
                  {{data.email}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row >
              <el-col :span="18" style="text-align: right">
                <el-button class=" el-icon-edit" @click="editUser">修改个人信息</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
      <personal-dialog :dialog-show="detailDialogShow" :detail-info="detailInfo" @refresh="getUser()"></personal-dialog>
    </div>
  </div>

</template>

<script >
  import http from "../http/index";
  import PersonalDialog from "./personal-dialog";
  export default {
    components:{
      PersonalDialog,
    },
      data(){
          return {
            detailDialogShow: false,
            detailInfo: {},
            data:{
                nickname: '',
                phone: '',
                sex: '',
                email: ''
            },

      }
      },
      mounted(){
          this.getUser();

      },
      methods:{
      getUser() {
        const user_id = '1';
        http("get", "/user/info/"+ user_id).then(data => {
          this.data = data;
          console.log(data);

        });
      },
      editUser(){
        this.detailDialogShow = !this.detailDialogShow;
        this.detailInfo = this.data;
      }
    }

}
</script>

<style>
  .el-form-item__label{
    font-family: HiraginoSansGB-W3;
    font-size: 20px;
    line-height: 40px;
    color: #999;
    letter-spacing: 0;
  }
  .el-form-item__content{
    font-family: HiraginoSansGB-W3;
    font-size: 20px;
    line-height: 40px;
    color: #333333;
    letter-spacing: 0;
  }
  .content{
    font-family: HiraginoSansGB-W3;
    font-size: 20px;
    line-height: 40px;
    color: #333333;
    letter-spacing: 0;
  }
 .personal{
    margin-top: 100px;
}
</style>
