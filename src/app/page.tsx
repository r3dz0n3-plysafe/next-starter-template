// File: pages/index.js (Self-contained component)
// Ornamen dan detail didesain ulang agar persis seperti gambar referensi.

import React from 'react';

// Menambahkan tipe data untuk props komponen
interface ShapeProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

// Komponen untuk satu bentuk dekorasi
const Shape: React.FC<ShapeProps> = ({ style, className = '', children }) => {
    return <div className={`shape ${className}`} style={style}>{children}</div>;
};


export default function ComingSoonPage() {
  // CSS disematkan dengan palet warna dan font yang benar
  const embeddedStyles = `
    /* Mengimpor font Fredoka dan Lexend Exa dari Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=Lexend+Exa:wght@400;600&display=swap');

    body {
      /* Menggunakan Lexend Exa sebagai font dasar */
      font-family: 'Lexend Exa', sans-serif;
    }

    /* Kelas utilitas untuk font Fredoka */
    .font-fredoka {
      font-family: 'Fredoka', sans-serif;
    }

    .shape {
        position: absolute;
        animation: float 8s ease-in-out infinite;
    }

    /* Animasi mengambang yang lebih lembut */
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(5deg); }
        100% { transform: translateY(0px) rotate(0deg); }
    }
  `;

  return (
    <>
      <style>{embeddedStyles}</style>
      
      {/* Warna latar belakang diterapkan langsung di sini */}
      <div className="overflow-hidden min-h-screen" style={{ backgroundColor: '#feedd1' }}>
        {/* Kontainer untuk semua elemen */}
        <div className="relative w-full h-screen flex items-center justify-center p-4">

          {/* Dekorasi Bentuk-Bentuk Mengambang sesuai gambar baru */}
          
          {/* Bentuk Abstrak di Kiri Atas */}
          <Shape style={{ top: '8%', left: '15%', animationDelay: '-2s', color: '#F3D9C3' }}>
            <svg width="120" height="70" viewBox="0 0 137 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 81.5C-16.5 68.5 23.5 11 68 5.5C112.5 0 137.5 24 125.5 51.5C113.5 79 39.5 94.5 11.5 81.5Z" fill="currentColor"/>
            </svg>
          </Shape>
          
          {/* Daun di Kanan Atas */}
          <Shape style={{ top: '12%', right: '20%', animationDelay: '-4s', color: '#adb778' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(20)">
              <path d="M100 0C80 40 40 80 0 100C30 70 70 30 100 0Z" fill="currentColor"/>
            </svg>
          </Shape>

          {/* Bunga di Kanan Tengah */}
           <Shape style={{ top: '38%', right: '18%', animationDelay: '-1s', color: '#EBC2B6' }}>
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(0 50 50)"/>
              <ellipse cx="50" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(72 50 50)"/>
              <ellipse cx="50" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(144 50 50)"/>
              <ellipse cx="50" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(216 50 50)"/>
              <ellipse cx="50" cy="30" rx="12" ry="20" fill="currentColor" transform="rotate(288 50 50)"/>
            </svg>
           </Shape>

          {/* Lingkaran kecil di kiri tengah */}
          <Shape className="rounded-full opacity-90" style={{ top: '35%', left: '10%', width: '28px', height: '28px', backgroundColor: '#F3D9C3', animationDelay: '-5s' }} />

          {/* Daun kecil di kiri bawah */}
          <Shape style={{ top: '55%', left: '18%', animationDelay: '-3s', color: '#adb778' }}>
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scaleX(-1) rotate(60)">
                <path d="M100 0C80 40 40 80 0 100C30 70 70 30 100 0Z" fill="currentColor"/>
            </svg>
          </Shape>
          
           {/* Lingkaran kecil di kanan bawah */}
          <Shape className="rounded-full opacity-90" style={{ bottom: '20%', right: '12%', width: '28px', height: '28px', backgroundColor: '#F3D9C3' }} />


          {/* Konten Utama di Tengah */}
          <main className="text-center z-10 max-w-md">
              
              {/* Judul dengan warna teks hijau yang telah disesuaikan */}
              <h1 className="font-fredoka text-5xl sm:text-6xl font-bold leading-tight" style={{ color: '#5d7b4f' }}>
                  Something exciting is coming your way!
              </h1>
              
              <h2 className="font-fredoka mt-4 text-2xl sm:text-3xl font-medium" style={{ color: '#502F41', opacity: 0.9 }}>
                  We&apos;ll be launching soon!
              </h2>
              <div className="text-4xl mt-2">🚀</div>
              
              {/* Kotak teks disesuaikan dengan warna #fff0d9 */}
              <div className="mt-4 p-6 rounded-3xl shadow-lg" style={{ backgroundColor: '#fff0d9' }}>
                  {/* Teks deskripsi menggunakan font dasar (Lexend Exa) */}
                  <p className="text-base sm:text-lg" style={{ color: '#502F41' }}>
                      Sekolah usia dini yang penuh kegembiraan sedang dalam persiapan! Tempat di mana si kecil akan belajar sambil bermain dengan cara yang menyenangkan!
                  </p>
                  <div className="mt-4 text-3xl space-x-4">
                      <span>🎨</span>
                      <span>📚</span>
                      <span>🎵</span>
                      <span>🌟</span>
                  </div>
              </div>

          </main>
        </div>
      </div>
    </>
  );
}

