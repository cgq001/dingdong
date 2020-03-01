import Vue from 'vue'
import App from './App'
import store from './static/state/index.js'
Vue.config.productionTip = false

const https = require('./static/http.js')
//无token请求
Vue.prototype.http = https.request
//含token请求
Vue.prototype.https = https.requests

// import {AddressList, Toast} from 'vant';
// import 'vant/lib/index.css';

// Vue.use(AddressList);
// Vue.use(Toast)

import Vant from 'vant';

Vue.use(Vant);

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
