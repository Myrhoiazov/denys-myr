import { useState } from 'react';
import Container from 'shared/ui/container';
import { contactList } from './contactList';
import s from './Contact.module.scss';
import Button from 'shared/ui/Button';
import Form from 'shared/ui/Form';
import { Modal } from 'shared/ui/Modal/Modal';

const Contact = () => {
  const [isOpenModal, setIasOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIasOpenModal(!isOpenModal);
  };

  return (
    <>
      <Container>
        <div className={s.inner_wrapper}>
          <div className={s.data}>
            <h1 className={s.title}>Contacts</h1>
            <p className={s.text}>
              Want to know more or just chat? <br /> You are welcome!
            </p>
            <Button type="button" onClick={handleOpenModal}>
              Send message
            </Button>
            <ul className={s.socialList}>
              {contactList.map(({ name, icon, link }) => (
                <li key={name} className={s.socialIcon}>
                  <a href={link} target="blank">
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Modal
          className={s.Modal}
          isOpen={isOpenModal}
          onClose={handleOpenModal}
        >
          <Form title="In touch" onClose={handleOpenModal} />
        </Modal>
      </Container>
    </>
  );
};

export default Contact;
