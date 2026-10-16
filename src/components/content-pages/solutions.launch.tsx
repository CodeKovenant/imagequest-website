import pageImage0 from "@/assets/imported-pages/image-39e00a56714562d7.asset.json";
import pageImage1 from "@/assets/imported-pages/image-28efc381807730ce.asset.json";
import pageImage2 from "@/assets/hero-reception.jpg";
import pageImage3 from "@/assets/imported-pages/image-4ef0712a90eac187.asset.json";
import pageImage4 from "@/assets/imported-pages/image-5254fb5201dac950.asset.json";
import pageImage5 from "@/assets/imported-pages/image-0ac6832c6e061521.asset.json";
import pageImage6 from "@/assets/imported-pages/image-a3aa3cb58725c62c.asset.json";
import pageImage7 from "@/assets/imported-pages/image-6ee61cca73549f6d.asset.json";
import pageImage8 from "@/assets/imported-pages/image-a73ececb152eeb35.asset.json";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Youtube, 
  ChevronDown, ChevronRight, Menu, X, ArrowRight, Check, Plus, Minus, 
  HelpCircle, MessageCircle, Calendar, ExternalLink, Globe, Award, 
  Clock as ClockIcon, Shield, Layers, Users, Sparkles, Send
} from 'lucide-react';

