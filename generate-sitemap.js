// generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

(async () => {
  const sitemap = new SitemapStream({ hostname: "https://amrendrakumaratri.in" });

  // Add your routes here
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/about", changefreq: "weekly", priority: 0.8 });
  sitemap.write({ url: "/contact", changefreq: "weekly", priority: 0.8 });

  sitemap.end();

  streamToPromise(sitemap).then((data) => {
    createWriteStream("./public/sitemap.xml").write(data.toString());
  });
})();
