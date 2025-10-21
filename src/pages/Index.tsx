import { Heart, Calendar, Clock, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f472b6" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        <main className="container mx-auto">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center text-center px-4 relative">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary/20 animate-pulse" fill="currentColor" />
                </div>
                <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary animate-heartbeat relative z-10" fill="currentColor" />
              </div>
              <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-4 animate-text-reveal bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                Walima Reception
              </h1>
              <p className="font-playfair text-xl md:text-3xl text-muted-foreground mb-6 animate-slide-up-delayed">
                A Celebration of Love
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-foreground animate-fade-in-delayed">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-glow">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="font-sans text-sm md:text-base">Saturday, 25th October 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Invitation Card Section */}
          <section className="py-16 px-4 relative overflow-hidden">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/15 animate-float-heart-${(i % 3) + 1}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${15 + Math.random() * 20}px`,
                    height: `${15 + Math.random() * 20}px`,
                    animationDelay: `${Math.random() * 10}s`
                  }}
                  fill="currentColor"
                />
              ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-3xl md:text-5xl text-foreground mb-2">Walima</h2>
                  <p className="text-muted-foreground text-lg italic mb-4">"In the name of Allah, the most Beneficent & Merciful & blessings of Rasule Karim(S.A.W.S.)"</p>
                  <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
                </div>

                {/* Parents Names */}
                <div className="text-center mb-8">
                  <p className="text-muted-foreground text-base md:text-lg mb-4">Mrs. & Mr. Arif Rashid Sayyad</p>
                  <p className="text-muted-foreground text-base mb-6">Request the pleasure of your company to attend the marriage walima of their Son & Daughter-in-law</p>
                </div>

                {/* Couple Names */}
                <div className="text-center mb-8">
                  <div className="bg-card/50 rounded-2xl p-6 border border-primary/20">
                    <p className="text-muted-foreground mb-3 text-base md:text-lg">Grandson of Mrs. & Late Mr. Rashid Husein Sayyad & Late Haji Mrs. & Mr. Sardarmiya Balabal Mulla</p>
                    <h2 className="font-playfair text-4xl md:text-6xl text-foreground mb-4 animate-pulse">Aman</h2>
                    <div className="flex items-center justify-center mb-4">
                      <div className="border border-primary/30 rounded-full p-2">
                        <span className="text-primary font-bold text-lg">WITH</span>
                      </div>
                    </div>
                    <h2 className="font-playfair text-4xl md:text-6xl text-foreground mb-4 animate-pulse" style={{animationDelay: '1s'}}>Wajia</h2>
                    <p className="text-muted-foreground text-base md:text-lg">(D/o Late Mrs. & Mr. Jafanagir Shoukat Jamadar of Kawate Mahanandi)</p>
                  </div>
                </div>

                {/* Walima Details */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                    <p className="text-foreground text-lg mb-2">◊ Welcome You ◊</p>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-2xl">🕌</span>
                      <div>
                        <p className="text-foreground font-bold text-xl">Insha Allah</p>
                        <p className="text-muted-foreground">दावत-ए-वलीमा</p>
                      </div>
                      <span className="text-2xl">🕌</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <p className="text-foreground text-lg md:text-xl">On Saturday, 25th October 2025</p>
                    </div>
                    <p className="text-muted-foreground text-base">(12th Rabi-ul-Sani 1447 Hijri)</p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <p className="text-foreground text-lg md:text-xl">From 07:00pm to 10:00pm</p>
                    </div>
                  </div>
                </div>

                {/* Venue */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">◊ Venue ◊</h3>
                  <div className="flex items-start justify-center gap-1">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-foreground text-center">
                      <p className="text-base md:text-lg font-semibold">At SMT Hall</p>
                      <p className="text-base md:text-lg">P. Abdullah Hulloli Chowk</p>
                      <p className="text-base md:text-lg">Lowell Circle, 100 Footi Road, Near</p>
                      <p className="text-base md:text-lg">Anandgiri, Abhimanagiri, Sangli.</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <a href="https://maps.google.com/?q=SMT+Hall+Abdullah+Hulloli+Chowk+Sangli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Special Message */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20">
                    <p className="text-foreground text-base italic">Our Beloved Kids Join Us In Inviting You.</p>
                    <p className="text-muted-foreground text-sm mt-2">Rayan, Riza, Alayua, Adan, Farhan, Hasnain, Bilal, Hamza</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20">
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    <div className="text-center">
                      <p className="text-muted-foreground italic text-base">◊ With Best Compliments From ◊</p>
                      <p className="font-playfair text-xl text-foreground">Mr. Mansur Rashid Sayyad &nbsp;&nbsp;&nbsp;&nbsp; Mr. Ishak Sardarmiya Mulla</p>
                      <p className="font-playfair text-xl text-foreground">Mr. Aslam Abdullatif Mulla &nbsp;&nbsp;&nbsp;&nbsp; Mr. Asfar Ishak Rajab Mulla</p>
                      <p className="text-muted-foreground text-base mt-2">Sayyad & Mulla Family, Relatives & Friends</p>
                    </div>
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;