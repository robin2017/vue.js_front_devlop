import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
  doAjax(options) {
    options.url = "http://localhost:9090/layerData";
    options.type = "GET";
    Vue.http.get(options.url,options).then(function (resonse) {
      console.log('==success==')
      console.log(resonse.bodyText)
      return resonse.bodyText
    }),function (error) {
      console.log('==error===')
    }

  }
}
