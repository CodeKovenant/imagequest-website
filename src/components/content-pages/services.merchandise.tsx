import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { 
  Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Youtube, 
  ChevronDown, ChevronRight, ChevronLeft, ArrowRight, Check, Star, 
  MessageCircle, Quote, Search, Shield, Award, Zap, Users, Box, RefreshCw, 
  ExternalLink, Menu, X, ShoppingBag, Send
} from 'lucide-react';

interface MerchPackage {
  name: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export default function ImageQuestMerchPage() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', package: 'Business Pack (KES 75,000)', notes: '' });

  const projects = [
    { name: "Kijani Farms", image: "https://placehold.co/300x200/1e293b/ffffff?text=Kijani+Farms" },
    { name: "Apex Consultants", image: "https://placehold.co/300x200/1e293b/ffffff?text=Apex+Consultants" },
    { name: "MedCare Clinic", image: "https://placehold.co/300x200/1e293b/ffffff?text=MedCare+Clinic" },
    { name: "Java Coffee House", image: "https://placehold.co/300x200/1e293b/ffffff?text=Java+Coffee+House" },
    { name: "BrightPath Academy", image: "https://placehold.co/300x200/1e293b/ffffff?text=BrightPath+Academy" },
  ];

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setQuoteModalOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-card text-primary font-sans antialiased selection:bg-brand selection:text-brand-foreground">
      <SiteHeader />


      {}
      <div className="bg-primary text-muted-foreground py-3 border-t border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-xs sm:text-sm">
          <Link to="/" className="hover:text-brand-foreground transition">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          <Link to="/services" className="hover:text-brand-foreground transition">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-brand font-medium">Promotional Merchandise</span>
        </div>
      </div>

      {}
      <section className="relative bg-gradient-to-br from-topbar via-primary to-topbar text-brand-foreground py-16 lg:py-24 overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/30 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-normal text-brand">Promotional Merchandise</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-normal leading-tight">
                Branded Items. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand to-brand">
                  Stronger Connections.
                </span>
              </h1>

