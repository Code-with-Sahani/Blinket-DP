import React from 'react'

const Return_Replacement = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>Return / Replacement</h2>

            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">
                        <li className='p-2'>RPU -- rider stated that cx returning an open/ damage/ used/ wrong product -- inform the rider that was checked by cx support already -- requested to collect the same and submit it at store</li>

                        <li className="p-2">RPU-CNR -- 2 Call Attempt Not available ❎ -- ask rider to make 1 more call attempt then reconnect us if any issue </li>

                        <li className='p-2'>RPU-CNR -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- share same to DP & ensure pickup/Redelivery </li>

                        <li className="p-2">RPU-CNR -- called cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- ask rider to wait till ETA +12 min i.e. 3:33 PM and try to make some more call attempts</li>
                       
                        <li className="p-2">RPU-CNR -- called cx twice -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- order cancel by me under CNR -- same share to DP</li>
                       
                        <li className="p-2">RPU-CDO -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx confirmed cx did not have an items -- order cancel by me -- ask cx to connect cx support for better help -- rider issue resolved </li>

                        <li className="p-2">RPU-CDO -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx created wrong pickup/Redelivery return -- order cancel by me -- ask cx to create the return by selecting correct reason & also ask cx to connect cx support for better help -- rider issue resolved </li>

                        <li className="p-2">RPU -- DP denied due to bike issue -- Enroute -- tried to convince DP for delivery but not convinced -- no option to reassign the rider -- ask rider to contact SM</li>

                    </ul>
                </div>



            </div>


        </div>
    )
}

export default Return_Replacement




