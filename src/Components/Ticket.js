import React from 'react';

const Ticket = (props) => {
    const { name, from, to, time } = props.ticket;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl px-10">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{from}-{to}</p>
                <p>{
                    time.length > 0 ? <span>{time[0]}</span> : <span>Try another time</span>
                }</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Ticket;