import React, { JSX, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function KelasMengajiHome(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* NAVIGATION */}
      <nav className="w-full flex justify-center items-center py-4 bg-transparent shadow-lg overflow-visible">
        <div className="w-full max-w-5xl bg-white rounded-2xl flex items-center px-6 py-2 relative">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="/logo_ariah.png" alt="Kelas Mengaji Ariah" className="h-12 w-auto" />
          </a>
          {/* Desktop Links */}
          <div className="flex-1 justify-center gap-10 hidden md:flex">
            <a href="#tentang" className="text-gray-700 hover:text-lime-600 font-semibold text-base transition">Siapa Kami</a>
            <a href="#kelebihan" className="text-gray-700 hover:text-lime-600 font-semibold text-base transition">Kelebihan Kelas</a>
          </div>
          {/* Desktop Button */}
          <div className="flex-shrink-0 hidden md:block">
            <a
              href="#daftar"
              className="border border-lime-500 text-lime-600 px-6 py-2 rounded-lg font-semibold text-base hover:bg-lime-50 transition"
            >
              Daftar Sekarang
            </a>
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden ml-auto text-lime-600 text-2xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu"
          >
            <FaBars />
          </button>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Menu */}
              <div className="ml-auto w-4/5 max-w-xs bg-white h-full shadow-lg flex flex-col p-6 relative z-50">
                <button
                  className="self-end text-2xl text-lime-600 mb-6"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Tutup menu"
                >
                  <FaTimes />
                </button>
                <a
                  href="#tentang"
                  className="py-2 text-base font-medium text-gray-700 hover:text-lime-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Siapa Kami
                </a>
                <a
                  href="#kelebihan"
                  className="py-2 text-base font-medium text-gray-700 hover:text-lime-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Kelebihan Kelas
                </a>
                <a
                  href="#daftar"
                  className="mt-4 border border-lime-500 text-lime-600 px-6 py-2 rounded-lg font-semibold hover:bg-lime-50 transition text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Daftar Percuma
                </a>
              </div>
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full flex justify-center py-12 sm:py-20 px-2 bg-transparent">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center md:justify-start">
            <img src="/logo_ariah.png" alt="Kelas Mengaji Ariah" className="h-28 w-auto mb-6 md:mb-0" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-lime-600">Kelas Mengaji Al-Quran Dewasa & Kanak-kanak</h1>
            <p className="text-base sm:text-lg mb-6 text-gray-700">
              Kelas mengaji secara fizikal & online bersama guru bertauliah. Sesuai untuk semua peringkat umur.
            </p>
            <a
              href="#daftar"
              className="inline-block border border-lime-500 text-lime-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-lime-50 transition"
            >
              Daftar Percuma
            </a>
          </div>
        </div>
      </section>

      {/* TENTANG KELAS */}
      <section id="tentang" className="w-full flex justify-center py-16 px-4 bg-transparent">
        <div className="w-full max-w-5xl">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4">Siapa Kami</h3>
          <p className="text-gray-700 leading-relaxed">
            Kelas Mengaji Ariah menawarkan pembelajaran Al-Quran dari asas hingga mahir, untuk kanak-kanak dan dewasa. Guru-guru kami berpengalaman dan bertauliah, serta menggunakan modul mudah difahami.
          </p>
        </div>
      </section>

      {/* KELEBIHAN KELAS */}
      <section id="kelebihan" className="w-full flex justify-center py-16 px-4 bg-gray-50">
        <div className="w-full max-w-5xl">
          <h3 className="text-2xl font-semibold text-lime-600 mb-6">Kelebihan Kelas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
              <div className="font-bold text-lime-600 mb-2">Guru Bertauliah</div>
              <div>Tenaga pengajar berpengalaman & bersijil.</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
              <div className="font-bold text-lime-600 mb-2">Modul Mudah</div>
              <div>Kaedah pembelajaran ringkas & interaktif.</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
              <div className="font-bold text-lime-600 mb-2">Kelas Online & Fizikal</div>
              <div>Pilihan kelas secara bersemuka atau online.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM PENDAFTARAN */}
      <section id="daftar" className="w-full flex justify-center py-12 px-4 bg-transparent">
        <div className="w-full max-w-5xl">
          <h3 className="text-3xl font-bold text-lime-600 mb-2 text-center">Daftar Kelas Mengaji</h3>
          <p className="text-gray-900 font-medium text-lg text-center mb-6">
            Sertai kelas mengaji Al-Quran bersama guru bertauliah secara fizikal atau online.  
            Daftar sekarang untuk bimbingan yang mudah, santai dan berkesan untuk semua peringkat umur!
          </p>
          <form
            className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto p-6 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement & {
                nama: { value: string };
                email: { value: string };
                telefon: { value: string };
                lokasi: { value: string };
                negeri: { value: string };
                kelas: { value: string };
              };
              const nama = form.nama.value;
              const email = form.email.value;
              const telefon = form.telefon.value;
              const lokasi = form.lokasi.value;
              const negeri = form.negeri.value;
              const kelas = form.kelas.value;

              const message = `Assalamualaikum, saya ingin daftar kelas mengaji.\n\n` +
                `Nama: ${nama}\n` +
                `Email: ${email}\n` +
                `No Telefon: ${telefon}\n` +
                `Lokasi: ${lokasi}, ${negeri}\n` +
                `Kelas Pilihan: ${kelas}`;

              const whatsappURL = `https://wa.me/60194644577?text=${encodeURIComponent(message)}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            <div>
              <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2">Nama Penuh</label>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Nama Penuh"
                required
                className="w-full px-3 py-2 border-2 border-lime-300 rounded-lg focus:outline-none focus:border-lime-500 text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 border-2 border-lime-300 rounded-lg focus:outline-none focus:border-lime-500 text-base"
              />
            </div>
            <div>
              <label htmlFor="telefon" className="block text-gray-700 font-semibold mb-2">No Telefon</label>
              <input
                type="tel"
                name="telefon"
                id="telefon"
                placeholder="No Telefon"
                required
                className="w-full px-3 py-2 border-2 border-lime-300 rounded-lg focus:outline-none focus:border-lime-500 text-base"
              />
            </div>
            <div>
              <label htmlFor="lokasi" className="block text-gray-700 font-semibold mb-2">Bandar / Lokasi</label>
              <input
                type="text"
                name="lokasi"
                id="lokasi"
                placeholder="Contoh: Shah Alam"
                required
                className="w-full px-3 py-2 border-2 border-lime-300 rounded-lg focus:outline-none focus:border-lime-500 text-base"
              />
            </div>
            <div>
              <label htmlFor="negeri" className="block text-gray-700 font-semibold mb-2">Negeri</label>
              <select
                name="negeri"
                id="negeri"
                required
                className="w-full px-4 py-3 border-2 border-lime-300 rounded-lg bg-white text-black focus:outline-none focus:border-lime-500 text-base"
              >
                <option value="">Pilih Negeri</option>
                <option value="Perlis">Perlis</option>
                <option value="Kedah">Kedah</option>
                <option value="Pulau Pinang">Pulau Pinang</option>
                <option value="Perak">Perak</option>
                <option value="Selangor">Selangor</option>
                <option value="Negeri Sembilan">Negeri Sembilan</option>
                <option value="Melaka">Melaka</option>
                <option value="Johor">Johor</option>
                <option value="Kelantan">Kelantan</option>
                <option value="Terengganu">Terengganu</option>
                <option value="Pahang">Pahang</option>
                <option value="Wilayah Persekutuan Kuala Lumpur">Kuala Lumpur</option>
                <option value="Wilayah Persekutuan Putrajaya">Putrajaya</option>
              </select>
            </div>
            <div>
              <label htmlFor="kelas" className="block text-gray-700 font-semibold mb-2">Kelas Pilihan</label>
              <select
                name="kelas"
                id="kelas"
                required
                className="w-full px-4 py-3 border-2 border-lime-300 rounded-lg bg-white text-black focus:outline-none focus:border-lime-500 text-base"
              >
                <option value="">Pilih Kelas</option>
                <option value="Fizikal">Fizikal</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-lime-700 transition"
              >
                Hantar Pendaftaran
              </button>
            </div>
          </form>
        </div>
      </section>


      {/* FOOTER */}
      <footer id="hubungi" className="w-full flex justify-center items-center py-4 bg-transparent shadow-lg overflow-visible mt-10 mb-4">
        <div className="w-full max-w-5xl bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 py-2">
          <div className="text-gray-700 text-base mb-2 md:mb-0">
            © 2025 Kelas Mengaji Ariah
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/60194644577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-lime-500 text-lime-600 px-5 py-2 rounded-lg font-semibold hover:bg-lime-50 transition"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
            <span className="text-gray-400 text-sm hidden md:inline">|</span>
            <span className="text-gray-500 text-sm">Selangor & Kuala Lumpur</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
