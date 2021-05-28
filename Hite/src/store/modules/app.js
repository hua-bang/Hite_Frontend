const state = {
    sideBarOpenStatus: true
};

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sideBarOpenStatus = ! state.sideBarOpenStatus;
    }
}

const actions = {
    toggleSideBar({commit}) {
        commit("TOGGLE_SIDEBAR");
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}