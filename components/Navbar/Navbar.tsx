"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar({ hideLinks = false }: { hideLinks?: boolean } = {}) {
  const [isOpen, setIsOpen] = useState(false);

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
      label: 'O nas',
      subLinks: [
        { href: '/o_nas', label: 'O nas' },
        { href: '/o_nas/clanstvo', label: 'Članstvo' },
        { href: '/o_nas/donacije', label: 'Donacije' },
      ]
    },
    { href: '/muce', label: 'Naše muce' },
    { href: '/#kontakt', label: 'Kontakt' },
    { href: '/rezervacija', label: 'Rezervacija' },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo} style={{ textDecoration: 'none', color: 'inherit' }}>
          LOGO
        </Link>

        {/* Desktop Links */}
        {!hideLinks && (
          <div className={styles.navLinks}>
            {links.map(({ href, label, subLinks }) => (
              <div key={href} className={styles.navItemContainer}>
                <Link href={href} className={styles.linkWrapper}>
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
          </div>
        </div>
      )}
    </>
  );
}
