
const addNews = (news)=>{
    return{
        type:"ADD_NEWS",
        news
    }
}
const addNewDetail = (detail)=>{
    return{
        type:"ADD_NEWS_DETAIL",
        detail
    }
}



export {addNews, addNewDetail};