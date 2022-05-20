import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Ticket from './Ticket';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';

const AvailableTickets = ({ date }) => {
    // const [tickets, setTickets] = useState([]);
    const [bookTicket, setBookTicket] = useState(null);

    // useEffect(() => {
    //     fetch('tickets.json')
    //         .then(res => res.json())
    //         .then(data => setTickets(data))
    // }, [])

    const { data: tickets, isLoading } = useQuery('availableTickets', () => fetch('tickets.json').then(res => res.json()))

    if (isLoading) {
        return <p>Looding..</p>
    }

    return (
        <div className=''>
            <div className='text-center font-bold text-2xl text-primary'>
                {date && <p>Available Tickets on {format(date, 'PP')}</p>}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12 px-10'>
                {
                    tickets.map(ticket => <Ticket key={ticket._id} ticket={ticket} setBookTicket={setBookTicket}></Ticket>)
                }
            </div>
            {bookTicket && <BookingModal bookTicket={bookTicket} setBookTicket={setBookTicket} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableTickets;