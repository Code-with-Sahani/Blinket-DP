import React from 'react';

const CNR = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className="text-center text-2xl  font-bold text-emerald-400 mb-8">CNR -- Customer Not Responsive</h2>

            <div className="p-3 bg-gray-700 rounded-md shadow">
                <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Geo-Fence Not Reached</h3>
                <ul className="list-disc pl-5">
                    <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence not reached</strong> -- ask to reach there, then call the customer.</li>
                    <li className="p-2">CNR -- DP not marked <strong className='text-yellow-300 font-semibold'>pickup nor Geo-fence</strong> -- ask DP to first mark pickup then reach Geo-fence -- then try to call cx if any issue then connect us again -- DP agreed</li>
                </ul>
            </div>

            <div className="space-y-4 mt-2">

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Geo-fence Reached Before Automation time</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- requested the rider for a few more attempts and wait -- asked to follow the automation process after ETA+5 mins.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- call Cx -- <strong className='text-yellow-300 font-semibold'>Call forwarded to Voice-mail</strong> -- Order Cancel -- same shared with rider</li>


                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- call Cx -- <strong className='text-yellow-300 font-semibold'>called cx twice & Swtiched off</strong> -- Order Cancel -- same shared with rider</li>

                        <hr className='mb-5 mt-5' />

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt Not available ❎</strong> -- ask rider to make some call attempt then reconnect us if not responsive</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- ask cx to call rider -- same shared with rider.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- call Cx -- <strong className='text-red-400 font-semibold'>Cx Not responsive</strong> -- asked to follow the automation process after ETA+5 mins </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- call Cx -- <strong className='text-yellow-300 font-semibold'>Call forwarded to Voice-mail</strong> -- Order Cancel -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins not crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- call Cx -- <strong className='text-yellow-300 font-semibold'>called cx twice & Swtiched off</strong> -- Order Cancel -- same shared with rider</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-4 mt-2">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Geo-fence Reached After Automation</h3>
                    <ul className="list-disc pl-5">

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- asked to follow the automation process after ETA+5 mins.</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- call Cx -- <strong className='text-yellow-300 font-semibold'>Call forwarded to Voice-mail</strong> -- Order Cancel -- same shared with rider</li>

                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- call Cx -- <strong className='text-yellow-300 font-semibold'>called twice but Swtiched off</strong> -- Order Cancel -- same shared with rider</li>

                        <hr className='mb-5 mt-5' />

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt Not available ❎</strong> -- ask rider to make some call attempt and then follow automation in CNR </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- CNR attempt not available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- shared the same with DP.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- CNR attempt not available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- asked to follow the automation process.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- <strong className='text-yellow-300 font-semibold'>Call Attempt available ✅</strong> -- CNR attempt not available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Call forwarded to Voice-mail</strong> -- Order Cancel -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- CNR attempt available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- shared the same with DP.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- CNR attempt available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- order canceled -- shared the same with DP.</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Call forwarded to Voice-mail</strong> -- Order Cancel -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+5 mins crossed -- CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Called cx twice but swtiched off</strong> -- Order Cancel -- same shared with rider</li>


                    </ul>
                </div>
            </div>

            <div className="space-y-4 mt-2">
                <h2 className="text-center text-2xl  font-bold text-emerald-400 mb-8">BISTRO ORDER -- CNR</h2>
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">Before Cancelation Time</h3>
                    <ul className="list-disc pl-5">

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- before ETA+12 mins -- 2 CNR attempt not available -- ask rider to make another call attempt </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- ask cx to call rider -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx not responsive</strong> -- ask rider to follow automation till cancellation time </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- before ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx not responsive</strong> -- CNR automation followed -- ask rider to wait till Cancellation time </li>

                    </ul>
                </div>

                 <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-amber-400 mt-2 mb-2">After Cancelation Time</h3>
                    <ul className="list-disc pl-5">

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- After ETA+12 mins -- 2 CNR attempt not available -- ask rider to make another call attempt </li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- after ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- after ETA+12 mins -- 2 CNR attempt available -- call Cx -- <strong className='text-yellow-300 font-semibold'>Cx responsive</strong> -- ask cx to call rider -- same shared with rider</li>

                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- after ETA+12 mins -- 2 CNR attempt available -- call Cx twice-- <strong className='text-yellow-300 font-semibold'>Cx not responsive </strong> -- order cancel -- sameshare to rider </li>

                    </ul>
                </div>
            </div>


        </div>
    );
};

export default CNR;

