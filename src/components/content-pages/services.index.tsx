import React, { useState } from "react";
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
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const services = [
    {
      id: "01",
      title: "Branding",
      to: "/services/branding",
      description: "We craft strong brand identities that tell your story and build trust.",
      icon: <Palette className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Logo & Brand Identity",
        "Brand Guidelines",
        "Corporate Identity",
        "Company Profiles",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "02",
      title: "Signage & Wayfinding",
      to: "/services/signage",
      description: "High-impact signage and wayfinding solutions that guide and impress.",
      icon: <Signpost className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Building Signage",
        "3D Letters & Lightboxes",
        "Pylon & Directional Signs",
        "Safety & Wayfinding Systems",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "03",
      title: "Office & Interior Branding",
      to: "/services/signage",
      description: "Transform your workplace into a powerful extension of your brand.",
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Wall & Glass Branding",
        "Reception & Office Branding",
        "Murals, Graphics & Vinyls",
        "Corporate Environmental Branding",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "04",
      title: "Vehicle Branding",
      to: "/services/signage",
      description: "Turn every journey into a branding opportunity that gets you noticed.",
      icon: <Truck className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Vehicle Wraps",
        "Fleet Branding",
        "Car, Van, Truck & Bus Branding",
        "Motorcycle Branding",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "05",
      title: "Printing",
      to: "/services/printing",
      description:
        "Professional print solutions with quality finishes that leave a lasting impression.",
      icon: <Printer className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Business Cards, Flyers & Brochures",
        "Catalogues & Magazines",
        "Books, Reports & NCR",
        "Packaging, Labels & Stickers",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "06",
      title: "Websites & Digital Solutions",
      to: "/services/websites",
      description: "Build a powerful online presence with modern, secure and scalable solutions.",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Corporate & E-commerce Websites",
        "Web Applications & Portals",
        "Domain, Hosting & Email",
        "SEO & Website Maintenance",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "07",
      title: "Digital Marketing",
      to: "/services/digital-marketing",
      description: "Data-driven digital strategies that attract, engage and convert.",
      icon: <Megaphone className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Social Media Marketing",
        "SEO & Google Ads",
        "Content & Email Marketing",
        "Analytics & Reporting",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
    {
      id: "08",
      title: "Promotional Merchandise",
      to: "/services/merchandise",
      description: "Branded items that promote your business and strengthen connections.",
      icon: <Gift className="w-6 h-6 text-orange-500" />,
      bullets: [
        "Corporate Gifts & Apparel",
        "Drinkware & Stationery",
        "Bags & Tech Gifts",
        "Event Giveaways & More",
      ],
      imageBg: "bg-gradient-to-br from-neutral-800 to-neutral-900",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      value: "10+",
      label: "Years Experience",
      desc: "Delivering creative excellence.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      value: "500+",
      label: "Happy Clients",
      desc: "Trusted by businesses across industries.",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      value: "1,000+",
      label: "Projects Completed",
      desc: "From startups to large corporates.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      value: "100%",
      label: "Quality Commitment",
      desc: "We don't just meet expectations, we exceed.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      value: "Reliable Support",
      label: "We're with you",
      desc: "at every step.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      value: "Results Driven",
      label: "Solutions that build",
      desc: "brands and grow businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <SiteHeader />

      {}

      {}

      {}
      <section className="relative bg-neutral-950 text-white overflow-hidden py-16 lg:py-24 border-b border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-xs text-neutral-400 mb-6 flex items-center gap-2">
            <Link className="hover:text-orange-500 transition-colors" to="/">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-orange-500 font-medium">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                OUR SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                Creative Solutions. <br />
                <span className="text-orange-500">Powerful Results.</span>
              </h1>
              <p className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed">
                From brand identity to digital presence and beyond, we provide end-to-end solutions
                that help businesses grow, connect and stand out.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  variant="unstyled"
                  asChild
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-4 rounded text-sm transition-all shadow-lg hover:shadow-orange-600/30 flex items-center gap-3"
                >
                  <Link to="/services" hash="service-directory">
                    EXPLORE OUR SERVICES <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="unstyled"
                  asChild
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-4 rounded text-sm transition-all border border-neutral-700 flex items-center gap-2"
                >
                  <Link to="/contact">
                    <MessageCircle className="w-4 h-4 text-orange-500" /> TALK TO AN EXPERT
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-700 bg-neutral-900 group">
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded z-20 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  IQ Graphics Studio
                </div>
                {/* High-end office interior illustration/placeholder */}
                <div className="h-72 sm:h-96 w-full bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-700 flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 text-center space-y-3">
                    <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/40 rounded-2xl flex items-center justify-center mx-auto text-orange-500 shadow-inner">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold tracking-wide">
                      Building Brands That Command Trust
                    </h3>
                    <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                      State-of-the-art creative workspaces & premium production facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="service-directory" className="scroll-mt-32 py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Complete Solutions Under One Roof
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            We offer a full range of creative, digital and print solutions to build, grow and
            elevate your brand. Explore our core service areas below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 bg-neutral-900 overflow-hidden border-b border-neutral-800 flex items-center justify-center p-6">
                  <div className="absolute top-4 left-4 bg-orange-600 text-white font-black text-xs px-2.5 py-1 rounded shadow">
                    {service.id}
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-800/80">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={service.to}
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:text-orange-400 tracking-wider uppercase transition-colors group/link"
                >
                  LEARN MORE{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="bg-neutral-950 border-y border-neutral-800 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3 flex flex-col items-center">
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-inner">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs font-bold text-orange-500 uppercase mt-1">{stat.label}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Calendar className="w-80 h-80 text-white" />
          </div>

          <div className="space-y-3 text-center lg:text-left z-10">
            <div className="inline-block bg-black/20 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-orange-100">
              Expert Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-orange-50 text-sm sm:text-base max-w-xl">
              Let's chat! Our experts will help you find the right solution for your goals and
              budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 z-10">
            <Button
              variant="unstyled"
              asChild
              className="bg-neutral-950 hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-lg text-sm transition-all shadow-xl flex items-center gap-2 border border-neutral-800"
            >
              <a href="tel:+254720791677">
                <Phone className="w-4 h-4 text-orange-500" /> SCHEDULE A CALL
              </a>
            </Button>
            <Button
              variant="unstyled"
              asChild
              className="bg-white hover:bg-neutral-100 text-orange-600 font-bold px-8 py-4 rounded-lg text-sm transition-all shadow-xl flex items-center gap-2"
            >
              <Link to="/contact">
                REQUEST A QUOTE <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {}

      {}
      <a
        href="https://wa.me/254720791677"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>

      <SiteFooter />
    </div>
  );
}
