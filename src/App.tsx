import { Header } from '@components/Header/header'
import '@/styles/app.css'
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/muiColors';

import Cv from '@pages/Cv/Cv';
import Popup from "@components/util/Popup/popup";
import NavBarManager from '@components/navigation/NavManager/NavManager';
//import PageInnitialLoad from '@components/PageInnitialLoad/PageInnitialLoad';
import Introduction from '@components/Introduction/Introduction';
import Connect from '@components/Connect/Connect';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="bgPattern"></div>
      <Header></Header>
      <Introduction></Introduction>
      <Connect></Connect>
      <div className='emptySpace' style={{ height: "400px", background: "transparent"}}></div>

      {/* Absolute elements defined on the bottom */}
      <NavBarManager></NavBarManager>
      <Popup id='Cv' content={Cv} />
    </ThemeProvider>
  )
}

export default App
