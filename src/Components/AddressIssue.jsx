import React from 'react';

const AddressIssue = () => {
    return (
        <div className="m-2 p-4 text-sm  bg-gray-800 text-white rounded-md -p-6 lg--p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-4'>Address Issue </h2>

            <div className="text-sm border border-green-400 mb-2 mt-4 p-2">
                {/* <p className="text-sm mb-2 mt-4 p-2">
                    Address issue -- mentioning distance here --  rider wanted to know where he has to go -- called cx -- ask cx to call rider for the correct location guidance -- same share to rider
                </p>

                <p className="text-sm mb-2 mt-4 p-2">
                    Address issue -- mentioning distance here --  rider wanted to know where he has to go -- called cx -- cx not responsive -- ask rider to reach at given cx's location -- ask rider to follow the automation process & guide the steps
                </p> */}

                <p className="text-sm mb-2 mt-4 p-2">
                     Address issue// location issue -- high confidence -- but rider is not at geo-fence or at location -- ask rider to reach the geo-fence first or at location then coordinate with cx and then deliver the order --if any issue then reconnect us again
                </p>


            </div>

            <div className="text-sm border border-green-400 mb-2 mt-4 p-2">
                <h3 className="text-sm font-semibold text-emerald-400 mb-3"> I don't know the pin location order</h3>
                <p className="list-disc pl-5">
                    <p className="text-sm mb-2 mt-4 p-2">
                        Address issue -- I don't know the pin location order -- ask rider to reach the delivery area then coordinate with cx and then deliver the order -- also inform that they will definitely receive the extra pay for this order after it gets delivered -- if there is any issue then reconnect us again
                    </p>
                    <p className="text-sm mb-2 mt-4 p-2">
                        Address issue -- I don't know the pin location order -- rider said that cx address is very far -- Distance b/w store and cx's address is less than 8 km -- ask rider to deliver the order and denied cancellation -- also inform that they will definitely receive the extra pay for this order after it gets delivered // furthere no issue call resolved
                    </p>

                    <p className="text-sm mb-2 mt-4 p-2">
                        Address issue -- I don't know the pin location order -- rider said that cx address is very far -- Distance b/w store and cx's address is more than 8 km -- rider denied extra -- inform cx about cancellation & refund TATA shared -- order cancel -- same share to rider
                    </p>
                </p>
            </div>
            <h3 className="text-lg font-semibold text-amber-400 mb-3">Out of Polygon --// Pin location mismatch </h3>
            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5">

                        <li className="p-2">As Dp said --// Location mismatch with current address --// <strong className="text-yellow-400 font-semibold">Order Recently Delivered --// Delivered✅</strong> --// ask rider to deliver the order --// raise the ticket for the extra distance if travelled </li>

                        <li className="p-2">As Dp said --// Location mismatch with current address --// <strong className="text-yellow-400 font-semibold">Order Recently Delivered --// Not Delivered ❎</strong> --// Checked Distance b/w location to address --// less than 500 meter --// ask rider to deliver the order --// raise the ticket for the extra distance if travelled </li>

                        <li className="p-2">As Dp said --// Location mismatch with current address --// <strong className="text-yellow-400 font-semibold">Order Recently Delivered --// Not Delivered ❎</strong> --// Checked Distance b/w location to address --// more than 500 meter --// Checked Distance b/w location to address --// more than 500 meter --// Now  Distance b/w address to store --// less than 4km --// ask rider to deliver the order --// raise the ticket for the extra distance if travelled </li>

                        <li className="p-2">As Dp said --// Location mismatch with current address --// <strong className="text-yellow-400 font-semibold">Order Recently Delivered --// Not Delivered ❎</strong> --// Checked Distance b/w location to address --// more than 500 meter --// Checked Distance b/w location to address --// more than 500 meter --// Now  Distance b/w address to store --// more than 4km --// checked serviceability --// <strong className="text-yellow-400 font-semibold">Serviceable Store✅</strong> --//  ask rider to deliver the order --// raise the ticket for the extra distance if travelled </li>

                        <li className="p-2">As Dp said --// Location mismatch with current address --// <strong className="text-yellow-400 font-semibold">Order Recently Delivered --// Not Delivered ❎</strong> --// Checked Distance b/w location to address --// more than 500 meter --// Checked Distance b/w location to address --// more than 500 meter --// Now  Distance b/w address to store --// more than 4km --// checked serviceability --// <strong className="text-yellow-400 font-semibold">Not Serviceable Store ❎</strong> --// rider agreed for extra pay -- ask rider to deliver & raise the ticket after delivery</li>

                        <li className="p-2">As Dp said --// Location mismatch with current address --// <strong className="text-yellow-400 font-semibold">Order Recently Delivered --// Not Delivered ❎</strong> --// Checked Distance b/w location to address --// more than 500 meter --// Checked Distance b/w location to address --// more than 500 meter --// Now  Distance b/w address to store --// more than 4km --// checked serviceability --// <strong className="text-yellow-400 font-semibold">Not Serviceable Store ❎</strong> --// -- rider denied for extra pay -- order cancel after informing cx & refund TAT shared -- same share to rider</li>
                    </ul>
                </div>

                {/* <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Pin-location Mismatch</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is less than 400 m -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is less than 400 m -- ask rider to reach the location then coordinate with cx and then deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is less than 400 m --  called cx -- ask cx to call rider for the better location guidance -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is less than 4 km -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>


                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong> ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong> <strong className="text-yellow-400 font-semibold">called cx -- </strong> ask cx to call rider for the location guidance -- ask rider to ensure delivery -- raise the ticket for the extra distance if travelled</li>


                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong> rider agreed for extra pay -- ask rider to deliver & raise the ticket after delivery</li>

                        <li className="p-2">Address Issue -- Distance between <strong className="text-yellow-400 font-semibold"> location & address </strong>  is more than 400 m -- Distance b/w <strong className="text-yellow-400 font-semibold">  store & address </strong>  is more than 4 km -- <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong> rider denied for extra pay -- order cancel after informing cx & refund TAT shared -- same share to rider </li>

                    </ul>
                </div> */}

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Incomplete Address</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Incomplete address -- mentioned address minor details missing -- called cx -- <strong className="text-yellow-400 font-semibold">cx responsive </strong> -- requested cx to call the rider for guidance -- same share to rider and asked to ensure delivery</li>

                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx twice -- <strong className="text-yellow-400 font-semibold">cx not responsive</strong> -- ETA+15 mins not crossed -- Call Attempt available ✅-- call Cx -- Cx Not responsive -- ask rider to follow automation till ETA +15 min along with some call attempt</li>

                        <li className='p-2'>Incomplete address -- mentioned address minor details missing  -- call cx twice -- <strong className="text-yellow-400 font-semibold">cx not responsive</strong> -- ETA+15 mins not crossed✅-- 2 CNR attempt available ✅-- call Cx twice -- Cx Not responsive -- ask rider to wait for few moment order got cancelled automatically - call close</li>


                        <li className='p-2'>Incomplete address -- mentioned address minor details missing -- call Cx twice -- Cx not responsive -- ETA+15 mins crossed -- 2 CNR attempt available ✅-- ask rider to wait for few moment order got cancelled automatically - call close</li>

                        <li className='p-2'>Incomplete address -- mentioned address minor details missing -- call Cx twice -- Cx not responsive // <u>Voicemail or Switched off</u> -- ETA+15 mins crossed -- 2 CNR attempt available ✅-- order cancel -- same share to rider </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default AddressIssue;










