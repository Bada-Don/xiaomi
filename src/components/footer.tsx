// Footer.tsx
import React from "react";
import "./Footer.css"; // Optional: custom CSS for styling

const Footer: React.FC = () => {
  return (
    <footer className="site-footer__content">
      <div className="container">
        <section className="site-footer__main">
          <nav className="site-footer__nav" aria-label="Footer">
            <div className="nav__column">
              <div className="column-section">
                <strong className="site-footer__title column-section__title">
                  SUPPORT
                </strong>
                <ul className="column-section__list">
                  <li><a href="https://www.mi.com/global/support/contact" target="_blank" rel="noreferrer">Contact us</a></li>
                  <li><a href="https://www.mi.com/global/support/user-guide/" target="_blank" rel="noreferrer">User Guide</a></li>
                  <li><a href="https://www.mi.com/global/support/warranty" target="_blank" rel="noreferrer">Warranty</a></li>
                  <li><a href="https://www.mi.com/global/support/xiaomi-iws" target="_blank" rel="noreferrer">International Warranty</a></li>
                  <li><a href="https://www.mi.com/global/service/support/declaration.html" target="_blank" rel="noreferrer">EU Declaration of Conformity</a></li>
                  <li><a href="https://www.mi.com/global/support/scooter-safety-notice" target="_blank" rel="noreferrer">Scooter Safety Notice</a></li>
                  <li><a href="https://www.mi.com/global/support/android-enterprise-recommended" target="_blank" rel="noreferrer">Android Enterprise Recommended</a></li>
                  <li><a href="https://www.mi.com/global/support/policy/digital-service-act" target="_blank" rel="noreferrer">Digital Services Act</a></li>
                  <li><a href="https://www.mi.com/global/support/documents/data-act/" target="_blank" rel="noreferrer">Data Act</a></li>
                </ul>
              </div>
            </div>

            <div className="nav__column">
              <div className="column-section">
                <strong className="site-footer__title column-section__title">
                  ABOUT US
                </strong>
                <ul className="column-section__list">
                  <li><a href="https://www.mi.com/global/about/" target="_blank" rel="noreferrer">Xiaomi</a></li>
                  <li><a href="https://www.mi.com/global/about/founder/" target="_blank" rel="noreferrer">Leadership Team</a></li>
                  <li><a href="https://www.mi.com/global/about/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                  <li><a href="https://www.mi.com/global/about/agreement/" target="_blank" rel="noreferrer">User Agreement</a></li>
                  <li><a href="https://www.mi.com/global/service/integrity/#process" target="_blank" rel="noreferrer">Integrity & Compliance</a></li>
                  <li><a href="https://company.mi.com/en-us/ir/indexContent/" target="_blank" rel="noreferrer">Investor Relations</a></li>
                  <li><a href="https://www.mi.com/global/about/sustainability/#/" target="_blank" rel="noreferrer">ESG and Sustainability</a></li>
                  <li><a href="https://trust.mi.com/en" target="_blank" rel="noreferrer">Trust Center</a></li>
                  <li><a href="https://www.mi.com/global/accessibility" target="_blank" rel="noreferrer">Xiaomi Accessibility</a></li>
                  <li><a href="https://www.mi.com/global/hyperos" target="_blank" rel="noreferrer">Xiaomi HyperOS</a></li>
                  <li><a href="https://www.mi.com/global/support/terms/accessibility" target="_blank" rel="noreferrer">Accessibility Conformance Report</a></li>
                </ul>
              </div>
            </div>

            <div className="nav__column">
              <div className="column-section">
                <strong className="site-footer__title column-section__title">
                  XIAOMI PROJECTS
                </strong>
                <ul className="column-section__list">
                  <li><a href="https://event.c.mi.com/global/xiaomicreators/" target="_blank" rel="noreferrer">Xiaomi Creators</a></li>
                  <li><a href="https://event.mi.com/global/xiaomistudios" target="_blank" rel="noreferrer">Xiaomi Studios</a></li>
                  <li><a href="https://event.c.mi.com/global/xiaomiImagery/" target="_blank" rel="noreferrer">Xiaomi Imagery</a></li>
                  <li><a href="https://event.c.mi.com/global/xiaomiImagery/master-class/" target="_blank" rel="noreferrer">Xiaomi Master Class</a></li>
                  <li><a href="https://s.mi.com/aO2uOGo6" target="_blank" rel="noreferrer">Xiaomi Renovation</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="site-footer__aside">
            <div className="site-footer__follow">
              <strong className="site-footer__title">Follow Xiaomi</strong>
              <ul className="site-footer__follow-list">
                <li><a href="https://www.facebook.com/xiaomiglobal" target="_blank" rel="noreferrer"><i className="micon micon-facebook site-footer__follow-icon"></i></a></li>
                <li><a href="https://www.youtube.com/user/XiaomiChina" target="_blank" rel="noreferrer"><i className="micon micon-youtube site-footer__follow-icon"></i></a></li>
                <li><a href="https://twitter.com/Xiaomi" target="_blank" rel="noreferrer"><i className="micon micon-twitter site-footer__follow-icon"></i></a></li>
                <li><a href="https://www.instagram.com/xiaomi.global" target="_blank" rel="noreferrer"><i className="micon micon-instagram site-footer__follow-icon"></i></a></li>
                <li><a href="https://c.mi.com/global" target="_blank" rel="noreferrer"><i className="micon micon-community site-footer__follow-icon"></i></a></li>
              </ul>
            </div>

            <div className="site-footer__connect">
              <strong className="site-footer__title">Enter your email address to subscribe to our newsletters</strong>
              <div className="site-footer__form">
                <div className="site-footer__input">
                  <input type="email" name="email" id="email" placeholder="Enter email address" className="site-footer__email" />
                  <button className="mi-btn-v4 mi-btn-v4--icon mi-btn-v4--dark site-footer__submit">
                    <i className="micon micon-forward submit__icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-footer__footer">
          <div className="site-footer__legal">
            <span>Copyright © 2010 - 2025 Xiaomi. All Rights Reserved</span>
          </div>
          <div className="site-footer__settings">
            <div className="site-footer__sitemap">
              <a href="//www.mi.com/global/sitemap" target="_blank" rel="noreferrer">Cookie Policy</a>
            </div>
            <div className="site-footer__locale">
              <a href="//www.mi.com/global/select-location" className="locale__link">Sitemap</a>
            </div>
            <div className="site-footer__locale">
              <a href="//www.mi.com/global/select-location" className="locale__link">Global / Global</a>
              <a href="//www.mi.com/global/select-location" className="locale__link">
                <i className="micon micon-language-earth locale__icon"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
