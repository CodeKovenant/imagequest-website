import pageImage0 from "@/assets/imported-pages/image-ce3970ab4d40d4bf.asset.json";
import pageImage1 from "@/assets/imported-pages/image-614f5bfc7a5dd630.asset.json";
import pageImage2 from "@/assets/imported-pages/image-c284abc817c5d828.asset.json";
import pageImage3 from "@/assets/imported-pages/image-d87e6ceb8c684af0.asset.json";
import pageImage4 from "@/assets/imported-pages/image-ae43207db4e46f15.asset.json";
import pageImage5 from "@/assets/imported-pages/image-f63c5ea721e8e36c.asset.json";
import pageImage6 from "@/assets/imported-pages/image-2296fcf47ae23ca0.asset.json";
import pageImage7 from "@/assets/imported-pages/image-77d96f86f7778aaa.asset.json";
import pageImage8 from "@/assets/imported-pages/image-90871ea65f44c790.asset.json";
import pageImage9 from "@/assets/imported-pages/image-8a7899c415007c32.asset.json";
import pageImage10 from "@/assets/portfolio-brochures.jpg";
import pageImage11 from "@/assets/portfolio-brochures.jpg";
import pageImage12 from "@/assets/portfolio-brochures.jpg";
import pageImage13 from "@/assets/portfolio-brochures.jpg";
import pageImage14 from "@/assets/imported-pages/image-5be9789778825e30.asset.json";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, 
  ChevronDown, Search, Check, ArrowRight, Award, Clock as ClockIcon, 
  Layers, Sliders, Cpu, ShieldCheck, MessageSquare, Palette, FileCheck, 
  Printer, CheckCircle2, Truck, HelpCircle, ChevronUp, ExternalLink, 
  X, Menu, Send, Sparkles
} from 'lucide-react';

