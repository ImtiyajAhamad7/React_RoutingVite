import { Fragment, useContext } from 'react'
import {  Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

import ModesContext from './context/ModesContext'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
// const callsToAction = [
//   { name: 'Watch demo', href: '#' },
//   { name: 'Contact sales', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const modes = useContext(ModesContext)

const chnagModeFrom = ()=>{
  
      modes.toggleTheme();
      
}

  return (
    <header className="bg-green-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
       
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
           
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {/* {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      
                    </a>
                  ))} */}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="https://react-routing-vite.vercel.app/About" className="text-sm font-semibold leading-6 text-gray-900">
               About
          </a>
          <a href="https://react-routing-vite.vercel.app/UseEffectEx" className="text-sm font-semibold leading-6 text-gray-900">
               UseEffect
          </a>

          <a href="https://react-routing-vite.vercel.app/UseRef" className="text-sm font-semibold leading-6 text-gray-900">
               UseRef
          </a>


          <a href="https://react-routing-vite.vercel.app/Ticket" className="text-sm font-semibold leading-6 text-gray-900">
            Ticket
          </a>
          <a href="https://react-routing-vite.vercel.app/Card" className="text-sm font-semibold leading-6 text-gray-900">
               User
          </a>
           
          

          <a href="https://react-routing-vite.vercel.app/login" className="text-sm font-semibold leading-6 text-gray-900">
            Login
          </a>
        </Popover.Group>
        
      </nav>

      <button onClick={()=>{
            chnagModeFrom();
          }}>ChangeMode</button>
      
    </header>
  )
}


export default  NavBar;
