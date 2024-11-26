export const DEFAULT_SEO = {
  title: 'Your Name - Developer',
  description: 'High agency generalist operator who owns cross-functional day-to-day execution enabling founders to focus on big picture goals.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    site_name: 'Your Name',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
};

export const getMetaTitle = (pageTitle?: string) => {
  return pageTitle ? `${pageTitle} | ${DEFAULT_SEO.title}` : DEFAULT_SEO.title;
};

export const getPageMetadata = (title?: string, description?: string) => {
  const metaTitle = getMetaTitle(title);
  const metaDescription = description || DEFAULT_SEO.description;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title: metaTitle,
      description: metaDescription,
    },
    twitter: {
      ...DEFAULT_SEO.twitter,
      title: metaTitle,
      description: metaDescription,
    },
  };
};
