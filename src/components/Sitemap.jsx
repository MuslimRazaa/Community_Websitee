import React from 'react';

const Sitemap = () => {
  return (
    '<?xml version="1.0" encoding="UTF-8"?>' +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>https://example.com/page1</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://example.com/page2</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>
      <!-- Add more sitemap entries as needed -->
    </sitemapindex>`
  );
};

export default Sitemap;