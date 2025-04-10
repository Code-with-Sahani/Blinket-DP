import React from 'react';

const CNR = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className="text-center text-2xl font-semibold text-emerald-400 mb-8">CNR -- Customer Not Responsive</h2>
            <div className="p-3 bg-gray-700 rounded-md shadow">
                <ul className="list-disc pl-5">
                    <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence not reached</strong> -- ask to reach there, then call the customer.</li>
                    <li className="p-2">CNR -- DP not marked <strong className='text-yellow-300 font-semibold'>pickup nor Geo-fence</strong> -- ask DP to first mark pickup then reach Geo-fence -- then try to call cx if any issue then connect us again -- DP agreed</li>
                </ul>
            </div>
            <h3 className="text-lg font-semibold text-amber-400 mt-5 mb-3">Geo-fence Reached Before (ETA + 10 min)</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>
                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- requested the rider for a few more attempts and wait -- asked to follow the automation process after ETA+10 mins.</li>
                        <hr className='mb-5 mt-5' />
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins not crossed -- requested the rider for a few more attempts and wait -- asked to follow the automation process after ETA+10 mins.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins not crossed -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- requested the rider for a few more attempts and wait -- asked to follow the automation process after ETA+10 mins.</li>
                    </ul>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-amber-400 mt-5 mb-3">Geo-fence Reached After (ETA + 10 min)</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- asked to follow the automation process after ETA+10 mins.</li>
                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- DP requested to call Cx -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same shared with rider.</li>
                        <li className="p-2">DP unable to call cx -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- DP requested to call Cx -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- asked to follow the automation process after ETA+10 mins.</li>
                        <hr className='mb-5 mt-5' />
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- CNR attempt available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- shared the same with DP.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- CNR attempt available -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- order canceled -- shared the same with DP.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- CNR attempt not available -- asked to follow the automation process.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- CNR attempt not available -- DP requested to call Cx -- call Cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- shared the same with DP.</li>
                        <li className="p-2">CNR -- <strong className="text-yellow-300 font-semibold">Geo-Fence reached</strong> -- ETA+10 mins crossed -- CNR attempt not available -- DP requested to call Cx -- call Cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- asked to follow the automation process.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CNR;
