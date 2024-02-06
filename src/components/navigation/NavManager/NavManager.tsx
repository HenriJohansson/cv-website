import { addNewId } from '@functions/idGenerator';
import { useWindowDimensions } from '@components/util/WindowDimensions'
import { useEffect, useState} from 'react';
//import NavBar from '../Nav/NavBar';
import NavBarBottom from '../Nav/NavBarBottom';
import NavCv from '../Nav/NavCv';

const NavBarManager = () => {
  const [showBottom, setShowBottom] = useState(false)
  const windowDim = useWindowDimensions()
  useEffect(() => {
    /*
      // No need to support bottom menu if there is no content to put there
    if(windowDim.width <= 770){
      setShowBottom(true);
    } else {
      setShowBottom(false)
    }
    */
    setShowBottom(false); //Replace when want to enable bottomMenu

  }, [windowDim.width])

  addNewId("link"); //adds new id called link in id generator
  /* */
  if (showBottom) {
    return <NavBarBottom></NavBarBottom>
  }
  return <NavCv></NavCv>
}

export default NavBarManager
