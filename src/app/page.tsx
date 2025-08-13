// File: pages/index.js (Self-contained component)
// Komponen utama halaman Anda, dibuat mandiri untuk mengatasi error.

import React from 'react';

// Menambahkan tipe data untuk props komponen
interface ShapeProps {
  style?: React.CSSProperties;
  className?: string;
}

interface TriangleProps {
  style?: React.CSSProperties;
  colorClass?: string;
}


// Komponen untuk satu bentuk dekorasi agar kode lebih rapi
// Menambahkan tipe data pada props
const Shape: React.FC<ShapeProps> = ({style, className = ''}) => {
  return <div className={`shape ${className}`} style={style}></div>;
};

// Komponen untuk segitiga
// Menambahkan tipe data pada props
const Triangle: React.FC<TriangleProps> = ({style, colorClass = 'text-pink-300'}) => {
  const triangleStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
    borderBottom: '20px solid currentColor',
    backgroundColor: 'transparent',
    ...style,
  };
  return <div className={`shape ${colorClass}`} style={triangleStyle}></div>;
};


export default function Home() {
  // CSS yang sebelumnya ada di file terpisah, sekarang disematkan di sini
  // untuk menghilangkan error "Could not resolve"
  const embeddedStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

    /* Menggantikan styles/globals.css */
    body {
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    /* Menggantikan styles/ComingSoon.module.css */
    .shape {
        position: absolute;
        animation: float 6s ease-in-out infinite;
        opacity: 0.8;
    }

    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
        100% { transform: translateY(0px) rotate(0deg); }
    }
  `;

  return (
    <>
      {/* Menyematkan style langsung ke dalam komponen */}
      <style>{embeddedStyles}</style>

      {/* Menghilangkan komponen Head dari next/head */}
      <div className="bg-gradient-to-br from-sky-200 to-purple-200 overflow-hidden min-h-screen">
        {/* Kontainer untuk semua elemen */}
        <div className="relative w-full h-screen flex items-center justify-center p-4">

          {/* Dekorasi Bentuk-Bentuk Mengambang */}
          <Shape className="bg-white rounded-full w-24 h-10" style={{ top: '5%', left: '10%', animationDelay: '-1s' }} />
          <Shape className="bg-white rounded-full w-20 h-8" style={{ top: '10%', right: '15%', animationDelay: '-3s' }} />
          <Shape className="bg-pink-300 rounded-full w-6 h-6" style={{ top: '25%', left: '5%', animationDelay: '-2s' }} />
          <Shape className="bg-green-300 rounded-full w-4 h-4" style={{ top: '35%', left: '20%', animationDelay: '-4s' }} />
          <Shape className="bg-yellow-300 rounded-full w-5 h-5" style={{ top: '20%', right: '5%', animationDelay: '-1.5s' }} />
          <Shape className="bg-blue-300 rounded-full w-7 h-7" style={{ top: '55%', right: '10%' }} />
          <Shape className="bg-purple-300 rounded-full w-8 h-8" style={{ bottom: '10%', left: '45%', animationDelay: '-5s' }} />
          <Shape className="bg-orange-300 rounded-md w-6 h-6" style={{ top: '60%', right: '25%', animationDelay: '-2.5s' }} />
          <Shape className="bg-teal-300 rounded-md w-5 h-5" style={{ bottom: '15%', left: '10%', animationDelay: '-3.5s' }} />

          <Triangle colorClass="text-pink-300" style={{ bottom: '20%', left: '2%', animationDelay: '-0.5s' }} />
          <Triangle colorClass="text-green-300" style={{ top: '15%', right: '30%', animationDelay: '-4.5s', borderBottomWidth: '18px', borderLeftWidth: '10px', borderRightWidth: '10px' }} />
          <Triangle colorClass="text-blue-300" style={{ bottom: '5%', right: '40%', animationDelay: '-1.2s', borderBottomWidth: '25px', borderLeftWidth: '15px', borderRightWidth: '15px' }} />

          {/* Konten Utama di Tengah */}
          <main className="text-center z-10">

            <h1 className="text-4xl sm:text-5xl font-bold text-teal-500/90" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
              Something exciting is coming your way!
            </h1>

            <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-indigo-600/90">
              We'll be launching soon! 🚀
            </h2>

            <div className="mt-8 bg-white/60 backdrop-blur-sm p-6 rounded-2xl max-w-lg mx-auto shadow-lg">
              <p className="text-slate-700 text-base sm:text-lg">
                Sekolah usia dini yang penuh kegembiraan sedang dalam persiapan! Tempat di mana si kecil akan belajar sambil bermain dengan cara yang menyenangkan! 🌈
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