              <p className="text-border text-base sm:text-lg leading-relaxed max-w-xl">
                Promotional merchandise keeps your brand in sight and in mind. We provide high-quality, custom-branded products that help you appreciate customers, motivate teams and grow your brand.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <Button variant="unstyled" 
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-brand hover:bg-brand text-brand-foreground font-bold px-8 py-4 rounded-lg shadow-xl shadow-brand/30 transition transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 uppercase tracking-normal text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Get A Free Merch Quote</span>
                </Button>
                <a 
                  href="#range"
                  className="bg-primary/80 hover:bg-primary text-brand-foreground border border-muted-foreground font-bold px-7 py-4 rounded-lg transition flex items-center justify-center space-x-3 uppercase tracking-normal text-sm group"
                >
                  <span>View Our Catalogue</span>
                  <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Hero merchandise showcase image grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-primary to-primary p-4 rounded-2xl border border-muted-foreground/80 shadow-2xl transform hover:scale-[1.02] transition">
                      <img 
                        src="https://placehold.co/400x300/1e293b/orange?text=Branded+Thermos+%26+Flask" 
                        alt="Branded Flask & Thermos" 
                        className="w-full h-40 object-cover rounded-xl mb-3 shadow"
                        onError={(e)=>{(e.target as HTMLElement).style.display='none'}}
                      />
                      <h3 className="font-bold text-brand-foreground text-sm">Thermal Drinkware</h3>
                      <p className="text-xs text-muted-foreground mt-1">Laser engraved & custom printed bottles</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-primary p-4 rounded-2xl border border-muted-foreground/80 shadow-2xl transform hover:scale-[1.02] transition">
                      <img 
                        src="https://placehold.co/400x300/1e293b/orange?text=Branded+Notebook" 
                        alt="Branded Notebook" 
                        className="w-full h-32 object-cover rounded-xl mb-3 shadow"
                      />
                      <h3 className="font-bold text-brand-foreground text-sm">Executive Notebooks</h3>
                      <p className="text-xs text-muted-foreground mt-1">Debossed PU leather journals</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="bg-gradient-to-br from-primary to-primary p-4 rounded-2xl border border-muted-foreground/80 shadow-2xl transform hover:scale-[1.02] transition">
                      <img 
                        src="https://placehold.co/400x300/1e293b/orange?text=Travel+Backpack" 
                        alt="Travel Backpack" 
                        className="w-full h-32 object-cover rounded-xl mb-3 shadow"
                      />
                      <h3 className="font-bold text-brand-foreground text-sm">Branded Backpacks</h3>
                      <p className="text-xs text-muted-foreground mt-1">Durable laptop & travel bags</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-primary p-4 rounded-2xl border border-muted-foreground/80 shadow-2xl transform hover:scale-[1.02] transition">
                      <img 
                        src="https://placehold.co/400x300/1e293b/orange?text=Caps+%26+Apparel" 
                        alt="Caps and Apparel" 
                        className="w-full h-40 object-cover rounded-xl mb-3 shadow"
                      />
                      <h3 className="font-bold text-brand-foreground text-sm">Corporate Apparel</h3>
                      <p className="text-xs text-muted-foreground mt-1">Embroidered polo shirts & caps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section className="bg-brand-foreground py-12 border-b border-border shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-brand text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">Build Brand Awareness</h3>
              <p className="text-xs text-muted-foreground leading-snug">Boost visibility and keep your brand top of mind.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-brand text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">Strengthen Relationships</h3>
              <p className="text-xs text-muted-foreground leading-snug">Perfect for client gifts, events and appreciation.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-brand text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">High Quality Products</h3>
              <p className="text-xs text-muted-foreground leading-snug">Premium, durable items that reflect your brand.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-brand text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">Custom Branding</h3>
              <p className="text-xs text-muted-foreground leading-snug">Fully customized with your logo and message.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-brand text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Box className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">Bulk & Cost Effective</h3>
              <p className="text-xs text-muted-foreground leading-snug">Great prices for bulk orders without compromising quality.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand/50 transition group">
              <div className="w-14 h-14 rounded-2xl bg-brand text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-sm">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">Fast Turnaround</h3>
              <p className="text-xs text-muted-foreground leading-snug">Reliable delivery within agreed timelines.</p>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="range" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-normal text-xs bg-brand px-3 py-1 rounded-full">Our Merchandise Range</span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mt-3">Quality Branded Items For Every Need</h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Explore our extensive catalog of promotional products tailored to elevate your corporate identity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Category 1 */}
            <div className="bg-brand-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-muted flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-muted relative">
                  <img 
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Drinkware+Collection" 
                    alt="Drinkware" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand text-brand-foreground text-xs font-bold px-3 py-1 rounded-md uppercase tracking-normal">Popular</div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand text-brand flex items-center justify-center font-bold">
                    ☕
                  </div>
                  <h3 className="text-xl font-bold text-primary">Drinkware</h3>
                </div>
                <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Mugs (Ceramic, Magic & Travel)</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Water Bottles (Stainless Steel & Plastic)</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Thermal Flasks & Tumblers</span></li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-muted hover:bg-brand hover:text-brand-foreground text-primary font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Category 2 */}
            <div className="bg-brand-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-muted flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-muted relative">
                  <img 
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Apparel+Collection" 
                    alt="Apparel" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand text-brand flex items-center justify-center font-bold">
                    👕
                  </div>
                  <h3 className="text-xl font-bold text-primary">Apparel</h3>
                </div>
                <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>T-Shirts (Round Neck & V-Neck)</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Polo Shirts (Branded Embroidery)</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Caps & Hats (Baseball & Bucket)</span></li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-muted hover:bg-brand hover:text-brand-foreground text-primary font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Category 3 */}
            <div className="bg-brand-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-muted flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-muted relative">
                  <img 
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Office+%26+Stationery" 
                    alt="Office & Stationery" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand text-brand flex items-center justify-center font-bold">
                    📓
                  </div>
                  <h3 className="text-xl font-bold text-primary">Office & Stationery</h3>
                </div>
                <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Notebooks & Executive Journals</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Pens (Metal, Plastic & Stylus)</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>USB Flash Drives & Tech Organizers</span></li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-muted hover:bg-brand hover:text-brand-foreground text-primary font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Category 4 */}
            <div className="bg-brand-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-muted flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-muted relative">
                  <img 
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Bags+%26+Travel" 
                    alt="Bags & Travel" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand text-brand flex items-center justify-center font-bold">
                    🎒
                  </div>
                  <h3 className="text-xl font-bold text-primary">Bags & Travel</h3>
                </div>
                <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Backpacks & Computer Bags</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Laptop Bags & Sleeves</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Travel Mugs & Duffle Bags</span></li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-muted hover:bg-brand hover:text-brand-foreground text-primary font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Category 5 */}
            <div className="bg-brand-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-muted flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-muted relative">
                  <img 
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Tech+Gadgets" 
                    alt="Technology" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand text-brand flex items-center justify-center font-bold">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-primary">Technology</h3>
                </div>
                <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Power Banks & Chargers</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Earphones & Bluetooth Speakers</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Wireless Charging Pads</span></li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-muted hover:bg-brand hover:text-brand-foreground text-primary font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Category 6 */}
            <div className="bg-brand-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-muted flex flex-col justify-between group">
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-6 bg-muted relative">
                  <img 
                    src="https://placehold.co/400x250/f1f5f9/f97316?text=Events+%26+Giveaways" 
                    alt="Events & Giveaways" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand text-brand flex items-center justify-center font-bold">
                    🎉
                  </div>
                  <h3 className="text-xl font-bold text-primary">Events & Giveaways</h3>
                </div>
                <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Umbrellas (Golf & Compact)</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Key Holders & Wristbands</span></li>
                  <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand flex-shrink-0" /><span>Lanyards & Event Badges</span></li>
                </ul>
              </div>
              <Button variant="unstyled" 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full bg-muted hover:bg-brand hover:text-brand-foreground text-primary font-bold py-3 rounded-xl transition text-sm flex items-center justify-center space-x-2 group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="bg-topbar text-brand-foreground py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand font-bold uppercase tracking-normal text-xs bg-brand/10 px-3 py-1 rounded-full border border-brand/20">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black mt-3">From Concept To Delivery</h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">A seamless journey ensuring absolute perfection for your brand merchandise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-brand text-brand-foreground flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-brand/30 relative z-10">
                01
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-foreground">Consult</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">We understand your needs, audience and objectives.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-primary border border-muted-foreground text-brand flex items-center justify-center text-2xl font-black mb-6 shadow-lg relative z-10">
                02
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-foreground">Recommend</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">We suggest the best items that fit your brand and budget.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-primary border border-muted-foreground text-brand flex items-center justify-center text-2xl font-black mb-6 shadow-lg relative z-10">
                03
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-foreground">Design & Approve</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">We brand the items with your logo and get your approval.</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-primary border border-muted-foreground text-brand flex items-center justify-center text-2xl font-black mb-6 shadow-lg relative z-10">
                04
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-foreground">Produce</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Quality production with attention to every detail.</p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-primary border border-muted-foreground text-brand flex items-center justify-center text-2xl font-black mb-6 shadow-lg relative z-10">
                05
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-foreground">Deliver</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">We deliver on time, ready to promote your brand.</p>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="py-20 bg-brand-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Why Choose & Ideal For (Left Column) */}
            <div className="lg:col-span-4 space-y-8">
              
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="font-black text-xl text-primary mb-6 flex items-center">
                  <span className="w-3 h-3 bg-brand rounded-full mr-2.5"></span>
                  Why Choose Image Quest?
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>Wide range of quality products</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>Competitive pricing for bulk orders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>Expert branding & customization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>Reliable and on-time delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>Dedicated account support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand/50 p-6 rounded-2xl border border-brand">
                <h3 className="font-black text-xl text-primary mb-6 flex items-center">
                  <span className="w-3 h-3 bg-brand rounded-full mr-2.5"></span>
                  Ideal For
                </h3>
                <ul className="space-y-3.5 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-3">
                    <span className="text-brand font-bold">🎁</span>
                    <span>Corporate Gifts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-brand font-bold">🤝</span>
                    <span>Trade Shows & Exhibitions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-brand font-bold">⭐</span>
                    <span>Employee Recognition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-brand font-bold">🚀</span>
                    <span>Product Launches</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-brand font-bold">📅</span>
                    <span>Conferences & Seminars</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-brand font-bold">💖</span>
                    <span>Customer Appreciation</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Popular Merch Packages (Right Column) */}
            <div className="lg:col-span-8">
              <div className="text-center lg:text-left mb-10">
                <span className="text-brand font-bold uppercase tracking-normal text-xs bg-brand px-3 py-1 rounded-full">Popular Merch Packages</span>
                <h2 className="text-3xl font-black text-primary mt-3">Ready-To-Go Bundles For Your Campaign</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Starter Pack */}
                <div className="bg-brand-foreground rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-primary">Starter Pack</h3>
                    <p className="text-xs text-muted-foreground mt-1 mb-4">Ideal for Startups</p>
                    <div className="mb-6 pb-6 border-b border-muted">
                      <span className="text-xs font-bold text-muted-foreground uppercase">KES</span>
                      <div className="text-3xl font-black text-primary">35,000</div>
                    </div>
                    <ul className="space-y-3 text-xs text-muted-foreground mb-6">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>10 Branded T-Shirts</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>10 Caps</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>10 Mugs</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>10 Pens</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>Branded Packaging</span></li>
                    </ul>
                  </div>
                  <Button variant="unstyled" 
                    onClick={() => { setFormData({...formData, package: 'Starter Pack (KES 35,000)'}); setQuoteModalOpen(true); }}
                    className="w-full bg-primary hover:bg-brand text-brand-foreground font-bold py-2.5 rounded-xl transition text-xs uppercase tracking-normal"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Business Pack (Most Popular) */}
                <div className="bg-gradient-to-b from-brand to-brand text-brand-foreground rounded-2xl p-6 shadow-xl relative transform md:-translate-y-2 flex flex-col justify-between">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-brand text-[10px] font-black uppercase tracking-normal px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-foreground mt-1">Business Pack</h3>
                    <p className="text-xs text-brand mt-1 mb-4">Perfect for Businesses</p>
                    <div className="mb-6 pb-6 border-b border-brand/50">
                      <span className="text-xs font-bold text-brand uppercase">KES</span>
                      <div className="text-3xl font-black text-brand-foreground">75,000</div>
                    </div>
                    <ul className="space-y-3 text-xs text-brand mb-6">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand-foreground" /><span>20 T-Shirts</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand-foreground" /><span>20 Mugs</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand-foreground" /><span>20 Pens</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand-foreground" /><span>5 Notebooks</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand-foreground" /><span>Branded Packaging</span></li>
                    </ul>
                  </div>
                  <Button variant="unstyled" 
                    onClick={() => { setFormData({...formData, package: 'Business Pack (KES 75,000)'}); setQuoteModalOpen(true); }}
                    className="w-full bg-brand-foreground hover:bg-primary text-brand hover:text-brand-foreground font-bold py-3 rounded-xl transition text-xs uppercase tracking-normal shadow-md"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Corporate Pack */}
                <div className="bg-brand-foreground rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-primary">Corporate Pack</h3>
                    <p className="text-xs text-muted-foreground mt-1 mb-4">For Big Impact</p>
                    <div className="mb-6 pb-6 border-b border-muted">
                      <span className="text-xs font-bold text-muted-foreground uppercase">KES</span>
                      <div className="text-3xl font-black text-primary">150,000</div>
                    </div>
                    <ul className="space-y-3 text-xs text-muted-foreground mb-6">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>30 T-Shirts</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>30 Mugs</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>30 Pens</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>10 Notebooks</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-brand" /><span>Branded Packaging</span></li>
                    </ul>
                  </div>
                  <Button variant="unstyled" 
                    onClick={() => { setFormData({...formData, package: 'Corporate Pack (KES 150,000)'}); setQuoteModalOpen(true); }}
                    className="w-full bg-primary hover:bg-brand text-brand-foreground font-bold py-2.5 rounded-xl transition text-xs uppercase tracking-normal"
                  >
                    Get Started
                  </Button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {}
      <section className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-brand font-bold uppercase tracking-normal text-xs bg-brand px-3 py-1 rounded-full">Recent Merch Projects</span>
              <h2 className="text-2xl sm:text-3xl font-black text-primary mt-2">Trusted By Leading Brands Across Kenya</h2>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button variant="unstyled" 
                onClick={prevProject} 
                className="w-10 h-10 rounded-full bg-brand-foreground border border-border flex items-center justify-center text-muted-foreground hover:bg-brand hover:text-brand-foreground hover:border-brand transition shadow-sm"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="unstyled" 
                onClick={nextProject} 
                className="w-10 h-10 rounded-full bg-brand-foreground border border-border flex items-center justify-center text-muted-foreground hover:bg-brand hover:text-brand-foreground hover:border-brand transition shadow-sm"
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {projects.map((proj, idx) => (
              <div 
                key={idx} 
                className={`bg-brand-foreground p-4 rounded-2xl border transition shadow-sm group ${idx === activeProjectIndex ? 'border-brand ring-2 ring-brand/20' : 'border-border'}`}
              >
                <div className="h-36 rounded-xl overflow-hidden mb-3 bg-muted">
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="font-bold text-sm text-primary text-center">{proj.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section className="bg-topbar py-16 text-brand-foreground relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-primary to-topbar rounded-3xl p-8 lg:p-12 border border-primary shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-brand font-bold uppercase tracking-normal text-xs bg-brand/10 px-3 py-1 rounded-full border border-brand/20">Elevate Your Corporate Identity</span>
              <h2 className="text-3xl sm:text-4xl font-black">
                Let's Put Your Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand">In Their Hands.</span>
              </h2>
              <p className="text-border text-sm sm:text-base">
                Get custom branded merchandise that leaves a lasting impression. Talk to our branding experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Button variant="unstyled" 
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full sm:w-auto bg-brand hover:bg-brand text-brand-foreground font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-brand/30 transition uppercase tracking-normal text-sm flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Get A Free Merch Quote</span>
                </Button>
                <a 
                  href="https://wa.me/254720791677" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-primary hover:bg-muted-foreground text-brand-foreground border border-muted-foreground font-bold px-8 py-3.5 rounded-xl transition uppercase tracking-normal text-sm flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-success" />
                  <span>Call / WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-primary/90 p-4 rounded-2xl border border-primary">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-brand flex-shrink-0 border-2 border-brand">
                <img src="https://placehold.co/100x100/f97316/ffffff?text=IQ" alt="Expert" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-brand-foreground text-sm">Dedicated Support</h4>
                <p className="text-xs text-brand font-medium">Expert Branding Specialist</p>
                <p className="text-[11px] text-muted-foreground mt-1">Ready to assist with your order</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <SiteFooter />

      {/* Floating WhatsApp Button */}
      

      {/* Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-topbar/80 p-4 backdrop-blur-sm">
          <div className="bg-brand-foreground rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-muted">
            <Button variant="unstyled" 
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-muted-foreground p-2 rounded-lg hover:bg-muted transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </Button>

            {quoteSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-success text-success rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-primary">Quote Request Received!</h3>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. Our branding team will get back to you shortly with a tailored proposal.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="text-center mb-6">
                  <span className="text-brand font-bold uppercase tracking-normal text-xs bg-brand px-3 py-1 rounded-full">Quick Inquiry</span>
                  <h3 className="text-2xl font-black text-primary mt-2">Request Merch Quote</h3>
                  <p className="text-xs text-muted-foreground mt-1">Fill out the form below and we'll contact you instantly.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:ring-2 focus:ring-brand focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:ring-2 focus:ring-brand focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+254 700 000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:ring-2 focus:ring-brand focus:outline-none" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Selected Package / Interest</label>
                  <select 
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:ring-2 focus:ring-brand focus:outline-none bg-brand-foreground"
                  >
                    <option>Starter Pack (KES 35,000)</option>
                    <option>Business Pack (KES 75,000)</option>
                    <option>Corporate Pack (KES 150,000)</option>
                    <option>Drinkware Range</option>
                    <option>Apparel & Caps</option>
                    <option>Office & Stationery</option>
                    <option>Custom Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Project Details / Notes</label>
                  <textarea 
                    rows={3}
                    placeholder="Quantity, branding requirements, delivery timeline..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm focus:ring-2 focus:ring-brand focus:outline-none resize-none"
                  ></textarea>
                </div>

                <Button variant="unstyled" 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand text-brand-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-brand/30 transition uppercase tracking-normal text-xs flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}