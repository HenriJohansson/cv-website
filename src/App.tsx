import { Header } from '@components/Header/header'
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/muiColors';
import "regenerator-runtime/runtime"; //used by ImageKit.io

import Cv from '@pages/Cv/Cv';
import Popup from "@components/util/Popup/popup";
import NavBarManager from '@components/navigation/NavManager/NavManager';
//import PageInnitialLoad from '@components/PageInnitialLoad/PageInnitialLoad';
import Introduction from '@components/Introduction/Introduction';
import Connect from '@components/Connect/Connect';
import { Projects } from '@pages/Projects/Projects';
import ErrorBoundary from '@components/errorhandling/ErrorBoundary';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="bgPattern"></div>
      <Header></Header>
      <Introduction></Introduction>
      <Connect></Connect>
      <ErrorBoundary fallback={<></>}>
        <Projects></Projects>
      </ErrorBoundary>
      <div className='emptySpace' style={{ height: "400px", background: "transparent"}}></div>

      {/* Absolute elements defined on the bottom */}
      <NavBarManager></NavBarManager>
      <Popup id='Cv' content={Cv} />
    </ThemeProvider>
  )
}

export default App
