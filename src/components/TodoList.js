import React from 'react';
import "./TodoList.css"

const initialTodos = [
    {id: 1, text: '산책'},
    {id: 2, text: 'react 공부하기'},
    {id: 3, text: '강의 듣기'},
    {id: 4, text: '과제 하기'}
];

function TodoList() {
    return (
        <div>
            {initialTodos.map(todo => (
                <div className="TodoItem">
                    <div className="Text">{
                        todo.text
                    }</div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
