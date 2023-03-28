<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Link } from '@inertiajs/vue3';
import { UserCircleIcon } from "@heroicons/vue/24/outline";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: 'dashboard.index', current: true },
    { name: 'Projects', href: 'projects.index', current: false },
]
const userNavigation = [
    { name: 'Profile', href: 'profile.edit', method: 'GET' },
    { name: 'Sign out', href: 'logout', method: 'POST' },
]
</script>
<template>
    <div class="min-h-full bg-gray-100">
        <Disclosure as="nav" class="bg-white border-b border-gray-100" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <a href="/" class="flex items-center font-black bg-teal-600 px-3 text-right text-gray-50 -mb-2 shadow">
                            Laravel<br>Vue
                        </a>
                        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <Link v-for="item in navigation" :key="item.name" :href="route(item.href)" :class="[route().current(item.href) ? 'border-teal-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</Link>
                        </div>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:items-center">
                        <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                            <span class="sr-only">View notifications</span>
<!--                            <BellIcon class="h-6 w-6" aria-hidden="true" />-->
                        </button>

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative ml-3">
                            <div>
                                <MenuButton class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                                    <span class="sr-only">Open user menu</span>
                                    <span class="inline-block h-7 w-7 overflow-hidden rounded-full bg-gray-100">
                                      <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                      </svg>
                                    </span>
                                </MenuButton>
                            </div>
                            <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <Link v-if="item.method" :href="route(item.href)" :method="item.method" as="button" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-50 w-full text-left">{{ item.name }}</Link>
                                        <Link v-else :href="route(item.href)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-50">{{ item.name }}</Link>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                    <div class="-mr-2 flex items-center sm:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="sm:hidden">
                <div class="space-y-1 pt-2 pb-3">
                    <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="route(item.href)" :class="[route().current(item.href) ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800', 'block border-l-4 py-2 pl-3 pr-4 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </div>
                <div class="border-t border-gray-200 pb-3">
                    <div class="mt-3 space-y-1">
                        <DisclosureButton v-for="item in userNavigation.filter(item => item.href !== 'logout')" :key="item.name" as="a" :href="route(item.href)" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</DisclosureButton>
                        <Link :href="route('logout')" method="POST" as="button" class="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Sign Out</Link>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">

                <slot name="header" />
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 px-3">
                <slot />
            </div>
        </main>
    </div>
</template>

