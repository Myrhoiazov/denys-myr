import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import Container from 'shared/ui/container';
import ToggleLang from 'shared/ui/toggle-lang';
import s from './Home.module.scss';

const Home = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <Container>
      <section className={s.wrapper}>
        <div className={s.info_hero}>
          <div className={s.hero_title}>
            <p className={s.name_text}>
              {t('hero.hello')}
              <span className={s.name_accent}>{t('hero.hello-accent')}</span>
            </p>
            <h1 className={s.name}>{t('hero.name')}</h1>
          </div>

          <p className={s.text}>
            {t('hero.text')}
            <span className={s.text_accent}>{t('hero.country')}</span>
          </p>

          {isDesktop && (
            <div className={s.btn_group}>
              <ToggleLang />
            </div>
          )}
        </div>
        <div className={s.hero}></div>
      </section>
    </Container>
  );
};

export default Home;
