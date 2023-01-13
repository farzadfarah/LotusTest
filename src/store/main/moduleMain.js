import axios from "../../http/axios/axiosMain";
import mainAxios from "../../http/request/main/index";
//import evenHub from "../../eventsHub2";

const state = {
  events: [],
  openbetsObj: {},
  profitloss: [],
  changedprofitloss: 0,
  pins: [],
  showSearch: false,
  showVideoBox: false,
  showWalletBox: false,
  activityLog: [],
  showfilterbox: false,
  searchText: "",
  confirmBeforePlaceBet: localStorage.getItem("confirmBeforePlaceBet") || false,
};

const getters = {
  getAllEvents: (state) => {
    return state.events.sort((a, b) => (a.order > b.order ? 1 : -1));
  },
  getActivityLog: (state) => {
    return state.activityLog;
  },
  getEventsBySportName: (state) => (sport) => {
    //console.log(
    //  "sport:",
    //  state.events.find((p) => p.name == sport)
    //);
    return state.events.find((p) => p.name == sport)?.events;
  },

  getInplayEvents: (state) => {
    let inplays = [];
    state.events.forEach((sport) => {
      let eventsOfSport = [];
      sport.events.forEach((game) => {
        if (game.status == "IN_PLAY" || game.matchDate == "In-Play") {
          eventsOfSport.push(game);
        }
      });

      if (eventsOfSport.length > 0) {
        let e = JSON.parse(JSON.stringify(sport));
        e["events"] = [];
        e["events"] = eventsOfSport;
        inplays.push(e);
      }
    });

    return inplays;
  },

  getTwoEventsOfSports: (state) => {
    let twoEvt = [];

    state.events.map((sport) => {
      let eventsOfSport = [];
      let i = 0;
      sport.events.filter((game) => {
        if (i < 2) {
          eventsOfSport.push(game);
          i++;
        }
      });

      if (eventsOfSport.length > 0) {
        let e = JSON.parse(JSON.stringify(sport));
        e["events"] = [];
        e["events"] = eventsOfSport;
        twoEvt.push(e);
      }
    });

    return twoEvt;
  },

  getEventById: (state) => (eventId) => {
    if (eventId) {
      let eventCurrent = null;
      state.events.map((sport) => {
        sport.events.map((e) => {
          if (e.id == eventId) eventCurrent = e;
        });
      });

      return eventCurrent;
    }
    return null;
  },
  getEventByTitle: (state) => (eventTitle) => {
    if (eventTitle) {
      let eventCurrent = [];
      state.events.map((sport) => {
        sport.events.map((e) => {
          if (e.title.toLowerCase().includes(eventTitle.toLowerCase()))
            eventCurrent.push(e);
        });
      });

      return eventCurrent;
    }
    return null;
  },
  getOpenBets: (state) => {
    return state.openbetsObj;
  },

  getOpenBetsByEventId: (state) => (eventId) => {
    if (eventId) {
      if (state.openbetsObj && state.openbetsObj.openBets)
        return state.openbetsObj.openBets.filter((p) => p.eventId == eventId);
      return [];
    } else return [];
  },

  getProfitloss: (state) => {
    return state.profitloss;
  },

  getProfitlossByEventId: (state) => (eventId) => {
    if (eventId) {
      let prof = [];
      state.profitloss.forEach((p) => {
        if (p.eventId == eventId) prof.push(p);
      });
      return prof;
    } else return [];
  },

  pinList: (state) => {
    return state.pins;
  },

  getPinedEvents: (state) => {
    let pineds = [];
    state.events.forEach((sport) => {
      let eventsOfSport = [];
      sport.events.forEach((game) => {
        if (game.pin == true) {
          eventsOfSport.push(game);
        }
      });

      if (eventsOfSport.length > 0) {
        let e = JSON.parse(JSON.stringify(sport));
        e["events"] = [];
        e["events"] = eventsOfSport;
        pineds.push(e);
      }
    });

    return pineds;
  },

  getWalletBoxStatus: (state) => {
    return state.showWalletBox;
  },

  getfilterbox: (state) => {
    return state.showfilterbox;
  },

  getEventsByFilterBox: (state) => {
    if (state.searchText) {
      let eventCurrent = [];
      state.events.map((sport) => {
        sport.events.map((e) => {
          if (e.title.toLowerCase().includes(state.searchText.toLowerCase()))
            eventCurrent.push(e);
        });
      });

      return eventCurrent;
    }
    return [];
  },

  getConfirmBeforePlaceBet: (state) => {
    return state.confirmBeforePlaceBet;
  },
};

