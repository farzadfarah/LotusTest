import { createStore /*, createLogger */ } from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// modules
import authModule from "./auth/moduleAuth";
import configModule from "./config/moduleConfig";
import moduleMain from "./main/moduleMain";

//const debug = process.env.NODE_ENV !== "production";

export default createStore({
  namespaced: true,
  getters,
  mutations,
  state,
  actions,
  // modules
  modules: {
    authModule,
    configModule,
    moduleMain,
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : [],
});
