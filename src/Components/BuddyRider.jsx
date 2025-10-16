import React from 'react'

const BuddyRider = () => {
    return (
        <div className='m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8'>
            <h2 className="text-center text-2xl font-semibold text-emerald-400 mb-1">Buddy Rider Assignment</h2>

             <p className="text-sm font-serif border border-green-400 mb-2 mt-4 p-2">
                <h3 className="text-center font-semibold text-red-400 mb-1"> Update only 16-22 OCT 2025 </h3>
                 <br></br>
                 <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'> 9 Kg</strong> -- enroute -- No Buddy assigned -- hence assigned 1 BR by me -- share same to DP</li> 
            </p>

            <div className='space-y-4'>

                
                <h1>2-Wheeler</h1>
                <h3>00-20 == 0 BR</h3>
                <h3>20-50 == 1 BR</h3>
                <h3>50-70 == 2 BR</h3>
                <h3>more than 70 == 3 BR</h3>
                <hr></hr>
                <h1>3-Wheeler</h1>
                <h3>00-34.99 == 0 BR</h3>
                <h3>35-59.99 == 1 BR</h3>
                <h3>more than 60 == 2 BR</h3>


                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Order weight less than 20 Kg :</h3>
                    <ul className="list-disc pl-5">
                         <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'>18 Kg</strong> -- tried to convince to deliver itself -- DP convinced -- asked to delivered as soon as possible</li>
                         
                         <li className='p-2'>DP requested BR -- 2-wheeler -- tried to convince to deliver itself -- not convinced -- highlight to concern team -- asked DP to wait for call back from concern team</li>

                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Order weight more than 20 Kg & at Billed Stage:</h3>
                    <ul className="list-disc pl-5">

                        <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> -- billed -- ask to assign 1 BR from his own application himself -- DP agreed</li>
                        <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> -- billed -- ask to assign 1 BR from his own application himself -- but DP wanted 1 extra BR -- tried to convince-- but not convinced -- highlight to concern team -- asked DP to wait for call back from concern team</li>
            
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Order weight more than 20 Kg & at Enroute Stage:</h3>
                    <ul className="list-disc pl-5">

                        <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> -- enroute -- No Buddy assigned -- hence assigned 1 BR by me -- share same to DP</li>
                        <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> -- enroute -- No Buddy assigned -- hence assigned 1 BR by me-- but DP wanted 1 extra BR -- tried to convince-- but not convinced -- highlight to concern team -- asked DP to wait for call back from concern team</li>
                        <li className='p-2'>DP requested BR -- 2-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong>  -- enroute -- 1 Buddy already assigned -- but DP wanted 1 extra BR -- tried to convince-- but not convinced -- highlight to concern team -- asked DP to wait for call back from concern team.
                        </li>
                    </ul>
                </div>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-md font-semibold text-emerald-300 mb-4">Order weight more than 20 Kg & at Enroute Stage:</h3>
                    <ul className="list-disc pl-5">

                        <li className='p-2'>DP requested BR -- 3-wheeler -- <strong className='text-yellow-300 font-semibold'>less than 34.99 Kg </strong> -- billed/enroute -- deny for Br request -- ask to manage and deliver this order as soon as possible </li>
                        <li className='p-2'>DP requested BR -- 3-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> x kg -- enroute -- No Buddy assigned -- hence assigned x BR by me -- same share to rider </li>
                        <li className='p-2'>DP requested BR -- 3-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> x kg -- enroute -- 1 Buddy already assigned -- but DP wanted 1 extra BR -- tried to convince-- but not convinced -- hence 1 more BR assigned by me -- same share to rider </li>
                        <li className='p-2'>DP requested BR -- 3-wheeler -- <strong className='text-yellow-300 font-semibold'>34 Kg</strong> x kg -- enroute -- 1 Buddy already assigned -- but DP wanted 1 extra BR -- deny for Br request -- ask to manage and deliver this order as soon as possible </li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default BuddyRider



