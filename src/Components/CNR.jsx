import React from 'react';

const CNR = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className="text-center text-2xl  font-bold text-emerald-400 mb-8">CNR -- Customer Not Responsive</h2>
            
            <div className="text-sm border border-green-400 mb-4 mt-2 p-2">
                <p className="text-sm font-serif  mb-2 mt-4 p-2">
                  Rider said that CNR issue -- but in the next moment he confirmed cx called -- rider confirm further no issue -- call close 
                </p>
                <p className="text-sm font-serif  mb-2 mt-4 p-2">
                     Rider said that CNR issue -- but in the next moment he confirmed cx came -- rider confirm further no issue -- call close 
                </p>

            </div>

            <div className="p-3 bg-gray-700 rounded-md shadow">
                <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Geo-Fence Not Reached</h3>
                <ul className="list-disc pl-5">
                    <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence not reached</strong> -- ask to reach there, then call the customer.</li>
                    <li className="p-2">CNR -- DP not marked <strong className='text-yellow-300 font-semibold'>pickup nor Geo-fence</strong> -- ask DP to first mark pickup then reach Geo-fence -- then try to call cx if any issue then connect us again -- DP agreed</li>
                </ul>
            </div>

            <div className="space-y-4 mt-2">

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Geo-Fence/ Doorstep reached Before Automation time</h3>
                    <ul className="list-disc pl-5">
                       <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached but Doorstep not reached</strong> -- ETA+12 mins not crossed -- ask rider to mark Doorstep reached from application -- then you become able to make call to cx -- call close </li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- ask rider to follow automation till ETA +12 min along with some call attempt</li>

                        <hr className='mb-5 mt-5' />

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt Not available ❎</strong> -- ask rider to make 1 more call attempt then reconnect us if any issue</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- ask cx to call rider -- same shared with rider.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx Not responsive</strong> -- ask rider to follow automation till ETA +12 min along with some call attempt </li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt available ✅ & CNR also Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx Not responsive</strong> -- ask rider to make some more call attempt till ETA +12 min </li>

                    </ul>
                </div>
            </div>

            <div className="space-y-4 mt-2">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Geo-Fence/ Doorstep reached After Automation</h3>
                    <ul className="list-disc pl-5">

                         <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached but Doorstep not reached</strong> -- ETA+12 mins crossed -- ask rider to mark Doorstep reahced from application -- then you become able to make call to cx -- call close </li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- ask rider to follow automation till ETA +12 min along with some call attempt </li>


                        <hr className='mb-5 mt-5' />

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt Not available ❎</strong> -- ask rider to make 1 more call attempt atleast if any issue any issue reconnect us again </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt available ✅</strong> -- CNR attempt not available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- shared the same with DP.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- <strong className='text-yellow-300 font-semibold'>2 Call Attempt available ✅</strong> -- CNR attempt not available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- asked to follow the automation process.</li>


                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- 2 CNR attempt available ✅-- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- shared the same with DP.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- 2 CNR attempt available ✅-- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- order canceled -- shared the same with DP.</li>


                    </ul>
                </div>
            </div>

            {/* <div className="space-y-4 mt-2">
                <h2 className="text-center text-2xl  font-bold text-emerald-400 mb-8">BISTRO ORDER -- Custoemr not responding</h2>
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Before Cancelation Time</h3>
                    <ul className="list-disc pl-5">

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive/Call forwarded to Voice-mail/ Swtiched off</strong> -- ask rider to follow automation till cancellation time</li>

                        <hr className='mb-5 mt-5' />


                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- before ETA+12 mins -- 2 CNR attempt not available -- ask rider to make another call attempt </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- ask cx to call rider -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx not responsive</strong> -- ask rider to follow automation till cancellation time </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx not responsive</strong> -- CNR automation followed -- ask rider to wait till Cancellation time </li>

                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">After Cancelation Time</h3>
                    <ul className="list-disc pl-5">

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins  crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- ETA+12 mins crossed -- call Cx twice -- <strong className='text-red-400 font-semibold'>Cx not responsive/Call forwarded to Voice-mail/ Swtiched off</strong> -- order cancel -- same share to rider </li>

                        <hr className='mb-5 mt-5' />

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- After ETA+12 mins -- 2 CNR attempt not available -- ask rider to make another call attempt </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- after ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- after ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- ask cx to call rider -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence/ Doorstep reached</strong> -- after ETA+12 mins -- 2 CNR attempt available -- call Cx twice-- <strong className='text-yellow-300 font-semibold'>Cx not responsive </strong> -- order cancel -- sameshare to rider </li>

                    </ul>
                </div>
            </div> */}


        </div>
    );
};

export default CNR;








