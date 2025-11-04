import { ArrowRight, Code, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Your Digital Future
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge IT solutions and strategic investment opportunities from BITSI.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Code className="text-blue-600" size={32} />
                </div>
                <p className="text-sm text-gray-600 font-medium">IT Solutions</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="text-blue-600" size={32} />
                </div>
                <p className="text-sm text-gray-600 font-medium">Investment</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <p className="text-sm text-gray-600 font-medium">Secure & Trusted</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation Driven</h3>
                  <p className="text-gray-600 text-sm">Leveraging latest technologies to deliver exceptional results</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Focused</h3>
                  <p className="text-gray-600 text-sm">Tailored solutions that align with your business goals</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Results Oriented</h3>
                  <p className="text-gray-600 text-sm">Measurable outcomes that drive growth and success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
