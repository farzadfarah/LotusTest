import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import "./assets/css/style.scss";

// router
import router from "./router/router";

//import axios from "axios";

// API Calls
import "./http/request";

// Store
import store from "./store/store";


// Our custom plugin
//import FloatingMenuButton from "floating-menu";
//import 'floating-menu/dist/style.css';
//app.use(FloatingMenuButton)

// Notification

import Toast, { PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const options: PluginOptions = {
    // You can set your default options here
};

//
import mixinGlobal from "./mixins/mixinGlobal";
app.mixin(mixinGlobal);

// Mixin Toast
import mixinToast from "./mixins/mixinToast.js";
app.mixin(mixinToast);

// hub
//import "./eventsHub.js";

//
import mitt from "mitt";
const emitter = mitt();
app.config.globalProperties.emitter = emitter;
//

import { Icon } from "@altipla/fa6-icon";
app.component(Icon.name, Icon);
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash as fasTrash,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faMobileAndroid,
  faWindowClose,
  faTimes,
  faMinus,
  faPlus,
  faSearch,
  faCopy,
  faTv,
  faTelevision,
  faHand,faBan
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fasTrash,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faMobileAndroid,
  faWindowClose,
  faTimes,
  faMinus,
  faPlus,
  faSearch,
  faCopy,
  faTv,
  faTelevision,faHand,faBan
);

app.use(router).use(store).use(Toast, options).mount("#app");
