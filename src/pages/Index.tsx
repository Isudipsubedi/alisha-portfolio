
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Linkedin, Globe, Download, Leaf, Droplets, Recycle, Shield, Wind, Trees, MapPin, GraduationCap, Briefcase, Award, BookOpen, Target, CheckCircle, Calendar, ArrowRight, Star, Quote, ChevronDown, Menu, X, ExternalLink, FlaskConical, Database, Earth, Mountain, Umbrella, Lightbulb, Wrench, Construction, Biohazard } from 'lucide-react';
import SmoothScroll from '@/components/SmoothScroll';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'projects', 'achievements', 'contact'];
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
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Eco-Friendly Bricks from Recycled Cigarette Butts",
      description: "Innovative sustainable construction material development project focusing on waste reduction and eco-friendly building solutions.",
      category: "Sustainable Materials",
      icon: Recycle,
      color: "from-green-400 to-emerald-600",
      impact: "Reduced waste by 80%"
    },
    {
      title: "Environmental Management Plan - Panauti Hydropower Plant",
      description: "Comprehensive environmental impact assessment and management strategy for renewable energy infrastructure in Kavre, Nepal.",
      category: "Renewable Energy",
      icon: Droplets,
      color: "from-blue-400 to-cyan-600",
      impact: "Clean energy for 5000+ homes"
    },
    {
      title: "Stormwater Infrastructure Resilience Analysis",
      description: "Time series spatial analysis of stormwater management and infrastructure resilience for Bidur Municipality, Nuwakot (1994-2024).",
      category: "Water Management",
      icon: Umbrella,
      color: "from-teal-400 to-blue-600",
      impact: "Improved flood resilience"
    },
    {
      title: "VoyAIger - AI-Powered Trip Planner",
      description: "Built an AI-powered sustainable travel planning application integrating Google Maps, authentication, and chatbot for eco-conscious tourism.",
      category: "Technology & Sustainability",
      icon: Earth,
      color: "from-purple-400 to-indigo-600",
      impact: "Promotes eco-tourism"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Global STEWARDS 2025 Cohort",
      description: "Selected for University of Maryland USA's prestigious global environmental leadership program",
      year: "2025",
      color: "from-emerald-400 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Tech2Empower Event Participant",
      description: "Women's Alliance for Knowledge Exchange (WAKE) - Promoting women in technology",
      year: "2023",
      color: "from-blue-400 to-teal-600"
    },
    {
      icon: Earth,
      title: "Sustainable Cities Symposium Volunteer",
      description: "FECAM organized symposium 'Sustainable Cities in Nepal: From Perception to Reality'",
      year: "2024",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Recycle,
      title: "Waste Management Conference Volunteer",
      description: "National Conference on Solid Waste Management and Circular Economy",
      year: "2024",
      color: "from-teal-400 to-cyan-600"
    },
    {
      icon: BookOpen,
      title: "Editor - Ayika Magazine",
      description: "Annual magazine of FECAM (Department Club of Environmental Engineering Students)",
      year: "2024",
      color: "from-purple-400 to-indigo-600"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Python", "C", "C++"], icon: Database, color: "from-green-400 to-emerald-600" },
    { category: "GIS & Modeling", items: ["QGIS", "ArcGIS", "EPANET", "AutoCAD"], icon: MapPin, color: "from-blue-400 to-cyan-600" },
    { category: "Data Analysis", items: ["SPSS", "Excel", "Statistical Analysis"], icon: FlaskConical, color: "from-teal-400 to-blue-600" },
    { category: "Environmental Tools", items: ["Hydropower Assessment", "Water Quality Analysis", "Environmental Impact Assessment"], icon: Droplets, color: "from-emerald-400 to-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20 text-gray-800 dark:text-white relative overflow-hidden transition-colors duration-300">
      <SmoothScroll />
      
      {/* Floating Environmental Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Cursor Follower */}
      <div 
        className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate(-50%, -50%)`
        }}
      >
        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-50 blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'} ${activeSection !== 'home' ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-green-200/20 dark:border-green-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            <div className="text-xl lg:text-2xl font-bold flex-shrink-0">
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                ALISHA POUDEL
              </span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-green-600 dark:hover:text-green-400 group ${
                    activeSection === item.toLowerCase() ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-4 py-6 px-8 border border-green-200/20 dark:border-green-500/20 mb-4">
              {['Home', 'About', 'Experience', 'Skills', 'Education', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors border-b border-green-100 dark:border-green-800 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Environmental Engineer</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
                <span className="block text-gray-800 dark:text-white">ALISHA</span>
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-gradient">
                  POUDEL
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl lg:text-2xl font-light mb-6 text-gray-600 dark:text-gray-300">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">Environmental Engineer</span>
                <span className="mx-2">•</span>
                <span>Sustainability Expert</span>
                <span className="mx-2">•</span>
                <span>Water Resource Specialist</span>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl">
                Dedicated to creating sustainable solutions for environmental challenges through 
                <span className="text-green-600 dark:text-green-400 font-semibold"> innovative engineering</span> and 
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> water resource management</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button className="group bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 text-white">
                  <Download size={20} />
                  <span className="font-semibold">Download CV</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
                <a href="#contact" className="border-2 border-green-500/30 hover:border-green-500 px-8 py-4 rounded-2xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 font-semibold backdrop-blur-sm text-center text-gray-700 dark:text-gray-300">
                  Get In Touch
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "10+", label: "Projects Completed" },
                  { number: "5+", label: "Certifications" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`flex justify-center transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-full relative overflow-hidden">
                  <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-6xl lg:text-8xl font-black text-gray-800 dark:text-white">AP</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
                </div>
                
                {[
                  { icon: Leaf, position: "top-0 right-8", color: "green", delay: "0s" },
                  { icon: Droplets, position: "bottom-0 left-8", color: "blue", delay: "0.5s" },
                  { icon: Recycle, position: "top-1/2 left-0", color: "emerald", delay: "1s" }
                ].map((item, index) => (
                  <div key={index} className={`absolute ${item.position} transform translate-x-4 translate-y-4`} style={{ animationDelay: item.delay }}>
                    <div className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 p-4 rounded-2xl shadow-2xl animate-bounce backdrop-blur-sm`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-400 font-medium">SCROLL</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 dark:via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">About Me</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Environmental Impact</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-white">Sustainable Solutions</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Dedicated Environmental Engineer with expertise in water and wastewater management, sustainable development, 
                  and environmental impact assessment. Passionate about applying technical expertise to address environmental 
                  challenges and drive sustainable water resource solutions.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently pursuing Bachelor of Technology in Environmental Engineering at Kathmandu University, 
                  with hands-on experience in innovative projects and environmental research.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Droplets, title: "Water Management", desc: "Advanced water resource planning", color: "blue" },
                  { icon: Recycle, title: "Waste Solutions", desc: "Circular economy approaches", color: "green" },
                  { icon: Wind, title: "Air Quality", desc: "Pollution control systems", color: "teal" },
                  { icon: Earth, title: "Sustainability", desc: "Environmental conservation", color: "emerald" }
                ].map((skill, index) => (
                  <div key={skill.title} className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-200/20 dark:border-green-500/20 hover:border-green-300 dark:hover:border-green-400 transition-all duration-300 cursor-pointer">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 dark:border-green-500/20">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Core Values</h3>
                <div className="space-y-6">
                  {[
                    { title: "Sustainability", desc: "Creating eco-friendly solutions for future generations" },
                    { title: "Innovation", desc: "Pioneering new approaches to environmental challenges" },
                    { title: "Conservation", desc: "Protecting natural resources through smart engineering" },
                    { title: "Impact", desc: "Making measurable positive environmental changes" }
                  ].map((value, index) => (
                    <div key={value.title} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{value.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">Experience</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Professional Journey</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-12 border border-green-200/20 dark:border-green-500/20">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Environmental Intern</h3>
                  <p className="text-xl text-green-600 dark:text-green-400 font-semibold">Bharatpur Metropolitan City</p>
                  <p className="text-gray-600 dark:text-gray-400">Bharatpur, Chitwan • Feb 2025 - April 2025</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Responsibilities & Achievements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Environmental impact assessments for municipal projects",
                    "Water quality monitoring and analysis",
                    "Waste management system optimization",
                    "Sustainability program development",
                    "Community environmental awareness initiatives",
                    "Environmental compliance reporting"
                  ].map((achievement, index) => (
                    <div key={achievement} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 dark:via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">Skills</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Technical Expertise</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {skills.map((skillCategory, categoryIndex) => (
              <div key={skillCategory.category} className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillCategory.color} rounded-xl flex items-center justify-center`}>
                    <skillCategory.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{skillCategory.category}</h3>
                </div>
                
                <div className="grid gap-4">
                  {skillCategory.items.map((skill, index) => (
                    <div key={skill} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-green-200/20 dark:border-green-500/20 hover:border-green-300 dark:hover:border-green-400 transition-all duration-300">
                      <span className="font-medium text-gray-800 dark:text-white">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">Education</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Academic Excellence</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 dark:border-green-500/20">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Bachelor of Technology in Environmental Engineering</h3>
                  <p className="text-lg text-green-600 dark:text-green-400 font-semibold">Kathmandu University</p>
                  <p className="text-gray-600 dark:text-gray-400">Dhulikhel, Kavre • Feb 2021 - Present</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 dark:border-green-500/20">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">+2 Science</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">Aroma College</p>
                  <p className="text-gray-600 dark:text-gray-400">Bharatpur, Chitwan • 2019 - 2021</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 dark:border-green-500/20">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Certifications & Training</h4>
              <div className="space-y-4">
                {[
                  "Online Global Classroom Course MIEH333 Every Drop Counts: Water, Food and Global Public Health",
                  "Python Basics - KodeKloud",
                  "Use of Kobo Toolbox and GIS for Critical WASH Infrastructure Mapping"
                ].map((cert, index) => (
                  <div key={cert} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 dark:via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">Projects</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Environmental Solutions</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 dark:border-green-500/20 hover:border-green-300 dark:hover:border-green-400 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">{project.category}</span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">{project.impact}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">Achievements</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Recognition & Impact</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 dark:border-green-500/20 hover:border-green-300 dark:hover:border-green-400 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{achievement.title}</h3>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{achievement.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 dark:via-green-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg tracking-wider uppercase">Contact</span>
            <h2 className="text-6xl font-black text-gray-800 dark:text-white mb-6 mt-4">Let's Collaborate</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-8">Ready to create sustainable environmental solutions together</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-semibold text-gray-800 dark:text-white mb-8">Get In Touch</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Passionate about environmental engineering and seeking opportunities to contribute to sustainable development 
                and environmental conservation projects.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Phone", value: "+977 9864064330", color: "from-green-400 to-green-600" },
                  { icon: Mail, label: "Email", value: "alishapoudel456@gmail.com", color: "from-blue-400 to-blue-600" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/alishapoudel", color: "from-emerald-400 to-emerald-600" },
                  { icon: MapPin, label: "Location", value: "Bharatpur, Chitwan, Nepal", color: "from-teal-400 to-teal-600" }
                ].map((contact, index) => (
                  <div key={contact.label} className="group flex items-center gap-6 p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                    <div className={`bg-gradient-to-r ${contact.color} p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{contact.label}</p>
                      <p className="text-xl font-medium text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/50 to-green-50/50 dark:from-gray-800/50 dark:to-green-900/20 backdrop-blur-sm p-12 rounded-3xl border border-green-200/20 dark:border-green-500/20">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Areas of Interest</h3>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Droplets, title: "Water Resources", color: "from-blue-400 to-blue-600" },
                  { icon: Recycle, title: "Waste Management", color: "from-green-400 to-green-600" },
                  { icon: Wind, title: "Air Quality", color: "from-teal-400 to-teal-600" },
                  { icon: Earth, title: "Sustainability", color: "from-emerald-400 to-emerald-600" }
                ].map((interest, index) => (
                  <div key={interest.title} className="bg-white/50 dark:bg-gray-700/50 p-6 rounded-2xl text-center hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors cursor-pointer group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <interest.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm">{interest.title}</h4>
                  </div>
                ))}
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-gray-600 dark:text-gray-400">Available for environmental engineering opportunities</p>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 font-semibold">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm border-t border-green-200/20 dark:border-green-500/20 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
                ALISHA POUDEL
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Environmental Engineer dedicated to creating sustainable solutions for a better tomorrow through innovative engineering and environmental conservation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {['About', 'Experience', 'Skills', 'Education', 'Projects'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-6">Expertise</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>Water Resource Management</li>
                <li>Environmental Assessment</li>
                <li>Sustainability Planning</li>
                <li>Waste Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-6">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, color: "from-blue-500 to-blue-600" },
                  { icon: Mail, color: "from-green-500 to-green-600" },
                  { icon: Phone, color: "from-emerald-500 to-emerald-600" }
                ].map((social, index) => (
                  <div key={index} className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer`}>
                    <social.icon size={18} className="text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-200/20 dark:border-green-500/20 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">&copy; 2024 Alisha Poudel. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">Committed to environmental excellence and sustainable innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
