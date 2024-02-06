import HyperLink from '@components/Links/HyperLink';
import { addNewId } from '@functions/idGenerator';

const NavCv = () => {

  addNewId("link"); //adds new id called link in id generator
  /* */
  return (
      <nav className="mainNav" >
        <HyperLink abbreviationOrIcon="CV" href="#Cv"></HyperLink>
      </nav>
  )
}

export default NavCv;
