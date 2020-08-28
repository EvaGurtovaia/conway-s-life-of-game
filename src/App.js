import React from "react";
import Board from "./components/Board";
import About from "./components/About";
import "./styling.css";

function App() {
    return (
        <div className="main">
            <div
                style={{
                    height: "350px",
                }}
            >
                <About />
            </div>
            <div
                style={{
                    width: "75%",
                    margin: "auto",
                }}
            >
                <Board />
            </div>
        </div>
    );
}

export default App;
