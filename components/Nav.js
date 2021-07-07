import {Fragment} from 'react'
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'


const navigation = [
    {name: 'About', href: '/about', current: false},
    {name: 'Blogs', href: '/blog', current: false},
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="header" className="">
            {({open}) => (
                <>
                    <div className="max-w-7xl pt-6 mx-auto px-6 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-16">
                        <div className="relative h-16 flex justify-between">
                            <div className="relative z-10 px-2 flex lg:px-0">
                                <div className="flex-shrink-0 flex items-center">
                                    <a  href="/main" className="text-2xl font-nunito font-light text-customGreen">Hamilton</a>
                                </div>
                            </div>

                            <nav className="hidden lg:py-4 lg:flex lg:space-x-8 font-quicksand text-lg font-black tracking-normal" aria-label="Global">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-100 text-customGreen' : 'text-customGreen hover:bg-gray-50 hover:text-gray-900',
                                            'rounded-md py-2 px-3 inline-flex items-center text-base pt-6 font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>

                             {/* On responsive displays hamburger button*/}
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>

                             {/*Contact button*/}
                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                <Menu as="div" className="flex-shrink-0 relative ml-4">
                                    <div>
                                        <div className=" flex text-sm rounded-full cursor-pointer pt-5">
                                            <button
                                                className="bg-lightGreen text-white font-nunito tracking-wider py-2 px-4 rounded-full tracking-normal">
                                                Contact
                                            </button>
                                        </div>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>


                    {/*On click hamburger button*/}
                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="pt-2 pb-3 px-2 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 pt-4 pb-3 pl-4">
                            <div>
                                <div className="flex text-sm rounded-full cursor-pointer">
                                    <button
                                        className="bg-indigo-500 text-black shadow-lg py-2 px-4 rounded-full tracking-normal font-quicksand">
                                        Contact
                                    </button>
                                </div>
                            </div>

                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
