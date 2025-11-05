import { Cloud, Code, Database, LineChart, Lock, Smartphone, X, Mail, Phone, MapPin, Calendar, Clock, User } from 'lucide-react';
import { useState } from 'react';

interface Service {
  icon: typeof Cloud;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

const services: Service[] = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure tailored to your business needs',
    fullDescription: 'Our cloud solutions provide enterprise-grade infrastructure that scales with your business. We offer comprehensive cloud migration, management, and optimization services across all major platforms including AWS, Azure, and Google Cloud.',
    features: [
      'Cloud migration and deployment',
      'Infrastructure as Code (IaC)',
      'Auto-scaling and load balancing',
      'Cloud security and compliance',
      '24/7 monitoring and support',
      'Cost optimization strategies'
    ],
    contact: {
      email: 'cloud@bitsi.com',
      phone: '+1 (555) 123-4567',
      location: 'Cloud Services Division'
    }
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Bespoke software solutions built with cutting-edge technologies',
    fullDescription: 'Transform your ideas into reality with our custom development services. Our experienced team builds scalable, maintainable applications using modern frameworks and best practices.',
    features: [
      'Full-stack web development',
      'API design and integration',
      'Microservices architecture',
      'Agile development methodology',
      'Quality assurance and testing',
      'Ongoing maintenance and support'
    ],
    contact: {
      email: 'development@bitsi.com',
      phone: '+1 (555) 234-5678',
      location: 'Development Center'
    }
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data analytics and management solutions',
    fullDescription: 'Unlock the power of your data with our comprehensive data management solutions. We help you collect, store, analyze, and visualize data to drive informed business decisions.',
    features: [
      'Database design and optimization',
      'Big data processing and analytics',
      'Business intelligence dashboards',
      'Data warehousing solutions',
      'Real-time data pipelines',
      'Data governance and security'
    ],
    contact: {
      email: 'data@bitsi.com',
      phone: '+1 (555) 345-6789',
      location: 'Data Analytics Department'
    }
  },
  {
    icon: LineChart,
    title: 'Investment Services',
    description: 'Strategic investment opportunities and portfolio management',
    fullDescription: 'Grow your wealth with our expert investment advisory services. We provide personalized investment strategies aligned with your financial goals and risk tolerance.',
    features: [
      'Portfolio management and diversification',
      'Risk assessment and mitigation',
      'Market research and analysis',
      'Investment strategy consultation',
      'Retirement planning services',
      'Regular performance reporting'
    ],
    contact: {
      email: 'invest@bitsi.com',
      phone: '+1 (555) 456-7890',
      location: 'Investment Advisory Division'
    }
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets',
    fullDescription: 'Protect your business from cyber threats with our comprehensive security solutions. We provide end-to-end security services from assessment to implementation and monitoring.',
    features: [
      'Security audits and assessments',
      'Penetration testing and vulnerability scanning',
      'Security incident response',
      'Compliance management (GDPR, HIPAA, SOC2)',
      'Security awareness training',
      'Managed security services'
    ],
    contact: {
      email: 'security@bitsi.com',
      phone: '+1 (555) 567-8901',
      location: 'Cybersecurity Operations Center'
    }
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    fullDescription: 'Reach your customers on the go with our mobile app development services. We create engaging, high-performance mobile applications for iOS and Android platforms.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions (React Native, Flutter)',
      'UI/UX design and prototyping',
      'App store optimization',
      'Push notifications and analytics',
      'Continuous updates and maintenance'
    ],
    contact: {
      email: 'mobile@bitsi.com',
      phone: '+1 (555) 678-9012',
      location: 'Mobile Development Studio'
    }
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    message: ''
  });

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Meeting scheduled successfully for ${formData.date} at ${formData.time}. We'll send a confirmation to ${formData.email}`);
    setShowScheduler(false);
    setSelectedService(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <>
      <section id="services" className="py-20 bg-white min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
              <span className="text-green-700 font-semibold text-sm">OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive IT Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade services designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-green-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-1">
                    Learn more
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedService && !showScheduler && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 rounded-t-2xl flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <selectedService.icon className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedService.title}</h2>
                  <p className="text-green-50">{selectedService.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedService.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Mail className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href={`mailto:${selectedService.contact.email}`} className="font-semibold text-green-600 hover:text-green-700">
                        {selectedService.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href={`tel:${selectedService.contact.phone}`} className="font-semibold text-green-600 hover:text-green-700">
                        {selectedService.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <MapPin className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Department</p>
                      <p className="font-semibold text-gray-900">{selectedService.contact.location}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowScheduler(true)}
                  className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showScheduler && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Calendar className="text-white" size={28} />
                <div>
                  <h2 className="text-2xl font-bold">Schedule Consultation</h2>
                  <p className="text-green-50">{selectedService.title}</p>
                </div>
              </div>
              <button
                onClick={() => setShowScheduler(false)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="p-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your requirements or any specific questions..."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Our team will review your request and send a confirmation email within 24 hours with meeting details.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowScheduler(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Schedule Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
