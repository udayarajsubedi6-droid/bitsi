import { Target, Users, Award, Rocket } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Expert Team' },
  { number: '15+', label: 'Years Experience' }
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To deliver innovative IT solutions and investment opportunities that drive sustainable growth and success for our clients.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Building lasting relationships through transparency, reliability, and exceptional service delivery.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to maintaining the highest standards of quality in every project we undertake.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Staying ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.'
  }
];

export default function About() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About BITSI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bhagawati IT Services and Investment Private Limited - Your trusted partner in digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Who We Are</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              BITSI is a leading IT services and investment company dedicated to helping businesses thrive in the digital age.
              With a team of seasoned professionals and a track record of successful implementations, we combine technical
              expertise with strategic insight to deliver solutions that matter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From startups to enterprises, we partner with organizations across industries to modernize their operations,
              enhance their digital capabilities, and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
