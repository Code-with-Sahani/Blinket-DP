import React from 'react'

const Return_Replacement = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-1'>Return / Replacement</h2>

            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">

                        <li className='p-2'>Pickup order/ Redelivery-CNR -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- share same to DP & ensure pickup/Redelivery </li>

                        <li className="p-2">Pickup order/ Redelivery-CNR -- called cx -- <strong className='text-red-400 font-semibold'>Cx not responsive</strong> -- order cancel -- same share to DP</li>
                       
                        <li className="p-2">Pickup order/ Redelivery-CDO -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx do not want to return -- order cancel -- share same to DP</li>

                        <li className="p-2">Pickup order/ Redelivery-CDO -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- cx created wrong pickup/Redelivery return -- order cancel -- ask cx to create the return by selecting correct reason -- share same to DP</li>

                        <li className="p-2">Pickup order/ Redelivery -- DP denied due to bike issue -- called cx -- <strong className='text-red-400 font-semibold'>Cx responsive</strong> -- same share to Cx -- order cancel -- same share to DP</li>

                    </ul>
                </div>



            </div>


        </div>
    )
}

export default Return_Replacement
