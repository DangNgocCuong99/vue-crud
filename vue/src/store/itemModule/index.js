import actions from './actions'
import * as types from './types'

const DEFAULT_STATE ={
    isLoading: false,
    listItem: [],
    message: '',
    error: false,
}

const itemModule ={
    namespaced:true,
    state:() => DEFAULT_STATE,
    getter:{},
    actions,
    mutations:{
        [types.GET_ITEM_REQUEST](state){
            state.isLoading = true
        },

        [types.GET_ITEM_SUCCESS](state, listItem){
            state.isLoading = false
            state.error = false
            state.listItem = listItem
        },

        [types.GET_ITEM_FAILURE](state, error){
            state.isLoading = false
            state.error = true
            state.message = error.message
        },

    }
}
export default itemModule