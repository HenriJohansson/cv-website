import { Header } from '@components/Header/header'
import '@/styles/app.css'
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/muiColors';

import Cv from '@pages/Cv/Cv';
import Popup from "@components/util/Popup/popup";
import NavBarManager from '@components/navigation/NavManager/NavManager';
import PageInnitialLoad from '@components/PageInnitialLoad/PageInnitialLoad';
import Introduction from '@components/Introduction/Introduction';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageInnitialLoad></PageInnitialLoad>
      <Header></Header>
      <Introduction></Introduction>

      {/* Absolute elements defined on the bottom */}
      <NavBarManager></NavBarManager>
      <Popup id='Cv' enableClose={false} content={Cv} />
    </ThemeProvider>
  )
}

export default App
