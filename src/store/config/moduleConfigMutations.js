const mutations = {
  SET_BETSLIP_DATA(state, betslipdata) {
    state.BetSlipData = betslipdata;
  },

  SET_DOMAIN_SETTINGS(state, payload) {
    state.domainSettings = payload;
  },
};

export default mutations;
