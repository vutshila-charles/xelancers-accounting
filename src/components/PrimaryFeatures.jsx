import { useEffect, useState } from 'react'
import hero from '@/images/hero.png'
import transparent from '@/images/bookkeeping.png'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import { ButtonLink } from '@/components/Button'

const features = [
  {
    title: 'Accounting Services',
    description:
      "Small business accounting services that meet your current needs.",
    image: screenshotPayroll,
  },
  {
    title: 'Tax Services',
    description:
      "You can be confidennt that your taxes will be prepared properly annd filed on time.",
    image: screenshotExpenses,
  },
  {
    title: 'Booking Services',
    description:
      "We offer the reliable bookkeeping services to keep your business on track financially.",
    image: screenshotVatReturns,
  },
  {
    title: 'QuickBooks Services',
    description:
      'We offer a free initial consultation to individuals and businesses',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative pt-20 overflow-hidden bg-blue-600 pb-28 sm:py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2245}
          height={1636}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="text-center max-w-7xl md:mx-auto xl:max-w-none">
          <h2
            id="features-title"
            className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl"
          >
            Bookkeeping
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p>
          <div className="w-full mt-6 lg:flex">
           
            <div className='items-center '>
                <p className='relative text-blue-100 lg:top-40 '> 
                XeLancers has been specializing in personalised bookkeeping and accounting services through our 
                cloud accounting systems. In addition to our experienced bookkeepers, we have the skills, 
                knowledge and charisma to handle all of your bookkeeping needs. We are ready to tackle any 
                financial challenges that you may have.
              </p>
            </div>
            <div className='hidden lg:block'>
            <Image
                  src={transparent}
                  alt="StaticKit"
                  layout="fixed"
                  unoptimized
                  className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                />
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto text-center">
          <ButtonLink href="mailto:nkunantsako396@gmail.com" color="white" className="mt-10">
              Get In Touch
          </ButtonLink>
        </div>
      </Container>
      
    </section>
  )
}
