import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import installElementPlus from "./plugins/element";
import "normalize.css/normalize.css"; //  CSS resets
import "./styles/element-variables.scss";
import "@/utils/permission"; //ルーターガード設定

const app = createApp(App);
installElementPlus(app);
app.use(store).use(router).mount("#app");
