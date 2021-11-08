import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

function App() {
    return (
        <div>
            <div>
                <BrowserRouter>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/main" component={Main} />
                    <Route path="/todoTemplate" component={TodoTemplate}>
                        <div>
                            <TodoTemplate>
                                <TodoHead />
                                <TodoList />
                            </TodoTemplate>
                        </div>
                    </Route>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
