import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    title: 'Create diagrams',
    text: 'Learn to select templates, add shapes, insert text, and connect diagram elements.',
  },
  {
    title: 'Edit and format',
    text: 'Move, resize, format, duplicate, align, and arrange diagram objects.',
  },
  {
    title: 'Save and export',
    text: 'Save editable diagrams and export them in formats such as PNG, SVG, and HTML.',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Learn how to create, edit, save, and export diagrams using draw.io."
    >
      <header className={clsx('hero', styles.hero)}>
        <div className="container">
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <Link
            className="button button--lg"
            style={{background: 'var(--acme-accent)', color: '#1f1740'}}
            to="/docs/drawio-introduction"
          >
            Start reading
          </Link>
        </div>
      </header>
      <main className="container">
        <section className={styles.features}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
