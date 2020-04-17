import Vue from 'vue'
import Vuex from 'vuex'
import {getToken,setToken} from '../libs/utils'
import {login} from '../api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:getToken()
  },
  mutations: {
    setToken(state,token){
      state.token = token
      setToken(token)
    }
  },
  getters:{

  },
  actions: {
    handleLogin ({commit}, {username,password}) {
      username = username.trim()
      return new Promise((resolve, reject) => {
        login({username,password}).then(res => {
          const data = res.data
          commit('setToken', data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
