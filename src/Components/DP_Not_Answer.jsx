import React from 'react'

const DP_Not_Answer = () => {
  return (
    <div className='m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8'>
      <h2 className="text-center text-2xl font-bold text-emerald-400 mb-8">DP Not Answering</h2>

      <div className='space-y-4'>
        <div className="p-3 bg-gray-700 rounded-md shadow">
          <ul className="list-disc pl-5 space-y-2">

            <li className="mb-8 border border-yellow-400 p-2">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2 mt-2 pb-2">
                🚚 Only for Today ( 09 Aug 2025 )
              </h3>
              <ul className="list-disc pl-5 pr-5 list-inside space-y-2 text-sm leading-relaxed">
                <li>Call Received by me -- but DP disconnect the call himself without saying anything</li>
                <li>Dp Not Responding -- Call once -- Not responsive</li>
             //   <li>Address issue -- location mismatch -- Distance between store & address is more than 4km -- rider agreed with extra pay -- ask rider to deliver</li>
              //  <li>Address issue -- location mismatch -- Distance between store & address is more than 4km -- rider disagreed with extra pay -- order cancel & refund TAT share to cx -- same share to rider</li>
              //  <li>Address issue -- location mismatch -- Distance between store & address is more than 4km -- rider disagreed with extra pay -- Cx not responsive -- order cancel -- same share to rider</li>
              </ul>
            </li>

            <li>Dp Not Responding -- Call Twice -- Not responsive</li>
            <li>Dp Not Responding -- previous Agent already Call him -- hence Call Once -- Not Answering</li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default DP_Not_Answer


