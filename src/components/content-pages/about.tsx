import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  Phone, Mail, Clock, MapPin, ChevronRight, ArrowRight, 
  CheckCircle2, Users, Award, Clock3, Globe, HeartHandshake,
  Facebook, Instagram, Linkedin, Youtube, MessageCircle, 
  Menu, X, Briefcase, ChevronDown, Sparkles, Building2, Layers
} from 'lucide-react';

export default function ContentPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-topbar text-muted font-sans selection:bg-brand selection:text-brand-foreground">
      <SiteHeader />


      {}
      <section className="relative bg-topbar text-brand-foreground py-12 lg:py-20 overflow-hidden border-b border-primary">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ff5722_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <a href="#" className="hover:text-brand transition">Home</a>
            <span>&gt;</span>
            <span className="text-brand font-medium">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-bold tracking-normalst uppercase border border-brand/20">
                About Our Agency
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-tight">
                Image Quest <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand">
                  Graphics Ltd
                </span>
              </h1>
              <p className="text-border text-base sm:text-lg leading-relaxed">
                We are a strategic branding, signage, print and digital solutions agency helping businesses launch, grow and lead with confidence.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button variant="unstyled" 
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-brand hover:bg-brand text-brand-foreground font-bold px-8 py-4 rounded shadow-xl shadow-brand/30 transition flex items-center gap-3 uppercase text-sm tracking-normalr"
                >
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Button>
                <a 
                  href="tel:+254720791677"
                  className="bg-primary hover:bg-muted-foreground text-brand-foreground font-bold px-8 py-4 rounded border border-muted-foreground transition flex items-center gap-3 uppercase text-sm tracking-normalr"
                >
                  <Phone className="w-4 h-4 text-brand" /> Speak To An Expert
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-xl lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-primary bg-primary group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Image Quest Graphics Reception" 
                  className="w-full h-[350px] sm:h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-topbar/80 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-4 bg-primary/90 backdrop-blur-md p-4 rounded-xl border border-muted-foreground w-full">
                    <div className="bg-brand p-3 rounded-lg text-brand-foreground">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-foreground text-sm">State-of-the-Art HQ</h4>
                      <p className="text-xs text-muted-foreground">West Point, Waiyaki Way, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar text-brand-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-brand font-bold uppercase tracking-normalst text-xs flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand"></span> Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-normal leading-tight">
                From A Creative Idea To A <br />
                <span className="text-brand">Trusted Branding Partner</span>
              </h2>
              <p className="text-border text-base leading-relaxed">
                Image Quest Graphics Ltd was founded in 2009 with a simple belief that every business deserves a strong, professional and consistent brand. What started as a small graphics and printing studio has grown into a full-service branding, signage and digital solutions agency trusted by hundreds of organizations across Kenya and beyond.
              </p>
              <p className="text-border text-base leading-relaxed">
                Today, we partner with SMEs, corporates, institutions and startups to build brands that command trust and deliver lasting impact.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#milestones"
                  className="inline-flex items-center gap-3 text-brand hover:text-brand font-bold uppercase text-sm tracking-normalr group"
                >
                  Our Journey 
                  <span className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-7 rounded-xl overflow-hidden shadow-lg border border-primary">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="col-span-12 sm:col-span-5 rounded-xl overflow-hidden shadow-lg border border-primary">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
                    alt="Branding Signage" 
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 rounded-xl overflow-hidden shadow-lg border border-primary">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                    alt="Advanced Printing Press" 
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 rounded-xl overflow-hidden shadow-lg border border-primary">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
                    alt="Corporate board room" 
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="milestones" className="py-20 bg-topbar text-brand-foreground border-t border-b border-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-brand font-bold uppercase tracking-normalst text-xs">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-normal">Milestones That Shaped Us</h2>
            <div className="w-16 h-1 bg-brand mx-auto mt-2"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                { year: "2009", title: "Founded", desc: "Founded as Image Quest Graphics & Stationery Supplies." },
                { year: "2012", title: "Expansion", desc: "Expanded our services to include signage and branding." },
                { year: "2016", title: "Incorporation", desc: "Incorporated as Image Quest Graphics Ltd." },
                { year: "2019", title: "Digital Growth", desc: "Launched digital solutions including websites & SEO." },
                { year: "2022", title: "Scaling Up", desc: "Grew our team and served over 300 businesses." },
                { year: "2024+", title: "Innovation", desc: "Continuing to innovate and help businesses grow across Africa." },
              ].map((m, idx) => (
                <div key={idx} className="bg-topbar p-6 rounded-xl border border-primary flex flex-col items-center text-center group hover:border-brand transition duration-300 shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-bold mb-4 shadow-lg shadow-brand/30 group-hover:scale-110 transition">
                    {idx + 1}
                  </div>
                  <span className="text-brand font-extrabold text-xl mb-1">{m.year}</span>
                  <h3 className="text-brand-foreground font-bold text-sm mb-2 uppercase">{m.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar text-brand-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-topbar p-8 rounded-2xl border border-primary hover:border-brand/50 transition shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 border border-brand/20">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-normalr text-brand">Our Mission</h3>
              <p className="text-border text-sm leading-relaxed">
                To help businesses build brands that command trust through creative branding, signage, print and digital solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-topbar p-8 rounded-2xl border border-primary hover:border-brand/50 transition shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 border border-brand/20">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-normalr text-brand">Our Vision</h3>
              <p className="text-border text-sm leading-relaxed">
                To become East Africa's most respected branding and business growth partner.
              </p>
            </div>

            {/* Values */}
            <div className="bg-topbar p-8 rounded-2xl border border-primary hover:border-brand/50 transition shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 border border-brand/20">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-normalr text-brand">Our Values</h3>
              <ul className="space-y-2.5 text-sm text-border">
                {[
                  "Professionalism", "Creativity", "Integrity", 
                  "Innovation", "Reliability", "Customer Success", 
                  "Quality", "Continuous Improvement"
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-topbar border-t border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-brand font-bold uppercase tracking-normalst text-xs">Why Choose Us</span>
              <h2 className="text-3xl font-black text-brand-foreground mt-1">More Than A Supplier, We're Your Partner</h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="bg-brand hover:bg-brand text-brand-foreground font-bold px-6 py-3 rounded text-sm uppercase tracking-normalr transition shadow-lg shadow-brand/20"
              >
                Work With Us
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "One-Stop Branding Partner", icon: Layers },
              { title: "Experienced & Creative Team", icon: Users },
              { title: "Quality & Reliability", icon: Award },
              { title: "Fast Turnaround Time", icon: Clock3 },
              { title: "Nationwide Service", icon: Globe },
              { title: "Long-Term Partnership", icon: HeartHandshake },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-topbar p-6 rounded-xl border border-primary text-center flex flex-col items-center justify-center hover:border-brand transition group shadow-lg">
                  <div className="w-12 h-12 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-brand-foreground font-bold text-xs uppercase leading-snug">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-topbar text-brand-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-brand font-bold uppercase tracking-normalst text-xs">Our Leadership Team</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-normal">The Minds Behind The Brand</h2>
            <div className="w-16 h-1 bg-brand mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Benard Nzioka", role: "Marketing Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
              { name: "Grace Ndegwa", role: "Accounts Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" },
              { name: "Wilfred Kariuki", role: "Head of Production", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" },
              { name: "Lilian Mwangi", role: "Design & Creative Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" },
              { name: "Asif Rahman", role: "Digital Solutions Lead", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80" },
            ].map((member, idx) => (
              <div key={idx} className="bg-topbar rounded-xl overflow-hidden border border-primary group hover:border-brand transition shadow-xl flex flex-col">
                <div className="h-64 overflow-hidden relative bg-primary">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-topbar via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-brand-foreground text-base mb-1">{member.name}</h3>
                    <p className="text-brand text-xs font-medium uppercase tracking-normalr">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="unstyled" 
              onClick={() => setQuoteModalOpen(true)}
              className="inline-flex items-center gap-3 bg-primary hover:bg-muted-foreground text-brand-foreground font-bold px-8 py-4 rounded border border-muted-foreground transition uppercase text-sm tracking-normalr shadow-lg"
            >
              Join Our Team <ArrowRight className="w-4 h-4 text-brand" />
            </Button>
          </div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-brand to-brand py-14 text-brand-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <div className="bg-topbar/20 p-4 rounded-2xl hidden sm:flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-brand-foreground" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-normal">Let's Build Something Amazing Together</h2>
              <p className="text-brand text-sm mt-1">Book a free consultation with our team today.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Button variant="unstyled" 
              onClick={() => setQuoteModalOpen(true)}
              className="bg-topbar text-brand-foreground hover:bg-primary font-bold px-8 py-4 rounded shadow-xl transition uppercase text-sm tracking-normalr"
            >
              Book A Consultation
            </Button>
            <a 
              href="https://wa.me/254720791677" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-foreground text-brand hover:bg-brand font-bold px-8 py-4 rounded shadow-xl transition uppercase text-sm tracking-normalr flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-success" /> Call / Whatsapp
            </a>
          </div>
        </div>
      </section>

      {}
      <SiteFooter />

      {/* Floating WhatsApp Widget */}
      

      {/* Quote / Consultation Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-topbar/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-topbar border border-muted-foreground rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-brand-foreground">
            <Button variant="unstyled" 
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-brand-foreground p-2"
            >
              <X className="w-6 h-6" />
            </Button>
            <h3 className="text-2xl font-black mb-2 text-brand">Request A Quote / Consultation</h3>
            <p className="text-xs text-muted-foreground mb-6">Fill out your details and our team will get back to you shortly.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your request has been submitted successfully."); setQuoteModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-border mb-1">Full Name</label>
                <input required type="text" className="w-full bg-topbar border border-muted-foreground rounded p-3 text-sm text-brand-foreground focus:outline-none focus:border-brand" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-border mb-1">Email Address</label>
                  <input required type="email" className="w-full bg-topbar border border-muted-foreground rounded p-3 text-sm text-brand-foreground focus:outline-none focus:border-brand" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-border mb-1">Phone Number</label>
                  <input required type="tel" className="w-full bg-topbar border border-muted-foreground rounded p-3 text-sm text-brand-foreground focus:outline-none focus:border-brand" placeholder="+254 700 000000" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-border mb-1">Service Interested In</label>
                <select className="w-full bg-topbar border border-muted-foreground rounded p-3 text-sm text-brand-foreground focus:outline-none focus:border-brand">
                  <option>Branding & Design</option>
                  <option>Signage & Corporate Displays</option>
                  <option>Large Format Printing</option>
                  <option>Websites & Digital Solutions</option>
                  <option>Promotional Merchandise</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-border mb-1">Project Details</label>
                <textarea rows="3" className="w-full bg-topbar border border-muted-foreground rounded p-3 text-sm text-brand-foreground focus:outline-none focus:border-brand" placeholder="Tell us about your project..."></textarea>
              </div>
              <Button variant="unstyled" type="submit" className="w-full bg-brand hover:bg-brand text-brand-foreground font-bold py-3 rounded uppercase text-sm tracking-normalr shadow-lg transition">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}