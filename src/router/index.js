import { createWebHistory,createRouter } from "vue-router";
import Home from '@/components/ComHome.vue';
import News from '@/components/ComNews.vue';
import Contact from '@/components/ComContact.vue';
import About from '@/components/ComAbout.vue';
// tao mang chua những đường link để điều hướng
const routes=[
    // tạo 1 đối trượng
    // đối tượng home là trang chủ path:"/"
    {
        path:"/",
        name:"Home",
        component:Home
    },
    // những trang ko là trang chủ thì path:"/ten"
    {
        path:"/news",
        name:"News",
        component:News
    },
    {
        path:"/contact",
        name:"Contact",
        component:Contact
    },
    {
        path:"/about",
        name:"About",
        component:About
    },
]
// tạo đối tượng từ router
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router
