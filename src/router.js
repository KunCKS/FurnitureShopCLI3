import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: () => import('./views/index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/home.vue')
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/products.vue')
        },
        {
          path: 'products/:category/:series',
          name: 'FilterProducts',
          component: () => import('./views/products.vue')
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('./views/cart.vue')
        },
        {
          path: 'customerorder',
          name: 'CustomerOrder',
          component: () => import('./views/customer-order.vue')
        },
        {
          path: 'customercheckout/:id',
          name: 'CustomerCheckout',
          component: () => import('./views/customer-checkout.vue')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('./views/login.vue')
        },
        {
          path: 'product/:id',
          name: 'Product',
          component: () => import('./views/product-page.vue')
        },
        {
          path: 'promotion',
          name: 'Promotion',
          component: () => import('./views/promotion.vue')
        },
        {
          path: 'career',
          name: 'Career',
          component: () => import('./views/career.vue')
        },
        {
          path: 'customerservice',
          name: 'CustomerService',
          component: () => import('./views/customer-service.vue')
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('./views/contact.vue')
        }
      ]
    },
    {
      name: '管理頁面',
      path: '/admin',
      component: () => import('./views/dashboard.vue'),
      children: [
        {
          name: '產品頁面',
          path: 'products',
          component: () => import('./views/dashboard-products.vue'),
          meta: { requiresAuth: true }
        },
        {
          name: '優惠券頁面',
          path: 'coupons',
          component: () => import('./views/coupons.vue'),
          meta: { requiresAuth: true }
        },
        {
          name: '訂單頁面',
          path: 'dashboardorders',
          component: () => import('./views/dashboard-orders.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
