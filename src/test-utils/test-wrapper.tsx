import App from 'App';
import ScrollTop from 'components/ScrollTop';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import ThemeCustomization from 'themes';

const TestWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default TestWrapper;
