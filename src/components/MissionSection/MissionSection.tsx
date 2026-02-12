import React from 'react';
import styles from './MissionSection.module.scss';

const MissionSection: React.FC = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.subTitle}>Our Mission</span>
          <h2 className={styles.mainTitle}>Our team dedicated to help find smart home product</h2>
          
          <div className={styles.statsGrid}>
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '483', label: 'Happy Client' },
              { value: '150+', label: 'Project Finished' },
            ].map((stat, index) => (
              <div key={index} className={styles.statBox}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightContent}>
          {[
            {
              iconName: 'call-received.svg', 
              title: '24/7 Supports',
              description: '24/7 support means a support service that is provided 24 hours a day and 7 days a week.',
            },
            {
              iconName: 'messages.svg', 
              title: 'Free Consultation',
              description: 'A free consultation is a one-on-one interaction or conversation given freely to share one’s thoughts and...',
            },
            {
              iconName: 'award.svg',
              title: 'Overall Guarantee',
              description: 'The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.',
            },
          ].map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconContainer}>
                  <img 
                    src={`/icons/MissionSection/${feature.iconName}`} 
                    alt={feature.title} 
                    width="28" 
                    height="28" 
                  />
                </div>
              </div>
              <div className={styles.featureText}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;