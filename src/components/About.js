import React, { useState } from "react";
import "../styling.css";

// Green colors: #228B22, #006600
// Brown colors: #663300

export default function About() {
    const [about, setAbout] = useState(false);
    const [buttonAbout, setButtonAbout] = useState(true);

    const [rules, setRules] = useState(false);
    const [readRules, setReadRules] = useState(true);

    const settingAbout = () => {
        setAbout(!about);
        setButtonAbout(!buttonAbout);
    };

    const settingRules = () => {
        setRules(!rules);
        setReadRules(!readRules);
    };

    return (
        <div>
            {/* <h1 >Welcome to the Conway's Game of Life</h1> */}
            <h1 className="about-title">Conway's Game of Life</h1>

            <div className="about-description">
                <div onClick={settingAbout} className="about-about">
                    {buttonAbout && <p className="about-button">About</p>}

                    {about && (
                        <p className="about-text">
                            The Game of Life, also known simply as Life, is a
                            cellular automaton devised by the British
                            mathematician John Horton Conway in 1970. <br /> It
                            is a zero-player game, meaning that its evolution is
                            determined by its initial state, requiring no
                            further input.
                        </p>
                    )}
                </div>

                <div className="about-about" onClick={settingRules}>
                    {readRules && <p className="about-button">Rules</p>}

                    {rules && (
                        <div className="about-text2">
                            <p>
                                {" "}
                                1. Any live cell with fewer than two live
                                neighbours dies, as if by underpopulation.{" "}
                                <br />
                                2. Any live cell with two or three live
                                neighbours lives on to the next generation.
                                <br />
                                3. Any live cell with more than three live
                                neighbours dies, as if by overpopulation.
                                <br />
                                4. Any dead cell with exactly three live
                                neighbours becomes a live cell, as if by
                                reproduction.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
