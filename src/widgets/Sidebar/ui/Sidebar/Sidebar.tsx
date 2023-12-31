import { type FC, useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = (): void => { setCollapsed(!collapsed) }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}></button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
