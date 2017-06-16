<template lang="html">
  <div class="loginContainer">
    <div class="formBox">
      <p class="title">欢迎使用 Mili 系统</p>
      <el-form label-width="70px" ref='loginForm' :model="loginForm" :rules='loginRules' @submit.native.prevent='loginHandle'>
        <el-form-item label='用户名' prop='userName'>
          <el-input v-model='loginForm.userName' type='text' name='userName' placehoder='用户名'></el-input>
        </el-form-item>
        <el-form-item label='密码' prop='password'>
          <el-input v-model='loginForm.password' type='password' name='password' placehoder='密码'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type='submit' :loading='loading'>登录</el-button>
        </el-form-item>
        <el-form-item>
          <p>账号：admin&nbsp;&nbsp;&nbsp;&nbsp;密码：123qwe</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          userName: void 0,
          password: void 0
        },
        loginRules: {
          userName: [
            {required: true, message: '请输入用户名'}
          ],
          password: [
            {required: true, message: '请输入密码'},
            {min: 6, max: 12, message: '长度为6-12位'}
          ]
        },
        loading: false
      }
    },

    computed: {
      ...mapState('login', [
        'user'
      ])
    },

    methods: {
      ...mapActions('login', [
        'changeName',
        'login'
      ]),

      loginHandle: function() {
        this.$refs.loginForm.validate(res => {
          if(res) {
            this.login({...this.loginForm})
            .then(res => {
              this.$router.push('/app/principal');
            });
          }
        });
      }
    }
  }
</script>

<style lang='less'>
  @import "../styles/base.less";

  .loginContainer {
    background: #2d3a4b;
    height: 100vh;
    .fBox;
    .fBoxJc;

    .formBox {
      width: 400px;
      background: #fff;
      border-radius: 5px;

      .title {
        font-size: 20px;
        text-align: center;
        line-height: 80px;
      }

      .el-form {
        padding: 0 60px;

        .el-form-item {
          color: #454545;
          margin-bottom: 20px;

          .elIcon {
            color: #889aa4;
            margin: 0 10px;
          }

          .el-button {
            width: 50%;
          }
        }
      }
    }
  }
</style>
