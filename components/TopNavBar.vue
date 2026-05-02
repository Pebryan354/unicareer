<script setup>
const route = useRoute();
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Job Board", to: "/job-board" },
  { label: "Tracer Study", to: "/tracer-study" },
  { label: "Employers", to: "/employes" },
  { label: "Statistics", to: "/statistic" },
  { label: "Events", to: "/event" },
];
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800"
  >
    <div
      class="max-w-[1280px] mx-auto flex justify-between items-center h-16 px-6"
    >
      <NuxtLink
        to="/"
        class="text-xl font-bold text-[#003A70] dark:text-white font-public-sans"
      >
        UniCareer Portal
      </NuxtLink>
      <div class="hidden md:flex space-x-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            route.path === link.to
              ? 'text-[#003A70] dark:text-blue-400 border-b-2 border-[#003A70] dark:border-blue-400 pb-1 font-semibold'
              : 'text-slate-600 dark:text-slate-400 font-medium hover:text-[#003A70] dark:hover:text-blue-300',
            'transition-colors duration-200 ease-in-out',
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-4">
        <div
          class="hidden md:flex items-center bg-surface-container-low rounded-full px-3 py-1"
        >
          <span class="material-symbols-outlined text-outline text-sm mr-2"
            >search</span
          >
          <input
            class="bg-transparent border-none text-sm focus:ring-0 w-32 p-0 text-on-surface"
            placeholder="Cari..."
            type="text"
          />
        </div>
        <button
          class="text-primary font-label-md text-label-md bg-transparent border border-primary px-4 py-2 rounded-DEFAULT hover:bg-surface-container transition-colors"
        >
          Login
        </button>
        <button
          class="bg-secondary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-DEFAULT hover:opacity-90 transition-opacity"
        >
          Sign Up
        </button>
      </div>
    </div>
  </nav>
</template>
