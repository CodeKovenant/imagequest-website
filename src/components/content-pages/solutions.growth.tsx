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
  ChevronUp,
  Check,
  ArrowRight,
  Play,
  Globe,
  Search,
  Layers,
  Printer,
  Share2,
  Target,
  BarChart2,
  Users,
  Shield,
  Zap,
  Compass,
  Lightbulb,
  PenTool,
  Rocket,
  Settings,
  TrendingUp,
  MessageCircle,
  Calendar,
  Award,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedBilling, setSelectedBilling] = useState<"monthly" | "annual">("monthly");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "Most clients begin to see noticeable improvements within 4–8 weeks, depending on the strategy and industry competitiveness.",
    },
    {
      q: "Can I customize the package?",
      a: "Yes! All packages can be tailored to meet your specific business requirements, target audience, and growth milestones.",
    },
    {
      q: "Do you manage paid ads as well?",
      a: "Absolutely. Our team expertly handles targeted ad campaigns across Google, Meta (Facebook & Instagram), LinkedIn, and YouTube.",
    },
    {
      q: "Is there a contract lock-in period?",
      a: "We believe in earning your business every month. Our standard agreements are flexible with no rigid long-term lock-ins required.",
    },
    {
      q: "What platforms do you manage?",
      a: "We manage all major digital platforms including Google Ads, Facebook, Instagram, LinkedIn, TikTok, YouTube, and comprehensive SEO structures.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white">
      <SiteHeader />

      {/* Shared site header */}
      {}

      {/* HERO SECTION */}
      {}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-16 lg:py-24 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ea580c15,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-8 font-medium">
            <Link className="hover:text-orange-500" to="/">
              Home
            </Link>
            <span>›</span>
            <Link className="hover:text-orange-500" to="/solutions">
              Solutions
            </Link>
            <span>›</span>
            <span className="text-orange-500 font-semibold">Business Growth Package</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none">
                BUSINESS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500">
                  GROWTH PACKAGE
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-200">
                Attract More Customers. Increase Sales. Grow Consistently.
              </p>

              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
                Our Business Growth Package is designed for businesses ready to scale. We help you
                increase your visibility, strengthen your brand, and generate more leads through
                strategic marketing and consistent brand communication.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  variant="unstyled"
                  onClick={() => setActiveModal("started")}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-orange-600/30 flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
                >
                  <span>GET STARTED TODAY</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <Button
                  variant="unstyled"
                  onClick={() => setActiveModal("sample")}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 flex items-center gap-3 transition-all"
                >
                  <span>VIEW SAMPLE CAMPAIGN</span>
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
                    <Play className="w-3 h-3 text-orange-500 fill-orange-500" />
                  </div>
                </Button>
              </div>
            </div>

            {/* Right Graphic / Mockup representation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-2xl relative z-10 backdrop-blur-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
                      Live Campaign Status
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Optimized
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">More Visibility</h4>
                          <p className="text-xs text-slate-400">Reach the right audience</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">+240%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">More Leads</h4>
                          <p className="text-xs text-slate-400">Attract qualified prospects</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">+180%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">More Sales</h4>
                          <p className="text-xs text-slate-400">Convert leads into customers</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">+150%</span>
                    </div>
                  </div>
                </div>

                {/* Decorative background glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur-xl opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR GROWTH PACKAGE */}
      {}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              WHY CHOOSE OUR GROWTH PACKAGE?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Fuel Your Growth With Powerful Benefits
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-orange-500" />,
                title: "Targeted Marketing",
                desc: "We focus on the right channels to reach your ideal customers with razor-sharp precision.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
                title: "Increased Visibility",
                desc: "Boost your brand presence online and offline to dominate your local market.",
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "More Quality Leads",
                desc: "Attract and capture quality leads consistently through tailored campaigns.",
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-500" />,
                title: "Stronger Engagement",
                desc: "Build meaningful connections with your audience that foster long-term loyalty.",
              },
              {
                icon: <BarChart2 className="w-8 h-8 text-orange-500" />,
                title: "Higher Conversions",
                desc: "Convert more leads into paying customers through optimized sales funnels.",
              },
              {
                icon: <Rocket className="w-8 h-8 text-orange-500" />,
                title: "Scalable Growth",
                desc: "A proven strategy that grows with your business from startup to enterprise.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/80 p-8 rounded-2xl hover:border-orange-500/50 transition-all group"
              >
                <div className="p-4 rounded-xl bg-orange-500/10 w-fit mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - 6 CARDS GRID */}
      {}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              WHAT'S INCLUDED
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Everything You Need To Grow Your Business
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                icon: <Globe className="w-6 h-6 text-orange-500" />,
                features: [
                  "Social Media Management",
                  "Paid Ad Campaigns",
                  "Content Creation",
                  "Audience Targeting",
                ],
              },
              {
                title: "Website & Maintenance",
                icon: <Settings className="w-6 h-6 text-orange-500" />,
                features: [
                  "Website Updates",
                  "Speed & Security",
                  "Landing Pages",
                  "Performance Reports",
                ],
              },
              {
                title: "Search Engine Optimization",
                icon: <Search className="w-6 h-6 text-orange-500" />,
                features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reporting"],
              },
              {
                title: "Branding & Design",
                icon: <PenTool className="w-6 h-6 text-orange-500" />,
                features: [
                  "Marketing Collateral",
                  "Brochures & Flyers",
                  "Presentation Design",
                  "Brand Consistency",
                ],
              },
              {
                title: "Print & Signage",
                icon: <Printer className="w-6 h-6 text-orange-500" />,
                features: [
                  "Banners & Posters",
                  "Roll-up Banners",
                  "Exhibition Materials",
                  "Large Format Printing",
                ],
              },
              {
                title: "Social Media Growth",
                icon: <Share2 className="w-6 h-6 text-orange-500" />,
                features: [
                  "Profile Optimization",
                  "Content Strategy",
                  "Community Engagement",
                  "Monthly Analytics",
                ],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-orange-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-3 rounded-xl bg-orange-500/10">{card.icon}</div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-orange-500" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="unstyled"
                  onClick={() => setActiveModal(card.title)}
                  className="w-full py-3 bg-slate-950 hover:bg-orange-600 hover:text-white text-orange-400 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-800 hover:border-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS - 6 STEP TIMELINE */}
      {}
      <section className="py-20 bg-slate-900/50 border-t border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              A Proven Strategy To Grow Your Business
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "We understand your business, goals and target audience.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "We develop a growth strategy tailored to your needs.",
              },
              {
                step: "03",
                title: "Create",
                desc: "Our team creates content, campaigns and designs.",
              },
              {
                step: "04",
                title: "Execute",
                desc: "We launch and manage campaigns across channels.",
              },
              {
                step: "05",
                title: "Optimize",
                desc: "We monitor, test and optimize for peak performance.",
              },
              {
                step: "06",
                title: "Grow",
                desc: "We help you scale and achieve sustainable growth.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col items-center text-center group hover:border-orange-500 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 font-black text-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE OPTIONS */}
      {}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              PACKAGE OPTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Flexible Plans For Every Stage Of Growth
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Growth Starter */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white">Growth Starter</h3>
                <p className="text-sm text-slate-400 mt-1">Perfect for Small Businesses</p>
              </div>

              <div className="py-4 border-t border-b border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500 block">
                  KES
                </span>
                <span className="text-4xl font-black text-white">29,999</span>
                <span className="text-slate-400 text-sm"> /month</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>2 Social Platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>2 Ad Campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Monthly Reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Basic SEO</span>
                </li>
              </ul>

              <Button
                variant="unstyled"
                onClick={() => setActiveModal("Growth Starter")}
                className="w-full py-4 rounded-xl border border-slate-700 hover:border-orange-500 font-bold text-white transition-all bg-slate-950"
              >
                GET STARTED
              </Button>
            </div>

            {/* Growth Pro (Most Popular) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-orange-500 rounded-3xl p-8 space-y-6 relative shadow-2xl shadow-orange-500/10 transform lg:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                MOST POPULAR
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Growth Pro</h3>
                <p className="text-sm text-slate-400 mt-1">Great for Growing Businesses</p>
              </div>

              <div className="py-4 border-t border-b border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500 block">
                  KES
                </span>
                <span className="text-4xl font-black text-white">49,999</span>
                <span className="text-slate-400 text-sm"> /month</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>4 Social Platforms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>4 Ad Campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Advanced SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Website Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Monthly Reports</span>
                </li>
              </ul>

              <Button
                variant="unstyled"
                onClick={() => setActiveModal("Growth Pro")}
                className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 font-bold text-white shadow-lg shadow-orange-600/30 transition-all"
              >
                GET STARTED
              </Button>
            </div>

            {/* Growth Elite */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-black text-white">Growth Elite</h3>
                <p className="text-sm text-slate-400 mt-1">For Established Businesses</p>
              </div>

              <div className="py-4 border-t border-b border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-orange-500 block">
                  KES
                </span>
                <span className="text-4xl font-black text-white">79,999</span>
                <span className="text-slate-400 text-sm"> /month</span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>All Marketing Channels</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Unlimited Campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Premium SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Dedicated Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500" />
                  <span>Weekly Reports</span>
                </li>
              </ul>

              <Button
                variant="unstyled"
                onClick={() => setActiveModal("Growth Elite")}
                className="w-full py-4 rounded-xl border border-slate-700 hover:border-orange-500 font-bold text-white transition-all bg-slate-950"
              >
                GET STARTED
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            * Prices are exclusive of VAT. Terms & conditions apply.
          </p>
        </div>
      </section>

      {/* FAQ & SUCCESS STORY SECTION */}
      {}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* FAQ Accordion */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="text-3xl font-black tracking-tight mt-1">
                  Got Questions? We've Got Answers
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden"
                  >
                    <Button
                      variant="unstyled"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left font-bold flex items-center justify-between gap-4 hover:text-orange-400 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {activeFaq === idx ? (
                        <ChevronUp className="w-5 h-5 text-orange-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </Button>
                    {activeFaq === idx && (
                      <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-900 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Chat Prompt Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <p className="text-slate-400 text-sm">
                Chat with our growth specialists directly on WhatsApp for immediate assistance.
              </p>
              <a
                href="https://wa.me/254720791677"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* SUCCESS STORY */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                  SUCCESS STORY
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                  Helping Businesses Achieve Real Growth
                </h3>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setActiveModal("case-study")}
                className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-bold text-sm"
              >
                <span>VIEW FULL CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 space-y-4">
                <div className="font-black text-3xl tracking-wider text-white">APEX</div>
                <p className="text-xs text-slate-500 uppercase tracking-widest">SUPPLIES LTD</p>
                <p className="text-xs text-slate-400">
                  Apex Supplies had low online visibility and inconsistent brand presence.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-sm text-white">Our Solution</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We implemented a full digital marketing strategy, SEO, and branding revamp.
                </p>
              </div>

              <div className="lg:col-span-4 grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                    +230%
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Website Traffic</span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                    +180%
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Leads Generated</span>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <span className="text-xl sm:text-2xl font-black text-emerald-400 block">
                    +150%
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">Sales Increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      {}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-12 px-4 sm:px-8 text-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 text-orange-500 flex items-center justify-center shrink-0 shadow-xl">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Ready To Accelerate Your Business Growth?
              </h3>
              <p className="text-slate-900 font-semibold text-sm sm:text-base mt-1">
                Let's build a strategy that drives more visibility, leads and sales.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button
              variant="unstyled"
              onClick={() => setActiveModal("consultation")}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-orange-500" />
              <span>BOOK A FREE CONSULTATION</span>
            </Button>
            <a
              href="https://wa.me/254720791677"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>CALL / WHATSAPP</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {}

      {/* INTERACTIVE MODAL POPUP */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">
                    {activeModal === "quote" && "Request a Quote"}
                    {activeModal === "started" && "Get Started Today"}
                    {activeModal === "sample" && "Sample Campaign Preview"}
                    {activeModal === "consultation" && "Book Free Consultation"}
                    {activeModal === "case-study" && "Apex Supplies Case Study"}
                    {["Growth Starter", "Growth Pro", "Growth Elite"].includes(activeModal) &&
                      `${activeModal} Plan`}
                    {[
                      "Digital Marketing",
                      "Website & Maintenance",
                      "Search Engine Optimization",
                      "Branding & Design",
                      "Print & Signage",
                      "Social Media Growth",
                    ].includes(activeModal) && activeModal}
                  </h3>
                  <p className="text-xs text-slate-400">Image Quest Graphics Ltd Growth Program</p>
                </div>
              </div>
              <Button
                variant="unstyled"
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 font-bold"
              >
                ✕
              </Button>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <p className="leading-relaxed">
                Thank you for your interest in our business growth solutions. Our expert strategy
                consultants in Nairobi are ready to assist you in scaling your brand.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase">
                  <span>Direct Contact</span>
                </div>
                <p className="text-xs text-slate-400">
                  Call us now at <strong className="text-white">+254 720 791 677</strong> or email{" "}
                  <strong className="text-white">info@imagequest.co.ke</strong>.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Your Phone / Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone or email..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button
                variant="unstyled"
                onClick={() => {
                  alert(
                    "Thank you! Your request has been received. Our team will contact you shortly.",
                  );
                  setActiveModal(null);
                }}
                className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-orange-600/30"
              >
                Submit Request
              </Button>
              <Button
                variant="unstyled"
                onClick={() => setActiveModal(null)}
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 font-bold text-white rounded-xl transition-all"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
