import { ArrowRight, Code, TrendingUp, Shield, CheckCircle, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (page: 'contact') => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
      `}</style>

      <section id="home" className="pt-24 pb-32 bg-gradient-to-b from-slate-50 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            <div className="space-y-8">
              <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-blue-600">Welcome to BITSI</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Empowering Your
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Digital Future</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your business with cutting-edge IT solutions and strategic investment opportunities. We deliver innovation that drives growth and creates lasting impact.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in-up delay-2' : 'opacity-0'}`}>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
              </div>

              <div className={`grid grid-cols-3 gap-4 pt-8 ${isVisible ? 'animate-fade-in-up delay-3' : 'opacity-0'}`}>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <Code className="text-blue-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center">IT Solutions</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <TrendingUp className="text-blue-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center">Investment</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <Shield className="text-blue-600" size={28} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium text-center">Secure & Trusted</p>
                </div>
              </div>
            </div>

            <div className={`relative hidden md:block ${isVisible ? 'animate-slide-in-right delay-4' : 'opacity-0'}`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-25 transition duration-1000 animate-pulse-slow"></div>

              <div className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/80">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>

                <div className="relative space-y-6">
                  <div className="group bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Innovation Driven</h3>
                        <p className="text-gray-600 text-sm">Leveraging latest technologies to deliver exceptional results</p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Client Focused</h3>
                        <p className="text-gray-600 text-sm">Tailored solutions that align with your business goals</p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Results Oriented</h3>
                        <p className="text-gray-600 text-sm">Measurable outcomes that drive growth and success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container mx-auto px-6 mt-20 ${isVisible ? 'animate-fade-in-up delay-5' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">500+</div>
                <p className="text-gray-600 font-medium">Projects Delivered</p>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">200+</div>
                <p className="text-gray-600 font-medium">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">15+</div>
                <p className="text-gray-600 font-medium">Years Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
