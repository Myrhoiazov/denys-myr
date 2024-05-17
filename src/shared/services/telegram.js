import axios from 'axios';

const { REACT_APP_TELEGRAM_TOKEN, REACT_APP_TELEGRAM_CHAT_ID } = process.env;

const TG_URL =
  'https://api.telegram.org/bot' + REACT_APP_TELEGRAM_TOKEN + '/sendMessage';

export const tgSendMessage = async formData => {
  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель:</b> ${formData.name} \n`;
  message += `<b>Тел:</b> ${formData.tel} \n`;
  message += `<b>Почта:</b> ${formData.email} \n`;
  message += `<b>Сообщение:</b> ${formData.message}`;

  try {
    const { data } = await axios.post(TG_URL, {
      chat_id: REACT_APP_TELEGRAM_CHAT_ID,
      parse_mode: 'HTML',
      text: message,
    });
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};
