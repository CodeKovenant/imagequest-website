import React, { useState } from "react";
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
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Check,
  Star,
  MessageCircle,
  Quote,
  Search,
  Shield,
  Award,
  Zap,
  Users,
  Box,
  RefreshCw,
  ExternalLink,
  Menu,
  X,
  ShoppingBag,
  Send,
  HelpCircle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Complete Branding Solution",
    notes: "",
  });

  const portfolioProjects = [
    {
      name: "Velora Homes",
      category: "Real Estate",
      image: "https://placehold.co/300x200/111827/d4af37?text=Velora+Homes",
    },
    {
      name: "AfyaPlus",
      category: "Healthcare",
      image: "https://placehold.co/300x200/0f766e/ffffff?text=AfyaPlus+Medical",
    },
    {
      name: "EduQuest",
      category: "Education",
      image: "https://placehold.co/300x200/1e40af/ffffff?text=EduQuest+Academy",
    },
    {
      name: "AfriLogix",
      category: "Corporate",
      image: "https://placehold.co/300x200/9a3412/ffffff?text=AfriLogix",
    },
    {
      name: "Kijani Farms",
      category: "Retail",
      image: "https://placehold.co/300x200/166534/ffffff?text=Kijani+Farms",
    },
    {
      name: "Cafe One",
      category: "Hospitality",
      image: "https://placehold.co/300x200/78350f/ffffff?text=Cafe+One",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category.toLowerCase() === activeTab.toLowerCase());

  const faqs = [
    {
      q: "How long does it take to complete a branding project?",
      a: "Most branding projects take between 2-4 weeks depending on the scope and feedback process.",
    },
    {
      q: "What do I need to get started?",
      a: "You simply need to share your business vision, target audience, and any initial design preferences you have in mind.",
    },
    {
      q: "Do you rebrand existing businesses?",
      a: "Yes! We specialize in refreshing and modernizing established brands while retaining your core customer loyalty and brand equity.",
    },
    {
      q: "Will I own all the brand files?",
      a: "Absolutely. Upon project completion and final payment, you receive 100% ownership of all vector files, guidelines, and digital assets.",
    },
    {
      q: "Do you offer printing for branded materials?",
      a: "Yes, we handle end-to-end production including stationery printing, signage, corporate wear, and promotional items.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
    setTimeout(() => {
      setConsultSubmitted(false);
      setConsultModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <SiteHeader />

      {/* Top Utility Bar */}

      {/* Main Navbar */}

      {/* Breadcrumb Bar */}
      <div className="bg-slate-900 text-slate-400 py-3 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-xs sm:text-sm">
          <Link className="hover:text-white transition" to="/">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link className="hover:text-white transition" to="/services">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-orange-500 font-medium">Branding</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-400">
                  Branding & Corporate Identity
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Build A Brand That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                  Commands Trust.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                We create strategic brand identities that inspire confidence, strengthen recognition
                and connect with your audience across every touchpoint.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <Button
                  variant="unstyled"
                  onClick={() => setConsultModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl shadow-orange-600/30 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 uppercase tracking-wider text-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>Get A Free Brand Audit</span>
                </Button>
                <a
                  href="#solutions"
                  className="bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-bold px-7 py-4 rounded-lg transition flex items-center justify-center space-x-3 uppercase tracking-wider text-sm group"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/1e293b/d4af37?text=Velora+Homes+Brand+Identity"
                    alt="Brand Identity Showcase"
                    className="w-full h-72 object-cover rounded-xl shadow-md mb-4"
                  />
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span>Velora Homes Corporate Stationery</span>
                    <span className="text-orange-400 font-semibold">Premium Gold & Charcoal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="bg-white py-12 border-b border-slate-200 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Strategic Approach</h3>
              <p className="text-xs text-slate-500 leading-snug">
                Purpose-driven branding aligned to your business goals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Creative Excellence</h3>
              <p className="text-xs text-slate-500 leading-snug">
                Unique, memorable and impactful brand designs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Consistent Identity</h3>
              <p className="text-xs text-slate-500 leading-snug">
                Cohesive brand experience across all platforms.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Audience Connection</h3>
              <p className="text-xs text-slate-500 leading-snug">
                Brands that speak to your audience and build trust.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Fast Turnaround</h3>
              <p className="text-xs text-slate-500 leading-snug">
                Efficient delivery without compromising quality.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-orange-50/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <RefreshCw className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Ongoing Support</h3>
              <p className="text-xs text-slate-500 leading-snug">
                We support your brand as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Branding Solutions Grid */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs bg-orange-100 px-3 py-1 rounded-full">
              What's Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Complete Branding Solutions
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Everything you need to establish, launch, and scale a world-class brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Brand+Strategy"
                    alt="Brand Strategy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Strategy</h3>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Brand Discovery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Market & Competitor Analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Brand Positioning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Messaging Framework</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setConsultModalOpen(true)}
                className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Logo+Design"
                    alt="Logo Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Logo Design</h3>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Concept Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Logo Variations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Revisions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Final Logo Files</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setConsultModalOpen(true)}
                className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Brand+Identity"
                    alt="Brand Identity"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Identity</h3>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Color Palette</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Typography</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Iconography</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Brand Patterns</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setConsultModalOpen(true)}
                className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Solution 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Brand+Collateral"
                    alt="Brand Collateral"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Collateral</h3>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Business Cards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Letterheads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Envelopes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Folders & More</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setConsultModalOpen(true)}
                className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Solution 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Brand+Guidelines"
                    alt="Brand Guidelines"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Guidelines</h3>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Logo Usage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Color & Typography Rules</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Visual Application</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Brand Do's & Don'ts</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setConsultModalOpen(true)}
                className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Solution 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100 flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Digital+Branding"
                    alt="Digital Branding"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Digital Branding</h3>
                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Social Media Kit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Email Signature</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Presentation Templates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>Digital Assets</span>
                  </li>
                </ul>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setConsultModalOpen(true)}
                className="w-full bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Proven Branding Process Timeline */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">A Proven Branding Process</h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              A structured, collaborative approach to creating brands that leave lasting
              impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-xl font-black mb-6 shadow-lg shadow-orange-600/30">
                01
              </div>
              <h3 className="font-bold text-base mb-1 text-white">Discover</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We learn about your business, audience and goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-orange-500 flex items-center justify-center text-xl font-black mb-6 shadow-lg">
                02
              </div>
              <h3 className="font-bold text-base mb-1 text-white">Research</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We analyze your market, competitors and opportunities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-orange-500 flex items-center justify-center text-xl font-black mb-6 shadow-lg">
                03
              </div>
              <h3 className="font-bold text-base mb-1 text-white">Strategize</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We define your brand positioning, message and identity direction.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-orange-500 flex items-center justify-center text-xl font-black mb-6 shadow-lg">
                04
              </div>
              <h3 className="font-bold text-base mb-1 text-white">Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We create unique visual concepts that bring your brand to life.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-orange-500 flex items-center justify-center text-xl font-black mb-6 shadow-lg">
                05
              </div>
              <h3 className="font-bold text-base mb-1 text-white">Refine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We collaborate, refine and perfect until it's just right.
              </p>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-orange-500 flex items-center justify-center text-xl font-black mb-6 shadow-lg">
                06
              </div>
              <h3 className="font-bold text-base mb-1 text-white">Deliver</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You receive all brand assets and guidelines for consistent use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We've Built With Purpose (Portfolio Filter Showcase) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs bg-orange-100 px-3 py-1 rounded-full">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Brands We'Ve Built With Purpose
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                "All",
                "Corporate",
                "Healthcare",
                "Education",
                "Real Estate",
                "Hospitality",
                "Retail",
              ].map((tab) => (
                <Button
                  variant="unstyled"
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition shadow-sm ${activeTab === tab ? "bg-orange-600 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"}`}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {filteredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition group"
              >
                <div className="h-36 rounded-xl overflow-hidden mb-3 bg-white flex items-center justify-center border border-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="font-bold text-sm text-slate-900 text-center">{proj.name}</h3>
                <p className="text-[10px] text-slate-500 text-center uppercase tracking-wider mt-0.5">
                  {proj.category}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="unstyled"
              onClick={() => setConsultModalOpen(true)}
              className="inline-flex items-center space-x-2 text-orange-600 font-bold hover:text-orange-700 transition uppercase tracking-wider text-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Branding Matters & FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Why Branding Matters (Left) */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-xs bg-orange-100 px-3 py-1 rounded-full">
                Why Branding Matters
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-3 mb-6">
                A Strong Brand Helps You
              </h3>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Increase brand recognition and visibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Build trust and credibility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Attract and retain the right customers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Stand out from competitors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Support business growth and expansion</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <img
                  src="https://placehold.co/400x200/f1f5f9/f97316?text=Branding+Strategy+Laptop"
                  alt="Strategy Setup"
                  className="w-full h-36 object-cover rounded-xl shadow"
                />
              </div>
            </div>

            {/* FAQ Accordion (Right) */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-xs bg-orange-100 px-3 py-1 rounded-full">
                Frequently Asked Questions
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-3 mb-6">
                Everything You Need To Know
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition"
                  >
                    <Button
                      variant="unstyled"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between bg-slate-50/50 hover:bg-orange-50/30 transition"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-orange-600 transition transform ${openFaq === idx ? "rotate-180" : ""}`}
                      />
                    </Button>
                    {openFaq === idx && (
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Build A Powerful Brand CTA Card */}
      <section className="bg-slate-950 py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                Let's Talk
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">
                Ready To Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  A Powerful Brand?
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Let's create a brand identity that positions your business for success.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button
                  variant="unstyled"
                  onClick={() => setConsultModalOpen(true)}
                  className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-600/30 transition uppercase tracking-wider text-sm flex items-center justify-center space-x-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Book A Consultation</span>
                </Button>
                <a
                  href="https://wa.me/254720791677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-8 py-3.5 rounded-xl transition uppercase tracking-wider text-sm flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call / WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-orange-500 flex-shrink-0 border-2 border-orange-500">
                <img
                  src="https://placehold.co/100x100/f97316/ffffff?text=IQ"
                  alt="Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Dedicated Expert</h4>
                <p className="text-xs text-orange-400 font-medium">Brand Strategist</p>
                <p className="text-[11px] text-slate-400 mt-1">Ready to lead your transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black">Have an Idea in Mind?</h3>
            <p className="text-orange-100 text-sm mt-1">
              Share your requirements and we'll recommend the best branding solutions for your
              goals.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="unstyled"
              onClick={() => setConsultModalOpen(true)}
              className="bg-slate-900 hover:bg-slate-950 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition uppercase tracking-wider text-sm"
            >
              Request A Quote
            </Button>
            <a
              href="https://wa.me/254720791677"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition uppercase tracking-wider text-sm flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat On WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254720791677"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Consultation Modal */}
      {consultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100">
            <Button
              variant="unstyled"
              onClick={() => setConsultModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </Button>

            {consultSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900">Consultation Booked!</h3>
                <p className="text-sm text-slate-600">
                  Thank you. Our brand strategy team will reach out to you shortly to schedule your
                  session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs bg-orange-100 px-3 py-1 rounded-full">
                    Get Started
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2">
                    Request Brand Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form and we'll contact you instantly.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white"
                  >
                    <option>Complete Branding Solution</option>
                    <option>Brand Strategy & Positioning</option>
                    <option>Logo Design & Identity</option>
                    <option>Brand Collateral & Stationery</option>
                    <option>Brand Guidelines</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Project Details / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business and branding goals..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <Button
                  variant="unstyled"
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-600/30 transition uppercase tracking-wider text-xs flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
