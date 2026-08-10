import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Domains() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How Do I Create a Branded Link?",
      answer: "Yahan aap apna answer khud likhein gi."
    },
    {
      question: "How Do I Shorten a URL With a Custom Name?",
      answer: "Yahan aap apna answer khud likhein gi."
    },
    {
      question: "How Does Having a Branded URL Benefit My Marketing Campaigns?",
      answer: "Yahan aap apna answer khud likhein gi."
    },
    {
      question: "Can I Use My Existing Domain for Creating Branded Shortened Links?",
      answer: "Yahan aap apna answer khud likhein gi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#002342] flex flex-col justify-between text-white font-sans">
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* HERO SECTION */}
        <section className="w-full py-8 sm:py-12 lg:py-24 px-6 sm:px-12 lg:px-20">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
              
              {/* LEFT CONTENT CONTAINER */}
              <div className="w-full lg:w-[55%] flex flex-col space-y-6">
                
                {/* Heading Block */}
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.15]">
                    <span className="block text-4xl sm:text-5xl lg:text-[52px] font-bold mb-1 text-white">
                      Custom Domains:
                    </span>
                    Your Links, Your Branding
                  </h1>
                </div>

                {/* Paragraph 1 */}
                <p className="text-slate-200 text-lg sm:text-xl lg:text-lg leading-relaxed max-w-[620px]">
                  Branded domains are used exclusively to create short, appealing, and informative links that put your branding or core message front-and-center.
                </p>

                {/* Paragraph 2 */}
                <p className="text-slate-200 text-lg sm:text-xl lg:text-lg leading-relaxed max-w-[620px]">
                  TinyURL subscribers can purchase domains directly through our platform. Try it now!
                </p>

                {/* Get Started Button */}
                <div className="pt-2">
                  <button className="w-full sm:w-auto bg-[#007791] hover:bg-[#005f73] text-white font-medium px-8 py-2.5 rounded-xl transition shadow-lg text-lg text-center tracking-wide">
                    Get Started
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE CONTAINER */}
              <div className="w-full lg:w-[45%] flex justify-center mt-6 lg:mt-0">
                <img
                  src="https://tinyurl.com/images/overhauling/domains/figure-1.webp" 
                  alt="Custom Domains Illustration"
                  className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* HOW TO USE SECTION */}
      <section className="w-full bg-[#f8f9fa] py-16 px-4 sm:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Section Title */}
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#071728] text-center mb-16 leading-snug tracking-tight">
            How You Can Use Branded Domains on TinyURL
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Item 1 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-6 group">
              <div className="w-32 sm:w-36 lg:w-44 flex-shrink-0 flex justify-center items-start lg:items-center transition-transform duration-300 group-hover:scale-110 cursor-pointer order-1 lg:order-2 pt-1 lg:pt-0">
                <img src="https://tinyurl.com/images/overhauling/domains/figure-2.webp" alt="Register a Domain" className="w-full h-auto object-contain" />
              </div>
              <div className="flex-1 lg:text-center text-left order-2 lg:order-1 space-y-3">
                <h3 className="text-2xl lg:text-[22px] font-semibold text-[#071728] leading-tight">
                  Register a Domain
                </h3>
                <p className="text-slate-600 text-lg lg:text-base font-normal leading-relaxed whitespace-pre-line lg:whitespace-normal">
                  It’s as easy as online shopping: browse for{"\n"}
                  available domains and click to purchase. After{"\n"}
                  a little bit of setup time (which we’ll mostly{"\n"}
                  handle for you), you’re ready to go!
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-6 group">
              <div className="w-32 sm:w-36 lg:w-44 flex-shrink-0 flex justify-center items-start lg:items-center transition-transform duration-300 group-hover:scale-110 cursor-pointer order-1 lg:order-2 pt-1 lg:pt-0">
                <img src="https://tinyurl.com/images/overhauling/domains/figure-3.webp" alt="Bring Your Own Domain" className="w-full h-auto object-contain" />
              </div>
              <div className="flex-1 lg:text-center text-left order-2 lg:order-1 space-y-3">
                <h3 className="text-2xl lg:text-[22px] font-semibold text-[#071728] leading-tight">
                  Bring Your Own Domain
                </h3>
                <p className="text-slate-600 text-lg lg:text-base font-normal leading-relaxed whitespace-pre-line lg:whitespace-normal">
                  Already have the perfect, unused domain for{"\n"}
                  link shortening? Bring it on over — we’ll walk{"\n"}
                  you through the small handful of steps to get{"\n"}
                  started.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-6 group">
              <div className="w-32 sm:w-36 lg:w-44 flex-shrink-0 flex justify-center items-start lg:items-center transition-transform duration-300 group-hover:scale-110 cursor-pointer order-1 lg:order-2 pt-1 lg:pt-0">
                <img src="https://tinyurl.com/images/overhauling/domains/figure-4.webp" alt="Bring Your Own Subdomain" className="w-full h-auto object-contain" />
              </div>
              <div className="flex-1 lg:text-center text-left order-2 lg:order-1 space-y-3">
                <h3 className="text-2xl lg:text-[22px] font-semibold text-[#071728] leading-tight">
                  Bring Your Own Subdomain
                </h3>
                <p className="text-slate-600 text-lg lg:text-base font-normal leading-relaxed whitespace-pre-line lg:whitespace-normal">
                  You can also import your own subdomains (ex.{"\n"}
                  subdomain.example.com) to TinyURL for{"\n"}
                  even more ways to keep your links{"\n"}
                  descriptive and click-worthy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREE YEAR DOMAINS SECTION */}
      <section className="w-full bg-[#116479] overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          
          <div className="w-full h-[320px] sm:h-[450px] lg:h-[500px] relative overflow-hidden order-1 lg:order-1">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="https://tinyurl.com/images/overhauling/domains/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-12 text-white order-2 lg:order-2 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-6">
              Get the First Year Free for<br className="hidden lg:block" />
              Certain Domains
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed mb-6 max-w-[520px]">
              To get you started, we've set things up to offer you the first<br className="hidden lg:block" />
              year free for certain domains with the <span className="italic">.life</span>, <span className="italic">.live</span>, and <span className="italic">.info</span><br className="hidden lg:block" />
              TLDs.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed mb-8">
              Standard billing applies after the free year has lapsed.
            </p>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-white text-[#071728] font-semibold px-8 py-3.5 rounded-md hover:bg-slate-100 transition-colors shadow-sm text-center">
                View Plans
              </button>
              <button className="w-full sm:w-auto bg-[#071728] text-white font-semibold px-8 py-3.5 rounded-md hover:bg-[#0a2238] transition-colors shadow-sm text-center">
                Contact Sales
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURE SECTIONS CONTAINER */}
      <div className="w-full bg-white overflow-hidden">

        {/* ================= 1. SECTION ================= */}
        <section className="w-full py-12 px-6 lg:px-16 bg-white">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            
            <div className="w-full flex justify-center order-1 lg:order-1">
              <img 
                src="https://tinyurl.com/images/overhauling/domains/figure-5.webp" 
                alt="Send Links Your Audiences Will Trust" 
                className="w-full max-w-[450px] h-auto object-contain" 
              />
            </div>

            <div className="flex flex-col items-start order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071728] leading-tight mb-4">
                Send Links Your Audiences Will Trust<br />
                Enough To Click
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Sharing URLs shortened with your brand’s domain name is an easy way to let users know they can trust what you’re sharing. It’s got your name on it, after all, and higher trust in your branded links translates to better click-through rates.
              </p>
            </div>

          </div>
        </section>

        {/* ================= 2. SECTION ================= */}
        <section className="w-full py-12 px-6 lg:px-16 bg-white">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            
            <div className="w-full flex justify-center order-1 lg:order-2">
              <img 
                src="https://tinyurl.com/images/overhauling/domains/figure-6.webp" 
                alt="Serve Short Links With Big Personality" 
                className="w-full max-w-[450px] h-auto object-contain" 
              />
            </div>

            <div className="flex flex-col items-start order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071728] leading-tight mb-4">
                Serve Short Links With Big<br />
                Personality
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tired of sending links with the generic tinyurl.com domain? No problem. Send fully branded, short URLs from the convenience of your TinyURL dashboard. Not only is this convenient for you (and your audiences), but it builds trust and familiarity over time.
              </p>
            </div>

          </div>
        </section>

        {/* ================= 3. SECTION ================= */}
        <section className="w-full py-12 px-6 lg:px-16 bg-white">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            
            <div className="w-full flex justify-center order-1 lg:order-1">
              <img 
                src="https://tinyurl.com/images/overhauling/short-url-tracking/figure-7.webp" 
                alt="Quick and Easy Configuration" 
                className="w-full max-w-[450px] h-auto object-contain" 
              />
            </div>

            <div className="flex flex-col items-start order-2 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071728] leading-tight mb-4">
                Quick and Easy Configuration: Brand<br />
                Your Links in a Snap
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We like to keep things short and simple. Adding a domain can be as easy as hitting “purchase,” and no more complicated than changing up a few configurations with your domain provider. In any case, we’ll walk you through the simple steps to get started.
              </p>
            </div>

          </div>
        </section>

        {/* ================= 4. SECTION ================= */}
        <section className="w-full py-12 px-6 lg:px-16 bg-white">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
            
            <div className="w-full flex justify-center order-1 lg:order-2">
              <img 
                src="https://tinyurl.com/images/overhauling/short-url-tracking/figure-8.webp" 
                alt="Complete Branded Short URL Management" 
                className="w-full max-w-[450px] h-auto object-contain" 
              />
            </div>

            <div className="flex flex-col items-start order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#071728] leading-tight mb-4">
                Complete Branded Short URL<br />
                Management
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                If you have several branded domains connected, you’ll have an easy time managing and using them with our platform. Spot configuration issues in a jiffy, and get convenient notifications when your next payment is due for domains registered through us.
              </p>
            </div>

          </div>
        </section>

      </div>

      {/* ================= FAQ SECTION ================= */}
      <section className="w-full bg-[#f8f9fa] py-16 px-6 lg:px-20">
        <div className="max-w-[1100px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side / Top Heading */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-start text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-medium text-[#071728] leading-tight">
                Frequently<br />
                Asked
                Questions
              </h2>
            </div>

            {/* Right Side: FAQ Accordion List */}
            <div className="lg:col-span-8 flex flex-col">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-slate-200 py-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none cursor-pointer gap-4"
                  >
                    <span className="text-lg font-semibold text-[#071728] group-hover:text-slate-600 transition-colors">
                      {item.question}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-[#071728] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-2 text-slate-600 text-lg leading-relaxed text-left">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}

export default Domains;