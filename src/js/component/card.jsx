import React from "react";

const Card = () => {
    return (
        <div className="card my-4 text-center" style={{ width: '260px'}}>
            <img className="card-img-top" src="https://i.pinimg.com/1200x/6e/d0/40/6ed040d58fc669c2c87ec0db33e873c8.jpg" alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
            <div className="d-flex justify-content-center border-top bg-light py-3">
                <button type="button" class="btn btn-primary">Find out more!</button>
            </div>
        </div>
    );
};

export default Card;