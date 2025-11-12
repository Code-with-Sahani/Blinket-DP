import React from 'react';

const PaymentIssue = () => {
    return (
        <div className="m-2 p-4 text-sm   bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>PAYMENT ISSUE</h2>
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Inactive Showing -- Cx trying to Pay</h3>

            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <p className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">success</strong> -- asked DP to deliver the order.</p>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul>
                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">failed</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- refund within 6 hours if any debite -- convinced to pay in cash -- cx agreed -- asked DP to collect cash from cx and deliver the order </li>
                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">failed</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- refund within 6 hours if any debited -- cx refused to pay in cash -- order still with rider -- order cancelled -- shared with DP </li>
                         <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">failed</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- refund within 6 hours if any debited -- cx refused to pay in cash -- order already handed over -- asked DP to connect with SM </li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                <div className="text-sm border border-green-400 mb-2 mt-4 p-2">
                       <p className="text-sm   mb-2 mt-4 p-2">
              Payment Issue -- check payment status -- pending -- rider not getting an option of "Get help" i.e. rider not able to follow new update of payment -- ask the rider to contact the SM, and request the SM to share the videos or photos with the Blinkit team -- call close 
            </p>
                    <p className="text-sm   0 mb-2 mt-4 p-2">
              Payment Issue -- check payment status -- pending -- show "Something went wrong" when rider upload payment proof -- ask rider to refresh this but stil same -- ask the rider to contact the SM, and request the SM to share the videos or photos with the Blinkit team -- call close 
            </p>
                    <p className="text-sm   mb-2 mt-4 p-2">
              Payment Issue -- check payment status -- pending -- asked rider to Click on "Get help" -- and then upload cx's payment proof -- then ask to click "cancelling QR payment" -- ask rider to follow this step bcos after this cx get notified regarding his refund -- cx get ready to do payment again -- if not doing payment again by cx -- then reconnect us again (rider nto able to follow this steps over the call)
            </p>
            
                </div>

                    <ul>

                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending -- </strong>asked rider to Click on "Get help" -- and then upload cx's payment proof -- then ask to click "cancelling QR payment" -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- inform cx you get an notification regrading payment refund -- cx agree to pay in cash -- asked DP to collect cash and deliver </li>

                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending -- </strong>asked rider to Click on "Get help" -- and then upload cx's payment proof -- then ask to click "cancelling QR payment" -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- inform cx you get an notification regrading payment refund -- cx not agree to pay in cash -- order still with rider -- order cancelled -- shared with DP </li>

                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending -- </strong>asked rider to Click on "Get help" -- and then upload cx's payment proof -- then ask to click "cancelling QR payment" -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- inform cx you get an notification regrading payment refund -- cx not agree to pay in cash -- order already handed over -- asked DP to connect with SM </li>

                        {/* <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- convinced to pay in cash -- cx agreed -- refund within 6 hours -- asked DP to collect cash and deliver </li>
                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx refused to pay in cash -- order still with rider -- order cancelled -- shared with DP </li>
                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx refused to pay in cash -- order already handed over -- asked DP to connect with SM </li> */}
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul>
                        <li className="p-2">Payment Issue -- Change Issue -- called cx --<strong className="text-amber-300 font-semibold">cx responsive</strong> -- asked cx if possible to receive the remaining amount on his/her UPI or online -- cx agreed -- same share to rider// further no issue-call close  </li>
                       
                        <li className="p-2">Payment Issue -- Change Issue -- called cx --<strong className="text-amber-300 font-semibold">cx responsive</strong> -- asked cx if possible to receive the remaining amount on his/her UPI or online -- cx disagreed -- order at rider -- order cancel -- same share to rider  </li>

                        <li className="p-2">Payment Issue -- Change Issue -- called cx --<strong className="text-amber-300 font-semibold">cx responsive</strong> -- asked cx if possible to receive the remaining amount on his/her UPI or online -- cx disagreed & asking to return order to rider but cx refused -- order at cx// guided to SM  </li>

                          <hr className='mb-5 mt-5' />
                       
                    <li className="p-2">Payment Issue -- Change Issue -- called cx --<strong className="text-amber-300 font-semibold">cx not responsive</strong> -- ask rider to manage change and -- rider agree to arrange -- further no issue  call close</li>
 
                    <li className="p-2">Payment Issue -- Change Issue -- called cx --<strong className="text-amber-300 font-semibold">cx not responsive</strong> Payment Issue -- check payment status -- change issue -- called cx twice -- cx not responsive -- ask rider to manage change but rider not able todo that -- rider adamant -- order at rider -- order cancel  -- same share to rider</li>

                        
                    </ul>
                </div>

                <h3 className="text-lg font-semibold text-emerald-400 mt-5">No inactive showing but cx said he already paid.</h3>
                <div className="p-3 bg-gray-600 rounded-md shadow">
                    <ul>
                        <li className="p-2">Payment Issue -- <strong className="text-amber-300 font-semibold">No Inactive</strong> --ask rider to wait for 5 min just for payment reflecting in your application after cx paid -- then after that ask rider to follow all 3 step for QR payment cancelling -- then calling cx -- and inform cx that you get an SMS notification regarding payment cancellation -- then do payment again in cash or on rider's personal QR -- same share to rider</li>
                       
                    </ul>
                </div>

                <h3 className="text-lg font-semibold text-emerald-400 mt-5">Customer not Responsive</h3>
                <div className="p-3 bg-gray-600 rounded-md shadow">
                    <ul>
                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending/No Inactive</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- cx refused to pay in cash as said by DP -- order still with rider -- order cancelled -- shared with DP </li>
                        <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">pending/No Inactive</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx not responsive</strong> -- cx refused to pay in cash as said by DP -- order already handed over -- asked DP to connect with SM </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PaymentIssue;
















