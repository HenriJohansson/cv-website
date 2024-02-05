import HyperLink from '@components/Links/HyperLink';
import ActionLink from '@components/Links/ActionLink'
import { Menu } from '@components/Icons/Menu';
import { addNewId } from '@functions/idGenerator';
import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from '@components/util/Window'

const NavBar = () => {

  const maxSize: number = 60 //56 or 57 is exact
  const links: number = 2;
  const window = useWindowDimensions();
  const [navHeight, setNavHeight] = useState(maxSize);
  const [navWidth, setNavWidth] = useState(maxSize);
  const [show, setShow] = useState(false)
  const hasPageBeenRendered = useRef(false)

  const calculateOpeningMenu = () => {
    if(!show) {
      setNavHeight(maxSize);
      setNavWidth(maxSize);
      return;
    }
    if(window.width >= 700){
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


  addNewId("link") //adds new id called link in id generator
  /* */
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