const actions = {
  getActivityLog({ state }, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetActivityLog(payload)
        .then((response) => {
          //console.log("response: ", response);
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
  getBySportName(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetBySportName(payload)
        .then((response) => {
          //console.log("response: ", response);
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

  getSportWithEventTree({ commit }, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetSportWithEventTree(payload)
        .then((response) => {
          //console.log("response: ", response);
          if (response.data.success == true) {
            commit("SET_EVENTS", response.data.result);
            localStorage.setItem(
              "TreeSportWithEvent",
              JSON.stringify(response.data.result)
            );
            resolve(response);
          } else {
            reject({ message: response.data.error.message });
          }
        })
        .catch((error) => {
          //console.log("error: ", error);
          reject(error);
        });

      /*evenHub.connection.on("BroadcastTreeSportWithEvent", (data) => {
        try {
          //console.log("BroadcastTreeSportWithEvent Called :)", data);
          commit("SET_EVENTS", data);
          resolve(data);
        } catch (err) {
          reject(err);
        }
      });*/
    }).finally(() => {
      document.getElementById("loading").style.display = "none";
    });
  },

  getByEventId(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetByEventId(payload)
        .then((response) => {
          //console.log("response: ", response);
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

  getUserOdds(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetUserOdds(payload)
        .then((response) => {
          //console.log("getUserOdds response: ", response);
          if (response.data.success == true) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          //console.log("getUserOdds error: ", error);
          reject(error);
        });
    });
  },

  closest(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .Closest(payload)
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
  setSearchVisibility({ commit }, payload) {
    commit("SET_SHOWSEARCH", payload);
  },
  placeBet(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .PlaceBet(payload)
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

  /*setOpenBets({ commit }) {
    const payload = [
      {
        betId: 1,
        eventId: 321,
        betTitle: "Sri lanka",
        //market: "Cricket India v New ZealandMatch Odds",
        sportId: 1,
        teameName1: "US",
        teameName2: "Sri lanka",
        marketStr: "Match Odds",
        type: "Back",
        odds: 2,
        stake: 200,
        profitLoss: 110,
        betPlaced: "2021-09-28 21:16:02",
        oddsReq: "2021-09-28 21:16:02",
        dateMatched: "2021-09-28 21:16:02",
        fancyValue: 0,
        runnerId: 0,
        marketId: 0,
      },
      {
        betId: 2,
        eventId: 102,
        betTitle: "New ZealandMatch",
        sportId: 1,
        teameName1: "India",
        teameName2: "New ZealandMatch",
        marketStr: "Bookmaker",
        type: "Lay",
        odds: 5,
        stake: 500,
        profitLoss: 520,
        betPlaced: "2021-09-28 21:16:02",
        oddsReq: "2021-09-28 21:16:02",
        dateMatched: "2021-09-28 21:16:02",
      },
      {
        betId: 3,
        eventId: 102,
        betTitle: "India",
        sportId: 1,
        teameName1: "India",
        teameName2: "New ZealandMatch",
        marketStr: "Bookmaker",
        type: "Lay",
        odds: 6,
        stake: 600,
        profitLoss: 660,
        betPlaced: "2021-09-28 21:16:02",
        oddsReq: "2021-09-28 21:16:02",
        dateMatched: "2021-09-28 21:16:02",
      },
    ];

    return new Promise((resolve ) => {

      commit("SET_OPEN_BETS", payload);

      resolve();
      
    });
  },*/

  getUserExpectedProfitLoss({ commit }, context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetUserExpectedProfitLoss(payload)
        .then((response) => {
          if (response.data.success == true) {
            commit("SET_Profiloss", response.data.result);

            localStorage.setItem(
              "ProfitLoss",
              JSON.stringify(response.data.result)
            );
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

  getUserOpenBets({ commit }, context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetUserOpenBets(payload)
        .then((response) => {
          if (response.data.success == true) {
            commit("SET_OPEN_BETS", response.data.result);
            localStorage.setItem(
              "OpenBets",
              JSON.stringify(response.data.result)
            );
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

  changedProfitlossAction({ commit }) {
    commit("CHANGED_PROFITLOSS", new Date().getTime());
  },

  getScoreCard(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetScoreCard(payload)
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

  getUserBetHistory(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetUserBetHistory(payload)
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

  getTransactionHistory(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetTransactionHistory(payload)
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

  getBetTransactionHistoryDetail(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetBetTransactionHistoryDetail(payload)
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

  getSetting(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetSetting(payload)
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

  storeImage(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .StoreImage(payload)
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

  depositWithdrawalCreate(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .CreateRequestForDepositWithdrawal(payload)
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

  getGames(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetGames(payload)
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

  playerRequests(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .PlayerRequests(payload)
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

  getGrid(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetGrid(payload)
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

  GetUserLimits(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .GetUserLimits(payload)
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

  changePassword(context, payload) {
    return new Promise((resolve, reject) => {
      mainAxios
        .ChangePassword(payload)
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

  updatePin({ commit }, payload) {
    commit("UPDATE_PINS", payload);
  },

  updateVideoBoxToggle({ commit }, payload) {
    commit("VIDEO_BOX_TOGGLE", payload);
  },

  updateWalletToggle({ commit }, payload) {
    commit("WALLET_TOGGLE", payload);
  },

  updatefilterbox({ commit }, payload) {
    commit("UPDATE_FILTER_BOX", payload);
  },

  updateSearchText({ commit }, payload) {
    commit("UPDATE_SEARCH_TEXT", payload);
  },

  updateConfirmBeforePlaceBet({ commit }, payload) {
    commit("UPDATE_CONFIRM_BEFORE_PLACEBET", payload);
  },
};

//////////////////////////////////////////////////////////////////////////////

const mutations = {
  SET_BEARER(state, accessToken) {
    //if (!accessToken) accessToken = localStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    //axios.defaults.headers.common["Authorization"] =
    //  "Bearer " + localStorage.getItem("accessToken");
  },

  SET_EVENTS(state, allEvents) {
    if (
      localStorage.getItem("pins") != null &&
      localStorage.getItem("pins") != undefined &&
      localStorage.getItem("pins") != ""
    ) {
      let selectedPins = JSON.parse(localStorage.getItem("pins"));
      if (selectedPins.length > 0) {
        state.pins = selectedPins;
      }
    }

    allEvents.map((m) => {
      m.events.map((ev) => {
        ev["sportId"] = m.id;
        ev["sportName"] = m.name;
        if (state.pins.indexOf(ev.id) > -1) {
          ev["pin"] = true;
        } else {
          ev["pin"] = false;
        }
      });

      // ------------- for order ------------

      if (m.name == "tennis") m["order"] = 3;
      else if (m.name == "cricket") m["order"] = 1;
      else if (m.name == "football") m["order"] = 2;
      else if (m.name == "football") m["order"] = 4;
    });
    state.events = allEvents;
  },

  SET_OPEN_BETS(state, openbets) {
    state.openbetsObj = openbets;
  },

  SET_Profiloss(state, profitloss) {
    state.profitloss = profitloss;
  },

  CHANGED_PROFITLOSS(state, val) {
    state.changedprofitloss = val;
  },

  UPDATE_PINS(state, val) {
    state.events.map((m) => {
      m.events.map((ev) => {
        if (val == ev.id) {
          if (ev["pin"] == true) {
            ev["pin"] = false;

            let index = state.pins.indexOf(val);
            if (index > -1) {
              state.pins.splice(index, 1);
            }
            localStorage.setItem("pins", JSON.stringify(state.pins));
          } else {
            ev["pin"] = true;

            state.pins.push(ev.id);
            localStorage.setItem("pins", JSON.stringify(state.pins));
          }
        }
      });
    });
  },

  SET_SHOWSEARCH(state, val) {
    state.showSearch = val;
  },

  VIDEO_BOX_TOGGLE(state, val) {
    state.showVideoBox = !state.showVideoBox;
  },

  WALLET_TOGGLE(state, val) {
    state.showWalletBox = val;
  },

  UPDATE_FILTER_BOX(state, val) {
    state.showfilterbox = !state.showfilterbox;
  },

  UPDATE_SEARCH_TEXT(state, val) {
    state.searchText = val;
  },

  UPDATE_CONFIRM_BEFORE_PLACEBET(state, val) {
    state.confirmBeforePlaceBet = val;
    localStorage.setItem("confirmBeforePlaceBet", val);
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
