import HyperLink from '@components/Links/HyperLink';
import ExpandingWaveCircle from '@components/effects/ExpandingWaveCircle';
import { addNewId } from '@functions/idGenerator';
import { useState } from 'react';

const NavCv = () => {

  addNewId("link"); //adds new id called link in id generator

  const [mouseEntered, setMouseEntered] = useState(false)

  return (
      <nav className="mainNav">
        <HyperLink id="justCv" abbreviationOrIcon="CV" href="#Cv" onMouseEnter={() => {setMouseEntered(true)}}>
          <ExpandingWaveCircle disabled={mouseEntered} ></ExpandingWaveCircle>
        </HyperLink>
      </nav>
  )
}

export default NavCv;
