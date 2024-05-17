import { memo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from 'shared/ui/container';
import { ReactComponent as IconChat } from 'shared/assets/icon/hipchat.svg';
import s from './Footer.module.scss';
import { Modal } from '../Modal/Modal';
import Form from '../Form';

const Footer = () => {
  const [isOpenModal, setIasOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIasOpenModal(!isOpenModal);
  };
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });

  return (
    <>
      {isDesktop && (
        <div className={s.container}>
          <Container>
            <div className={s.content}>
              <p className={s.text}>
                My resume application{' '}
                <IconChat className={s.icon} onClick={handleOpenModal} />
              </p>
              <ul className={s.items}>
                <li className={s.item}>
                  <a
                    href="https://github.com/Myrhoiazov"
                    target="blank"
                    className={s.link}
                  >
                    Github
                  </a>
                </li>
                <li className={s.item}>
                  <a
                    href="https://github.com/Myrhoiazov"
                    target="blank"
                    className={s.link}
                  >
                    Telegram
                  </a>
                </li>
                <li className={s.item}>
                  <a
                    href="https://github.com/Myrhoiazov"
                    target="blank"
                    className={s.link}
                  >
                    Facebook
                  </a>
                </li>
                <li className={s.item}>
                  <a
                    href="mailto:denis.mirgoyazov@gmail.com"
                    className={s.link}
                  >
                    denis.mirgoyazov@gmail.com
                  </a>
                </li>
                <li className={s.item}>
                  <a href="tel:+80985245200" className={s.link}>
                    +38 (098) 524-52-00
                  </a>
                </li>
              </ul>
            </div>
          </Container>
          <Modal
            className={s.Modal}
            isOpen={isOpenModal}
            onClose={handleOpenModal}
          >
            <Form title="In touch" onClose={handleOpenModal} />
          </Modal>
        </div>
      )}
    </>
  );
};

export default memo(Footer);
