import Layout from "/@/layout/index.vue";

const asyncRoutes = [
    {
        path: "/Admin",
        name: "Admin",
        component: Layout,
        meta: {
          title: "管理员",
          roles: ["admin"]
        },
        children: [
            {
                path: "index",
                component: () => import("/@/views/console/Index.vue"),
                name: "console",
                meta: {
                    title: "测试"
                }
            }
        ]
    }
];

export default asyncRoutes;