import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Ticket from './Ticket';

const AvailableTickets = ({ date }) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('tickets.json')
            .then(res => res.json())
            .then(data => setTickets(data))
    }, [])

    return (
        <div className=''>
            <div className='text-center font-bold text-2xl text-primary'>
                {date && <p>Available Tickets in {format(date, 'PP')}</p>}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 px-10'>
                {
                    tickets.map(ticket => <Ticket key={ticket._id} ticket={ticket}></Ticket>)
                }
            </div>

        </div>
    );
};

export default AvailableTickets;