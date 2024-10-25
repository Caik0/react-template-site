import React, { useState } from "react";
import logo from '../assets/logo.png';
// Importa os componentes de Popover da Headless UI
import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/react';

// Importa os ícones da Heroicons
import {
    Bars3Icon,
    ChevronDownIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    ArrowPathIcon,
    PlayCircleIcon,
    PhoneIcon
} from '@heroicons/react/24/outline';




const products = [
    { name: 'Análise', description: 'Entenda melhor o seu tráfego', href: '#', icon: ChartPieIcon },
    { name: 'Engajamento', description: 'Fale diretamente com seus clientes', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Segurança', description: 'Os dados de seus clientes estarão seguros e protegidos', href: '#', icon: FingerPrintIcon },
    { name: 'Integrações', description: 'Conecte com outras ferramentas', href: '#', icon: SquaresPlusIcon },
    { name: 'Mecanização', description: 'Crie funis estratégicos para melhor desempenho', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Demostração', href: '#', icon: PlayCircleIcon },
    { name: 'Contato', href: '#', icon: PhoneIcon },
]


function Nav({ onOpenMobileMenu }) {
    return (
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="#" className="flex items-center font-semibold font-sans -m-1.5 p-1.5">
                    <span className="sr-only">Lorem Impsum</span>
                    <img
                        alt="Logo"
                        src={logo}
                        className="h-9 w-auto"
                    />
                    Lorem Impsum
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={onOpenMobileMenu} 
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        Produtos
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    </PopoverButton>

                    <PopoverPanel
                        transition
                        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <div className="p-4">
                            {products.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
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
                            {callsToAction.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </PopoverPanel>
                </Popover>

                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Recursos
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Loja
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Sobre
                </a>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>

    );
}

export default Nav