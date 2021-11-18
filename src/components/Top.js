import React from "react";
import "./Top.css";

const Top = ({ props: state }) => {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
    <div className="top-container">
        <div className="ymd">{dateString}</div>
        <div className="day">{dayName}</div>
    </div>
    );
};

export default Top;
