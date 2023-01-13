import axios from "axios";
//import axios from "../../axios/axiosAuth";
//import store from "../../../store/state.js";
//import router from "@/router/router";

axios.defaults.baseURL =
  localStorage.getItem("baseUrl") || import.meta.env.VITE_APP_BASEURL;

export default {
  init() {
    axios.defaults.baseURL =
      localStorage.getItem("baseUrl") || import.meta.env.VITE_APP_BASEURL;
    /*axios.interceptors.request.use(
      (config) => {
        if (localStorage.getItem("accessToken")) {
          config.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("accessToken");
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      function (response) {
        if (response.status === 401) {
          router.push("/auth/logout");
        }

        if (localStorage.getItem("accessToken")) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("accessToken");
        }

        return response;
      },
      function (error) {
        const { response } = error;

        if (response.status === 401) {
          router.push("/auth/logout");
        }

        if (String(error).includes("Network Error")) {
          return Promise.reject(
            new Error("Please Check Your Network Connection...")
          );
        }

        if (!response.data.error)
          response.data["error"] = { message: response.data.result };

        return Promise.reject(response);
      }
    );*/
  },

  login(data) {
    return axios.post("Account/Authenticate", data, {
      headers: {
        Authorization: null,
      },
    });
  },

  loginAsDemoUser(data) {
    return axios.get("Account/LoginAsDemoUser", { params: data });
  },

  /*refreshToken() {
    return axios.post("api/TokenAuth/RefreshToken", {
      //client_user: "pppanel_user",
      //client_secret: "hkMg6ldsffevahredigokd%%dfg##ghfgh&&fd",
      //redirect_uri: "home",
      //grant_type: "refresh_token",
      refreshToken: localStorage.getItem("refresh_token"),
    });
  },*/

  newToken(token) {
    return axios.post("/api/v1/token/token", {
      client_user: "pppanel_user",
      client_secret: "hkMg6ldsffevahredigokd%%dfg##ghfgh&&fd",
      redirect_uri: "home",
      grant_type: "authorization_code",
      code: token,
    });
  },

  register(data) {
    return axios.post("Account/Register", data, {
      headers: {
        Authorization: null,
      },
    });
  },

  verificationUser(data) {
    return axios.post("Account/VerificationUser", data, {
      headers: {
        Authorization: null,
      },
    });
  },

  resendVerificationCode(data) {
    return axios.post("Account/ResendVerificationCode", data, {
      headers: {
        Authorization: null,
      },
    });
  },

  GetDomainSetting() {
    // console.log(`my host name is ${location.hostname}`);

    let domainSettingApi = "";
    if (location.hostname.includes("test"))
      domainSettingApi = import.meta.env.VITE_APP_BASEURL_FOR_TEST_DOMAIN;
    else domainSettingApi = import.meta.env.VITE_APP_BASEURL;

    return axios.get(domainSettingApi + "api/Setting/GetDomainSetting", {
      headers: {
        Authorization: null,
      },
    });
  },

  GetAccessTokenValidateTime(data) {
    return axios.post("Account/GetAccessTokenValidateTime", null, {
      params: data,
      headers: { Authorization: null },
    });
  },

  RefreshToken(data) {
    return axios.get("Account/RefreshToken", {
      params: data,
      headers: {
        Authorization: null,
      },
    });
  },

  GetSettingExpiry(data) {
    return axios.get("api/setting/GetSettingExpiry", {
      params: data,
      headers: {
        Authorization: null,
      },
    });
  },
};
