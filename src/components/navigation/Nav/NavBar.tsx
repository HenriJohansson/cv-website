import HyperLink from '@components/links/HyperLink';
import ActionLink from '@components/links/ActionLink'
import { Menu } from '@components/Icons/Menu';
import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from '@components/util/WindowDimensions'

const NavBar = () => {
  const [show, setShow] = useState(false)

  const maxSize: number = 100 //56 or 57 is exact
  const links: number = 2;
  const window = useWindowDimensions();
  const [navHeight, setNavHeight] = useState(maxSize);
  const [navWidth, setNavWidth] = useState(maxSize);

  const hasPageBeenRendered = useRef(false)

  const calculateOpeningMenu = () => {
    if(!show) {
      setNavHeight(maxSize);
      setNavWidth(maxSize);
      return;
    }
    if(window.width >= 770){
      setNavHeight(maxSize*links)
      setNavWidth(maxSize)
    } else {
      setNavHeight(maxSize)
      setNavWidth(maxSize*links)
    }
  }
  useEffect(() => {
    if(hasPageBeenRendered.current){
      calculateOpeningMenu()
    }
    hasPageBeenRendered.current = true;
    // eslint-disable-next-line
  }, [window.width, show]) //React to window change and calculate new size

  return (
      <nav className="mainNav" style={{maxHeight: navHeight + "px", maxWidth: navWidth + "px"}} >
        <ActionLink onClick={() => {setShow(!show);}} abbreviationOrIcon={Menu}></ActionLink>
        {show ?
        <HyperLink abbreviationOrIcon="CV" href="#Cv"></HyperLink>
        : null}
      </nav>
  )
}

export default NavBar;
