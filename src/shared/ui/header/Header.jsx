import { useState, memo, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useTranslation } from 'react-i18next';
import Sidebar from 'shared/ui/theme';
import s from '../header/header.module.scss';
import headerMenu from './headermenu';
import Container from 'shared/ui/container';
import Clock from 'shared/ui/clock';
import Footer from 'shared/ui/footer';
import ToggleLang from 'shared/ui/toggle-lang';
import Loader from 'shared/ui/loader';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.item} ${s.active}` : s.item;
};

const getActiveMobileClass = ({ isActive }) => {
  return isActive ? `${s.item_mob} ${s.active_mob}` : s.item_mob;
};

const Header = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isShowBurgerMenu = useMediaQuery({ query: '(max-width: 1279px)' });
  const [isShowMenu, setIsShowMenu] = useState(false);

  const onHandleShow = () => {
    setIsShowMenu(!isShowMenu);
  };

  const onClickBackground = e => {
    if (e.target === e.currentTarget) {
      setIsShowMenu(!isShowMenu);
    }
  };

  return (
    <>
      <Container>
        <div className={s.flexWrapper}>
          <header className={s.header}>
            <div className={s.wrapper}>
              <nav className={s.nav}>
                <Sidebar />
                <Clock />
                {isShowBurgerMenu && (
                  <button
                    type="button"
                    className={s.btn_open}
                    onClick={onHandleShow}
                  >
                    <MenuIcon color="inherit" />
                  </button>
                )}
                {isDesktop &&
                  headerMenu.map(({ name, to }) => {
                    return (
                      <div key={name}>
                        <NavLink to={to} end className={getActiveClassName}>
                          {t(name)}
                        </NavLink>
                      </div>
                    );
                  })}
              </nav>
              {isShowBurgerMenu && (
                <nav
                  onClick={onClickBackground}
                  className={
                    isShowMenu ? `${s.nav_mobile} ${s.showMob}` : s.nav_mobile
                  }
                >
                  <div
                    className={
                      isShowMenu
                        ? `${s.nav_mobile_wrapper} ${s.show}`
                        : s.nav_mobile_wrapper
                    }
                  >
                    {
                      <button
                        type="button"
                        className={s.btn_close}
                        onClick={onHandleShow}
                      >
                        <HighlightOffIcon color="inherit" fontSize="large" />
                      </button>
                    }
                    <div style={{ marginBottom: 40, paddingTop: 20 }}>
                      <ToggleLang />
                    </div>

                    {headerMenu.map(({ name, to }) => {
                      return (
                        <div key={name} className={s.link_items}>
                          <NavLink to={to} end className={getActiveMobileClass}>
                            {t(name)}
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </nav>
              )}
            </div>
          </header>
          <main className={s.main}>
            <Suspense fallback={<Loader />}>{<Outlet />}</Suspense>
          </main>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default memo(Header);
