import Router from 'vue-router';
import Vue from 'vue';

import DataSetup from '@/views/DataSetup';
import Design from '@/views/Design';
import Designs from '@/views/Designs';
import Dashboards from '@/views/Dashboards';
import NotFound from '@/views/NotFound';
import Repo from '@/views/Repo';
import Transformations from '@/views/Transformations';
import Airflow from '@/components/Airflow';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
    {
      path: '/',
      redirect: '/setup',
    },
    {
      path: '/transformations/',
      name: 'transformations',
      component: Transformations,
    },
    {
      path: '/orchestration/',
      name: 'orchestration',
      component: Airflow,
    },
    {
      path: '/setup/',
      name: 'dataSetup',
      component: DataSetup,
    },
    {
      path: '/files/',
      name: 'projectFiles',
      component: Repo,
    },
    {
      path: '/analyze/',
      name: 'analyze',
      component: Designs,
    },
    {
      path: '/analyze/:model/:design',
      name: 'analyze_design',
      component: Design,
    },
    {
      path: '/analyze/:model/:design/reports/report/:slug',
      name: 'Report',
      component: Design,
    },
    {
      path: '/dashboards/',
      name: 'Dashboards',
      component: Dashboards,
    },
    {
      path: '/dashboards/dashboard/:slug',
      name: 'Dashboard',
      component: Dashboards,
    },
  ],
});

export default router;
