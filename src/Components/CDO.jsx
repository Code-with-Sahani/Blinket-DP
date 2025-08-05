import React from 'react';

const CDO = () => {
    return (
        <div className='m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8'>
            <h2 className="text-center text-2xl font-semibold text-emerald-400 mb-4">CDO - Customer Denying the Order</h2>

            <div className='space-y-4'>

                <div className="p-3 bg-gray-900 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">CDO : Due to Address Issue Updates</h3>
                    <ul className="list-disc pl-5">
                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Serviceable
                        </strong> -- ask rider to deliver at cx correct address -- ask to raise ticket as well after delivery for extra payout -- rider agree -- Call close
                        </li>

                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Serviceable
                        </strong> -- ask rider to deliver at cx correct address -- rider denied and adamant -- try to convince cx as well but convinced -- order cancel by informing the cx -- same share to rider</li>

                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Serviceable
                        </strong> -- ask rider to deliver at cx correct address -- rider denied and adamant -- try to convince cx as well but convinced -- order cancel -- refund TAT sahre to cx -- same share to rider</li>
                    </ul>
                    <br />

                    <h3 className="text-md font-semibold text-emerald-300 mb-4 mt-4">CDO : Address wrong // Other State or District </h3>
                    <ul className="list-disc pl-5">
                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Not Serviceable
                        </strong> -- other state/District -- try to convince cx as well but convinced -- order cancel by informing the cx -- same share to rider</li>

                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Not Serviceable
                        </strong> -- other state/District -- try to convince cx as well but convinced -- order cancel -- order cancel -- refund TAT sahre to cx -- same share to rider</li>

                        <hr className=' mt-8 mb-8' />

                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Not Serviceable
                        </strong> -- ask rider to deliver at cx correct address -- rider agree with the extra payout -- ask to raise a ticket -- Call close
                        </li>

                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Not Serviceable
                        </strong> -- ask rider to deliver at cx correct address -- rider disagree with the extra payout -- try to convince cx as well but convinced -- order cancel by informing cx -- same share to rider </li>

                        <li className='p-2'>CDO -- Address wrong -- Address given by cx -- <strong className='text-green-400'>Not Serviceable
                        </strong> -- ask rider to deliver at cx correct address -- rider disagree with the extra payout -- try to convince cx as well but convinced -- order cancel -- refund TAT sahre to cx -- same share to rider</li>


                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Cancel due to Mistake Reason:</h3>
                    <ul className="list-disc pl-5">
                        <li className='p-2'>CDO -- <strong className='text-yellow-300 font-semibold'>due to by mistake</strong> -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- tried to convince customer -- cx ready to accept -- ask DP to ensure the delivery</li>

                        <li className='p-2'>CDO -- <strong className='text-yellow-300 font-semibold'>due to by mistake</strong> -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- tried to convince customer -- cx not ready to accept -- <strong className='text-yellow-300 font-semibold'>consent given by cx</strong> -- cancel order -- same info shared to DP</li>

                        <li className='p-2'>CDO -- <strong className='text-yellow-300 font-semibold'>due to by mistake</strong> -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- tried to convince customer -- cx not ready to accept -- <strong className='text-yellow-300 font-semibold'>consent given by cx</strong> -- cancel order & refund TAT shared -- same info shared to DP</li>

                        <li className='p-2'>CDO -- <strong className='text-yellow-300 font-semibold'>due to by mistake</strong> -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- tried to convince customer -- cx not ready to accept -- <strong className='text-yellow-300 font-semibold'>consent not given by cx</strong> -- ask DP to follow automation in CDO</li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Cancel due to Delay Reason:</h3>
                    <ul className="list-disc pl-5">
                        <li className='p-2'>CDO -- <strong className='text-yellow-300 font-semibold'>due to Delay</strong> -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- tried to convince customer -- cx ready to accept -- ask DP to ensure the delivery</li>
                        <li className='p-2'>CDO -- <strong className='text-yellow-300 font-semibold'>due to Delay</strong> -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- tried to convince customer -- cx not ready to accept -- cancel the order & Refund TAT shared -- same info shared to DP</li>

                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Guided to Chat Support</h3>
                    <ul className="list-disc pl-5">
                        <li className='p-2'>CDO -- due to item missing/Expired/Rotten/Damage item/wrong item received -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- asked cx to connect their chat support -- same info shared to DP</li>
                        <li className='p-2'>CDO -- due to item missing/Expired/Rotten/Damage item/wrong item received -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- asked cx to connect their chat support -- but cx insists us to cancel -- order canceled by me -- same info shared to DP</li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Customer Not Responsive:</h3>
                    <ul className="list-disc pl-5">
                        <li className='p-2'>CDO -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- call recording available -- cx wants cancel -- order canceled by me -- same shared to DP</li>
                        <li className='p-2'>CDO -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- call recording available -- cx does not want to cancel -- ask DP to follow automation in CDO if cx wants to cancel else deliver the order</li>
                        <li className='p-2'>CDO -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- No call recording available -- ask DP to follow automation in CDO if cx wants to cancel else deliver the order</li>

                        <li className='p-2'>CDO -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- Error in OS in call recording -- ask DP to follow automation in CDO if cx wants to cancel else deliver the order</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CDO;

