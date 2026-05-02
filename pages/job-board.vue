<script setup>
useHead({
  title: "Job Board - UniCareer Portal",
});
</script>

<template>
  <div class="pt-16">
    <section
      class="bg-surface-container border-b border-outline-variant py-margin-desktop px-6"
    >
      <div class="max-w-container-max mx-auto flex flex-col gap-stack-sm">
        <h1 class="font-display-md text-display-md text-primary">
          Temukan Karir Impian Anda
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Jelajahi ribuan lowongan pekerjaan dari perusahaan terkemuka. Filter
          berdasarkan keahlian, lokasi, dan preferensi karir Anda.
        </p>
      </div>
    </section>

    <main
      class="max-w-container-max mx-auto px-6 py-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter"
    >
      <!-- Sidebar Filters -->
      <aside class="md:col-span-3 flex flex-col gap-stack-lg">
        <div
          class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md flex flex-col gap-stack-md"
        >
          <div
            class="flex items-center justify-between border-b border-outline-variant pb-stack-sm mb-stack-sm"
          >
            <h2 class="font-title-lg text-title-lg text-primary">
              Filter Pencarian
            </h2>
            <button
              class="font-label-sm text-label-sm text-secondary-container hover:underline"
            >
              Reset
            </button>
          </div>
          <!-- Filter Category: Tipe Pekerjaan -->
          <div class="flex flex-col gap-stack-sm">
            <h3
              class="font-label-md text-label-md text-on-surface font-semibold"
            >
              Tipe Pekerjaan
            </h3>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                checked=""
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Penuh Waktu (Full-time)</span
              >
            </label>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Paruh Waktu (Part-time)</span
              >
            </label>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Magang (Internship)</span
              >
            </label>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Kontrak (Contract)</span
              >
            </label>
          </div>
          <hr class="border-outline-variant my-stack-sm" />
          <!-- Filter Category: Model Kerja -->
          <div class="flex flex-col gap-stack-sm">
            <h3
              class="font-label-md text-label-md text-on-surface font-semibold"
            >
              Model Kerja
            </h3>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                checked=""
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Kantor (On-site)</span
              >
            </label>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                checked=""
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Jarak Jauh (Remote)</span
              >
            </label>
            <label class="flex items-center gap-stack-sm cursor-pointer">
              <input
                class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                type="checkbox"
              />
              <span class="font-body-md text-body-md text-on-surface-variant"
                >Hibrida (Hybrid)</span
              >
            </label>
          </div>
          <hr class="border-outline-variant my-stack-sm" />
          <!-- Filter Category: Lokasi -->
          <div class="flex flex-col gap-stack-sm">
            <h3
              class="font-label-md text-label-md text-on-surface font-semibold"
            >
              Lokasi
            </h3>
            <div class="relative">
              <span
                class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
                >search</span
              >
              <input
                class="w-full pl-10 pr-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none"
                placeholder="Cari kota..."
                type="text"
              />
            </div>
            <div class="mt-2 flex flex-col gap-2 max-h-40 overflow-y-auto pr-2">
              <label class="flex items-center gap-stack-sm cursor-pointer">
                <input
                  class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                  type="checkbox"
                />
                <span class="font-body-md text-body-md text-on-surface-variant"
                  >Jakarta Pusat</span
                >
              </label>
              <label class="flex items-center gap-stack-sm cursor-pointer">
                <input
                  class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                  type="checkbox"
                />
                <span class="font-body-md text-body-md text-on-surface-variant"
                  >Bandung</span
                >
              </label>
              <label class="flex items-center gap-stack-sm cursor-pointer">
                <input
                  class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                  type="checkbox"
                />
                <span class="font-body-md text-body-md text-on-surface-variant"
                  >Surabaya</span
                >
              </label>
              <label class="flex items-center gap-stack-sm cursor-pointer">
                <input
                  class="rounded border-outline-variant text-primary-container focus:ring-primary-container h-4 w-4"
                  type="checkbox"
                />
                <span class="font-body-md text-body-md text-on-surface-variant"
                  >Yogyakarta</span
                >
              </label>
            </div>
          </div>
        </div>
      </aside>
      <!-- Job Listings -->
      <section class="md:col-span-9 flex flex-col gap-stack-md">
        <!-- Sorting & Results Count -->
        <div
          class="flex justify-between items-center bg-surface-container-lowest border border-outline-variant rounded-lg p-3"
        >
          <span class="font-body-md text-body-md text-on-surface-variant"
            >Menampilkan <strong class="text-on-surface">1 - 10</strong> dari
            <strong class="text-on-surface">245</strong> lowongan</span
          >
          <div class="flex items-center gap-2">
            <span class="font-body-md text-body-md text-on-surface-variant"
              >Urutkan:</span
            >
            <select
              class="border-none bg-transparent font-label-md text-label-md text-primary font-semibold focus:ring-0 cursor-pointer"
            >
              <option>Terbaru</option>
              <option>Paling Sesuai</option>
              <option>Gaji Tertinggi</option>
            </select>
          </div>
        </div>
        <!-- Job Card 1 (Featured) -->
        <article
          class="bg-surface-container-lowest border-2 border-primary-container rounded-lg p-stack-md flex flex-col md:flex-row gap-stack-md relative overflow-hidden transition-shadow shadow-sm hover:shadow-md group"
        >
          <div
            class="absolute top-0 right-0 bg-secondary-container text-on-primary px-3 py-1 rounded-bl-lg font-label-sm text-label-sm flex items-center gap-1 z-10"
          >
            <span class="material-symbols-outlined text-[14px]">star</span>
            Unggulan
          </div>
          <div class="shrink-0">
            <img
              class="w-16 h-16 rounded-lg object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsCjnlQXozo3NfCCWYF90yzNuGnEdoRzys6otnNytGqfm8dKrcBKSo7NhHADqj7mGwcWuoU1OB3-l8K1TixAOldX13k5yu7d658SKl2jwUdy6T9JFaQLjeNbyoDyHCEJjvOwuW89qqlKfp8ldeX0UU7jR7wPo26XQCNAR1_SshgFhy0X7RhZ9qSd36ba2qccUQ6cziqY6tS4C6gCWINKe8gCP5Uqqd5WmqKOzVFF_ThkP2CV8J8xDNcIWOwN1tLldksVAk3_a5kw"
            />
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <div>
              <h3
                class="font-title-lg text-title-lg text-primary-container group-hover:underline cursor-pointer"
              >
                Senior Software Engineer (Backend)
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-1">
                PT Teknologi Inovasi Nusantara
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >location_on</span
                  >
                  Jakarta Selatan
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >work</span
                  >
                  Penuh Waktu
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >home_work</span
                  >
                  Hibrida
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container-high px-2 py-1 rounded font-label-sm text-label-sm text-secondary-container font-semibold"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >payments</span
                  >
                  Rp15.000.000 - Rp25.000.000
                </span>
              </div>
            </div>
            <p
              class="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-4 text-sm"
            >
              Kami mencari Backend Engineer berpengalaman untuk bergabung dengan
              tim inti kami. Anda akan bertanggung jawab untuk merancang,
              mengembangkan, dan memelihara sistem API skala besar menggunakan
              Golang dan PostgreSQL.
            </p>
          </div>
          <div
            class="shrink-0 flex flex-col justify-end items-end md:items-start pt-4 md:pt-0 mt-auto md:ml-4"
          >
            <p class="font-label-sm text-label-sm text-outline mb-2">
              Diunggah 2 hari lalu
            </p>
            <button
              class="bg-primary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-primary transition-colors whitespace-nowrap w-full md:w-auto"
            >
              Lihat Detail
            </button>
          </div>
        </article>
        <!-- Job Card 2 -->
        <article
          class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md flex flex-col md:flex-row gap-stack-md transition-shadow shadow-sm hover:shadow-md group"
        >
          <div class="shrink-0">
            <img
              class="w-16 h-16 rounded-lg object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO5oF3ghM_xPmRFmuC5vTU5UARNjYQPiPdpQN4LGocrWoUkt-lHm8jNROcd6qrvXKGN-OZYdN_xGEcWPd03Mh8AGImN3N8g8ghPMbg3KAP6UV_jm97WvtyTQ6z0WXK8IdTy0c8FCG7cOexkMGBqokwwXnBnkXWFBc3whqFUWkxLT73AvD_Key-x0hfm1WL3Qpj-E4tYB3mltF9Trht1BdBNHQMr3T4GfdRmyND4KObDXRgYSQiXI4QHi7FEm7HtX6UIqlL30imNA"
            />
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <div>
              <h3
                class="font-title-lg text-title-lg text-primary-container group-hover:underline cursor-pointer"
              >
                Data Analyst Intern
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-1">
                Bank Mandiri Sejahtera Tbk
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >location_on</span
                  >
                  Jakarta Pusat
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >work</span
                  >
                  Magang
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >apartment</span
                  >
                  Kantor
                </span>
              </div>
            </div>
            <p
              class="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-4 text-sm"
            >
              Program magang 6 bulan untuk mahasiswa tingkat akhir atau fresh
              graduate. Membantu tim analis data dalam menyusun laporan performa
              keuangan menggunakan SQL dan Tableau.
            </p>
          </div>
          <div
            class="shrink-0 flex flex-col justify-end items-end md:items-start pt-4 md:pt-0 mt-auto md:ml-4"
          >
            <p class="font-label-sm text-label-sm text-outline mb-2">
              Diunggah 5 jam lalu
            </p>
            <button
              class="bg-transparent border border-primary-container text-primary-container font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap w-full md:w-auto"
            >
              Lihat Detail
            </button>
          </div>
        </article>
        <!-- Job Card 3 -->
        <article
          class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md flex flex-col md:flex-row gap-stack-md transition-shadow shadow-sm hover:shadow-md group"
        >
          <div class="shrink-0">
            <img
              class="w-16 h-16 rounded-lg object-cover border border-outline-variant"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI2vxvh3AvRAcEv1VOVh1nBHi1wTIdanfubn2PvMNladWWk-5qLYRqVVPXmnsAdOmT3cRMaKs26qsyDK5PY9ZVGJLwnS8LbeX0vv1mSGYYCpPRIk07MaFo_uZn6vzlj_WuxM6t-0NvMPjcqvskicPxmGunk1MmKO2S-2Y_wyJrgDsOnawmqIuKkuSdRaKBkyXHnfG9L2CVCE5_0oWb4CQc3f4pLDIaWPqaV4cqJ7PXRPu7SR4Ev3Xv7oj5eK5tjqbg3-InUy0Hhw"
            />
          </div>
          <div class="flex-grow flex flex-col justify-between">
            <div>
              <h3
                class="font-title-lg text-title-lg text-primary-container group-hover:underline cursor-pointer"
              >
                Digital Marketing Specialist
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-1">
                Kreatif Dinamika Agency
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >location_on</span
                  >
                  Bandung
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >work</span
                  >
                  Penuh Waktu
                </span>
                <span
                  class="inline-flex items-center gap-1 bg-surface-container px-2 py-1 rounded font-label-sm text-label-sm text-on-surface-variant"
                >
                  <span class="material-symbols-outlined text-[14px]"
                    >public</span
                  >
                  Jarak Jauh
                </span>
              </div>
            </div>
            <p
              class="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-4 text-sm"
            >
              Bertanggung jawab atas eksekusi kampanye pemasaran digital di
              berbagai platform media sosial. Mengelola anggaran iklan, analisis
              ROI, dan kolaborasi dengan tim konten kreatif.
            </p>
          </div>
          <div
            class="shrink-0 flex flex-col justify-end items-end md:items-start pt-4 md:pt-0 mt-auto md:ml-4"
          >
            <p class="font-label-sm text-label-sm text-outline mb-2">
              Diunggah 1 minggu lalu
            </p>
            <button
              class="bg-transparent border border-primary-container text-primary-container font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap w-full md:w-auto"
            >
              Lihat Detail
            </button>
          </div>
        </article>
        <!-- Pagination -->
        <div class="flex justify-center mt-stack-lg gap-2">
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-50"
            disabled=""
          >
            <span class="material-symbols-outlined text-[20px]"
              >chevron_left</span
            >
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center rounded bg-primary-container text-on-primary font-label-md text-label-md"
          >
            1
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
          >
            2
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
          >
            3
          </button>
          <span class="w-10 h-10 flex items-center justify-center text-outline"
            >...</span
          >
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
          >
            25
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            <span class="material-symbols-outlined text-[20px]"
              >chevron_right</span
            >
          </button>
        </div>
      </section>
    </main>
  </div>
</template>
