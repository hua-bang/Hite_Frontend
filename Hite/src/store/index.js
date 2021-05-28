import { createStore } from "vuex"
import getters from "./getters.js";

const modulesFiles = import.meta.globEager("./modules/*.js");
const modules = {};

Object.keys(modulesFiles)
    .forEach((path) => {
        const moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
        modules[moduleName] = modulesFiles[path].default;
    })

const store = createStore({
    modules,
    getters
})

export default store;