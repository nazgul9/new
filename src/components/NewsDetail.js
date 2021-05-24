import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parser from "html-react-parser";
import {connect} from 'react-redux'
import {addNewDetail} from "../actions/News"

const NewsDetail = ({detail,addNewDetail}) => {
    const {newsId} = useParams()


    useEffect(()=>{
        axios.get(`https://nurkadyrnur.pythonanywhere.com/news/${newsId}/`).then((res)=>{
            addNewDetail(res.data)
        })
    },[])

    return (
        <div>
            <h1>{detail.title}</h1>
            <img src={`https://nurkadyrnur.pythonanywhere.com${detail.image_detail}`} alt=""/>
            <p className="card-text">{parser(detail.body||"")}</p>
        </div>
    );
};

const msp  =({detail}) =>{
    return {detail}
}

export default connect (msp, {addNewDetail})( NewsDetail);