import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SamacharKaryakram() {
  // Example images for slider
  const images = [
    "/rally.jpg",
    "/rally2.jpg",
    "/rally3.jpg",
   "/rally4.jpg",
   "/rally5.jpg",
    "/rally6.jpg",
    "/rally3.jpg",
   "/rally4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="news" className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">समाचार और कार्यक्रम</h2>
        <p className="text-gray-600">हमारे निरंतर प्रयासों की झलक</p>
      </div>

      {/* Running Ticker */}
      <div className="bg-orange-100 py-2 mb-6 overflow-hidden rounded-lg">
        <div className="animate-marquee">
          <span className="mx-10 font-medium">
            👉 अभी-अभी: बरहट पंचायत में चापाकल की मरम्मत…
          </span>
          <span className="mx-10 font-medium">💡 जमुई में बिजली की समस्या का समाधान…</span>
          <span className="mx-10 font-medium">📑 सभी पंचायतों में निशुल्क ऑनलाइन शिविर…</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left: Video Embed */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6idBH9XSeYQ"
            title="Mukhiya Ji Event"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </motion.div>

        {/* Right: Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-lg h-[315px]"
        >
          <img src={images[current]} alt="Event" className="w-full h-full object-cover" />
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </motion.div>
      </div>

      {/* Latest Updates Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        { [
          { title: "चापाकल की मरम्मत", desc: "बरहट गाँव में पानी की समस्या हल" },
          { title: "बिजली का समाधान", desc: "पुराने तार हटवाए गए" },
          { title: "निशुल्क ऑनलाइन शिविर", desc: "हर पंचायत में सुविधा उपलब्ध" },
          { title: "सड़क निर्माण", desc: "गाँव तक पक्की सड़क पहुँची" },
        ].map((item, idx) => (
          <Card key={idx} className="shadow-md rounded-2xl">
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
