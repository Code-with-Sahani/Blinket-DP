import React from 'react'

const Nonlive = () => {
  return (
    <div className='m-2 p-2 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8'>
      <h2 className="text-center text-2xl font-bold text-emerald-400 mb-8"> Non-live Order</h2>

      <div className='space-y-4'>

        <div className="p-3 bg-gray-700 rounded-md shadow">
          <ul className="list-disc pl-5">
            <li className='p-2'>Non live order - Dp said they don't had an issue now - call close </li>
            <li className='p-2'>Non live order - Dp had an issue related with a cold bag - guided to SM - call close </li>
            <li className='p-2'>Non live order - cant able to coordinate with DP  - language issues - call close </li>
            <li className='p-2'>Non live order - Dp wanted to know about the extra pay only -- explain & ask to raise the ticket after delivery - call close </li>
            <br></br>
            <li className='p-2'>Non live order - Dp stated that by mistake order marked delviered -- and wanted the cx details -- denied to share & requested to connect SM for better help - call close </li>
            <li className='p-2'> Non Live order related - batch order - wanted to know that they delivered the 2nd order first - ask to delivered the order in sequence which show in his app - call close</li>
            <br></br>

             <li className='p-2'>Non Live order related -- dp said that cx said he/she did come in the next x min but till now not came yet -- ETA+ 12 min not cross -- called cx -- cx not responsive -- ask rider to follow automation till ETA +12 min along with some call attempt </li>
             <li className='p-2'>Non Live order related -- dp said that cx said he/she did come in the next x min but till now not came yet -- ETA+ 12 min not cross -- called cx -- cx responsive -- cx said her agent reached at gate in the next 2 min  - same share to rider  & ask to ensure delivery</li>
          <li className='p-2'>-- call Cx -- Cx responsive -- cx wanted to cancel this order -- pushback given but not agreed to -- order canceled -- same share to rider  </li>
            <br></br>
          </ul>
        </div>


      </div>

    </div>
  )
}

export default Nonlive




