import React from 'react'

const DP_Not_Answer = () => {
  return (
    <div className='m-2 p-4 text-sm bg-gray-400 text-white rounded-md md:p-6 lg:p-8'>
    <h2 className="text-center text-2xl font-bold text-black mb-8"> DP Not Answering </h2>

    <div className='space-y-4'>
 
        <div className="p-3  bg-gradient-to-b from-gray-800 to-gray-700 text-green-300 rounded-md shadow">
            <ul className="list-disc pl-5">

                <li className='p-2'>Dp Not Responding -- Call Twice -- Not responsive </li>
                <li className='p-2'>Dp Not Responding -- previous Agent already Call him -- hence Call Once -- Not Answering</li>

            </ul>
        </div>
 

    </div>

</div>
  )
}

export default DP_Not_Answer
