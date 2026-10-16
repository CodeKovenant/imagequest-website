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
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  Clock3,
  Award,
  MessageCircle,
  Calendar,
  ExternalLink,
  Building2,
  Briefcase,
  FileText,
  HelpCircle,
  Star,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedBilling, setSelectedBilling] = useState("monthly");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the Corporate Brand Partnership work?",
      a: "We act as your outsourced branding department. You get dedicated creative hours, marketing strategy, and execution without the overhead of hiring an in-house team.",
    },
    {
      q: "Can we customize the retainer package?",
      a: "Yes! While our Bronze, Silver, and Gold packages fit most organizations, we can tailor a bespoke scope of work depending on your monthly volume and multi-branch requirements.",
    },
    {
      q: "What if we need more design hours?",
      a: "Additional hours outside your monthly retainer can be added on-demand at discounted preferential hourly rates or rolled over depending on your agreement.",
    },
    {
      q: "Is there a minimum contract period?",
      a: "Our retainers operate on a flexible quarterly or annual commitment to ensure we can build robust, long-term brand equity and consistent marketing momentum.",
    },
    {
      q: "How do we get started?",
      a: "Simply click 'Partner With Us' or 'Book a Consultation'. We'll schedule an introductory discovery call to analyze your brand goals and recommend the ideal partnership tier.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans selection:bg-orange-600 selection:text-white">
      <SiteHeader />

      {}

      {}

      {}
      <header className="relative bg-[#111] overflow-hidden pt-12 pb-24 border-b border-zinc-800">
        {/* Background Overlay image mockup simulation */}
        <div
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/90 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-xs uppercase tracking-widest text-zinc-400 mb-3 font-semibold">
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>{" "}
            &gt;{" "}
            <Link to="/solutions" className="hover:text-orange-500">
              Solutions
            </Link>{" "}
            &gt; <span className="text-orange-500">Corporate Brand Partnership</span>
          </div>

          <div className="max-w-3xl mt-6">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-2 leading-none">
              CORPORATE
            </h1>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-orange-600 mb-6 leading-none">
              BRAND PARTNERSHIP
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-200 mb-4">
              Your Outsourced Branding Department
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
              A strategic partnership that gives your organization consistent branding, marketing
              support and creative excellence without the overhead of an in-house team.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-8 py-4 rounded transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2"
              >
                PARTNER WITH US <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="bg-zinc-800/80 hover:bg-zinc-700 text-white font-bold text-sm px-8 py-4 rounded border border-zinc-700 transition-all flex items-center gap-2"
              >
                VIEW RETAINER PLANS <ChevronDown className="w-4 h-4 text-orange-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16 relative z-10">
          <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-800 shadow-2xl">
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Users className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">500+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Businesses Served
              </div>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Clock3 className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">15+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Years Experience
              </div>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <Award className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">2,500+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Projects Completed
              </div>
            </div>
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <ShieldCheck className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">Dedicated</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Creative Team
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center pt-4 md:pt-0">
              <Zap className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl sm:text-3xl font-black text-white">Ongoing</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Strategic Support
              </div>
            </div>
          </div>
        </div>
      </header>

      {}
      <section className="py-20 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-2">
            WHY PARTNER WITH IMAGE QUEST?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            More Than A Supplier, We're Your Growth Partner
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Consistent Branding",
              desc: "Maintain a strong, consistent brand across all touchpoints.",
              icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
            },
            {
              title: "Cost Efficient",
              desc: "Fraction of the cost of hiring and managing an internal team.",
              icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
            },
            {
              title: "Strategic Support",
              desc: "Creative + marketing strategy aligned to your business goals.",
              icon: <Briefcase className="w-6 h-6 text-orange-500" />,
            },
            {
              title: "Dedicated Team",
              desc: "A dedicated team that understands your brand.",
              icon: <Users className="w-6 h-6 text-orange-500" />,
            },
            {
              title: "Fast Turnaround",
              desc: "Prioritized workflows and quick delivery.",
              icon: <Zap className="w-6 h-6 text-orange-500" />,
            },
            {
              title: "Scalable Solutions",
              desc: "Flexible support that grows with your business.",
              icon: <Star className="w-6 h-6 text-orange-500" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1f1f1f] border border-zinc-800 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-20 bg-[#111] border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-2">
            WHAT'S INCLUDED
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
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
              "SEO & Digital Marketing Support",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#181818] p-4 rounded-lg border border-zinc-800/80"
              >
                <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-200 font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Center Product Showcase */}
          <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1a1a1a] to-[#151515] rounded-2xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-orange-600/5 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80"
                alt="Branding Mockup"
                className="rounded-lg shadow-2xl object-cover w-full h-64 border border-zinc-700"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x400/222/fff?text=IQ+Branding+Assets";
                }}
              />
            </div>
            <div className="mt-6 text-center">
              <span className="text-xs uppercase tracking-widest font-bold text-orange-500">
                Premium Collaterals & Digital Assets
              </span>
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
              "Priority Support & Quick Turnaround",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#181818] p-4 rounded-lg border border-zinc-800/80"
              >
                <div className="w-6 h-6 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-zinc-200 font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            A Simple Partnership Process
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "We understand your business, goals and branding needs.",
            },
            {
              step: "02",
              title: "Plan",
              desc: "We create a tailored branding & marketing plan for you.",
            },
            {
              step: "03",
              title: "Execute",
              desc: "Our team delivers high-quality creative and marketing.",
            },
            {
              step: "04",
              title: "Review",
              desc: "We analyze results and refine for better performance.",
            },
            { step: "05", title: "Grow", desc: "We continuously support your brand growth." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1f1f1f] border border-zinc-800 rounded-xl p-6 text-center flex flex-col items-center relative group hover:border-orange-500 transition-colors"
            >
              <div className="text-orange-600 font-black text-2xl mb-2">{item.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="pricing" className="py-20 bg-[#111] border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-16">
          <span className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-2">
            RETAINER PACKAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Flexible Plans. Measurable Results.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Bronze Tier */}
          <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                  BRONZE
                </span>
                <h3 className="text-2xl font-black text-white mb-4">Essentials</h3>
                <div className="text-3xl sm:text-4xl font-black text-orange-500">
                  KES 39,999 <span className="text-xs text-zinc-400 font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-zinc-800 pt-6">
                {[
                  "Up to 20 design hours/month",
                  "1 Marketing campaign/month",
                  "Social media management",
                  "Monthly reporting",
                  "Email support",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-center py-3 rounded text-sm uppercase tracking-wider transition-colors"
              to="/contact"
            >
              GET STARTED
            </Link>
          </div>

          {/* Silver Tier (Most Popular) */}
          <div className="bg-[#1a1a1a] border-2 border-orange-600 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-orange-600/10">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-[10px] uppercase font-black px-4 py-1 rounded-full tracking-widest">
              MOST POPULAR
            </div>

            <div>
              <div className="text-center mb-6 pt-2">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold block mb-1">
                  SILVER
                </span>
                <h3 className="text-2xl font-black text-white mb-4">Growth</h3>
                <div className="text-3xl sm:text-4xl font-black text-orange-500">
                  KES 69,999 <span className="text-xs text-zinc-400 font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-zinc-800 pt-6">
                {[
                  "Up to 40 design hours/month",
                  "2 Marketing campaigns/month",
                  "Social media management",
                  "Website updates",
                  "SEO & digital marketing support",
                  "Monthly reporting & review",
                  "Priority email & phone support",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-200">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-center py-3 rounded text-sm uppercase tracking-wider transition-colors shadow-lg shadow-orange-600/30"
              to="/contact"
            >
              GET STARTED
            </Link>
          </div>

          {/* Gold Tier */}
          <div className="bg-[#181818] border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div>
              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                  GOLD
                </span>
                <h3 className="text-2xl font-black text-white mb-4">Enterprise</h3>
                <div className="text-3xl sm:text-4xl font-black text-orange-500">
                  KES 129,999 <span className="text-xs text-zinc-400 font-normal">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 border-t border-zinc-800 pt-6">
                {[
                  "Up to 80 design hours/month",
                  "Unlimited marketing campaigns",
                  "Full marketing management",
                  "Website management",
                  "Advanced SEO & advertising",
                  "Quarterly strategy meetings",
                  "Priority support",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-center py-3 rounded text-sm uppercase tracking-wider transition-colors"
              to="/contact"
            >
              GET STARTED
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-zinc-500">
          *Prices are exclusive of VAT. Terms & conditions apply.
        </div>
      </section>

      {}
      <section className="py-20 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-12">
          <span className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-2">
            TRUSTED BY ORGANIZATIONS THAT LEAD
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-6 gap-6 mb-16">
          {["KenGen", "NHIF", "KNH", "EQUITY", "Britam", "UNGA"].map((org, i) => (
            <div
              key={i}
              className="bg-[#1f1f1f] border border-zinc-800 rounded-xl p-6 flex items-center justify-center font-black text-xl text-zinc-400 hover:text-white transition-colors h-24"
            >
              {org}
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto px-4 sm:px-8 bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-8 sm:p-12 relative">
          <div className="text-orange-500 text-6xl font-serif absolute top-4 left-6 opacity-30">
            “
          </div>
          <p className="text-zinc-200 text-lg sm:text-xl italic mb-6 relative z-10 leading-relaxed text-center">
            Image Quest acts as our extended branding team. They understand our brand, move fast and
            consistently deliver quality work that helps us maintain a strong presence.
          </p>
          <div className="text-center font-bold text-sm text-orange-500">
            — Marketing Manager, Leading Financial Institution
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-600"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-[#111] border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-widest text-xs font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-zinc-800 rounded-xl overflow-hidden transition-all"
              >
                <Button
                  variant="unstyled"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-zinc-800/50 transition-colors"
                >
                  <span className="font-bold text-zinc-200 text-base">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500 shrink-0" />
                  )}
                </Button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                Ready To Build A Stronger, More Consistent Brand?
              </h2>
              <p className="text-orange-100 text-base sm:text-lg mb-8 leading-relaxed">
                Let's discuss how we can become your strategic branding partner.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="bg-black hover:bg-zinc-900 text-white font-bold text-sm px-8 py-4 rounded transition-all flex items-center gap-2 shadow-lg"
                  to="/contact"
                >
                  <Calendar className="w-4 h-4 text-orange-500" /> BOOK A CONSULTATION
                </Link>
                <a
                  href="https://wa.me/254720791677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-sm px-8 py-4 rounded transition-all flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4 text-orange-600" /> CALL / WHATSAPP
                </a>
              </div>
            </div>

            <div className="z-10 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Professional Portrait"
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-orange-500/30"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x400/333/fff?text=Consultant";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {}

      {}
      <a
        href="https://wa.me/254720791677"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>

      <SiteFooter />
    </div>
  );
}
