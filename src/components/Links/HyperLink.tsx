import { getNewId } from "@functions/idGenerator";
import { MouseEventHandler } from "react";
import React from "react";

type Props = {
  href: string,
  abbreviationOrIcon: string | {(): JSX.Element},
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>,
  target?: boolean,
  className?: string,
  id?: string,
  children?: React.ReactNode,
}
const HyperLink = (props: Props) => {

  let returnValue: JSX.Element;
  const setReturnJSX = (): JSX.Element => {
    if(typeof props.abbreviationOrIcon == "string"){
      returnValue = (
      <>
      <abbr>
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
      <a id={props.id ? props.id : getNewId("link")} href={props.href} className={props.className ? props.className : "link"} onMouseEnter={props.onMouseEnter} target={props.target ? "_blank" : ""}>
        {setReturnJSX()}
      </a>
      {props.children}
    </>
  )
}

export default HyperLink;
