import axiosMain from "../../http/request/main/index";
import authAxios from "../../http/request/auth/index";

const actions = {
  /*getBetSlipData({ commit }) {
    return new Promise((resolve, reject) => {
      axiosMain.getBetSlipData().then((response) => {
        if (response.data.resultCode == 200) {
          commit("SET_BETSLIP_DATA", response.data.Data);

          resolve(response);
        } else {
          reject({ message: response });
          }
        })
        .catch((error) => {
          reject({ message: error.data.error.message });
        });
    });
  },*/

  setUserBetSlip({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axiosMain
        .setUserBetSlip(payload)
        .then((response) => {
          if (response.data.success == true) {
            commit("SET_BETSLIP_DATA", payload);

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

  getDomainSetting({ commit }, payload) {
    return new Promise((resolve, reject) => {
      authAxios
        .GetDomainSetting(payload)
        .then((response) => {
          if (response.data.success == true) {
            commit("SET_DOMAIN_SETTINGS", response.data.result);

            if (response.data.result.baseUrl)
              localStorage.setItem("baseUrl", response.data.result?.baseUrl);
            //localStorage.setItem("baseUrl", "https://testapi.teslaexch.com/");
            else localStorage.removeItem("baseUrl");

            localStorage.setItem(
              "domainSetting",
              JSON.stringify(response.data.result)
            );

            localStorage.setItem(
              "siteSuspended",
              response.data.result.siteSuspended
            );

            resolve(response);
          } else {
            localStorage.setItem("siteSuspended", true);

            reject(response);
          }
        })
        .catch((error) => {
          localStorage.setItem("siteSuspended", true);
          reject({
            message: error?.data ? error.data.error.message : error.message,
          });
        });
    });
  },
};

export default actions;