export default function ContentPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'brand' | 'digital' | 'print'>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const openModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-topbar text-muted font-sans selection:bg-brand selection:text-brand-foreground">
      <SiteHeader />


      {}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary via-topbar to-topbar pt-8 pb-20 border-b border-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-medium">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <Link to="/solutions" className="hover:text-brand transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-brand font-semibold">Business Launch Package</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/25 text-brand text-xs font-semibold tracking-normal uppercase">
                <Sparkles className="w-3.5 h-3.5" /> All-in-One Startup Solution
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal text-brand-foreground uppercase leading-[1.1]">
                Business <br />
                <span className="bg-gradient-to-r from-brand via-brand to-brand bg-clip-text text-transparent">Launch Package</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-border">
                Everything You Need To Launch Your Business Professionally.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                A complete branding solution for startups and entrepreneurs who want to start strong, look professional and build confidence from day one.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button variant="unstyled" 
                  onClick={() => openModal('Get Started Today - Launch Package')}
                  className="w-full sm:w-auto bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand text-brand-foreground font-bold px-8 py-4 rounded-xl shadow-lg shadow-brand/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base uppercase tracking-normal"
                >
                  Get Started Today <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="unstyled" 
                  onClick={() => openModal('View Sample Brand Kit')}
                  className="w-full sm:w-auto bg-primary hover:bg-primary border border-muted-foreground text-border font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base"
                >
                  <ExternalLink className="w-4 h-4 text-brand" /> View Sample Brand Kit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-primary border border-primary rounded-3xl p-4 shadow-2xl overflow-hidden group">
                <img 
                  src={pageImage2} 
                  alt="Business Launch Package Branding Mockup" 
                  className="w-full h-[380px] sm:h-[450px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-lg"
                  onError={(e)=>{(e.target as HTMLImageElement).src=pageImage8.url}}
                />
                <div className="absolute bottom-6 left-6 right-6 bg-topbar/80 backdrop-blur-md border border-primary p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/40 flex items-center justify-center text-brand font-bold">iQ</div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-foreground">Complete Brand Kit</h4>
                      <p className="text-xs text-muted-foreground">Logo, Stationery & Digital Assets</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-brand text-brand-foreground rounded-full">Popular</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar relative border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center mb-16">
          <span className="text-brand font-bold text-xs uppercase tracking-normal mb-3 block">Why Choose Our Launch Package</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-foreground tracking-normal uppercase">Start Your Business The Right Way</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-6 h-6 text-brand" />,
              title: "Professional Start",
              desc: "Build a credible brand identity from day one."
            },
            {
              icon: <Layers className="w-6 h-6 text-brand" />,
              title: "Everything You Need",
              desc: "All essential branding materials in one package."
            },
            {
              icon: <ClockIcon className="w-6 h-6 text-brand" />,
              title: "Save Time & Money",
              desc: "We handle everything while you focus on your business."
            },
            {
              icon: <Shield className="w-6 h-6 text-brand" />,
              title: "Stronger First Impression",
              desc: "Look professional and attract more customers."
            },
            {
              icon: <Globe className="w-6 h-6 text-brand" />,
              title: "Consistent Brand Identity",
              desc: "Cohesive branding across all touchpoints."
            },
            {
              icon: <Users className="w-6 h-6 text-brand" />,
              title: "Ongoing Support",
              desc: "We're with you as you grow and succeed."
            }
          ].map((item, index) => (
            <div key={index} className="bg-primary/60 border border-primary/80 hover:border-brand/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-20 bg-primary/50 border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center mb-12">
          <span className="text-brand font-bold text-xs uppercase tracking-normal mb-3 block">What's Included</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-foreground tracking-normal uppercase mb-6">Everything You Need To Launch With Confidence</h2>
          
          {/* Category filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'brand', label: 'Brand & Stationery' },
              { id: 'digital', label: 'Digital & Web' },
              { id: 'print', label: 'Office & Marketing' },
            ].map((tab) => (
              <Button variant="unstyled"
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-xs tracking-normal uppercase transition-all ${
                  activeTab === tab.id 
                    ? 'bg-brand text-brand-foreground shadow-lg shadow-brand/30' 
                    : 'bg-primary text-border hover:bg-muted-foreground'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: 'brand',
              title: "Brand Identity",
              img: pageImage6.url,
              items: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
            },
            {
              category: 'brand',
              title: "Stationery Essentials",
              img: pageImage5.url,
              items: ["Business Cards", "Letterheads", "Compliment Slips", "Envelope Design"]
            },
            {
              category: 'digital',
              title: "Digital Presence",
              img: pageImage0.url,
              items: ["5-Page Website", "Domain Registration", "Business Email Setup", "Social Media Setup"]
            },
            {
              category: 'digital',
              title: "Business Visibility",
              img: pageImage3.url,
              items: ["Google Business Profile", "Basic On-page SEO", "Online Directory Setup", "QR Code Integration"]
            },
            {
              category: 'print',
              title: "Office Branding",
              img: pageImage1.url,
              items: ["Reception Signage Design", "Office Signage", "Branded Wall Graphics", "Door & Room Signs"]
            },
            {
              category: 'print',
              title: "Marketing Materials",
              img: pageImage4.url,
              items: ["Company Profile (8 Pages)", "Brochure Design", "Flyer / Leaflet Design", "Presentation Template"]
            }
          ]
          .filter(card => activeTab === 'all' || card.category === activeTab)
          .map((card, index) => (
            <div key={index} className="bg-primary border border-primary rounded-3xl overflow-hidden shadow-xl hover:border-brand/50 transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e)=>{(e.target as HTMLImageElement).src=pageImage7.url}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-topbar via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-brand-foreground tracking-normal">{card.title}</h3>
              </div>
              <div className="p-6 space-y-3">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-border">
                    <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center mb-16">
          <span className="text-brand font-bold text-xs uppercase tracking-normal mb-3 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-foreground tracking-normal uppercase">Simple. Strategic. Seamless.</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {[
            { step: "01", title: "Discover", desc: "We understand your business, goals and target audience." },
            { step: "02", title: "Plan", desc: "We develop a strategic brand roadmap tailored to your needs." },
            { step: "03", title: "Design", desc: "Our creatives craft your brand identity and all essential assets." },
            { step: "04", title: "Develop", desc: "We build your website and set up your digital presence." },
            { step: "05", title: "Deliver", desc: "You receive a complete brand kit ready to launch." },
            { step: "06", title: "Support", desc: "We provide guidance and support as you grow." }
          ].map((item, index) => (
            <div key={index} className="bg-primary/80 border border-primary p-6 rounded-2xl relative flex flex-col items-center text-center group hover:border-brand/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand text-brand-foreground font-black text-lg flex items-center justify-center mb-4 shadow-lg shadow-brand/30">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-brand-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-20 bg-primary/40 border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Included in Detail Checklist */}
          <div className="lg:col-span-4 bg-primary border border-primary rounded-3xl p-8 shadow-xl">
            <h3 className="text-lg font-bold text-brand-foreground mb-6 uppercase tracking-normal border-b border-primary pb-4">Included in Detail</h3>
            <div className="space-y-4">
              {[
                "Logo concepts (3 options)",
                "Final logo files (AI, EPS, PNG, JPG, PDF)",
                "Brand style guide (mini)",
                "Business cards (double sided)",
                "Letterheads & envelopes",
                "5-Page responsive website",
                "1 Year domain registration",
                "1 Year business email setup (5 users)",
                "Google Business Profile setup",
                "Company profile (8 pages)",
                "Brochure design (tri-fold)",
                "Flyer / leaflet design",
                "Social media pages setup (FB, IG, LinkedIn)",
                "Basic on-page SEO setup"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-border">
                  <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Investment Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-primary via-primary to-topbar border-2 border-brand/60 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-brand text-brand-foreground font-bold text-[10px] uppercase tracking-normal px-4 py-1.5 rounded-bl-xl">
              Most Popular
            </div>
            
            <div>
              <span className="text-xs font-bold text-brand uppercase tracking-normal block mb-2">Investment</span>
              <div className="text-3xl lg:text-4xl font-black text-brand-foreground tracking-normal my-4">
                <span className="text-lg text-brand mr-1">KES</span> 49,999
              </div>
              <p className="text-xs text-muted-foreground font-medium mb-8">One-time Payment</p>

              <div className="bg-topbar/80 border border-primary rounded-2xl p-6 text-left mb-8 space-y-3">
                <h4 className="text-xs font-bold text-brand uppercase tracking-normal mb-2">Perfect For:</h4>
                {["Startups", "New Businesses", "Entrepreneurs", "Small Enterprises"].map((target, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-border">
                    <Check className="w-4 h-4 text-brand" />
                    <span>{target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button variant="unstyled" 
                onClick={() => openModal('Get Started Now - KES 49,999 Package')}
                className="w-full bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand text-brand-foreground font-bold py-4 rounded-xl shadow-lg shadow-brand/30 uppercase text-sm tracking-normal transition-all transform hover:-translate-y-0.5"
              >
                Get Started Now
              </Button>
              <p className="text-[11px] text-muted-foreground mt-4">Flexible payment options available.</p>
            </div>
          </div>

          {/* Right Side: Frequently Asked Questions */}
          <div className="lg:col-span-4 bg-primary border border-primary rounded-3xl p-8 shadow-xl">
            <h3 className="text-lg font-bold text-brand-foreground mb-6 uppercase tracking-normal border-b border-primary pb-4">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              {[
                {
                  q: "How long does it take to complete the package?",
                  a: "Typically, 10-15 working days depending on the responsiveness in providing content and approvals."
                },
                {
                  q: "Can I customize the package?",
                  a: "Yes! You can tailor specific branding or digital assets to fit your precise enterprise needs."
                },
                {
                  q: "Do you help with printing and installation?",
                  a: "We offer complete physical print and signage installation services across Kenya."
                },
                {
                  q: "Is hosting included?",
                  a: "Yes, 1 year of high-speed secure web hosting and domain registration is fully included."
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "We provide dedicated ongoing technical support and maintenance packages post-launch."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-primary rounded-2xl overflow-hidden bg-topbar/60">
                  <Button variant="unstyled" 
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left font-semibold text-sm text-border flex justify-between items-center hover:text-brand transition-colors"
                  >
                    <span>{faq.q}</span>
                    {activeFaq === idx ? <Minus className="w-4 h-4 text-brand shrink-0" /> : <Plus className="w-4 h-4 text-brand shrink-0" />}
                  </Button>
                  {activeFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-primary pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-primary flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Still have questions?</span>
              <a href="https://wa.me/254720791677" target="_blank" rel="noreferrer" className="text-brand hover:text-brand font-bold flex items-center gap-1.5">
                Chat with us on WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {}
      <section className="py-16 bg-gradient-to-r from-brand via-brand to-brand text-brand-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-5 text-center lg:text-left flex-col lg:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-brand-foreground/10 backdrop-blur-md border border-brand-foreground/20 flex items-center justify-center shrink-0 shadow-lg">
              <Calendar className="w-8 h-8 text-brand-foreground" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-normal">Ready To Launch Your Business The Right Way?</h2>
              <p className="text-brand text-sm mt-1">Let's build a brand that sets you apart from the competition.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Button variant="unstyled" 
              onClick={() => openModal('Book a Free Consultation')}
              className="bg-topbar hover:bg-primary text-brand-foreground font-bold px-7 py-4 rounded-xl shadow-xl transition-all uppercase text-sm tracking-normal flex items-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-brand" /> Book A Free Consultation
            </Button>
            <a 
              href="tel:+254720791677"
              className="bg-brand-foreground hover:bg-brand text-topbar font-bold px-7 py-4 rounded-xl shadow-xl transition-all uppercase text-sm tracking-normal flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-brand" /> Call / WhatsApp
            </a>
          </div>
        </div>
      </section>

      {}
      <SiteFooter />

      {}
      

      {}
      {modalOpen && (
        <div className="fixed inset-0 z-[60] bg-topbar/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <div className="bg-primary border border-primary rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95">
            <Button variant="unstyled" 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-brand-foreground p-2 rounded-xl bg-primary"
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand/20 text-brand flex items-center justify-center font-bold">iQ</div>
              <div>
                <h3 className="text-lg font-bold text-brand-foreground">{modalTitle}</h3>
                <p className="text-xs text-muted-foreground">Image Quest Graphics Ltd</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your request has been submitted successfully. Our team will contact you shortly.'); setModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-border mb-1">Your Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-topbar border border-primary rounded-xl px-4 py-3 text-sm text-muted focus:outline-none focus:border-brand" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-border mb-1">Email Address</label>
                <input required type="email" placeholder="john@company.com" className="w-full bg-topbar border border-primary rounded-xl px-4 py-3 text-sm text-muted focus:outline-none focus:border-brand" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-border mb-1">Phone Number (+254...)</label>
                <input required type="tel" placeholder="+254 700 000000" className="w-full bg-topbar border border-primary rounded-xl px-4 py-3 text-sm text-muted focus:outline-none focus:border-brand" />
              </div>
              <Button variant="unstyled" 
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-brand to-brand hover:from-brand hover:to-brand text-brand-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-brand/30 uppercase text-sm tracking-normal flex items-center justify-center gap-2"
              >
                Submit Request <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}