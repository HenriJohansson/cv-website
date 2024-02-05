import { getNewId } from "@functions/idGenerator";

type Props = {
  href: string,
  abbreviationOrIcon: string | {(): JSX.Element}
}
const HyperLink = (props: Props) => {

  let returnValue: JSX.Element;
  const setReturnJSX = (): JSX.Element => {
    if(typeof props.abbreviationOrIcon == "string"){
      returnValue = (
      <abbr className=".link">
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
      <a id={getNewId("link")} href={props.href} className="link" >
        {setReturnJSX()}
      </a>
    </>
  )
}

export default HyperLink;
