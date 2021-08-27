import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Blog />
      </main>

      <Footer />
    </>
  );
}
