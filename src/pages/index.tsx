import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lama Retail - Fashion Clothing</title>
        <meta name="description" content="Lama Retail - high-street fashion brand for men and women." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><rect width=%2232%22 height=%2232%22 rx=%224%22 fill=%22%23000%22/><text x=%2216%22 y=%2223%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2220%22 font-weight=%22700%22 fill=%22%23fff%22>LAMA</text></svg>" />
        <link rel="preconnect" href="https://fonts.shopifycdn.com" />
        <link rel="preconnect" href="https://fonts.shopifycdn.com" crossOrigin />
      </Head>
      <div className="site">
        <header className="header">
          <div className="header-inner">
            <a className="brand" href="/" aria-label="Lama Retail home">
              <svg viewBox="0 0 32 32" className="brand-logo" aria-hidden="true">
                <path
                  d="M2 16h4l3-6l3 12l4-8 3 5h5"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              LAMA
            </a>
            <nav className="nav" aria-label="Primary">
              <div className="nav-search">
                <svg viewBox="0 0 24 24" className="nav-search-icon" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input className="nav-search-input" type="search" placeholder="Search" aria-label="Search" />
              </div>
              <a className="nav-link" href="#MainContent">
                New In
              </a>
              <a className="nav-link" href="/collections/woman-bdy-300-new-styles">
                Women
              </a>
              <a className="nav-link" href="/collections/man-bdy-300-new-styles">
                Men
              </a>
              <a className="nav-link" href="/collections">
                All
              </a>
              <a className="nav-link nav-link--sale" href="/collections/all">
                Sale
              </a>
            </nav>
            <div className="header-actions">
              <a className="cart" href="/cart" aria-label="Cart">
                <svg viewBox="0 0 24 24" className="cart-icon" aria-hidden="true">
                  <circle cx="9" cy="21" r="1.4" fill="#000" />
                  <circle cx="17" cy="21" r="1.4" fill="#000" />
                  <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span className="cart-label">0</span>
              </a>
              <a className="cart cart--open" href="/cart" aria-label="View cart">
                <svg viewBox="0 0 24 24" className="cart-icon cart-icon--open" aria-hidden="true">
                  <circle cx="9" cy="21" r="1.4" fill="#000" />
                  <circle cx="17" cy="21" r="1.4" fill="#000" />
                  <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span className="cart-label cart-label--open">Cart</span>
              </a>
            </div>
          </div>
        </header>

        <main id="MainContent">
          {/* Hero slideshow */}
          <section className="hero">
            <div className="hero-inner">
              <div className="hero-slide">
                <div className="hero-figure" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA_Retail_new_fall_winter_2026.jpg?v=1792041915&width=2000')" }} />
                <div className="hero-caption">
                  <p className="hero-eyebrow">LAMA</p>
                  <h1 className="hero-title">The New Way to Dress<br />We Have It All</h1>
                  <p className="hero-sub">Full year of new styles. Shop the drop.</p>
                  <div className="hero-actions">
                    <a className="btn btn--primary" href="/collections">Shop the Drop</a>
                    <a className="btn btn--ghost" href="/collections">View All</a>
                  </div>
                </div>
              </div>
              <div className="hero-slide">
                <div className="hero-figure" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA_winter_2026_collection.jpg?v=1792134482&width=2000')" }} />
                <div className="hero-caption">
                  <p className="hero-eyebrow">Winter 2026</p>
                  <h1 className="hero-title">Winter 2026<br />Collection</h1>
                  <p className="hero-sub">Coats, knits, and layers for the season.</p>
                  <div className="hero-actions">
                    <a className="btn btn--primary" href="/collections/winter-2026">Shop Winter</a>
                    <a className="btn btn--ghost" href="/collections">View All</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-dots">
              <button className="hero-dot hero-dot--active" type="button" aria-label="Slide 1"></button>
              <button className="hero-dot" type="button" aria-label="Slide 2"></button>
            </div>
          </section>

          {/* Biggest drop banner */}
          <section className="drop">
            <div className="drop-inner">
              <p className="drop-eyebrow">LAMA</p>
              <h2 className="drop-title">Our Biggest Drop of the Year</h2>
              <p className="drop-sub">300 new styles added. Shop Woman &amp; Shop Man.</p>
              <div className="drop-actions">
                <a className="btn btn--primary" href="/collections/woman-bdy-300-new-styles">Shop Woman</a>
                <a className="btn btn--ghost" href="/collections/man-bdy-300-new-styles">Shop Man</a>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="categories">
            <div className="categories-inner">
              <a className="category category--new" href="/collections/new">
                <svg viewBox="0 0 24 24" className="category-icon" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="category-label">New</span>
              </a>
              <a className="category category--woman" href="/collections/woman-bdy-300-new-styles">
                <svg viewBox="0 0 24 24" className="category-icon" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="category-label">Women</span>
              </a>
              <a className="category category--man" href="/collections/man-bdy-300-new-styles">
                <svg viewBox="0 0 24 24" className="category-icon" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="category-label">Men</span>
              </a>
            </div>
          </section>

          {/* Featured product grid */}
          <section className="products">
            <div className="products-inner">
              <div className="products-header">
                <h2 className="products-title">Featured</h2>
                <a className="products-link" href="/collections">View all <span>&rarr;</span></a>
              </div>
              <div className="product-grid">
                <article className="product">
                  <div className="product-image" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA-WHITE.png?v=1739429372')" }} />
                  <div className="product-body">
                    <h3 className="product-title">White Oversized Shirt</h3>
                    <p className="product-price">AED 199</p>
                    <a className="product-link" href="/products/white-oversized-shirt">Quick view <span>&rarr;</span></a>
                  </div>
                </article>
                <article className="product">
                  <div className="product-image" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/ZEBRA-WHITE.png?v=1739429372')" }} />
                  <div className="product-body">
                    <h3 className="product-title">Zebra White Coat</h3>
                    <p className="product-price">AED 499</p>
                    <a className="product-link" href="/products/zebra-white-coat">Quick view <span>&rarr;</span></a>
                  </div>
                </article>
                <article className="product">
                  <div className="product-image" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA-winter-2026-collection.jpg?v=1792134482&width=1000')" }} />
                  <div className="product-body">
                    <h3 className="product-title">Winter 2026 Outerwear</h3>
                    <p className="product-price">AED 399</p>
                    <a className="product-link" href="/products/winter-2026-outerwear">Quick view <span>&rarr;</span></a>
                  </div>
                </article>
                <article className="product">
                  <div className="product-image" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA-WHITE.png?v=1739429372')" }} />
                  <div className="product-body">
                    <h3 className="product-title">White Knit Jumper</h3>
                    <p className="product-price">AED 149</p>
                    <a className="product-link" href="/products/white-knit-jumper">Quick view <span>&rarr;</span></a>
                  </div>
                </article>
                <article className="product">
                  <div className="product-image" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA_winter_2026_collection.jpg?v=1792134482&width=1000')" }} />
                  <div className="product-body">
                    <h3 className="product-title">Burgundy Formal Pants</h3>
                    <p className="product-price">AED 169</p>
                    <a className="product-link" href="/products/burgundy-formal-pants">Quick view <span>&rarr;</span></a>
                  </div>
                </article>
                <article className="product">
                  <div className="product-image" style={{ backgroundImage: "url('//lamaretail.com/cdn/shop/files/LAMA-WHITE.png?v=1739429372')" }} />
                  <div className="product-body">
                    <h3 className="product-title">White Suede Boat Shoes</h3>
                    <p className="product-price">AED 249</p>
                    <a className="product-link" href="/products/white-suede-boots">Quick view <span>&rarr;</span></a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Promo card */}
          <section className="promo">
            <div className="promo-inner">
              <div className="promo-text">
                <p className="promo-eyebrow">LAMA</p>
                <h2 className="promo-title">Designed for Movement, Built for Everyday</h2>
                <p className="promo-sub">CLOTHING &amp; SPECIALS</p>
                <div className="promo-dots">
                  <span className="promo-dot promo-dot--active"></span>
                  <span className="promo-dot"></span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col footer-brand">
              <a className="footer-brand" href="/" aria-label="Lama Retail home">
                <svg viewBox="0 0 32 32" className="footer-brand-logo" aria-hidden="true">
                  <path
                    d="M2 16h4l3-6l3 12l4-8 3 5h5"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                LAMA
              </a>
              <p className="footer-tagline">Founded in 2020, LAMA is a high-street brand with a focus on combining functional, sustainable design with popular fashion for a diverse audience spanning different ages and lifestyles.</p>
              <div className="footer-social">
                <a className="footer-social-link" href="https://instagram.com/lamaretail" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="none" stroke="#000" strokeWidth="2" />
                    <line x1="12" y1="8" x2="12" y2="16" stroke="#000" strokeWidth="2" />
                    <line x1="8" y1="12" x2="16" y2="12" stroke="#000" strokeWidth="2" />
                  </svg>
                </a>
                <a className="footer-social-link" href="https://facebook.com/lamaretail" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#000" />
                  </svg>
                </a>
                <a className="footer-social-link" href="https://youtube.com/lamaretail" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
                    <rect x="2" y="8" width="20" height="12" rx="4" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M10 9l5 3-5 3z" fill="#000" />
                  </svg>
                </a>
                <a className="footer-social-link" href="https://tiktok.com/lamaretail" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="#000" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="#000" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Customer Care</h4>
              <div className="footer-links">
                <a className="footer-link" href="/pages/about-us">About Us</a>
                <a className="footer-link" href="/pages/careers">Careers</a>
                <a className="footer-link" href="/pages/faqs">FAQs</a>
                <a className="footer-link" href="/pages/returns">Returns / Exchanges</a>
                <a className="footer-link" href="/pages/contact-us">Contact Us</a>
                <a className="footer-link" href="/pages/privacy-policy">Privacy Policy</a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Stores</h4>
              <div className="footer-links">
                <a className="footer-link" href="/pages/locations">Locations</a>
                <a className="footer-link" href="/pages/locations#lahore">Lahore</a>
                <a className="footer-link" href="/pages/locations#islamabad">Islamabad</a>
                <a className="footer-link" href="/pages/locations#karachi">Karachi</a>
                <a className="footer-link" href="/pages/locations#dubai">Dubai</a>
                <a className="footer-link" href="/pages/locations#abu-dhabi">Abu Dhabi</a>
              </div>
            </div>
            <div className="footer-col footer-newsletter">
              <h4 className="footer-heading">Sign up &amp; save</h4>
              <p className="footer-newsletter-text">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
              <form className="footer-newsletter-form" action="/subscribe" method="post">
                <label htmlFor="newsletter-email" className="visually-hidden">Email address</label>
                <input className="footer-newsletter-input" id="newsletter-email" name="email" type="email" placeholder="Enter your email" required />
                <button className="footer-newsletter-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
