import HyperLink from "@components/Links/HyperLink";
import { GitHub } from "@components/Icons/Github";
import "@components/Connect/connect.css";
import { LinkedIn } from "@components/Icons/LinkedIn";


const Connect = () => {
  return (
    <div className="connect">
      <p>Connect with me!</p>
      <div className="connectLinks">
        <HyperLink href="https://github.com/HenriJohansson" target={true} abbreviationOrIcon={GitHub} ></HyperLink>
        <HyperLink href="https://www.linkedin.com/in/henri-johansson-b24bb6237/" target={true} abbreviationOrIcon={LinkedIn} ></HyperLink>
      </div>
    </div>
  )
}
export default Connect;
