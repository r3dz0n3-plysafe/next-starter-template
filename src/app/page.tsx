// app/page.tsx
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-sky-200 to-purple-200 overflow-hidden min-h-screen font-poppins">
      <div className="relative w-full h-screen flex items-center justify-center p-4">
        {/* Dekorasi Bentuk-Bentuk Mengambang */}
        <div className="shape bg-white rounded-full w-24 h-10 top-[5%] left-[10%] -delay-1000" />
        <div className="shape bg-white rounded-full w-20 h-8 top-[10%] right-[15%] -delay-3000" />
        <div className="shape bg-pink-300 rounded-full w-6 h-6 top-[25%] left-[5%] -delay-2000" />
        <div className="shape bg-green-300 rounded-full w-4 h-4 top-[35%] left-[20%] -delay-4000" />
        <div className="shape bg-yellow-300 rounded-full w-5 h-5 top-[20%] right-[5%] -delay-1500" />
        <div className="shape bg-blue-300 rounded-full w-7 h-7 top-[55%] right-[10%]" />
        <div className="shape bg-purple-300 rounded-full w-8 h-8 bottom-[10%] left-[45%] -delay-5000" />
        <div className="shape bg-orange-300 rounded-md w-6 h-6 top-[60%] right-[25%] -delay-2500" />
        <div className="shape bg-teal-300 rounded-md w-5 h-5 bottom-[15%] left-[10%] -delay-3500" />

        {/* Segitiga */}
        <div
          className="shape text-pink-300"
          style={{
            bottom: "20%",
            left: "2%",
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderBottom: "20px solid currentColor",
            backgroundColor: "transparent",
          }}
        />
        <div
          className="shape text-green-300"
          style={{
            top: "15%",
            right: "30%",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "18px solid currentColor",
            backgroundColor: "transparent",
          }}
        />
        <div
          className="shape text-blue-300"
          style={{
            bottom: "5%",
            right: "40%",
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderBottom: "25px solid currentColor",
            backgroundColor: "transparent",
          }}
        />

        {/* Konten Utama */}
        <main className="text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-500/90 drop-shadow-sm">
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
  );
}
