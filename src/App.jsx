import React from 'react'
import AddressIssue from './Components/AddressIssue'
import PaymentIssue from './Components/PaymentIssue'
import UMD from './Components/UMD'
import UD_SOS from './Components/UD_SOS'
import CNR from './Components/CNR'
import CDO from './Components/CDO'
import BuddyRider from './Components/BuddyRider'
import DP_Not_Answer from './Components/DP_Not_Answer'
import OTP from './Components/OTP'
import Return_Replacement from './Components/Return_Replacement'

const App = () => {
  return (
    <div className='h-full w-full bg-gray-900 text-white'>
      <header className=' p-4 text-pink-200 text-center text-2xl font-semibold' >Comment Sheet For DP support - Certified by "Sahani 	&#128517;"</header>
      <DP_Not_Answer/>
      <AddressIssue/>
      <CNR/>
      <CDO/>
      <UMD/>
      <OTP/>
      <UD_SOS/>
      <PaymentIssue/>
      <BuddyRider/>
      <Return_Replacement/>
    </div>
  )
}

export default App
