import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, MapPin, Clock, Menu, X, ArrowRight, Star, 
  CheckCircle, Shield, Smile, Activity, Heart, 
  ChevronRight, ArrowLeftRight, Sparkles, Droplet,
  Scissors, Syringe, Layers
} from 'lucide-react';
import { Appointment } from '../types';

export default function LandingPage({ onSubmitBooking }: { onSubmitBooking: (appt: Omit<Appointment, 'id' | 'created_at' | 'status'>) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'AM'>('EN');

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Topbar */}
      <div className="h-9 sm:h-9 bg-teal-900 text-white flex items-center justify-between px-4 sm:px-6 text-[10px] sm:text-xs font-medium">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">General Wingate St, Addis Ababa</span><span className="sm:hidden">Addis Ababa</span></span>
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> +251 94 403 6618</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <span>Mon - Fri: 8 AM - 5 PM</span>
            <span className="opacity-70 font-bold border-l pl-4 border-white/20">EN | AM</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 h-16 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619344/Screenshot_20260721_103107_Gallery_rw7qak.jpg" alt="Hibr Logo" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <h1 className="text-lg font-bold leading-none tracking-tight text-slate-900">HIBR SPECIAL</h1>
                <p className="text-[10px] text-teal-600 uppercase font-bold tracking-widest">Dental Care Service</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#home" className="hover:text-teal-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-teal-600 transition-colors">About</a>
              <a href="#treatments" className="hover:text-teal-600 transition-colors">Treatments</a>
              <a href="#reviews" className="hover:text-teal-600 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-teal-600 transition-colors">Contact</a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-slate-600">
              <button 
                onClick={() => setLang(lang === 'EN' ? 'AM' : 'EN')}
                className="hover:text-teal-600 w-8 md:hidden"
              >
                {lang}
              </button>
              <a href="#book" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-teal-600/20">
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full left-0">
            <div className="flex flex-col gap-4 text-center">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-600">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-600">About</a>
              <a href="#treatments" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-600">Treatments</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-600">Reviews</a>
              <a href="#book" onClick={() => setIsMobileMenuOpen(false)} className="block bg-teal-600 text-white mx-4 py-2 rounded-full font-bold shadow-lg shadow-teal-600/20">Book Appointment</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-32 overflow-hidden bg-gray-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full mb-4">
                  #1 RATED CLINIC IN ADDIS ABABA
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                  Your Smile is Our <br/> <span className="text-teal-600">Top Priority.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                  Experience modern dentistry with a gentle touch. We provide fast emergency relief and comprehensive treatments for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a href="#treatments" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold text-center transition-all">
                    Explore Treatments
                  </a>
                  <div className="flex items-center gap-3 px-6 py-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Patient" /></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Patient" /></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 overflow-hidden"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="Patient" /></div>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">500+ Happy Patients</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:block relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-2xl border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 to-transparent z-10" />
                <img 
                  src="https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/Screenshot_20260721_093023_Maps_fkauq8.jpg" 
                  alt="Modern Dental Clinic Reception" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-20 sm:h-24 bg-teal-50 border border-teal-100 rounded-2xl flex flex-col sm:flex-row items-center justify-around p-8 sm:p-0 gap-8 sm:gap-0 max-w-4xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Emergency Relief</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Fast Response</div>
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-teal-200/50"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">5-Star Rated</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Google Review</div>
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-teal-200/50"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Modern Gear</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Top Equipment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-slate-100 shadow-xl border border-gray-100"
              >
                {/* Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/30 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
                  About Us
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Committed to Excellence in <span className="text-teal-600">Dental Healthcare.</span></h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                  At Hibr Special Dental Care Service, we blend advanced medical technology with compassionate care. Our goal is not just to treat dental issues, but to build lasting relationships based on trust and results.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="mt-1 bg-white border border-slate-100 shadow-sm text-teal-600 p-2.5 rounded-xl h-fit">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Our Mission</h4>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">To provide accessible, high-quality dental care that improves the oral health and overall well-being of our community.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="mt-1 bg-white border border-slate-100 shadow-sm text-teal-600 p-2.5 rounded-xl h-fit">
                      <Smile className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">Our Vision</h4>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">To be the leading dental service provider in Addis Ababa, recognized for our commitment to innovation, patient comfort, and lasting results.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section id="treatments" className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
                Our Services
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Care for Your Smile</h3>
              <p className="text-slate-500 text-lg">From routine cleanings to complex restorations, we offer a full spectrum of dental services tailored to your needs.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Teeth Whitening', desc: 'Professional brightening for a radiant, confident smile.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/ad034228194aad7cbb31b09319406583_r7g7jv.jpg' },
                { title: 'Dental Crowns', desc: 'Durable and natural-looking crowns to protect damaged teeth.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619342/635cc672ee553f862ca87449691dc8bd_w04soo.jpg' },
                { title: 'Scaling & Polishing', desc: 'Thorough cleaning to prevent decay and gum disease.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619342/090b051d488695962544176491208b53_grxuxj.jpg' },
                { title: 'Orthodontics (Braces)', desc: 'Straighten your teeth effectively with modern braces.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619340/a63f31bb720104ebdd9b2a389e4e2c03_gbid7w.jpg' },
                { title: 'Root Canal', desc: 'Pain-free root canal treatments to save your natural tooth.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619340/461286106d0fb3c9e71054ef2dfb09f4_qykiwa.jpg' },
                { title: 'Extractions', desc: 'Safe and comfortable tooth removal when necessary.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619343/1eb97755ba6b215c95ad372d20fbbbae_vawkdd.jpg' },
                { title: 'Disimpaction', desc: 'Expert surgical removal of impacted wisdom teeth.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619343/8bfa6b5dd3d89683e6a4e66df765bcff_zpcsut.jpg' },
                { title: 'Fillings & Dentures', desc: 'Restore function and appearance with high-quality materials.', image: 'https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619344/62b8a4633b563a54318d5d555c82aab6_i80jke.jpg' }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-teal-900/5 hover:border-teal-100 transition-all group flex flex-col h-full cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden mb-6 flex-shrink-0 border-2 border-teal-50 group-hover:border-teal-100 transition-colors shadow-sm">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">{service.title}</h4>
                  <p className="text-sm text-slate-500 mb-6 flex-1">{service.desc}</p>
                  <span className="text-teal-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Stories */}
        <section className="py-24 bg-white overflow-hidden border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
                Results
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Transformation Stories</h3>
              <p className="text-slate-500 text-lg">See the real results achieved by our expert dental team.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-100 rounded-3xl p-2 relative overflow-hidden aspect-video md:aspect-[4/3] group shadow-sm border border-slate-200"
              >
                 <div className="absolute inset-0 rounded-2xl overflow-hidden m-2 bg-white">
                    <img src="https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/e8f4997a7ec3cb417e2bdb6f8b54dd7c_wotjtd.jpg" className="w-full h-full object-cover" alt="Before and After 1" />
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-100 rounded-3xl p-2 relative overflow-hidden aspect-video md:aspect-[4/3] group shadow-sm border border-slate-200"
              >
                 <div className="absolute inset-0 rounded-2xl overflow-hidden m-2 bg-white">
                    <img src="https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/60ecf79a808a1b3925850a5302e9b061_ytmaev.jpg" className="w-full h-full object-cover" alt="Before and After 2" />
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-24 bg-slate-900 text-white relative border-t border-slate-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-block px-3 py-1 bg-slate-800 text-teal-400 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest border border-slate-700">
                Testimonials
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">What Our Patients Say</h3>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Samuel T.", desc: "The speed and care at Hibr Dental is unmatched. I came in with severe pain and left feeling completely relieved.", rating: 5 },
                { name: "Bethlehem Y.", desc: "I got my braces here and the process was so smooth. The doctors are incredibly professional and kind.", rating: 5 },
                { name: "Dawit M.", desc: "Very modern equipment and extremely clean. Highly recommend for any emergency or routine checkups.", rating: 5 }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl shadow-xl hover:bg-slate-800 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-8 leading-relaxed italic">"{review.desc}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-teal-400 font-bold border border-slate-600">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{review.name}</div>
                      <div className="text-teal-400 text-[10px] uppercase tracking-wider font-bold">Verified Patient</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Gallery */}
        <section className="py-24 bg-white border-t border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest">
                Gallery
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Our Service</h3>
              <p className="text-slate-500 text-lg">A glimpse into our clinic and the smiles we create.</p>
            </div>
          </div>
          
          {/* Marquee Container */}
          <div className="relative flex overflow-x-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {[
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/ad034228194aad7cbb31b09319406583_r7g7jv.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/60ecf79a808a1b3925850a5302e9b061_ytmaev.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619340/a63f31bb720104ebdd9b2a389e4e2c03_gbid7w.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619340/461286106d0fb3c9e71054ef2dfb09f4_qykiwa.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619342/635cc672ee553f862ca87449691dc8bd_w04soo.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619342/090b051d488695962544176491208b53_grxuxj.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619343/8bfa6b5dd3d89683e6a4e66df765bcff_zpcsut.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619343/1eb97755ba6b215c95ad372d20fbbbae_vawkdd.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619344/62b8a4633b563a54318d5d555c82aab6_i80jke.jpg"
              ].map((src, i) => (
                <div key={i} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200">
                  <img src={src} className="w-full h-full object-cover" alt="Service Gallery" />
                </div>
              ))}
              {[
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/ad034228194aad7cbb31b09319406583_r7g7jv.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619339/60ecf79a808a1b3925850a5302e9b061_ytmaev.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619340/a63f31bb720104ebdd9b2a389e4e2c03_gbid7w.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619340/461286106d0fb3c9e71054ef2dfb09f4_qykiwa.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619342/635cc672ee553f862ca87449691dc8bd_w04soo.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619342/090b051d488695962544176491208b53_grxuxj.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619343/8bfa6b5dd3d89683e6a4e66df765bcff_zpcsut.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619343/1eb97755ba6b215c95ad372d20fbbbae_vawkdd.jpg",
                "https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619344/62b8a4633b563a54318d5d555c82aab6_i80jke.jpg"
              ].map((src, i) => (
                <div key={`dup-${i}`} className="w-[300px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200">
                  <img src={src} className="w-full h-full object-cover" alt="Service Gallery" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="book" className="py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-teal-900 text-white p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Book Your Visit</h3>
                    <p className="text-teal-100 mb-8 leading-relaxed text-sm">Schedule an appointment with our expert team today. We'll get back to you to confirm your slot.</p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-sm text-white">Location</h4>
                          <p className="text-teal-200 text-xs mt-1">General Wingate St, Addis Ababa, Ethiopia</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-sm text-white">Call Us</h4>
                          <p className="text-teal-200 text-xs mt-1">+251 94 403 6618</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 text-xs text-teal-300">
                    Emergencies walk-ins are welcome during working hours.
                  </div>
                </div>
                
                <div className="md:col-span-3 p-10">
                  <BookingForm onSubmit={onSubmitBooking} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-teal-950 border-t border-teal-900 text-teal-100 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2"
            >
              <div className="flex items-center gap-2 mb-6">
                <img src="https://res.cloudinary.com/yx0ov7cu/image/upload/v1784619344/Screenshot_20260721_103107_Gallery_rw7qak.jpg" alt="Hibr Logo" className="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <h1 className="text-lg font-bold leading-none tracking-tight text-white">HIBR SPECIAL</h1>
                  <p className="text-[10px] text-teal-400 uppercase font-bold tracking-widest">Dental Care Service</p>
                </div>
              </div>
              <p className="mb-6 max-w-sm leading-relaxed text-teal-200">
                Providing exceptional dental care with a focus on patient comfort, advanced technology, and beautiful results.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center hover:bg-teal-700 hover:text-white transition-colors cursor-pointer text-teal-400 font-bold text-xs border border-teal-800">FB</div>
                <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center hover:bg-teal-700 hover:text-white transition-colors cursor-pointer text-teal-400 font-bold text-xs border border-teal-800">IG</div>
                <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center hover:bg-teal-700 hover:text-white transition-colors cursor-pointer text-teal-400 font-bold text-xs border border-teal-800">TW</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 font-semibold text-teal-200">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#treatments" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#book" className="hover:text-white transition-colors">Book Appointment</a></li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-bold mb-6 text-lg">Working Hours</h4>
              <ul className="space-y-3 font-medium text-teal-200">
                <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white font-bold">8:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-white font-bold">8:00 AM - 12:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-teal-500 font-bold">Closed</span></li>
              </ul>
            </motion.div>
          </div>
          
          <div className="border-t border-teal-900 mt-16 pt-8 text-[11px] text-teal-500 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Hibr Special Dental Care. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center">
              <span>Quick Links: Treatments • About Us • Privacy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BookingForm({ onSubmit }: { onSubmit: (appt: Omit<Appointment, 'id' | 'created_at' | 'status'>) => void }) {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    preferred_date: '',
    preferred_time: '',
    treatment_type: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "924044a9-48bb-4b81-9dfb-ee9740b9cc1b",
          subject: "New Appointment Booking - Hibr Dental",
          from_name: "Hibr Dental Booking",
          "Full Name": formData.full_name,
          "Phone": formData.phone,
          "Email": formData.email || "Not provided",
          "Treatment Type": formData.treatment_type,
          "Preferred Date": formData.preferred_date,
          "Preferred Time": formData.preferred_time,
          "Reason for Visit": formData.reason || "Not provided"
        }),
      });
    } catch (err) {
      console.error(err);
    }
    
    setIsSubmitting(false);
    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ full_name: '', phone: '', email: '', preferred_date: '', preferred_time: '', treatment_type: '', reason: '' });
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-2">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-slate-900">Request Sent!</h4>
        <p className="text-slate-500 text-sm">Thank you for choosing Hibr Dental. Our team will contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full gap-4 text-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900">Book Appointment</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Full Name *</label>
          <input required type="text" value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none text-slate-900" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Phone Number *</label>
          <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none text-slate-900" placeholder="+251 94 ..." />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Email (Optional)</label>
          <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none text-slate-900" placeholder="john@example.com" />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Treatment Type *</label>
          <select required value={formData.treatment_type} onChange={e => setFormData({...formData, treatment_type: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none text-slate-900">
            <option value="">Select Treatment...</option>
            <option value="General Checkup">General Checkup</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Braces / Orthodontics">Braces / Orthodontics</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Crowns & Bridges">Crowns & Bridges</option>
            <option value="Emergency Relief">Emergency Relief</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Preferred Date *</label>
          <input required type="date" value={formData.preferred_date} onChange={e => setFormData({...formData, preferred_date: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none text-slate-900" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Time Slot *</label>
          <select required value={formData.preferred_time} onChange={e => setFormData({...formData, preferred_time: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none text-slate-900">
            <option value="">Select Time...</option>
            <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
            <option value="Afternoon (1PM - 5PM)">Afternoon (1PM - 5PM)</option>
          </select>
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Reason for Visit</label>
        <textarea rows={2} value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} className="w-full bg-slate-50 border-0 rounded-lg p-3 focus:ring-2 ring-teal-500 outline-none resize-none text-slate-900 h-20" placeholder="Briefly describe your symptoms..."></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/30 active:scale-95 transition-transform mt-2 disabled:opacity-75 disabled:active:scale-100 flex items-center justify-center">
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          "Schedule Visit Now"
        )}
      </button>
    </form>
  );
}
