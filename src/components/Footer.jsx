import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-white">
      {/* TOP CALL TO ACTION BANNER */}
      <div className="bg-[#002342] py-16 px-6 sm:px-12 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Ready for Shorter, Smarter Links?
          </h2>
          <p className="text-white text-sm sm:text-base opacity-90">
            Transform a long link into a short, trackable one using our platform. Create a free account or subscribe to a paid plan today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-white text-[#002342] font-semibold px-6 py-3 rounded shadow text-sm transition hover:bg-slate-100">
              View Plans
            </button>
            <button className="bg-[#0092b3] hover:bg-[#0b748d] text-white font-semibold px-6 py-3 rounded shadow text-sm transition">
              Create Free Account
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM GRADIENT FOOTER SECTION */}
      <div className="py-14 px-6 sm:px-12 lg:px-16" style={{ background: 'linear-gradient(to left, #043958, #095C7A, #0C7390, #0092b3)' }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 items-start pb-4">
          
          {/* Column 1: Features */}
          <div className="space-y-4 hidden lg:block">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Features</h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-white font-medium">
              <li><a href="#" className="hover:underline">Link Editor</a></li>
              <li><a href="#" className="hover:underline">Link Management</a></li>
              <li><a href="#" className="hover:underline">Branded Links</a></li>
              <li><a href="#" className="hover:underline">Short URL Tracking</a></li>
              <li><a href="#" className="hover:underline">QR Code Generator</a></li>
              <li><a href="#" className="hover:underline">Short URL API</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-4 hidden lg:block">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Resources</h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-white font-medium">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">For Developers</a></li>
              <li><a href="#" className="hover:underline">Our Proven Process</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4 col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Contact Us</h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-white font-medium">
              <li><a href="#" className="hover:underline">Help Desk</a></li>
              <li><a href="#" className="hover:underline">Contact Sales</a></li>
              <li><a href="#" className="hover:underline">Contact Support</a></li>
              <li><a href="#" className="hover:underline">Report Abuse</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4 col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Legal</h3>
            <ul className="space-y-3.5 text-sm sm:text-base text-white font-medium">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
              <li><a href="#" className="hover:underline">Privacy Manager</a></li>
            </ul>
          </div>

          {/* Column 5: Social Icons & Logo (Pushed to bottom right) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start lg:items-end justify-between space-y-8 pt-12 lg:pt-20 self-end">
            <div className="flex space-x-4 text-white">
              {/* Facebook */}
              <a href="#" className="w-6 h-6 flex items-center justify-center transition opacity-90 hover:opacity-100">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-6 h-6 flex items-center justify-center transition opacity-90 hover:opacity-100">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-6 h-6 flex items-center justify-center transition opacity-90 hover:opacity-100">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="w-6 h-6 flex items-center justify-center transition opacity-90 hover:opacity-100">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>

            <div className="lg:text-right space-y-1.5">
              <h2 className="text-2xl font-black tracking-wider text-white">TINYURL</h2>
              <p className="text-xs sm:text-sm text-white leading-relaxed">&copy; 2026 TinyURL LLC<br />All Rights Reserved</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;