import React from 'react';

const UMD = () => {
    return (
        <div className="m-4 p-4 bg-gray-800 text-white rounded-lg">

            <h3 className="text-lg md:text-xl font-semibold mb-2">Not Checking Geo-fence</h3>

            <div className="bg-gray-700 p-3 rounded-lg space-y-3">
                <li className="p-2">UMD -- <strong className="text-yellow-300">Pin location/address mismatch or location issue</strong> -- call cx for confirmation -- get confirmed -- mark delivered -- share same to the DP</li>
                <li className="p-2">UMD -- <strong className="text-yellow-300">Pin location/address mismatch or location issue</strong> -- call cx for confirmation -- <strong className="text-red-400">cx not responsive</strong> -- denied to mark -- asked rider to go back to the cx location and try to mark the order as delivered</li>
                <li className="p-2">UMD -- <strong className="text-yellow-300">Network/ Forget to Mark/ Device issue -- low confidence</strong> -- call cx for confirmation -- get confirmed -- mark delivered -- share same to the DP</li>
                <li className="p-2">UMD -- <strong className="text-yellow-300">Network/ Forget to Mark/ Device issue -- low confidence</strong> -- call cx for confirmation -- <strong className="text-red-400">cx not responsive</strong> -- denied to mark -- asked rider to go back to the cx location and try to mark the order as delivered</li>
            </div>

            <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">Checking Geo-fence</h3>

            <div className="bg-gray-700 p-3 rounded-lg space-y-3">
                <li className="p-2">UMD -- <strong className="text-yellow-300">Geo-fence not reached</strong> -- ask to reached at Geo-fence -- then try to mark delivered if any issue then connect us again -- DP agreed</li>
                <li className="p-2">UMD -- <strong className="text-yellow-300">Geo-fence not reached</strong> -- DP requested to call cx -- denied to call bcos Geo-fence not reached -- ask to reached -- then try to mark delivered if any issue then connect us again -- DP agreed</li>
                <li className="p-2">UMD -- <strong className="text-yellow-300">Network/ Forget to Mark/ Device issue</strong> -- Geo-fence reached -- call cx for confirmation -- get confirmed -- mark delivered -- share same to the DP</li>
                <li className="p-2">UMD -- <strong className="text-yellow-300">Network/ Forget to Mark/ Device issue</strong> -- Geo-fence reached -- call cx for confirmation -- <strong className="text-red-400">cx not responsive</strong> -- denied to mark -- asked rider to go back to the cx location and try to mark the order as delivered</li>
            </div>

        </div>
    );
};

export default UMD;
