import s from './AboutMe.module.scss';
import Container from 'shared/ui/container';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <h1 className={s.title}>{t('about.title')}</h1>
          <div className={s.about}>
            <p className={s.text}>{t('about.text1')}</p>
            <p className={s.text}>{t('about.text2')}</p>
            <p className={s.text}>{t('about.text3')}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
