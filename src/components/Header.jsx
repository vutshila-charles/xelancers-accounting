import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 p-6 mt-4 space-y-4 text-lg tracking-tight origin-top bg-white shadow-xl top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#features">
                    <a className="block w-full" onClick={() => close()}>
                      Features
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <a className="block w-full" onClick={() => close()}>
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <a className="block w-full" onClick={() => close()}>
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="pt-4 border-t border-slate-300/40">
                  <Link  href="mailto:nkunantsako396@gmail.com">
                    <a className="block w-full">Sign in</a>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 py-10 text-sm ">
      <Container>
        <nav className="">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <a className="font-extrabold text-blue-600">
                  <span className="sr-only">Home</span>
                  {/* <Logo className="w-auto h-10" /> */}
                  XeLancers
                </a>
              </Link>
            </li>
            <li className="hidden ml-12 md:block">
              <Link href="#features">
                <a className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Features
                </a>
              </Link>
            </li>
            <li className="hidden ml-6 md:block">
              <Link href="#testimonials">
                <a className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Testimonials
                </a>
              </Link>
            </li>
            <li className="hidden ml-6 md:block">
              <Link href="#pricing">
                <a className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Pricing
                </a>
              </Link>
            </li>
            <li className="hidden ml-auto md:block">
              <Link href="/login">
                <a className="px-2 py-1 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Sign in
                </a>
              </Link>
            </li>
            <li className="ml-auto md:ml-8">
              <ButtonLink href="mailto:nkunantsako396@gmail.com" color="blue">
                <span>
                  Get started<span className="hidden lg:inline"> today</span>
                </span>
              </ButtonLink>
            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
