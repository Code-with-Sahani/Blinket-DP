 <div className="p-3 bg-gray-700 rounded-md shadow">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">Validating address mismatch</h3>
                    <ul className="list-disc pl-5">
                        <li className="p-2">Address Issue -- Distance between location & address is less than 4 km -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between location & address is less than 4 km --  ask rider to reach the location then coordinate with cx and then deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between location & address is less than 4 km --  called cx -- ask cx to call rider for the better location guidance -- ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>


                        <li className="p-2">Address Issue -- Distance between location & address is more than 4 km -- Distance b/w store & address is more than 4 km -- <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong> ask rider to deliver the order -- raise the ticket for the extra distance if travelled</li>

                        <li className="p-2">Address Issue -- Distance between location & address is more than 4 km -- Distance b/w store & address is more than 4 km -- <strong className="text-yellow-400 font-semibold">Serviceable store -- </strong> <strong className="text-yellow-400 font-semibold">called cx -- </strong> ask cx to call rider for the location guidance -- ask rider to ensure delivery -- raise the ticket for the extra distance if travelled</li>


                        <li className="p-2">Address Issue -- Distance between location & address is more than 4 km -- Distance b/w store & address is more than 4 km -- <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong> rider agreed for extra pay -- ask rider to deliver & raise the ticket after delivery</li>

                        <li className="p-2">Address Issue -- Distance between location & address is more than 4 km -- Distance b/w store & address is more than 4 km -- <strong className="text-yellow-400 font-semibold">Not Serviceable store -- </strong> rider denied for extra pay -- order cancel after informing cx & refund TAT shared -- same share to rider </li>

                    </ul>
                </div>
