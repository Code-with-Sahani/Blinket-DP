import React from 'react'

const OTP = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>OTP related Issue</h2>
            <h3 className="text-lg font-semibold text-amber-400 mb-3">UMD due to OTP issue</h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">

                        <li className='p-2'>UMD due to OTP issue -- called cx for confirmation -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- confirmation done ✅-- highlight to concern team for UMD -- same share to rider and ask to wait for few moment</li>

                        <li className='p-2'>UMD due to OTP issue -- called cx for confirmation -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx not confirm ❎-- ask rider to deliver and mark the order delivered from his end</li>

                        <li className="p-2">UMD due to OTP issue -- called cx for confirmation -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx not sharing OTP with rider -- order is with rider -- order cancel -- same share to DP</li>

                        <li className="p-2">UMD due to OTP issue -- called cx for confirmation -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx not sharing OTP with rider -- order is with rider -- order cancel and refund TAT shared -- same share to DP
                        </li>
                        <li className="p-2">UMD due to OTP issue -- called cx for confirmation -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx not sharing OTP with rider --  Order already handover to the cx -- ask DP to connect wth the SM</li>

                        <li className="p-2">UMD due to OTP issue -- called cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- ask DP to get OTP from the cx & mark order as delivered from their end</li>

                    </ul>
                </div>



            </div>


        </div>
    )
}

export default OTP
