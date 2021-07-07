import {Disclosure, Menu} from '@headlessui/react'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/react/outline'
import Link from "next/link"

const navigation = [

    {name: 'About', href: '/about', current: false},
    {name: 'Blogs', href: '/blog', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const ButtonMailto = ({mailto, label}) => {
    return (

        <button className="button"
                to='#'
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
        >
            Contact me
            <span></span>
            {label}
        </button>
    );
};


export default function Navbar() {
    return (
        <Disclosure as="nav" className="w-screen h-20 relative z-0 flex-1 px-2 flex sm:absolute">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center bg-black justify-center p-2 rounded-md text-gray-400 hover:text-black ">
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <h1 className="text-2xl text-black uppercase font-quicksand tracking-wider"><Link
                                        href="/main">Lewis</Link></h1>
                                </div>

                                <div className="hidden sm:block sm:ml-48">
                                    <div className="flex space-x-12">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-black' : 'hover:bg-indigo-500 hover:text-black cursor-pointer px-4',
                                                    'px-3 py-2 rounded-md text-sm font-medium text-base'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <div className="bg-gray-800 flex text-sm rounded-full cursor-pointer">
                                            <button
                                                className="bg-indigo-500 text-black shadow-lg py-2 px-4 rounded-full tracking-normal font-quicksand">
                                                Contact
                                            </button>
                                        </div>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-1 pt-2 pb-3 space-y-1 ">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900' : 'text-black hover:bg-indigo-700 hover:text-black font-quicksand',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
