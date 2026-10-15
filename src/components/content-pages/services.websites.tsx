import pageImage0 from "@/assets/imported-pages/image-642162527eb6c2da.asset.json";
import pageImage1 from "@/assets/imported-pages/image-1fb498686cfe640e.asset.json";
import pageImage2 from "@/assets/imported-pages/image-06f83b4056af2491.asset.json";
import pageImage3 from "@/assets/imported-pages/image-1711882e44106753.asset.json";
import pageImage4 from "@/assets/imported-pages/image-344522b6c1704dca.asset.json";
import pageImage5 from "@/assets/portfolio-website.jpg";
import pageImage6 from "@/assets/imported-pages/image-950f24c4b92d8d0d.asset.json";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState('websites');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [projectSlide, setProjectSlide] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState('business');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Typically, standard business websites take between 2 to 4 weeks depending on the complexity, content availability, and review cycles. E-commerce and custom web applications may take 4 to 8 weeks."
    },
    {
      q: "Can I update the website myself?",
      a: "Yes! All our websites are built on user-friendly Content Management Systems (CMS) such as WordPress or custom dashboards, allowing you to easily update text, images, blog posts, and products without coding knowledge."
    },
    {
      q: "Will my website be mobile friendly?",
      a: "Absolutely. Every website we design is 100% responsive, ensuring flawless viewing and interaction across smartphones, tablets, laptops, and desktop displays."
    },
    {
      q: "Do you provide domain and hosting?",
      a: "Yes, we provide reliable, high-speed SSD web hosting along with domain name registration (.co.ke, .com, etc.) and professional business email setup."
    },
    {
      q: "Do you offer website maintenance?",
      a: "Yes, we offer ongoing support and maintenance packages that cover regular security updates, backups, uptime monitoring, and minor content revisions."
    }
  ];

  const projects = [
    { title: "Kijoni Farms", category: "Agriculture", img: pageImage2.url },
    { title: "Apex Consultants", category: "Consulting", img: pageImage0.url },
    { title: "MedCore Clinic", category: "Healthcare", img: pageImage4.url },
    { title: "Elite Gym", category: "Fitness", img: pageImage6.url },
    { title: "Java Coffee House", category: "Hospitality", img: pageImage3.url },
    { title: "BrightPath Academy", category: "Education", img: pageImage5 }
  ];

  const solutions = [
    {
      title: "Business Websites",
      desc: "Perfect for establishing professional credibility and lead generation.",
      features: ["Corporate Websites", "Company Profiles", "Landing Pages", "One Page Websites"],
      icon: "💼"
    },
    {
      title: "E-Commerce Websites",
      desc: "Robust online stores with secure checkout and inventory management.",
      features: ["Online Stores", "Product Catalogs", "Payment Integration", "Inventory Management"],
      icon: "🛒"
    },
    {
      title: "Custom Web Applications",
      desc: "Tailor-made portals and systems designed for your specific workflows.",
      features: ["Web Portals", "CRM Systems", "Booking Systems", "Membership Systems"],
      icon: "⚙️"
    },
    {
      title: "Website Redesign",
      desc: "Modernize your outdated website with high-performance UI/UX.",
      features: ["Modern UI/UX", "Performance Upgrade", "Content Migration", "Brand Refresh"],
      icon: "✨"
    },
    {
      title: "Website Maintenance",
      desc: "Keep your digital presence secure, backed up, and up-to-date.",
      features: ["Regular Updates", "Security Monitoring", "Backups", "Performance Optimization"],
      icon: "🛡️"
    },
    {
      title: "Domain & Hosting",
      desc: "Blazing fast, secure cloud infrastructure for maximum uptime.",
      features: ["Domain Registration", "Web Hosting", "SSL Certificates", "Email Hosting"],
      icon: "🌐"
    }
  ];

  const processSteps = [
    { num: "01", title: "Discover", desc: "We understand your business, goals and target audience." },
    { num: "02", title: "Plan", desc: "We plan the structure, content and features of your website." },
    { num: "03", title: "Design", desc: "We create stunning UI/UX designs tailored to your brand." },
    { num: "04", title: "Develop", desc: "We build a fast, secure and scalable website that works." },
    { num: "05", title: "Test", desc: "We test on all devices and browsers to ensure quality and performance." },
    { num: "06", title: "Launch", desc: "We launch your website and make it live for the world." },
    { num: "07", title: "Support", desc: "We provide ongoing support and maintenance to keep it running." }
  ];

  const showAlert = (msg: string) => {
    setModalMessage(msg);
  };

  return (
    <div className="min-h-screen bg-topbar text-muted font-sans selection:bg-brand selection:text-brand-foreground">
      <SiteHeader />


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-topbar to-topbar pt-12 pb-20 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-normal px-3 py-1 rounded">
              Website Design & Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-none text-brand-foreground">
              Websites That Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand">
                Designs That Deliver.
              </span>
            </h1>
            <p className="text-border text-base sm:text-lg leading-relaxed max-w-xl">
              We build fast, secure and user-friendly websites that not only look great but also drive results. From strategy to launch and beyond, we’ve got your digital presence covered.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="unstyled" 
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-brand hover:bg-brand text-brand-foreground font-bold px-8 py-4 rounded-lg shadow-xl shadow-brand/30 flex items-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <span>LET'S BUILD YOUR WEBSITE</span>
                <span>➔</span>
              </Button>
              <Link 
                to="/portfolio"
                className="bg-primary hover:bg-primary border border-muted-foreground text-brand-foreground font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-all"
              >
                <span>VIEW OUR WORK</span>
                <span>➔</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            {/* Mockup Showcase Graphic */}
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-primary border border-primary rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-4 border-b border-primary pb-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  <div className="bg-primary text-xs px-4 py-1 rounded text-muted-foreground">imagequest.co.ke</div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 sm:col-span-8 bg-topbar rounded-lg overflow-hidden border border-primary">
                    <img 
                      src={pageImage1.url} 
                      alt="Website Preview" 
                      className="w-full h-48 sm:h-64 object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-4 flex flex-col gap-4">
                    <div className="bg-topbar rounded-lg p-3 border border-primary flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-brand/20 text-brand flex items-center justify-center font-bold">📱</div>
                      <div>
                        <div className="text-xs font-bold">Responsive</div>
                        <div className="text-[10px] text-muted-foreground">Mobile & Tablet</div>
                      </div>
                    </div>
                    <div className="bg-topbar rounded-lg p-3 border border-primary flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-brand/20 text-brand flex items-center justify-center font-bold">⚡</div>
                      <div>
                        <div className="text-xs font-bold">Lightning Fast</div>
                        <div className="text-[10px] text-muted-foreground">Optimized SEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons Grid (Floating White Card Row) */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="bg-brand-foreground text-primary rounded-2xl p-6 lg:p-8 shadow-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center p-4 rounded-xl hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl mb-3 shadow-sm">💻</div>
              <h4 className="font-bold text-sm mb-1">Modern Designs</h4>
              <p className="text-xs text-muted-foreground">Clean, professional and conversion-focused designs.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl mb-3 shadow-sm">📱</div>
              <h4 className="font-bold text-sm mb-1">Mobile Responsive</h4>
              <p className="text-xs text-muted-foreground">Fully responsive across all devices and screens.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl mb-3 shadow-sm">🔍</div>
              <h4 className="font-bold text-sm mb-1">SEO Optimized</h4>
              <p className="text-xs text-muted-foreground">Built with SEO best practices to rank higher on Google.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl mb-3 shadow-sm">🔒</div>
              <h4 className="font-bold text-sm mb-1">Fast & Secure</h4>
              <p className="text-xs text-muted-foreground">Lightning-fast loading and robust security for your site.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl mb-3 shadow-sm">⚙️</div>
              <h4 className="font-bold text-sm mb-1">Easy to Manage</h4>
              <p className="text-xs text-muted-foreground">User-friendly CMS so you can update content with ease.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xl mb-3 shadow-sm">🎧</div>
              <h4 className="font-bold text-sm mb-1">Ongoing Support</h4>
              <p className="text-xs text-muted-foreground">We provide support and maintenance when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Website Solutions Grid */}
      <section className="py-20 px-4 lg:px-12 bg-primary/60 border-t border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand font-bold tracking-normal text-xs uppercase">Our Website Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-normal">Everything You Need Online</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="bg-topbar border border-primary rounded-2xl p-6 hover:border-brand/50 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-3 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">{item.icon}</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-normal">Solution 0{idx+1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-brand-foreground group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
                  <ul className="space-y-2 mb-6 border-t border-primary pt-4">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-border">
                        <span className="text-brand font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="unstyled" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="w-full mt-4 bg-primary hover:bg-brand text-border hover:text-brand-foreground font-bold py-2.5 rounded-lg text-sm transition-all border border-primary hover:border-brand"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Process Timeline */}
      <section className="py-20 px-4 lg:px-12 bg-topbar border-t border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand font-bold tracking-normal text-xs uppercase">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-normal">From Concept To A Powerful Website</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-primary/80 border border-primary rounded-xl p-5 text-center relative hover:border-brand transition-all group flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand text-brand-foreground font-black text-sm flex items-center justify-center mb-4 shadow-lg shadow-brand/30 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="font-bold text-base mb-2 text-brand-foreground">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="py-20 px-4 lg:px-12 bg-topbar border-t border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand font-bold tracking-normal text-xs uppercase">Website Packages</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-normal">Choose The Right Package For Your Business</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Package */}
            <div className={`bg-primary border rounded-2xl p-8 flex flex-col justify-between transition-all ${selectedPackage === 'starter' ? 'border-brand ring-2 ring-brand/20' : 'border-primary'}`}>
              <div>
                <div className="text-center pb-6 border-b border-primary">
                  <h3 className="font-bold text-lg text-border mb-1">Starter Website</h3>
                  <p className="text-xs text-muted-foreground mb-4">Perfect for small businesses</p>
                  <div className="text-3xl sm:text-4xl font-black text-brand-foreground">
                    <span className="text-sm font-normal text-brand mr-1">KES</span> 29,999
                  </div>
                </div>
                <ul className="space-y-4 my-6 text-sm text-border">
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Up to 5 Pages</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Mobile Responsive</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Contact Form</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Basic SEO Setup</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Social Media Integration</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> 1 Month Support</li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => { setSelectedPackage('starter'); setIsConsultationModalOpen(true); }}
                className="w-full bg-primary hover:bg-muted-foreground text-brand-foreground font-bold py-3 rounded-lg text-sm transition-all border border-muted-foreground"
              >
                GET STARTED
              </Button>
            </div>

            {/* Business Package (Most Popular) */}
            <div className="bg-primary border-2 border-brand rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-brand/10 transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-brand text-brand-foreground text-[10px] font-black uppercase tracking-normal px-4 py-1.5 rounded-full shadow-md">
                Most Popular
              </div>
              <div>
                <div className="text-center pb-6 border-b border-primary">
                  <h3 className="font-bold text-lg text-brand-foreground mb-1">Business Website</h3>
                  <p className="text-xs text-border mb-4">Ideal for growing businesses</p>
                  <div className="text-3xl sm:text-4xl font-black text-brand-foreground">
                    <span className="text-sm font-normal text-brand mr-1">KES</span> 59,999
                  </div>
                </div>
                <ul className="space-y-4 my-6 text-sm text-border">
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Up to 10 Pages</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Mobile Responsive</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> CMS (WordPress)</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Basic SEO + Speed Optimization</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Contact Forms & WhatsApp</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> 3 Months Support</li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => { setSelectedPackage('business'); setIsConsultationModalOpen(true); }}
                className="w-full bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand text-brand-foreground font-bold py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-brand/30"
              >
                GET STARTED
              </Button>
            </div>

            {/* E-Commerce Package */}
            <div className={`bg-primary border rounded-2xl p-8 flex flex-col justify-between transition-all ${selectedPackage === 'ecommerce' ? 'border-brand ring-2 ring-brand/20' : 'border-primary'}`}>
              <div>
                <div className="text-center pb-6 border-b border-primary">
                  <h3 className="font-bold text-lg text-border mb-1">E-Commerce Website</h3>
                  <p className="text-xs text-muted-foreground mb-4">Built for online stores</p>
                  <div className="text-3xl sm:text-4xl font-black text-brand-foreground">
                    <span className="text-sm font-normal text-brand mr-1">KES</span> 89,999
                  </div>
                </div>
                <ul className="space-y-4 my-6 text-sm text-border">
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Up to 20 Products</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Payment Gateway Integration</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Inventory Management</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> Shipping Setup</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> SEO + Speed Optimization</li>
                  <li className="flex items-center gap-3"><span className="text-brand font-bold">✓</span> 3 Months Support</li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => { setSelectedPackage('ecommerce'); setIsConsultationModalOpen(true); }}
                className="w-full bg-primary hover:bg-muted-foreground text-brand-foreground font-bold py-3 rounded-lg text-sm transition-all border border-muted-foreground"
              >
                GET STARTED
              </Button>
            </div>

          </div>
          <div className="text-center text-xs text-muted-foreground mt-6">
            * Prices are exclusive of VAT. Terms & conditions apply.
          </div>
        </div>
      </section>

      {/* Why Choose Image Quest Section */}
      <section className="py-20 px-4 lg:px-12 bg-primary/40 border-t border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-brand font-bold tracking-normal text-xs uppercase">Why Choose Image Quest?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-normal">Excellence In Every Line of Code & Design</h2>
            <p className="text-border text-sm leading-relaxed">
              We combine creative brilliance with cutting-edge technical execution to deliver exceptional digital assets that elevate your brand and drive continuous business growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-primary border border-primary p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand/20 text-brand flex items-center justify-center font-bold text-lg flex-shrink-0">🏆</div>
                <div>
                  <h4 className="font-bold text-brand-foreground text-base">10+ Years Experience</h4>
                  <p className="text-xs text-muted-foreground">Proven track record in web design and development across East Africa.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-primary border border-primary p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand/20 text-brand flex items-center justify-center font-bold text-lg flex-shrink-0">🚀</div>
                <div>
                  <h4 className="font-bold text-brand-foreground text-base">500+ Websites Delivered</h4>
                  <p className="text-xs text-muted-foreground">We have successfully delivered websites across various industries and scales.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-primary border border-primary p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-brand/20 text-brand flex items-center justify-center font-bold text-lg flex-shrink-0">📈</div>
                <div>
                  <h4 className="font-bold text-brand-foreground text-base">Result Driven Approach</h4>
                  <p className="text-xs text-muted-foreground">We build websites that attract, engage, convert and retain customers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-primary border border-primary rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-brand-foreground">Ready to take your business online?</h3>
              <p className="text-sm text-border">
                Speak directly with our senior web strategists and discover how we can transform your digital footprint today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="unstyled" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-brand hover:bg-brand text-brand-foreground font-bold py-3.5 px-6 rounded-xl text-sm transition-all text-center shadow-lg shadow-brand/30"
                >
                  Book Free Consultation
                </Button>
                <a 
                  href="tel:+254720791677"
                  className="bg-primary hover:bg-muted-foreground text-brand-foreground font-bold py-3.5 px-6 rounded-xl text-sm transition-all text-center border border-muted-foreground"
                >
                  Call +254 720 791 677
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Website Projects Slider/Grid */}
      <section className="py-20 px-4 lg:px-12 bg-topbar border-t border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-brand font-bold tracking-normal text-xs uppercase">Portfolio</span>
              <h2 className="text-3xl font-extrabold tracking-normal mt-1">Recent Website Projects</h2>
            </div>
            <Button variant="unstyled" 
              onClick={() => showAlert("Viewing full portfolio gallery.")}
              className="bg-primary hover:bg-brand text-brand-foreground font-bold text-xs uppercase tracking-normal px-6 py-3 rounded-lg border border-primary transition-all flex items-center gap-2"
            >
              <span>VIEW ALL PROJECTS</span>
              <span>➔</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-primary border border-primary rounded-2xl overflow-hidden group hover:border-brand/60 transition-all shadow-xl">
                <div className="relative h-48 overflow-hidden bg-topbar">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 right-3 bg-topbar/80 backdrop-blur-md text-brand text-xs px-3 py-1 rounded-full font-semibold border border-primary">
                    {proj.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-brand-foreground mb-1">{proj.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">Custom Corporate Website & CMS Integration</p>
                  <Button variant="unstyled" 
                    onClick={() => showAlert(`Opening live preview for ${proj.title}`)}
                    className="text-brand hover:text-brand text-xs font-bold flex items-center gap-2"
                  >
                    <span>View Case Study</span>
                    <span>➔</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of a Professional Website */}
      <section className="py-20 px-4 lg:px-12 bg-primary/50 border-t border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand font-bold tracking-normal text-xs uppercase">Why Go Digital</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-normal">Benefits of a Professional Website</h2>
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 bg-primary p-4 rounded-xl border border-primary">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-sm font-semibold text-border">Builds credibility and trust with prospective clients</span>
              </div>
              <div className="flex items-center gap-3 bg-primary p-4 rounded-xl border border-primary">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-sm font-semibold text-border">Attracts more customers through Google & social search</span>
              </div>
              <div className="flex items-center gap-3 bg-primary p-4 rounded-xl border border-primary">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-sm font-semibold text-border">Works 24/7 for your business even outside working hours</span>
              </div>
              <div className="flex items-center gap-3 bg-primary p-4 rounded-xl border border-primary">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-sm font-semibold text-border">Improves brand visibility and competitive advantage</span>
              </div>
              <div className="flex items-center gap-3 bg-primary p-4 rounded-xl border border-primary">
                <span className="text-brand font-bold text-lg">✓</span>
                <span className="text-sm font-semibold text-border">Increases sales, inquiries and qualified leads</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-gradient-to-br from-brand/20 to-primary p-8 rounded-3xl border border-brand/30 text-center max-w-md w-full shadow-2xl">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-brand-foreground mb-2">Accelerate Growth</h3>
              <p className="text-border text-sm mb-6">Join hundreds of successful businesses across East Africa powered by Image Quest websites.</p>
              <Button variant="unstyled" 
                onClick={() => setIsConsultationModalOpen(true)}
                className="w-full bg-brand hover:bg-brand text-brand-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-brand/30 transition-all"
              >
                Start Your Project Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 px-4 lg:px-12 bg-topbar border-t border-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-brand font-bold tracking-normal text-xs uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-normal">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-primary border border-primary rounded-xl overflow-hidden">
                <Button variant="unstyled" 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-brand-foreground flex justify-between items-center gap-4 hover:text-brand transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-brand font-mono text-xl">{openFaq === idx ? '−' : '+'}</span>
                </Button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-border border-t border-primary pt-4 leading-relaxed bg-topbar/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 px-4 lg:px-12 bg-gradient-to-r from-brand to-brand text-brand-foreground">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-normal">Ready To Build Your Website?</h2>
            <p className="text-brand text-sm sm:text-base max-w-xl">
              Let's create a website that represents your brand and drives real results. Contact our team in Nairobi today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="unstyled" 
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-topbar hover:bg-primary text-brand-foreground font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
            >
              <span>📅</span>
              <span>GET A FREE CONSULTATION</span>
            </Button>
            <a 
              href="tel:+254720791677"
              className="bg-brand-foreground hover:bg-muted text-topbar font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all"
            >
              <span>📞</span>
              <span>CALL / WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Floating WhatsApp Quick Chat Button */}
      

      {/* Consultation / Quote Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-[60] bg-topbar/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-primary border border-primary rounded-3xl max-w-lg w-full p-8 relative shadow-2xl">
            <Button variant="unstyled" 
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-brand-foreground font-bold text-xl"
            >
              ✕
            </Button>
            <div className="mb-6">
              <span className="text-brand font-bold text-xs uppercase tracking-normal">Get Started</span>
              <h3 className="text-2xl font-black text-brand-foreground mt-1">Request a Free Consultation</h3>
              <p className="text-muted-foreground text-xs mt-1">Fill in your details and our team will contact you within 2 hours.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsConsultationModalOpen(false); showAlert("Thank you! Your request has been received. Our team will contact you shortly."); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-border mb-1">Full Name</label>
                <input required type="text" className="w-full bg-topbar border border-primary rounded-lg px-4 py-3 text-brand-foreground text-sm focus:border-brand focus:outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-border mb-1">Email Address</label>
                <input required type="email" className="w-full bg-topbar border border-primary rounded-lg px-4 py-3 text-brand-foreground text-sm focus:border-brand focus:outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-border mb-1">Phone Number</label>
                <input required type="tel" className="w-full bg-topbar border border-primary rounded-lg px-4 py-3 text-brand-foreground text-sm focus:border-brand focus:outline-none" placeholder="+254 700 000000" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-border mb-1">Selected Package / Service</label>
                <select defaultValue={selectedPackage} className="w-full bg-topbar border border-primary rounded-lg px-4 py-3 text-brand-foreground text-sm focus:border-brand focus:outline-none">
                  <option value="starter">Starter Website (KES 29,999)</option>
                  <option value="business" >Business Website (KES 59,999)</option>
                  <option value="ecommerce">E-Commerce Website (KES 89,999)</option>
                  <option value="custom">Custom Web Application</option>
                </select>
              </div>
              <Button variant="unstyled" type="submit" className="w-full bg-brand hover:bg-brand text-brand-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-brand/30 transition-all mt-2">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Custom Alert Modal */}
      {modalMessage && (
        <div className="fixed inset-0 z-[60] bg-topbar/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-primary border border-primary rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 bg-brand/20 text-brand rounded-full flex items-center justify-center text-xl mx-auto font-bold">ℹ</div>
            <h4 className="text-xl font-bold text-brand-foreground">Image Quest Graphics</h4>
            <p className="text-sm text-border">{modalMessage}</p>
            <Button variant="unstyled" 
              onClick={() => setModalMessage(null)}
              className="w-full bg-brand hover:bg-brand text-brand-foreground font-bold py-2.5 rounded-lg text-sm transition-all shadow"
            >
              OK
            </Button>
          </div>
        </div>
      )}

    </div>
  );
}