// File: components/Layout.tsx
// Purpose: Main layout wrapper for all pages
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { DEFAULT_SEO } from '../utils/seo';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const pageTitle = title 
    ? `${title} | ${DEFAULT_SEO.title}`
    : DEFAULT_SEO.title;
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || DEFAULT_SEO.description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description || DEFAULT_SEO.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description || DEFAULT_SEO.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
