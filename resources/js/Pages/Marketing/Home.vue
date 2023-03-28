
<script setup>
import {
    ArchiveBoxArrowDownIcon,
    ArchiveBoxIcon,
    ChartPieIcon,
    ChevronRightIcon, RocketLaunchIcon,
    ScaleIcon
} from '@heroicons/vue/20/solid'
import MarketingLayout from "@/Layouts/MarketingLayout.vue";
import { Link, Head } from '@inertiajs/vue3';

import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon, CloudArrowDownIcon } from '@heroicons/vue/20/solid'

const features = [
    {
        name: 'Data Hydration',
        description:
            'Data flow from server to client can be tricky with single page applications. Inertia can share data with the client application and does it via the Inertia::facade just like we normally would do when sharing data with blade views.',
        link: 'InertiaJS',
        href: 'https://inertiajs.com',
        icon: ArrowPathIcon,
    },
    {
        name: 'Authorization',
        description:
            "I don't remember a time where Laravel didn't have robust authorization abilities. API, Session-based, and OAuth authorization are easy to setup. But now Laravel can be configured with Laravel breeze designed just for inertia authentication.",
        link: 'Learn more about breeze',
        href: 'https://laravel.com/docs/10.x/starter-kits#laravel-breeze',
        icon: FingerPrintIcon,
    },
    {
        name: 'Server Side Rendering',
        description: 'In 2019, server-side rendering a laravel-vue application was rare. The best solution I could build was not fast, not scalable, and tricky to configure. Today, it ships out of the box. This is due to the inertiajs features.',
        link: 'Inertia SSR',
        href: 'https://inertiajs.com/server-side-rendering',
        icon: CloudArrowDownIcon,
    },
];


import {
    Cog6ToothIcon,
    FingerPrintIcon,
    ServerIcon,
} from '@heroicons/vue/20/solid'

const featurez = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Advanced security.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Powerful API.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
        icon: ServerIcon,
    },
];

import { defineComponent, h } from 'vue'


const featuress = [
    {
        name: 'File Structure',
        description:
            'How to structure the frontend, backend, and keep the names and naming conventions organized.',
        icon: ArchiveBoxIcon,
    },
    {
        name: "Frontend vs Backend",
        description: 'Deciding what functionality belongs to the frontend and what belongs to the backend.',
        icon: ScaleIcon,
    },
    {
        name: 'Rapid Development',
        description: 'Optimizing the process to maximize speed of development without sacrificing the speed of the app.',
        icon: RocketLaunchIcon,
    },
]


</script>

<template>
    <MarketingLayout>
        <Head title="Home" />

        <div class="relative isolate overflow-hidden bg-white">
            <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <div class="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" class="inline-flex space-x-6">
                            <span class="rounded-full bg-teal-600/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-600 ring-1 ring-inset ring-teal-600/10">React vs Vue</span>
                            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
