import React from 'react';

const UMD = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            {/* Heading */}
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>UMD - Unable to mark Delivered</h2>

            {/* Not Checking Geo-fence Section */}
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Not Checking Geo-fence</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Pin location/address mismatch or location issue</strong> — call cx for confirmation — get confirmed — mark delivered — share same to the DP
                        </li>
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Pin location/address mismatch or location issue</strong> — call cx for confirmation — cx not confirmed — denied to mark — asked rider to go back to the cx location and try to mark the order as delivered
                        </li>
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Pin location/address mismatch or location issue</strong> — call cx for confirmation — <strong className="text-red-400 font-semibold">cx not responsive</strong> — denied to mark — asked rider to go back to the cx location and try to mark the order as delivered
                        </li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Network/ Forget to Mark/ Device issue — low confidence</strong> — call cx for confirmation — get confirmed — mark delivered — share same to the DP
                        </li>

                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Network/ Forget to Mark/ Device issue — low confidence</strong> — call cx for confirmation — cx not confirmed — denied to mark — asked rider to go back to the cx location and try to mark the order as delivered
                        </li>
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Network/ Forget to Mark/ Device issue — low confidence</strong> — call cx for confirmation — <strong className="text-red-400 font-semibold">cx not responsive</strong> — denied to mark — asked rider to go back to the cx location and try to mark the order as delivered
                        </li>
                    </ul>
                </div>
            </div>

            {/* Checking Geo-fence Section */}
            <h3 className="text-lg font-semibold text-amber-400 mt-5 mb-3">Checking Geo-fence</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">

                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold"> DP not marked Pickup nor Geo-fence </strong> — ask DP to first mark Pickup then reach Geo-fence — then try to mark delivered if any issue then connect us again — DP agreed
                        </li>

                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Geo-fence not reached</strong> — ask to reached at Geo-fence — then try to mark delivered if any issue then connect us again — DP agreed
                        </li>
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Geo-fence not reached</strong> — DP requested to call cx — denied to call bcos Geo-fence not reached — ask to reached — then try to mark delivered if any issue then connect us again — DP agreed
                        </li>

                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Network/ Forget to Mark/ Device issue</strong> — Geo-fence reached — call cx for confirmation — get confirmed — mark delivered — share same to the DP
                        </li>
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Network/ Forget to Mark/ Device issue</strong> — Geo-fence reached — call cx for confirmation — cx not confirmed — denied to mark — asked rider to go back to the cx location and try to mark the order as delivered
                        </li>
                        <li className="p-2">
                            UMD — <strong className="text-yellow-300 font-semibold">Network/ Forget to Mark/ Device issue</strong> — Geo-fence reached — call cx for confirmation — <strong className="text-red-400 font-semibold">cx not responsive</strong> — denied to mark — asked rider to go back to the cx location and try to mark the order as delivered
                        </li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                <h3 className="text-lg font-semibold text-emerald-500 mt-5 mb-3">Other scenrios Or Rare scenrios</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Payment issue but payment successful, but UMD — Geo-fence reached — call cx for confirmation — get confirmed — mark delivered — share same to the DP
                        </li>
 
                        <li className="p-2">Payment issue but payment successful, but UMD — Geo-fence reached — call cx for confirmation — cx not confirmed — denied to mark — asked rider to mark the order as delivered from their end if he delivered
                        </li>

                        <li className="p-2">UMD — BR — share the status with him, i.e. Delivered already marked by the main rider — ask him to mark delivered itself by reaching location Or Co-odrinate SM for the better help </li>

                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UMD;
