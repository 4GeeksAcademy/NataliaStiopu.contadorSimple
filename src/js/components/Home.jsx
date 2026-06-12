import React, { useState } from "react";
import SecondCounter from "./SecondCounter";

function Home() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);

    React.useEffect(function () {
        let interval = null;

        if (running) {
            interval = setInterval(function () {
                setSeconds(function (prev) {
                    return prev + 1;
                });
            }, 1000);
        }

        return function () {
            clearInterval(interval);
        };
    }, [running]);

    return (
         <div className="text-center pt-5 mt-5">
        <div className="mb-5">
            <SecondCounter seconds={seconds} />
        </div>

        <div>
            <button className="btn btn-danger mx-2" onClick={() => setRunning(false)}>Stop</button>
            <button className="btn btn-success mx-2" onClick={() => setRunning(true)}>Play</button>
            <button className="btn btn-warning mx-2" onClick={() => setSeconds(0)}>Reset</button>
        </div>
    </div>
    );
}

export default Home;