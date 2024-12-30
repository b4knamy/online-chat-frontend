import { ThemeProvider } from 'styled-components';
import { theme } from './settings/styles/theme';
import Home from './components/home';
import { GlobalStyle } from './settings/styles/global';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
