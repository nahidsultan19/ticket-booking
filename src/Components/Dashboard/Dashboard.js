import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='min-h-screen'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h3 className='text-4xl text-indigo-500'>Welcome to your Dashboard</h3>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                        <li><Link to='/dashboard/review'>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;