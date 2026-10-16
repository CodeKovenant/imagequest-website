import React, { useState } from "react";
import { sendContactRequest } from "@/lib/contact-mailto";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  PenTool,
  Zap,
  Headphones,
  Building2,
  Store,
  Lightbulb,
  Compass,
  Car,
  FileText,
  HelpCircle,
  Calendar,
  MessageSquare,
  ExternalLink,
  Menu,
  X,
  Check,
  Eye,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const servicesList = [
    {
      title: "Exterior Signage",
      subtitle: "Shop Signs, Building Signs, Fascia Signs, Billboards",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      items: ["Shop Signs", "Building Signs", "Fascia Signs", "Billboards"],
    },
    {
      title: "Interior Signage",
      subtitle: "Reception Signs, Wall Graphics, Directional Signs, Office Signs",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      items: ["Reception Signs", "Wall Graphics", "Directional Signs", "Office Signs"],
    },
    {
      title: "Lightbox Signs",
      subtitle: "Slim Lightboxes, Double-Sided Boxes, Acrylic Lightbases, LED Illuminated",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
      items: [
        "Slim Lightboxes",
        "Double-Sided Boxes",
        "Acrylic Lightbases",
        "LED Illuminated Signs",
      ],
    },
    {
      title: "Safety & Wayfinding",
      subtitle: "Exit Signs, Fire Assembly Signs, Safety Signs, Wayfinding Systems",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      items: ["Exit Signs", "Fire Assembly Signs", "Safety Signs", "Wayfinding Systems"],
    },
    {
      title: "Pylon & Totem Signs",
      subtitle: "Pylon Signs, Totem Signs, Monument Signs, Directory Signs",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      items: ["Pylon Signs", "Totem Signs", "Monument Signs", "Directory Signs"],
    },
    {
      title: "Vehicle Graphics",
      subtitle: "Vehicle Wrapping, Fleet Branding, Magnetic Signs, Reflective Markings",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
      items: ["Vehicle Wrapping", "Fleet Branding", "Magnetic Signs", "Reflective Markings"],
    },
  ];

  const materials = [
    { name: "Acrylic", icon: <PenTool className="w-6 h-6 text-orange-500" /> },
    { name: "Aluminium Composite Panel", icon: <Building2 className="w-6 h-6 text-orange-500" /> },
    { name: "Stainless Steel", icon: <ShieldCheck className="w-6 h-6 text-orange-500" /> },
    { name: "LED Illumination", icon: <Lightbulb className="w-6 h-6 text-orange-500" /> },
    { name: "Vinyl Graphics", icon: <Compass className="w-6 h-6 text-orange-500" /> },
    { name: "3D Letters", icon: <FileText className="w-6 h-6 text-orange-500" /> },
    { name: "Neon Flex", icon: <Zap className="w-6 h-6 text-orange-500" /> },
    { name: "Wood & Timber", icon: <Store className="w-6 h-6 text-orange-500" /> },
  ];

  const processSteps = [
    { num: "01", title: "Consult", desc: "We understand your needs, location and branding goals." },
    { num: "02", title: "Design", desc: "Our team creates custom concepts for your approval." },
    {
      num: "03",
      title: "Produce",
      desc: "We use quality materials and precision fabrication techniques.",
    },
    { num: "04", title: "Install", desc: "Our experts install safely, neatly and on schedule." },
    { num: "05", title: "Inspect", desc: "We ensure everything meets our quality standards." },
    {
      num: "06",
      title: "Support",
      desc: "We provide maintenance and support for long lasting results.",
    },
  ];

  const projects = [
    {
      name: "Britam",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
      tag: "Exterior Tower Signage",
    },
    {
      name: "Pharmaplus",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80",
      tag: "Retail Pharmacy Branding",
    },
    {
      name: "The Lake Restaurant",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
      tag: "Custom 3D Acrylic Logo",
    },
    {
      name: "Elite Gym",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80",
      tag: "Illuminated Wall Sign",
    },
    {
      name: "Gakenya Advocates",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
      tag: "Executive Office Signage",
    },
    {
      name: "TRM Mall Directory",
      img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=500&q=80",
      tag: "Pylon & Directory Signs",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to complete a signage project?",
      a: "Most signage projects take between 3-10 working days depending on the type, size and complexity of the sign.",
    },
    {
      q: "What materials do you use?",
      a: "We use premium weather-resistant materials including aluminium composite panels, acrylic, stainless steel, high-grade vinyl, and energy-efficient LED modules.",
    },
    {
      q: "Do you handle installation?",
      a: "Yes! Our certified installation team handles the complete mounting, electrical connections, and safety compliance checks.",
    },
    {
      q: "Do you offer maintenance services?",
      a: "We offer comprehensive maintenance and repair contracts to keep your signage shining bright year-round.",
    },
    {
      q: "Can you work at night or weekends?",
      a: "Yes, we accommodate flexible scheduling including night shifts and weekends to avoid business disruption.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-orange-500 selection:text-white relative">
      <SiteHeader />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-orange-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-orange-400 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {}

      {}

      {}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#111726] to-[#0b0f19] pt-8 pb-20 border-b border-slate-800">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ff5722_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <Link className="hover:text-orange-400 transition" to="/">
              Home
            </Link>
            <span>&gt;</span>
            <Link className="hover:text-orange-400 transition" to="/services">
              Services
            </Link>
            <span>&gt;</span>
            <span className="text-orange-500 font-medium">Signage</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-orange-600/20 border border-orange-500/40 text-orange-400 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-widest uppercase">
                Signage
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                Signs That Get Noticed. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                  Brands That Grow.
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                We design, manufacture and install high-impact signage that increases visibility,
                strengthens brand presence and attracts more customers to your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="unstyled"
                  onClick={() => setAuditModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-orange-600/30 flex items-center justify-center space-x-3 transition transform hover:-translate-y-0.5"
                >
                  <span>GET A FREE SIGNAGE AUDIT</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="unstyled"
                  onClick={() => {
                    const el = document.getElementById("projects-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-slate-700 hover:border-orange-500 hover:text-orange-400 text-slate-200 font-bold px-8 py-4 rounded-xl flex items-center justify-center space-x-3 transition"
                >
                  <span>VIEW OUR WORK</span>
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Featured Banner / Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18f76e2?auto=format&fit=crop&w=800&q=80"
                  alt="Kijani Farms Signage Showcase"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80"></div>

                {/* Floating Tags inside Hero image */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <div className="bg-[#0b0f19]/90 backdrop-blur border border-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    <span>FRESH PRODUCE</span>
                  </div>
                  <div className="bg-[#0b0f19]/90 backdrop-blur border border-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    <span>ORGANIC FOODS</span>
                  </div>
                  <div className="bg-[#0b0f19]/90 backdrop-blur border border-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    <span>DAIRY PRODUCTS</span>
                  </div>
                  <div className="bg-[#0b0f19]/90 backdrop-blur border border-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    <span>GARDEN SUPPLIES</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#0b0f19]/90 backdrop-blur border border-slate-700 p-4 rounded-xl">
                  <div className="text-sm font-bold text-white">KIJANI FARMS SIGNAGE PROJECT</div>
                  <div className="text-xs text-orange-400 mt-0.5">
                    High-impact exterior LED facade & directional boards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-[#121826] border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-[#0e1320] border border-slate-800 p-5 rounded-xl text-center hover:border-orange-500/50 transition">
              <div className="w-12 h-12 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">High Visibility</h3>
              <p className="text-xs text-slate-400">Designed to stand out and grab attention.</p>
            </div>

            <div className="bg-[#0e1320] border border-slate-800 p-5 rounded-xl text-center hover:border-orange-500/50 transition">
              <div className="w-12 h-12 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">Premium Quality</h3>
              <p className="text-xs text-slate-400">Durable materials & expert craftsmanship.</p>
            </div>

            <div className="bg-[#0e1320] border border-slate-800 p-5 rounded-xl text-center hover:border-orange-500/50 transition">
              <div className="w-12 h-12 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">Professional Installation</h3>
              <p className="text-xs text-slate-400">Safe, precise and on-time installation.</p>
            </div>

            <div className="bg-[#0e1320] border border-slate-800 p-5 rounded-xl text-center hover:border-orange-500/50 transition">
              <div className="w-12 h-12 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">Custom Designs</h3>
              <p className="text-xs text-slate-400">Tailored to your brand and environment.</p>
            </div>

            <div className="bg-[#0e1320] border border-slate-800 p-5 rounded-xl text-center hover:border-orange-500/50 transition">
              <div className="w-12 h-12 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">Fast Turnaround</h3>
              <p className="text-xs text-slate-400">Efficient production and quick delivery.</p>
            </div>

            <div className="bg-[#0e1320] border border-slate-800 p-5 rounded-xl text-center hover:border-orange-500/50 transition">
              <div className="w-12 h-12 bg-orange-600/10 rounded-full flex items-center justify-center mx-auto mb-3 text-orange-500">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1">After-Sales Support</h3>
              <p className="text-xs text-slate-400">Maintenance and support when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              OUR SIGNAGE SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Custom Signage For Every Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-[#121826] border border-slate-800 rounded-2xl overflow-hidden group hover:border-orange-500/50 transition duration-300 flex flex-col shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                      {service.title}
                    </h3>

                    <ul className="space-y-2.5 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-300">
                          <Check className="w-4 h-4 text-orange-500 mr-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="unstyled"
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full bg-[#1b2336] hover:bg-orange-600 text-slate-200 hover:text-white font-semibold py-2.5 rounded-lg text-sm transition flex items-center justify-center space-x-2"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="bg-[#0e1320] border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
          <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
            QUALITY MATERIALS, SUPERIOR RESULTS.
          </span>
          <h3 className="text-2xl font-black text-white mt-2 mb-10">
            Engineered with Industry-Standard Materials
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="bg-[#141b2c] border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:border-orange-500 transition group"
              >
                <div className="mb-3 p-3 rounded-lg bg-orange-600/10 group-hover:bg-orange-600/20 transition">
                  {mat.icon}
                </div>
                <span className="text-xs font-bold text-slate-300">{mat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              From Concept To Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#121826] border border-slate-800 p-6 rounded-2xl relative hover:border-orange-500/60 transition group flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-orange-500/40 group-hover:text-orange-500 transition mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-orange-400 font-semibold">
                  <span>Step {step.num} of 06</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="projects-section" className="py-20 bg-[#0e1320] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                RECENT SIGNAGE PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Real Signs. Real Impact.
              </h2>
            </div>
            <Button
              variant="unstyled"
              onClick={() => showToast("Loading all projects gallery...")}
              className="mt-4 md:mt-0 border border-slate-700 hover:border-orange-500 text-slate-200 hover:text-orange-400 px-6 py-3 rounded-lg text-sm font-bold flex items-center space-x-2 transition self-start"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#141b2c] h-72"
              >
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                    {proj.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{proj.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#0b0f19] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Why Invest + FAQs */}
            <div className="lg:col-span-7 space-y-12">
              {/* Why Invest */}
              <div className="bg-[#121826] border border-slate-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-black text-white mb-6">
                  Why Invest In Quality Signage?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Increase brand visibility",
                    "Attract more customers",
                    "Improve brand recognition",
                    "Create a professional image",
                    "Communicate 24/7",
                    "Higher return on investment",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl overflow-hidden h-48 relative">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Pearl Dental Signage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                      Client Spotlight
                    </span>
                    <h4 className="text-lg font-bold text-white">Pearl Dental Clinic</h4>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-[#121826] border border-slate-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <HelpCircle className="w-7 h-7 text-orange-500" />
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-800 rounded-xl overflow-hidden bg-[#0e1320]"
                    >
                      <Button
                        variant="unstyled"
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left font-bold text-sm sm:text-base text-white flex justify-between items-center hover:text-orange-400 transition"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${activeFaq === idx ? "rotate-180 text-orange-500" : "text-slate-400"}`}
                        />
                      </Button>
                      {activeFaq === idx && (
                        <div className="px-4 pb-4 text-sm text-slate-300 border-t border-slate-800 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Ready To Get Noticed Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#161f33] to-[#0e1320] border border-orange-500/40 p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                    GET STARTED TODAY
                  </span>
                  <h3 className="text-3xl font-black text-white mt-2 mb-4">
                    Ready To Get Noticed?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Let's create signage that puts your brand in the spotlight and drives continuous
                    customer engagement.
                  </p>

                  <div className="flex items-center space-x-4 mb-8 bg-[#0b0f19]/60 p-4 rounded-2xl border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                      alt="Signage Expert"
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">Expert Consultant</h4>
                      <p className="text-xs text-orange-400">Dedicated Project Manager</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    variant="unstyled"
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-orange-600/30 uppercase tracking-wider text-sm transition transform active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <span>REQUEST A QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <a
                    href="https://wa.me/254720791677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-slate-700 hover:border-orange-500 bg-[#0e1320] hover:bg-[#151c2e] text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 transition"
                  >
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="uppercase text-sm tracking-wider">CALL / WHATSAPP</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-white">
            <div className="w-14 h-14 rounded-2xl bg-black/20 backdrop-blur flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black">Need A Site Survey Or Signage Audit?</h3>
              <p className="text-sm font-medium text-orange-100">
                Our team will visit your location and recommend the best signage solution.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="unstyled"
              onClick={() => setAuditModalOpen(true)}
              className="bg-black hover:bg-slate-900 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-xl uppercase tracking-wider text-sm transition"
            >
              SCHEDULE A FREE SITE VISIT
            </Button>
            <a
              href="https://wa.me/254720791677"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-100 text-orange-600 font-extrabold px-6 py-3.5 rounded-xl shadow-xl uppercase tracking-wider text-sm transition flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL / WHATSAPP</span>
            </a>
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-110 active:scale-95"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>

      {}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121826] border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl animate-scaleUp">
            <Button
              variant="unstyled"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </Button>

            <h3 className="text-2xl font-black text-white mb-2">Request A Signage Quote</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details and our team will get back to you with a custom estimate within 2
              hours.
            </p>

            <form
              onSubmit={(e) => {
                sendContactRequest(e, "Signage quote request");
                setQuoteModalOpen(false);
                showToast(
                  "Your email app should open with a prepared quote request. Send it to submit.",
                );
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+254 700 000000"
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Signage Type
                </label>
                <select className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option>Exterior Signage</option>
                  <option>Interior Signage</option>
                  <option>Lightbox Signs</option>
                  <option>Safety & Wayfinding</option>
                  <option>Pylon & Totem Signs</option>
                  <option>Vehicle Graphics</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Project Details / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about dimensions, location, and timeframe..."
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                ></textarea>
              </div>
              <Button
                variant="unstyled"
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-extrabold py-3.5 rounded-xl shadow-lg uppercase tracking-wider text-sm transition"
              >
                SUBMIT QUOTE REQUEST
              </Button>
            </form>
          </div>
        </div>
      )}

      {}
      {auditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121826] border border-slate-700 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl animate-scaleUp">
            <Button
              variant="unstyled"
              onClick={() => setAuditModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </Button>

            <h3 className="text-2xl font-black text-white mb-2">Schedule Free Site Audit</h3>
            <p className="text-xs text-slate-400 mb-6">
              Our signage experts will visit your premises in Nairobi and surrounding areas for a
              professional evaluation.
            </p>

            <form
              onSubmit={(e) => {
                sendContactRequest(e, "Signage site visit request");
                setAuditModalOpen(false);
                showToast(
                  "Your email app should open with a prepared site visit request. Send it to submit.",
                );
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Company / Business Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Business Ltd"
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Contact Person & Phone
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe (+254...)"
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Premises Location / Address
                </label>
                <input
                  required
                  type="text"
                  placeholder="Building name, Street, Nairobi"
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full bg-[#0b0f19] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <Button
                variant="unstyled"
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-extrabold py-3.5 rounded-xl shadow-lg uppercase tracking-wider text-sm transition"
              >
                CONFIRM FREE VISIT
              </Button>
            </form>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
