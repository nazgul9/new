import {combineReducers} from "redux"
import news from "./News"
import detail from "./Detail"
import { reducer as form } from 'redux-form'

const reduce = combineReducers({
    news,
    detail,
    form
})

export default reduce;