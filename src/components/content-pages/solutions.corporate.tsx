import pageImage0 from "@/assets/imported-pages/image-b950d2742795ecf0.asset.json";
import pageImage1 from "@/assets/imported-pages/image-6fed896437d7d1ee.asset.json";
import pageImage2 from "@/assets/imported-pages/image-220cd06495dd6a9c.asset.json";
import pageImage3 from "@/assets/imported-pages/image-320f059a74eba19e.asset.json";
import pageImage4 from "@/assets/imported-pages/image-6e57123d2bf53878.asset.json";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, 
  Menu, X, ChevronDown, ChevronUp, Check, ArrowRight, ShieldCheck, 
  TrendingUp, Users, Zap, Clock3, Award, MessageCircle, Calendar, 
  ExternalLink, Building2, Briefcase, FileText, HelpCircle, Star
} from 'lucide-react';

export default function ContentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedBilling, setSelectedBilling] = useState('monthly');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the Corporate Brand Partnership work?",
      a: "We act as your outsourced branding department. You get dedicated creative hours, marketing strategy, and execution without the overhead of hiring an in-house team."
    },
    {
      q: "Can we customize the retainer package?",
      a: "Yes! While our Bronze, Silver, and Gold packages fit most organizations, we can tailor a bespoke scope of work depending on your monthly volume and multi-branch requirements."
    },
    {
      q: "What if we need more design hours?",
      a: "Additional hours outside your monthly retainer can be added on-demand at discounted preferential hourly rates or rolled over depending on your agreement."
    },
    {
      q: "Is there a minimum contract period?",
      a: "Our retainers operate on a flexible quarterly or annual commitment to ensure we can build robust, long-term brand equity and consistent marketing momentum."
    },
    {
      q: "How do we get started?",
      a: "Simply click 'Partner With Us' or 'Book a Consultation'. We'll schedule an introductory discovery call to analyze your brand goals and recommend the ideal partnership tier."
    }
  ];

  return (
    <div className="min-h-screen bg-topbar text-muted font-sans selection:bg-brand selection:text-brand-foreground">
      <SiteHeader />


      {}
      <header className="relative bg-topbar overflow-hidden pt-12 pb-24 border-b border-primary">
        {/* Background Overlay image mockup simulation */}
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(pageImage0.url)` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-topbar via-topbar/90 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-xs uppercase tracking-normal text-muted-foreground mb-3 font-semibold">
            Home &gt; Solutions &gt; <span className="text-brand">Corporate Brand Partnership</span>
          </div>

          <div className="max-w-3xl mt-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-normal text-brand-foreground mb-2 leading-none">
              CORPORATE
            </h1>
            <h1 className="text-4xl sm:text-6xl font-black tracking-normal text-brand mb-6 leading-none">
              BRAND PARTNERSHIP
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-border mb-4">
              Your Outsourced Branding Department
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              A strategic partnership that gives your organization consistent branding, marketing support and creative excellence without the overhead of an in-house team.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="bg-brand hover:bg-brand text-brand-foreground font-bold text-sm px-8 py-4 rounded transition-all shadow-lg shadow-brand/30 flex items-center gap-2">
                PARTNER WITH US <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#pricing" className="bg-primary/80 hover:bg-muted-foreground text-brand-foreground font-bold text-sm px-8 py-4 rounded border border-muted-foreground transition-all flex items-center gap-2">
                VIEW RETAINER PLANS <ChevronDown className="w-4 h-4 text-brand" />
              </a>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 relative z-10">
          <div className="bg-topbar border border-primary rounded-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-primary shadow-2xl">
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Users className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-brand-foreground">500+</div>
              <div className="text-xs uppercase tracking-normal text-muted-foreground mt-1">Businesses Served</div>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Clock3 className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-brand-foreground">15+</div>
              <div className="text-xs uppercase tracking-normal text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Award className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-brand-foreground">2,500+</div>
              <div className="text-xs uppercase tracking-normal text-muted-foreground mt-1">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <ShieldCheck className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-brand-foreground">Dedicated</div>
              <div className="text-xs uppercase tracking-normal text-muted-foreground mt-1">Creative Team</div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center pt-4 md:pt-0">
              <Zap className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-brand-foreground">Ongoing</div>
              <div className="text-xs uppercase tracking-normal text-muted-foreground mt-1">Strategic Support</div>
            </div>
          </div>
        </div>
      </header>

      {}
      <section className="py-20 bg-topbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-brand uppercase tracking-normal text-xs font-bold block mb-2">WHY PARTNER WITH IMAGE QUEST?</span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal">
            More Than A Supplier, We're Your Growth Partner
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Consistent Branding",
              desc: "Maintain a strong, consistent brand across all touchpoints.",
              icon: <ShieldCheck className="w-6 h-6 text-brand" />
            },
            {
              title: "Cost Efficient",
              desc: "Fraction of the cost of hiring and managing an internal team.",
              icon: <TrendingUp className="w-6 h-6 text-brand" />
            },
            {
              title: "Strategic Support",
              desc: "Creative + marketing strategy aligned to your business goals.",
              icon: <Briefcase className="w-6 h-6 text-brand" />
            },
            {
              title: "Dedicated Team",
              desc: "A dedicated team that understands your brand.",
              icon: <Users className="w-6 h-6 text-brand" />
            },
            {
              title: "Fast Turnaround",
              desc: "Prioritized workflows and quick delivery.",
              icon: <Zap className="w-6 h-6 text-brand" />
            },
            {
              title: "Scalable Solutions",
              desc: "Flexible support that grows with your business.",
              icon: <Star className="w-6 h-6 text-brand" />
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-topbar border border-primary rounded-xl p-8 hover:border-brand/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar border-y border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-brand uppercase tracking-normal text-xs font-bold block mb-2">WHAT'S INCLUDED</span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal">
            Comprehensive Branding & Marketing Support
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Checklist */}
          <div className="space-y-4">
            {[
              "Brand Strategy & Consulting",
              "Creative Design (Print & Digital)",
              "Marketing Campaign Planning",
              "Social Media Management",
              "Website Management & Updates",
              "SEO & Digital Marketing Support"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-topbar p-4 rounded-lg border border-primary/80">
                <div className="w-6 h-6 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-border font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Center Product Showcase */}
          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-topbar to-topbar rounded-2xl border border-primary shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-brand/5 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 w-full max-w-md">
              <img 
                src={pageImage1.url} 
                alt="Branding Mockup" 
                className="rounded-lg shadow-2xl object-cover w-full h-64 border border-muted-foreground"
                onError={(e) => { e.currentTarget.src = pageImage4.url; }}
              />
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs uppercase tracking-normal font-bold text-brand">Premium Collaterals & Digital Assets</span>
            </div>
          </div>

          {/* Right Checklist */}
          <div className="space-y-4">
            {[
              "Corporate Printing & Signage",
              "Annual Reports & Company Profiles",
              "Promotional Merchandise",
              "Brand Audits & Reporting",
              "Quarterly Review Meetings",
              "Priority Support & Quick Turnaround"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-topbar p-4 rounded-lg border border-primary/80">
                <div className="w-6 h-6 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-border font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-brand uppercase tracking-normal text-xs font-bold block mb-2">HOW IT WORKS</span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal">
            A Simple Partnership Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {[
            { step: "01", title: "Discover", desc: "We understand your business, goals and branding needs." },
            { step: "02", title: "Plan", desc: "We create a tailored branding & marketing plan for you." },
            { step: "03", title: "Execute", desc: "Our team delivers high-quality creative and marketing." },
            { step: "04", title: "Review", desc: "We analyze results and refine for better performance." },
            { step: "05", title: "Grow", desc: "We continuously support your brand growth." }
          ].map((item, idx) => (
            <div key={idx} className="bg-topbar border border-primary rounded-xl p-6 text-center flex flex-col items-center relative group hover:border-brand transition-colors">
              <div className="text-brand font-black text-2xl mb-2">{item.step}</div>
              <h3 className="text-lg font-bold text-brand-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="pricing" className="py-20 bg-topbar border-t border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-brand uppercase tracking-normal text-xs font-bold block mb-2">RETAINER PACKAGES</span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal mb-4">
            Flexible Plans. Measurable Results.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Bronze Tier */}
          <div className="bg-topbar border border-primary rounded-2xl p-8 flex flex-col justify-between hover:border-muted-foreground transition-all">
            <div>
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-normal text-muted-foreground font-bold block mb-1">BRONZE</span>
                <h3 className="text-2xl font-black text-brand-foreground mb-4">Essentials</h3>
                <div className="text-3xl sm:text-4xl font-black text-brand">
                  KES 39,999 <span className="text-xs text-muted-foreground font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-primary pt-6">
                {[
                  "Up to 20 design hours/month",
                  "1 Marketing campaign/month",
                  "Social media management",
                  "Monthly reporting",
                  "Email support"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-border">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="w-full bg-primary hover:bg-muted-foreground text-brand-foreground font-bold text-center py-3 rounded text-sm uppercase tracking-normal transition-colors">
              GET STARTED
            </a>
          </div>

          {/* Silver Tier (Most Popular) */}
          <div className="bg-topbar border-2 border-brand rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-brand/10">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-brand text-brand-foreground text-[10px] uppercase font-black px-4 py-1 rounded-full tracking-normal">
              MOST POPULAR
            </div>

            <div>
              <div className="text-center mb-6 pt-2">
                <span className="text-xs uppercase tracking-normal text-brand font-bold block mb-1">SILVER</span>
                <h3 className="text-2xl font-black text-brand-foreground mb-4">Growth</h3>
                <div className="text-3xl sm:text-4xl font-black text-brand">
                  KES 69,999 <span className="text-xs text-muted-foreground font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-primary pt-6">
                {[
                  "Up to 40 design hours/month",
                  "2 Marketing campaigns/month",
                  "Social media management",
                  "Website updates",
                  "SEO & digital marketing support",
                  "Monthly reporting & review",
                  "Priority email & phone support"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-border">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="w-full bg-brand hover:bg-brand text-brand-foreground font-bold text-center py-3 rounded text-sm uppercase tracking-normal transition-colors shadow-lg shadow-brand/30">
              GET STARTED
            </a>
          </div>

          {/* Gold Tier */}
          <div className="bg-topbar border border-primary rounded-2xl p-8 flex flex-col justify-between hover:border-muted-foreground transition-all">
            <div>
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-normal text-muted-foreground font-bold block mb-1">GOLD</span>
                <h3 className="text-2xl font-black text-brand-foreground mb-4">Enterprise</h3>
                <div className="text-3xl sm:text-4xl font-black text-brand">
                  KES 129,999 <span className="text-xs text-muted-foreground font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-primary pt-6">
                {[
                  "Up to 80 design hours/month",
                  "Unlimited marketing campaigns",
                  "Full marketing management",
                  "Website management",
                  "Advanced SEO & advertising",
                  "Quarterly strategy meetings",
                  "Priority support"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-border">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="w-full bg-primary hover:bg-muted-foreground text-brand-foreground font-bold text-center py-3 rounded text-sm uppercase tracking-normal transition-colors">
              GET STARTED
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-muted-foreground">
          *Prices are exclusive of VAT. Terms & conditions apply.
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-12">
          <span className="text-brand uppercase tracking-normal text-xs font-bold block mb-2">TRUSTED BY ORGANIZATIONS THAT LEAD</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
          {[
            "KenGen", "NHIF", "KNH", "EQUITY", "Britam", "UNGA"
          ].map((org, i) => (
            <div key={i} className="bg-topbar border border-primary rounded-xl p-6 flex items-center justify-center font-black text-xl text-muted-foreground hover:text-brand-foreground transition-colors h-24">
              {org}
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 bg-topbar border border-primary rounded-2xl p-8 sm:p-12 relative">
          <div className="text-brand text-6xl font-serif absolute top-4 left-6 opacity-30">“</div>
          <p className="text-border text-lg sm:text-xl italic mb-6 relative z-10 leading-relaxed text-center">
            Image Quest acts as our extended branding team. They understand our brand, move fast and consistently deliver quality work that helps us maintain a strong presence.
          </p>
          <div className="text-center font-bold text-sm text-brand">
            — Marketing Manager, Leading Financial Institution
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2.5 h-2.5 rounded-full bg-brand"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground"></div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar border-t border-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-brand uppercase tracking-normal text-xs font-bold block mb-2">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-foreground tracking-normal">
              Got Questions? We've Got Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-topbar border border-primary rounded-xl overflow-hidden transition-all"
              >
                <Button variant="unstyled"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-primary/50 transition-colors"
                >
                  <span className="font-bold text-border text-base">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand shrink-0" />
                  )}
                </Button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-primary pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-topbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-brand via-brand to-brand rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-brand-foreground mb-4 tracking-normal">
                Ready To Build A Stronger, More Consistent Brand?
              </h2>
              <p className="text-brand text-base sm:text-lg mb-8 leading-relaxed">
                Let's discuss how we can become your strategic branding partner.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-topbar hover:bg-primary text-brand-foreground font-bold text-sm px-8 py-4 rounded transition-all flex items-center gap-2 shadow-lg">
                  <Calendar className="w-4 h-4 text-brand" /> BOOK A CONSULTATION
                </a>
                <a href="https://wa.me/254720791677" target="_blank" rel="noopener noreferrer" className="bg-brand-foreground hover:bg-muted text-primary font-bold text-sm px-8 py-4 rounded transition-all flex items-center gap-2 shadow-lg">
                  <Phone className="w-4 h-4 text-brand" /> CALL / WHATSAPP
                </a>
              </div>
            </div>

            <div className="z-10 hidden lg:block">
              <img 
                src={pageImage2.url} 
                alt="Professional Portrait" 
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-brand/30"
                onError={(e) => { e.currentTarget.src = pageImage3.url; }}
              />
            </div>
          </div>
        </div>
      </section>

      {}
      <SiteFooter />

      {}
      

    </div>
  );
}