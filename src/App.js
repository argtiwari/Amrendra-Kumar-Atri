import Sampark from "./components/Sampark";
import SamacharKaryakram from "./components/SamacharKaryakram";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

import Gallery from "./components/Gallery";

import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      name: "रामेश्वर प्रसाद",
      place: "जमुई",
      message:
        "मुखिया जी ने मेरी बेटी की शादी में पूरा सहयोग किया—हमेशा आभारी रहूँगा।",
      rating: 5,
    },
    {
      name: "सीमा देवी",
      place: "स्थानीय निवासी",
      message: "सड़क और मंदिर का निर्माण हुआ, गाँव की पहचान बदल गई।",
      rating: 5,
    },
    {
      name: "राधा देवी",
      place: "लगमा",
      message:
        "निःशुल्क ऑनलाइन कैम्प से राशन कार्ड व पैन कार्ड बन गया—ये सेवा गरीबों के लिए वरदान है।",
      rating: 5,
    },
    {
      name: "मनोज कुमार",
      place: "मजदूर",
      message: "इलाज के लिए समय पर आर्थिक मदद मिली—मेरे बच्चे की जान बची।",
      rating: 5,
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    place: "",
    message: "",
    rating: 5,
  });
  const [thanks, setThanks] = useState("");

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleAddComment(e) {
    e.preventDefault();
    if (!form.name || !form.place || !form.message) {
      setThanks("कृपया नाम, स्थान और संदेश भरें.");
      return;
    }
    const newItem = {
      name: form.name,
      place: form.place,
      message: form.message,
      rating: Number(form.rating) || 5,
    };
    setTestimonials((prev) => [newItem, ...prev]);
    setForm({ name: "", place: "", message: "", rating: 5 });
    setThanks("धन्यवाद! आपकी टिप्पणी जोड़ दी गई है.");
    setTimeout(() => setThanks(""), 3000);
  }

  return (
    // add top padding so fixed navbar doesn't cover anchored sections on small screens
    <div className="font-sans bg-gray-50 pt-20 md:pt-24">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 md:w-20 md:h-20 "
            />
            <span className="text-2xl font-extrabold text-green-700 tracking-wide font-serif drop-shadow">
              अमरेन्द्र कुमार अत्री
            </span>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-semibold text-gray-700 text-lg font-sans">
            <li>
              <a
                href="#about"
                className="hover:text-green-600 transition-colors duration-200"
              >
                परिचय
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-green-600 transition-colors duration-200"
              >
                उपलब्धियाँ
              </a>
            </li>
            <li>
              <a
                href="#vision"
                className="hover:text-green-600 transition-colors duration-200"
              >
                दृष्टि
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-green-600 transition-colors duration-200"
              >
                गैलरी
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-green-600 transition-colors duration-200"
              >
                जनता की आवाज़
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="hover:text-green-600 transition-colors duration-200"
              >
                समाचार
              </a>
            </li>
            <li>
              <a
                href="#sampark"
                className="hover:text-green-600 transition-colors duration-200"
              >
                हमसे जुड़ें
              </a>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <Button
            className="md:hidden bg-gradient-to-r from-green-600 to-orange-500 text-white font-bold rounded-full px-4 py-2 shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
          >
            ☰
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50">
            <ul className="flex flex-col space-y-2 px-6 py-4 font-medium text-gray-700">
              <li>
                <a
                  href="#about"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  परिचय
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  उपलब्धियाँ
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  दृष्टि
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  गैलरी
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  जनता की आवाज़
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  समाचार
                </a>
              </li>
              <li>
                <a
                  href="#sampark"
                  className="hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  हमसे जुड़ें
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-orange-500 text-white text-center py-0 px-0 relative">
        <div className="max-w-6x2 mx-auto">
          {/* /* image wrapper is relative so overlay sits over image bottom */}
          <div className="relative w-full flex justify-center">
            <img
              src="/hero-image.png"
              alt="Hero"
              className="mx-auto h-auto object-cover max-h-[420px] md:max-h-[580px] rounded-b-xl"
            />
            {/* Overlay positioned at the bottom edge of the image */}
            <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center justify-end pointer-events-none">
              {/* gradient to fade into image */}
              <div className="w-full bg-gradient-to-t from-black/55 to-transparent py-6 flex flex-col items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-base sm:text-2xl md:text-4xl font-bold text-white mx-4"
                  style={{
                    textShadow: "0 0 16px #ffd700, 0 4px 18px rgba(0,0,0,0.6)",
                    background: "rgba(0,0,0,0.35)",
                    borderRadius: "12px",
                    padding: "8px 18px",
                    display: "inline-block",
                  }}
                >
                  जनसेवा ही मेरा धर्म है – श्री अमरेन्द्र कुमार अत्री
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs sm:text-sm md:text-lg text-white/90 mt-2 max-w-3xl mx-4"
                  style={{
                    textShadow: "0 0 8px #ffd700",
                    background: "rgba(0,0,0,0.25)",
                    borderRadius: "8px",
                    padding: "6px 14px",
                    display: "inline-block",
                  }}
                >
                  गरीबों और आम जनता की सेवा करते हुए जीवन समर्पित किया। अब पहली
                  बार जमुई विधानसभा से विधायक प्रत्याशी के रूप में आपके बीच।
                </motion.p>
                <div className="mt-3">
                  <Button
                    className="pointer-events-auto rounded-full px-5 py-2 text-sm sm:text-base font-semibold bg-gradient-to-r from-green-700 via-orange-500 to-yellow-400 text-white shadow-md"
                    onClick={() => {
                      const el = document.getElementById("sampark");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    मिशन से जुड़ें
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About & Family Section */}
      <section
        className="py-20 px-6 md:px-20 bg-gray-50"
        id="about"
        style={{ scrollMarginTop: "88px" }}
      >
        <div className="text-center mb-12">
          {/* Profile Image */}
          <img
            src="/your-photo.jpg"
            alt="Profile"
            className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-green-600 object-cover"
          />
          <h2 className="text-3xl font-bold mt-6">
            मेरा परिचय एवं पारिवारिक पृष्ठभूमि
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column - परिचय */}
          <div
            className="bg-white shadow-lg rounded-2xl p-8"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              मेरा परिचय
            </h3>
            <ul className="space-y-4 text-gray-700 leading-relaxed text-lg list-disc pl-6">
              <li>
                मैंने स्नातक की शिक्षा{" "}
                <span className="font-medium">पटना विश्वविद्यालय</span> से
                प्राप्त की।
              </li>
              <li>
                मुझे <span className="font-medium">जमुई जिला क्रिकेट संघ</span>{" "}
                का निर्विरोध <span className="font-medium">अध्यक्ष</span> चुना
                गया। समाजसेवा करते हुए मैंने हमेशा जनसेवा, संवेदनशीलता और
                निष्पक्षता की सीख ली।
              </li>
              <li>
                पिछले <span className="font-medium">10 वर्षों</span> से मैं
                सामाजिक सेवा में सक्रिय हूँ।
              </li>
              <li>
                मेरा विश्वास है कि{" "}
                <span className="font-medium">
                  सच्ची राजनीति वही है जो जनता की सेवा से जुड़ी हो।
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column - पारिवारिक पृष्ठभूमि */}
          <div
            className="bg-gray-100 shadow-lg rounded-2xl p-8"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              पारिवारिक पृष्ठभूमि
            </h3>
            <ul className="space-y-4 text-gray-700 leading-relaxed text-lg list-disc pl-6">
              <li>
                मेरे पिता{" "}
                <span className="font-medium">स्वर्गीय त्रियोगी नारायण सिंह</span>{" "}
                पूर्व मंत्री{" "}
                <span className="font-medium">श्री राजेंद्र प्रसाद सिंह </span>{" "}
                (कांग्रेस) के निजी सचिव रहे थे।
              </li>
              <li>
                मेरी पत्नी{" "}
                <span className="font-medium">
                  नगर पंचायत, वार्ड संख्या 15, लगमा, जमुई
                </span>{" "}
                की <span className="font-medium">वार्ड आयुक्त</span> के रूप में
                कार्यरत हैं।
              </li>
              <li>
                मेरे परिवार की परंपरा हमेशा{" "}
                <span className="font-medium">
                  से समाज सेवा और 
                </span>{" "}
                जनकल्याण से जुड़ी रही है। <span className="font-medium">मेरे परिवार ने हमेशा गरीबों और वंचितों की मदद को प्राथमिकता दी है।</span>।
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Achievements Section */}
      <section
        className="py-20 px-6 md:px-20 bg-gradient-to-r from-green-50 to-green-100"
        id="achievements"
        data-aos="fade-up"
        style={{ scrollMarginTop: "88px" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">मेरी उपलब्धियाँ</h2>
          <p className="text-lg text-gray-700 mt-4">
            जनता की सेवा ही मेरा धर्म है। छोटे से छोटे कार्य से लेकर बड़े स्तर
            तक, हर जगह मैंने कोशिश की है कि लोगों तक मदद पहुँचे।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="/images/photo2.jpg"
              alt="Road Construction"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              सड़क निर्माण
            </h3>
            <p className="text-gray-600 mt-2">
              गाँव-गाँव तक सड़क पहुँचाकर आवागमन को आसान बनाया।
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="/achievement2.jpg"
              alt="Temple"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              मंदिर निर्माण व मरम्मत
            </h3>
            <p className="text-gray-600 mt-2">
              धर्मस्थलों की मरम्मत और नए मंदिर बनवाकर सामाजिक एकता को बढ़ावा
              दिया।
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="/medical.jpg"
              alt="Medical Help"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              निःशुल्क इलाज
            </h3>
            <p className="text-gray-600 mt-2">
              गरीब परिवारों के इलाज के लिए दवाई और चिकित्सा सहायता उपलब्ध कराई।
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="/images/rojgar.jpg"
              alt="Employment"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              रोजगार उपलब्ध
            </h3>
            <p className="text-gray-600 mt-2">
              सैकड़ों युवाओं को रोजगार और स्वरोजगार के अवसर दिलवाए।
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="/rally2.jpg"
              alt="Online Camp"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              ऑनलाइन सेवा कैम्प
            </h3>
            <p className="text-gray-600 mt-2">
              हर पंचायत में निःशुल्क राशन कार्ड, वोटर कार्ड, पैन कार्ड जैसी
              सुविधाएँ दिलवाईं।
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <img
              src="/images/achievement5.jpg"
              alt="Daily Help"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">
              दैनिक सहयोग
            </h3>
            <p className="text-gray-600 mt-2">
              हर दिन किसी न किसी जरूरतमंद परिवार तक मदद पहुँचाई।
            </p>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section
        className="py-20 px-6 md:px-20 bg-gradient-to-r from-orange-100 via-white to-green-100 relative overflow-hidden"
        id="vision"
        style={{ scrollMarginTop: "88px" }}
      >
        {/* हल्की Village Illustration Background */}
        <div className="absolute bottom-0 left-0 w-full opacity-20">
          <img
            src="/village-illustration.png"
            alt="Village Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Heading + Intro */}
        <div className="relative text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            मेरी दृष्टि और मिशन
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            मेरा सपना है कि हर गाँव आत्मनिर्भर बने, हर युवा के पास रोजगार हो और
            हर परिवार को शिक्षा, स्वास्थ्य और सम्मान मिले। यही मेरा वादा है और
            इसी दिशा में मैं लगातार कार्य करता रहूँगा।
          </p>
        </div>

        {/* Cards Section */}
        <div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-orange-600">
              🚜 किसानों की तरक्की
            </h3>
            <p className="text-gray-600 mt-3">
              सिंचाई, बीज और तकनीक की सुविधा हर किसान तक पहुँचाना, ताकि उनकी आय
              दोगुनी हो सके।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-green-600">
              🎓 शिक्षा और रोजगार
            </h3>
            <p className="text-gray-600 mt-3">
              हर बच्चे को अच्छी शिक्षा और हर युवा को सम्मानजनक रोजगार दिलाना।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition ">
            <h3 className="text-xl font-semibold text-blue-600">
              🏥 स्वास्थ्य सेवा
            </h3>
            <p className="text-gray-600 mt-3">
              गाँव-गाँव में निःशुल्क स्वास्थ्य शिविर और बेहतर इलाज की सुविधा।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-purple-600">
              🛣️ सड़क और विकास
            </h3>
            <p className="text-gray-600 mt-3">
              हर गाँव को बेहतर सड़क, बिजली और पानी की सुविधा देना।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-red-600">
              🤝 सामाजिक न्याय
            </h3>
            <p className="text-gray-600 mt-3">
              ग़रीब, दलित और वंचित वर्गों की आवाज़ उठाना और उन्हें बराबरी का
              अधिकार दिलाना।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-yellow-600">
              🌱 स्वच्छ और हरा-भरा गाँव
            </h3>
            <p className="text-gray-600 mt-3">
              स्वच्छता अभियान, पौधारोपण और पर्यावरण की रक्षा के लिए हर गाँव में
              अभियान।
            </p>
          </div>
        </div>
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative py-20 px-6 md:px-20 overflow-hidden"
        style={{ scrollMarginTop: "88px" }}
      >
        {/* Soft gradient + animated blobs background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-orange-50"></div>
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Heading */}
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-4xl font-extrabold text-green-800 drop-shadow">
            जनता की आवाज़
          </h2>
          <p className="text-gray-700 mt-3 max-w-3xl mx-auto">
            “मदद सबसे पहले”—यही हमारी पहचान है. नीचे कुछ वास्तविक अनुभव हैं, और
            आप अपनी राय भी जोड़ सकते हैं.
          </p>
        </div>

        {/* Slider */}
        <div className="relative z-10 max-w-5xl mx-auto mb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="pb-10"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <Card className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={18}
                          className="text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-800 italic text-lg leading-relaxed">
                      “{t.message}”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-green-700">
                      — {t.name}, {t.place}
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Add Comment Form */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <Card className="rounded-2xl shadow-lg bg-white/95">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                अपनी टिप्पणी जोड़ें
              </h3>

              <form
                onSubmit={handleAddComment}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    नाम
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="आपका नाम"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    स्थान / गाँव
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={form.place}
                    onChange={handleFormChange}
                    placeholder="जैसे—जमुई / लगमा"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    संदेश
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    rows={3}
                    placeholder="बताएँ कि आपको कैसी मदद मिली…"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    रेटिंग
                  </label>
                  <select
                    name="rating"
                    value={form.rating}
                    onChange={handleFormChange}
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value={5}>5 - बेहतरीन</option>
                    <option value={4}>4 - बहुत अच्छा</option>
                    <option value={3}>3 - अच्छा</option>
                    <option value={2}>2 - ठीक-ठाक</option>
                    <option value={1}>1 - सुधार की ज़रूरत</option>
                  </select>
                </div>

                <div className="col-span-1 flex items-end">
                  <Button type="submit" className="rounded-2xl px-6">
                    टिप्पणी भेजें
                  </Button>
                </div>
              </form>

              {thanks && (
                <p className="mt-4 text-sm text-green-700 font-medium">
                  {thanks}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
      <div>
        <SamacharKaryakram />
      </div>
      {/* News & Events */}
      {/* Join Us Section */}
      {/* News & Events ke baad */}
      <Sampark />
      {/* 🔹 Running Ticker Bar */}
      <div className="w-full bg-orange-500 text-white py-2 overflow-hidden relative mb-6 rounded-lg shadow">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-10 font-semibold">
            📢 गाँव-गाँव से लोग जुड़ रहे हैं, बदलाव की लहर तेज़ हो रही है…
          </span>
          <span className="mx-10 font-semibold">
            🤝 आपकी आवाज़ हमें और मज़बूत बनाती है…
          </span>
          <span className="mx-10 font-semibold">
            🚩 जनता का साथ, भविष्य का विश्वास…
          </span>
        </div>
      </div>

     <footer className="bg-gray-900 text-gray-300 py-4 text-center">
  <p className="text-sm">
    © 2025 <span className="font-semibold text-white">Amrender Kumar Atri</span> | 
    Powered by <span className="text-blue-500 hover:underline cursor-pointer"> <a href="https://www.instagram.com/argtiwari?igsh=a3IyNDdrbnYyMTNj">ArgCoding</a></span> | 
    <span className="text-green-400 font-medium"> जनसेवा के लिए समर्पित </span>
  </p>
</footer>

    </div>
  );
}
import { ChevronLeft, ChevronRight } from "lucide-react";
