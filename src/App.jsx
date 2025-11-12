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
import Nonlive from './Components/Nonlive'

const App = () => {
  return (
    <div className='h-full w-full bg-gray-300 text-white'>

       <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md md:p-6 lg:p-8">
            <h2 className="text-center text-2xl  font-bold text-emerald-400 mb-8">Comment Sheet For DP support - Certified by "Sahani &#128517;" & Last Updated :11-11-2025 at 03:18:00</h2>
       </div>
      
      
      <DP_Not_Answer />
      <CNR />
      <CDO />
      <Large_Order />
      <Item_Issue_At_Store />
      <UMD />
      <OTP />
      <UD_SOS />
      <PaymentIssue />
      <BuddyRider />
      <Return_Replacement />
      <AddressIssue />
      <Nonlive/>
    </div>
  )
}

export default App
