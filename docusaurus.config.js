const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'kkorner',
  tagline: 'Long thoughts',
  url: 'http://ktarinads.github.io',
  baseUrl: '/kkorner',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ktarinads', // Usually your GitHub org/user name.
  projectName: 'kkorner', // Usually your repo name.
  trailingSlash: false,
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      indexBlog: false,
    }]
  ],
  themeConfig: {
    navbar: {
      title: 'kkorner',
      logo: {
        alt: 'kkorner',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'tags',
          position: 'right',
          label: 'Tags',
        },
        {
          href: 'https://twitter.com/thunderk8',
          position: 'right',
          label: '🐦',
        },
        {
          href: 'https://github.com/ktarinads',
          position: 'right',
          label: '🐙',
        },
        {
          href: 'https://github.com/ktarinads/kkorner',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    footer: {
      links: [],
      copyright: 'Copyright © Catarina Santos',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/',
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/ktarinads/kkorner/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          editCurrentVersion: true,
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
