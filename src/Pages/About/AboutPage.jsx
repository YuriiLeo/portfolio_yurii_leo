import React from 'react'
import { Info } from './AboutPage.styled'
import IconList from '../../components/SkillsIconList/IconList'
import { useTranslation } from 'react-i18next';
import { DefaultPageContainer } from '../../components/DefaultPageContainer/DefaultPageContainer';

export default function About() {
  const { t } = useTranslation();
  return (
    <DefaultPageContainer title={t('about-title')}>
      <Info>
        <p>{t('about-bio-paragraph-one')}</p>
        <p>{t('about-bio-paragraph-two')}</p>
        <p>{t('about-bio-paragraph-three')}</p>
        <p>{t('about-bio-paragraph-four')}</p>
        <p>{t('about-bio-paragraph-five')}</p>
        <div>
          <p>{t('about-skills')}</p>
          <IconList />
        </div>
      </Info>
    </DefaultPageContainer>
  )
}
