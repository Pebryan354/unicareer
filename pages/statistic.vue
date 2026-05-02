<script setup>
useHead({
  title: "Statistik - UniCareer Portal",
});
</script>

<template>
  <main class="flex-grow pt-24 pb-16 px-6 max-w-container-max mx-auto w-full">
    <!-- Header Section -->
    <header class="mb-10 text-center">
      <h1 class="font-display-md text-display-md text-primary mb-stack-sm">
        Statistik & Laporan Tracer Study
      </h1>
      <p
        class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto"
      >
        Visualisasi data interaktif mengenai serapan lulusan, keselarasan bidang
        kerja, dan waktu tunggu pekerjaan pertama dari alumni Universitas kami.
      </p>
    </header>
    <!-- Bento Grid Dashboard -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <!-- Key Metric 1: Waktu Tunggu -->
      <div
        class="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-lg shadow-[0_4px_20px_rgba(0,36,74,0.05)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,36,74,0.1)] transition-all duration-300"
      >
        <div
          class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
        >
          <span
            class="material-symbols-outlined text-6xl text-primary"
            style="font-variation-settings: &quot;FILL&quot; 1"
            >schedule</span
          >
        </div>
        <h3
          class="font-title-lg text-title-lg text-on-surface mb-stack-sm text-title-lg"
        >
          Rata-rata Masa Tunggu
        </h3>
        <div class="flex items-baseline gap-2 mb-stack-md">
          <span
            class="font-display-lg text-display-lg text-primary text-display-lg"
            >3.2</span
          >
          <span
            class="font-body-lg text-body-lg text-on-surface-variant text-body-lg"
            >Bulan</span
          >
        </div>
        <p
          class="font-body-md text-body-md text-on-surface-variant mb-stack-md"
        >
          Waktu rata-rata lulusan mendapatkan pekerjaan pertama setelah
          kelulusan.
        </p>
        <div class="w-full bg-surface-container-high rounded-full h-2">
          <div
            class="bg-secondary-container h-2 rounded-full"
            style="width: 75%"
          ></div>
        </div>
      </div>
      <!-- Key Metric 2: Gaji Pertama -->
      <div
        class="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-lg shadow-[0_4px_20px_rgba(0,36,74,0.05)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,36,74,0.1)] transition-all duration-300"
      >
        <div
          class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
        >
          <span
            class="material-symbols-outlined text-6xl text-primary"
            style="font-variation-settings: &quot;FILL&quot; 1"
            >payments</span
          >
        </div>
        <h3
          class="font-title-lg text-title-lg text-on-surface mb-stack-sm text-title-lg"
        >
          Rata-rata Gaji Pertama
        </h3>
        <div class="flex items-baseline gap-2 mb-stack-md">
          <span
            class="font-headline-lg text-headline-lg text-primary text-headline-lg"
            >Rp5.5M</span
          >
        </div>
        <p
          class="font-body-md text-body-md text-on-surface-variant mb-stack-md"
        >
          Berdasarkan data survei lulusan 3 tahun terakhir.
        </p>
        <div class="flex gap-2">
          <span
            class="bg-surface-container text-primary-container px-2 py-1 rounded font-label-sm text-label-sm flex items-center"
          >
            <span class="material-symbols-outlined text-[14px] mr-1"
              >trending_up</span
            >
            +12% dari tahun lalu
          </span>
        </div>
      </div>
      <!-- Key Metric 3: Tingkat Penyerapan -->
      <div
        class="md:col-span-4 bg-primary text-on-primary rounded-xl p-stack-lg shadow-[0_4px_20px_rgba(0,36,74,0.15)] relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,36,74,0.2)] transition-all duration-300"
      >
        <div
          class="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        ></div>
        <h3
          class="font-title-lg text-title-lg mb-stack-sm relative z-10 text-title-lg"
        >
          Tingkat Penyerapan Kerja
        </h3>
        <div class="flex items-baseline gap-2 mb-stack-md relative z-10">
          <span class="font-display-lg text-display-lg text-display-lg"
            >88%</span
          >
        </div>
        <p
          class="font-body-md text-body-md text-primary-fixed-dim relative z-10"
        >
          Lulusan langsung bekerja atau melanjutkan studi dalam 6 bulan pertama.
        </p>
      </div>
      <!-- Chart Section: Keselarasan Bidang Kerja -->
      <div
        class="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-lg shadow-[0_4px_20px_rgba(0,36,74,0.05)]"
      >
        <div class="flex justify-between items-center mb-stack-lg">
          <div>
            <h3
              class="font-headline-md text-headline-md text-on-surface text-headline-md"
            >
              Keselarasan Bidang Kerja
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Relevansi pekerjaan saat ini dengan program studi.
            </p>
          </div>
          <div class="flex gap-2">
            <button
              class="px-3 py-1 bg-surface-container text-primary-container rounded font-label-sm text-label-sm font-medium"
            >
              2026
            </button>
            <button
              class="px-3 py-1 bg-transparent text-on-surface-variant rounded border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container transition-colors"
            >
              2025
            </button>
          </div>
        </div>
        <!-- Mock Chart Area (CSS Based) -->
        <div class="h-64 flex items-end justify-between gap-4 relative mt-10">
          <!-- Grid Lines -->
          <div
            class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5"
          >
            <div class="w-full h-px bg-on-surface"></div>
            <div class="w-full h-px bg-on-surface"></div>
            <div class="w-full h-px bg-on-surface"></div>
            <div class="w-full h-px bg-on-surface"></div>
            <div class="w-full h-px bg-on-surface"></div>
          </div>
          <!-- Bars -->
          <div
            class="w-full flex flex-col items-center group relative cursor-pointer"
          >
            <div
              class="w-full max-w-[60px] bg-primary rounded-t-lg h-[80%] transition-all duration-300 group-hover:bg-primary-container"
            ></div>
            <span
              class="mt-2 font-label-sm text-label-sm text-on-surface-variant text-center"
            >
              Sangat Selaras<br /><span class="font-bold text-primary"
                >60%</span
              >
            </span>
          </div>
          <div
            class="w-full flex flex-col items-center group relative cursor-pointer"
          >
            <div
              class="w-full max-w-[60px] bg-tertiary-container rounded-t-lg h-[25%] transition-all duration-300 group-hover:bg-tertiary"
            ></div>
            <span
              class="mt-2 font-label-sm text-label-sm text-on-surface-variant text-center"
            >
              Selaras<br /><span class="font-bold text-tertiary">25%</span>
            </span>
          </div>
          <div
            class="w-full flex flex-col items-center group relative cursor-pointer"
          >
            <div
              class="w-full max-w-[60px] bg-secondary-container rounded-t-lg h-[10%] transition-all duration-300 group-hover:bg-secondary"
            ></div>
            <span
              class="mt-2 font-label-sm text-label-sm text-on-surface-variant text-center"
            >
              Kurang Selaras<br /><span
                class="font-bold text-secondary-container"
                >10%</span
              >
            </span>
          </div>
          <div
            class="w-full flex flex-col items-center group relative cursor-pointer"
          >
            <div
              class="w-full max-w-[60px] bg-outline-variant rounded-t-lg h-[5%] transition-all duration-300 group-hover:bg-outline"
            ></div>
            <span
              class="mt-2 font-label-sm text-label-sm text-on-surface-variant text-center"
            >
              Tidak Selaras<br /><span class="font-bold text-outline">5%</span>
            </span>
          </div>
        </div>
      </div>
      <!-- List Section: Sebaran Industri -->
      <div
        class="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-stack-lg shadow-[0_4px_20px_rgba(0,36,74,0.05)]"
      >
        <h3
          class="font-headline-md text-headline-md text-on-surface mb-stack-sm text-headline-md"
        >
          Sebaran Industri
        </h3>
        <p
          class="font-body-md text-body-md text-on-surface-variant mb-stack-lg"
        >
          Top 5 sektor industri tempat alumni bekerja.
        </p>
        <div class="flex flex-col gap-4">
          <div
            class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-surface-container-highest"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >computer</span
                >
              </div>
              <span class="font-label-md text-label-md text-on-surface"
                >Teknologi & IT</span
              >
            </div>
            <span class="font-title-lg text-title-lg text-primary text-title-lg"
              >35%</span
            >
          </div>
          <div
            class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-surface-container-highest"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >account_balance</span
                >
              </div>
              <span class="font-label-md text-label-md text-on-surface"
                >Perbankan & Keuangan</span
              >
            </div>
            <span
              class="font-title-lg text-title-lg text-on-surface-variant text-title-lg"
              >22%</span
            >
          </div>
          <div
            class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-surface-container-highest"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >school</span
                >
              </div>
              <span class="font-label-md text-label-md text-on-surface"
                >Pendidikan</span
              >
            </div>
            <span
              class="font-title-lg text-title-lg text-on-surface-variant text-title-lg"
              >15%</span
            >
          </div>
          <div
            class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-surface-container-highest"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >local_hospital</span
                >
              </div>
              <span class="font-label-md text-label-md text-on-surface"
                >Kesehatan</span
              >
            </div>
            <span
              class="font-title-lg text-title-lg text-on-surface-variant text-title-lg"
              >12%</span
            >
          </div>
          <div
            class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-surface-container-highest"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant"
              >
                <span class="material-symbols-outlined text-[18px]"
                  >factory</span
                >
              </div>
              <span class="font-label-md text-label-md text-on-surface"
                >Manufaktur</span
              >
            </div>
            <span
              class="font-title-lg text-title-lg text-on-surface-variant text-title-lg"
              >8%</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
