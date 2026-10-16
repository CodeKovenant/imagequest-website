import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock3,
  Globe,
  HeartHandshake,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Menu,
  X,
  Briefcase,
  ChevronDown,
  Sparkles,
  Building2,
  Layers,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 font-sans selection:bg-orange-500 selection:text-white">
      <SiteHeader />

      {}

      {}

      {}
      <section className="relative bg-[#181818] text-white py-12 lg:py-20 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ff5722_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm text-zinc-400 mb-6 flex items-center gap-2">
            <Link className="hover:text-orange-500 transition" to="/">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-orange-500 font-medium">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-orange-500/20">
                About Our Agency
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Image Quest <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  Graphics Ltd
                </span>
              </h1>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                We are a strategic branding, signage, print and digital solutions agency helping
                businesses launch, grow and lead with confidence.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  variant="unstyled"
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded shadow-xl shadow-orange-600/30 transition flex items-center gap-3 uppercase text-sm tracking-wider"
                >
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href="tel:+254720791677"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded border border-zinc-700 transition flex items-center gap-3 uppercase text-sm tracking-wider"
                >
                  <Phone className="w-4 h-4 text-orange-500" /> Speak To An Expert
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-xl lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-800 bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Image Quest Graphics Reception"
                  className="w-full h-[350px] sm:h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="flex items-center gap-4 bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-700 w-full">
                    <div className="bg-orange-600 p-3 rounded-lg text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">State-of-the-Art HQ</h4>
                      <p className="text-xs text-zinc-400">West Point, Waiyaki Way, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-orange-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-8 h-0.5 bg-orange-500"></span> Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                From A Creative Idea To A <br />
                <span className="text-orange-500">Trusted Branding Partner</span>
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                Image Quest Graphics Ltd was founded in 2009 with a simple belief that every
                business deserves a strong, professional and consistent brand. What started as a
                small graphics and printing studio has grown into a full-service branding, signage
                and digital solutions agency trusted by hundreds of organizations across Kenya and
                beyond.
              </p>
              <p className="text-zinc-300 text-base leading-relaxed">
                Today, we partner with SMEs, corporates, institutions and startups to build brands
                that command trust and deliver lasting impact.
              </p>

              <div className="pt-4">
                <a
                  href="#milestones"
                  className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-400 font-bold uppercase text-sm tracking-wider group"
                >
                  Our Journey
                  <span className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-7 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="col-span-12 sm:col-span-5 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                    alt="Branding Signage"
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                    alt="Advanced Printing Press"
                    className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="col-span-12 sm:col-span-6 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
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
      <section
        id="milestones"
        className="py-20 bg-[#111111] text-white border-t border-b border-zinc-800 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Milestones That Shaped Us
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {[
                {
                  year: "2009",
                  title: "Founded",
                  desc: "Founded as Image Quest Graphics & Stationery Supplies.",
                },
                {
                  year: "2012",
                  title: "Expansion",
                  desc: "Expanded our services to include signage and branding.",
                },
                {
                  year: "2016",
                  title: "Incorporation",
                  desc: "Incorporated as Image Quest Graphics Ltd.",
                },
                {
                  year: "2019",
                  title: "Digital Growth",
                  desc: "Launched digital solutions including websites & SEO.",
                },
                {
                  year: "2022",
                  title: "Scaling Up",
                  desc: "Grew our team and served over 300 businesses.",
                },
                {
                  year: "2024+",
                  title: "Innovation",
                  desc: "Continuing to innovate and help businesses grow across Africa.",
                },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className="bg-[#191919] p-6 rounded-xl border border-zinc-800 flex flex-col items-center text-center group hover:border-orange-500 transition duration-300 shadow-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-orange-600/30 group-hover:scale-110 transition">
                    {idx + 1}
                  </div>
                  <span className="text-orange-500 font-extrabold text-xl mb-1">{m.year}</span>
                  <h3 className="text-white font-bold text-sm mb-2 uppercase">{m.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#151515] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mb-6 border border-orange-500/20">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-wider text-orange-500">
                Our Mission
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                To help businesses build brands that command trust through creative branding,
                signage, print and digital solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mb-6 border border-orange-500/20">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-wider text-orange-500">
                Our Vision
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                To become East Africa's most respected branding and business growth partner.
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-orange-600/10 text-orange-500 flex items-center justify-center mb-6 border border-orange-500/20">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-orange-500">
                Our Values
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-300">
                {[
                  "Professionalism",
                  "Creativity",
                  "Integrity",
                  "Innovation",
                  "Reliability",
                  "Customer Success",
                  "Quality",
                  "Continuous Improvement",
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-[#111111] border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-black text-white mt-1">
                More Than A Supplier, We're Your Partner
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                variant="unstyled"
                onClick={() => setQuoteModalOpen(true)}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded text-sm uppercase tracking-wider transition shadow-lg shadow-orange-600/20"
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
                <div
                  key={idx}
                  className="bg-[#181818] p-6 rounded-xl border border-zinc-800 text-center flex flex-col items-center justify-center hover:border-orange-500 transition group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-600/10 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-xs uppercase leading-snug">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
              Our Leadership Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              The Minds Behind The Brand
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Benard Nzioka",
                role: "Marketing Director",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Grace Ndegwa",
                role: "Accounts Manager",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Wilfred Kariuki",
                role: "Head of Production",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Lilian Mwangi",
                role: "Design & Creative Lead",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
              },
              {
                name: "Asif Rahman",
                role: "Digital Solutions Lead",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-zinc-800 group hover:border-orange-500 transition shadow-xl flex flex-col"
              >
                <div className="h-64 overflow-hidden relative bg-zinc-900">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-5 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
                    <p className="text-orange-500 text-xs font-medium uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="unstyled"
              onClick={() => setQuoteModalOpen(true)}
              className="inline-flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-8 py-4 rounded border border-zinc-700 transition uppercase text-sm tracking-wider shadow-lg"
            >
              Join Our Team <ArrowRight className="w-4 h-4 text-orange-500" />
            </Button>
          </div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-14 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <div className="bg-black/20 p-4 rounded-2xl hidden sm:flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-orange-100 text-sm mt-1">
                Book a free consultation with our team today.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Button
              variant="unstyled"
              onClick={() => setQuoteModalOpen(true)}
              className="bg-black text-white hover:bg-zinc-900 font-bold px-8 py-4 rounded shadow-xl transition uppercase text-sm tracking-wider"
            >
              Book A Consultation
            </Button>
            <a
              href="https://wa.me/254720791677"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded shadow-xl transition uppercase text-sm tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-green-600" /> Call / Whatsapp
            </a>
          </div>
        </div>
      </section>

      {}

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/254720791677"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Quote / Consultation Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-zinc-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-white">
            <Button
              variant="unstyled"
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2"
            >
              <X className="w-6 h-6" />
            </Button>
            <h3 className="text-2xl font-black mb-2 text-orange-500">
              Request A Quote / Consultation
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out your details and our team will get back to you shortly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your request has been submitted successfully.");
                setQuoteModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-[#121212] border border-zinc-700 rounded p-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-[#121212] border border-zinc-700 rounded p-3 text-sm text-white focus:outline-none focus:border-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-[#121212] border border-zinc-700 rounded p-3 text-sm text-white focus:outline-none focus:border-orange-500"
                    placeholder="+254 700 000000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                  Service Interested In
                </label>
                <select className="w-full bg-[#121212] border border-zinc-700 rounded p-3 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option>Branding & Design</option>
                  <option>Signage & Corporate Displays</option>
                  <option>Large Format Printing</option>
                  <option>Websites & Digital Solutions</option>
                  <option>Promotional Merchandise</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-300 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-[#121212] border border-zinc-700 rounded p-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button
                variant="unstyled"
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded uppercase text-sm tracking-wider shadow-lg transition"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
