import { Heart, Calendar, Clock, MapPin, Sparkles, Music } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingHeart = ({ delay, duration, size, color }: { delay: number; duration: number; size: number; color: string }) => {
  const [position, setPosition] = useState({ 
    x: Math.random() * 100, 
    y: 110
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({ 
        x: Math.random() * 100, 
        y: 110
      });
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <Heart
      className={`absolute ${color} animate-[floatUp_${duration}s_linear_infinite]`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 2px 8px rgba(244,114,182,0.5))',
        zIndex: 25
      }}
      fill="currentColor"
    />
  );
};

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loader completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const startMusic = () => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch(() => {
        console.log('Audio play failed');
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 via-pink-100 via-fuchsia-50 to-purple-100 relative overflow-hidden animate-[gradientShift_8s_ease-in-out_infinite]">
      {/* Loader Screen */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url('/assets/wedding-hero.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/60 via-rose-900/50 to-purple-900/60" />
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <Heart className="w-20 h-20 mx-auto text-pink-300 animate-pulse mb-8" fill="currentColor" />
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Aman's Reception
            </h1>
            <p className="font-playfair text-2xl md:text-3xl text-white/90 drop-shadow-lg animate-pulse">
              A Celebration of Love
            </p>
          </div>
        </div>
      )}
      {/* Background Music */}
      <audio
        id="background-music"
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/audio/wedding-song.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Music Play Button */}
      {showPlayButton && (
        <button
          onClick={startMusic}
          className="fixed top-4 right-4 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Play wedding music"
        >
          <Music className="w-5 h-5" />
        </button>
      )}

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(244,114,182,0.15),transparent_50%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)] animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f472b6%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      </div>
      
      {/* Main Content */}
      {!showLoader && (
        <>
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(15)].map((_, i) => {
          const colors = [
            'text-pink-400/60',
            'text-rose-400/50', 
            'text-fuchsia-400/60',
            'text-pink-500/40',
            'text-rose-500/50',
            'text-purple-400/40'
          ];
          return (
            <FloatingHeart
              key={i}
              delay={i * 1.2}
              duration={10 + Math.random() * 6}
              size={12 + Math.random() * 20}
              color={colors[i % colors.length]}
            />
          );
        })}
      </div>
      
      <div className="relative z-10 min-h-screen py-4 flex items-center justify-center">
        <main className="container mx-auto px-2 max-w-4xl w-full">
          <div className="bg-gradient-to-br from-white/95 via-pink-50/95 via-rose-50/95 to-fuchsia-50/95 backdrop-blur-xl border border-pink-200 rounded-2xl p-3 md:p-6 shadow-[0_25px_50px_-12px_rgba(244,114,182,0.4)] relative overflow-hidden animate-[cardGlow_6s_ease-in-out_infinite] max-h-[95vh] overflow-y-auto">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-8 h-8 border border-pink-300/40 rounded-full animate-[spin_20s_linear_infinite] shadow-lg shadow-pink-200/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border border-fuchsia-300/35 rounded-full animate-[spin_15s_linear_infinite_reverse] shadow-lg shadow-fuchsia-200/50" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border border-rose-300/30 rounded-full animate-[spin_25s_linear_infinite] shadow-lg shadow-rose-200/50" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border border-pink-400/35 rounded-full animate-[spin_18s_linear_infinite_reverse] shadow-lg shadow-pink-200/50" />
              {/* Additional floating elements */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full animate-[float_8s_ease-in-out_infinite]" />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-fuchsia-300/25 to-pink-300/25 rounded-full animate-[float_6s_ease-in-out_infinite_2s]" />
            </div>
            
            {/* Header */}
            <div className="text-center mb-4 relative z-10">
              <div className="relative mb-4">
                <Heart className="w-8 h-8 mx-auto text-rose-500 animate-[heartbeat_2s_ease-in-out_infinite]" fill="currentColor" />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-[twinkle_2s_ease-in-out_infinite]" />
              </div>
              <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-600 via-fuchsia-600 to-purple-600 bg-clip-text text-transparent animate-[shimmer_4s_ease-in-out_infinite] bg-[length:300%_100%]">
                Reception
              </h1>
              <p className="text-gray-600 text-xs md:text-sm italic mb-3 leading-relaxed">
                "In the name of Allah, the most Beneficent & Merciful & blessings of Rasule Karim(S.A.W.S.)"
              </p>
            </div>

            {/* Parents Names */}
            <div className="text-center mb-3 relative z-10">
              <p className="text-gray-800 text-sm md:text-base mb-2 font-medium">Mrs. & Mr. Arif Rashid Sayyad</p>
              <p className="text-gray-700 text-xs md:text-sm mb-3 leading-relaxed">
                Request the pleasure of your company to attend the marriage walima of their Son & Daughter-in-law
              </p>
            </div>

            {/* Couple Names */}
            <div className="text-center mb-4 relative z-10">
              <div className="bg-gradient-to-br from-rose-100/80 to-pink-100/80 backdrop-blur-sm rounded-2xl p-4 border border-rose-200 shadow-inner">
                <p className="text-gray-700 mb-3 text-xs md:text-sm leading-relaxed">
                  Grandson of Mrs. & Late Mr. Rashid Husein Sayyad & Late Haji Mrs. & Mr. Sardarmiya Babalal Mulla
                </p>
                <h2 className="font-playfair text-2xl md:text-4xl text-rose-700 mb-3 tracking-wide">
                  Aman
                </h2>
                <div className="flex items-center justify-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-500"></div>
                    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-full px-2 py-1 shadow-lg animate-[pulse_2s_ease-in-out_infinite]">
                      <span className="text-white font-bold text-xs tracking-wider">WITH</span>
                    </div>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-500"></div>
                  </div>
                </div>
                <h2 className="font-playfair text-2xl md:text-4xl text-rose-700 mb-2 tracking-wide">
                  Afroja
                </h2>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  (D/o Late Mrs. & Mr. jahangir Shoukat Jamadar)
                </p>
              </div>
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-3 mb-4 relative z-10">
              {/* Date & Time */}
              <div className="bg-gradient-to-br from-rose-200/60 to-pink-200/60 backdrop-blur-sm rounded-xl p-3 border border-rose-300">
                <div className="flex items-center justify-center gap-6 mb-3">
                  <span className="text-xl">🕌</span>
                  <div className="text-center">
                    <p className="text-gray-800 font-bold text-sm">Insha Allah</p>
                    <p className="text-gray-700 text-xs">दावत-ए-वलीमा</p>
                  </div>
                  <span className="text-xl">🕌</span>
                </div>
                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-rose-600" />
                    <p className="text-gray-800 text-xs md:text-sm font-medium">Saturday, 25th October 2025</p>
                  </div>
                  <p className="text-gray-700 text-xs">(12th Rabi-ul-Sani 1447 Hijri)</p>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-rose-600" />
                    <p className="text-gray-800 text-xs md:text-sm font-medium">07:00 PM to 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div className="bg-gradient-to-br from-rose-100/70 to-pink-100/70 backdrop-blur-sm rounded-xl p-3 border border-rose-200">
                <h3 className="font-playfair text-sm md:text-base text-rose-700 mb-2 text-center tracking-wide">◊ Venue ◊</h3>
                <div className="text-center mb-3">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <p className="text-sm md:text-base font-semibold text-gray-800">SMJ Hall</p>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    P. Ahilyadevi Holkar Chowk<br/>
                    Lovely Circle, 100 ft Road<br/>
                    Near Anandpark, Abhaynagar, Sangli
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <a 
                    href="https://maps.google.com/?q=16.864556,74.591333" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-full text-xs font-medium hover:from-rose-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <MapPin className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Special Message */}
            <div className="text-center mb-4 relative z-10">
              <div className="bg-gradient-to-r from-rose-100/60 to-pink-100/60 backdrop-blur-sm rounded-xl p-3 border border-rose-200">
                <p className="text-rose-800 text-sm italic mb-2 font-medium">Our Beloved Kids Join Us In Inviting You</p>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Rayan, Riza, Alayua, Adan, Farhan, Hasnain, Bilal, Hamza
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center relative z-10">
              <div className="bg-gradient-to-r from-rose-100/80 via-pink-100/80 to-purple-100/80 backdrop-blur-md rounded-2xl p-4 border border-rose-200 shadow-xl">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Heart className="w-4 h-4 text-rose-600 animate-[heartbeat_2s_ease-in-out_infinite]" fill="currentColor" />
                  <p className="text-rose-800 italic text-sm font-medium tracking-wide">◊ Welcome You ◊</p>
                  <Heart className="w-4 h-4 text-rose-600 animate-[heartbeat_2s_ease-in-out_infinite_1s]" fill="currentColor" />
                </div>
                <p className="text-gray-800 text-xs leading-relaxed">
                  Sayyad & Mulla Family, Relatives & Friends
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
        </>
      )}
    </div>
  );
};

export default Index;