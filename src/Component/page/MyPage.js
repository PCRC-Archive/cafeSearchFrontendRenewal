import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../Style/MyPage.scss"
import axios from "axios";

export default function MyPage() {

    useEffect(()=>{
        axios.get('http://localhost:8080/user/info')
        .then((response)=>{
            console.log(response.data);
        })
    })

    return (
        <div id="my-wrapper">
            <div style={{backgroundColor: 'white'}}></div>
            <div id="side-bar-wrapper">
                <div id="user-wrapper" style={{backgroundColor: 'rgb(255, 252, 241)'}}>
                    <img src='http://k.kakaocdn.net/dn/byVKeZ/btrt1IJjrOU/sf7Qpn1zYkkJJTVKnPqXuk/img_640x640.jpg' height='100' style={{borderRadius: 50}}/>
                </div>
                <div style={{backgroundColor: 'rgb(255, 252, 241)'}}></div>
                <div style={{backgroundColor: 'black'}}></div>
                <div style={{backgroundColor: 'rgb(255, 252, 241)'}}></div>
                <div style={{backgroundColor: 'white'}}></div>
            </div>
            <div style={{backgroundColor: 'white'}}></div>
            <div style={{backgroundColor: 'black'}}></div>
            <div style={{backgroundColor: 'white'}}></div>
            <div id="content-wrapper">
                <div style={{backgroundColor: 'rgb(237, 246, 229)'}}></div>
                <div style={{backgroundColor: 'white'}}></div>
            </div>
            <div style={{backgroundColor: 'white'}}></div>
        </div>
    );
}