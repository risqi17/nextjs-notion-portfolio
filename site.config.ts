import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd75ede9788ee440faf681e6fc2160757',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '57d44b19-c937-45c5-bef3-f07a62600419',

  // basic site info (required)
  name: 'Risqi Ahmad - IT Enthusiast',
  domain: 'risqiahmad.me',
  author: 'Risqi Ahmad S',

  // open graph metadata (optional)
  description: 'Risqi Ahmad Profile Site',

  // social usernames (optional)
  twitter: 'rsq_ahmd',
  github: 'risqi17',
  linkedin: 'risqi-ahmad-sultoni-6a9a80141/',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'e0d9163aa2ae4efeb7724e8cd15242cf'
    },
    {
      title: 'Contact',
      pageId: 'e0da56653eb64de2b2da9b238af5f82d'
    }
  ]
})
