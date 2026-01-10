import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Fluxainē Studios",
  tagline: "Technology, Culture, and Applied Research",
  favicon: "img/favicon.ico",

  deploymentBranch: "gh-pages",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://fluxaine-studios.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fluxaine-studios", // Usually your GitHub org/user name.
  projectName: "fluxaine-studios.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // manually added plugins
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "landing",
        path: "docs/landing",
        routeBasePath: "docs",
        sidebarPath: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "somatic-theory",
        path: "docs/somatic-theory",
        routeBasePath: "somatic-theory",
        sidebarPath: require.resolve("./sidebars/somatic-theory.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "anthropology",
        path: "docs/anthropology",
        routeBasePath: "anthropology",
        sidebarPath: require.resolve("./sidebars/anthropology.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "android",
        path: "docs/android",
        routeBasePath: "android",
        sidebarPath: require.resolve("./sidebars/android.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "rust-trading",
        path: "docs/rust-trading",
        routeBasePath: "rust-trading",
        sidebarPath: require.resolve("./sidebars/rust-trading.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "recipes",
        path: "docs/recipes",
        routeBasePath: "recipes",
        sidebarPath: require.resolve("./sidebars/recipes.ts"),
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Fluxainē Studios",
      logo: {
        alt: "Fluxainē Studios' Logo",
        src: "img/logo.png",
      },
      items: [
        // { to: "/apps", label: "Apps", position: "left" },
        // {
        //   to: "/docs/design-systems/intro",
        //   label: "Design Systems",
        //   position: "left",
        // },
        {
          to: "/docs/firmament-science/intro",
          label: "Firmament Science",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        // { to: "/support", label: "Support", position: "right" },
      ],
      // items: [
      //   {
      //     type: "docSidebar",
      //     sidebarId: "tutorialSidebar",
      //     position: "left",
      //     label: "Tutorial",
      //   },
      //   { to: "/blog", label: "Blog", position: "left" },
      //   {
      //     href: "https://github.com/facebook/docusaurus",
      //     label: "GitHub",
      //     position: "right",
      //   },
      // ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Publishing",
          items: [
            { label: "Substack", href: "https://substack.com" },
            { label: "Gumroad", href: "https://gumroad.com" },
          ],
        },
        {
          title: "Support",
          items: [
            { label: "Ko-fi", href: "#" },
            { label: "Buy Me a Coffee", href: "#" },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Tutorial",
      //         to: "/docs/intro",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "X",
      //         href: "https://x.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "/blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Raghavendra Saralaya. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
