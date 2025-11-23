import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '@/utils/seo';
import { getCreatorImageUrl } from '@/utils/imageUtils';
import type { Creator } from '@/lib/api';

// WebSite Schema for Homepage
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Find and explore verified OnlyFans creators. Browse by category, search by name, and discover trending adult content creators.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: 'The ultimate OnlyFans creator search engine and directory.',
    sameAs: [],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ItemList Schema for Creator Lists
interface ItemListSchemaProps {
  creators: Creator[];
  pageTitle: string;
  pageUrl: string;
}

export function ItemListSchema({ creators, pageTitle, pageUrl }: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageTitle,
    url: `${SITE_URL}${pageUrl}`,
    numberOfItems: creators.length,
    itemListElement: creators.slice(0, 50).map((creator, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: creator.display_name || creator.username,
        url: `${SITE_URL}/creator/${creator.username}`,
        image: `${SITE_URL}${getCreatorImageUrl(creator.username)}`,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Person Schema for Creator Profiles
interface PersonSchemaProps {
  creator: Creator;
}

export function PersonSchema({ creator }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: creator.display_name || creator.username,
    alternateName: creator.username,
    url: `${SITE_URL}/creator/${creator.username}`,
    image: `${SITE_URL}${getCreatorImageUrl(creator.username)}`,
    description: creator.bio || undefined,
    identifier: creator.id,
    mainEntityOfPage: {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/creator/${creator.username}`,
    },
    ...(creator.country && { nationality: creator.country }),
    sameAs: creator.onlyfans_url ? [creator.onlyfans_url] : undefined,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

