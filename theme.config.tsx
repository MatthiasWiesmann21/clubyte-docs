import React from "react";
import { DocsThemeConfig, ThemeSwitch } from "nextra-theme-docs";
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
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 310,
};

export default config;
