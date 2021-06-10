import constantRoutes from "/@/router/constant.js";
import asyncRoutes from "/@/router/async";


const state = {
    routes: generateMenu(constantRoutes),
    addRoutes: []
};

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = state.routes.concat(routes);
    }
}

const actions = {

}

function generateRoutes(routes, roles) {
    // todo: how to generate routes filter by roles
    return routes;
}


/**
 * generate menu list by routes
 * if you need some operation , you can spread this code;
 * @param routes
 * @returns {[]}
 */
function generateMenu(routes) {
    return routes;
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}

