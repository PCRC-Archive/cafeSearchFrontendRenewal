import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import '../../Style/MainPage.scss';


export default function MainPage() {
    
    return (
        <div id="main-wrapper">
            <div id="title-wrapper">
                <h1>자기야 카페 어디갈래?</h1>
            </div>
            
            <div id="button-wrapper">
                <div className="button-container">
                    <Link to='/search/region'>
                        <button type="button" className="btn btn-secondary">지역 검색</button>
                    </Link>
                </div>
                <div className="button-container">
                    <Link to='/search/subway'>
                        <button type="button" className="btn btn-secondary">지하철 검색</button>
                    </Link>
                </div>
                <div className="button-container">
                    <Link to='/search/name'>
                        <button type="button" className="btn btn-secondary">이름 검색</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
