import { ThemeProvider } from 'styled-components';
import { theme } from './settings/styles/theme';
import Home from './components/home';
import { GlobalStyle } from './settings/styles/global';
import EnvironmentProvider from './context/environment/provider';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <EnvironmentProvider>
        <GlobalStyle />
        <Home />
      </EnvironmentProvider>
    </ThemeProvider>
  );
}
