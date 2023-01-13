import state from "./moduleConfigState";
import mutations from "./moduleConfigMutations";
import actions from "./moduleConfigActions";
import getters from "./moduleConfigGetters";

export default {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters,
};
