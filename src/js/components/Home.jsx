import React, { useState, useEffect } from "react";
import SecondCounter from "./SecondCounter";

function Home() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [mode, setMode] = useState("up"); 

    useEffect(function () {
        let interval = null;

        if (running) {
            interval = setInterval(function () {
                setSeconds(function (prev) {
                    if (mode === "down") {
                        if (prev <= 0) {
                            setRunning(false);
                            return 0;
                        }
                        return prev - 1;
                    }

                    return prev + 1;
                });
            }, 1000);
        }

        return function () {
            clearInterval(interval);
        };
    }, [running, mode]);

    function startCountdown() {
        let value = parseInt(inputValue);

        if (isNaN(value) || value <= 0) {
            alert("Introduce un número válido");
            return;
        }

        setMode("down");
        setSeconds(value);
        setRunning(true);
    }

    function startNormal() {
        setMode("up");
        setRunning(true);
    }

    return (
        <div className="text-center pt-5 mt-5">
            <SecondCounter seconds={seconds} />

            <div className="mt-4">
                <input
                    type="number"
                    className="form-control w-25 mx-auto"
                    placeholder="Countdown number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button className="btn btn-primary mt-3" onClick={startCountdown}>
                    Start countdown
                </button>
            </div>

            <div className="mt-3">
                <button className="btn btn-success" onClick={startNormal}>
                    Start normal counter
                </button>
            </div>

            <div className="mt-4">
                <button className="btn btn-danger mx-2" onClick={() => setRunning(false)}>
                    Stop
                </button>

                <button className="btn btn-warning mx-2" onClick={() => setSeconds(0)}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Home;