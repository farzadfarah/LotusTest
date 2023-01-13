import axios from "axios";
//import axios from "../../axios/axiosMain";
//import store from "../../../store/store.js";
import router from "@/router/router";

axios.defaults.baseURL =
  localStorage.getItem("baseUrl") || import.meta.env.VITE_APP_BASEURL;

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("accessToken");

export default {
  init() {
    axios.interceptors.request.use(
      (config) => {
        if (
          config.url != "Odds/GetUserOdds" &&
          config.url != "Event/TreeSportWithEvent" &&
          config.url != "Bet/GetUserExpectedProfitLoss" &&
          config.url != "Bet/GetUserOpenBets" &&
          config.url != "Bet/PlaceBet" &&
          config.url != "Odds/GetUserLimits" &&
          !config.url.includes("Odds/GetUserOdds") &&
          !config.url.includes("api2.dbm9.com/api/tv-stream") &&
          !config.url.includes("score-session.dbm9.com/api") &&
          !config.url.includes("api.ipify.org/") &&
          config.url != "api/services/app/Sport/GetScoreCard"
        ) {
          document.getElementById("loading").style.display = "block";
        }

        config.baseURL =
          localStorage.getItem("baseUrl") || import.meta.env.VITE_APP_BASEURL;

        if (localStorage.getItem("accessToken")) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorage.getItem("accessToken");
        }

        return config;
      },
      (error) => {
        document.getElementById("loading").style.display = "none";
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      function (response) {
        document.getElementById("loading").style.display = "none";
        //const { config } = response;
        //const originalRequest = config;

        if (response.data.status == 401) {
          router.push("/Auth/Logout");
        }

        if (response.data.status == 500) {
          /*if (!isAlreadyFetchingAccessToken) {
            isAlreadyFetchingAccessToken = true;
            store
              .dispatch("authModule/fetchAccessToken")
              .then((access_token) => {
                isAlreadyFetchingAccessToken = false;

                if (response.data.success == true) {
                  onAccessTokenFetched(access_token.data.result.accessToken);
                }
                //onAccessTokenFetched(access_token);
              });
          }

          const retryOriginalRequest = new Promise((resolve) => {
            addSubscriber((access_token) => {
              store.commit("mainModule/SET_BEARER", access_token);
              originalRequest.headers.Authorization = "Bearer " + access_token;

              resolve(axios(originalRequest));
            });
          });

          return retryOriginalRequest;*/
        }

        return response;
      },

      function (error) {
        document.getElementById("loading").style.display = "none";
        // const { config, response: { status } } = error
        const { /*config,*/ response } = error;
        //const originalRequest = config;

        if (
          response &&
          response.status == 401 &&
          response.config.url != "Account/Authenticate"
        ) {
          router.push("/Auth/Logout");
        }

        if (response && response.status == 500) {
          if (!response.data?.error) {
            response.data = {
              error: {
                message:
                  response.data ||
                  response.statusText ||
                  "Internal Server Error",
              },
            };
          }
        }

        if (String(error).includes("Network Error")) {
          return Promise.reject(
            new Error("Please Check Your Network Connection...")
          );
        }

        if (!response.data.error) {
          if (response.data == "") {
            response.data = {};
          }
          response.data["error"] = { message: response.data.result };
        }

        return Promise.reject(response);
      }
    );
  },

  //getBetSlipData() {
  //  return axios.post("/api/Settings/GetBetSlipByUserId");
  //},

  setUserBetSlip(data) {
    return axios.post("UserStake/Add", data);
  },

  GetActivityLog(data) {
    return axios.post(
      `Account/GetUserLoginAttempts?Result=${data.Result}&MaxResultCount=${data.MaxResultCount}&SkipCount=${data.SkipCount}`
    );
  },
  GetBySportName(data) {
    return axios.get("event/GetBySportName", { params: data });
  },

  GetSportWithEventTree(data) {
    /*let sportWithEventTreeApi = "";
    if (location.hostname.includes("test"))
      sportWithEventTreeApi = import.meta.env.VITE_APP_BASEURL_FOR_TEST_DOMAIN;
    else sportWithEventTreeApi = import.meta.env.VITE_APP_BASEURL;*/

    return axios.get(/*sportWithEventTreeApi + */ "Event/TreeSportWithEvent", {
      params: data,
    });
  },

  GetByEventId(data) {
    return axios.get("Market/GetByEventId", { params: data });
  },

  GetUserOdds(data) {
    return axios.get(
      /*import.meta.env.VITE_APP_BASEURL + */ "Odds/GetUserOdds",
      {
        params: data,
      }
    );
  },

  Closest(data) {
    return axios.get("Event/Closest", { params: data });
  },

  PlaceBet(data) {
    return axios.post("Bet/PlaceBet", data);
  },

  GetUserExpectedProfitLoss(data) {
    return axios.get("Bet/GetUserExpectedProfitLoss", { params: data });
  },

  GetUserOpenBets(data) {
    if (localStorage.getItem("accessToken")) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("accessToken");
    }
    return axios.get("Bet/GetUserOpenBets", { params: data });
  },

  GetScoreCard(data) {
    return axios.get("api/services/app/Sport/GetScoreCard", { params: data });
  },

  GetUserBetHistory(data) {
    //api/services/app/Bet/GetUserBetHistory
    return axios.get("api/services/app/Bet/GetUserBetHistory", {
      params: data,
    });
  },

  GetTransactionHistory(data) {
    return axios.get("Transaction/GetHistory", {
      params: data,
    });
  },

  GetBetTransactionHistoryDetail(data) {
    return axios.get("Transaction/GetDetail", {
      params: data,
    });
  },

  GetSetting(data) {
    return axios.get("Setting/GetSetting", {
      params: data,
    });
  },

  StoreImage(data) {
    return axios.post("Setting/StoreImage", data);
  },

  CreateRequestForDepositWithdrawal(data) {
    /*return axios.post(
      "https://cdn.strikexch9.com/Setting/CreateRequestForDepositWithdrawal",
      data
    );*/
    return axios.post(
      "DepositWithdrawal/CreateRequestForDepositWithdrawal",
      data
    );
  },

  GetGames(data) {
    return axios.get("api/InternationalCasino/GetGames", {
      params: data,
    });
  },

  PlayerRequests(data) {
    return axios.post("DepositWithdrawal/PlayerRequests", data);
  },

  GetGrid(data) {
    return axios.post("DepositWithdrawal/GetDepositWithdrawals", data);
  },

  GetUserLimits(data) {
    return axios.get("Odds/GetUserLimits", { params: data });
  },

  ChangePassword(data) {
    return axios.post("Account/changePassword", data);
  },
};
