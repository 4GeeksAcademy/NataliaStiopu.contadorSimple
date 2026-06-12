import React from "react";

const SecondCounter = ({ seconds }) => {
    const six = Math.floor(seconds / 100000) % 10;
    const five = Math.floor(seconds / 10000) % 10;
    const four = Math.floor(seconds / 1000) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const two = Math.floor(seconds / 10) % 10;
    const one = seconds % 10;

    return (
        <div className="d-flex w-100 bg-dark justify-content-center align-items-center p-3 top-0 start-0">
            <div className="bg-dark text-white p-3 fs-1">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="bg-dark text-white p-5 display-1  border border-light">{six}</div>
            <div className="bg-dark text-white p-5 display-1  border border-light">{five}</div>
            <div className="bg-dark text-white p-5 display-1  border border-light">{four}</div>
            <div className="bg-dark text-white p-5 display-1  border border-light">{three}</div>
            <div className="bg-dark text-white p-5 display-1  border border-light">{two}</div>
            <div className="bg-dark text-white p-5 display-1  border border-light">{one}</div>
        </div>
    );
};

export default SecondCounter;