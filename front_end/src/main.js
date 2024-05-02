import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import Shopping_cart_page from './pages/shopping_cart_page.vue'
import Medicines_page from './pages/medicines_page.vue'
import Medicine_detail_page from './pages/medicine_detail_page.vue'


createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/cart',
        component: Shopping_cart_page
    },{
        path: '/products',
        component: Medicines_page
    },{
        path: '/products/:medicineId',
        component: Medicine_detail_page
    }
]
}))
.mount('#app')
