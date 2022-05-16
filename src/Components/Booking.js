import React, { useState } from 'react';

import AvailableTickets from './AvailableTickets';
import BookingBanner from './BookingBanner';


const Booking = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <BookingBanner date={date} setDate={setDate}></BookingBanner>
            <AvailableTickets date={date}></AvailableTickets>
        </div >
    );
};

export default Booking;