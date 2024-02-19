import { getNewId } from "@functions/idGenerator";
import { MouseEventHandler } from "react";

type Props = {
  href: string,
  abbreviationOrIcon: string | {(): JSX.Element},
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>,
  id?: string,
  children?: React.ReactNode;
}
const HyperLink = (props: Props) => {

  let returnValue: JSX.Element;
  const setReturnJSX = (): JSX.Element => {
    if(typeof props.abbreviationOrIcon == "string"){
      returnValue = (
      <>
      <abbr className=".link">
        {props.abbreviationOrIcon}
      </abbr>
      </>
      );
    } else {
      returnValue = (
      <>
        <props.abbreviationOrIcon></props.abbreviationOrIcon>
      </>
      );
    }
    return returnValue
  }

  return (
    <>
      <a id={props.id ? props.id : getNewId("link")} href={props.href} className="link" onMouseEnter={props.onMouseEnter}>
        {setReturnJSX()}
      </a>
      {props.children}
    </>
  )
}

export default HyperLink;
