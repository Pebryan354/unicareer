<script setup>
useHead({
  title: "Employers - UniCareer Portal",
});
</script>

<template>
  <div class="pt-16">
    <!-- Hero Section (Full Width) -->
    <header
      class="relative bg-primary overflow-hidden"
      style="min-height: 500px"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"
      ></div>
      <img
        alt="Corporate meeting"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXLittVvNPWJwU-NsdTSGo3UVztFCTpM_RowC5ZakkkzPntKsQjcoCgsvJHSzDNERXrZ9HOu2WvhUueA6cMQQB6R7jAXAK9XqOmZGCdSGMmIS7hfZ8NsvMG8hgNdQwrXcYmxlCXtO7Ii_ou9yKKWQOZxht85ksaL-dMRVjB_R9FEQykM-8Gtf-rgyrD2CS0Erys3uz88VY6r1pHCV90poEXVouTmLdmCeHT6p9pr2NmvLD6jQqSOmO4Klm57h0tT-VM0NPho-CCw"
      />
      <div
        class="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-full flex flex-col justify-center py-16 md:py-24"
      >
        <div class="max-w-3xl">
          <span
            class="inline-block px-3 py-1 bg-surface-container-low text-primary rounded-full font-label-sm w-max mb-stack-md"
            >Mitra Industri</span
          >
          <h1
            class="font-display-md text-on-primary mb-stack-md text-display-lg leading-tight"
          >
            Temukan Talenta Terbaik untuk Perusahaan Anda.
          </h1>
          <p
            class="font-body-lg text-surface-container-highest mb-stack-lg max-w-2xl text-body-lg"
          >
            Akses langsung ke ribuan lulusan berkualitas dari berbagai disiplin
            ilmu. Bangun masa depan perusahaan Anda bersama talenta unggulan
            kami melalui platform karir terintegrasi.
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              class="bg-secondary-container text-on-primary font-label-md py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >work</span
              >
              Posting Lowongan
            </button>
            <button
              class="bg-transparent border-2 border-surface-container-highest text-on-primary font-label-md py-3 px-8 rounded-lg hover:bg-surface-container-low hover:text-primary transition-colors flex items-center gap-2"
            >
              <span
                class="material-symbols-outlined"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >handshake</span
              >
              Daftar Sebagai Mitra
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main
      class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 space-y-24"
    >
      <!-- Stats Section (Bento Grid Style) -->
      <section class="space-y-stack-lg">
        <div class="text-center">
          <h2
            class="font-headline-lg text-on-surface mb-stack-sm text-headline-lg"
          >
            Mengapa Bermitra Dengan Kami?
          </h2>
          <p class="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Statistik lulusan dan akses eksklusif yang hanya bisa Anda dapatkan
            melalui portal resmi kami.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <!-- Stat 1 -->
          <div
            class="bg-surface rounded-xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md"
            >
              <span
                class="material-symbols-outlined text-primary-container"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >group</span
              >
            </div>
            <h3
              class="font-display-md text-primary mb-stack-sm text-display-md"
            >
              15.000+
            </h3>
            <p class="font-title-lg text-on-surface mb-stack-sm text-title-lg">
              Lulusan Aktif
            </p>
            <p class="font-body-md text-on-surface-variant">
              Terdaftar di database kami, siap untuk dihubungi dan direkrut
              langsung oleh perusahaan Anda.
            </p>
          </div>
          <!-- Stat 2 -->
          <div
            class="bg-primary-container rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div
              class="absolute -right-8 -top-8 w-32 h-32 bg-white opacity-5 rounded-full"
            ></div>
            <div
              class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-stack-md relative z-10"
            >
              <span
                class="material-symbols-outlined text-on-primary"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >school</span
              >
            </div>
            <h3
              class="font-display-md text-on-primary mb-stack-sm relative z-10 text-display-md"
            >
              98%
            </h3>
            <p
              class="font-title-lg text-on-primary mb-stack-sm relative z-10 text-title-lg"
            >
              Tingkat Serapan Kerja
            </p>
            <p
              class="font-body-md text-surface-container-highest relative z-10"
            >
              Lulusan kami terserap di berbagai sektor industri dalam waktu
              kurang dari 6 bulan setelah kelulusan.
            </p>
          </div>
          <!-- Stat 3 -->
          <div
            class="bg-surface rounded-xl p-6 border border-outline-variant shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              class="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center mb-stack-md"
            >
              <span
                class="material-symbols-outlined text-secondary"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >domain</span
              >
            </div>
            <h3
              class="font-display-md text-primary mb-stack-sm text-display-md"
            >
              500+
            </h3>
            <p class="font-title-lg text-on-surface mb-stack-sm text-title-lg">
              Mitra Industri
            </p>
            <p class="font-body-md text-on-surface-variant">
              Perusahaan lokal dan multinasional yang telah mempercayakan
              rekrutmen mereka kepada portal kami.
            </p>
          </div>
        </div>
      </section>

      <!-- Cara Bekerja Sama -->
      <section
        class="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant shadow-sm"
      >
        <div class="text-center mb-stack-lg">
          <h2
            class="font-headline-lg text-on-surface mb-stack-sm text-headline-lg"
          >
            Cara Mudah Bekerja Sama
          </h2>
          <p class="font-body-md text-on-surface-variant">
            Proses yang transparan dan cepat untuk mulai menemukan talenta Anda.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <!-- Connecting Line (Desktop) -->
          <div
            class="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant z-0"
          ></div>
          <!-- Step 1 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div
              class="w-24 h-24 bg-surface rounded-full flex items-center justify-center border-4 border-surface-container-lowest shadow-sm mb-stack-md"
            >
              <span
                class="material-symbols-outlined text-primary text-3xl"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >how_to_reg</span
              >
            </div>
            <h4 class="font-title-lg text-on-surface mb-stack-sm text-title-lg">
              1. Registrasi
            </h4>
            <p class="font-body-md text-on-surface-variant">
              Daftarkan profil perusahaan Anda dengan informasi valid untuk
              verifikasi.
            </p>
          </div>
          <!-- Step 2 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div
              class="w-24 h-24 bg-surface rounded-full flex items-center justify-center border-4 border-surface-container-lowest shadow-sm mb-stack-md"
            >
              <span
                class="material-symbols-outlined text-primary text-3xl"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >verified</span
              >
            </div>
            <h4 class="font-title-lg text-on-surface mb-stack-sm text-title-lg">
              2. Verifikasi
            </h4>
            <p class="font-body-md text-on-surface-variant">
              Tim kami akan memverifikasi profil perusahaan Anda dalam 1x24 jam.
            </p>
          </div>
          <!-- Step 3 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div
              class="w-24 h-24 bg-surface rounded-full flex items-center justify-center border-4 border-surface-container-lowest shadow-sm mb-stack-md"
            >
              <span
                class="material-symbols-outlined text-primary text-3xl"
                style="font-variation-settings: &quot;FILL&quot; 0"
                >post_add</span
              >
            </div>
            <h4 class="font-title-lg text-on-surface mb-stack-sm text-title-lg">
              3. Posting
            </h4>
            <p class="font-body-md text-on-surface-variant">
              Unggah lowongan pekerjaan, program magang, atau informasi
              rekrutmen kampus.
            </p>
          </div>
          <!-- Step 4 -->
          <div class="relative z-10 flex flex-col items-center text-center">
            <div
              class="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center border-4 border-surface-container-lowest shadow-sm mb-stack-md"
            >
              <span
                class="material-symbols-outlined text-on-primary text-3xl"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >person_search</span
              >
            </div>
            <h4 class="font-title-lg text-on-surface mb-stack-sm text-title-lg">
              4. Rekrut
            </h4>
            <p class="font-body-md text-on-surface-variant">
              Kelola lamaran masuk dan temukan kandidat yang paling sesuai
              dengan kebutuhan Anda.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
