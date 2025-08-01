import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Brain, PenTool as Tool, ChevronDown, MapPin, Calendar, Award, Users, Star } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import Logo from './components/Logo';

const technologies = {
  frontend: [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'React', color: 'bg-blue-500' },
    { name: 'Next.js', color: 'bg-black' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    { name: 'Flutter', color: 'bg-blue-600' }
  ],
  backend: [
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Express', color: 'bg-gray-700' },
    { name: 'Supabase', color: 'bg-green-500' },
    { name: 'PostgreSQL', color: 'bg-blue-700' }
  ],
  aiml: [
    { name: 'OpenAI', color: 'bg-purple-600' },
    { name: 'TensorFlow', color: 'bg-orange-500' },
    { name: 'PyTorch', color: 'bg-red-500' },
    { name: 'Hugging Face', color: 'bg-blue-500' },
    { name: 'Keras', color: 'bg-yellow-600' },
    { name: 'Kaggle', color: 'bg-blue-400' }
  ],
  tools: [
    { name: 'Vercel', color: 'bg-black' },
    { name: 'Git', color: 'bg-orange-600' },
    { name: 'VS Code', color: 'bg-blue-600' },
    { name: 'Postman', color: 'bg-red-600' },
    { name: 'Slack', color: 'bg-gray-600' },
    { name: 'Discord', color: 'bg-blurple-600' },
    { name: 'Notion', color: 'bg-gray-800' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'Firebase', color: 'bg-yellow-500' },
    { name: 'GitHub Actions', color: 'bg-gray-900' },
    { name: 'Google Colab', color: 'bg-yellow-600' }
  ]
};

const projects = [
  {
    title: 'Salesa AI',
    description: 'A Salesa AI automation system built with Python',
    tech: ['Python','tensorflow', 'pytorch'],
    github: 'https://github.com/elijahnzeli1/salesa-ai',
    live: '#',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'CausalTorch Library',
    description: 'Modern way to build ai systems with causal inference',
    tech: ['python', 'pytorch', 'transformers', 'tensorflow'],
    github: 'https://github.com/elijahnzeli1/CausalTorch',
    live: '#',
    image: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Visioner',
    description: "Visioner is an AI-powered sign language detection system using YOLOv12 for identifying and classifying different types of sign language. The model can detect 26 categories of American Sign Language (ASL) gestures, ranging from 'A' to 'Y'.",
    tech: ['Python', 'TensorFlow', 'Flask', 'OpenAI'],
    github: 'https://github.com/elijahnzeli1/visioner_model7',
    live: '#',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Developing AI-integrated web applications using Next.js, Node.js, and modern frameworks',
    achievements: [
      'Built 10+ production-ready web applications',
      'Integrated OpenAI APIs for enhanced user experiences',
      'Optimized application performance by 40%'
    ]
  },
  {
    role: 'AI Enthusiast & Researcher',
    company: 'Open Source Contributor',
    period: '2022 - Present',
    description: 'Contributing to AI/ML projects and exploring generative AI model fine-tuning',
    achievements: [
      'Contributed to 15+ open-source AI projects',
      'Published research on model optimization',
      'Mentored 20+ developers in AI integration'
    ]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo size={50} showText={true} className="cursor-pointer" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Nairobi, Kenya</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Elijah Nzeli</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
              <div className="flex items-center justify-center space-x-3">
                <Code className="w-6 h-6 text-blue-400" />
                <span>Full-Stack Developer</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Brain className="w-6 h-6 text-purple-400" />
                <span>AI Enthusiast</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Star className="w-6 h-6 text-green-400" />
                <span>Next.js Specialist</span>
              </div>
            </div>

            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building AI-integrated web solutions with Next.js, TypeScript, and modern frameworks. 
              Passionate about creating innovative SaaS products and contributing to open-source AI projects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="mailto:elijahnzeli924@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </a>
              
              <a
                href="https://github.com/elijahnzeli1"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View GitHub</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer focused on building innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated Full-Stack Developer with a passion for AI and modern web technologies. 
                Based in Nairobi, Kenya, I specialize in creating scalable, user-centric applications 
                using Next.js, TypeScript, JavaScript, and AI integrations.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech is driven by curiosity and the desire to solve real-world problems 
                through innovative software solutions. I'm particularly interested in the intersection 
                of AI and web development, creating intelligent applications that enhance user experiences.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <Award className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-gray-400">Developers Mentored</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Current Focus</h3>
              <ul className="space-y-4">
                {[
                  'Building Next.js applications with TypeScript',
                  'Developing AI-integrated web solutions',
                  'Exploring generative AI model fine-tuning and also building AI models from scratch',
                  'Contributing to open-source AI projects'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Expertise</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive skill set spanning modern web development and AI technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Frontend', icon: Code, techs: technologies.frontend, color: 'text-blue-400' },
              { title: 'Backend', icon: Database, techs: technologies.backend, color: 'text-green-400' },
              { title: 'AI & ML', icon: Brain, techs: technologies.aiml, color: 'text-purple-400' },
              { title: 'Tools', icon: Tool, techs: technologies.tools, color: 'text-orange-400' }
            ].map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions built with modern technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span className="font-semibold">{exp.company}</span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Open to discussing new opportunities, collaborations, and innovative projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:elijahnzeli924@gmail.com"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm">elijahnzeli924@gmail.com</p>
            </a>

            <a
              href="https://wa.me/+254741905247"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm">+254 741 905 247</p>
            </a>

            <a
              href="https://www.linkedin.com/in/elijah-nzeli"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <Linkedin className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>

            <a
              href="https://github.com/elijahnzeli1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
            >
              <Github className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">View my code</p>
            </a>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              I'm always open to discussing:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'New project opportunities',
                'Technical collaborations',
                'AI research initiatives',
                'Developer communities in Africa'
              ].map((topic, index) => (
                <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Elijah Nzeli. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;