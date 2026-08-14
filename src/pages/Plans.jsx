import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Importing Footer component

function Plans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What payment methods do you support?",
      answer:
        "TinyURL supports all major credit cards (Visa, Mastercard, AMEX, etc.) issued anywhere in the world.",
    },
    {
      question: "How will TinyURL bill me for my subscription?",
      answer:
        "Paid subscribers have the option to be billed automatically using the credit card you set for auto-payment. Billing takes place on a monthly or annual basis — depending on the option you selected when you purchased or last updated your subscription.",
    },
    {
      question: "How do I view my invoices?",
      answer:
        "You can find the list of your invoices on the Billing Management page of your Account Settings, when logged into an account with a paid subscription.",
    },
    {
      question: "How do I switch to a different plan?",
      answer:
        "When logged into an account with a paid subscription, you can change plans by navigating to the ‘Subscription’ page, in your Account Settings. From there, you can easily switch plans and payment frequency (ex. Monthly to Annual).",
    },
    {
      question: "How do I update my payment details?",
      answer:
        "You can update your payment details from the Payment Method page of your account settings, when logged into an account with a paid subscription.",
    },
    {
      question: "Can I change my subscription from annual to monthly payments?",
      answer:
        "Yes, you can change your subscription from annual to monthly from the Subscription page of your Account Settings. It's as simple as switching a toggle bar to your new billing period preference.",
    },
  ];

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* PLANS SECTION (TOP) */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-40">
        <div className="max-w-[1600px] mx-auto">
          {/* TOP HEADER SECTION */}
          <div className="mb-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0b192c] tracking-tight">
                Find a plan that meets your needs
              </h2>

              {/* Monthly / Annually Toggle */}
              <div className="mt-6 md:mt-0 flex items-center bg-[#007791] p-1 rounded-full w-fit">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                    billingCycle === "monthly"
                      ? "bg-white text-[#007791] shadow"
                      : "text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annually")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                    billingCycle === "annually"
                      ? "bg-white text-[#007791] shadow"
                      : "text-white"
                  }`}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>

          {/* GRID CONTAINER (LEFT INFO + 3 CARDS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT SIDE INFO */}
            <div className="hidden lg:block lg:col-span-4 space-y-4 pt-2">
              <h3 className="text-2xl font-bold text-[#0b192c] leading-tight">
                Get personal with branded links
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                TinyURL's paid tiers offer powerful link branding and
                customization features.
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Because why settle for being noticed when you can be remembered?
              </p>
              <p className="text-[11px] text-slate-500 italic pt-3">
                * Listed prices exclude any applicable taxes.
              </p>
            </div>

            {/* RIGHT SIDE: CARDS CONTAINER */}
            <div className="col-span-1 lg:col-span-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {/* CARD 1: Pro */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#0b192c]">Pro</h4>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-3xl font-bold text-[#0b192c]">
                        $9
                      </span>
                      <span className="ml-1.5 text-slate-500 text-xs">
                        / mo *
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      ($108 / yr)
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed">
                      Get full access to advanced link analytics, editing and
                      management.
                    </p>

                    {/* Slider Mock */}
                    <div className="mt-5 space-y-1.5">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-700">
                        <span>125</span>
                        <span>4K</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1 rounded-full relative">
                        <div className="absolute left-0 top-0 bg-[#28a745] h-1 rounded-full w-[10%]"></div>
                        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#28a745] rounded-full shadow"></div>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="text-[#28a745] font-bold mr-2 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <strong className="text-[#0b192c] text-xs sm:text-sm">
                            125 Links / mo
                          </strong>
                          <div className="text-[10px] text-slate-500">
                            +$1.50 per 10 additional links*
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          Unlimited Tracked Clicks
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          3 Branded Domains
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Subscribe Button */}
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs sm:text-sm">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* CARD 2: Bulk 50K */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#0b192c]">
                      Bulk 50K
                    </h4>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-3xl font-bold text-[#0b192c]">
                        $69
                      </span>
                      <span className="ml-1.5 text-slate-500 text-xs">
                        / mo *
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      ($828 / yr)
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed">
                      Generate, edit and manage your links in bulk.
                    </p>

                    {/* Slider Mock */}
                    <div className="mt-5 space-y-1.5">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-700">
                        <span>50K</span>
                        <span>5M</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1 rounded-full relative">
                        <div className="absolute left-0 top-0 bg-[#28a745] h-1 rounded-full w-[15%]"></div>
                        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#28a745] rounded-full shadow"></div>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start">
                        <span className="text-[#28a745] font-bold mr-2 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <strong className="text-[#0b192c] text-xs sm:text-sm">
                            50,000 Links / mo
                          </strong>
                          <div className="text-[10px] text-slate-500">
                            +$2.00 per 1000 additional links*
                          </div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#28a745] font-bold mr-2 mt-0.5">
                          ✓
                        </span>
                        <div>
                          <strong className="text-[#0b192c] text-xs sm:text-sm">
                            50,000 Tracked Clicks / mo
                          </strong>
                          <div className="text-[10px] text-slate-500">
                            +$0.60 per 1000 additional clicks*
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          3 Branded Domains
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Subscribe Button */}
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs sm:text-sm">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* CARD 3: Enterprise Custom */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#0b192c]">
                      Enterprise
                    </h4>
                    <h3 className="text-lg font-bold text-[#0b192c] mt-0.5">
                      Custom
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      ( Starts at $3,999 / yr )
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed">
                      A tailor-made plan for enterprises that need more than
                      what our regular plans offer.
                    </p>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          Custom Number of Links
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          Custom Number of Tracked Clicks
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          Custom Number of Branded Domains
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          99.9% SLA-backed uptime guarantees
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#28a745] font-bold mr-2">✓</span>
                        <span className="text-[#0b192c] text-xs sm:text-sm font-medium">
                          Custom Solutions for Compliance Needs
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Sales Button */}
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs sm:text-sm">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>

              {/* MOBILE ONLY: "or" Divider & Free Card */}
              <div className="block md:hidden mt-8">
                <div className="flex items-center my-6">
                  <div className="-grow border-t border-slate-300"></div>
                  <span className="px-4 text-slate-500 text-sm font-medium">
                    or
                  </span>
                  <div className="-grow border-t border-slate-300"></div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-lg font-bold text-[#0b192c]">Free</h4>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-3xl font-bold text-[#0b192c]">
                        $0
                      </span>
                      <span className="ml-1.5 text-slate-500 text-xs">
                        / mo
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs sm:text-sm">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE BREAKDOWN SECTION (BOTTOM) - LAPTOP ONLY (4 CARDS) */}
      <section className="hidden md:block w-full bg-white py-16 px-6 sm:px-12 lg:px-40 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0b192c] tracking-tight">
              Feature Breakdown
            </h2>
            <p className="text-slate-700 text-base sm:text-lg mt-3">
              Take a detailed look at everything that's included in our
              subscription plans so you can find the one that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-6 pt-1">
              <div className="flex items-center bg-[#007791] p-1 rounded-full w-fit">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                    billingCycle === "monthly"
                      ? "bg-white text-[#007791] shadow"
                      : "text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("annually")}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                    billingCycle === "annually"
                      ? "bg-white text-[#007791] shadow"
                      : "text-white"
                  }`}
                >
                  Annually
                </button>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Listed prices exclude any applicable taxes.
              </p>
            </div>

            <div className="col-span-1 lg:col-span-8 w-full">
              <div className="grid grid-cols-4 gap-4 w-full">
                {/* FREE CARD */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c]">Free</h4>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-2xl font-bold text-[#0b192c]">
                        $0
                      </span>
                      <span className="ml-1 text-slate-500 text-xs">/ mo</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs">
                      Sign Up
                    </button>
                  </div>
                </div>

                {/* PRO CARD */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c]">Pro</h4>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-2xl font-bold text-[#0b192c]">
                        $9
                      </span>
                      <span className="ml-1 text-slate-500 text-xs">
                        / mo *
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      ($108 / yr)
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* BULK 50K CARD */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c]">
                      Bulk 50K
                    </h4>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-2xl font-bold text-[#0b192c]">
                        $69
                      </span>
                      <span className="ml-1 text-slate-500 text-xs">
                        / mo *
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      ($828 / yr)
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* ENTERPRISE CARD */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between w-full">
                  <div>
                    <h4 className="text-sm font-bold text-[#0b192c]">
                      Enterprise
                    </h4>
                    <h3 className="text-sm font-bold text-[#0b192c] mt-0.5">
                      Custom
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-0.5">
                      ( Starts at $3,999 / yr )
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="w-full bg-[#1b7a3d] hover:bg-[#156130] text-white font-semibold py-2 rounded-xl transition shadow-sm text-xs">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT SECTION */}
      <section className="w-full bg-[#007791] py-0 text-white">
        <div className="max-w-350 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-[50%] flex justify-center items-start h-55 sm:h-70 lg:h-100 px-0 lg:px-0">
              <video
                src="https://tinyurl.com/images/overhauling/user-highlight-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-[45%] space-y-4 px-6 sm:px-12 lg:px-0 pb-10 lg:pb-0 self-center">
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight leading-tight">
                The URL Shortener Trusted by 4,372,549 Users
              </h1>
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                TinyURL has created billions of short links for marketers,
                influencers, small business owners, and large businesses.
                Companies all around the world rely on TinyURL to manage links
                and grow their brands.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button className="bg-white text-[#0b192c] hover:bg-slate-100 font-semibold px-6 py-2.5 rounded-xl transition shadow-md text-sm">
                  Create Free Account
                </button>
                <button className="bg-[#0b192c] text-white hover:bg-[#060e18] font-semibold px-6 py-2.5 rounded-xl transition shadow-md border border-slate-700 text-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-40">
        <div className="max-w-350 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6 lg:pt-12">
            {/* LEFT SIDE: TITLE */}
            <div className="lg:col-span-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#0b192c] tracking-tight leading-tight">
                <span>Frequently</span>
                <span className="block">Asked</span>
                <span className="block">Questions</span>
              </h2>
            </div>

            {/* RIGHT SIDE: ACCORDION LIST */}
            <div className="lg:col-span-8 w-full">
              <div className="divide-y divide-slate-200 border-b border-slate-200">
                {faqData.map((faq, index) => (
                  <div key={index} className="py-5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className="text-[17px] sm:text-[19px] font-medium text-[#0b192c]">
                        {faq.question}
                      </span>

                      {/* Chevron Arrow Icon */}
                      <svg
                        className={`w-4 h-4 text-[#0b192c] transform transition-transform duration-200 ml-4 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Answer Text */}
                    {openFaq === index && (
                      <div className="mt-3 text-[17px] sm:text-[19px] text-[#0b192c] font-normal leading-relaxed pr-6">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component Added Here */}
      <Footer />
    </div>
  );
}

export default Plans;