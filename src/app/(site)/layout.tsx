"use client";
import React, { useState } from "react"; // Import useState
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../../styles/animate.css";
import "../../styles/prism-vsc-dark-plus.css";
import "../../styles/star.css";
import "../../styles/tailwind.css";
import AuthProvider from "../context/AuthContext";
import siteConfig from '../../../siteConfig';
import { GA_TRACKING_ID, pageview } from '../../../analytics';
import ThemeWrapper from "@/components/theme-provider-swicher/themeProvider";


export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
      <head>
        <link 
          rel='icon' 
          href={siteConfig.faviconPath}
        />
        
                  <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: `
                          {
                            "@context": "http://schema.org",
                            "@type": "WebSite",
                            "name": "${siteConfig.siteName}",
                            "url": "${siteConfig.siteURL}"
                          }`,
                     }}
                  />

        <script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
    `,
  }}
/>

      </head>
      <body className="bg-white dark:bg-dark">
        <ThemeWrapper>
        <AuthProvider>
          <Header />
          {children}
          <Footer /> 
          {/* 
          <ScrollToTop /> */}
        </AuthProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}

