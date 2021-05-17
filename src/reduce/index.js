import {combineReducers} from "redux"
import news from "./News"
import detail from "./Detail"

const reduce = combineReducers({
    news,
    detail
})

export default reduce