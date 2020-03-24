module.exports = {
  title: "30 Hari",
  tagline: "30 Hari Belajar React",
  url: "https://30hari.netlify.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "topidesta", // Usually your GitHub org/user name.
  projectName: "30harireact", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "30Hari React",
      logo: {
        alt: "30Hari React Logo",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/intro",
          activeBasePath: "intro",
          label: "Intro",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/topidesta/30hari",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1"
            },
            {
              label: "Style with MDX",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/topidesta/30hari"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/emang_dasar"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 30 Hari Belajar React! and Translate by Desta with 😍`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/topidesta/30hari/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-live-codeblock"]
};
