import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import buss from '../assets/images/buss1.jpg';

const BookingBanner = ({ date, setDate }) => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={buss} class="max-w-sm rounded-lg" />
                    <div className='shadow-2xl'>
                        <DayPicker mode='single' selected={date} onSelect={setDate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingBanner;