import React from "react";

const Jumbotron = () => {
    return (
        <div className="mt-4 p-5 bg-light text-dark">
            <h1 className="display-3">A Warm Welcome!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <button type="button" className="btn btn-primary">Call to action!</button>
        </div>
    );
};

export default Jumbotron;