
import React, { useState } from 'react';
import { 
  Heart, 
  Utensils, 
  Shirt, 
  Sun, 
  Users, 
  Leaf, // Added Leaf for the Adiv (Nature/Tribal) aspect
  ArrowUpRight, 
  Menu, 
  Bell, 
  Search,
  BookOpen,
  CalendarCheck
} from 'lucide-react';




// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center w-full space-x-3 px-6 py-3.5 transition-all duration-200 border-l-4 
    ${active 
      ? 'bg-orange-50 text-orange-700 border-orange-600 font-semibold' 
      : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-900'}`}
  >
    <Icon size={20} className={active ? "text-orange-600" : "text-slate-400"} />
    <span>{label}</span>
  </button>
);




// --- Main Layout ---

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-800">
      
      {/* Sidebar */}
      <aside 
        className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white border-r border-slate-200 transition-all duration-300 flex flex-col hidden md:flex z-20`}
      >
        {/* Logo Section */}
        <div className="h-24 flex items-center px-8 border-b border-slate-100">
          <div className="h-10 w-10  rounded-lg flex items-center justify-center text-white mr-3 ">
            {/* <Leaf size={20} /> */}
            <img src="/dashboard/logo.png" alt="logo" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Adi<span className="text-orange-600">Yuvan</span></h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Service & Spirit</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8 space-y-2">
          <div className="px-6 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Main Menu</div>
          <SidebarItem icon={Menu} label="Overview" active={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <SidebarItem icon={BookOpen} label="Programs" active={activeTab === 'Programs'} onClick={() => setActiveTab('Programs')} />
          <SidebarItem icon={Users} label="Volunteers" active={activeTab === 'Volunteers'} onClick={() => setActiveTab('Volunteers')} />
          
          <div className="px-6 mb-2 mt-8 text-xs font-bold text-slate-400 uppercase tracking-wider">Services</div>
          <SidebarItem icon={Utensils} label="Food & Relief" active={activeTab === 'Food'} onClick={() => setActiveTab('Food')} />
          <SidebarItem icon={Sun} label="Spiritual Center" active={activeTab === 'Spiritual'} onClick={() => setActiveTab('Spiritual')} />
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center w-full hover:bg-slate-50 p-2 rounded-lg transition-colors">
            <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
               <img src="/api/placeholder/40/40" alt="User" className="h-full w-full object-cover" />
            </div>
            {sidebarOpen && (
              <div className="ml-3 text-left">
                <p className="text-sm font-bold text-slate-700">Admin</p>
                <p className="text-xs text-slate-500">View Profile</p>
              </div>
            )}
          </button>
        </div>
      </aside>

    
    </div>

  );
}