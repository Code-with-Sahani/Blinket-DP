import React from 'react';

const PaymentIssue = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">

            {/* Title */}
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'> PAYMENT ISSUE</h2>
            <h3 className="text-lg font-semibold text-amber-400 mb-3">
                Inactive Showing - Cx trying to Pay
            </h3>

            {/* Section Wrapper */}
            <div className="space-y-4">

                {/* Payment Success Case */}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <li className="p-2">
                        Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> success </strong> 
                        -- asked DP to deliver the order.
                    </li>
                </div>

                {/* Payment Failed Cases */}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <li className="p-2">Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> failed </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx responsive </strong> -- convinced to pay in cash -- cx agreed -- asked DP to collect cash from cx and deliver the order.
                    </li>

                    <li className="p-2">Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> failed </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx responsive </strong> -- cx refused to pay in cash -- refund within 6 hours if any debited-- order cancelled -- shared with DP.
                    </li>
                </div>

                {/* Pending Payment Cases */}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <li className="p-2">Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> pending </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx responsive </strong> -- convinced to pay in cash -- cx agreed -- refund within 6 hours -- asked DP to collect cash and deliver.
                    </li>

                    <li className="p-2">Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> pending </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx responsive </strong> -- cx refused to pay -- order cancelled -- refund within 6 hours -- shared with DP.
                    </li>
                </div>

                {/* CDO Issues */}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <li className="p-2">CDO -- cx wanted to cancel due to 
                        <strong className="text-amber-300 font-semibold"> change issue </strong> -- asked rider to arrange change and ensure delivery.
                    </li>
                    
                    <li className="p-2">CDO -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx responsive </strong> -- cx wanted cancellation due to 
                        <strong className="text-amber-300 font-semibold"> change issue </strong> -- asked rider to arrange change -- DP adamant -- guided to SM.
                    </li>
                </div>

                {/* No Inactive Showing - No Payment by Cx */}
                <h3 className="text-lg font-semibold text-amber-400 mt-5">
                    No Inactive Showing - No Payment by Cx
                </h3>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <li className="p-2">Payment Issue -- 
                        <strong className="text-amber-300 font-semibold"> No inactive i.e. COD order </strong> -- asked DP to collect cash and ensure delivery.
                    </li>

                    <li className="p-2">Payment Issue -- 
                        <strong className="text-amber-300 font-semibold"> No inactive i.e. COD order </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx responsive </strong> -- confirmed cx where he paid (Blinket App) -- requested DP to manage.
                    </li>
                </div>

                {/* Final Cases */}
                <div className="p-3 bg-gray-600 rounded-md shadow">
                    <li className="p-2">Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> pending/No Inactive </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx not responsive </strong> -- cx refused to pay in cash -- order still with rider -- order cancelled -- shared with DP.
                    </li>

                    <li className="p-2">Payment Issue -- check payment status -- 
                        <strong className="text-amber-300 font-semibold"> pending/No Inactive </strong> -- called cx -- 
                        <strong className="text-red-400 font-semibold"> cx not responsive </strong> -- cx refused to pay in cash -- order already handed over -- asked DP to connect with SM.
                    </li>
                </div>

            </div>

        </div>
    );
}

export default PaymentIssue;
