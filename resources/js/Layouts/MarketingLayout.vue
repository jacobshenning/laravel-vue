
<script setup>
import {defineComponent, h, ref} from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import {Link} from "@inertiajs/vue3";

const navigation = [
    { name: 'Project Page', href: '#' },
    { name: 'My Website', href: '#' },
];


const footer_navigation = {
    solutions: [
        // { name: 'Marketing', href: '#' },
        // { name: 'Analytics', href: '#' },
        // { name: 'Commerce', href: '#' },
        // { name: 'Insights', href: '#' },
    ],
    support: [
        // { name: 'Pricing', href: '#' },
        // { name: 'Documentation', href: '#' },
        // { name: 'Guides', href: '#' },
        // { name: 'API Status', href: '#' },
    ],
    company: [
        // { name: 'About', href: '#' },
        // { name: 'Blog', href: '#' },
        // { name: 'Jobs', href: '#' },
        // { name: 'Press', href: '#' },
        // { name: 'Partners', href: '#' },
    ],
    legal: [
        // { name: 'Claim', href: '#' },
        // { name: 'Privacy', href: '#' },
        // { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        }
    ],
}

const mobileMenuOpen = ref(false)
</script>

<template>
    <div class="relative">
    <header class="absolute z-10 w-full">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="flex items-center font-black bg-teal-600 px-3 py-4 text-right text-gray-50 -mt-8 shadow">
                    Laravel<br>Vue
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link href="login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600" alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                        </div>
                        <div class="py-6">
                            <Link :href="route('login')" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
    </div>
    <div>
        <slot />
    </div>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8">
                    <div>
                        <a href="/" class="block w-20 items-center font-black bg-teal-600 px-3 py-4 text-right text-gray-50 -mt-8 shadow"> Laravel <br>Vue </a>
                    </div>
                    <p class="text-sm leading-6 text-gray-300">This project is still underway. As I complete it, this page will link to more content.</p>
                    <div class="flex space-x-6">
                        <a v-for="item in footer_navigation.social" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-400">
                            <span class="sr-only">{{ item.name }}</span>
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
<!--                            <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>-->
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in footer_navigation.solutions" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
<!--                            <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>-->
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in footer_navigation.support" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
<!--                            <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>-->
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in footer_navigation.company" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
<!--                            <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>-->
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in footer_navigation.legal" :key="item.name">
                                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                <p class="text-xs leading-5 text-gray-400">&copy; 2023 Jacob Henning. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
