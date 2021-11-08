import React from 'react';
import "./TodoTemplate.css"

function TodoTemplate({ children }) {
    return <div className="TemplateBlock">{children}</div>;
}

export default TodoTemplate;