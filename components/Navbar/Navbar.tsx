"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useLanguage, Language } from '../../context/LanguageContext';

export default function Navbar({ hideLinks = false, darkText = false }: { hideLinks?: boolean; darkText?: boolean } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { 
      href: '/o_nas', 
      label: t.nav.about,
      subLinks: [
        { href: '/o_nas', label: t.nav.about_sub },
        { href: '/o_nas/clanstvo', label: t.nav.membership },
        { href: '/o_nas/donacije', label: t.nav.donations },
        { href: '/o_nas/cenik', label: t.nav.pricing },
      ]
    },
    { href: '/muce', label: t.nav.cats },
    { href: '/kontakt', label: t.nav.contact },
    { href: '/rezervacija', label: t.nav.reservation },
  ];

  const renderLangSwitcher = (extraClass = '') => (
    <div className={`${styles.langSwitcher} ${darkText ? styles.langSwitcherDark : ''} ${extraClass}`}>
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'slo' ? styles.langActive : ''}`}
        onClick={() => setLanguage('slo')}
      >
        SLO
      </button>
      <span className={styles.langDivider}>|</span>
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'eng' ? styles.langActive : ''}`}
        onClick={() => setLanguage('eng')}
      >
        ENG
      </button>
      <span className={styles.langDivider}>|</span>
      <button
        type="button"
        className={`${styles.langBtn} ${language === 'ger' ? styles.langActive : ''}`}
        onClick={() => setLanguage('ger')}
      >
        GER
      </button>
    </div>
  );

  return (
    <>
      <nav className={`${styles.navbar} ${darkText ? styles.navbarDark : ''}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={60} height={60} className={styles.logoImage} />
        </Link>

        {/* Desktop Links & Lang Switcher */}
        {!hideLinks && (
          <div className={styles.navRightWrapper}>
            <div className={styles.navLinks}>
              {links.map(({ href, label, subLinks }) => (
                <div key={href} className={styles.navItemContainer}>
                  <Link href={href} className={`${styles.linkWrapper} ${darkText ? styles.linkWrapperDark : ''}`}>
                    <span className={styles.linkText}>{label}</span>
                    <span className={styles.tacka}>
                      <Image src="/tacka.png" alt="" width={12} height={12} />
                    </span>
                  </Link>
                  {subLinks && (
                    <div className={styles.dropdown}>
                      {subLinks.map((subLink) => (
                        <Link key={subLink.href} href={subLink.href} className={styles.dropdownLink}>
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Language shortcut: SLO | ENG | GER */}
            {renderLangSwitcher()}
          </div>
        )}

        {/* Hamburger Menu (Mobile) */}
        {!hideLinks && (
          <div
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {!hideLinks && (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavLinks}>
            {links.map(({ href, label, subLinks }) => (
              <React.Fragment key={href}>
                <Link href={href} className={styles.mobileLink} onClick={toggleMenu}>
                  {label}
                </Link>
                {subLinks && subLinks.map((subLink) => (
                  <Link key={subLink.href} href={subLink.href} className={styles.mobileSubLink} onClick={toggleMenu}>
                    {subLink.label}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            {renderLangSwitcher(styles.mobileLangSwitcher)}
          </div>
        </div>
      )}
    </>
  );
}
