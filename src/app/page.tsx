// app/page.tsx
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-sky-200 to-purple-200 overflow-hidden min-h-screen font-poppins">
      <div className="relative w-full h-screen flex items-center justify-center p-4">
        {/* Dekorasi Bentuk-Bentuk Mengambang */}
        <div className="shape bg-white rounded-full w-24 h-10" style={{ top: "5%", left: "10%", animationDelay: "-1s" }} />
        <div className="shape bg-white rounded-full w-20 h-8" style={{ top: "10%", right: "15%", animationDelay: "-3s" }} />
        <div className="shape bg-pink-300 rounded-full w-6 h-6" style={{ top: "25%", left: "5%", animationDelay: "-2s" }} />
        <div className="shape bg-green-300 rounded-full w-4 h-4" style={{ top: "35%", left: "20%", animationDelay: "-4s" }} />
        <div className="shape bg-yellow-300 rounded-full w-5 h-5" style={{ top: "20%", right: "5%", animationDelay: "-1.5s" }} />
        <div className="shape bg-blue-300 rounded-full w-7 h-7" style={{ top: "55%", right: "10%" }} />
        <div className="shape bg-purple-300 rounded-full w-8 h-8" style={{ bottom: "10%", left: "45%", animationDelay: "-5s" }} />
        <div className="shape bg-orange-300 rounded-md w-6 h-6" style={{ top: "60%", right: "25%", animationDelay: "-2.5s" }} />
        <div className="shape bg-teal-300 rounded-md w-5 h-5" style={{ bottom: "15%", left: "10%", animationDelay: "-3.5s" }} />
        <div
          className="shape bg-pink-300"
          style={{
            bottom: "20%",
            left: "2%",
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderBottom: "20px solid currentColor",
            backgroundColor: "transparent",
            animationDelay: "-0.5s",
          }}
        />
        <div
          className="shape bg-green-300"
          style={{
            top: "15%",
            right: "30%",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "18px solid currentColor",
            backgroundColor: "transparent",
            animationDelay: "-4.5s",
          }}
        />
        <div
          className="shape bg-blue-300"
          style={{
            bottom: "5%",
            right: "40%",
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderBottom: "25px solid currentColor",
            backgroundColor: "transparent",
            animationDelay: "-1.2s",
          }}
        />

        {/* Konten Utama */}
        <main className="text-center z-10">
          <h1
            className="text-4xl sm:text-5xl font-bold text-teal-500/90"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
          >
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

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .shape {
          position: absolute;
          animation: float 6s ease-in-out infinite;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
