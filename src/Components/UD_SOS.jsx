import React from 'react';

const UD_SOS = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className="text-center text-2xl font-semibold text-emerald-400 mb-1">Deny to Deliver - Rider Mood</h2>

            {/* Rider SOS Section */}
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Rider SOS</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">Rider SOS -- bike issue -- tried to convince DP for delivery -- agreed to deliver -- asked DP to deliver as soon as possible </li>
                    </ul>
                </div>
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">Rider SOS -- bike issue -- tried to convince DP for delivery -- DP not agreed to deliver -- hence <strong className='text-yellow-300 font-semibold'>unassigned</strong> and ID blocked for few hours details shared</li>
                        <li className="p-2">Rider SOS -- bike issue -- tried to convince DP for delivery -- DP not agreed to deliver -- hence <strong className='text-yellow-300 font-semibold'>reassigned</strong> and ID blocked for few hours details shared </li>
                    </ul>
                </div>
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">

                        
                        <li className="p-2">Rider SOS -- bike issue -- tried to convince DP for delivery -- DP not agreed to deliver -- <strong className='text-yellow-300 font-semibold'>hence reassigned but error</strong> -- but ask rider to deliver in last then rider agreed </li>

                        <li className="p-2">Rider SOS -- bike issue -- tried to convince DP for delivery -- DP not agreed to deliver -- <strong className='text-yellow-300 font-semibold'>hence reassigned but error</strong> -- called cx -- informed about cancellation & refund TAT shared -- ID blocked for few hours details shared with DP </li>

                        <li className="p-2">Rider SOS -- bike issue -- tried to convince DP for delivery -- DP not agreed to deliver -- <strong className='text-yellow-300 font-semibold'>hence reassigned but error</strong> -- called cx -- <strong className='text-red-400 font-semibold'>cx not responsive</strong> -- order cancelled -- ID blocked for few hours details shared with DP</li>
                    </ul>
                </div>
            </div>

            {/* Rain Issue Section */}
            <h3 className="text-lg font-semibold text-amber-400 mt-6 mb-3">Rain Issue</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">Rain -- <strong className='text-sky-500'>Bad Weather / Rain Tag Not Available</strong> -- ask DP to deliver order </li>
                        <li className="p-2">Rain -- <strong className='text-sky-500'>Bad Weather / Rain Tag Available</strong> -- tried to convince DP for delivery -- DP agreed to deliver order </li>
                        <li className="p-2">Rain -- <strong className='text-sky-500'>Bad Weather / Rain Tag Available</strong> -- DP not agreed to deliver order -- informed cx about weather -- order cancelled & refund TAT shared -- details shared with DP </li>
                        <li className="p-2">Rain -- <strong className='text-sky-500'>Bad Weather / Rain Tag Available</strong> -- order not cancelled -- asked DP to ensure delivery </li>
                    </ul>
                </div>
            </div>

            {/* Road Blocked / Strike / Unsafe Area Section */}
            <h3 className="text-lg font-semibold text-amber-400 mt-6 mb-3">Road Blocked / Strike / Unsafe Area</h3>
            <div className="p-3 bg-gray-700 rounded-md shadow">
                <ul className="list-disc pl-5">
                    <li className="p-2">Rider Concern -- <strong className='text-yellow-300 font-semibold'>Road Blocked / Strike / Unsafe Area</strong> -- asked DP to coordinate with SM for a better solution -- resolved </li>
                </ul>
            </div>
        </div>
    );
};

export default UD_SOS;

