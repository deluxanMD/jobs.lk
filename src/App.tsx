// project import
import Routes from 'routes';
import ThemeCustomization from 'demo/themes';
import ScrollTop from 'demo/components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
