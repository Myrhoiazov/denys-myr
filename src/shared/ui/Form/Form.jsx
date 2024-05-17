import React, { memo, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import Input from 'shared/ui/Input';
import { tgSendMessage } from 'shared/services/telegram';
import Textarea from '../Textarea';
import s from './Form.module.scss';

const selectForms = ['Фото', 'Відео', 'Фото + Відео'];

const Form = ({ className, title, onClose = '' }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const setUserName = useCallback(value => {
    setName(value);
  }, []);

  const setUserTel = useCallback(value => {
    setTel(value);
  }, []);

  const setUserEmail = useCallback(value => {
    setEmail(value);
  }, []);

  const setDescription = useCallback(value => {
    setMessage(value);
  }, []);

  const createTask = async e => {
    e.preventDefault();

    if (!name || !tel || !email) {
      toast.error(`Заповніть всі данні`);
      return;
    }

    const data = {
      name: name,
      email: email,
      phone: tel,
      message: message,
    };

    try {
      const res = await tgSendMessage(data);

      if (res.ok) {
        setName('');
        setTel('');
        setEmail('');
        toast.success(`Заявка була відправленна`);
        if (onClose) {
          onClose();
        }
      }
    } catch (err) {
      console.log('err: ', err);
      toast.success(`Щось пішло не так, спробуйте ще раз`);
    }
  };

  return (
    <div className={classNames(s.Form, {}, [className])}>
      <h2>{title} </h2>
      <form className={s.form} onSubmit={createTask}>
        <Input
          placeholder="Name"
          value={name}
          name="name"
          type="text"
          onChange={setUserName}
        />
        <Input
          placeholder="Tel"
          value={tel}
          name="tel"
          type="text"
          onChange={setUserTel}
        />
        <Input
          placeholder="Email"
          value={email}
          name="email"
          type="email"
          onChange={setUserEmail}
        />
        <Textarea
          placeholder="Message"
          value={message}
          type="text"
          onChange={setDescription}
        />

        <div className={s.btnWrapper}>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default memo(Form);
