import Layout from "/@/layout/index.vue";

const constantRoutes = [
    {
        path: "/",
        name: "home",
        meta: {
            title: "首页",
            roles: ["admin"],
            hidden: true
        },
        component: () => import("/@/views/Home.vue")
    },
    {
        path: "/Console",
        name: "console",
        component: Layout,
        meta: {
          title: "控制台"
        },
        children: [
            {
                path: "index",
                component: () => import("/@/views/console/Index.vue"),
                name: "console",
                meta: {
                    title: "首页"
                }
            },
            {
                path: "welcome",
                component: () => import("/@/views/console/Welcome.vue"),
                name: "welcome",
                meta: {
                    title: "welcome"
                }
            }
        ]
    },
    {
        path: "/Login",
        name: "login",
        meta: {
            title: "登录页",
        },
        component: () => import("/@/views/Login.vue")
    },
    {
        path: "/Test",
        name: "test",
        component: Layout,
        meta: {
            title: "测试页面"
        },
        children: [
            {
                path: "index",
                component: () => import("/@/views/Test.vue"),
                name: "test",
                meta: {
                    title: "测试页面-1"
                }
            }
        ]
    },
];

export default constantRoutes;