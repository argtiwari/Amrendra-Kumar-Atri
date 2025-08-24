import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Sampark Section
 * - Anchor id: "sampark" (navbar se link)
 * - Tiranga gradient + crowd bg
 * - Left: Mukhiya ji photo + heading + live counter + WhatsApp join
 * - Right: Contact form + Social buttons
 */
export default function Sampark() {
  const [submitted, setSubmitted] = useState(false);
  const [counter, setCounter] = useState(42534);

  useEffect(() => {
    // अगर App में पहले से AOS.init किया है, तो नीचे की लाइन हटा सकते हैं
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  // Live Counter / Ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + Math.floor(Math.random() * 3) + 1); // 1-3 ka random increment
    }, 2500); // 2.5 sec me badhe

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCounter((c) => c + 1);
    // 4 sec बाद thank-you हटाना चाहें:
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (

    
    <section
      id="sampark"
      className="relative py-20 px-6 scroll-mt-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,153,51,0.85), rgba(255,255,255,0.92), rgba(19,136,8,0.85)), url('https://images.unsplash.com/photo-1596526131083-d763c1be3f3f?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
      }}

      
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Photo + Rally vibe + Counter */}
        <div data-aos="fade-right" className="text-center md:text-left">
          {/* Mukhiya ji photo — अपनी image path से बदलें */}
          <img
            src="/images/mukhiya.jpg"
            alt="Mukhiya Ji"
            className="mx-auto md:mx-0 w-72 rounded-2xl shadow-xl border-4 border-white/60 mb-6 object-cover"
        />

        {/* Address Section - छोटा सा फोटो के सामने */}
        <div className="mb-4">
            <div className="inline-block bg-white/90 rounded-lg px-4 py-2 shadow text-sm text-gray-700 font-medium">
                <span className="font-semibold text-orange-700">पता:</span> रमा मेंशन, बाय-पास रोड कचेहरी-जमुई, 811307  बिहार
            </div>
        </div>
        {/* Live Counter / Ticker */}
        <div className="mt-6 bg-white/85 backdrop-blur p-4 rounded-xl shadow-lg text-lg md:text-xl font-semibold text-green-700 inline-block">
            Aaj tak <span className="text-orange-600">{counter}</span> log hamse jude ✅
        </div>

        {/* Join Us CTA (WhatsApp) */}
          <a
            href="https://wa.me/+919430824645" // अपना सही नंबर लगाएँ
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 active:scale-100 transition"
          >
            ✅ Join Us on WhatsApp
          </a>
        </div>

        {/* Right: Contact Form + Socials */}
        <div data-aos="fade-left" className="bg-white/95 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Sampark Kare ✍️
          </h3>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Naam"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                placeholder="Mobile / Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                placeholder="Apna Sandesh Likhiye..."
                rows="4"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-orange-600 hover:shadow-lg transition"
              >
                Sandesh Bhijwaye ✨
              </button>
            </form>
          ) : (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="text-green-700 font-semibold text-base">
                Dhanyawaad! 🙏 Aapka sandesh Mukhiya ji tak turant pahucha diya gaya hai.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Hamari team jald hi aapse sampark karegi.
              </p>
            </div>
          )}

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/amrendra.atri"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl shadow hover:shadow-lg hover:scale-110 transition"
              aria-label="Facebook"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/amrendraatri?igsh=Y2tuaWY2MTV5Zno5"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white text-xl shadow hover:shadow-lg hover:scale-110 transition"
              aria-label="Instagram"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.797 2.163 15.417 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.417 3.635 1.384 2.668 2.351 2.382 3.524 2.323 4.801.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.345 2.45 1.312 3.417.967.967 2.14 1.253 3.417 1.312 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.45-.345 3.417-1.312.967-.967 1.253-2.14 1.312-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.345-2.45-1.312-3.417-.967-.967-2.14-1.253-3.417-1.312C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/919430824645"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl shadow hover:shadow-lg hover:scale-110 transition"
              aria-label="WhatsApp"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.511-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.348.711.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zM12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.462 3.479 1.334 4.991l-1.414 5.163 5.283-1.386c1.469.805 3.13 1.257 4.794 1.257h.001c5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.998-9.997zm5.432 14.429c-.243.542-1.417 1.049-1.89 1.127-.483.08-1.096.115-1.785-.113-.417-.133-.955-.308-1.641-.601-2.813-1.099-4.633-3.943-4.777-4.133-.137-.188-1.14-1.518-1.14-2.897 0-1.38.722-2.056.978-2.334.256-.278.548-.348.731-.348.183 0 .366.005.525.009.168.004.393-.062.616.472.223.534.755 1.73.818 1.854.062.124.103.271.02.438-.082.168-.154.271-.308.438-.154.167-.326.334-.465.561-.139.227-.287.469-.123.766.164.297.719 1.182 1.538 1.901 1.058.943 1.953 1.242 2.25 1.381.297.139.469.124.643-.074.173-.198.743-.868.941-1.164.197-.297.414-.248.67-.149.256.099 1.624.766 1.876.905.253.139.419.208.48.324.062.115.062.663-.181 1.205z"/>
              </svg>
            </a>
          </div>

          {/* Optional: Telegram CTA */}
          <a
            href="https://chat.whatsapp.com/DeLTWW3ABWvFVkM6M0s8Np?mode=ems_copy_c" // अपना telegram link लगाएँ
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sky-700 font-semibold hover:underline"
          >
            या whatsapp group me juriye →
          </a>
        </div>
      </div>
      
    </section>
    
  );
}
