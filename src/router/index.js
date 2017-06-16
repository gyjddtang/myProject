import Vue from 'vue';
import Router from 'vue-router';
import Frame from '../views/layout/Frame';
import App from '../views/layout/MainLayout';
import Err404 from '../views/error/404';
import Login from '../views/login/Login';
import Trainee from '../views/trainee/Trainee';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Frame,
      redirect: '/login',
      children: [
        { path: 'login', component: Login, name: 'Login' },
        { path: 'app',
          component: App,
          name: 'Index',
          children: [
            { path: 'trainee', component: Trainee, name: 'Trainee' },
            { path: '*', component: Err404, name: 'Err404' }
          ]
        },
      ]
    }
  ]
})
