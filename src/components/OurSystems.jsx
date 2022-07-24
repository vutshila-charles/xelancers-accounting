import React from "react";
import screenshotContacts from '@/images/screenshots/simplepay.png'
import screenshotInventory from '@/images/screenshots/xero.jpeg'
import screenshotProfitLoss from '@/images/screenshots/hubdoc.jpeg'
import Image from 'next/image'
import { ButtonLink } from '@/components/Button'


export  function OurSystems() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2 id="details-heading" className="text-3xl tracking-tight text-gray-900 sm:text-4xl"
            
            >
            Our systems
            </h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-600">
            The systems we use are detailed. Every thing needs to come together in unity to make the possible best product(Ntsako to update this)
            </p>
          </div>

          <div className="grid grid-cols-1 mt-16 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
          <div className="bg-white rounded-md shadow-2xl">
              <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                <Image
                  src={screenshotContacts}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h1  className="px-2 my-4 text-2xl">Simple Pay</h1>
              <p className="px-3 mt-8 text-base text-gray-500">
              A list of employees your company has that are entitled to receiving payments as well as other 
              benefits on a weekly or monthly basis depending onn the contract signed between the employee and the company.
              </p>
            </div>
            <div className="bg-white rounded-md shadow-2xl">
              <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                <Image
                  src={screenshotInventory}
                  alt="Front zipper pouch with included key ring."
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h1  className="px-2 my-4 text-2xl">Xero</h1>
              <p className="px-3 mt-8 text-base text-gray-500">
              Finalize tax reports, do daily reconcilliation, prepare balance sheet and profit & loss.
              </p>
            </div>
            <div className="bg-white rounded-md shadow-2xl">
              <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                <Image
                  src={screenshotProfitLoss}
                  alt="Front zipper pouch with included key ring."
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h1  className="px-2 my-4 text-2xl">HubDoc</h1>
              <p className="px-3 mt-8 text-base text-gray-500">
              Hubdoc has changed the game with just a simple snap of a picture! Hubdoc offers document collection and
               management software which collects and analyses business documents for financial reporting, recons and audit proofing.
              </p>
            </div>
          </div>
          <div className="max-w-lg mx-auto text-center">
          <ButtonLink href="mailto:nkunantsako396@gmail.com" color="blue" className="mt-10">
              Get In Touch
          </ButtonLink>
        </div>
        </section>
      </div>
    </div>
  )
}