<!--               <span>React App</span>-->
<!--               <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />-->
             </span>
                        </a>
                    </div>
                    <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Laravel & Vue are Awesome</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">And what's more awesome? Building a laravel vue app with inertiajs. This revamp-project is an awesome chance for me to not only compare two awesome technologies but see how far they've come over that past 3 years. You can learn more on my website.</p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <Link :href="route('login')" class="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Try it out!</Link>
                        <a href="https://www.jacobhenning.com" target="_blank" class="text-sm font-semibold leading-6 text-gray-900">Project Page <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img src="/img/dashboard.png" alt="App screenshot" width="2432" height="1442" class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-900 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-teal-400">React vs Vue in 2019</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A Blast from the Past</p>
                    <p class="mt-6 text-lg leading-8 text-gray-300">This is not the first time I built a react vs vue project. I built out a laravel-react vs laravel-vue project in 2019. The mission was identical, but the result is much different, all due to Laravel's ever-growing ecosystem. Here are some key changes.</p>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div v-for="feature in features" :key="feature.name" class="flex flex-col">
                            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                <component :is="feature.icon" class="h-5 w-5 flex-none text-teal-400" aria-hidden="true" />
                                {{ feature.name }}
                            </dt>
                            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                <p class="flex-auto">{{ feature.description }}</p>
                                <p class="mt-6">
                                    <a :href="feature.href" class="text-sm font-semibold leading-6 text-teal-400">Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl sm:text-center">
                    <h2 class="text-base font-semibold leading-7 text-teal-600">Laravel broadcasting for live updates</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keep Users Current</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Broadcasting pushes the user's experience to the next level. Events broadcast data through a secure websocket which is authenticated on a user basis.</p>
                </div>
            </div>
            <div class="relative overflow-hidden pt-16">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <img src="/img/task.png" alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" width="2432" height="1442" />
                    <div class="relative" aria-hidden="true">
                        <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-900 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div class="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 class="text-3xl font-bold tracking-tight text-white">Built on the robust Laravel ecosystem</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-300">Laravel is designed to grow and scale. Incredible libraries and tools can easily be integrated into the framework. Using powerful tooling, some made just for Laravel, I was able to easily build a powerful user experience. </p>
                    </div>
                    <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <img class="max-h-12 w-full object-contain object-left text-white w-40" src="/img/inertiajs.svg" alt="InertiaJS" width="105" height="48" />
                        <img class="max-h-12 w-full object-contain object-left" src="/img/laravel-logo-white.svg" alt="Laravel" width="136" height="48" />
                        <img class="max-h-12 w-full object-contain object-left" src="/img/vue.svg" alt="SavvyCal" width="140" height="48" />
                        <img class="max-h-12 w-full object-contain object-left" src="/img/breeze.svg" alt="Laravel" width="136" height="48" />
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-hidden bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div class="px-6 md:px-0 lg:pt-4 lg:pr-4">
                        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                            <h2 class="text-base font-semibold leading-7 text-teal-600">A process for speedy development</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Its not just building a laravel-vue app. Its building a laravel-vue process. Something that is simple, organized, and easy to repeat.</p>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div v-for="feature in featuress" :key="feature.name" class="relative pl-9">
                                    <dt class="inline font-semibold text-gray-900">
                                        <component :is="feature.icon" class="absolute top-1 left-1 h-5 w-5 text-teal-600" aria-hidden="true" />
                                        {{ feature.name }}
                                    </dt>
                                    {{ ' ' }}
                                    <dd class="inline">{{ feature.description }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div class="sm:px-6 lg:px-0">
                        <div class="relative isolate overflow-hidden bg-teal-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                            <div class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-teal-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
                            <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                                    <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                            <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">NotificationSetting.jsx</div>
                                            <div class="border-r border-gray-600/10 py-2 px-4">App.jsx</div>
                                        </div>
                                    </div>
                                    <div class="px-6 pt-6 pb-14">
                   <pre class="text-[0.8125rem] leading-6 text-gray-300"><code>import { <span class="text-[#7dd3fc]">useState</span> } from <span class="text-emerald-300">'react'</span>
  import { <span class="text-[#7dd3fc]">Switch</span> } from <span class="text-emerald-300">'@headlessui/react'</span>

  <span class="text-teal-400">function Example</span>() {
      const [<span class="text-[#7dd3fc]">enabled</span>, <span class="text-[#7dd3fc]">setEnabled</span>] = useState(<span class="text-[#7dd3fc]">true</span>)

      return (
        &lt;<span class="text-teal-400">form</span> action="/<span class="text-emerald-300">notification-settings</span>" method="<span class="text-emerald-300">post</span>"&gt;
          &lt;<span class="text-teal-400">Switch</span> checked={<span class="text-[#7dd3fc]">enabled</span>} onChange={<span class="text-[#7dd3fc]">setEnabled</span>} name="<span class="text-emerald-300">notifications</span>"&gt;
            {<span class="text-gray-500">/* ... */</span>}
          &lt;/<span class="text-teal-400">Switch</span>&gt;
          &lt;<span class="text-teal-400">button</span>&gt;Submit&lt;/<span class="text-teal-400">button</span>&gt;
        &lt;/<span class="text-teal-400">form</span>&gt;
      )
  }</code></pre>
                                    </div>
                                </div>
                            </div>
                            <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MarketingLayout>
</template>
