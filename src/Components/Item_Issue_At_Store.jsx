import React from 'react'

const Item_Issue_At_Store = () => {
  return (
    <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
      <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-5'>Item issue at store</h2>

      <div className="space-y-4">
        <div className="p-3 bg-gray-700 rounded-md shadow">
          <ul className="list-disc pl-5">
            <li className='p-2'>Item Issues at Store — not getting order from the store — guided to SM</li>
            <li className='p-2'>Item issue at store — Partial item damage — ask rider to take the item which he received — go for the delivery if there is any issue, then reconnect us again</li>
            <hr className='mb-5 mt-5' />
            <li className='p-2'>Item issue at store — full item out of stock — <strong className='text-yellow-300 font-semibold'>billed</strong> — ask to connect SM</li>
            <li className='p-2'>Item issue at store — full item out of stock — <strong className='text-yellow-300 font-semibold'>not billed</strong> — ask rider to ask picker to mark unavailable that item</li>
            <li className='p-2'>Item issue at store — Partial item out of stock — ask rider to take the partial item — go for the deloivery if there is any issue then reconnect us again</li>
          </ul>
        </div>



      </div>


    </div>
  )
}

export default Item_Issue_At_Store
