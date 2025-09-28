import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Cpu, 
  Wrench, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import './App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const capabilities: Capability[] = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "CAD Design",
      description: "Unique, eye-catching CAD designs that stand out from templates. Each project is customized to reflect your vision and brand identity using Autodesk Inventor, Fusion 360, and SolidWorks."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Firmware",
      description: "I develop reliable firmware for embedded systems and automation, delivering tailored solutions that enhance efficiency and performance using C++, Python, and ROS2."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Prototype",
      description: "I create precise prototypes that transform ideas into reality, ensuring functionality and aesthetics align perfectly for a tangible product with PCB design and 3D modeling."
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Control Module for Milk Cooling Tanks",
      description: "Lead the development of a control unit for milk cooling tanks including mechanical design, coding, assembly, and PCB design.",
      image: "/api/placeholder/400/300",
      technologies: ["C++", "ESP32", "KiCad", "Inventor"]
    },
    {
      id: 2,
      title: "Autonomous Mobile Robot",
      description: "Comprehensive robot development from CAD design to ROS2 implementation with autonomous navigation capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["ROS2", "Python", "CAD", "ESP32"]
    },
    {
      id: 3,
      title: "IoT Dashboard",
      description: "Real-time monitoring and control system for robotics projects using MQTT, React, and Ant Design components.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "MQTT", "Nginx", "Ant Design"]
    },
    {
      id: 4,
      title: "Smart Plug",
      description: "Internet-connected socket featuring instant on/off capabilities with remote control functionality.",
      image: "/api/placeholder/400/300",
      technologies: ["IoT", "ESP32", "WiFi", "Mobile App"]
    }
  ];

  const skills = [
    "CAD Modelling", "Python", "C++", "PCB Design", "ROS2", 
    "Robotics", "Automation", "Research & Development", "Project Management"
  ];

  const processSteps = [
    { number: "01", title: "Request", description: "Submit your request" },
    { number: "02", title: "Estimate", description: "Get an estimate asap" },
    { number: "03", title: "Approve", description: "Okay and send details" },
    { number: "04", title: "Design & Develop", description: "Executed in CAD & code files" },
    { number: "05", title: "Deliver", description: "Pay only when 100%" }
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">İ</span>
              </div>
              <span className="font-bold text-xl">ILTERAY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('work')} className="hover:text-primary transition-colors">Work</button>
              <button onClick={() => scrollToSection('capabilities')} className="hover:text-primary transition-colors">Capabilities</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Process</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
              <Button onClick={toggleTheme} variant="outline" size="sm">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button onClick={() => scrollToSection('contact')}>Hire me</Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button onClick={toggleTheme} variant="outline" size="sm">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('work')} className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Work</button>
                <button onClick={() => scrollToSection('capabilities')} className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Capabilities</button>
                <button onClick={() => scrollToSection('process')} className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Process</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors">Contact</button>
                <Button onClick={() => scrollToSection('contact')} className="w-full mt-2">Hire me</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">ÖM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let's spice things up and make{' '}
              <span className="text-primary">technology</span> accessible for all!
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              My mission is to provide the best solutions for clients who want to keep up with 
              evolving technology and to work with the latest engineering approaches for them 
              to keep up with current developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Work with me
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('work')}>
                Recent Work
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>3+ years of engineering experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>15+ successful projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A taste of what I can do for you
            </h2>
            <p className="text-xl text-muted-foreground">
              Check what I made - this is worth a thousand words about me.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              I bring projects to life, from design to development
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </Card>
            ))}
          </div>
          
          {/* Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">MY CAPABILITIES AND TOOLS</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You're 5 steps away from a new project...
            </h2>
            <p className="text-xl text-muted-foreground">
              Easy to begin and streamlined to the end. I use async communication and limit meetings to save time and optimize productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your friendly neighborhood Mechatronics Engineer
          </h2>
          <h3 className="text-2xl font-semibold mb-8 text-primary">Ömer Faruk MALI</h3>
          <p className="text-xl text-muted-foreground mb-8">Available for Hire</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">omrfrkmll@gmail.com</p>
            </Card>
            <Card className="p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">+90 555 015 4435</p>
            </Card>
            <Card className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">Eskişehir, Türkiye</p>
            </Card>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-4">Already have a design and want me to build it?</h4>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["Mechatronics", "Robotic systems", "Automation", "Sensors", "Actuators", "Control systems", "Integrated systems", "Electronic circuits", "Computer-controlled systems", "Industrial applications"].map((item) => (
                <Badge key={item} variant="secondary">{item}</Badge>
              ))}
            </div>
            <Button size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">İ</span>
            </div>
            <span className="font-bold text-lg">ILTERAY</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Ömer Faruk MALI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
