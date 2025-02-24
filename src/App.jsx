import React from 'react'
import AddressIssue from './Components/AddressIssue'
import PaymentIssue from './Components/PaymentIssue'
import UMD from './Components/UMD'
import UD_SOS from './Components/UD_SOS'
import CNR from './Components/CNR'
import CDO from './Components/CDO'
import BuddyRider from './Components/BuddyRider'
import DP_Not_Answer from './Components/DP_Not_Answer'

const App = () => {
  return (
    <div className='h-full w-full bg-gray-900 text-white'>
      <header className=' p-4 text-pink-200 text-center text-2xl font-semibold' > Rider Support Comment Sheet - Certified by "Chahat Tharwani"</header>
      {/* <AddressIssue/> */}
      <DP_Not_Answer/>
      <CNR/>
      <CDO/>
      <UMD/>
      <UD_SOS/>
      <PaymentIssue/>
      <BuddyRider/>
    </div>
  )
}

export default App
