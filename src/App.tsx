import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Template from './components/template'
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Template />
    </BrowserRouter>
  </ThemeProvider>
)


export default App;
