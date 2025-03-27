import React from 'react'

const Large_Order = () => {
  return (
    <div className='m-2 p-2 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8'>
      <h2 className="text-center text-2xl font-semibold text-emerald-400 mb-8">Large Order</h2>
      <div className='space-y-4'>
        <div className="p-3 bg-gray-700 rounded-md shadow">
          <ul className="list-disc pl-5">
            <li className='p-2'>CDO -- by mistake/address issue/Duplicate order -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- Push back given to Cx -- cx denied to accept -- ask rider to Submit the order at store -- then reconnect us again regarding the cancellation.</li>
            <li className='p-2'>CDO -- by mistake/address issue/Duplicate order -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- Push back given to Cx -- cx denied to accept -- order submitted at store -- called SM -- SM confirmed -- Order cancel by TL -- same shared to DP</li>
            <li className='p-2'>CDO -- by mistake/address issue/Duplicate order -- called cx -- <strong className='text-red-400'>cx responsive</strong> -- Push back given to Cx -- cx denied to accept -- order submitted at store -- called SM -- SM unresponsive -- Order cannot be canceled without SM confirmation -- Same shared to DP</li>
            <li className='p-2'>CDO -- by mistake/address issue/Duplicate order -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- <strong className="text-amber-300 font-semibold">before ETA +10 minutes</strong> -- call recording available -- order submitted at store -- called SM -- SM confirmed -- Order canceled by TL -- same shared to DP</li>
            <li className='p-2'>CDO -- by mistake/address issue/Duplicate order -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- <strong className="text-amber-300 font-semibold">before ETA +10 minutes</strong> -- call recording not available -- ask rider to follow CDO automation</li>
            <li className='p-2'>CDO -- by mistake/address issue/Duplicate order -- called cx -- <strong className='text-red-400'>cx not responsive</strong> -- <strong className="text-amber-300 font-semibold">after ETA +10 minutes</strong> -- ask rider to follow CDO automation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Large_Order
