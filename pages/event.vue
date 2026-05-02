<script setup>
useHead({
  title: "Event & Agenda - UniCareer Portal",
});
</script>

<template>
  <main
    class="flex-grow pt-24 pb-16 px-6 lg:px-8 max-w-container-max mx-auto w-full flex flex-col gap-margin-desktop"
  >
    <!-- Header Section -->
    <section class="flex flex-col gap-stack-sm md:w-2/3">
      <h1 class="font-display-lg text-display-lg text-primary">
        Agenda & Event Karir
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Tingkatkan keterampilan profesional dan perluas jaringan Anda melalui
        rangkaian acara eksklusif kami. Temukan webinar, workshop, dan job fair
        yang dirancang untuk mempercepat karir Anda.
      </p>
    </section>
    <!-- Filters / Tabs -->
    <section
      class="flex flex-wrap gap-stack-sm items-center border-b border-outline-variant pb-4"
    >
      <button
        class="font-label-md text-label-md px-6 py-2 rounded-lg bg-primary text-on-primary border border-primary transition-colors"
      >
        Semua Event
      </button>
      <button
        class="font-label-md text-label-md px-6 py-2 rounded-lg bg-surface-container-lowest text-on-surface border border-outline hover:bg-surface-container-low transition-colors"
      >
        Webinar
      </button>
      <button
        class="font-label-md text-label-md px-6 py-2 rounded-lg bg-surface-container-lowest text-on-surface border border-outline hover:bg-surface-container-low transition-colors"
      >
        Workshop
      </button>
      <button
        class="font-label-md text-label-md px-6 py-2 rounded-lg bg-surface-container-lowest text-on-surface border border-outline hover:bg-surface-container-low transition-colors"
      >
        Job Fair
      </button>
    </section>
    <!-- Featured Event (Bento-style) -->
    <section
      class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row"
    >
      <div class="md:w-1/2 h-64 md:h-auto relative">
        <img
          alt="Event Banner"
          class="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTXK12NfG8DUwBaamg3hhIqi-01MvO7xn8A8LD0LziYuyZEkmwM491mxU-zpmehxr1HqxBIo1tdAIGjCj-XuUqMj7V8qSSuyOh_FQyJyNSd4fiVeuMID3gonYzT7bdZV1qnhcS4fUG4PV-YROheOIgAnsl2WbHkdBhGkSeHFTRLi-O7z20dddnTEA3PNco8qD-Wrse_9lbTDma6x6vL37WXiyYnmFmibxlptYLH55-dLsKTHni97iTngAFFCQ6ynZgmCJ_h4FzQ"
        />
        <div
          class="absolute top-4 left-4 bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1"
        >
          <span class="material-symbols-outlined text-[16px]">campaign</span>
          Job Fair Utama
        </div>
      </div>
      <div
        class="md:w-1/2 p-8 flex flex-col justify-center gap-stack-md bg-white"
      >
        <div class="flex flex-col gap-stack-sm">
          <h2 class="font-headline-lg text-headline-lg text-primary">
            Mega Career Fair 2026: Jembatan Menuju Masa Depan
          </h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Bergabunglah dengan lebih dari 50 perusahaan terkemuka nasional dan
            multinasional. Bawa CV terbaik Anda dan ikuti sesi walk-in interview
            langsung di lokasi.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-stack-md">
          <div class="flex items-start gap-2">
            <span
              class="material-symbols-outlined text-outline"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >calendar_month</span
            >
            <div>
              <p class="font-label-sm text-label-sm text-outline">Tanggal</p>
              <p class="font-label-md text-label-md text-on-surface">
                15 - 16 November 2026
              </p>
            </div>
          </div>
          <div class="flex items-start gap-2">
            <span
              class="material-symbols-outlined text-outline"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >schedule</span
            >
            <div>
              <p class="font-label-sm text-label-sm text-outline">Waktu</p>
              <p class="font-label-md text-label-md text-on-surface">
                09:00 - 16:00 WIB
              </p>
            </div>
          </div>
          <div class="flex items-start gap-2 col-span-2">
            <span
              class="material-symbols-outlined text-outline"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >location_on</span
            >
            <div>
              <p class="font-label-sm text-label-sm text-outline">Lokasi</p>
              <p class="font-label-md text-label-md text-on-surface">
                Auditorium Utama Universitas
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button
            class="bg-secondary-container text-on-primary font-label-md text-label-md px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity w-full md:w-auto justify-center"
          >
            Daftar Sekarang
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
    <!-- Event Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      <!-- Card 1 -->
      <article
        class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
      >
        <div class="h-48 relative">
          <img
            alt="Workshop Event"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWhCYq4fsh77W6XURkNQU8J_ajtNTiNQzzWW_3OcpIjjeLtSUGyjNlUwSTW3nhkP-7uCNCqeDQGp12r0AArUnvL7rPm-MgdJEVZXZ5aCu32EW1jkjYk3WNiI6l0ggMoAsoW1dClOTUQM5l7YrF-OcV0IkmuxsAT8UgLntBMXtfulvZJEIVQDG4OAJijC2Uq19Z5FEb3X6wE5smxD9ZX6_Ut6ahn2ctvDnY-3FgKEjgq4gDcSz5QVipxrAKfGYBN8xDyrP9G9PXg"
          />
          <div
            class="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full"
          >
            Workshop
          </div>
        </div>
        <div class="p-6 flex flex-col flex-grow gap-stack-md">
          <h3 class="font-title-lg text-title-lg text-primary line-clamp-2">
            Strategi Menulis CV ATS-Friendly & Lolos Screening HR
          </h3>
          <div class="flex flex-col gap-2 mt-auto">
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]"
                >calendar_today</span
              >
              20 November 2026
            </div>
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]"
                >schedule</span
              >
              13:00 - 15:30 WIB
            </div>
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]">person</span>
              Budi Santoso (Senior HR Tech)
            </div>
          </div>
          <button
            class="mt-4 w-full border border-primary text-primary font-label-md text-label-md py-2 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            Lihat Detail
          </button>
        </div>
      </article>
      <!-- Card 2 -->
      <article
        class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
      >
        <div class="h-48 relative">
          <img
            alt="Webinar Event"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMmyKi-Lz9wF7x49NjsynZYbu96IfAZ3TAyRRJXKp_ZGaeBW_EwxRaPxbINFmxWLrXxO-cyLHXgydi4XdSohegkbEIFxCLuDXbhV78d37wL-fcrN7mgaZk_CR_njWD9gDfF2YubQI1rUeolBBFOEzNOJJaae0cCM5b2h0BnHX5GC4x6ctVquPBIw_0zWNvocdve4IfiPRNmtkCyxqGSjxMi0UqPFD8afm20uq0HJMao7vFfXaR1CwT3cZ33TQ7ngQVfjuDw2-XSQ"
          />
          <div
            class="absolute top-4 left-4 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-3 py-1 rounded-full"
          >
            Webinar
          </div>
        </div>
        <div class="p-6 flex flex-col flex-grow gap-stack-md">
          <h3 class="font-title-lg text-title-lg text-primary line-clamp-2">
            Peluang Karir di Industri Data Science untuk Fresh Graduate
          </h3>
          <div class="flex flex-col gap-2 mt-auto">
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]"
                >calendar_today</span
              >
              25 November 2026
            </div>
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]"
                >schedule</span
              >
              10:00 - 12:00 WIB
            </div>
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]">person</span>
              Siti Rahma (Data Scientist Lead)
            </div>
          </div>
          <button
            class="mt-4 w-full bg-secondary-container text-on-primary font-label-md text-label-md py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Registrasi
          </button>
        </div>
      </article>
      <!-- Card 3 -->
      <article
        class="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
      >
        <div class="h-48 relative">
          <img
            alt="Networking Event"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIiT1jFGJ0EnZ7Umb3tRuVpzNoiK_GFUI1Vx0e1n4BHswz1E2WXSJV9qy4R83F26nmNw9XP8Qz1z4KnoDzOP7HpgcnH2XttmHykyyd527ZyP8CS19vS7O_nL-wNTAujOEpIT3dYtvOvM-3Mv6pJzRYNcEXvrbwV-s9JzWx711cWAEGXghvdACf2S1xO2cJX4Ec1ZTN_hy8emxtdvQD_7rcJFJs0u6_AxKdAn2MgmUZQB-OMYlGVarLiau0_iV6B_IYryFCFIxgWg"
          />
          <div
            class="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full"
          >
            Workshop
          </div>
        </div>
        <div class="p-6 flex flex-col flex-grow gap-stack-md">
          <h3 class="font-title-lg text-title-lg text-primary line-clamp-2">
            Mastering the Art of Interview & Salary Negotiation
          </h3>
          <div class="flex flex-col gap-2 mt-auto">
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]"
                >calendar_today</span
              >
              02 Desember 2026
            </div>
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]"
                >schedule</span
              >
              09:00 - 16:00 WIB
            </div>
            <div
              class="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
            >
              <span class="material-symbols-outlined text-[18px]">person</span>
              Tim Career Center
            </div>
          </div>
          <button
            class="mt-4 w-full border border-primary text-primary font-label-md text-label-md py-2 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            Lihat Detail
          </button>
        </div>
      </article>
    </section>
  </main>
</template>
