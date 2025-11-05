// Members timeline styled like "Our Journey" component
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';

const members = [
  {
    "name": "Naresh Dhakal",
    "role": "Chief Executive Officer",
    "image": "/team/naresh.jpg",
    "bio": "Over 15 years of leadership experience in IT services, business strategy, and digital transformation across global markets.",
    "education": "Master’s in Business Administration",
    "certifications": ["PMP", "AWS Certified Solutions Architect", "Leadership Excellence"],
    "linkedin": "#",
    "email": "naresh.dhakal@bitsinetwork.com"
  },
  {
    "name": "Umesh Subedi",
    "role": "Chief Technology Officer",
    "image": "/team/umesh.jpg",
    "bio": "Seasoned technology leader specializing in enterprise cloud solutions, DevOps, and large-scale system architecture.",
    "education": "Master’s in Computer Science",
    "certifications": ["Azure Solutions Architect Expert", "TOGAF", "Kubernetes Administrator"],
    "linkedin": "#",
    "email": "umesh.subedi@bitsinetwork.com"
  },
  {
    "name": "Mandira Rupakheti",
    "role": "Senior Project Manager",
    "image": "/team/mandira.jpg",
    "bio": "Experienced project manager with expertise in portfolio management, agile delivery, and stakeholder engagement.",
    "education": "Master’s in Business Administration (Finance)",
    "certifications": ["CFA", "CAIA", "Prince2 Practitioner"],
    "linkedin": "#",
    "email": "mandira.rupakheti@bitsinetwork.com"
  },
  {
    "name": "Udayaraj Subedi",
    "role": "Senior Software Engineer, Team Lead",
    "image": "/team/uday.jpg",
    "bio": "Leads software development teams to deliver scalable applications with modern technologies and agile practices.",
    "education": "Bachelor’s in Software Engineering",
    "certifications": ["Certified Scrum Master", "Java Developer Professional"],
    "linkedin": "#",
    "email": "udayaraj.subedi@bitsinetwork.com"
  },
  {
    "name": "Sandesh Sapkota",
    "role": "Software Engineer",
    "image": "/team/sandesh.jpg",
    "bio": "Full-stack developer with a focus on backend APIs, database systems, and cloud integration.",
    "education": "Bachelor’s in Software Engineering",
    "certifications": ["Java", "AWS Developer Associate"],
    "linkedin": "#",
    "email": "sandesh.sapkota@bitsinetwork.com"
  },
  {
    "name": "Sandhya Rimal",
    "role": "Frontend Engineer",
    "image": "/team/sandhya.jpg",
    "bio": "Frontend engineer crafting intuitive and responsive user interfaces using React and modern design systems.",
    "education": "Bachelor’s in Computer Science",
    "certifications": ["React", "UI/UX Design Fundamentals"],
    "linkedin": "#",
    "email": "sandhya.rimal@bitsinetwork.com"
  },
  {
    "name": "Nirajan Baral",
    "role": "Associate Frontend Engineer",
    "image": "/team/nirajan.jpg",
    "bio": "Passionate about building high-performance web interfaces and improving user experience.",
    "education": "Bachelor’s in Computer Science",
    "certifications": ["React", "Frontend Web Development"],
    "linkedin": "#",
    "email": "nirajan.baral@bitsinetwork.com"
  },
  {
    "name": "Yashoda Parajuli",
    "role": "Senior Quality Assurance Engineer",
    "image": "/team/nirajan.jpg",
    "bio": "Passionate about building high-performance web interfaces and improving user experience.",
    "education": "Bachelor’s in Computer Science",
    "certifications": ["React", "Frontend Web Development"],
    "linkedin": "#",
    "email": "nirajan.baral@bitsinetwork.com"
  },
  {
    "name": "Abhishekh Sigdel",
    "role": "SEO Specialist",
    "image": "/team/abhishek.jpg",
    "bio": "Digital marketing professional focused on SEO strategy, content optimization, and analytics.",
    "education": "Master’s in Marketing",
    "certifications": ["Google SEO", "Google Analytics", "Digital Marketing Professional"],
    "linkedin": "#",
    "email": "abhishek.sigdel@bitsinetwork.com"
  },
  {
    "name": "Siddhartha Bhattrai",
    "role": "System & Network Administrator",
    "image": "/team/siddhartha.jpg",
    "bio": "Dedicated to maintaining secure, scalable, and reliable IT infrastructure and network systems.",
    "education": "Bachelor’s in Information Technology",
    "certifications": ["CCNA", "CompTIA Security+"],
    "linkedin": "#",
    "email": "siddhartha.bhattrai@bitsinetwork.com"
  },
  {
    name: "Archana Subedi",
    role: "Accountant",
    image: "/team/archana.jpg",
    bio: "Experienced accountant managing financial operations, budgeting, and compliance reporting.",
    education: "Bachelor’s in Business Administration",
    certifications: ["Tally ERP", "Financial Accounting"],
    linkedin: "#",
    email: "archana.subedi@bitsinetwork.com"
  }
];

export default function Members() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-green-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the people behind BITSI — visionaries, builders, and innovators
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-emerald-500 hidden lg:block"></div>

          <div className="space-y-16">
            {members.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-green-100">
                    <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                    <div className="text-sm text-gray-700 mb-2 flex items-center gap-2 justify-center lg:justify-start lg:flex-row-reverse">
                      <GraduationCap size={16} /> {member.education}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start lg:flex-row-reverse mb-4">
                      {member.certifications.map((cert, i) => (
                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                          <Award size={12} /> {cert}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 justify-center lg:justify-start lg:flex-row-reverse">
                      <a href={member.linkedin} className="p-2 border rounded-lg hover:bg-gray-50"><Linkedin size={18} /></a>
                      <a href={`mailto:${member.email}`} className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-1">
                        <Mail size={18} /> Contact
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
