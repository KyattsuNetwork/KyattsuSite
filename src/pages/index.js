import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './index.module.css';
import MDXContent from '@theme/MDXContent';
import IndexContent from './content.mdx'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg button--split"
            to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.kyattsu.network#/explorer">
            Explore
          </Link>
          <Link
            className="button button--primary button--lg button--split"
            to="/docs/intro">
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="KyattsuNetwork - Cats will find the way out">
      <HomepageHeader />
      <main>
        <BrowserOnly>
          {() => {
            const HomepageFeatures = require('@site/src/components/HomepageFeatures').default
            return <HomepageFeatures />
          }}
        </BrowserOnly>
        <br></br>
        <div className="container text-centered">
          <MDXContent>
            <IndexContent />
          </MDXContent>
        </div>
      </main>
    </Layout>
  );
}
