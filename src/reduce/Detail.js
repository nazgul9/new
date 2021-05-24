const initialState = {}

const detail = (state=initialState,action)=>{
    if(action.type==="ADD_NEWS_DETAIL"){
        return action.detail
    }
    return state
}

export default detail;