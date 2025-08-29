import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const photos = [
  {
    src: "/images/pho1.jpg",
    caption: "विद्यालय उद्घाटन के समय बच्चों के साथ",
  },
  {
    src: "/images/pho2.jpg",
    caption: "स्वास्थ्य शिविर का आयोजन",
  },
  {
    src: "/images/pho3.jpg",
    caption: "सड़क निर्माण निरीक्षण के दौरान",
  },
  {
    src: "/images/pho4.jpg",
    caption: "महिला स्व-सहायता समूह से संवाद",
  },
  {
    src: "/images/pho5.jpg",
    caption: "त्योहार पर आशीर्वाद लेते हुए",
  },
  {
    src: "/images/pho6.jpg",
    caption: "समाज सेवा कार्यक्रम में सहभागिता",
  },
  {
    src: "/images/pho7.jpg",
    caption: "युवा सम्मेलन के दौरान",
  },
  {
    src: "/images/pho8.jpg",
    caption: "जनता दरबार में समस्या समाधान",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">
            हमारी झलकियाँ 📸
          </h2>
          <p className="text-gray-600 mt-2">
            हर पल जनता के बीच, हर काम जनता के लिए
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          data-aos="zoom-in-up"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelected(photo)}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // thoda delay har image pe
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 text-white text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Modal (Full Image View) */}
        {/* Modal (Full Image View) */}
{selected && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
  >
    <div className="relative max-w-3xl max-h-[90vh]">
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 bg-green-900 text-white rounded-full p-2 shadow-lg hover:bg-red-700"
        onClick={() => setSelected(null)}
      >
        ❌
      </button>

      <img
        src={selected.src}
        alt={selected.caption}
        className="rounded-xl shadow-lg"
      />
      <p className="text-white text-center mt-3 text-lg font-semibold italic">
        {selected.caption}
      </p>
    </div>
  </div>
)}


        {/* Closing Note */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-lg text-gray-700 italic">
            “यह सिर्फ़ तस्वीरें नहीं, यह हमारे रिश्तों की कहानी है। जनता के हर दुख-सुख में हमेशा साथ।”{" "}
            <a
              href="https://www.facebook.com/kriti.tiwary.169"
              target="_blank" style={{ color: "#3b5998" } } className="font-semibold" text-decoration="underline" 
              >
              और तस्वीरें 
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
