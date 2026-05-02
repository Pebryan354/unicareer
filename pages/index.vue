<script setup>
useHead({
  title: "Beranda - UniCareer Portal",
});
</script>

<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <header class="relative bg-primary overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          alt="Hero Background"
          class="w-full h-full object-cover opacity-20 mix-blend-overlay"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3yqc9Zmcxw3SUDOTYsCKJHdQYWrsYVk1ysojt04yBqfLEbFDE188jnut9il9xo3wEo14JGywCywZAPJUZAqebEgH1Ui9RJ0ixLU4sPMmM8dMnCWO3KyyXGzJ1qma13FbQZKf7O3_EgWcWACDB8hswbW9ZynjfC-P3dQlpTLk1uo770LVDEpKuKySiRfU5qFueW933LaSotrrcwx2g5blrvRnFM-a1Cxn3MED9R7QlheoEh2HrggvdELSfC58Oh8TB57VicUfstw"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-primary to-transparent"
        ></div>
      </div>
      <div
        class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24"
      >
        <div class="max-w-2xl text-on-primary">
          <h1
            class="font-display-md text-display-md md:font-display-lg md:text-display-lg mb-stack-md leading-tight"
          >
            Bangun Karir Impian Anda Bersama UniCareer
          </h1>
          <p class="font-body-lg text-body-lg mb-stack-lg text-surface-variant">
            Portal resmi pengembangan karir universitas. Temukan peluang kerja
            terbaik, ikuti event inspiratif, dan bantu kami memetakan kesuksesan
            alumni melalui Tracer Study.
          </p>
          <div class="flex flex-wrap gap-stack-md">
            <NuxtLink
              to="/tracer-study"
              class="bg-secondary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center shadow-md"
            >
              <span
                class="material-symbols-outlined mr-2"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >assignment</span
              >
              Isi Tracer Study
            </NuxtLink>
            <NuxtLink
              to="/job-board"
              class="bg-transparent border-2 border-surface-variant text-surface-variant font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-variant hover:text-primary transition-colors flex items-center"
            >
              <span class="material-symbols-outlined mr-2">work</span>
              Jelajahi Lowongan
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Statistics Section -->
    <section
      class="py-12 bg-surface-container-low border-b border-outline-variant"
    >
      <div
        class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          <div class="p-4">
            <div class="font-display-md text-display-md text-primary mb-2">
              92%
            </div>
            <div class="font-label-md text-label-md text-on-surface-variant">
              Alumni Terserap Kerja
            </div>
          </div>
          <div class="p-4">
            <div class="font-display-md text-display-md text-primary mb-2">
              3.5<span class="text-headline-md">bln</span>
            </div>
            <div class="font-label-md text-label-md text-on-surface-variant">
              Rata-rata Waktu Tunggu
            </div>
          </div>
          <div class="p-4">
            <div class="font-display-md text-display-md text-primary mb-2">
              1,250+
            </div>
            <div class="font-label-md text-label-md text-on-surface-variant">
              Mitra Perusahaan
            </div>
          </div>
          <div class="p-4">
            <div
              class="font-display-md text-display-md text-secondary-container mb-2"
            >
              5,000+
            </div>
            <div class="font-label-md text-label-md text-on-surface-variant">
              Lowongan Aktif
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Area -->
    <main
      class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16"
    >
      <div class="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 class="font-headline-lg text-headline-lg text-primary">
            Lowongan Terbaru
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant mt-2">
            Peluang karir terbaik dari mitra industri kami.
          </p>
        </div>
        <NuxtLink
          to="/job-board"
          class="hidden md:flex items-center text-primary font-label-md text-label-md hover:underline"
        >
          Lihat Semua
          <span class="material-symbols-outlined ml-1">arrow_forward</span>
        </NuxtLink>
      </div>

      <!-- Job Cards Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-16"
      >
        <!-- Job Card 1 -->
        <div
          class="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full relative overflow-hidden group"
        >
          <div
            class="absolute top-0 left-0 w-1 h-full bg-primary group-hover:bg-secondary-container transition-colors"
          ></div>
          <div class="flex justify-between items-start mb-stack-md">
            <div
              class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-primary text-2xl"
                >corporate_fare</span
              >
            </div>
            <span
              class="bg-surface-container-high text-primary font-label-sm text-label-sm px-2 py-1 rounded"
              >Baru</span
            >
          </div>
          <h3 class="font-title-lg text-title-lg text-on-surface mb-1">
            Software Engineer
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4">
            TechCorp Indonesia
          </p>
          <div class="space-y-2 mb-stack-lg flex-grow">
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >location_on</span
              >
              Jakarta, Indonesia
            </div>
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >work_outline</span
              >
              Full-time
            </div>
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >payments</span
              >
              IDR 15M - 25M
            </div>
          </div>
          <div class="pt-4 border-t border-outline-variant mt-auto">
            <button
              class="w-full bg-transparent border border-primary text-primary font-label-md text-label-md py-2 rounded-lg hover:bg-surface-container transition-colors"
            >
              Lihat Detail
            </button>
          </div>
        </div>
        <!-- Job Card 2 -->
        <div
          class="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full relative overflow-hidden group"
        >
          <div
            class="absolute top-0 left-0 w-1 h-full bg-primary group-hover:bg-secondary-container transition-colors"
          ></div>
          <div class="flex justify-between items-start mb-stack-md">
            <div
              class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-primary text-2xl"
                >storefront</span
              >
            </div>
          </div>
          <h3 class="font-title-lg text-title-lg text-on-surface mb-1">
            Marketing Associate
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4">
            Global Retail Nusantara
          </p>
          <div class="space-y-2 mb-stack-lg flex-grow">
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >location_on</span
              >
              Bandung, Indonesia
            </div>
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >work_outline</span
              >
              Contract
            </div>
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >payments</span
              >
              IDR 8M - 12M
            </div>
          </div>
          <div class="pt-4 border-t border-outline-variant mt-auto">
            <button
              class="w-full bg-transparent border border-primary text-primary font-label-md text-label-md py-2 rounded-lg hover:bg-surface-container transition-colors"
            >
              Lihat Detail
            </button>
          </div>
        </div>
        <!-- Job Card 3 -->
        <div
          class="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full relative overflow-hidden group"
        >
          <div
            class="absolute top-0 left-0 w-1 h-full bg-primary group-hover:bg-secondary-container transition-colors"
          ></div>
          <div class="flex justify-between items-start mb-stack-md">
            <div
              class="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center shrink-0"
            >
              <span class="material-symbols-outlined text-primary text-2xl"
                >account_balance</span
              >
            </div>
            <span
              class="bg-surface-container-high text-primary font-label-sm text-label-sm px-2 py-1 rounded"
              >Remote</span
            >
          </div>
          <h3 class="font-title-lg text-title-lg text-on-surface mb-1">
            Financial Analyst
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4">
            Investa Group
          </p>
          <div class="space-y-2 mb-stack-lg flex-grow">
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >location_on</span
              >
              Remote
            </div>
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >work_outline</span
              >
              Full-time
            </div>
            <div
              class="flex items-center text-on-surface-variant font-label-sm text-label-sm"
            >
              <span class="material-symbols-outlined text-[16px] mr-2"
                >payments</span
              >
              Dirahasiakan
            </div>
          </div>
          <div class="pt-4 border-t border-outline-variant mt-auto">
            <button
              class="w-full bg-transparent border border-primary text-primary font-label-md text-label-md py-2 rounded-lg hover:bg-surface-container transition-colors"
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </div>

      <!-- Agenda & Informasi -->
      <div class="flex justify-between items-end mb-stack-lg">
        <div>
          <h2 class="font-headline-lg text-headline-lg text-primary">
            Agenda & Informasi
          </h2>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Featured Event -->
        <div
          class="md:col-span-8 bg-surface rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row"
        >
          <div
            class="md:w-2/5 h-48 md:h-auto relative bg-surface-container-low"
          >
            <img
              alt="Career Fair Event"
              class="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB04K2sFSkjqm_TrB0mO5pO2CXaPId3giw2TfKZpkQEvwFYtSjPxXOLJWFI8oRFCIXl5pAxnjqQ32LqTMk7QWekVZbUYhWkBA7iTpyVdoCTj0hsSh9NUMJsZ_kKOA7nBoETetMb0TV0zZjhENRPgN74jLUuTNh-jDXzQjtGpm4z13x0gFfYczLZCFArxdAjorRSLka1NidWQbLUfNzzYdT5bn5BoGvf01yU0icFSwECwwpyaUzDeKtP6-VfZLyr4t8LwUu_IXEaCQ"
            />
          </div>
          <div class="p-6 md:w-3/5 flex flex-col justify-center">
            <div
              class="flex items-center text-secondary-container font-label-sm text-label-sm mb-2"
            >
              <span class="material-symbols-outlined text-[16px] mr-1"
                >calendar_month</span
              >
              15 Nov 2026
            </div>
            <h3 class="font-headline-md text-headline-md text-primary mb-2">
              Annual Career Expo 2026
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant mb-4">
              Hadiri bursa kerja terbesar tahun ini. Bertemu langsung dengan
              lebih dari 50 perusahaan top dari berbagai industri.
            </p>
            <div>
              <button
                class="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-tertiary transition-colors"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
        <!-- Tracer Study CTA -->
        <div
          class="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl shadow-sm p-6 flex flex-col justify-center text-center relative overflow-hidden"
        >
          <div class="absolute -right-10 -top-10 opacity-10">
            <span class="material-symbols-outlined text-9xl">poll</span>
          </div>
          <h3 class="font-title-lg text-title-lg mb-2 relative z-10">
            Suara Anda Penting
          </h3>
          <p class="font-body-md text-body-md mb-6 relative z-10 opacity-90">
            Bantu kami meningkatkan kualitas pendidikan dengan membagikan status
            karir Anda saat ini.
          </p>
          <NuxtLink
            to="/tracer-study"
            class="bg-secondary-container text-on-primary font-label-md text-label-md px-4 py-3 rounded-lg hover:opacity-90 transition-opacity w-full relative z-10 text-center"
          >
            Mulai Survei Tracer Study
          </NuxtLink>
        </div>
        <!-- Smaller Info Cards -->
        <div
          class="md:col-span-4 bg-surface rounded-xl border border-outline-variant shadow-sm p-6 flex items-start"
        >
          <div
            class="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center mr-4 shrink-0 text-primary"
          >
            <span class="material-symbols-outlined">school</span>
          </div>
          <div>
            <h4 class="font-title-lg text-title-lg text-on-surface mb-1">
              Tips Wawancara
            </h4>
            <p
              class="font-body-md text-body-md text-on-surface-variant text-sm"
            >
              Pelajari strategi menaklukkan wawancara kerja dari praktisi HRD.
            </p>
            <NuxtLink
              to="#"
              class="inline-block mt-2 text-primary font-label-sm text-label-sm hover:underline"
              >Baca Artikel</NuxtLink
            >
          </div>
        </div>
        <div
          class="md:col-span-4 bg-surface rounded-xl border border-outline-variant shadow-sm p-6 flex items-start"
        >
          <div
            class="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center mr-4 shrink-0 text-primary"
          >
            <span class="material-symbols-outlined">description</span>
          </div>
          <div>
            <h4 class="font-title-lg text-title-lg text-on-surface mb-1">
              Review CV Gratis
            </h4>
            <p
              class="font-body-md text-body-md text-on-surface-variant text-sm"
            >
              Dapatkan masukan profesional untuk CV Anda setiap hari Jumat.
            </p>
            <NuxtLink
              to="#"
              class="inline-block mt-2 text-primary font-label-sm text-label-sm hover:underline"
              >Jadwalkan Sesi</NuxtLink
            >
          </div>
        </div>
        <div
          class="md:col-span-4 bg-surface rounded-xl border border-outline-variant shadow-sm p-6 flex items-start"
        >
          <div
            class="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center mr-4 shrink-0 text-primary"
          >
            <span class="material-symbols-outlined">diversity_3</span>
          </div>
          <div>
            <h4 class="font-title-lg text-title-lg text-on-surface mb-1">
              Jejaring Alumni
            </h4>
            <p
              class="font-body-md text-body-md text-on-surface-variant text-sm"
            >
              Bergabunglah dengan forum diskusi khusus alumni universitas.
            </p>
            <NuxtLink
              to="#"
              class="inline-block mt-2 text-primary font-label-sm text-label-sm hover:underline"
              >Gabung Forum</NuxtLink
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
