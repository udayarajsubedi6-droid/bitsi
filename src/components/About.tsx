import { Target, Users, Award, Rocket, Globe, Heart, Lightbulb, TrendingUp, Shield, CheckCircle } from 'lucide-react';

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
    description: 'To deliver innovative IT solutions and investment opportunities that drive sustainable growth and success for our clients across the globe.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Building lasting relationships through transparency, reliability, and exceptional service delivery that exceeds expectations.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to maintaining the highest standards of quality in every project we undertake, ensuring superior outcomes.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Staying ahead of technology trends to provide cutting-edge solutions that give you a competitive edge in your industry.'
  }
];

const achievements = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Operating in 15+ countries with dedicated teams across continents',
    stats: '15+ Countries'
  },
  {
    icon: Shield,
    title: 'Industry Certifications',
    description: 'ISO 27001, SOC 2 Type II, and industry-leading security certifications',
    stats: '10+ Certifications'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: 'Consistent 40% year-over-year growth for the past 5 years',
    stats: '40% YoY Growth'
  },
  {
    icon: Heart,
    title: 'Client Satisfaction',
    description: '98% client retention rate with exceptional satisfaction scores',
    stats: '98% Retention'
  }
];

const expertise = [
  {
    category: 'Technology Stack',
    items: ['Cloud Computing (AWS, Azure, GCP)', 'AI & Machine Learning', 'Blockchain & Web3', 'DevOps & CI/CD', 'Microservices Architecture', 'IoT Solutions']
  },
  {
    category: 'Industries Served',
    items: ['Healthcare & Life Sciences', 'Financial Services', 'E-commerce & Retail', 'Education Technology', 'Manufacturing & Logistics', 'Energy & Utilities']
  },
  {
    category: 'Investment Focus',
    items: ['Technology Startups', 'Real Estate Ventures', 'Sustainable Energy', 'Healthcare Innovation', 'Financial Technology', 'Digital Transformation']
  }
];

const timeline = [
  {
    year: '2009',
    title: 'Foundation',
    description: 'BITSI was founded with a vision to bridge technology and business needs.'
  },
  {
    year: '2012',
    title: 'Expansion',
    description: 'BITSI was founded with a vision to bridge technology and business needs.'
  },
  {
    year: '2016',
    title: 'Investment Division',
    description: 'BITSI was founded with a vision to bridge technology and business needs.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: '.'
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as a top IT services and investment firm globally.'
  }
];

export default function About() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-green-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About BITSI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bhagawati IT Services and Investment Private Limited - Your trusted partner in digital transformation and strategic investments
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              BITSI is a leading IT services and investment company dedicated to helping businesses thrive in the digital age.
              Founded in 2009, we have grown from a small startup to a global enterprise serving clients across 15+ countries.
              With a team of over 50 seasoned professionals and a track record of 500+ successful implementations, we combine technical
              expertise with strategic insight to deliver solutions that matter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From startups to Fortune 500 enterprises, we partner with organizations across diverse industries to modernize their operations,
              enhance their digital capabilities, and unlock new opportunities for growth and innovation. Our holistic approach encompasses
              everything from cloud infrastructure to custom software development, data analytics, cybersecurity, and strategic investment advisory.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What sets us apart is our commitment to long-term partnerships. We don't just deliver projects; we become an extension of your team,
              understanding your business challenges and working collaboratively to achieve your goals. Our 98% client retention rate speaks volumes
              about the quality of our work and the relationships we build.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make and every solution we deliver</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Milestones that demonstrate our commitment to excellence and growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-green-600" size={32} />
                    <span className="text-2xl font-bold text-green-600">{achievement.stats}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Deep domain knowledge across technologies, industries, and investment sectors</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Lightbulb className="text-white" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{area.category}</h4>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">A timeline of growth, innovation, and excellence</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-emerald-500 hidden lg:block"></div>
            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition">
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">{milestone.year}</span>
                      <h4 className="text-xl font-bold text-gray-900 mt-2 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center z-10 flex-shrink-0 border-4 border-white shadow-lg">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
