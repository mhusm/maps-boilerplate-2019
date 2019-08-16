import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {createClient} from 'contentful-management'

window.contentfulClient = createClient({
  accessToken: 'CFPAT-eHQxWuMmJ90239uacKmZqxJskvlZzHpEK3mJl3RINHM'
});

window.contentfulClient.getSpace('7la5sjify8om')
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.getEntries()) 
.then((response) => console.log(response.items))
.catch(console.error)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
