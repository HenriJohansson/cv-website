import HyperLink from '@components/links/HyperLink';
import ExpandingWaveCircle from '@components/effects/ExpandingWaveCircle';
import { useState } from 'react';

const NavCv = () => {

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
