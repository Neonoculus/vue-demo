import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('../views/WelcomePage.vue'),
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('../views/LoginPage.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterPage.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'index',
    component: () => import('../views/news/IndexPage.vue'),
    children: [
      {
        path: '/news/hot',
        name: 'hotpage',
        component: () => import('../views/news/HotPage.vue')
      },
      {
        path: '/news/love',
        neme: 'lovepage',
        component: () => import('../views/news/LovePage.vue')
      },
      {
        path: '/news/home',
        name: 'homepage',
        component: () => import('../views/news/HomePage.vue')
      },
      {
        path: '/news/history',
        name: 'historypage',
        component: () => import('../views/news/HistoryPage.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user/IndexPage.vue'),
    children: [
      {
        path: '/user/draft',
        name: 'draft',
        component: () => import('../views/user/DraftPage.vue')
      },
      {
        path: '/user/published',
        name: 'published',
        component: () => import('../views/user/PublishedPage.vue')
      },
      {
        path: '/user/love',
        name: 'love',
        component: () => import('../views/user/LovePage.vue')
      },
      {
        path: '/user/info',
        name: 'info',
        component: () => import('../views/user/InfonPage.vue')
      }
    ]
  }, {
    path: '/writer',
    name: 'writer',
    component: () => import('../views/news/WritePage.vue')
  }, {
    path: '/news/info',
    name: 'newsInfo',
    component: () => import('../views/news/NewInfoPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
