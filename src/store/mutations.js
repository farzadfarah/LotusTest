const mutations = {
  setTheme(state, theme) {
    state.theme = theme;
  },

  setThemeColor(state, color) {
    state.themeColor = color;
  },

  setImages(state, image) {
    state.images = image;
  },

  SET_SIDEBAR_SHOW(state, sidebarShow) {
    state.sidebarShow = sidebarShow;
  },

  SET_SHOW_IMAGESLIDER_HEADER(state, payload) {
    state.showImageSliderHeader = payload;
  },

  SET_SHOW_NEWSBOXMARQUEE(state, payload) {
    state.showNewsBoxMarquee = payload;
  },

  SET_SHOW_NAVBARSCROLLABEL(state, payload) {
    state.showNavbarScrollabel = payload;
  },

  SET_SHOW_NAVBACK_TO_SPORTS(state, payload) {
    state.showNavBackToSports = payload;
  },

  SET_ALL_TOP_HEADER(state, payload) {
    state.allTopHeader = payload;
  },

  SET_OVERLAY(state, payload) {
    state.overlay = payload;
  },
};

export default mutations;
