import React from 'react';

const AddressIssue = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>Address Issue </h2>
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Out of Polygon</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Alternate Store</strong> -- Ask DP to deliver order & denied cancellation</li>
                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- Ask DP to deliver order & denied cancellation</li>
                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- 2.2 km -- pitch extra payout -- Ask DP to deliver order & denied cancellation</li>
                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 2.9 km -- pitch extra payout -- DP agree -- Ask DP to deliver order & denied cancellation </li>
                        <li className="p-2">Out of polygon -- <strong className="text-yellow-400 font-semibold">Not Serviceable</strong> -- 2.9 km -- pitch extra payout -- DP Disagree -- Call Cx for cancellation & refund details -- Order cancel by me -- Same inform to the DP</li>
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
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">Address Issue-Pin location is Far/ Wrong Address  &#128073;<small className='text-blue-400'>(Pin location is Far : It is only use when the distance between pin location & delivery address have very long distance)</small></h3>
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
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">Location Issue / calling cx for Guidance</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- requested cx to Call DP for better location guidance -- same share to DP</li>
                        <li className="p-2">DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx said he wanted his order at his pin location -- share same to the DP</li>
                        <li className="p-2">DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx said he wanted his order at his address & requested cx to call DP for the better location guidance -- pitch extra payout -- share same to the DP</li>
                        <li className='p-2'>DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- requested the rider for few more attempt and asked to wait -- asked to follow the automation process after ETA+10mins-- DP agreed</li>
                        <li className='p-2'>DP confused Location issue -- <strong className="text-yellow-400 font-semibold">Serviceable</strong> -- Called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- CNR attempt available -- order canceled -- shared the same with DP</li>
                    </ul>
                </div> 

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">Incomplete Address</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Incomplete address -- mentioned address minor details missing -- called cx -- <strong className="text-red-400 font-semibold">cx responsive </strong> -- requested cx to call the rider for guidance -- same share to rider and asked to ensure delivery</li>
                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- requested the rider for few more attempt and asked to wait -- asked to follow the automation process after ETA+10mins-- DP agreed</li>
                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- CNR attempt available -- order canceled -- shared the same with DP</li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">New Updated Regarding address</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Address Issue :  <strong className="text-red-400 font-semibold">Distance b/w location & address &lt; 400 meters :</strong> ask rider to deliver the order : raise the ticket for the extra distance if travelled</li>
                        <li className='p-2'>Address Issue :  <strong className="text-red-400 font-semibold">Distance b/w location & address &gt; 400 meters :</strong> <strong className="text-yellow-400 font-semibold"> but distance b/w Store & address &lt; 4 km :</strong> ask rider to deliver the order : raise the ticket for the extra distance if travelled</li>
                        <li className='p-2'>Address Issue :  <strong className="text-red-400 font-semibold">Distance b/w location & address &gt; 400 meters :</strong> <strong className="text-yellow-400 font-semibold"> but distance b/w Store & address &gt; 4 km :</strong> Store is Serviceable : ask rider to deliver the order : raise the ticket for the extra distance if travelled</li>
                        <li className='p-2'>Address Issue :  <strong className="text-red-400 font-semibold">Distance b/w location & address &gt; 400 meters :</strong> <strong className="text-yellow-400 font-semibold"> but distance b/w Store & address &gt; 4 km :</strong> Store is Not Serviceable : ask rider to deliver the order with extra payout : rider agreed : ask him to deliver & raise a ticket for the extra pay</li>
                        <li className='p-2'>Address Issue :  <strong className="text-red-400 font-semibold">Distance b/w location & address &gt; 400 meters :</strong> <strong className="text-yellow-400 font-semibold"> but distance b/w Store & address &gt; 4 km :</strong> Store is Not Serviceable : ask rider to deliver the order with extra payout : DP denied extra payout : called cx inform about cancellation & refund TAT shared : order cancel : same share to DP</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default AddressIssue;
