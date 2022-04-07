import * as  types from './types'
import * as itemAPI from '../../api/itemAPI';

const actions = {
    async [types.GET_ITEM_REQUEST]({commit}){
        commit(types.GET_ITEM_REQUEST)
        try {
            const res = await itemAPI.getItem()
            console.log(res,'data SAGA')
            if (!res) throw res
            commit(types.GET_ITEM_SUCCESS,res.data.listItem)

        } catch (error) {
            commit(types.GET_ITEM_FAILURE,error)
        }
    },
}
function tdthcn (a,b){
    return a* b 
}





tdthcn(1,2)
export default actions