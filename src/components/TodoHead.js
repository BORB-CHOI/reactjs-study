import React from 'react';
import "./TodoHead.css"

function TodoHead() {
    const undone = 4;
    return (
        <div className="TodoHead">
            <div className="ymd">2021년 11월 8일</div>
            <div className="day">월요일</div>
            <div className="count">할 일 {undone}개 남음</div>
        </div>
    );
}

export default TodoHead;
