import React, { useState } from 'react';
import { 
  Link2, 
  QrCode, 
  Pencil, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp, 
  BarChart3, 
  Code2, 
  FileText, 
  CheckCircle2, 
  UserCheck 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSection, setMobileSection] = useState('features');

  const navigateTo = (path, e) => {
    if (e) e.preventDefault();
    window.location.href = path;
    setMobileMenuOpen(false);
    setMobileSection(null);
    setActiveDropdown(null);
  };

  return (
    <div className="relative z-50 w-full" onMouseLeave={() => setActiveDropdown(null)}>
      <header 
        style={{ background: 'linear-gradient(to left, #012645, #043958, #095C7A, #0C7390)', height: '70px' }}
        className="px-6 sm:px-12 lg:px-16 flex items-center justify-between sticky top-0 shadow-md w-full"
      >
        <div className="flex items-center cursor-pointer" onClick={(e) => navigateTo('/', e)}>
          <span className="text-3xl sm:text-4xl font-black tracking-wider uppercase text-white">
            TINYURL
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-base font-normal text-slate-100">
          <button 
            onClick={(e) => navigateTo('/plans', e)} 
            onMouseEnter={() => setActiveDropdown(null)}
            className="hover:text-white transition cursor-pointer"
          >
            Plans
          </button>
          
          <button 
            onMouseEnter={() => setActiveDropdown('features')} 
            className={`hover:text-white transition cursor-pointer py-[20px] ${activeDropdown === 'features' ? 'underline font-normal text-white' : ''}`}
          >
            Features
          </button>

          <button 
            onClick={(e) => navigateTo('/domains', e)} 
            onMouseEnter={() => setActiveDropdown(null)}
            className="hover:text-white transition cursor-pointer"
          >
            Domains
          </button>

          <button 
            onMouseEnter={() => setActiveDropdown('resources')} 
            className={`hover:text-white transition cursor-pointer py-[20px] ${activeDropdown === 'resources' ? 'underline font-normal text-white' : ''}`}
          >
            Resources
          </button>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-6 text-base font-normal" onMouseEnter={() => setActiveDropdown(null)}>
          <button className="text-slate-100 hover:text-white cursor-pointer">Log In</button>
          <button className="bg-[#0092b3] hover:bg-[#007b97] text-white px-5 py-2.5 rounded-md shadow transition cursor-pointer">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white focus:outline-none p-1 cursor-pointer">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* DESKTOP MEGA MENU DROPDOWNS ON HOVER */}
      {activeDropdown === 'features' && (
        <div 
          onMouseEnter={() => setActiveDropdown('features')}
          className="hidden lg:block bg-[#f8f9fa] text-slate-900 border-b border-slate-300 shadow-xl py-12 px-16 absolute left-0 right-0 top-[70px] z-40 transition-all"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 items-center min-h-[160px]">
            <div className="col-span-4 flex items-center justify-start h-full">
              <h2 className="text-4xl font-semibold text-[#1a202c]">Features</h2>
            </div>
            <div className="col-span-8 grid grid-cols-3 gap-y-8 gap-x-6">
              <div onClick={(e) => navigateTo('/link-editor', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><Pencil className="w-5 h-5 text-[#002342]" /> Link Editor</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Keep all your links dynamic, and extend their value in the long run</p>
              </div>
              <div onClick={(e) => navigateTo('/branded-links', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><Link2 className="w-5 h-5 text-[#002342]" /> Branded Links</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Turn heads and hold attention with fully custom short links</p>
              </div>
              <div onClick={(e) => navigateTo('/qr-code', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><QrCode className="w-5 h-5 text-[#002342]" /> QR Code Generator</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Elevate your customer's experiences with dynamic, scannable codes</p>
              </div>
              <div onClick={(e) => navigateTo('/link-management', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><Menu className="w-5 h-5 text-[#002342]" /> Link Management</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Organize as many links as you need with our powerful, intuitive platform</p>
              </div>
              <div onClick={(e) => navigateTo('/url-tracking', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><BarChart3 className="w-5 h-5 text-[#002342]" /> Short URL Tracking</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Measure the success of your efforts and make smarter, data-driven choices</p>
              </div>
              <div onClick={(e) => navigateTo('/url-api', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><Code2 className="w-5 h-5 text-[#002342]" /> Short URL API</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Build powerful apps and automations with our link shortening API</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === 'resources' && (
        <div 
          onMouseEnter={() => setActiveDropdown('resources')}
          className="hidden lg:block bg-[#f8f9fa] text-slate-900 border-b border-slate-300 shadow-xl py-12 px-16 absolute left-0 right-0 top-[70px] z-40 transition-all"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 items-center min-h-[160px]">
            <div className="col-span-4 flex items-center justify-start h-full">
              <h2 className="text-4xl font-semibold text-[#1a202c]">Resources</h2>
            </div>
            <div className="col-span-8 grid grid-cols-3 gap-y-8 gap-x-6">
              <div onClick={(e) => navigateTo('/blog', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><FileText className="w-5 h-5 text-[#002342]" /> Blog</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Read the latest tips and tricks from the top experts in link shortening</p>
              </div>
              <div onClick={(e) => navigateTo('/developers', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><Code2 className="w-5 h-5 text-[#002342]" /> For Developers</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Power your apps and software with automated, fully custom URL shortening</p>
              </div>
              <div onClick={(e) => navigateTo('/proven-process', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#002342]" /> Our Proven Process</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Learn how our customers go from zero to hero with our link management tools</p>
              </div>
              <div onClick={(e) => navigateTo('/about-us', e)} className="cursor-pointer hover:opacity-80 transition">
                <p className="font-medium text-base text-[#1a202c] flex items-center gap-2"><UserCheck className="w-5 h-5 text-[#002342]" /> About Us</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug font-normal">Learn about TinyURL's journey as the first link shortener</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white text-slate-900 z-50 flex flex-col justify-between p-6 lg:hidden overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-3xl sm:text-4xl font-black tracking-wider uppercase text-[#002342]">
                TINYURL
              </span>
              <button 
                onClick={() => { setMobileMenuOpen(false); setMobileSection(null); }} 
                className="bg-slate-500 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-base cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-2 flex flex-col text-base font-normal divide-y divide-slate-100">
              <div onClick={(e) => navigateTo('/plans', e)} className="w-full py-4 flex items-center justify-between text-[#002342] text-left cursor-pointer rounded px-2 hover:bg-[#e7f1f5] transition">
                <span>Plans</span>
              </div>

              <div>
                <div 
                  onClick={() => setMobileSection(mobileSection === 'features' ? null : 'features')}
                  className="w-full py-4 flex items-center justify-between text-[#002342] text-left cursor-pointer rounded px-2 hover:bg-[#e7f1f5] transition"
                >
                  <span>Features</span>
                  {mobileSection === 'features' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                {mobileSection === 'features' && (
                  <div className="pb-3 space-y-3">
                    <div onClick={(e) => navigateTo('/link-editor', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <Pencil className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Link Editor</p>
                        <p className="text-xs text-slate-500">Keep all your links dynamic, and extend their value in the long run</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/branded-links', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <Link2 className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Branded Links</p>
                        <p className="text-xs text-slate-500">Turn heads and hold attention with fully custom short links</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/qr-code', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <QrCode className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">QR Code Generator</p>
                        <p className="text-xs text-slate-500">Elevate experiences with dynamic, scannable codes</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/link-management', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <Menu className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Link Management</p>
                        <p className="text-xs text-slate-500">Organize as many links as you need with our powerful, intuitive platform</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/url-tracking', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <BarChart3 className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Short URL Tracking</p>
                        <p className="text-xs text-slate-500">Measure the success of your efforts and make smarter, data-driven choices</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/url-api', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <Code2 className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Short URL API</p>
                        <p className="text-xs text-slate-500">Build powerful apps and automations with our link shortening API</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div onClick={(e) => navigateTo('/domains', e)} className="w-full py-4 flex items-center justify-between text-[#002342] text-left cursor-pointer rounded px-2 hover:bg-[#e7f1f5] transition">
                <span>Domains</span>
              </div>

              <div>
                <div 
                  onClick={() => setMobileSection(mobileSection === 'resources' ? null : 'resources')}
                  className="w-full py-4 flex items-center justify-between text-[#002342] text-left cursor-pointer rounded px-2 hover:bg-[#e7f1f5] transition"
                >
                  <span>Resources</span>
                  {mobileSection === 'resources' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
                {mobileSection === 'resources' && (
                  <div className="pb-3 space-y-3">
                    <div onClick={(e) => navigateTo('/blog', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <FileText className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Blog</p>
                        <p className="text-xs text-slate-500">Read the latest tips and tricks from the top experts in link shortening</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/developers', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <Code2 className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">For Developers</p>
                        <p className="text-xs text-slate-500">Power your apps and software with automated, fully custom URL shortening</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/proven-process', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <CheckCircle2 className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">Our Proven Process</p>
                        <p className="text-xs text-slate-500">Learn how our customers go from zero to hero with our link management tools</p>
                      </div>
                    </div>
                    <div onClick={(e) => navigateTo('/about-us', e)} className="p-3 rounded cursor-pointer transition flex items-start space-x-3 hover:bg-[#e7f1f5]">
                      <UserCheck className="w-5 h-5 text-[#0092b3] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-base text-slate-900">About Us</p>
                        <p className="text-xs text-slate-500">Learn about TinyURL's journey as the first link shortener</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 mt-4 bg-white font-normal">
            <button onClick={(e) => navigateTo('/login', e)} className="block text-center w-full py-4 border border-slate-300 rounded text-[#002342] text-base hover:bg-slate-50 transition cursor-pointer">Log In</button>
            <button onClick={(e) => navigateTo('/signup', e)} className="block text-center w-full py-4 bg-[#0092b3] text-white rounded text-base hover:bg-[#007b97] transition cursor-pointer">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
}