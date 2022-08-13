import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'CODING',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        Try to be a professional Web Developer.<br/>
        Record My Notes in <code>Notes</code> directory.
      </>
    ),
  },
  {
    title: 'LIFE',
    Svg: require('../../static/img/life.svg').default,
    description: (
      <>
        All things are possible if you believe.<br/>
        Be a kind, positive,and active person.
      </>
    ),
  },
  {
    title: 'READING',
    Svg: require('../../static/img/book.svg').default,
    description: (
      <>
        Stay hungry, stay foolish.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
