import Vue from 'vue';
import Vuex from 'vuex';
import itemModule from './itemModule'

Vue.use(Vuex)

const logger = store=>{
    store.subscribe((mutation,state)=>{
        console.log("mutations",mutation)
        console.log("state",state)
    })
}

const store = new Vuex.Store({
    modules:{
        item: itemModule
    },
    plugins:[logger]
})

export default store