export default function ContentPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceName, setQuoteServiceName] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const openQuoteModal = (service = 'General Printing') => {
    setQuoteServiceName(service);
    setQuoteModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const solutions = [
    {
      title: "Business Stationery",
      image: pageImage9.url,
      items: ["Business Cards", "Compliment Slips", "Letterheads", "Envelopes"]
    },
    {
      title: "Marketing Materials",
      image: pageImage4.url,
      items: ["Flyers & Leaflets", "Catalogues", "Brochures", "Posters"]
    },
    {
      title: "Corporate Documents",
      image: pageImage14.url,
      items: ["Annual Reports", "Presentation Folders", "Company Profiles", "Proposals"]
    },
    {
      title: "Large Format Printing",
      image: pageImage7.url,
      items: ["Banners", "Pull-up Banners", "Roll-up Banners", "Backdrops"]
    },
    {
      title: "Packaging & Labels",
      image: pageImage13,
      items: ["Product Labels", "Packaging Boxes", "Stickers", "Tag & Hang Tags"]
    },
    {
      title: "Books & Booklets",
      image: pageImage1.url,
      items: ["Booklets", "Notebooks", "Magazines", "Perfect Binding"]
    },
    {
      title: "Branded Materials",
      image: pageImage2.url,
      items: ["Presentation Folders", "ID Cards", "Branded Envelopes", "Stamps"]
    },
    {
      title: "Special Finishing",
      image: pageImage11,
      items: ["Spot UV", "Foil Stamping", "Embossing / Debossing", "Lamination"]
    }
  ];

  const recentProjects = [
    { title: "Company Profile", image: pageImage3.url },
    { title: "Roll-up Banners", image: pageImage6.url },
    { title: "Brochures", image: pageImage0.url },
    { title: "Business Cards", image: pageImage8.url },
    { title: "Packaging Boxes", image: pageImage12 },
    { title: "Stickers", image: pageImage10 }
  ];

  const faqs = [
    { q: "What file formats do you accept?", a: "We accept high-resolution PDF, AI, EPS, PSD, and TIFF formats with at least 300 DPI and appropriate bleed settings." },
    { q: "How long does printing take?", a: "Standard turnarounds range from 24 to 72 hours depending on job volume and finishing complexity. Express same-day options are available." },
    { q: "Can you help with the design?", a: "Yes! Our professional in-house design team can refine your existing artwork or create brand-new custom concepts from scratch." },
    { q: "Do you offer delivery?", a: "We offer reliable delivery services across Nairobi and countrywide shipping throughout Kenya right to your doorstep." },
    { q: "What is your minimum order quantity?", a: "Our MOQs vary by product category, ranging from small digital runs of 50 pieces to larger offset wholesale volumes." }
  ];

  return (
    <div className="min-h-screen bg-primary text-muted font-sans selection:bg-topbar selection:text-brand-foreground">
      <SiteHeader />


      {}
      <section className="relative bg-gradient-to-b from-topbar via-primary to-topbar py-12 lg:py-20 px-4 lg:px-12 border-b border-primary overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-topbar/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-brand-foreground">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-brand-foreground">Services</Link>
            <span>/</span>
            <span className="text-topbar font-semibold">Printing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-extrabold uppercase tracking-normal text-topbar">
                PRINTING
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-[1.1]">
                Print That Speaks.<br />
                <span className="text-topbar">Quality That Lasts.</span>
              </h1>
              <p className="text-border text-base sm:text-lg leading-relaxed max-w-xl">
                From business essentials to large format prints, we deliver high-quality, vibrant and professional printing that elevates your brand and gets results.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="unstyled" 
                  onClick={() => openQuoteModal('Hero - Free Print Quote')}
                  className="bg-topbar hover:bg-topbar text-brand-foreground px-7 py-3.5 rounded-xl font-bold text-sm tracking-normal shadow-xl shadow-[#FF5722]/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5"
                >
                  <Printer className="w-4 h-4" />
                  GET A FREE PRINT QUOTE
                </Button>
                <Button variant="unstyled" 
                  onClick={() => {
                    const el = document.getElementById('recent-projects');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-primary hover:bg-muted-foreground text-brand-foreground px-7 py-3.5 rounded-xl font-bold text-sm tracking-normal border border-muted-foreground transition-all flex items-center gap-2.5"
                >
                  VIEW PRINT SAMPLES
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary bg-topbar group">
                <img 
                  src={pageImage5.url} 
                  alt="Professional Printing showcase" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-topbar/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-primary/90 backdrop-blur-md border border-primary p-4 rounded-xl w-full flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">FEATURED COLLECTION</p>
                      <h4 className="font-bold text-sm text-brand-foreground">Corporate Brand Stationery & Large Format</h4>
                    </div>
                    <span className="bg-topbar text-brand-foreground text-xs px-3 py-1 rounded-full font-bold">PRO GRADE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-brand-foreground text-primary py-12 px-4 lg:px-12 border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Award, title: "Premium Quality", desc: "Crisp, vibrant and professional finishes." },
            { icon: ClockIcon, title: "Fast Turnaround", desc: "On-time delivery without compromising quality." },
            { icon: Layers, title: "Wide Range", desc: "Everything you need under one roof." },
            { icon: Sliders, title: "Custom Solutions", desc: "Tailored prints to match your brand." },
            { icon: Cpu, title: "Advanced Equipment", desc: "Modern technology for superior results." },
            { icon: ShieldCheck, title: "Reliable Support", desc: "We're with you from design to delivery." }
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4 bg-card rounded-2xl hover:bg-brand/50 transition-colors border border-muted group">
                <div className="w-12 h-12 rounded-xl bg-brand text-topbar flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1 text-primary">{feat.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {}
      <section className="py-16 px-4 lg:px-12 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-normal text-topbar">OUR PRINTING SOLUTIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-3">Professional Printing For Every Need</h2>
            <div className="w-16 h-1 bg-topbar mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, index) => (
              <div 
                key={index} 
                className="bg-topbar border border-primary rounded-2xl overflow-hidden hover:border-topbar/50 transition-all duration-300 flex flex-col group shadow-lg"
              >
                <div className="relative h-44 overflow-hidden bg-primary">
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                    onError={(e)=>{
                      (e.target as HTMLImageElement).src = pageImage7.url;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-topbar via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-bold text-lg text-brand-foreground group-hover:text-topbar transition-colors">{sol.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 mb-4">
                    {sol.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-xs text-border">
                        <Check className="w-3.5 h-3.5 text-topbar flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="unstyled" 
                    onClick={() => openQuoteModal(sol.title)}
                    className="w-full mt-auto bg-primary hover:bg-topbar text-border hover:text-brand-foreground py-2.5 rounded-xl text-xs font-bold transition-all border border-primary hover:border-topbar flex items-center justify-center gap-2"
                  >
                    <span>Request {sol.title} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="bg-topbar py-16 px-4 lg:px-12 border-y border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-normal text-topbar">OUR PROCESS</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-3">Simple Steps. Exceptional Results.</h2>
            <div className="w-16 h-1 bg-topbar mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {[
              { step: "01", title: "Consult", icon: MessageSquare, desc: "Share your requirements and we advise on the best options." },
              { step: "02", title: "Design", icon: Palette, desc: "Our team designs or refines artwork to perfection." },
              { step: "03", title: "Proof", icon: FileCheck, desc: "We share a digital proof for your review and approval." },
              { step: "04", title: "Print", icon: Printer, desc: "We print using high-quality materials and advanced equipment." },
              { step: "05", title: "Finish", icon: CheckCircle2, desc: "We add finishing touches to ensure a professional look and feel." },
              { step: "06", title: "Deliver", icon: Truck, desc: "Your order is carefully packed and delivered on time." }
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-primary border border-primary p-6 rounded-2xl flex flex-col items-center text-center relative group hover:border-topbar/50 transition-all">
                  <div className="absolute -top-3 bg-topbar text-brand-foreground text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
                    {p.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary text-topbar flex items-center justify-center mb-4 mt-2 group-hover:bg-topbar group-hover:text-brand-foreground transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base mb-2 text-brand-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section id="recent-projects" className="py-16 px-4 lg:px-12 bg-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Recent Print Projects */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-primary pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-normal text-topbar">PORTFOLIO</span>
                <h3 className="text-2xl font-black text-brand-foreground">Recent Print Projects</h3>
              </div>
              <Button variant="unstyled" 
                onClick={() => showToast("Loading all projects...")}
                className="bg-primary hover:bg-muted-foreground text-border text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-muted-foreground"
              >
                VIEW ALL PROJECTS
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recentProjects.map((proj, idx) => (
                <div key={idx} className="group relative bg-topbar rounded-xl overflow-hidden border border-primary shadow-md">
                  <div className="h-40 overflow-hidden bg-primary">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                    />
                  </div>
                  <div className="p-3 bg-topbar">
                    <h4 className="font-bold text-sm text-center text-border">{proj.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why Businesses Choose Us */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-b border-primary pb-4">
              <span className="text-xs font-bold uppercase tracking-normal text-topbar">ADVANTAGES</span>
              <h3 className="text-2xl font-black text-brand-foreground">Why Businesses Choose Us</h3>
            </div>

            <div className="bg-topbar border border-primary p-6 rounded-2xl flex flex-col gap-4">
              {[
                "Consistent high-quality prints",
                "Competitive pricing",
                "Wide range of materials & finishes",
                "Eco-friendly printing options",
                "Attention to detail",
                "Trusted by 500+ businesses"
              ].map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/20 text-topbar flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-border">{reason}</span>
                </div>
              ))}
            </div>

            {/* Need Help Choosing Box */}
            <div className="bg-gradient-to-br from-topbar to-primary border border-primary p-6 rounded-2xl flex flex-col gap-4">
              <div>
                <span className="text-xs text-topbar font-extrabold uppercase">NEED HELP CHOOSING?</span>
                <p className="text-xs text-muted-foreground mt-1">Our experts will help you choose the right print solution for your goals.</p>
              </div>
              <Button variant="unstyled" 
                onClick={() => openQuoteModal('Expert Consultation')}
                className="bg-topbar hover:bg-topbar text-brand-foreground py-3 rounded-xl font-bold text-xs tracking-normal flex items-center justify-center gap-2 shadow-lg shadow-[#FF5722]/20 transition-all"
              >
                <span>TALK TO AN EXPERT</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {}
      <section className="bg-topbar py-16 px-4 lg:px-12 border-t border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-normal text-topbar">SUPPORT</span>
              <h3 className="text-2xl font-black text-brand-foreground">Frequently Asked Questions</h3>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-primary border border-primary rounded-xl overflow-hidden transition-all">
                  <Button variant="unstyled" 
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between font-semibold text-sm text-border hover:text-topbar"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <ChevronUp className="w-4 h-4 text-topbar" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </Button>
                  {activeFaq === idx && (
                    <div className="p-4 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-primary/60 bg-primary/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Quote Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-primary border border-primary p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-black text-brand-foreground">Have a unique project in mind?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Let's bring your ideas to life with bespoke custom printing solutions tailored to your brand.</p>
              </div>

              <Button variant="unstyled" 
                onClick={() => openQuoteModal('Unique Custom Project')}
                className="w-full bg-topbar hover:bg-topbar text-brand-foreground py-3.5 rounded-xl font-bold text-sm tracking-normal flex items-center justify-center gap-2 shadow-xl shadow-[#FF5722]/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>REQUEST A CUSTOM QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-topbar to-topbar py-12 px-4 lg:px-12 text-brand-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-foreground/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
              <Printer className="w-7 h-7 text-brand-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-black">Ready To Print Your Brand To Life?</h3>
              <p className="text-brand-foreground/90 text-sm mt-1">Get high-quality, impactful prints that get you noticed.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="unstyled" 
              onClick={() => openQuoteModal('CTA Banner Free Quote')}
              className="bg-topbar hover:bg-topbar text-brand-foreground px-6 py-3.5 rounded-xl font-bold text-sm tracking-normal shadow-lg transition-all"
            >
              GET A FREE QUOTE
            </Button>
            <a 
              href="tel:+254720791677"
              className="bg-brand-foreground/20 hover:bg-brand-foreground/30 text-brand-foreground px-6 py-3.5 rounded-xl font-bold text-sm tracking-normal backdrop-blur-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL / WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

      {}
      <SiteFooter />

      {/* Interactive Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[60] bg-topbar/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-primary border border-primary rounded-2xl w-full max-w-lg p-6 relative shadow-2xl animate-scaleIn">
            <Button variant="unstyled" 
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-brand-foreground p-2"
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="mb-6">
              <span className="text-xs font-bold text-topbar uppercase">INSTANT ESTIMATE</span>
              <h3 className="text-xl font-black text-brand-foreground mt-1">Request Quote: {quoteServiceName}</h3>
              <p className="text-xs text-muted-foreground mt-1">Fill out the quick details below and our team will get back to you shortly.</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              setQuoteModalOpen(false);
              showToast("Quote request submitted successfully! We will contact you soon.");
            }} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-border mb-1">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-topbar border border-primary rounded-xl px-4 py-2.5 text-sm text-brand-foreground focus:outline-none focus:border-topbar" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-border mb-1">Email Address</label>
                  <input required type="email" placeholder="john@company.com" className="w-full bg-topbar border border-primary rounded-xl px-4 py-2.5 text-sm text-brand-foreground focus:outline-none focus:border-topbar" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-border mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+254 700 000000" className="w-full bg-topbar border border-primary rounded-xl px-4 py-2.5 text-sm text-brand-foreground focus:outline-none focus:border-topbar" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-border mb-1">Project Details & Quantity</label>
                <textarea rows={3} placeholder="Please specify size, quantities, paper finish..." className="w-full bg-topbar border border-primary rounded-xl px-4 py-2.5 text-sm text-brand-foreground focus:outline-none focus:border-topbar"></textarea>
              </div>
              <Button variant="unstyled" type="submit" className="w-full bg-topbar hover:bg-topbar text-brand-foreground py-3 rounded-xl font-bold text-sm tracking-normal flex items-center justify-center gap-2 mt-2 shadow-lg shadow-[#FF5722]/30 transition-all">
                <Send className="w-4 h-4" />
                <span>SUBMIT QUOTE REQUEST</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}