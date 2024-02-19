
import { getNewId } from "@functions/idGenerator";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  abbreviationOrIcon: string | {(): JSX.Element},
  id?: string,
}
const ActionLink = (props: Props) => {

  let returnValue: JSX.Element;
  const setReturnJSX = (): JSX.Element => {
    if(typeof props.abbreviationOrIcon == "string"){
      returnValue = (
      <abbr className="link">
        {props.abbreviationOrIcon}
      </abbr>
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
      <button id={props.id ? props.id : getNewId("link")} onClick={props.onClick} className="link" >
        {setReturnJSX()}
      </button>
    </>
  )
}

export default ActionLink;
