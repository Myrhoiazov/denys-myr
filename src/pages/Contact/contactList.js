import { ReactComponent as GitHubIcon } from 'shared/assets/icon/github-bcg.svg';
import { ReactComponent as LinkedinIcon } from 'shared/assets/icon/linkedin-bcg.svg';
import { ReactComponent as TelegramIcon } from 'shared/assets/icon/telegram-bcg.svg';
import { ReactComponent as FacebookIcon } from 'shared/assets/icon/facebook-bcg.svg';
import { ReactComponent as InstagramIcon } from 'shared/assets/icon/instagram-bcg.svg';

export const contactList = [
  {
    name: 'GitHub',
    link: 'https://github.com/Myrhoiazov',
    icon: <GitHubIcon />,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/denis-myrhoiazov/',
    icon: <LinkedinIcon />,
  },
  {
    name: 'Telegram',
    link: 'https://t.me/denis_mirg',
    icon: <TelegramIcon />,
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/biboimurzik/',
    icon: <FacebookIcon />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/denis_mirgoyazov',
    icon: <InstagramIcon />,
  },
];

export default contactList;
