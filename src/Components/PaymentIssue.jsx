import React from 'react';

const PaymentIssue = () => {
    return (
        <div className="m-2 p-4 text-sm   bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>PAYMENT ISSUE</h2>
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Inactive Showing -- Cx trying to Pay</h3>

            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <li className="p-2">Payment Issue -- check payment status -- <strong className="text-amber-300 font-semibold">success</strong> -- asked DP to deliver the order.</li>
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
                        <li className="p-2">CDO -- cx wanted to cancel due to <strong className="text-amber-300 font-semibold">change issue</strong> -- asked rider to arrange change and ensure delivery </li>
                        <li className="p-2">CDO -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx wanted cancellation due to <strong className="text-amber-300 font-semibold">change issue</strong> -- asked rider to arrange change -- DP adamant -- guided to SM </li>
                    </ul>
                </div>

                <h3 className="text-lg font-semibold text-amber-400 mt-5">No Inactive Showing -- No Payment by Cx</h3>
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul>
                        <li className="p-2">Payment Issue -- <strong className="text-amber-300 font-semibold">No inactive i.e. COD order</strong> -- asked DP to collect cash and ensure delivery </li>
                        <li className="p-2">Payment Issue -- <strong className="text-amber-300 font-semibold">No inactive i.e. COD order</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- confirmed cx where he paid (rider Personal QR) -- requested DP to manage </li>
                        <li className="p-2">Payment Issue -- <strong className="text-amber-300 font-semibold">No inactive i.e. COD order</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx claimed that he already paid over Blinket QR -- but it is not visible on OS -- requested cx to connect chat support -- cx agree to talk with support -- ask rider to wait for few moment anfd if any any issue then reconnet us again </li>
                        <li className="p-2">Payment Issue -- <strong className="text-amber-300 font-semibold">No inactive i.e. COD order</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx claimed that he already paid over Blinket QR -- but it is not visible on OS -- requested cx to connect chat support -- but cx denied -- order is with rider -- order cacnel -- same share to rider </li>
                        <li className="p-2">Payment Issue -- <strong className="text-amber-300 font-semibold">No inactive i.e. COD order</strong> -- called cx -- <strong className="text-red-400 font-semibold">cx responsive</strong> -- cx claimed that he already paid over Blinket QR -- but it is not visible on OS -- requested cx to connect chat support -- but cx denied -- order already handed over to cx -- ask DP to connect SM </li>
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













