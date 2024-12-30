'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart2, Code, Cloud, Cpu, Database } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasScrolled?: boolean;
}

const NavLink = ({ href, children, hasScrolled }: NavLinkProps) => (
  <Link 
    href={href} 
    className={`text-sm font-medium transition-colors hover:text-blue-600 ${
      hasScrolled ? 'text-gray-900' : 'text-white'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <Link 
    href={href}
    onClick={onClick}
    className="block text-gray-900 hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      hasScrolled ? 'bg-white shadow-lg' : 'bg-blue-900'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Cpu className={`w-8 h-8 ${hasScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${hasScrolled ? 'text-gray-900' : 'text-white'}`}>
              Ether Ael
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink hasScrolled={hasScrolled} href="#solutions">Solutions</NavLink>
            <NavLink hasScrolled={hasScrolled} href="#insights">Insights</NavLink>
            <NavLink hasScrolled={hasScrolled} href="#case-studies">Case Studies</NavLink>
            <NavLink hasScrolled={hasScrolled} href="#contact">Contact</NavLink>
          </div>

          <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${hasScrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${hasScrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 transition-all ${hasScrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <MobileNavLink href="#solutions">Solutions</MobileNavLink>
            <MobileNavLink href="#insights">Insights</MobileNavLink>
            <MobileNavLink href="#case-studies">Case Studies</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="min-h-screen relative flex items-center bg-blue-900">
    <div className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Global Trading Excellence in Electronics & More
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Your trusted partner in international trade, specializing in electronic products and diverse trading solutions. Bridging markets worldwide with quality and reliability.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Our Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Trade With Us
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-700">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-700">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-700">Global Support</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Insights = () => (
  <section id="insights" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Trade Insights</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay informed about the latest trends and opportunities in international trade
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Global Electronics Market Trends</h3>
            <p className="text-gray-600">
              Analysis of emerging opportunities in the international electronics trade sector.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Supply Chain Innovation</h3>
            <p className="text-gray-600">
              Latest developments in international logistics and supply chain management.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Trade Regulations Update</h3>
            <p className="text-gray-600">
              Key changes in international trade policies and compliance requirements.
            </p>
          </div>
        </div>
        <div className="bg-blue-900 p-8 rounded-xl text-white">
          <h3 className="text-xl font-bold mb-6">Market Highlights</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-blue-800 pb-4">
              <span className="text-blue-100">Electronics Export Growth</span>
              <span className="text-2xl font-bold text-white">+25%</span>
            </div>
            <div className="flex items-center justify-between border-b border-blue-800 pb-4">
              <span className="text-blue-100">New Market Partnerships</span>
              <span className="text-2xl font-bold text-white">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-100">Supply Chain Efficiency</span>
              <span className="text-2xl font-bold text-white">+30%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Business",
      excerpt: "Explore how artificial intelligence is transforming modern business operations...",
      date: "Dec 28, 2024",
      readTime: "5 min read"
    },
    {
      title: "Cloud Migration Strategies",
      excerpt: "Learn about effective strategies for migrating your infrastructure to the cloud...",
      date: "Dec 25, 2024",
      readTime: "4 min read"
    },
    {
      title: "Cybersecurity Best Practices",
      excerpt: "Essential cybersecurity practices every business should implement...",
      date: "Dec 22, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={`/api/placeholder/400/300`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="text-blue-600 p-0">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
}

const Partners = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Technology Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {[1, 2, 3, 4].map((partner) => (
          <div key={partner} className="flex justify-center">
            <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Image
                src={`/api/placeholder/128/128`}
                alt={`Partner ${partner}`}
                width={64}
                height={64}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial = ({ text, author, position, company }: TestimonialProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <p className="text-gray-600 mb-6">{text}</p>
    <div>
      <div className="font-bold">{author}</div>
      <div className="text-sm text-gray-500">{position}, {company}</div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Testimonial
          text="TechFusion transformed our business operations with their innovative solutions. The results exceeded our expectations."
          author="Sarah Johnson"
          position="CTO"
          company="Global Innovations Inc."
        />
        <Testimonial
          text="Their expertise in cloud migration helped us achieve significant cost savings and improved efficiency."
          author="Michael Chen"
          position="Director of IT"
          company="TechCorp"
        />
        <Testimonial
          text="The team&apos;s dedication to our success and their technical expertise sets them apart from other consultants."
          author="David Rodriguez"
          position="CEO"
          company="StartUp Ventures"
        />
      </div>
    </div>
  </section>
);

const Solutions = () => {
  const solutions = [
    {
      title: "Electronics Trading",
      description: "Comprehensive range of electronic components, consumer electronics, and industrial equipment.",
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Import/Export Services",
      description: "End-to-end logistics solutions for seamless international trade operations.",
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Market Access",
      description: "Strategic partnerships and market entry solutions for global business expansion.",
      icon: <BarChart2 className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Supply Chain Solutions",
      description: "Optimized procurement and distribution networks for efficient trade flow.",
      icon: <Database className="w-12 h-12 text-blue-600" />,
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Trading Solutions</h2>
          <p className="text-gray-700">
            Comprehensive trading solutions tailored to meet your international business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => (
  <section id="case-studies" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Discover how we&apos;ve helped businesses expand their reach through strategic trading partnerships
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Electronics Distribution Network</h3>
            <p className="text-gray-700 mb-4">
              Established a comprehensive distribution network for consumer electronics across Southeast Asia.
            </p>
            <div className="flex items-center text-blue-600">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Global Supply Chain Optimization</h3>
            <p className="text-gray-700 mb-4">
              Streamlined international logistics operations for a major electronics manufacturer.
            </p>
            <div className="flex items-center text-blue-600">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Market Entry Strategy</h3>
            <p className="text-gray-700 mb-4">
              Successfully introduced European electronic brands to Asian markets through strategic partnerships.
            </p>
            <div className="flex items-center text-blue-600">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-blue-900">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Connect With Us</h2>
          <p className="text-blue-100">
            Ready to explore international trading opportunities? Our global team is here to assist you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your trading needs"
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700">Email: info@ether-ael.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#about" className="hover:text-blue-400">About Ether Ael</Link></li>
            <li><Link href="#careers" className="hover:text-blue-400">Careers</Link></li>
            <li><Link href="#partners" className="hover:text-blue-400">Global Partners</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link href="#electronics" className="hover:text-blue-400">Electronics</Link></li>
            <li><Link href="#catalog" className="hover:text-blue-400">Product Catalog</Link></li>
            <li><Link href="#sourcing" className="hover:text-blue-400">Sourcing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Trade</h3>
          <ul className="space-y-2">
            <li><Link href="#import" className="hover:text-blue-400">Import Services</Link></li>
            <li><Link href="#export" className="hover:text-blue-400">Export Services</Link></li>
            <li><Link href="#logistics" className="hover:text-blue-400">Logistics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><Link href="#contact" className="hover:text-blue-400">Global Offices</Link></li>
            <li><Link href="#support" className="hover:text-blue-400">Trade Support</Link></li>
            <li><Link href="#inquiries" className="hover:text-blue-400">Business Inquiries</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Ether Ael Trading Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function Main() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <CaseStudies />
      <Insights />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export { Main };