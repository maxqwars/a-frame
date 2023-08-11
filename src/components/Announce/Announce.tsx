import { useTranslation } from 'react-i18next';
import styles from './Announce.module.css';

import DiscordIcon from '@/assets/discord-6.svg';
import GitHubIcon from '@/assets/github-icon-1.svg';
import MizuhikiLogo from '@/assets/mizuhiki-logo.svg';

const Announce = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.announce}>
        <div className={styles['announce__logo-wrapper']}>
          <img className={styles['announce__app-logo']} src={MizuhikiLogo} alt="" />
        </div>

        <h1 className={styles['announce__app-name']}>{t('announce_app-name')}</h1>
        <h2 className={styles.announce__subtitle}>{t('announce_subtitle')}</h2>
        <div className={styles.announce__icons}>
          <a className={styles['announce__icon-link']} href="/">
            <img className={styles.announce__icon} src={DiscordIcon} alt="" />
          </a>
          <a className={styles['announce__icon-link']} href="https://github.com/maxqwars/mizuhiki">
            <img className={styles.announce__icon} src={GitHubIcon} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Announce;
