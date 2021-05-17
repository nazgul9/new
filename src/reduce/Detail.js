const initialState = {}

const detail = (state=initialState,action)=>{
    if(action.type==="ADD_DETAIL_NEWS"){
        return action.data
    }
    return state
}

export default detail;