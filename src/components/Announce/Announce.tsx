import { useTranslation } from 'react-i18next';
import styles from './Announce.module.css';

import { Typography } from '@/components/Typography';

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

        <Typography align="center" variant="h3">
          {t('announce_app-name')}
        </Typography>
        <Typography align="center" variant="subtitle1">
          {t('announce_subtitle')}
        </Typography>

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
