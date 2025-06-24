const urlConfig = {
  /** 
   * The URL of the app.
   * 
   * @url
   * `https://jamesleoreyes.com` | `http://localhost:3000`
   */
  app: process.env['APP_URL'] ? `https://${process.env['APP_URL']}` : 'http://localhost:3000',
  /** 
   * The URL of the sitemap.
   * 
   * @url
   * `https://jamesleoreyes.com/sitemap.xml` | `http://localhost:3000/sitemap.xml`
   */
  sitemap: process.env['SITEMAP_URL'] ? `https://${process.env['SITEMAP_URL']}` : 'http://localhost:3000/sitemap.xml',
}

export { urlConfig };