import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'