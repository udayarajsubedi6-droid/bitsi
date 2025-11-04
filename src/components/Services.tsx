import {
  Cloud,
  Smartphone,
  Database,
  Lock,
  LineChart,
  Briefcase,
  Globe,
  Cpu,
  Zap
} from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for seamless digital transformation.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Custom mobile applications for iOS and Android that engage users and drive results.',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Robust data solutions including storage, analytics, and business intelligence.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business from digital threats.',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with latest technologies.',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    icon: LineChart,
    title: 'Digital Strategy',
    description: 'Strategic consulting to optimize your digital presence and operations.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Briefcase,
    title: 'Investment Services',
    description: 'Strategic investment opportunities and portfolio management solutions.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation and AI-powered solutions to streamline your business.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'IT Consulting',
    description: 'Expert guidance on technology infrastructure and digital transformation.',
    color: 'from-blue-500 to-indigo-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions and investment services tailored to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
