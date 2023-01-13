// import router from "@/router/router";
import axios from "../../http/axios/axiosMain.js";
import authAxios from "../../http/request/auth/index";

const user = localStorage.getItem("userinfo");
const initialUserInfo = user
  ? { status: { loggedIn: true }, user: JSON.parse(user) }
  : { status: { loggedIn: false }, user: null };

const state = {
  isUserLoggedIn: () => {
    return initialUserInfo.status.loggedIn;
  },

  userinfo: initialUserInfo.user,
  registerUserData: {},
};

const getters = {
  isUserLoggedIn: (state) => state.isUserLoggedIn(),

  registerInfo(state) {
    return state.registerUserData;
  },

  userinfo(state) {
    return state.userinfo;
  },
};

const actions = {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .login(payload)
        .then((response) => {
          if (response.data.success == true) {
            localStorage.setItem(
              "accessToken",
              response.data.result.accessToken
            );
            localStorage.setItem(
              "refresh_token",
              response.data.result.refreshToken
            );
            localStorage.setItem(
              "expire_in",
              response.data.result.expireInSeconds
            );

            // token expire time
            const expiryTime =
              Date.now() + response.data.result.expireInSeconds * 1000;
            localStorage.setItem("expire_DateTime", expiryTime);
            //

            const userdata = response.data.result;
            userdata["username"] = payload.userNameOrEmailAddress;

            localStorage.setItem("userinfo", JSON.stringify(userdata));

            localStorage.setItem("casinoToken", userdata.casinoToken);

            // Set bearer token in axios
            //mutations.SET_BEARER(state, response.data.result.accessToken);
            commit("SET_BEARER", response.data.result.accessToken);

            commit("UPDATE_USER_INFO", userdata);

            if (userdata.stakes && userdata.stakes.length > 0)
              commit("configModule/SET_BETSLIP_DATA", userdata.stakes, {
                root: true,
              });

            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  loginAsDemoUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .loginAsDemoUser(payload)
        .then((response) => {
          if (response.data.success == true) {
            localStorage.setItem(
              "accessToken",
              response.data.result.accessToken
            );
            localStorage.setItem(
              "refresh_token",
              response.data.result.refreshToken
            );
            localStorage.setItem(
              "expire_in",
              response.data.result.expireInSeconds
            );

            // token expire time
            const expiryTime =
              Date.now() + response.data.result.expireInSeconds * 1000;
            localStorage.setItem("expire_DateTime", expiryTime);
            //

            const userdata = response.data.result;
            userdata["username"] = "Demo"; //payload.userNameOrEmailAddress;

            localStorage.setItem("userinfo", JSON.stringify(userdata));

            localStorage.setItem("casinoToken", userdata.casinoToken);

            // Set bearer token in axios
            //mutations.SET_BEARER(state, response.data.result.accessToken);
            commit("SET_BEARER", response.data.result.accessToken);

            commit("UPDATE_USER_INFO", userdata);

            if (userdata.stakes && userdata.stakes.length > 0)
              commit("configModule/SET_BETSLIP_DATA", userdata.stakes, {
                root: true,
              });

            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  logout({ commit }) {
    let baseUrl = localStorage.getItem("baseUrl");

    localStorage.clear();

    if (baseUrl) localStorage.setItem("baseUrl", baseUrl);

    commit("UPDATE_USER_INFO", null);
  },

  fetchAccessToken() {
    return new Promise((resolve) => {
      authAxios.refreshToken().then((response) => {
        resolve(response);
      });
    });
  },

  updateInReload({ commit, dispatch }) {
    if (
      localStorage.getItem("expire_DateTime") != "" &&
      localStorage.getItem("expire_DateTime") != null
    ) {
      const now = Date.now();
      let expire_DateTime = localStorage.getItem("expire_DateTime");
      //expire_DateTime = new Date(expire_DateTime) / 1000;

      if (now > expire_DateTime) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userinfo");
        localStorage.removeItem("expire_in");
        localStorage.removeItem("expire_DateTime");
        localStorage.removeItem("OpenBets");
        localStorage.removeItem("ProfitLoss");
        localStorage.removeItem("balance");
        localStorage.removeItem("exposure");
        commit("UPDATE_USER_INFO", null);

        delete axios.defaults.headers.common["Authorization"];
      } else {
        const token = localStorage.getItem("accessToken");
        if (token) commit("SET_BEARER", token);

        let userdata = null;
        if (localStorage.getItem("userinfo")) {
          userdata = JSON.parse(
            JSON.stringify(localStorage.getItem("userinfo"))
          );

          if (userdata.stakes && userdata.stakes.length > 0)
            commit("configModule/SET_BETSLIP_DATA", userdata.stakes, {
              root: true,
            });

          if (localStorage.getItem("OpenBets")) {
            commit(
              "moduleMain/SET_OPEN_BETS",
              JSON.parse(localStorage.getItem("OpenBets")),
              {
                root: true,
              }
            );
          } else {
            if (localStorage.getItem("accessToken")) {
              dispatch("moduleMain/getUserOpenBets", null, {
                root: true,
              });
            }
          }
          //
          if (localStorage.getItem("ProfitLoss")) {
            //console.log(localStorage.getItem("ProfitLoss"));
            commit(
              "moduleMain/SET_Profiloss",
              JSON.parse(localStorage.getItem("ProfitLoss")),
              {
                root: true,
              }
            );
          } else
            dispatch("moduleMain/getUserExpectedProfitLoss", null, {
              root: true,
            });
        }
      }
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userinfo");
      localStorage.removeItem("expire_in");
      localStorage.removeItem("expire_DateTime");
      localStorage.removeItem("OpenBets");
      localStorage.removeItem("ProfitLoss");

      commit("UPDATE_USER_INFO", null);

      delete axios.defaults.headers.common["Authorization"];
    }
  },

  register({ commit }, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .register(payload)
        .then((response) => {
          if (response.data.success == true) {
            //localStorage.setItem(
            //  "accessToken",
            //  response.data.result.accessToken
            //);

            commit("SET_REGISTER_DATA", {
              username: payload.userName,
              mobile: payload.mobile,
              domain: response.data.result.domain,
            });

            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  verificationUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .verificationUser(payload)
        .then((response) => {
          if (response.data.success == true) {
            // Before Register Generate Auth Token
            localStorage.setItem(
              "accessToken",
              response.data.result.accessToken
            );
            localStorage.setItem(
              "refresh_token",
              response.data.result.refreshToken
            );
            localStorage.setItem(
              "expire_in",
              response.data.result.expireInSeconds
            );
            // token expire time
            const expiryTime =
              Date.now() + response.data.result.expireInSeconds * 1000;
            localStorage.setItem("expire_DateTime", expiryTime);
            //

            const userdata = response.data.result;
            userdata["username"] = payload.userName;

            localStorage.setItem("userinfo", JSON.stringify(userdata));

            localStorage.setItem("casinoToken", userdata.casinoToken);

            commit("SET_BEARER", response.data.result.accessToken);

            commit("UPDATE_USER_INFO", userdata);

            if (userdata.stakes && userdata.stakes.length > 0)
              commit("configModule/SET_BETSLIP_DATA", userdata.stakes, {
                root: true,
              });

            commit("SET_REGISTER_DATA", {
              username: payload.userName,
              mobile: payload.mobile,
              domain: response.data.result.domain,
            });

            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  resendVerificationCode(context, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .resendVerificationCode(payload)
        .then((response) => {
          if (response.data.success == true) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getAccessTokenValidateTime(context, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .GetAccessTokenValidateTime(payload)
        .then((response) => {
          if (response.data.success == true) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  refreshToken({ commit }, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .RefreshToken(payload)
        .then((response) => {
          if (response.data.success == true) {
            localStorage.setItem(
              "accessToken",
              response.data.result.accessToken
            );

            localStorage.setItem(
              "expire_in",
              response.data.result.expireInSeconds
            );
            // token expire time
            const expiryTime =
              Date.now() + response.data.result.expireInSeconds * 1000;
            localStorage.setItem("expire_DateTime", expiryTime);
            //

            commit("SET_BEARER", response.data.result.accessToken);

            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getSettingExpiry(context, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .GetSettingExpiry(payload)
        .then((response) => {
          if (response.data.success == true) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const mutations = {
  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    //axios.defaults.headers.common["Authorization"] =
    //  "Bearer " + localStorage.getItem("accessToken");
  },

  SET_REGISTER_DATA(state, data) {
    state.registerUserData = data;
  },

  UPDATE_USER_INFO(state, userinfo) {
    state.userinfo = userinfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
