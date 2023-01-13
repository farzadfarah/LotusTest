const actions = {
  setSliderShow({ commit }, value) {
    commit("SET_SIDEBAR_SHOW", value);
  },

  setImageSliderHeader({ commit }, value) {
    commit("SET_SHOW_IMAGESLIDER_HEADER", value);
  },

  setNewsBoxMarquee({ commit }, value) {
    commit("SET_SHOW_NEWSBOXMARQUEE", value);
  },

  setNavbarScrollabel({ commit }, value) {
    commit("SET_SHOW_NAVBARSCROLLABEL", value);
  },

  setNavBackToSports({ commit }, value) {
    commit("SET_SHOW_NAVBACK_TO_SPORTS", value);
  },

  setAllTopHeader({ commit }, value) {
    commit("SET_ALL_TOP_HEADER", value);
  },

  setOverlay({ commit }, value) {
    commit("SET_OVERLAY", value);
  },
};

export default actions;
