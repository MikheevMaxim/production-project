import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const onToggle = async (): Promise<void> => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      onClick={onToggle}
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  )
}
