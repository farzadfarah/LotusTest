import store from "@/store/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () => import("@/layouts/main/Main.vue"),
    meta: {
      /*requiresAuth: true*/
    },
    children: [
      {
        path: "",
        redirect: "/inplay",
      },

      /*{
        path: "/home",
        name: "home",
        component: () => import("@/views/pages/Home.vue"),
        meta: { title: "Home" },
      },*/

      {
        path: "/index",
        name: "index",
        component: () => import("@/views/pages/Index.vue"),
        meta: { title: "Index" },
      },

      {
        path: "/inplay",
        name: "inplay",
        component: () => import("@/views/pages/Inplay.vue"),
        meta: { title: "Inplay" },
      },

      {
        path: "/markets/:eventid?",
        name: "Markets",
        component: () => import("@/views/pages/markets/Markets.vue"),
        // beforeEnter: checkAuth,
        meta: {
          //requiresAuth: true,
          title: "Markets",
        },
      },

      {
        path: "/matchlist/:id",
        name: "matchlist",
        component: () => import("@/views/pages/Match-list.vue"),
        meta: {
          title: "Match List",
        },
      },
      {
        path: "/my-markets",
        name: "My-Markets",
        component: () => import("@/views/pages/MyMarkets.vue"),
        meta: {
          requiresAuth: true,
          title: "My Markets",
        },
      },
      {
        path: "/open-bets",
        name: "open-bets",
        component: () =>
          import(
            "../views/pages/markets/child-cmp/betts/open-bets/OpenBetsPage.vue"
          ),
        meta: {
          requiresAuth: true,
          title: "Open Bets",
        },
      },
      {
        path: "/rule-regulations",
        name: "/rule-regulations",
        component: () => import("../views/pages/RuleRegulations.vue"),
        meta: {
          requiresAuth: true,
          title: "Rule Regulations",
        },
      }, {
        path: "/exclusion-policy",
        name: "/exclusion-policy",
        component: () => import("../views/pages/ExclusionPolicy.vue"),
        meta: {
          requiresAuth: true,
          title: "Exclusion Policy",
        },
      }, {
        path: "/responsible-gaming",
        name: "/responsible-gaming",
        component: () => import("../views/pages/ResponsibleGame.vue"),
        meta: {
          requiresAuth: true,
          title: "Responsible Gaming",
        },
      },
      {
        path: "/settings-stake",
        name: "Settings-Stake",
        component: () => import("@/views/pages/StakeInMobile.vue"),
        meta: {
          requiresAuth: true,
          title: "Settings Stake",
        },
      },
      // {
      //   path: "/casino",
      //   name: "casino",
      //   component: () => import("@/views/pages/casino/Casino.vue"),
      //   meta: {
      //     requiresAuth: true,
      //     title: "Casino",
      //   },
      //   beforeEnter: (to, from) => {
      //     if (store.getters["configModule/domainSettings"]?.casino == false) {
      //       return from;
      //     }
      //   },
      // },
      {
        path: "/underConstruction",
        name: "UnderConstruction",
        component: () =>
          import("@/views/pages/under-construction/UnderConstruction.vue"),
        meta: {
          title: "Under Construction",
        },
      },
      // {
      //   path: "/lotus",
      //   name: "lotus",
      //   component: () => import("@/views/pages/lotus/Lotus.vue"),
      //   meta: {
      //     requiresAuth: true,
      //     title: "Lotus",
      //   },
      // },
      //
      /*{
        path: "/account/my-profile",
        name: "my-profile",
        component: () => import("@/views/pages/account/MyProfile.vue"),
        meta: {
          title: "My Profile",
        },
      },
      {
        path: "/account/activity-log",
        name: "activity-log",
        component: () => import("@/views/pages/account/ActivityLog.vue"),
        meta: {
          title: "My Profile",
        },
      },*/
      {
        path: "/change-password",
        name: "change-password",
        component: () => import("@/views/pages/account/ChangePassword.vue"),
        meta: {
          requiresAuth: true,
          title: "Change Password",
        },
      },
      {
        path: "/account-cash-statement",
        name: "account-cash-statement",
        component: () =>
          import("@/views/pages/account/AccountCashStatement.vue"),
        meta: {
          requiresAuth: true,
          title: "Account Cash Statement",
        },
      },
      {
        path: "/account-cash-statement/detail/:id",
        name: "account-cash-statement-detail",
        component: () =>
          import("@/views/pages/account/AccountStatementDetail.vue"),
        meta: {
          requiresAuth: true,
          title: "Account Cash Statement Detail",
        },
      },
      {
        path: "/bet-history",
        name: "bet-history",
        component: () => import("@/views/pages/account/BetHistory.vue"),
        meta: {
          requiresAuth: true,
          title: "Bet History",
        },
      },
      {
        path: "/my-bets",
        name: "my-bets",
        component: () => import("@/views/pages/account/UcurrentBet.vue"),
        meta: {
          requiresAuth: true,
          title: "My Bets",
        },
      },
      {
        path: "/ProfitLoss",
        name: "profit-loss",
        component: () => import("@/views/pages/account/ProfitLoss.vue"),
        meta: {
          requiresAuth: true,
          title: "Profit Loss",
        },
      },
      {
        path: "/profit-detail/:id",
        name: "profit-detail",
        component: () => import("@/views/pages/account/ProfitDetail.vue"),
        meta: {
          requiresAuth: true,
          title: "Profit Loss Detail",
        },
      },
      {
        path: "/dwrequests",
        name: "dw-requests",
        component: () => import("@/views/pages/dw-requests/dwrequests.vue"),
        meta: {
          requiresAuth: true,
          title: "DW Requests",
        },
        beforeEnter: (to, from) => {
          if (
            store.getters["configModule/domainSettings"]?.showDWRequests ==
            false
          ) {
            return from;
          }
        },
      },
      {
        path: "/depositw",
        name: "depositw",
        component: () => import("@/views/pages/depositw/DepositW.vue"),
        meta: {
          requiresAuth: true,
          title: "Deposit Withdrawal",
        },
        beforeEnter: (to, from) => {
          if (
            store.getters["configModule/domainSettings"]?.showDepositW == false
          ) {
            return from;
          }
        },
      },
      {
        path: "/withdrawal",
        name: "withdrawal",
        component: () => import("@/views/pages/depositw/WithDrawal.vue"),
        meta: {
          requiresAuth: true,
          title: "Deposit Withdrawal",
        },
        beforeEnter: (to, from) => {
          if (
            store.getters["configModule/domainSettings"]?.showDepositW == false
          ) {
            return from;
          }
        },
      },
      {
        path: "/favorites",
        name: "favorites",
        component: () => import("@/views/pages/Favorites.vue"),
        meta: {
          title: "Favorites",
        },
      },
    ],
  },

  {
    path: "/lotus",
    component: () => import("@/layouts/lotus-layout/Lotus.vue"),
    meta: {},
    children: [
      {
        path: "/",
        redirect: "/lotus",
      },
      {
        path: "/lotus",
        name: "lotus",
        component: () => import("@/views/pages/lotus/Lotus.vue"),
        meta: {
          requiresAuth: true,
          title: "Lotus",
        },
      },
      {
        path: "/casino",
        name: "casino",
        component: () => import("@/views/pages/casino/Casino.vue"),
        meta: {
          requiresAuth: true,
          title: "Casino",
        },
        beforeEnter: (to, from) => {
          if (store.getters["configModule/domainSettings"]?.casino == false) {
            return from;
          }
        },
      },
    ],
    beforeEnter: (to, from) => {
      if (store.getters["configModule/domainSettings"]?.lotusCasino == false) {
        return from;
      }
    },
  },

  {
    path: "/auth",
    component: () => import("@/layouts/auth/AuthLayout.vue"),
    meta: {},
    children: [
      {
        path: "/",
        redirect: "/auth/login",
      },

      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/views/auth/Login.vue"),
        meta: { title: "Login" },
      },
      {
        path: "/auth/signup",
        name: "signup",
        component: () => import("@/views/auth/SignUp.vue"),
        meta: { title: "Signup" },
        beforeEnter: (to, from) => {
          if (
            store.getters["configModule/domainSettings"]?.allowSignUp == false
          ) {
            return from;
          }
        },
      },
      {
        path: "/auth/verfication",
        name: "verfication",
        component: () => import("@/views/auth/Verfication.vue"),
        meta: { title: "Verfication" },
      },
      {
        path: "/auth/logout",
        redirect: "/auth/login",
      },
    ],
  },

  {
    path: "",
    component: () => import("@/layouts/full-page/FullPageLayout.vue"),
    children: [
      {
        path: "/not-authorized",
        name: "not-authorized",
        component: () =>
          import("@/views/pages/not-authorized/NotAuthorized.vue"),
        meta: { title: "Not Authorized" },
      },
      {
        path: "/error-404",
        name: "not-found-404",
        component: () => import("@/views/pages/not-founds/Error-404.vue"),
        meta: { title: "Page Not Found" },
      },
      {
        path: "/error-500",
        name: "not-found-500",
        component: () => import("@/views/pages/not-founds/Error-500.vue"),
        meta: { title: "Server Error 500" },
      },
      {
        path: "/under-maintenance",
        name: "under-maintenance",
        component: () =>
          import("@/views/pages/not-founds/Under-Maintenance.vue"),
        meta: { title: "Under Maintenance" },
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/views/pages/not-founds/Test.vue"),
        meta: { title: "Server Error 500" },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/error-404",
    meta: { title: "Not Found!" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// --------------------Route Before After Actions--------------------
router.beforeEach((to, from, next) => {
  if (to.name == "lotus") {
    //store.dispatch("setSliderShow", false);
    //store.dispatch("setNewsBoxMarquee", false);
    store.dispatch("setNavbarScrollabel", false);
    store.dispatch("setNavBackToSports", true);
  }

  if (from.name == "lotus") {
    //store.dispatch("setSliderShow", true);
    //store.dispatch("setNewsBoxMarquee", true);
    store.dispatch("setNavbarScrollabel", true);
    store.dispatch("setNavBackToSports", false);
    store.dispatch("moduleMain/getUserExpectedProfitLoss");
    store.dispatch("moduleMain/getUserOpenBets");
    store.dispatch("moduleMain/getUserExpectedProfitLoss");
  }

  // unActive site
  if (
    localStorage.getItem("siteSuspended") == "true" &&
    to.name != "under-maintenance"
  ) {
    store
      .dispatch("configModule/getDomainSetting")
      .then(() => { })
      .catch(() => { });

    next({
      path: "/under-maintenance",
    });
  }

  // check authorize
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("accessToken")) {
      next();
      return;
    }
    next({
      path: "/auth/login",
      query: {
        to: to.path,
      },
    });
  }

  store.dispatch("authModule/updateInReload").then().catch();

  next();
});

router.afterEach(() => {
  const appLoading = document.getElementById("loading");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
