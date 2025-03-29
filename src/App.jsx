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
import Item_Issue_At_Store from './Components/Item_Issue_At_Store'
import Large_Order from './Components/Large_Order'

const App = () => {
  return (
    <div className='h-full w-full bg-blue-500 text-white'>
      <header className=' p-4 text-pink-200 text-center text-2xl font-semibold' >Comment Sheet For DP support - Certified by "Sahani 	&#128517;"</header>
      <DP_Not_Answer/>
      <CNR/>
      <CDO/>
      <Large_Order/>
      <Item_Issue_At_Store/>
      <UMD/>
      <OTP/>
      <UD_SOS/>
      <PaymentIssue/>
      <BuddyRider/>
      <Return_Replacement/>
      <AddressIssue/>
    </div>
  )
}

export default App
