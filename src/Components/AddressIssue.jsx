import React from 'react';

const AddressIssue = () => {
    return (
        <div className="m-2 p-4 text-sm bg-gray-800 text-white rounded-md">
            <h2 className="text-center text-2xl font-semibold text-emerald-400 mb-4">
                Address Issue
            </h2>

            {/* ------ Section 1 ------ */}
            <div className="text-sm border border-green-400 mb-2 mt-4 p-2 space-y-4">

                <p className="text-sm border border-green-400 p-2">
                    Address issue -- mentioning distance here -- rider wanted to know where he has to go --
                    called cx -- ask cx to call rider for the correct location guidance -- same share to rider
                </p>

                <p className="text-sm border border-green-400 p-2">
                    Address issue -- oning distance here -- rider wanted to know where he has to go -- called cx --
                    cx not responsive -- ask rider to reach at given cx's location --
                    ask rider to follow the automation process & guide the steps
                </p>

                <p className="text-sm border border-green-400 p-2">
                    Rider adamant and not ready to go at address & agree to beer penalty --
                    order cancel by informing cx -- refund TAT shared as well to cx -- same share to rider
                </p>

            </div>

            {/* ------ Section 2 ------ */}
            <h3 className="text-lg font-semibold text-amber-400 mb-3">
                Address issue -- I don't know the pin location order
            </h3>

            <div className="space-y-4">
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5 space-y-4">

                        <li className="text-sm border border-green-400 p-2">
                            Address issue -- I don't know the pin location order -- ask rider to reach the delivery area
                            then coordinate with cx and then deliver the order -- also inform that they will definitely
                            receive the extra pay for this order after it gets delivered -- if there is any issue then
                            reconnect us again
                        </li>

                        <li className="text-sm border border-green-400 p-2">
                            Address issue -- I don't know the pin location order -- rider said that cx address is very
                            far -- Distance b/w store and cx's address is less than 8 km -- ask rider to deliver the
                            order and denied cancellation -- also inform that they will definitely receive the extra pay
                            for this order after it gets delivered.
                        </li>

                        <li className="text-sm border border-green-400 p-2">
                            Address issue -- I don't know the pin location order -- rider said that cx address is very
                            far -- Distance b/w store and cx's address is more than 8 km -- rider denied extra pay --
                            inform cx about cancellation & refund TATA shared -- order cancel -- same share to rider
                        </li>

                    </ul>
                </div>

                {/* ------ Out of Polygon ------ */}
                <h3 className="text-lg font-semibold text-amber-400 mb-3">Out of Polygon</h3>

                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <ul className="list-disc pl-5 space-y-2">

                        <li className="p-2">
                            Out of polygon -- <strong className="text-yellow-400 font-semibold">Alternate Store</strong> --
                            Distance b/w store and cx's address is less than 8 km -- ask rider to deliver the order and
                            denied cancellation
                        </li>

                        <li className="p-2">
                            Out of polygon -- <strong className="text-yellow-400 font-semibold">Alternate Store</strong> --
                            Distance b/w store and cx's address is more than 8 km -- rider denied extra -- inform cx about
                            cancellation & refund TATA shared -- order cancel -- same share to rider
                        </li>

                        <li className="p-2">Out of polygon -- Distance b/w store and cx's address is less than 4 km -- ask rider to deliver the order and denied cancellation</li>

                        <li className="p-2">
                            Out of polygon -- Distance b/w store and cx's address is more than 4 km --
                            <strong className="text-yellow-400 font-semibold">serviceable store -- </strong>
                            ask rider to deliver & denied cancellation
                        </li>

                        <li className="p-2">
                            Out of polygon -- Distance b/w store and cx's address is more than 4 km --
                            <strong className="text-yellow-400 font-semibold">not serviceable store -- </strong>
                            rider agreed for extra pay -- ask rider to deliver & raise a ticket after delivery
                        </li>

                        <li className="p-2">
                            Out of polygon -- Distance b/w store and cx's address is more than 4 km --
                            <strong className="text-yellow-400 font-semibold">not serviceable store -- </strong>
                            rider denied for extra pay -- order cancel after informing cx & refund TAT shared --
                            same share to rider
                        </li>

                    </ul>
                </div>

                {/* ------ Validating Address Mismatch ------ */}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Validating address mismatch</h3>
                    <ul className="list-disc pl-5 space-y-2">

                        <li className="p-2">
                            Address Issue -- Distance between <strong className="text-yellow-400 font-semibold">location & address</strong>
                            is less than 400 m -- ask rider to deliver the order -- raise the ticket for extra distance
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance between <strong className="text-yellow-400 font-semibold">location & address</strong>
                            is less than 400 m -- ask rider to reach the location then coordinate with cx and deliver --
                            raise ticket for extra distance
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance between <strong className="text-yellow-400 font-semibold">location & address</strong>
                            is less than 400 m -- called cx -- ask cx to call rider -- ask rider to deliver -- raise ticket
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance between <strong className="text-yellow-400 font-semibold">location & address</strong>
                            is more than 400 m -- store to address less than 4 km -- ask rider to deliver -- raise ticket
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance more than 400 m -- store to address more than 4 km --
                            <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong>
                            ask rider to deliver -- raise ticket
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance more than 400 m -- store to address more than 4 km --
                            <strong className="text-yellow-400 font-semibold">Serviceable store -- called cx --</strong>
                            ask cx to call rider -- ensure delivery -- raise ticket
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance more than 400 m -- store to address more than 4 km --
                            <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong>
                            rider agreed for extra pay -- ask rider to deliver & raise ticket
                        </li>

                        <li className="p-2">
                            Address Issue -- Distance more than 400 m -- store to address more than 4 km --
                            <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong>
                            rider denied extra pay -- order cancel -- refund TAT shared
                        </li>

                    </ul>
                </div>

                {/* ------ Incomplete Address ------ */}
                <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-3">Incomplete Address</h3>
                    <ul className="list-disc pl-5 space-y-2">

                        <li className="p-2">
                            Incomplete address -- small details missing -- called cx --
                            <strong className="text-yellow-400 font-semibold">cx responsive</strong> --
                            requested cx to call rider for guidance -- same share to rider
                        </li>

                        <li className="p-2">
                            Incomplete address -- minor details missing -- cx not responsive -- ETA+12 min not crossed --
                            ask rider to follow automation + call attempt
                        </li>

                        <li className="p-2">
                            Incomplete address -- cx not responsive -- CNR attempt available -- ETA +12 min not crossed --
                            ask rider to make more call attempts
                        </li>

                        <li className="p-2">
                            Incomplete address -- cx not responsive -- ETA +12 min crossed -- order canceled -- informed DP
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default AddressIssue;
