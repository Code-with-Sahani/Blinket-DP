import React from 'react';

const AddressIssue = () => {
    return (
        <div className="m-2 p-4 text-sm  bg-gray-800 text-white rounded-md -p-6 lg--p-8">
            <h2 className='text-center text-2xl font-semibold text-emerald-400 mb-4'>Address Issue </h2>

            <div className="text-sm rounded-md border border-green-400 mb-2 mt-4 p-2">
                {/* <p className="text-sm mb-2 mt-4 p-2">
                    Address issue -- mentioning distance here --  rider wanted to know where he has to go -- called cx -- ask cx to call rider for the correct location guidance -- same share to rider
                </p>

                <p className="text-sm mb-2 mt-4 p-2">
                    Address issue -- mentioning distance here --  rider wanted to know where he has to go -- called cx -- cx not responded -- ask rider to reach at given cx's location -- ask rider to follow the automation process & guide the steps
                </p> */}

                <p className="text-sm mb-2 mt-4 p-5 pl-5">
                    Address issue -- location issue -- high confidence -- but rider is not at geo-fence or at location -- ask rider to reach the geo-fence or at location then coordinate with cx and then deliver the order -- if any then reconnect us again
                </p>

            </div>

            <div className="text-sm rounded-md border border-green-400 mb-2 mt-4 p-2">
                <h3 className="text-sm font-semibold text-emerald-400 mb-3"> I don't know the pin location order</h3>
                <div className="list-disc pl-5">
                    <p className="text-sm mb-2 mt-4 p-2">
                        Address issue -- I don't know the pin location order -- ask rider to reach the delivery area then coordinate with cx and then deliver the order -- also inform that they will definitely receive the extra pay for this order after it gets delivered -- if there is any issue then reconnect us again
                    </p>
                    <p className="text-sm mb-2 mt-4 p-2">
                        Address issue -- I don't know the pin location order -- rider said that cx address is very far -- Distance b/w store and cx's address is less than 8 km -- ask rider to deliver the order and denied cancellation -- also inform that they will definitely receive the extra pay for this order after it gets delivered // furthere no issue call resolved
                    </p>

                    <p className="text-sm mb-2 mt-4 p-2">
                        Address issue -- I don't know the pin location order -- rider said that cx address is very far -- Distance b/w store and cx's address more than 8 km -- rider denied extra -- inform cx about cancellation & refund TATA shared -- order cancel -- same share to rider
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="p-3 shadow rounded-md border border-green-400">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Out of Polygon -- Pin pin location mismatch</h3>
                    <div className="list-disc pl-5 ">

                        <p className="p-2">As dp said -- pin location mismatch -- FARAWAY STORE✅ -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled </p>

                        <p className=" p-2">As dp said -- pin location mismatch -- checked distance b/w location to address -- less than 500 meter -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled </p>

                        <p className="p-2">As dp said -- pin location mismatch -- checked distance b/w location to address -- more than 500 meter -- Now distance b/w address to store -- less than 4km -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled </p>

                        <p className="p-2">As dp said -- pin location mismatch -- checked distance b/w location to address -- more than 500 meter -- Now distance b/w address to store -- more than 4km -- checked serviceability -- Serviceable Store --  ask rider to deliver the order -- raise the ticket for the extra distance if travelled </p>

                        <p className="p-2">As dp said -- pin location mismatch -- checked distance b/w location to address -- more than 500 meter -- Now distance b/w address to store -- more than 4km -- checked serviceability -- Not Serviceable Store -- rider agreed for extra pay -- ask rider to deliver & raise the ticket after delivery</p>

                        <p className="p-2">As dp said -- pin location mismatch -- checked distance b/w location to address -- more than 500 meter -- Now distance b/w address to store -- more than 4km -- checked serviceability -- Not Serviceable Store -- rider denied for extra pay -- order cancel after informing cx & refund TAT shared -- same share to rider</p>

                    </div>
                </div>

                <div className="p-3 rounded-md shadow border border-green-400">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Incomplete Address</h3>

                    <div className="text-sm rounded-md border border-green-400 bg-gray-600 mb-4 mt-6 p-2">

                        <p className="text-sm mb-2 mt-4 pl-5">
                            Address issue -- rider unable to find cx house -- called cx -- cx responded -- confirmed the cx's exact location via satellite view -- as cx to call rider for better assistance -- same share to rider
                        </p>

                        <p className="text-sm mb-2 mt-4 pl-5">
                            Address issue -- rider unable to find cx house -- called cx twice -- cx not responded -- ask rider to follow the automation for the order cancellation before ETA + 15 min
                        </p>

                        <p className="text-sm mb-2 mt-4 pl-5">
                            Address issue -- rider unable to find cx house -- called cx twice -- cx not responded // <u>Voicemail or Switched off</u> -- ETA+15 mins crossed -- 2 CNR attempt available ✅-- order cancel -- same share to rider 
                        </p>

                    </div>
                    <div className="list-disc pl-5">

                        <p className="p-2">Incomplete address -- mentioned address minor details missing -- called cx -- cx responded -- requested cx to call the rider for guidance -- same share to rider and asked to ensure delivery</p>

                        <p className='p-2'>Incomplete address -- mentioned address minor details missing  -- called cx twice -- cx not responded  -- ask rider to follow automation for the order cancelllation </p>

                        {/* <p className='p-2'>Incomplete address -- mentioned address minor details missing  -- called cx twice -- cx not responded -- ETA+15 mins not crossed✅-- 2 CNR attempt available ✅-- called Cx twice -- Cx not responded -- ask rider to follow automation till ETA +15 min - call close</p> */}


                        {/* <p className='p-2'>Incomplete address -- mentioned address minor details missing -- called Cx twice -- cx not responded -- ETA+15 mins crossed -- 2 CNR attempt available ✅-- ask rider to follow automation till ETA +15 min - call close</p> */}

                        <p className='p-2'>Incomplete address -- mentioned address minor details missing -- called Cx twice -- cx not responded // <u>Voicemail or Switched off</u> -- order cancel -- same share to rider </p>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddressIssue;








