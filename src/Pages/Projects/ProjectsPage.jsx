import { DefaultPageContainer } from '../../components/DefaultPageContainer/DefaultPageContainer'
import Projects from '../../components/Projects/Projects'
import { useTranslation } from 'react-i18next'

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <DefaultPageContainer title={t('projects-title')}>
      <Projects />
    </DefaultPageContainer>
  )
}

