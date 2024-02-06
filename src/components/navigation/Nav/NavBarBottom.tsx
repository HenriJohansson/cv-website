import HyperLink from '@components/Links/HyperLink';
import { addNewId } from '@functions/idGenerator';

const NavBarBottom = () => {


  addNewId("link"); //adds new id called link in id generator
  /* */
  return (
    <nav className="mainNavBottom">
      <HyperLink abbreviationOrIcon="CV" href="#Cv"></HyperLink>
      <HyperLink abbreviationOrIcon="CV" href="#Cv"></HyperLink>
      <HyperLink abbreviationOrIcon="CV" href="#Cv"></HyperLink>
      <HyperLink abbreviationOrIcon="CV" href="#Cv"></HyperLink>
    </nav>
  )
}

export default NavBarBottom
