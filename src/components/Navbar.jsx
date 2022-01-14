/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Ecomuni', href: '/ecomuni/departamentos', current: true },
  { name: 'Secopv', href: '/secopv/departamentos', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 z-50 absolute top-0 left-0 right-0 mb-12">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink to="/" className="flex-shrink-0 flex items-center">
                  <h1 className="text-white text-2xl font-bold">Ecomuni/Secopv</h1>
                </NavLink>
              </div>
              <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                     <NavLink
                        to='/ecomuni/departamentos'
                        className={({isActive}) => (isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                        aria-current={({isActive}) => (isActive ? 'page' : undefined)}
                      >
                       Ecomuni
                      </NavLink>
                     <NavLink
                        to='/secopv/departamentos'
                        className={({isActive}) => (isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                        aria-current={({isActive}) => (isActive ? 'page' : undefined)}
                      >
                       Secopv
                      </NavLink>
                  </div>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as={NavLink}
                to='/ecomuni/departamentos'
                className={({isActive}) => (isActive ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium')
                }
                aria-current={({isActive}) => (isActive ? 'page' : undefined)}
              >
                Ecomuni
              </Disclosure.Button>
              <Disclosure.Button
                as={NavLink}
                to='/secopv/departamentos'
                className={({isActive}) => (isActive ? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium')
                }
                aria-current={({isActive}) => (isActive ? 'page' : undefined)}
              >
                Secopv
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
