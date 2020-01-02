<template>
  <el-dialog title="修改个人信息" :visible.sync="show">
    <el-form ref="form" :model="form" :rules="rule" label-width="100px" >
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" :label-width="formLabelWidth" prop="nickname">
            <el-input v-model="form.nickname"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" :label-width="formLabelWidth" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
            <el-input v-model="form.sex"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script >
  import http from "../http/index";
  import Axios from "axios"
  export default {
    props: {
      dialogShow: false,
      detailInfo: Object
    },
    data(){
      return{
        show: false,
        formLabelWidth: "120px",
        form:{
          nickname: '',
          email: '',
          phone: '',
          sex: ''
        },
        rule: {
          nickname: [
            { required: true, message: '请输入姓名', trigger: 'trigger: \'blur\'' },
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
          ],
          sex:[
            {required: true, message: '请输入性别', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'}
          ]
        }

      }
    },
    watch:{
      dialogShow(val) {
        this.show = true;
        this.form = Object.assign({}, this.detailInfo)
      }
    },
    created() {
      this.show = this.dialogShow
    },
    methods:{
      onSubmit(form){
        this.$refs[form].validate((valid) => {
          if (valid) {
            const dto = {
                nickname: this.form.nickname,
                email: this.form.email,
                phone: this.form.phone,
                sex: this.form.sex
            };
            Axios({
              method: 'put',
              headers: { "content-type": "application/json" },
              data:dto,
              url: '/eshop/user/info/1'
            })
           .then(data => {
              this.$message.success('修改成功');
              this.show = false;
              this.$emit('refresh');
            })
          } else {
            this.$message.warning('请输入完整信息');
            return false;
          }
        });
      }

    }
  }
</script>
<style>

</style>
