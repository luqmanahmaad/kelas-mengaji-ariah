import React, { useState } from "react";
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
            <a href="#soalan" className="text-gray-700 hover:text-lime-600 font-semibold text-base transition">Soalan Lazim</a>
          </div>
          {/* Desktop Button */}
          <div className="flex-shrink-0 hidden md:block">
            <a
              href="#daftar"
              className="border border-lime-500 text-lime-600 px-6 py-2 rounded-lg font-semibold text-base hover:bg-lime-50 transition"
            >
              Daftar Percuma
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
                  href="#soalan"
                  className="py-2 text-base font-medium text-gray-700 hover:text-lime-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Soalan Lazim
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
      <section id="daftar" className="w-full flex justify-center py-16 px-4 bg-transparent">
        <div className="w-full max-w-5xl">
          <h3 className="text-2xl font-semibold text-lime-600 mb-4 text-center">Daftar Percuma</h3>
          <form
            className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto p-8 flex flex-col gap-4"
            onSubmit={e => { e.preventDefault(); window.open("https://wa.me/60194644577", "_blank"); }}
          >
            <input type="text" placeholder="Nama Penuh" required className="w-full p-3 border rounded bg-white text-black border-gray-300" />
            <input type="text" placeholder="Umur" required className="w-full p-3 border rounded bg-white text-black border-gray-300" />
            <input type="text" placeholder="No. Telefon" required className="w-full p-3 border rounded bg-white text-black border-gray-300" />
            <select required className="w-full p-3 border rounded bg-white text-black border-gray-300">
              <option value="">Pilih Kelas</option>
              <option value="Kanak-kanak">Kanak-kanak</option>
              <option value="Dewasa">Dewasa</option>
            </select>
            <button
              type="submit"
              className="block text-center bg-lime-600 text-white w-full py-3 rounded-lg font-bold text-lg hover:bg-lime-700 transition"
            >
              Hantar Pendaftaran
            </button>
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
