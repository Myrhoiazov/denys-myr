import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppRouter from './providers/router';

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
};
