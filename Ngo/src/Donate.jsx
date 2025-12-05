import React from 'react';
import { HeartHandshake, Utensils, Sun, Code, Leaf, ShieldPlus } from 'lucide-react';

export default function Donate() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto font-sans bg-white min-h-screen">
      
      {/* Header and Core Message */}
      <header className="text-center mb-12 py-10 bg-orange-50 rounded-2xl border border-orange-100 shadow-xl">
        <HeartHandshake size={48} className="mx-auto text-orange-600 mb-4 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Invest in Hope, Empower a Future
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-700 max-w-3xl mx-auto">
          Your contribution helps fuel **"आशाओं की उड़ान, उम्मीदों की पहचान"** — The Flight of Hopes, The Identity of Dreams.
        </p>
      </header>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Be a Pillar of Seva (Service)
        </h2>
        
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-md">
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            At ADI-YUVAAN, we believe true service nourishes both the body and the soul. By donating, you directly support our holistic approach to community upliftment, ensuring that every rupee translates into tangible change and spiritual growth.
          </p>
          <p className="text-lg font-semibold text-slate-800 leading-relaxed">
            Every act of generosity ensures that no community is left behind, from providing a warm meal to teaching a life-changing skill.
          </p>
        </div>
      </section>

      {/* Impact Breakdown */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">
          Your Donation Makes an Impact:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <ImpactCard 
            icon={Utensils} 
            title="Mahaprasadam & Vastra Seva" 
            text="Provide nutritious food and essential clothing to those in need, securing their basic dignity and well-being."
            color="bg-emerald-50 text-emerald-700"
          />
          <ImpactCard 
            icon={ShieldPlus} 
            title="Medical & Health Camps" 
            text="Sponsor health check-ups and distribute vital medicines, bringing essential healthcare to remote and underserved villages."
            color="bg-red-50 text-red-700"
          />
          <ImpactCard 
            icon={Code} 
            title="Skill Teaching & Empowerment" 
            text="Fund vocational training programs, helping youth and adults gain sustainable skills for economic independence."
            color="bg-purple-50 text-purple-700"
          />
          <ImpactCard 
            icon={Leaf} 
            title="Spiritual & Tribal Outreach" 
            text="Support empowerment sessions and outreach programs that respect culture while fostering spiritual strength and community bonds."
            color="bg-teal-50 text-teal-700"
          />
        </div>
      </section>
       <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
       <h1 style={{fontFamily: "serif" }} > Scan the QR to Donate </h1>
         <img className='h-40 w-40' src="/Other/ngoqr.jpg" alt="" />
       </div>

    </div>
  );
}

// Reusable Impact Card Component
const ImpactCard = ({ icon: Icon, title, text, color }) => (
  <div className={`p-5 rounded-xl ${color} shadow-lg flex items-start space-x-4`}>
    <Icon size={24} className="flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-sm leading-snug">{text}</p>
    </div>
  </div>
);