import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  Phone, Mail, Clock, MapPin, Search, ChevronRight, Check, ArrowRight, 
  Menu, X, Facebook, Instagram, Linkedin, Youtube, ExternalLink, Award,
  BarChart2, Target, TrendingUp, Settings, Zap, Shield, Users, Globe,
  MessageCircle, Calendar, FileText, Download, Briefcase, HelpCircle
} from 'lucide-react';

export default function ContentPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setAuditSubmitted(true);
    setTimeout(() => {
      setAuditSubmitted(false);
      setAuditModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-topbar text-muted font-sans selection:bg-topbar selection:text-brand-foreground">
      <SiteHeader />


      {}
      <section className="relative bg-gradient-to-b from-topbar via-topbar to-topbar pt-8 pb-20 px-4 lg:px-12 overflow-hidden border-b border-primary">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-medium">
            <span className="hover:text-brand-foreground cursor-pointer">Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="hover:text-brand-foreground cursor-pointer">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-topbar font-semibold">Digital Marketing</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-topbar/10 border border-topbar/30 px-3.5 py-1.5 rounded-md text-topbar text-xs font-bold uppercase tracking-normalst">
                Digital Marketing
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-normal text-brand-foreground leading-[1.1]">
                Digital Strategies. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-topbar via-topbar to-topbar">
                  Real Results.
                </span>
              </h1>
              <p className="text-border text-base sm:text-lg max-w-xl leading-relaxed">
                We help businesses grow online with data-driven digital marketing strategies that attract, engage and convert your ideal customers into loyal clients.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button variant="unstyled" 
                  onClick={() => setAuditModalOpen(true)}
                  className="bg-topbar hover:bg-topbar text-brand-foreground font-bold px-7 py-4 rounded-lg shadow-xl shadow-[#FF5722]/30 flex items-center gap-3 transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  GET A FREE MARKETING AUDIT
                </Button>
                <a 
                  href="#success-stories"
                  className="bg-topbar hover:bg-topbar text-border border border-muted-foreground font-semibold px-7 py-4 rounded-lg flex items-center gap-3 transition-all text-sm"
                >
                  VIEW OUR CASE STUDIES
                  <ArrowRight className="w-4 h-4 text-topbar" />
                </a>
              </div>
            </div>

            {/* Laptop Mockup Visual */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-topbar/30 to-purple-600/20 rounded-3xl blur-2xl opacity-70"></div>
              <div className="relative bg-topbar border border-primary rounded-2xl p-4 shadow-2xl">
                <div className="bg-topbar rounded-xl overflow-hidden border border-primary shadow-inner">
                  <div className="bg-topbar px-4 py-2.5 flex items-center gap-2 border-b border-primary">
                    <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-success/80"></div>
                    <div className="ml-4 bg-topbar text-[11px] text-muted-foreground px-4 py-1 rounded-md flex-1 text-center font-mono border border-primary">
                      imagequest.co.ke/digital-growth-dashboard
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-topbar to-topbar">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="font-bold text-brand-foreground text-lg">Digital Growth That Drives Results</h4>
                        <p className="text-xs text-muted-foreground">Real-time client campaign overview</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-8 h-8 rounded-full bg-topbar/20 flex items-center justify-center text-topbar font-bold text-xs">IQ</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="bg-topbar p-3 rounded-xl border border-primary">
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase">Visitors</span>
                        <h3 className="text-xl font-black text-brand-foreground mt-1">12.5K</h3>
                        <span className="text-[10px] text-success font-bold flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +18.7%</span>
                      </div>
                      <div className="bg-topbar p-3 rounded-xl border border-primary">
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase">Leads</span>
                        <h3 className="text-xl font-black text-brand-foreground mt-1">1.2K</h3>
                        <span className="text-[10px] text-success font-bold flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +28.3%</span>
                      </div>
                      <div className="bg-topbar p-3 rounded-xl border border-primary">
                        <span className="text-[10px] text-muted-foreground font-semibold uppercase">Sales</span>
                        <h3 className="text-xl font-black text-brand-foreground mt-1">850</h3>
                        <span className="text-[10px] text-success font-bold flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +12.1%</span>
                      </div>
                    </div>
                    <div className="h-28 w-full bg-topbar rounded-xl border border-primary p-3 flex items-end gap-2">
                      {[40, 65, 45, 80, 70, 95, 85, 100, 90, 110].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-topbar/40 to-topbar rounded-t transition-all hover:opacity-100 opacity-80" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -bottom-6 -right-6 bg-topbar border border-muted-foreground p-4 rounded-2xl shadow-2xl hidden sm:flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-topbar flex items-center justify-center text-brand-foreground font-black">IQ</div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-foreground">Verified ROI</h5>
                    <p className="text-[10px] text-success font-semibold">Average 3.4x Return on Ad Spend</p>
                  </div>
                </div>
                {/* Social Badges */}
                <div className="absolute -top-4 -right-4 flex gap-2">
                  <div className="w-9 h-9 rounded-full bg-info flex items-center justify-center text-brand-foreground shadow-lg"><Facebook className="w-4 h-4" /></div>
                  <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center text-brand-foreground shadow-lg"><Instagram className="w-4 h-4" /></div>
                  <div className="w-9 h-9 rounded-full bg-info flex items-center justify-center text-brand-foreground shadow-lg"><Linkedin className="w-4 h-4" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-topbar border-b border-primary px-4 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {[
            { icon: <Target className="w-6 h-6 text-topbar" />, title: "Data-Driven Approach", desc: "Smart strategies based on data, insights and analytics." },
            { icon: <Users className="w-6 h-6 text-topbar" />, title: "Targeted Reach", desc: "Reach the right audience at the right time." },
            { icon: <BarChart2 className="w-6 h-6 text-topbar" />, title: "Measurable Results", desc: "Clear KPIs and reports that show real growth." },
            { icon: <Settings className="w-6 h-6 text-topbar" />, title: "Full Funnel Solutions", desc: "From awareness to conversion – we cover it all." },
            { icon: <Zap className="w-6 h-6 text-topbar" />, title: "Always Optimizing", desc: "Continuous testing and improvement for better ROI." },
            { icon: <Shield className="w-6 h-6 text-topbar" />, title: "Expert Support", desc: "A dedicated team that cares about your growth." },
          ].map((feat, index) => (
            <div key={index} className="bg-topbar border border-primary p-6 rounded-xl hover:border-topbar/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-topbar/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="font-bold text-brand-foreground text-sm mb-2">{feat.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-24 px-4 lg:px-12 bg-topbar">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-topbar text-xs font-bold uppercase tracking-normalst block mb-2">Our Digital Marketing Services</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal">Complete Solutions For Online Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Social Media Marketing",
                icon: "🚀",
                items: ["Content Creation", "Community Management", "Paid Social Ads", "Performance Tracking"]
              },
              {
                title: "Search Engine Optimization (SEO)",
                icon: "🔍",
                items: ["Keyword Research", "On-Page & Off-Page SEO", "Technical SEO", "Local SEO"]
              },
              {
                title: "Google Ads (PPC)",
                icon: "🎯",
                items: ["Search Ads", "Display Ads", "Remarketing", "Conversion Tracking"]
              },
              {
                title: "Content Marketing",
                icon: "✍️",
                items: ["Blog Writing", "Content Strategy", "Infographics & Visuals", "Lead Magnets"]
              },
              {
                title: "Email Marketing",
                icon: "✉️",
                items: ["Email Campaigns", "Automation Workflows", "Newsletter Design", "List Management"]
              },
              {
                title: "Analytics & Reporting",
                icon: "📊",
                items: ["Google Analytics 4", "Performance Reports", "KPI Dashboards", "Actionable Insights"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-topbar border border-primary rounded-2xl p-7 hover:border-topbar transition-all group flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4 bg-topbar w-14 h-14 rounded-xl flex items-center justify-center border border-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-foreground mb-6 group-hover:text-topbar transition-colors">{service.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-border">
                        <span className="w-5 h-5 rounded-full bg-topbar/20 text-topbar flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="unstyled" 
                  onClick={() => setAuditModalOpen(true)}
                  className="w-full bg-topbar hover:bg-topbar hover:text-brand-foreground text-border font-semibold py-3 rounded-lg text-xs uppercase tracking-normalr transition-all border border-primary"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-topbar border-t border-b border-primary px-4 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-topbar text-xs font-bold uppercase tracking-normalst block mb-2">Our Process</span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal">A Proven Process. Predictable Growth.</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {[
            { step: "01", title: "Research", desc: "We learn about your business, audience and goals." },
            { step: "02", title: "Strategy", desc: "We create a custom digital marketing strategy." },
            { step: "03", title: "Plan & Setup", desc: "We set up campaigns, tools and content calendars." },
            { step: "04", title: "Execute", desc: "We launch, optimize and manage your campaigns." },
            { step: "05", title: "Measure", desc: "We analyze results and track what matters." },
            { step: "06", title: "Optimize", desc: "We refine and scale what works for better outcomes." },
          ].map((proc, index) => (
            <div key={index} className="bg-topbar border border-primary p-6 rounded-2xl relative text-center group hover:border-topbar transition-all">
              <div className="w-12 h-12 rounded-full bg-topbar text-brand-foreground font-black text-sm flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#FF5722]/30">
                {proc.step}
              </div>
              <h3 className="font-bold text-brand-foreground text-base mb-2">{proc.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-24 px-4 lg:px-12 bg-topbar">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            {/* Left: Why Choose Image Quest */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-topbar text-xs font-bold uppercase tracking-normalst">Why Choose Image Quest?</span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-foreground tracking-normal">Built For Maximum Online Impact</h2>
              <div className="space-y-4 pt-4">
                {[
                  "Experienced digital marketing experts",
                  "Customized strategies for your business",
                  "Transparent reporting & communication",
                  "Focus on ROI and measurable results",
                  "Dedicated account support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-topbar p-4 rounded-xl border border-primary">
                    <span className="w-6 h-6 rounded-full bg-topbar text-brand-foreground flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold text-border text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Digital Marketing Packages */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-8">
                <span className="text-topbar text-xs font-bold uppercase tracking-normalst">Digital Marketing Packages</span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-foreground mt-1">Transparent Pricing For Every Stage</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bronze */}
                <div className="bg-topbar border border-primary rounded-2xl p-6 flex flex-col justify-between hover:border-muted-foreground transition-all">
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-xs font-bold uppercase tracking-normalst text-muted-foreground block mb-1">Bronze</span>
                      <h4 className="font-black text-lg text-brand-foreground">Essentials</h4>
                      <div className="mt-4">
                        <span className="text-xs text-muted-foreground">KES</span>
                        <span className="text-3xl font-black text-brand-foreground ml-1">25,000</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 text-xs text-border">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Social Media Management</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Basic SEO</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> 1 Ad Campaign</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Monthly Report</li>
                    </ul>
                  </div>
                  <Button variant="unstyled" 
                    onClick={() => setAuditModalOpen(true)}
                    className="w-full bg-topbar hover:bg-topbar text-brand-foreground font-bold py-3 rounded-xl text-xs uppercase tracking-normalr transition-all border border-primary"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Silver (Most Popular) */}
                <div className="bg-gradient-to-b from-topbar to-topbar border-2 border-topbar rounded-2xl p-6 flex flex-col justify-between relative shadow-2xl shadow-[#FF5722]/10 transform lg:-translate-y-4">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-topbar text-brand-foreground text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-normalst shadow">
                    Most Popular
                  </div>
                  <div>
                    <div className="text-center mb-6 pt-2">
                      <span className="text-xs font-bold uppercase tracking-normalst text-topbar block mb-1">Silver</span>
                      <h4 className="font-black text-lg text-brand-foreground">Growth</h4>
                      <div className="mt-4">
                        <span className="text-xs text-muted-foreground">KES</span>
                        <span className="text-3xl font-black text-brand-foreground ml-1">45,000</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 text-xs text-border">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Social Media Management</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Advanced SEO</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Google Ads (PPC)</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Content Marketing</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Monthly Report</li>
                    </ul>
                  </div>
                  <Button variant="unstyled" 
                    onClick={() => setAuditModalOpen(true)}
                    className="w-full bg-topbar hover:bg-topbar text-brand-foreground font-bold py-3.5 rounded-xl text-xs uppercase tracking-normalr shadow-lg shadow-[#FF5722]/30 transition-all"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Gold */}
                <div className="bg-topbar border border-primary rounded-2xl p-6 flex flex-col justify-between hover:border-muted-foreground transition-all">
                  <div>
                    <div className="text-center mb-6">
                      <span className="text-xs font-bold uppercase tracking-normalst text-muted-foreground block mb-1">Gold</span>
                      <h4 className="font-black text-lg text-brand-foreground">Premium</h4>
                      <div className="mt-4">
                        <span className="text-xs text-muted-foreground">KES</span>
                        <span className="text-3xl font-black text-brand-foreground ml-1">75,000</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8 text-xs text-border">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Full Digital Marketing</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> SEO + PPC</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Content & Email Marketing</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Conversion Tracking</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-topbar" /> Monthly Report & Strategy Call</li>
                    </ul>
                  </div>
                  <Button variant="unstyled" 
                    onClick={() => setAuditModalOpen(true)}
                    className="w-full bg-topbar hover:bg-topbar text-brand-foreground font-bold py-3 rounded-xl text-xs uppercase tracking-normalr transition-all border border-primary"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tools We Use */}
          <div className="bg-topbar border border-primary rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <span className="text-topbar text-xs font-bold uppercase tracking-normalst block mb-1">Tools & Platforms</span>
              <h3 className="text-2xl font-black text-brand-foreground">Digital Marketing Tools We Use</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {[
                { name: "Google Analytics 4", icon: "📈" },
                { name: "Google Ads", icon: "🎯" },
                { name: "SEMRUSH", icon: "🔍" },
                { name: "Meta Business Suite", icon: "👥" },
                { name: "Ahrefs", icon: "⚡" },
                { name: "Mailchimp", icon: "✉️" },
                { name: "HubSpot", icon: "⚙️" },
                { name: "Hootsuite", icon: "🦉" },
              ].map((tool, index) => (
                <div key={index} className="bg-topbar border border-primary p-4 rounded-xl text-center hover:border-topbar transition-all group">
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <span className="text-xs font-bold text-border group-hover:text-brand-foreground block">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="success-stories" className="py-24 bg-topbar border-t border-b border-primary px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-topbar text-xs font-bold uppercase tracking-normalst block mb-2">Success Stories</span>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-foreground tracking-normal">Recent Digital Marketing Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { client: "Kijani Farms", category: "Agriculture", metric: "+186%", label: "Website Traffic", bg: "from-success/40 to-topbar" },
              { client: "Apex Consultants", category: "Consulting", metric: "+142%", label: "Leads Generated", bg: "from-info/40 to-topbar" },
              { client: "MedCare Clinic", category: "Healthcare", metric: "+210%", label: "Appointment Bookings", bg: "from-purple-900/40 to-topbar" },
              { client: "Java Coffee House", category: "Hospitality", metric: "+156%", label: "Online Sales", bg: "from-brand/40 to-topbar" },
            ].map((story, index) => (
              <div key={index} className={`bg-gradient-to-b ${story.bg} border border-primary rounded-2xl p-6 flex flex-col justify-between hover:border-topbar transition-all group`}>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-bold text-brand-foreground text-base">{story.client}</h4>
                      <span className="text-xs text-muted-foreground">{story.category}</span>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-topbar/20 text-topbar flex items-center justify-center font-bold text-xs">iQ</span>
                  </div>
                  <div className="my-8">
                    <span className="text-4xl sm:text-5xl font-black text-topbar tracking-normal block mb-2">{story.metric}</span>
                    <span className="text-xs font-semibold text-border uppercase tracking-normalr">{story.label}</span>
                  </div>
                </div>
                <Button variant="unstyled" 
                  onClick={() => setAuditModalOpen(true)}
                  className="w-full bg-topbar hover:bg-topbar text-border hover:text-brand-foreground font-semibold py-3 rounded-xl text-xs uppercase tracking-normalr transition-all border border-primary flex items-center justify-center gap-2"
                >
                  Read Case Study <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 px-4 lg:px-12 bg-topbar">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-topbar via-topbar to-topbar border border-primary rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 bottom-0 opacity-20 lg:opacity-60 pointer-events-none hidden md:block">
            <div className="w-96 h-96 bg-topbar/20 rounded-full blur-3xl"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-topbar text-xs font-bold uppercase tracking-normalst block">Let's Talk About Your Growth</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-foreground tracking-normal">Ready To Grow Online?</h2>
              <p className="text-border text-sm sm:text-base max-w-2xl leading-relaxed">
                Let's build a digital marketing strategy that drives real results for your business. Get in touch with our expert team today for a free consultation.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="unstyled" 
                  onClick={() => setAuditModalOpen(true)}
                  className="bg-topbar hover:bg-topbar text-brand-foreground font-bold px-7 py-4 rounded-xl shadow-lg shadow-[#FF5722]/30 flex items-center gap-3 text-xs uppercase tracking-normalr transition-all"
                >
                  <FileText className="w-4 h-4" /> Get A Free Marketing Audit
                </Button>
                <a 
                  href="https://wa.me/254720791677" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-topbar hover:bg-topbar text-brand-foreground border border-muted-foreground font-bold px-7 py-4 rounded-xl flex items-center gap-3 text-xs uppercase tracking-normalr transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-success" /> Call / Whatsapp
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-topbar border border-primary p-6 rounded-2xl text-center shadow-2xl max-w-xs w-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-topbar to-brand mx-auto mb-4 flex items-center justify-center text-brand-foreground text-2xl font-black shadow-lg">
                  IQ
                </div>
                <h4 className="font-bold text-brand-foreground text-base">Expert Consultant</h4>
                <p className="text-xs text-topbar font-semibold mt-1">Available Now</p>
                <div className="mt-4 pt-4 border-t border-primary text-xs text-muted-foreground">
                  Response time: &lt; 15 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Top CTA Banner */}
      <div className="bg-topbar text-topbar py-4 px-4 lg:px-12 font-bold text-center sm:flex justify-between items-center text-sm shadow-xl">
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-0">
          <Calendar className="w-4 h-4" />
          <span>Let's Talk About Your Growth — Book a free consultation with our digital marketing team today.</span>
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="unstyled" onClick={() => setAuditModalOpen(true)} className="bg-topbar text-brand-foreground px-5 py-2 rounded-lg text-xs uppercase tracking-normalr hover:bg-primary transition-all">Schedule A Call</Button>
          <a href="https://wa.me/254720791677" target="_blank" rel="noreferrer" className="bg-brand-foreground text-topbar px-5 py-2 rounded-lg text-xs uppercase tracking-normalr hover:bg-muted transition-all flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-success" /> Chat On Whatsapp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <SiteFooter />

      {}
      {auditModalOpen && (
        <div className="fixed inset-0 z-50 bg-topbar/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-topbar border border-primary rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <Button variant="unstyled" 
              onClick={() => setAuditModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-brand-foreground bg-topbar p-2 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>

            {auditSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-success/20 text-success flex items-center justify-center mx-auto text-2xl font-black">✓</div>
                <h3 className="text-2xl font-black text-brand-foreground">Audit Request Received!</h3>
                <p className="text-xs text-border">Our digital marketing team will analyze your online presence and contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4">
                <div>
                  <span className="text-topbar text-[10px] font-bold uppercase tracking-normalst block mb-1">Free Consultation</span>
                  <h3 className="text-xl font-black text-brand-foreground">Request Your Free Marketing Audit</h3>
                  <p className="text-xs text-muted-foreground mt-1">Discover hidden growth opportunities and get a personalized strategy.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-border mb-1">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-topbar border border-primary rounded-lg p-3 text-sm text-brand-foreground focus:border-topbar focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-border mb-1">Business Email</label>
                    <input required type="email" placeholder="john@company.co.ke" className="w-full bg-topbar border border-primary rounded-lg p-3 text-sm text-brand-foreground focus:border-topbar focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-border mb-1">Phone Number</label>
                    <input required type="tel" placeholder="+254 700 000 000" className="w-full bg-topbar border border-primary rounded-lg p-3 text-sm text-brand-foreground focus:border-topbar focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-border mb-1">Website URL (Optional)</label>
                    <input type="text" placeholder="www.yourcompany.co.ke" className="w-full bg-topbar border border-primary rounded-lg p-3 text-sm text-brand-foreground focus:border-topbar focus:outline-none" />
                  </div>
                </div>

                <Button variant="unstyled" 
                  type="submit"
                  className="w-full bg-topbar hover:bg-topbar text-brand-foreground font-bold py-3.5 rounded-lg text-xs uppercase tracking-normalr shadow-lg shadow-[#FF5722]/30 transition-all mt-4"
                >
                  Submit Audit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}