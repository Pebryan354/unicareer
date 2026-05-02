<script setup>
useHead({
  title: "Tracer Study - UniCareer Portal",
});
</script>

<template>
  <main
    class="flex-grow pt-[104px] pb-margin-desktop px-margin-mobile md:px-6 max-w-container-max mx-auto w-full"
  >
    <div class="mb-stack-lg">
      <h1 class="font-display-md text-primary mb-stack-sm text-display-md">
        Dashboard Tracer Study
      </h1>
      <p class="font-body-lg text-on-surface-variant text-body-lg">
        Selamat datang kembali. Partisipasi Anda sangat berarti untuk
        pengembangan institusi.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <!-- Main Content Area -->
      <div class="md:col-span-8 flex flex-col gap-gutter">
        <!-- Status Card -->
        <div
          class="bg-surface relative overflow-hidden rounded-xl border border-outline-variant p-6 shadow-[0_4px_12px_rgba(0,36,74,0.05)]"
        >
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-secondary-container opacity-10 rounded-full blur-2xl -mr-10 -mt-10"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-primary-container opacity-10 rounded-full blur-xl -ml-6 -mb-6"
          ></div>
          <div class="relative z-10">
            <div class="flex justify-between items-start mb-stack-md">
              <div>
                <h2 class="font-title-lg text-title-lg text-primary mb-1">
                  Status Pengisian Kuesioner
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Tahun Kelulusan: 2026
                </p>
              </div>
              <span
                class="inline-flex items-center gap-1 bg-surface-container-high text-primary px-3 py-1 rounded-full font-label-sm text-label-sm"
              >
                <span class="material-symbols-outlined text-[16px]"
                  >pending_actions</span
                >
                Sedang Berlangsung
              </span>
            </div>
            <div class="mb-stack-sm">
              <div
                class="flex justify-between font-label-md text-label-md text-on-surface-variant mb-2"
              >
                <span>Progress Keseluruhan</span>
                <span class="font-bold text-primary">35%</span>
              </div>
              <div class="w-full bg-surface-container rounded-full h-3">
                <div
                  class="bg-primary h-3 rounded-full"
                  style="width: 35%"
                ></div>
              </div>
            </div>
            <div class="mt-stack-lg flex gap-4">
              <button
                class="bg-secondary-container text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-opacity shadow-sm"
              >
                Lanjutkan Kuesioner
                <span class="material-symbols-outlined text-[18px]"
                  >arrow_forward</span
                >
              </button>
            </div>
          </div>
        </div>
        <!-- Guidelines Card -->
        <div
          class="bg-surface rounded-xl border border-outline-variant p-6 shadow-[0_2px_8px_rgba(0,36,74,0.03)]"
        >
          <h3
            class="font-title-lg text-title-lg text-primary mb-stack-md flex items-center gap-2"
          >
            <span class="material-symbols-outlined">menu_book</span> Panduan
            Pengisian
          </h3>
          <ul class="space-y-stack-md">
            <li class="flex gap-3">
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold"
              >
                1
              </div>
              <div>
                <h4 class="font-label-md text-label-md text-on-surface mb-1">
                  Siapkan Data Pekerjaan
                </h4>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Siapkan informasi mengenai riwayat pekerjaan, pendapatan
                  rata-rata, dan relevansi bidang studi dengan pekerjaan Anda
                  saat ini.
                </p>
              </div>
            </li>
            <li class="flex gap-3">
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold"
              >
                2
              </div>
              <div>
                <h4 class="font-label-md text-label-md text-on-surface mb-1">
                  Simpan Progres Berkala
                </h4>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Sistem akan menyimpan progres Anda secara otomatis setiap kali
                  Anda berpindah halaman kuesioner.
                </p>
              </div>
            </li>
            <li class="flex gap-3">
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold"
              >
                3
              </div>
              <div>
                <h4 class="font-label-md text-label-md text-on-surface mb-1">
                  Validasi Data
                </h4>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Pastikan semua data yang dimasukkan akurat sebelum melakukan
                  finalisasi di akhir sesi kuesioner.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Sidebar -->
      <div class="md:col-span-4 flex flex-col gap-gutter">
        <!-- FAQ Section -->
        <div
          class="bg-surface rounded-xl border border-outline-variant p-6 shadow-[0_2px_8px_rgba(0,36,74,0.03)]"
        >
          <h3
            class="font-title-lg text-title-lg text-primary mb-stack-md flex items-center gap-2"
          >
            <span class="material-symbols-outlined">help</span> FAQ Singkat
          </h3>
          <div class="space-y-4">
            <div
              class="border-b border-outline-variant pb-4 last:border-0 last:pb-0"
            >
              <h4 class="font-label-md text-label-md text-on-surface mb-1">
                Mengapa saya harus mengisi ini?
              </h4>
              <p
                class="font-body-md text-body-md text-on-surface-variant text-sm"
              >
                Data Anda membantu kami mengevaluasi kurikulum dan meningkatkan
                kualitas pendidikan untuk generasi berikutnya.
              </p>
            </div>
            <div
              class="border-b border-outline-variant pb-4 last:border-0 last:pb-0"
            >
              <h4 class="font-label-md text-label-md text-on-surface mb-1">
                Apakah data saya aman?
              </h4>
              <p
                class="font-body-md text-body-md text-on-surface-variant text-sm"
              >
                Ya, data Anda akan dianonimkan dan hanya digunakan untuk
                keperluan analisis agregat institusi.
              </p>
            </div>
            <div
              class="border-b border-outline-variant pb-4 last:border-0 last:pb-0"
            >
              <h4 class="font-label-md text-label-md text-on-surface mb-1">
                Berapa lama waktu pengisian?
              </h4>
              <p
                class="font-body-md text-body-md text-on-surface-variant text-sm"
              >
                Kuesioner ini umumnya membutuhkan waktu sekitar 10-15 menit
                untuk diselesaikan.
              </p>
            </div>
          </div>
        </div>
        <!-- Support Card -->
        <div
          class="bg-surface-container-low rounded-xl p-6 border border-outline-variant"
        >
          <h3 class="font-title-lg text-title-lg text-primary mb-2">
            Butuh Bantuan?
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4">
            Tim support kami siap membantu jika Anda mengalami kendala teknis.
          </p>
          <button
            class="w-full bg-transparent border border-primary text-primary font-label-md text-label-md px-4 py-2 rounded flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
          >
            <span class="material-symbols-outlined text-[18px]"
              >support_agent</span
            >
            Hubungi Support
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
