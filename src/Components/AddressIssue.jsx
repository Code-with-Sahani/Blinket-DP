import React from 'react';

const AddressIssue = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md--p-6 lg--p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-4'>Address Issue </h2>
            <li className="text-sm border border-red-400 text-center mb-2 mt-4 p-2">
                Address issue -- ask rider to reach the location then coordinate with cx and then deliver the order -- if there is any issue then reconnect us again
            </li>
            {/* <div className="mb-8 border border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2 mt-4 pb-2">
                    🚚 Rakhi & OFSE Update
                </h3>
                <ul className="list-disc pl-5 pr-5 list-inside space-y-4 text-sm leading-relaxed">
                    <li >
                        Address issue -- location mismatch -- <span className="text-green-400 font-semibold"> serviceable </span> -- called cx -- confirm correct address/location -- location updated in rider's app -- ask rider to deliver
                    </li>

                    <li >
                        Address issue -- location mismatch -- <span className="text-green-400 font-semibold"> serviceable </span> -- called cx -- cx not responsive -- location updated in rider's app as rider confirmation -- & ask rider to deliver
                    </li>

                    <li >
                        Address issue -- location mismatch -- Distance between location & address is more than 400 m -- Distance b/w store & address is more than 4 km <span className="text-red-400 font-semibold"> -- not serviceable </span> -- ask rider to deliver with extra payout -- <span className="text-green-400 font-semibold"> rider agreed </span> -- ask to deliver & raise ticket for extra distance travelled
                    </li>

                    <li >
                        Address issue -- location mismatch -- Distance between location & address is more than 400 m -- Distance b/w store & address is more than 4 km  <span className="text-red-400 font-semibold"> -- not serviceable </span> -- ask rider to deliver with extra payout --<span className="text-green-400 font-semibold"> rider disagree </span> -- order cancel after informing cx & refund TAT shared -- same share to rider
                    </li>

                    <div className='mb-8 p-2 border border-red-300'><h3 className="text-xl font-semibold text-red-400 mb-4 pb-2">
                        Updates Failed !!!
                    </h3>
                        <ul className="list-disc  list-inside space-y-4 text-sm leading-relaxed">
                            <li >
                                Address issue -- location mismatch -- <span className="text-green-400 font-semibold"> serviceable </span> -- called cx -- confirm correct address/location -- <span className="text-red-400 font-semibold"> location update failed/No option to update</span> -- ask cx to guided rider for better location guidence -- same share to rider& raise a ticket for the extra distance
                            </li>

                            <li >
                                Address issue -- location mismatch -- <span className="text-green-400 font-semibold"> serviceable </span> -- called cx -- cx not responsive -- <span className="text-red-400 font-semibold"> location update failed/No option to update</span> -- & ask rider to deliver via coordinating with cx
                            </li>
                        </ul>

                    </div>
                </ul>
            </div> */}
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Out of Polygon</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Alternate Store</strong> -- Distance b/w store and cx's address is less than 8 km -- ask rider to deliver the order and denied cancellation </li>

                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Alternate Store</strong> -- Distance b/w store and cx's address is more than 8 km -- rider denied extra -- inform cx about cancellation & refund TATA shared -- order cancel -- same share to rider </li>

                        <li className="p-2">Out of polygon -- Distance b/w store and cx's address is less than 4 km -- ask rider to deliver the order and denied cancellation </li>

                        <li className="p-2">Out of polygon -- Distance b/w store and cx's address is more than 4 km -- <strong className="text-yellow-400 font-semibold">serviceable store -- </strong> ask rider to deliver & denied cancellation </li>

                        <li className="p-2">Out of polygon -- Distance b/w store and cx's address is more than 4 km -- <strong className="text-yellow-400 font-semibold">not serviceable store -- </strong> rider agreed for extra pay -- ask rider to deliver & raise a ticket after delivery </li>

                        <li className="p-2">Out of polygon -- Distance b/w store and cx's address is more than 4 km -- <strong className="text-yellow-400 font-semibold">not serviceable store -- </strong> rider denied for extra pay -- order cancel after informing cx & refund TAT shared -- same share to rider</li>

                    </ul>
                </div>
                {/* 
                <h3 className="text-lg font-semibold text-amber-400 mb-3">Different situtions</h3>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">Address Issue-Pin location / address mismatch</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Address Issue-Pin location/ address mismatch -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- 1.7 km from pin location  -- pitch extra payout -- ask DP to deliver on address</li>
                        <li className="p-2">Address Issue-Pin location/ address mismatch -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- 1.7 km from pin location  -- pitch extra payout  -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- requested cx to call DP for the better location guidance -- ask DP to deliver on address</li>
                        <li className='p-2'>Address Issue-Pin location/ address mismatch -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 350 m from pin location -- pitch extra payout -- DP agree -- ask DP to deliver order</li>
                        <li className='p-2'>Pin location/ address mismatch/ Location issue -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 350 m from pin location -- pitch extra payout -- DP agree -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- requested cx to call DP for the better location guidance -- ask DP to deliver order</li>
                        <li className='p-2'>Address Issue-Pin location/ address mismatch -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 5.1 km from pin location -- pitch extra payout -- DP disagree -- call Cx for cancellation & refund details -- Order cancel by me -- Same inform to the DP</li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">Address Issue-Pin location is Far/ Wrong Address  &#128073;<small className='text-blue-400'>(Pin location is Far -- It is only use when the distance between pin location & delivery address have very long distance)</small></h3>
                    <ul className="list-disc pl-5 text-white">
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- push back given -- but cx ready to accept -- same share to DP</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- push back given -- but cx not ready -- order cancel -- share same to DP</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- push back given -- but cx not ready -- not give proper consent of cancellation -- ask DP to follow automation in CDO</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- push back given -- but cx not ready -- not give proper consent of cancellation -- Already automation followed in CDO -- Order cancel -- Same share to DP</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- <strong className="text-fuchsia-500 font-semibold">Before ETA +10 mins</strong> -- call recording available -- cx wants cancel -- order canceled by me -- same shared to DP</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- <strong className="text-fuchsia-500 font-semibold">Before ETA +10 mins</strong> -- No call recording available -- ask DP to follow automation in CDO</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- <strong className="text-fuchsia-500 font-semibold">After ETA +10 mins</strong> -- ask DP to follow automation in CDO</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 2.9 km -- pitch extra payout -- DP agree -- Ask DP to deliver order & denied cancellation</li>
                        <li className="p-2">DP Said wrong address -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 2.9 km -- pitch extra payout -- DP Disagree -- Call Cx for cancellation & refund details -- Order cancel by me -- Same inform to the DP</li>
                    </ul>
                </div>
*/}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Location Issue / calling cx for Guidance</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Unable to find cx location and wanted to talk with cx </strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- requested cx to Call DP for better location guidance -- same share to DP</li>
                        <li className="p-2">DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Unable to find cx location and wanted to talk with cx</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx said he wanted his order at his pin location -- share same to the DP</li>
                        <li className="p-2">DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Unable to find cx location and wanted to talk with cx</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx said he wanted his order at his address & requested cx to call DP for the better location guidance -- pitch extra payout -- share same to the DP</li>
                        <li className='p-2'>DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Unable to find cx location and wanted to talk with cx</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> - -- ask rider to follow automation till ETA +12 min along with some call attempt -- DP agreed</li>
                        
                        <li className='p-2'>DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Unable to find cx location and wanted to talk with cx</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- CNR attempt available -- ETA + 12 min not crossed -- -- shared the same with DP</li>
                        <li className='p-2'>DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Unable to find cx location and wanted to talk with cx</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- CNR attempt available -- ETA + 12 min crossed -- order canceled -- shared the same with DP</li>
                    </ul>
                </div>



                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Validating address mismatch</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is less than 400 m -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is less than 400 m --  ask rider to reach the location then coordinate with cx and then deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is less than 400 m --  called cx -- ask cx to call rider for the better location guidance -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is less than 4 km -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>


                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong> ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong> <strong className="text-yellow-400 font-semibold">called cx -- </strong> ask cx to call rider for the location guidance -- ask rider to ensure delivery -- raise the ticket for the extra distance if travelled</li>


                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong> rider agreed for extra pay -- ask rider to deliver & raise the ticket after delivery</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong> rider denied for extra pay -- order cancel after informing cx & refund TAT shared -- same share to rider </li>

                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Incomplete Address</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Incomplete address -- mentioned address minor details missing -- called cx -- <strong className="text-yellow-400 font-semibold">cx responsive </strong> -- requested cx to call the rider for guidance -- same share to rider and asked to ensure delivery</li>

                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx -- <strong className="text-yellow-400 font-semibold">cx not responsive</strong> -- requested the rider for few more attempt and asked to wait -- asked to follow the automation process after ETA+ 5mins-- DP agreed</li>

                        
                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx -- <strong className="text-yellow-400 font-semibold">cx not responsive</strong> -- CNR attempt available -- ETA + 12 min not crossed -- ask rider to make some more call attempt till ETA +12 min </li>
                      
                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx -- <strong className="text-yellow-400 font-semibold">cx not responsive</strong> -- CNR attempt available -- ETA + 12 min crossed -- order canceled -- shared the same with DP</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default AddressIssue;

