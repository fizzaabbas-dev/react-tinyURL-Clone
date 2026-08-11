
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Share2,
  Sparkles,
  Loader2
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("shorten");

  const [destinationUrl, setDestinationUrl] = useState("");
  const [domain, setDomain] = useState("tinyurl.com");
  const [alias, setAlias] = useState("");
  
  const [recentLinks, setRecentLinks] = useState([]);
  
  const [shortenedResult, setShortenedResult] = useState(null);
  const [copied, setCopied] = useState(false);
  const [resultCopied, setResultCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedLinks = localStorage.getItem("recentLinks");
    if (savedLinks) {
      setRecentLinks(JSON.parse(savedLinks));
    }
  }, []);

  const saveToLocalStorage = (links) => {
    setRecentLinks(links);
    localStorage.setItem("recentLinks", JSON.stringify(links));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!destinationUrl) return;

    let formattedUrl = destinationUrl;
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = "https://" + formattedUrl;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("https://backendtinyurl-production-cad7.up.railway.app/api/shorten", {
        originalUrl: formattedUrl,
        alias: alias || undefined,
      });

      const data = response.data;
      const generatedShortUrl = data.shortUrl || `https://backendtinyurl-production-cad7.up.railway.app/${data.alias || alias || Math.random().toString(36).substring(2, 8)}`;
      
      const newLink = {
        original: formattedUrl,
        short: generatedShortUrl,
        date: new Date().toLocaleDateString(),
      };

      const updatedLinks = [newLink, ...recentLinks];
      saveToLocalStorage(updatedLinks);
      
      setShortenedResult(generatedShortUrl);
      setDestinationUrl("");
      setAlias("");
    } catch (error) {
      console.error("Error shortening URL:", error);
      const generatedShortUrl = `https://backendtinyurl-production-cad7.up.railway.app/${alias || Math.random().toString(36).substring(2, 8)}`;
      const fallbackLink = {
        original: formattedUrl,
        short: generatedShortUrl,
        date: new Date().toLocaleDateString(),
      };
      const updatedLinks = [fallbackLink, ...recentLinks];
      saveToLocalStorage(updatedLinks);
      setShortenedResult(generatedShortUrl);
      setDestinationUrl("");
      setAlias("");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (url, isResult = false) => {
    navigator.clipboard.writeText(url);
    if (isResult) {
      setResultCopied(true);
      setTimeout(() => setResultCopied(false), 2000);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#002342] text-white font-sans flex flex-col justify-between selection:bg-[#0092b3] selection:text-white relative">
      <Navbar />

      {/* MAIN CONTENT SECTION */}
      <main className="flex-grow px-6 sm:px-12 lg:px-16 py-8 sm:py-16 max-w-[1350px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start text-white">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-white">
            URL Shortener, Branded Short Links &amp; Analytics
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            Welcome to the original link shortener &mdash; simplifying the Internet through the power of the URL since 2002.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <button className="bg-white text-[#002342] font-semibold px-8 py-3.5 rounded shadow text-center text-base cursor-pointer">
              View Plans
            </button>
            <button className="bg-[#0092b3] text-white font-semibold px-8 py-3.5 rounded shadow text-center text-base cursor-pointer">
              Create Free Account
            </button>
          </div>
        </div>

        {/* BOX SECTION */}
        <div className="lg:col-span-5 bg-white rounded-lg shadow-2xl text-slate-900 overflow-hidden w-full border border-slate-200">
          <div className="grid grid-cols-2 border-b border-slate-200 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => { setActiveTab("shorten"); setShortenedResult(null); }}
              className={`py-3.5 px-3 flex items-center justify-center space-x-2 transition text-center cursor-pointer ${
                activeTab === "shorten" ? "bg-white text-slate-700 hover:bg-slate-100" : "bg-[#0092b3] text-white"
              }`}
            >
              <Link2 className="w-4 h-4" />
              <span>Shorten a Link</span>
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab("qr"); setShortenedResult(null); }}
              className={`py-3.5 px-3 flex items-center justify-center space-x-2 transition text-center cursor-pointer ${
                activeTab === "qr" ? "bg-white text-slate-700 hover:bg-slate-100" : "bg-[#0092b3] text-white"
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>Generate QR Code</span>
            </button>
          </div>

          <div className="p-6">
            {!shortenedResult ? (
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                      <Send className="w-3.5 h-3.5 text-[#002342]" />
                      <span>Long URL <span className="text-red-500">*</span></span>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
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
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                        <Pencil className="w-3.5 h-3.5 text-[#002342]" />
                        <span>Alias (optional)</span>
                      </label>
                      <div className="flex items-center space-x-1">
                        <span className="text-slate-400 font-semibold text-sm">/</span>
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
                  <p className="text-[11px] text-slate-400 -mt-2">Must be at least 5 characters</p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="block text-center w-full bg-[#1b7a3e] hover:bg-[#166332] text-white font-semibold py-3 px-4 rounded shadow text-sm transition cursor-pointer mt-3 disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                    <span>{isLoading ? "Shortening..." : (activeTab === "shorten" ? "Shorten Link" : "Generate QR Code")}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                    <Send className="w-3.5 h-3.5 text-[#002342]" />
                    <span>Long URL</span>
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={recentLinks[0]?.original || ""}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-sm text-slate-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#002342]" />
                    <span>Railway Link</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={shortenedResult}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-sm font-semibold text-[#0077b6] focus:outline-none pr-10"
                    />
                    <button
                      onClick={() => copyToClipboard(shortenedResult, true)}
                      className="absolute right-2 top-2.5 text-slate-500 hover:text-slate-800 cursor-pointer"
                      title="Copy link"
                    >
                      {resultCopied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: 'Short URL', url: shortenedResult }).catch(() => {});
                      } else {
                        alert(`Link copied: ${shortenedResult}`);
                      }
                    }}
                    className="bg-[#0e7490] hover:bg-[#0b5c74] text-white text-xs font-semibold py-2.5 px-2 rounded flex flex-col items-center justify-center space-y-1 transition cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(shortenedResult, true)}
                    className="bg-[#002342] hover:bg-[#00182c] text-white text-xs font-semibold py-2.5 px-2 rounded flex flex-col items-center justify-center space-y-1 transition cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{resultCopied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShortenedResult(null)}
                  className="block text-center w-full bg-[#1b7a3e] hover:bg-[#166332] text-white font-semibold py-3 px-4 rounded shadow text-sm transition cursor-pointer mt-4"
                >
                  Shorten Another Link
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* RECENT LINKS SECTION */}
      <section className="px-6 sm:px-12 lg:px-16 pb-16 max-w-[1350px] mx-auto w-full">
        <h2 className="text-xl font-bold text-white mb-4">Your Recent Links:</h2>
        <div className="space-y-3">
          {recentLinks.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-4 text-slate-700 text-sm flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>No links yet in your history</span>
            </div>
          ) : (
            recentLinks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-200"
              >
                <div className="flex items-start space-x-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="overflow-hidden">
                    <a
                      href={item.short}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#0077b6] hover:underline text-base block truncate"
                    >
                      {item.short}
                    </a>
                    <p className="text-xs text-slate-500 truncate max-w-xl">
                      {item.original}
                    </p>
                  </div>
                </div>

                <div className="flex items-center flex-wrap gap-2 shrink-0 w-full md:w-auto justify-end">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: 'Short URL', url: item.short }).catch(() => {});
                      } else {
                        alert(`Link copied: ${item.short}`);
                      }
                    }}
                    className="bg-[#0e7490] hover:bg-[#0b5c74] text-white text-xs font-semibold px-3 py-2 rounded flex items-center space-x-1 transition cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() => copyToClipboard(item.short, false)}
                    className="bg-[#002342] hover:bg-[#00182c] text-white text-xs font-semibold px-3.5 py-2 rounded flex items-center space-x-1.5 transition cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;