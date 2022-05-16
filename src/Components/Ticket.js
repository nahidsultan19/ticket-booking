import React from 'react';

const Ticket = ({ ticket, setBookTicket }) => {
    const { name, from, to, time } = ticket;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl px-10">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{from}-{to}</p>
                <p>
                    {
                        time.length > 0 ? <span>{time[0]}</span> : <span>No tickets available</span>
                    }
                </p>
                <p>{time.length} {time.length > 1 ? 'Tickets' : 'Ticket'} Available</p>
                <div class="card-actions justify-center">
                    <label onClick={() => setBookTicket(ticket)} htmlFor="booking-modal" class="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Ticket;