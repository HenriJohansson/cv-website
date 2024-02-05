import styles from "@styles/modules/icons.module.css"
import { getNewId } from "@functions/idGenerator";
import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  abbreviationOrIcon: string | {(): JSX.Element}
}
const ActionLink = (props: Props) => {

  let returnValue: JSX.Element;
  const setReturnJSX = (): JSX.Element => {
    if(typeof props.abbreviationOrIcon == "string"){
      returnValue = (
      <abbr className={styles.link}>
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
      <button id={getNewId("link")} onClick={props.onClick} className="link" >
      {setReturnJSX()}
      </button>
    </>
  )
}

export default ActionLink;
