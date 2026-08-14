import React, { useState } from "react";
import {
  Link2,
  QrCode,
  Send,
  Globe,
  Pencil,
  AlertTriangle,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("shorten");

  const [destinationUrl, setDestinationUrl] = useState("");
  const [domain, setDomain] = useState("tinyurl.com");
  const [alias, setAlias] = useState("");
  const [recentLinks, setRecentLinks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shortenedResult, setShortenedResult] = useState("");

  // Yahan FAQs ki state aur toggle function define kiya gaya hai
  const [faqs, setFaqs] = useState([
    {
      question: "What Is a URL Shortener?",
      answer:
        "A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links.",
      isOpen: false,
    },
    {
      question: "How Does a URL Shortener Work?",
      answer:
        "URL shorteners work like simple signposts: they create new links (redirects) that serve the single purpose of bouncing users to an eventual destination. Since all URLs are essentially just instructions for where your web browser should send you online, you can think of shortening a URL as turning geographic coordinates into handy, easy-to-understand street addresses.",
      isOpen: false,
    },
    {
      question: "What Are the Benefits of Using a Short URL?",
      answer: (
        <div className="space-y-3">
          <p>
            Brands, organizations, and individuals use link shorteners to make
            sharing links more convenient. They make it possible to fit links
            into emails, social media posts, print materials, billboards, or
            even make it so links can be read aloud on audio-dependent media
            like podcasts.
          </p>
          <p>
            With our paid plans, you can even shorten links using your own
            brand's domain, and then track detailed click analytics for sharper,
            faster decision-making!
          </p>
        </div>
      ),
      isOpen: true,
    },
    {
      question: "What Is a Custom URL Shortener?",
      answer:
        "A custom URL shortener (also known as a branded URL shortener) is a link shortener that lets you use a personalized domain in place of a default like tinyurl.com. These fully custom or branded links are great for building trust with audiences, earning higher click-through rates, giving more information about a link’s destination, and improving brand recall.",
      isOpen: false,
    },
    {
      question: "How Do I Shorten a URL for Free?",
      answer:
        "You can shorten a URL for free using TinyURL’s link shortening platform. The process is incredibly straightforward: Just visit our URL shortener tool on your browser of choice, key in your long URL into the indicated field, and generate a shortened URL by clicking the 'Shorten URL' button. If you’re feeling creative, you can try and attach a unique back half (ex. tinyurl.com/example) by using the ‘Alias’ field.",
      isOpen: false,
    },
    {
      question: "How Do I Know Your Service Is Reliable and Scalable?",
      answer:
        "TinyURL is a cutting-edge link-shortening platform that caters to a broad user base looking for a robust method to shorten and brand links. Our platform is trusted by big brands around the world for creating links that are safe, reliable, and never expire. We’ve created billions of short, branded links so far!",
      isOpen: false,
    },
    {
      question: "Can I Use a Domain I Already Own?",
      answer:
        "Certainly, you can! We pride ourselves on offering personalization features and flexibility so users can create fully customized links. Our paid plans let you register or import top-level domains (example.com) or subdomains (subdomain.example.com) provided they don’t have web content built on top of them.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      }),
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!destinationUrl) return;

    let formattedUrl = destinationUrl;

    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = "https://" + formattedUrl;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://backendtinyurl-production-7a40.up.railway.app/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            longUrl: formattedUrl,
          }),
        },
      );

      const data = await response.json();

      if (data.ok) {
        const newLink = {
          original: formattedUrl,
          short: data.shortURL,
          date: new Date().toLocaleDateString(),
        };

        setShortenedResult(data.shortURL);
        setRecentLinks((prevLinks) => [newLink, ...prevLinks]);
        setDestinationUrl("");
        setAlias("");
      }
    } catch (error) {
      console.log(error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#002342] text-white font-sans flex flex-col justify-between selection:bg-[#0092b3] selection:text-white relative">
      {/* Navbar Component Called Here */}
      <Navbar />

      {/* MAIN CONTENT SECTION */}
      <main className="-grow px-6 sm:px-12 lg:px-16 py-8 sm:py-16 max-w-337.5 mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start text-white">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-white">
            URL Shortener, Branded Short Links &amp; Analytics
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Welcome to the original link shortener &mdash; simplifying the
            Internet through the power of the URL since 2002.
          </p>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            You can use branded domains for fully custom links, track link
            analytics, and enjoy other powerful features with our paid plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <button className="bg-white text-[#002342] font-semibold px-8 py-3.5 rounded shadow text-center text-base">
              View Plans
            </button>
            <button className="bg-[#0092b3] text-white font-semibold px-8 py-3.5 rounded shadow text-center text-base">
              Create Free Account
            </button>
          </div>
        </div>

        {/* BOX SECTION */}
        <div className="lg:col-span-5 bg-white rounded-lg shadow-2xl text-slate-900 overflow-hidden w-full border border-slate-200">
          <div className="grid grid-cols-2 border-b border-slate-200 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("shorten")}
              className={`py-3.5 px-3 flex items-center justify-center space-x-2 transition text-center cursor-pointer ${
                activeTab === "shorten"
                  ? "bg-white text-slate-700 hover:bg-slate-100"
                  : "bg-[#0092b3] text-white"
              }`}
            >
              <Link2 className="w-4 h-4" />
              <span>Shorten a Link</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("qr")}
              className={`py-3.5 px-3 flex items-center justify-center space-x-2 transition text-center cursor-pointer ${
                activeTab === "qr"
                  ? "bg-white text-slate-700 hover:bg-slate-100"
                  : "bg-[#0092b3] text-white"
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Generate QR Code</span>
            </button>
          </div>

          <div className="p-6">
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                    <Send className="w-3.5 h-3.5 text-[#002342]" />
                    <span>
                      {activeTab === "shorten" ? "Long URL" : "Destination URL"}{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={destinationUrl}
                    onChange={(e) => setDestinationUrl(e.target.value)}
                    placeholder="Paste long URL here"
                    required
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#0092b3]"
                  />
                </div>

                {activeTab === "shorten" && shortenedResult ? (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                        <span>TinyURL Link</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          readOnly
                          value={shortenedResult}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm pr-10 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(shortenedResult);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          }}
                          className="absolute right-3 top-3 text-slate-500 hover:text-slate-800 cursor-pointer"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      {copied && (
                        <span className="text-xs text-green-600 mt-1 block">
                          Copied to clipboard!
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setShortenedResult("");
                        setDestinationUrl("");
                      }}
                      className="block text-center w-full bg-[#1b7a3e] hover:bg-[#166332] text-white font-semibold py-3 px-4 rounded shadow text-sm transition cursor-pointer mt-4"
                    >
                      Shorten Another Link
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                          <Globe className="w-3.5 h-3.5 text-[#002342]" />
                          <span>Domain</span>
                        </label>
                        <select
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#0092b3]"
                        >
                          <option value="tinyurl.com">tinyurl.com</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                          <Pencil className="w-3.5 h-3.5 text-[#002342]" />
                          <span>Alias (optional)</span>
                        </label>
                        <div className="flex items-center space-x-1">
                          <span className="text-slate-400 font-semibold text-sm">
                            /
                          </span>
                          <input
                            type="text"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            placeholder="Add alias here"
                            className="w-full px-2.5 py-2.5 bg-white border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#0092b3]"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 -mt-2">
                      Must be at least 5 characters
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="block text-center w-full bg-[#1b7a3e] hover:bg-[#166332] text-white font-semibold py-3 px-4 rounded shadow text-sm transition cursor-pointer mt-3"
                    >
                      {loading
                        ? activeTab === "shorten"
                          ? "Shortening..."
                          : "Generating..."
                        : activeTab === "shorten"
                          ? "Shorten Link"
                          : "Generate QR Code"}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-normal pt-1 font-normal">
                      By clicking{" "}
                      {activeTab === "shorten"
                        ? "Shorten Link"
                        : "Generate QR Code"}
                      , you agree with our{" "}
                      <span className="underline cursor-pointer">
                        Terms of Service
                      </span>
                      ,{" "}
                      <span className="underline cursor-pointer">
                        Privacy Policy
                      </span>
                      , and{" "}
                      <span className="underline cursor-pointer">
                        Use of Cookies
                      </span>
                      .
                    </p>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* RECENT LINKS SECTION */}
      <section className="px-4 sm:px-12 lg:px-16 pb-16 max-w-337.5 mx-auto w-full">
        <h2 className="text-lg font-semibold text-white mb-3">
          Your Recent Links:
        </h2>
        <div className="bg-white rounded-lg shadow p-4 text-slate-700 text-sm">
          {recentLinks.length === 0 ? (
            <div className="flex items-center space-x-2 text-slate-700 font-normal">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>No links yet in your history</span>
            </div>
          ) : (
            <div className="space-y-3">
              {recentLinks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2.5 bg-slate-500/10 rounded border border-slate-200 gap-2 w-full max-w-full overflow-hidden"
                >
                  <div className="w-full sm:w-auto flex-1 space-y-0.5 min-w-0 overflow-hidden">
                    <a
                      href={item.short}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#002342] hover:underline flex items-center justify-between sm:justify-start gap-1.5 text-sm w-full min-w-0"
                    >
                      <span className="truncate">{item.short}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 inline text-[#002342]" />
                    </a>
                    <p className="text-xs text-slate-500 truncate w-full">
                      {item.original}
                    </p>
                  </div>

                  <div className="w-full sm:w-auto flex items-center justify-end gap-1.5 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(item.short);
                        alert("Copied!");
                      }}
                      className="w-full sm:w-auto bg-[#002342] hover:bg-[#00172b] text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3 shrink-0" /> Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TINYURL PLANS INCLUDE SECTION */}
      <section className="bg-white text-[#212529] py-14 px-6 sm:px-10 lg:px-12">
        <div className="max-w-310 mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-semibold text-[#1a202c] text-center mb-10 sm:mb-12 tracking-tight">
            TinyURL Plans Include:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
            {/* 1. Detailed Link Analytics */}
            <div className="flex flex-row lg:flex-col items-start text-left gap-5 lg:gap-4 group w-full">
              <div className="order-2 lg:order-1 flex-1 lg:w-full space-y-2.5">
                <h3 className="text-xl lg:text-[22px] font-semibold text-[#1a202c] leading-tight">
                  Detailed Link <span className="lg:block">Analytics</span>
                </h3>
                <p className="text-sm sm:text-[17px] text-[#4a5568] leading-normal font-normal">
                  Stay on top of your links'{" "}
                  <span className="lg:block">performance and get</span>{" "}
                  <span className="lg:block">insights into the clicks you</span>{" "}
                  <span className="lg:block">earn and people you reach.</span>
                </p>
              </div>
              <div className="order-1 lg:order-2 w-30 sm:w-32 lg:w-50 shrink-0">
                <img
                  src="https://tinyurl.com/images/feature-1.webp?46e5238bcf5a4660a3af3ec77fbcde7d"
                  alt="Analytics"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 2. Fully Branded Domains */}
            <div className="flex flex-row lg:flex-col items-start text-left gap-5 lg:gap-4 group w-full">
              <div className="order-2 lg:order-1 flex-1 lg:w-full space-y-2.5">
                <h3 className="text-xl lg:text-[22px] font-semibold text-[#1a202c] leading-tight">
                  Fully Branded <span className="lg:block">Domains</span>
                </h3>
                <p className="text-sm sm:text-[17px] text-[#4a5568] leading-normal font-normal">
                  Customize every part of{" "}
                  <span className="lg:block">your links with branded</span>{" "}
                  <span className="lg:block">domains — say goodbye to</span>{" "}
                  <span className="lg:block">default link shortening!</span>
                </p>
              </div>
              <div className="order-1 lg:order-2 w-30 sm:w-32 lg:w-50 shrink-0">
                <img
                  src="https://tinyurl.com/images/feature-2.webp?12dfa23947c4fe285b6101296974fd2b"
                  alt="Domains"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 3. Bulk Short URLs */}
            <div className="flex flex-row lg:flex-col items-start text-left gap-5 lg:gap-4 group w-full">
              <div className="order-2 lg:order-1 flex-1 lg:w-full space-y-2.5">
                <h3 className="text-xl lg:text-[22px] font-semibold text-[#1a202c] leading-tight">
                  Bulk Short URLs
                </h3>
                <p className="text-sm sm:text-[17px] text-[#4a5568] leading-normal font-normal">
                  Scale your communications{" "}
                  <span className="lg:block">with our API, and create</span>{" "}
                  <span className="lg:block">thousands of unique short</span>{" "}
                  <span className="lg:block">
                    links in the blink of an eye.
                  </span>
                </p>
              </div>
              <div className="order-1 lg:order-2 w-30 sm:w-32 lg:w-50 shrink-0">
                <img
                  src="https://tinyurl.com/images/feature-3.webp?395fcf909a9247108ea2d8f8e7571fe0"
                  alt="Bulk URLs"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 4. Link Management */}
            <div className="flex flex-row lg:flex-col items-start text-left gap-5 lg:gap-4 group w-full">
              <div className="order-2 lg:order-1 flex-1 lg:w-full space-y-2.5">
                <h3 className="text-xl lg:text-[22px] font-semibold text-[#1a202c] leading-tight">
                  Link Management
                </h3>
                <p className="text-sm sm:text-[17px] text-[#4a5568] leading-normal font-normal">
                  Take full control of your links:{" "}
                  <span className="lg:block">search, edit, and manage</span>{" "}
                  <span className="lg:block">thousands at a time from a</span>{" "}
                  <span className="lg:block">convenient dashboard.</span>
                </p>
              </div>
              <div className="order-1 lg:order-2 w-30 sm:w-32 lg:w-50 shrink-0">
                <img
                  src="https://tinyurl.com/images/feature-4.webp?9c503823a480ef2d8ca66db5eed22205"
                  alt="Management"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINK SHORTENING DONE QUICK AND EASY SECTION */}
      <section className="bg-[#0e7490] text-white w-full lg:pl-12 pr-0 py-0 overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-auto lg:h-125">
          <div className="order-1 w-full h-70 sm:h-85 lg:h-full relative bg-black overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://tinyurl.com/images/overhauling/shortener-video.mp4"
              className="w-full h-full object-cover absolute inset-0"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="order-2 flex flex-col justify-between px-6 sm:px-10 lg:px-16 py-10 lg:py-14 space-y-6 lg:space-y-0">
            <h2 className="text-[26px] sm:text-3xl lg:text-[38px] font-semibold leading-[1.2] tracking-tight text-white">
              Link Shortening Done Quick{" "}
              <span className="lg:block">and Easy</span>
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base lg:text-[16px] text-white font-normal leading-relaxed">
              <div>
                Our URL shortener is not only among{" "}
                <span className="lg:block">
                  the first-ever link shorteners on the
                </span>{" "}
                <span className="lg:block">
                  Internet &mdash; it's the best out there.
                </span>
              </div>
              <div>
                Shorten links for social media, blogs,{" "}
                <span className="lg:block">
                  SMS, emails, ads, and almost anything
                </span>{" "}
                <span className="lg:block">both off- and online.</span>
              </div>
              <div>
                Wave goodbye to long, clunky links and{" "}
                <span className="lg:block">
                  give your audiences the experiences
                </span>{" "}
                <span className="lg:block">they deserve!</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button className="w-full sm:w-auto bg-white text-[#002342] font-semibold px-8 py-3.5 rounded-sm text-center text-base">
                View Plans
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-[#002342] text-white font-semibold px-8 py-3.5 rounded-sm text-center text-base"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR ONE-STOP SOLUTION SECTION */}
      <section className="bg-white pt-24 pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-362.5 mx-auto text-center">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a202c] tracking-tight mb-4">
              Your One-Stop Solution for Branding and Managing Links
            </h2>
            <p className="text-base sm:text-lg text-[#4a5568] max-w-2xl mx-auto mb-8">
              We offer a comprehensive suite of premium features to allow users
              to brand and manage links conveniently and confidently.
            </p>
            <div>
              <button className="bg-[#0e7490] hover:bg-[#0b5c74] text-white font-semibold px-8 py-3 rounded-sm transition-colors">
                View Plans
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-12 gap-4 items-center pt-2 pb-2">
            <div className="col-span-3 flex flex-col space-y-4 pl-8">
              {[
                {
                  index: 0,
                  title: "Unlimited Tracked Clicks",
                  text: "We don't believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!",
                },
                {
                  index: 1,
                  title: "Detailed Link Analytics",
                  text: "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.",
                },
                {
                  index: 2,
                  title: "Branded Domains",
                  text: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.",
                },
              ].map((item) => (
                <div
                  key={item.index}
                  onMouseEnter={() => setActiveIndex(item.index)}
                  className={`px-4 py-8 rounded-xl text-left transition-all duration-300 cursor-pointer border border-transparent w-[86%] ml-auto ${
                    activeIndex === item.index
                      ? "bg-[#f0f9ff] border-[#bae6fd]! shadow-sm"
                      : "hover:bg-[#f8fafc] hover:border-gray-100"
                  }`}
                >
                  <h3 className="text-xl font-bold text-[#1a202c] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#4a5568] text-[1.1rem] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="col-span-6 flex justify-center items-center pt-10">
              <div className="w-full max-w-170 h-130 flex items-center justify-center transition-all duration-500">
                <img
                  src={
                    [
                      "https://tinyurl.com/images/overhauling/card-feature-0.webp",
                      "https://tinyurl.com/images/overhauling/card-feature-1.webp",
                      "https://tinyurl.com/images/overhauling/card-feature-2.webp",
                      "https://tinyurl.com/images/overhauling/card-feature-3.webp",
                      "https://tinyurl.com/images/overhauling/card-feature-4.webp",
                      "https://tinyurl.com/images/overhauling/card-feature-5.webp",
                    ][activeIndex]
                  }
                  alt="Feature Preview"
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
            </div>

            <div className="col-span-3 flex flex-col space-y-4 pr-8">
              {[
                {
                  index: 3,
                  title: "Fully Custom Links",
                  text: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.",
                },
                {
                  index: 4,
                  title: "Bulk Short URLs",
                  text: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.",
                },
                {
                  index: 5,
                  title: "Link Management",
                  text: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.",
                },
              ].map((item) => (
                <div
                  key={item.index}
                  onMouseEnter={() => setActiveIndex(item.index)}
                  className={`px-4 py-8 rounded-xl text-left transition-all duration-300 cursor-pointer border border-transparent w-[86%] mr-auto ${
                    activeIndex === item.index
                      ? "bg-[#f0f9ff] border-[#bae6fd] shadow-sm"
                      : "hover:bg-[#f8fafc] hover:border-gray-100"
                  }`}
                >
                  <h3 className="text-xl font-bold text-[#1a202c] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#4a5568] text-[1.1rem] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden flex flex-col items-center px-4">
            <div className="w-full max-w-100 h-80 flex items-center justify-center mb-6">
              <img
                src={
                  [
                    "https://tinyurl.com/images/overhauling/card-feature-0.webp",
                    "https://tinyurl.com/images/overhauling/card-feature-1.webp",
                    "https://tinyurl.com/images/overhauling/card-feature-2.webp",
                    "https://tinyurl.com/images/overhauling/card-feature-3.webp",
                    "https://tinyurl.com/images/overhauling/card-feature-4.webp",
                    "https://tinyurl.com/images/overhauling/card-feature-5.webp",
                  ][activeIndex]
                }
                alt="Feature Preview"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-full max-w-100 bg-[#f0f9ff] border border-[#bae6fd] p-6 rounded-xl text-left mb-6 mx-auto shadow-sm">
              <h3 className="text-xl font-bold text-[#1a202c] mb-2.5">
                {
                  [
                    "Unlimited Tracked Clicks",
                    "Detailed Link Analytics",
                    "Branded Domains",
                    "Fully Custom Links",
                    "Bulk Short URLs",
                    "Link Management",
                  ][activeIndex]
                }
              </h3>
              <p className="text-[#4a5568] text-[1.1rem] leading-relaxed">
                {
                  [
                    "We don't believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!",
                    "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.",
                    "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.",
                    "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.",
                    "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.",
                    "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.",
                  ][activeIndex]
                }
              </p>
            </div>

            <div className="flex items-center justify-center space-x-3 mt-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border border-[#0e7490] shrink-0 p-0 ${
                    activeIndex === index ? "bg-[#0e7490]" : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMING THE DIGITAL LANDSCAPE SECTION */}
      <section className="bg-[#0b1d3a] text-white py-0 overflow-hidden">
        <div className="max-w-325 mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center text-left order-2 lg:order-1 px-6 sm:px-10 lg:py-8 py-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.3rem] font-bold tracking-tight mb-3 leading-[1.15]">
              Transforming the Digital Landscape Since &apos;02
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-5 max-w-lg leading-relaxed">
              TinyURL has created billions of short links for marketers,
              influencers, small business owners, and large businesses.
            </p>

            <div className="space-y-3.5">
              <div className="flex items-baseline justify-between max-w-lg">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Billions
                </span>
                <span className="text-gray-300 text-sm sm:text-base">
                  of redirects per month
                </span>
              </div>

              <div className="flex items-baseline justify-between max-w-lg">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  24 years
                </span>
                <span className="text-gray-300 text-sm sm:text-base">
                  of shortening URLs
                </span>
              </div>

              <div className="flex items-baseline justify-between max-w-lg">
                <span className="text-xl sm:text-2xl lg:text-[1.9rem] font-extrabold text-white tracking-tight">
                  32,278,560,790
                </span>
                <span className="text-gray-300 text-sm sm:text-base">
                  TinyURLs created
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-end items-center order-1 lg:order-2 w-full h-full">
            <div className="w-full h-full flex items-center justify-end">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto lg:max-h-105 object-cover rounded-none shadow-none"
              >
                <source
                  src="https://tinyurl.com/images/overhauling/platform-highlight-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="bg-white text-gray-900 py-10 px-6 sm:px-10 lg:px-12 w-full">
        <div className="max-w-312.5 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Heading Column */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-tight leading-[1.2] text-gray-900 max-w-65 mx-auto lg:mx-0">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8 divide-y divide-gray-200 border-b border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-[17px] sm:text-[18px] font-semibold text-gray-900 group-hover:text-gray-900 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 shrink-0 text-gray-700 ${faq.isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {faq.isOpen && (
                  <div className="mt-3 text-gray-700 text-[15px] sm:text-base leading-relaxed pr-6">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Component Called Here */}
      <Footer />
    </div>
  );
}

export default App;
