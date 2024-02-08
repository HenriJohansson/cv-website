import { getNewId } from "@functions/idGenerator";

type Props = {
  href: string,
  abbreviationOrIcon: string | {(): JSX.Element},
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
      {props.children}
      </>
      );
    } else {
      returnValue = (
      <>
        <props.abbreviationOrIcon></props.abbreviationOrIcon>
        {props.children}
      </>
      );
    }
    return returnValue
  }

  return (
    <>
      <a id={props.id ? props.id : getNewId("link")} href={props.href} className="link">
        {setReturnJSX()}
      </a>
    </>
  )
}

export default HyperLink;
