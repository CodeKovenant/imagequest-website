import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ChevronDown, 
  ArrowRight, 
  Check, 
  Calendar, 
  MessageCircle, 
  Award, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Headphones, 
  TrendingUp,
  Palette,
  Signpost,
  Building2,
  Truck,
  Printer,
  Globe,
  Megaphone,
  Gift,
  Menu,
  X
} from 'lucide-react';

export default function ContentPage() {

  const services = [
    {
      id: "01",
      title: "Branding",
      description: "We craft strong brand identities that tell your story and build trust.",
      icon: <Palette className="w-6 h-6 text-brand" />,
      bullets: [
        "Logo & Brand Identity",
        "Brand Guidelines",
        "Corporate Identity",
        "Company Profiles"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "02",
      title: "Signage & Wayfinding",
      description: "High-impact signage and wayfinding solutions that guide and impress.",
      icon: <Signpost className="w-6 h-6 text-brand" />,
      bullets: [
        "Building Signage",
        "3D Letters & Lightboxes",
        "Pylon & Directional Signs",
        "Safety & Wayfinding Systems"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "03",
      title: "Office & Interior Branding",
      description: "Transform your workplace into a powerful extension of your brand.",
      icon: <Building2 className="w-6 h-6 text-brand" />,
      bullets: [
        "Wall & Glass Branding",
        "Reception & Office Branding",
        "Murals, Graphics & Vinyls",
        "Corporate Environmental Branding"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "04",
      title: "Vehicle Branding",
      description: "Turn every journey into a branding opportunity that gets you noticed.",
      icon: <Truck className="w-6 h-6 text-brand" />,
      bullets: [
        "Vehicle Wraps",
        "Fleet Branding",
        "Car, Van, Truck & Bus Branding",
        "Motorcycle Branding"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "05",
      title: "Printing",
      description: "Professional print solutions with quality finishes that leave a lasting impression.",
      icon: <Printer className="w-6 h-6 text-brand" />,
      bullets: [
        "Business Cards, Flyers & Brochures",
        "Catalogues & Magazines",
        "Books, Reports & NCR",
        "Packaging, Labels & Stickers"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "06",
      title: "Websites & Digital Solutions",
      description: "Build a powerful online presence with modern, secure and scalable solutions.",
      icon: <Globe className="w-6 h-6 text-brand" />,
      bullets: [
        "Corporate & E-commerce Websites",
        "Web Applications & Portals",
        "Domain, Hosting & Email",
        "SEO & Website Maintenance"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "07",
      title: "Digital Marketing",
      description: "Data-driven digital strategies that attract, engage and convert.",
      icon: <Megaphone className="w-6 h-6 text-brand" />,
      bullets: [
        "Social Media Marketing",
        "SEO & Google Ads",
        "Content & Email Marketing",
        "Analytics & Reporting"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    },
    {
      id: "08",
      title: "Promotional Merchandise",
      description: "Branded items that promote your business and strengthen connections.",
      icon: <Gift className="w-6 h-6 text-brand" />,
      bullets: [
        "Corporate Gifts & Apparel",
        "Drinkware & Stationery",
        "Bags & Tech Gifts",
        "Event Giveaways & More"
      ],
      imageBg: "bg-gradient-to-br from-primary to-primary"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-brand" />, value: "10+", label: "Years Experience", desc: "Delivering creative excellence." },
    { icon: <Briefcase className="w-8 h-8 text-brand" />, value: "500+", label: "Happy Clients", desc: "Trusted by businesses across industries." },
    { icon: <Award className="w-8 h-8 text-brand" />, value: "1,000+", label: "Projects Completed", desc: "From startups to large corporates." },
    { icon: <ShieldCheck className="w-8 h-8 text-brand" />, value: "100%", label: "Quality Commitment", desc: "We don't just meet expectations, we exceed." },
    { icon: <Headphones className="w-8 h-8 text-brand" />, value: "Reliable Support", label: "We're with you", desc: "at every step." },
    { icon: <TrendingUp className="w-8 h-8 text-brand" />, value: "Results Driven", label: "Solutions that build", desc: "brands and grow businesses." }
  ];

  return (
    <div className="min-h-screen bg-primary text-muted font-sans antialiased selection:bg-brand selection:text-brand-foreground">
      <SiteHeader />


      {}
      <section className="relative bg-topbar text-brand-foreground overflow-hidden py-16 lg:py-24 border-b border-primary">
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-topbar to-topbar"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-xs text-muted-foreground mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-brand font-medium">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand font-bold uppercase tracking-normalst text-xs">OUR SERVICES</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-none">
                Creative Solutions. <br />
                <span className="text-brand">Powerful Results.</span>
              </h1>
              <p className="text-border text-base sm:text-lg max-w-xl leading-relaxed">
                From brand identity to digital presence and beyond, we provide end-to-end solutions that help businesses grow, connect and stand out.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="unstyled" className="bg-brand hover:bg-brand text-brand-foreground font-bold px-6 py-4 rounded text-sm transition-all shadow-lg hover:shadow-brand/30 flex items-center gap-3">
                  EXPLORE OUR SERVICES <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="unstyled" className="bg-primary hover:bg-muted-foreground text-brand-foreground font-bold px-6 py-4 rounded text-sm transition-all border border-muted-foreground flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand" /> TALK TO AN EXPERT
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-muted-foreground bg-primary group">
                <div className="absolute top-4 right-4 bg-brand text-brand-foreground text-xs font-bold px-3 py-1.5 rounded z-20 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-brand-foreground animate-pulse"></span>
                  IQ Graphics Studio
                </div>
                {/* High-end office interior illustration/placeholder */}
                <div className="h-72 sm:h-96 w-full bg-gradient-to-tr from-primary via-primary to-muted-foreground flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-topbar/30"></div>
                  <div className="relative z-10 text-center space-y-3">
                    <div className="w-16 h-16 bg-brand/20 border border-brand/40 rounded-2xl flex items-center justify-center mx-auto text-brand shadow-inner">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold tracking-normal">Building Brands That Command Trust</h3>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto">State-of-the-art creative workspaces & premium production facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand font-bold uppercase tracking-normalst text-xs">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-normal">Complete Solutions Under One Roof</h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            We offer a full range of creative, digital and print solutions to build, grow and elevate your brand. Explore our core service areas below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-topbar border border-primary rounded-xl overflow-hidden hover:border-brand/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 bg-primary overflow-hidden border-b border-primary flex items-center justify-center p-6">
                  <div className="absolute top-4 left-4 bg-brand text-brand-foreground font-black text-xs px-2.5 py-1 rounded shadow">
                    {service.id}
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-primary/80 border border-muted-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-brand-foreground group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-primary/80">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-border">
                        <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href={`#service-${service.id}`} 
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand tracking-normalr uppercase transition-colors group/link"
                >
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="bg-topbar border-y border-primary py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3 flex flex-col items-center">
              <div className="p-3 bg-primary border border-primary rounded-2xl shadow-inner">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-foreground">{stat.value}</div>
                <div className="text-xs font-bold text-brand uppercase mt-1">{stat.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-brand via-brand to-brand rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-brand-foreground relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Calendar className="w-80 h-80 text-brand-foreground" />
          </div>

          <div className="space-y-3 text-center lg:text-left z-10">
            <div className="inline-block bg-topbar/20 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-normalr text-brand">
              Expert Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-normal">Not Sure Which Service You Need?</h2>
            <p className="text-brand text-sm sm:text-base max-w-xl">
              Let's chat! Our experts will help you find the right solution for your goals and budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 z-10">
            <Button variant="unstyled" className="bg-topbar hover:bg-primary text-brand-foreground font-bold px-8 py-4 rounded-lg text-sm transition-all shadow-xl flex items-center gap-2 border border-primary">
              <Phone className="w-4 h-4 text-brand" /> SCHEDULE A CALL
            </Button>
            <Button variant="unstyled" className="bg-brand-foreground hover:bg-muted text-brand font-bold px-8 py-4 rounded-lg text-sm transition-all shadow-xl flex items-center gap-2">
              REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {}
      <SiteFooter />

      {}
      

    </div>
  );
}