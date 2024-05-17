import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from 'shared/ui/container';
import s from './Skills.module.scss';
import { skillList, designList } from './skillList';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <div className={s.inner_wrapper}>
          <h1 className={s.title}>{t('skills.title')}</h1>

          <div className={s.items_wrapper}>
            <h3 className={s.title_skills}>{t('skills.text1')}</h3>
            <ul className={s.items}>
              {skillList.map(({ skills, icon }) => (
                <li key={skills} className={s.item}>
                  {skills}
                  <span style={{ width: 20 }}>{icon}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.items_wrapper}>
            <h3 className={s.title_skills}>{t('skills.text2')}</h3>
            <ul className={s.items}>
              {designList.map(({ name }) => (
                <li key={name} className={s.item}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(Skills);
