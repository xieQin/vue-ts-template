import Vue from 'vue'
import Vuex from 'vuex'
import camelCase from 'lodash/camelCase'

let modules:any = {}

//@ts-ignore
let requireModule = require.context("./modules", false, /\.ts$/);

requireModule.keys().forEach((fileName: string) => {
  const moduleName = camelCase(fileName.replace(/(\.\/|\.ts)/g, ''))
  modules[moduleName] = requireModule(fileName).default
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...modules
  }
});
