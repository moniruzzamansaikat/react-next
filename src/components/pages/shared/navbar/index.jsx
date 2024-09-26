'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Our Mission', href: '/about#mission' },
        { name: 'Our Team', href: '/about#team' },
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Donate', href: '#donate' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/logo.svg" width={100} height={40} alt="Logo" />
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className={`${styles.navItem} ${pathname === link.href ? styles.active : ''}`}>
              <Link href={link.href}>{link.name}</Link>
              {link.dropdown && (
                <ul className={styles.dropdown}>
                  {link.dropdown.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subLink.href}>{subLink.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="/admin">
            <button className={styles.loginButton}>Login</button>
          </Link>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
