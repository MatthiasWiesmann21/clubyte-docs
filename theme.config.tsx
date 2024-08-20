import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <Image src="/clubyte - Logo Original - transparent white v2.png" alt="Clubyte Logo" width={150} height={150}></Image>
  ),
  logoLink: "https://clubyte.live",
  footer: {
    text: "Clubyte Docs",
  },
  darkMode: false,
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'de-DE', text: 'Deutsch' },
  ]
};

export default config;
