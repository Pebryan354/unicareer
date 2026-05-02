<template>
  <footer
    class="w-full py-12 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
  >
    <div
      class="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 font-public-sans text-sm"
    >
      <!-- Brand Column -->
      <div class="md:col-span-1">
        <div class="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
          UniCareer Portal
        </div>
        <p class="text-slate-500 dark:text-slate-400 mb-4">
          Menjembatani talenta muda dengan peluang karir global yang cemerlang.
        </p>
        <div class="text-slate-500 dark:text-slate-400">
          © 2026 University Career Services. All rights reserved.
        </div>
      </div>
      <!-- Links Column 1 -->
      <div class="md:col-span-1">
        <h4
          class="font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider text-xs"
        >
          Platform
        </h4>
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="/"
              class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
              >University Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#"
              class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
              >Career Resources</NuxtLink
            >
          </li>
        </ul>
      </div>
      <!-- Links Column 2 -->
      <div class="md:col-span-1">
        <h4
          class="font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider text-xs"
        >
          Bantuan
        </h4>
        <ul class="space-y-2">
          <li>
            <NuxtLink
              to="#"
              class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#"
              class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
              >Terms of Service</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="#"
              class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
              >Contact Support</NuxtLink
            >
          </li>
        </ul>
      </div>
      <!-- Social Column -->
      <div class="md:col-span-1">
        <h4
          class="font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider text-xs"
        >
          Ikuti Kami
        </h4>
        <div class="flex space-x-4">
          <NuxtLink
            to="#"
            class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
          >
            <span class="material-symbols-outlined">language</span>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-all"
          >
            <span class="material-symbols-outlined">share</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
