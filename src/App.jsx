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

const App = () => {
  return (
    <div className='h-full w-full bg-gray-900 text-white'>
      <header className=' p-4 text-pink-200 text-center text-2xl font-semibold' >Comment Sheet For DP support - Certified by "Sahani 	&#128517;"</header>
      <details>
        <summary>DP is not Responding</summary>
        <DP_Not_Answer />
      </details>
      <details>
        <summary>CNR</summary>
        <CNR />
      </details>
      <details>
        <summary>CDO</summary>
        <CDO />
      </details>
      <details>
        <summary>Item issue at Store</summary>
        <Item_Issue_At_Store />
      </details>
      <details>
        <summary>UMD</summary>
        <UMD />
      </details>
      <details>
        <summary>OTP issue</summary>
        <OTP />
      </details>
      <details>
        <summary>Rider Deny to Deliver</summary>
        <UD_SOS />
      </details>
      <details>
        <summary>Payment Issue</summary>
        <PaymentIssue />
      </details>
      <details>
        <summary>Buddy RIder assignment</summary>
        <BuddyRider />
      </details>
      <details>
        <summary>Pickup/ Redelivery</summary>
        <Return_Replacement />
      </details>
      <details>
        <summary>Address issue</summary>
        <AddressIssue />
      </details>

    </div>
  )
}

export default App
