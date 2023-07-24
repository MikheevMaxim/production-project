import { AppLink } from "shared/ui/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from './Navbar.module.scss';


interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          to={'/'}
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.RED}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  )
};
