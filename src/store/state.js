import themeConfig from "../themeConfig";

const userDefaults = {
  displayName: "abc", // From Auth

  userRole: "admin",
};

const getUserInfo = () => {
  let userInfo = {};

  Object.keys(userDefaults).forEach((key) => {
    userInfo[key] = userDefaults[key];
  });

  return userInfo;
};

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
  AppActiveUser: getUserInfo(),
  mainLayoutType: themeConfig.mainLayoutType || "vertical",
  theme: themeConfig.theme || "light",
  themeColor: themeConfig.colors.primary,
  images: themeConfig.images,
  sidebarShow: true,
  showImageSliderHeader: false,
  showNewsBoxMarquee: true,
  showNavbarScrollabel: true,
  showNavBackToSports: false,
  allTopHeader: true,
  overlay: false,
  showFooter: true,
};

export default state;
